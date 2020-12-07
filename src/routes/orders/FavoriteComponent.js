import React from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
let keys = ["Order Id","Order Name", "Price", "Number of items","Image"];

class FavoriteOrderComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            orderList: []
    }
}
    componentDidMount() {
        axios.get('http://demo4485772.mockable.io/getAllFavouriteOrders').then(response => {
            this.setState({ orderList: response.data.orderList })
            console.log(this.state.orderList)

        })
    }
    render() {
        return (
            <div>
                <h1>Favorites</h1>
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
                        {this.state.orderList.map((order, id) => {
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
            </div>
        )
    }
}
export default FavoriteOrderComponent;