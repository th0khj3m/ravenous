import React from "react";
import styles from "./App.module.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
  const yelpKey = "n2n9ER416YCKMQm6WHriQFVk9gdmVCsS_2C-GA2k7ro7YX4N5hddnayxF19uiqtx0zL5AQ4sUNLcwLeYPlx6lq8eNMgd5d7_88gI1Po84DCCNhc6SHOCFfTLdw_oZHYx";
  const yelpBaseUrl = 'https://api.yelp.com/v3/businesses';
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <YelpApi yelpKey = {yelpKey} yelpBaseUrl = {yelpBaseUrl}/> 
      <BusinessList />
    </div>
  );
};

export default App;
