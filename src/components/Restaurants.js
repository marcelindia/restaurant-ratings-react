import { useState, useEffect } from "react";
import BasicRating from "./Ratings";
import { Card, CardActionArea, CardContent } from "@mui/material";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  console.log(restaurants);
  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch(alert);
  }, []);
  return (
    <div>
      {!restaurants ? (
        <h2>Loading...</h2>
      ) : (
        <div style={{ textAlign: "center" }}>
          {restaurants.map((restaurant) => {
            return (
              <Card>
                <CardActionArea>
                  <CardContent
                    style={{
                      marginTop: 50,
                      marginBottom: 50,
                      marginLeft: 50,
                      marginRight: 50,
                      backgroundColor: "paleturquoise",
                    }}
                  >
                    <h2 style={{ backgroundColor: "lavender" }}>
                      {restaurant.name}
                    </h2>
                    <img src={restaurant.photoUrl} width="400" height="400" />
                    <BasicRating
                      setRestaurants={setRestaurants}
                      rating={restaurant.rating}
                      id={restaurant.id}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Restaurants;
