
import { React, useState } from "react";
import Navbar from "./components/Navbar";
import OrderDetails from "./components/OrderDetails";

export default function App() {
  // Remove the dummyOrderData state
  const [orderData, setOrderData] = useState(null);


  const handleDataReceived = (data) => {
    setOrderData(data);
  };
 
  return (
    <>
      <h1 className="heading">SEARCH ORDER</h1>
      <Navbar onDataReceived={handleDataReceived} />
      <OrderDetails orderData={orderData} />
    </>
  );
}
