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
      <h1>Starship Details!</h1>
      <div>

        {starshipDetails.length?
        <>
          <div className="detail-div">
            <h2>Name: {starshipDetails.name}</h2>
            <h4>Model: {starshipDetails.model}</h4>
            <h4>Crew: {starshipDetails.crew}</h4>
            <a href="/">Return</a>
          </div>
        </>
        :
        <>
         <h2>Loading Ship Deatails!!!</h2>
        </>
        }
      </div>
    </>
   );
}
 
export default StarshipDetails;