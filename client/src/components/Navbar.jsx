import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ onDataReceived }) => {
  const [inputContent, setInputContent] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputContent(newValue);
    console.log("Input Content:", newValue); // Log current input content
  };

  const handleRadioChange = (event) => {
    const newValue = event.target.value;
    setSearchCriteria(newValue);
    console.log("Search Criteria:", newValue); // Log current search criteria
  };
 const url=`http://localhost/ordersManage/index.php?searchCriteria=${searchCriteria}&query=${inputContent}`
  const fetchData = async () => {
    try {
      if (!inputContent.trim()) {
        toast.error("Please enter a search query");
        return;
      }
      const response = await fetch(url);
      const data = await response.json();
      onDataReceived(data[0]); // Pass data to parent component
   
      setInputContent(""); // Clear input after search
      toast.success("Data fetched successfully!"); // Display success toast
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data. Please try again."); // Display error toast
    }
  };

  return (
    <div className="container">
      <div className="search-container">
        <p className="border-text">Search Order</p>
        <p className="search-title">By:</p>
        <div className="search-options">
          <input
            type="radio"
            id="orderIdRadio"
            name="searchCriteria"
            value="order_id"
            checked={searchCriteria === "order_id"}
            onChange={handleRadioChange}
          />
          <label htmlFor="orderIdRadio">Order ID</label>
          <input
            type="radio"
            id="mobileRadio"
            name="searchCriteria"
            value="Mobile"
            checked={searchCriteria === "Mobile"}
            onChange={handleRadioChange}
          />
          <label htmlFor="mobileRadio">Mobile</label>
          <input
            type="radio"
            id="nameRadio"
            name="searchCriteria"
            value="Name"
            checked={searchCriteria === "Name"}
            onChange={handleRadioChange}
          />
          <label htmlFor="nameRadio">Name</label>
          <input
            type="radio"
            id="emailRadio"
            name="searchCriteria"
            value="Email"
            checked={searchCriteria === "Email"}
            onChange={handleRadioChange}
          />
          <label htmlFor="emailRadio">Email</label>
          {/* Add more radio buttons as needed */}
        </div>
        <input
          type="text"
          id="searchInput"
          placeholder="Search..."
          className={inputContent ? "has-content" : ""}
          value={inputContent}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={fetchData}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
