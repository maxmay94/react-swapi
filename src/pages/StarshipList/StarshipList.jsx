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
        <h1>Starship List!</h1>
        {starships.length ?
        <>
        {starships.map(starship => (
          <Link 
            to={`/starship-details`}
            key={starship.url}
            state={{ starship }}
          >
            <h3>{starship.name}</h3>
          </Link>
        ))}
        
        </>
        :
        <>
          <h2>Loading Starships!!</h2>
        </>
        }

      </div>
    </>
   );
}
 
export default StarshipList;