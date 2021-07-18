import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
let keys = ["Order Id", "Order Name", "Price", "Number of items", "Image"];

const FavoriteOrderComponent = (props) => {
    const [orderState, setorderState] = useState({ orderList: [] })


    useEffect(() => {
        axios.get('http://demo4485772.mockable.io/getAllFavouriteOrders').then(response => {
            setorderState({ orderList: response.data.orderList })
            console.log(orderState.orderList)

        })
    },[])
    // render() {
    return (
        <div>
            <h1>Parked Orders</h1>
            {/* <div class="input-group add-on">
                    <input class="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" />
                    <div class="input-group-btn">
                        <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                    </div>
                </div> */}
            <Table
                variant="default"
                style={{ width: "100%", margin: "20px auto", color: 'black' }}
                striped
                bordered
                responsive
            >

                <thead>
                    <tr>
                        {keys.map(heading => {
                            return <td key={heading}>{heading}</td>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {orderState.orderList.map((order, id) => {
                        return (
                            <tr key={id}>
                                <td>{order.id}</td>
                                <td>{order.item}</td>
                                <td>{order.price}</td>
                                <td>{order.number}</td>
                                <td className="w-25">
                                    <img src={order.thumbnailUrl} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div >
    )
}
// }
export default FavoriteOrderComponent;