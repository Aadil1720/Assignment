import React from "react";

const OrderDetails = ( {orderData}) => {
  console.log("the data is", orderData);

  

  return (
    <>
      {orderData && (
        <div className="orders-container">
          <div className="order-details-container">
            <div className="order-details-row">
              <div className="order-date">
                <div>Date:</div>
                <div>{orderData.order_date}</div>
              </div>
              <div className="search-query">
                <div><p style={{color:"blue"}}>{orderData.Mobile}</p></div>
                <div><span style={{background:"green"}}> Prepaid</span></div>
              </div>
              <div className="buyer-details">
                <div>Buyer Details:</div>
                <div>Name: {orderData.Name}</div>
                <div>Email: {orderData.Email}</div>
              </div>
              <div className="payment-status">
                <div><p style={{color:"red"}}>Payment-awaiting:</p></div>
                <div><strong>Total amt: {orderData.payment_amt}</strong></div>
              </div>
              <button className="track-button">Track</button>
              <a href="#" className="invoice-link">
                Generate Invoice
              </a>
            </div>
          </div>
          {/* Product container */}
          <div className="product-container">
            <img
              src={""}
              alt="Product Image"
              className="product-image"
            />
            <div className="product-details">
              <h2>
                <a href="#">{orderData.product_name}</a>
              </h2>
              <div className="product-info">
                <div className="column">
                  <ul>
                    <li>Model: {orderData.product_model}</li>
                    <li>Price: {orderData.product_price}</li>
                    <li>Date: {orderData.product_date}</li>
                    <li>Discount: {orderData.product_discount}</li>
                  </ul>
                </div>
                <div className="column">
                  <ul>
                    <li>Qty: {orderData.product_qty}</li>
                    <li>Delivery Charge: {orderData.delivery_charge}</li>
                    <li>Status: {orderData.product_status}</li>
                    <li>Payment: {orderData.product_payment}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
