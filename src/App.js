import React,{useState, useEffect} from 'react'
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlacesData } from './api';


function App() {

  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [childClicked,setChildClicked]=useState(null);

  const [coordinates,setCoordinates]=useState({});
  const [bounds,setBounds]=useState({});

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const[isLoading,setIsLoading]=useState(false)


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude, lng:longitude});
      
    })
  },[])


  useEffect(() => {
    if(places){
    const filtered = places?.filter((place) => Number(place.rating) > rating);
    
    setFilteredPlaces(filtered);
    }
  }, [rating]);

  useEffect(()=>{
    if(bounds.sw && bounds.ne){
    setIsLoading(true);
    
    getPlacesData(type, bounds.sw,bounds.ne)
    .then((data)=>{
    
      setFilteredPlaces([])
      setPlaces(data?.filter((place)=>place.name && place.num_reviews>0));
      setIsLoading(false)
      
    })
  }
},[type,bounds]);
  return (
    <>
    <Header  
      setCoordinates={setCoordinates}
    />
    <div className="row" >
      
    <div className="col-md-4 col-sm-12">
      <List 
          places={filteredPlaces.length ? filteredPlaces : places}
          childClicked={childClicked}
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}

          />
    </div>
    <div className="col-md-8 col-sm-12">
      <Map 
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
        places={filteredPlaces.length ? filteredPlaces : places}
        setChildClicked={setChildClicked}
        />
    </div>
    

  </div>
    
    </>
  );
}

export default App;
