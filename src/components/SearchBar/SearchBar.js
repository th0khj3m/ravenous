import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import Business from "../Business/Business";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortingOption, setSortingOption] = useState("best_match");

  const getSortByClass = (sortByOption) => {
    if (sortingOption == sortByOption) {
      return styles.active;
    }
    return "";
  };

  const handleSortByChange = (sortByOption) => {
    setSortingOption(sortByOption);
  };

  const handleTermChange = ({target}) => {
    setTerm(target.value);
  }

  const handleLocationChange = ({target}) => {
    setLocation(target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault();
    // searchYelp(term, location, sortingOption)
  }

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={() => {
            handleSortByChange(sortByOptionValue);
          }}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <form onSubmit = {handleSearch}>
      <div className={styles.SearchBarFields}>
        <input placeholder="Search Businesses" onChange = {handleTermChange}/>
        <input placeholder="Where?" onChange = {handleLocationChange} />
      </div>
      <div className={styles.SearchBarSubmit}>
        <button type = "submit">Let's Go</button>
      </div>
      </form>
    </div>
  );
};

export default SearchBar;
