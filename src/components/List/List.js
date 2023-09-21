import React, { useState, useEffect, createRef, } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import { CircularProgress } from '@mui/material'




const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {



  const [elRefs, setElRefs] = useState([]);


  useEffect(()=>{
    const refs=Array(places?.length)?.fill().map((_,i)=>elRefs[i] || createRef());
    
    setElRefs(refs)
  },[places])


  return (
    <div className="container-fluid">
      <h4>Restaurants, Hotels & Attractions around you</h4>
      <br></br>

      {isLoading ? (
        <div style={{height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
           <CircularProgress size="5rem" />
          
        </div>
      ) : (
        <>

      
          <div className="row">
            <div className=" col-6 form-floating">
              <select
                className="form-select mb-3"
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                aria-label="Floating label select example"
              >
                {/* <option selected>Open this select menu</option> */}
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="attractions">Attractions</option>
              </select>
              <label htmlFor="type">Type</label>
            </div>

            <div className=" col-6 form-floating">
              <select
                className="form-select mb-3"
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                aria-label="Floating label select example"
              >
                <option value="">All</option>
                <option value="3">Avove 3.0</option>
                <option value="4">Above 4.0</option>
                <option value="4.5">Above 4.5</option>
              </select>
              <label htmlFor="rating">Rating</label>
            </div>
          </div>

          {/* grid  */}
          <div className="container">
            <div
              className="row"
              style={{ overflowY: "scroll", height: "70vh" }}
            >
              {places?.map((place, i) => (


                // (Number(place.location_id)!==297661?
            
                <div>

                  <div className="col-12 mb-5" key={place.location_id}>
                  <PlaceDetails
                    
                    place={place}
                    selected={childClicked == place.location_id}
                    ref={elRefs[i]}
                  />
                </div>
                </div>
                // :<></>)
                
                
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default List;
