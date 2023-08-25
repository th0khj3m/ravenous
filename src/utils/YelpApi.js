import React, {useState, useEffect} from 'react';
import axios from "axios"; 


const YelpApi = ({yelpKey, yelpBaseUrl}) => {
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        const fetchBusinesses = async () => {
            const urlToFetch = `${yelpBaseUrl}/search`;
            const response = await axios.get(urlToFetch, {
            
            });
        }
    })
}