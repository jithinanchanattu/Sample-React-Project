import React, { Component } from 'react'


class CategoryFilter extends Component {
  constructor( props ) {
    debugger;
    super( props );
    console.log(props);
    this.state = {

    }
    this.categoryChange = this.categoryChange.bind(this);
  }

  categoryChange (ev){
    console.log(ev.target.value);
  }
render() {

    return (
      <div>
  <section filter="condition" class="mb-4" style={{marginLeft:'40px'}}>
    <h6 class="font-weight-bold mb-3">Category</h6>
    {this.props.categories.map(item=>
        <div class="form-check pl-0 mb-3">
        <input
          type="checkbox"
          label={item}
          value={item}
          class="filter-option form-check-input filled-in"
          condition={item}
          id={item}
          key={item}
          onChange={(event)=> this.props.onChange(event.target.value)}
        />
        <label
          class="form-check-label small text-uppercase card-link-secondary"
          for={item}
          >{item}</label
        >
      </div>
  
  
      )}

  </section>

      </div>
    )
  }
}
export default CategoryFilter