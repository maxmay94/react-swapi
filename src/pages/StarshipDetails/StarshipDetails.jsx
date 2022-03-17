import { useEffect, useState } from "react";
import { getStarshipDetails } from "../../services/sw-api";
import { useLocation } from "react-router-dom";

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getStarshipDetails(location.state.starship.url)
    .then(data => setStarshipDetails(data))
  })

  return ( 
    <>
      <div className="detail-div">
        <h1>Starship Details!</h1>

        {starshipDetails.length?
        <>
          <h2>Name: {starshipDetails.name}</h2>
          <h4>Model: {starshipDetails.model}</h4>
          <h4>Crew: {starshipDetails.crew}</h4>
        </>
        :
        <>
         <h2>Loading Ship Deatails!!!</h2>
        </>
        }
        <a href="/">Return</a>
      </div>
    </>
   );
}
 
export default StarshipDetails;