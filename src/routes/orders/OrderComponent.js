import React from "react";
import { Table, Tabs, Tab } from "react-bootstrap";
import axios from "axios";
import ParkedOrderComponent from "../orders/ParkedOrderComponent"
import QuickOrderComponent from "../orders/QuickOrdersComponent";
import RecentOrderComponent from "../orders/RecentOrdersComponent";
import FavoriteOrderComponent from "../orders/FavoriteComponent";


class OrderComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            orderList: [],
            orderType: ''
        }
    }
    getParkedOrders(event) {
        this.setState({ orderType: event.target.id })
    }

    render() {
        return (

            <div >
                <Tabs defaultActiveKey="parked" id="uncontrolled-tab-example">
                    <Tab eventKey="parked" title="Parked Orders">
                        <ParkedOrderComponent />
                    </Tab>
                    <Tab eventKey="favorites" title="Favorites">
                        <FavoriteOrderComponent />
                    </Tab>
                    <Tab eventKey="recent" title="Recent Orders">
                        <RecentOrderComponent />
                    </Tab>
                    <Tab eventKey="quick" title="Quick Orders">
                        <QuickOrderComponent />
                    </Tab>

                </Tabs>
            </div>
        );
    };
}

export default OrderComponent;