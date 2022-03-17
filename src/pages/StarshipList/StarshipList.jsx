import { useState, useEffect } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipList = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(starshipData => setStarships(starshipData.results))
  }, [])


  return ( 
    <>
      <div>
        <h3>Starship List!</h3>
        {starships.map(starship => (
          <Link 
            to='/starship'
            key={starship.name}
            state={{starship}}
          >

            <h3>{starship.name}</h3>
          </Link>
        ))}

      </div>
    </>
   );
}
 
export default StarshipList;