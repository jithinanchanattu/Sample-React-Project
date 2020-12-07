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
      minVal : 0,maxVal: 0
    };
}

getDataSource(){
  return ((this.state.filteredData != null && this.state.filteredData.length > 0) ? 
  this.state.filteredData : this.state.datas);
}

    getProduct(product, index) {
        return (
                <CardBlock product = {product} index = {index}/>
        )
    }

    onMinValChange(val){
      this.setState({filteredData:
        this.getDataSource().filter(x=>parseInt(x.price) >= val &&
        (parseInt(this.state.maxVal) > 0 ?  parseInt(x.price) <= parseInt(this.state.maxVal) : true)),
      minVal : !isNaN(val) ? val : 0});
    }

    onMaxValChange(val){
      this.setState({filteredData:
        this.getDataSource().filter(x=>parseInt(x.price) <= val && 
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
                {/* <h2 >Products</h2>
                <br/>
                <br/> */}
            
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

