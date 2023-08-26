const yelpKey =
  "n2n9ER416YCKMQm6WHriQFVk9gdmVCsS_2C-GA2k7ro7YX4N5hddnayxF19uiqtx0zL5AQ4sUNLcwLeYPlx6lq8eNMgd5d7_88gI1Po84DCCNhc6SHOCFfTLdw_oZHYx";

const YelpApi = (term, location, sortByOption) => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortByOption}`,
    {
      headers: {
        Authorization: `Bearer ${yelpKey}`,
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Kem!");
    })
    .then((jsonResponse) => {
      return jsonResponse.businesses.map((business) => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count,
      }));
    });
};

export default YelpApi;
