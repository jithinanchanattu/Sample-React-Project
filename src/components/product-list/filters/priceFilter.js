import React, { Component } from 'react'


class PriceFilter extends Component {
  constructor( props ) {
    super( props );
    this.state = {

    }
  }



render() {

    return (
        <section filter="condition" class="mb-4" style={{marginLeft:'40px'}}>
               <h6 class="font-weight-bold mb-3">Price</h6>
        <div class="input-group">
            <input
            autoComplete='off'
        type="text"
        name="min"
        style={{width:'70px',marginRight:'10px'}}
         placeholder='$'
        onChange = {(event)=> this.props.onMinValChange(event.target.value)}
      />
            <span class="input-group-addon">to</span>

          <input  autoComplete='off'
        type="text"
        name="max"
        style={{width:'70px',marginLeft:'10px'}}
         placeholder='$'
        onChange = {(event)=> this.props.onMaxValChange(event.target.value)}
      />
        </div>
        </section>
    )
  }
}
export default PriceFilter