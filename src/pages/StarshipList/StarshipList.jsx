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
      <h1>Starship List</h1>
      <div className="starship-container">
        {starships.length ?
        <>
        {starships.map(starship => (
          <div 
            className="starship-card" 
            key={starship.url}
          >
            <Link 
              to={`/starship-details`}
              state={{ starship }}
            >
              <h5>{starship.name}</h5>
            </Link>
          </div>
        ))}
        
        </>
        :
        <>
          <div>
            <h2>Loading Starships!!</h2>
          </div>
        </>
        }

      </div>
    </>
   );
}
 
export default StarshipList;