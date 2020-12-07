import React from 'react';
import { Card, CardImg, CardText,
    CardTitle, CardSubtitle, Button, CardBody } from 'reactstrap';
const CardBlock = ({ product,index })=> {
    return (

        <div class="column mr-20" key={index}>     
        <div className="card text-center" style={{display: 'inline-block',
           verticalAlign: 'top',height:'400px'}} key={index}> 
            <div className='overflow'>
            <Card style={{width: '200px'}}>
                  <CardImg top style={{width:'150px',height:'150px'}} src={product.image}  alt="Card image cap" />
                  <CardBody style={{width:'100px'}} className='card-body text-dark'>
                    <CardTitle style={{width: '150px',height:'100px',
                 overflow: 'hidden',textOverflow:'ellipsis'}}>{product.title}</CardTitle>
                    <CardSubtitle>{product.categorey}</CardSubtitle>
                    <CardText className='card-text text-secondary'>$ {parseInt(product.price)}</CardText>
            
                  </CardBody>
                  <Button color="danger">Add to cart</Button>
                </Card>
            </div>
            </div>
          </div>)
           
}

export default CardBlock;