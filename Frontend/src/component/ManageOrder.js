import React, { useEffect, useState } from "react";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Link } from "react-router-dom";
import axios from "axios";
import man from "./../imagess/man.png";
import "./ManageOrder.css";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function ManageOrder() {
  const [orders, setOrders] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/details/shippingitem").then((res) => {
      setOrders(res.data);
    });
  }, [orders]);

  const deleteShippingItem = (id) => {
    axios.delete(`http://localhost:3001/shippingitems/${id}`).then((res) => {
      console.log("item dleted");
    });
  };

  return (
    <div className="manageorder">
      <div className="addProduct__header">
        <p className="addProduct__header__logo">
          <SupervisorAccountIcon className="admin__logo" />
          <p>
            <span>A</span>dmin
          </p>
        </p>
        <Link to="/admin/additem" className="adminLink">
          <div className="manage__orders">
            <p>Add Product</p>
          </div>
        </Link>
      </div>
      {orders.length != 0 ? (
        orders.map((order) => {
          return (
            <div className="orders__card" key={order.idShippingAddress}>
              <div className="userData">
                <img src={man} alt="" />
                <div className="userData__info">
                  <p>
                    <span>name: </span> {order.name}
                  </p>
                  <p>
                    <span>phone: </span> {order.phone}
                  </p>
                  <p className="user__address">
                    <span>address: </span>
                    {order.area}, {order.address}, {order.city}, {order.state},
                    {order.pincode}
                  </p>
                </div>
              </div>
              <div className="itemOrdere_layer">
                {order.item.map((it) => {
                  return (
                    <div className="item__ordered" key={it.id}>
                      <img src={it.image} alt="" />
                      <div className="item__ordered__Info">
                        <p>
                          <span>product id:</span> {it.id}
                        </p>
                        <p>
                          <span>price :</span> ${it.price}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="item__price_paid">
                <div className="item__pricing">
                  <p>
                    <span>Total item ordered: </span> {order.item.length}
                  </p>
                  <p>
                    <span>Total amount Paid:</span> ${order.totalAmount}
                  </p>
                </div>

                <p className="confirm__order">
                  <span>Confirm/Delete order:</span>
                  <div className="confirm__icons">
                    <CheckCircleIcon className="confirmIcon" />
                    <CancelIcon
                      className="cancelICon"
                      onClick={() =>
                        deleteShippingItem(order.idShippingAddress)
                      }
                    />
                  </div>
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="elseconditon">no orders yet</h1>
      )}
    </div>
  );
}

export default ManageOrder;
