import React, { Component } from 'react';
import {httpGet} from '../api/apiHelper.js'
  import 'css/style.css';
   import 'bootstrap/dist/css/bootstrap.min.css'
import CardBlock from '../cards/cardUI.js'
import CategoryFilter from './filters/categoryFilter'
import PriceFilter from './filters/priceFilter';
export default class ProductList extends Component {

  constructor(props) {
    super(props);

    this.state={
      datas : [],
      loading: 'initial',
      categories : [],
      filteredData : null,
      filteredCategories : [],
      minVal : 0,maxVal: 0,
      searchTerm : ''
    };
}

getDataSource(){
  return ((this.state.filteredData != null && this.state.filteredData.length > 0) ? 
  this.state.filteredData : this.state.datas);
}
sortData = (e)=>{
  debugger;
  if(e.target.value === 'category'){
    this.setState({
      filteredData: 
      this.state.datas.sort((a,b) => (a.category > b.category) ? 1 :
       ((b.category > a.category) ? -1 : 0))
    })
  }
  else   if(e.target.value === 'price'){
    this.setState({
      filteredData: 
      this.state.datas.sort((a,b) => (a.price > b.price) ? 1 :
       ((b.price > a.price) ? -1 : 0))
    })
  }
  else
  {
    this.setState({
      filteredData: this.state.datas
    })
  }
}



    getProduct(product, index) {
        return (
                <CardBlock product = {product} index = {index}/>
        )
    }

    editSearchTerm = (e)=>{
      this.setState({
        editSearchTerm: e.target.value,
        filteredData : e.target.value.length > 0 ?
         this.state.datas.filter(x=>x.title.toLowerCase().includes(e.target.value.toLowerCase())):
         this.state.datas
      })
    }

    onMinValChange(val){
      this.setState({filteredData:
        this.state.datas.filter(x=>parseInt(x.price) >= val &&
        (parseInt(this.state.maxVal) > 0 ?  parseInt(x.price) <= parseInt(this.state.maxVal) : true)),
      minVal : !isNaN(val) ? val : 0});
    }

    onMaxValChange(val){
      this.setState({filteredData:
        this.state.datas.filter(x=>parseInt(x.price) <= val && 
        ((parseInt(this.state.minVal) > 0 && this.state.minVal < val)? 
         parseInt(x.price) >= parseInt(this.state.minVal) : true)),
      maxVal : !isNaN(val) ? val : 0});
    }

    componentWillMount()
    {
      let self = this;
      httpGet('https://fakestoreapi.com/products').then(function(data){
        debugger;
        var categories = [];
        data.map(item => {                  
            var findItem = categories.find(x => x === item.category);
            if (!findItem)
            categories.push(item.category);
            return categories;
        });

        self.setState({datas:data,
          loading: 'false',   
           categories : categories});
    
      })
    }

    render() {
      if (this.state.loading === 'initial') {
      
        return <h2 style={{textAlign:'center',top:'50px',left:'50px',
      marginLeft:'50px',marginTop:'250px'}}>Intializing...</h2>;
      }
      else if (this.state.loading === 'true') {
        return <h2>Loading...</h2>;
      }
      else if (this.state.loading === 'false') {
        return (
            <>

            
                <div>
                    {

<div id="main">

  <div id="sidebar">
  <CategoryFilter  categories = {this.state.categories} onChange = {(val)=>{
       let self = this;
       debugger;
       if(this.state.filteredCategories.indexOf(val) === -1)
       this.state.filteredCategories.push(val);
       else
       this.state.filteredCategories.splice(
        this.state.filteredCategories.findIndex(x=>x === val) ,1);

       self.setState({filteredData:
      this.state.datas.filter(item=>
         this.state.filteredCategories.includes(item.category)
      )
      });

  }}/>
  <PriceFilter onMinValChange = {(val)=> this.onMinValChange(parseInt(val))}
  onMaxValChange = {(val)=> this.onMaxValChange(parseInt(val))}/>
  </div>
  <div id="page-wrap">

  <div class="form-row">
  Result count - {this.getDataSource().length}
     <label style={{marginLeft:'70px',marginRight:'15px'}}  for="name">Search </label>
     <input type="text" class="form-control"  style={{width:'150px',marginBottom:'25px'}}
     onChange = {this.editSearchTerm} />
     <label style={{marginLeft:'40px',marginRight:'15px'}}  for="name">Sort </label>
     <select class="browser-default custom-select" style={{width:'150px'}}
     onChange= {this.sortData}>
  <option selected>-- Select -- </option>
  <option value="category">Category</option>
  <option value="price">Price</option>
</select>
  </div>

  <div class="row">
  {
this.getDataSource().map((product, index) => {
          return this.getProduct(product, index);
      })
  }
  </div>
  </div>

</div>
              
                    }
                </div>
            </>
        );
                  }
    }
}

