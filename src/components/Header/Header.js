import { Autocomplete } from '@react-google-maps/api'
import React,{useState} from 'react'



const Header = ({setCoordinates}) => {


  const [autocomplete,setAutocomplete]=useState(null);
  const onLoad=(autoC)=>{
    setAutocomplete(autoC);
  }

  const onPlaceChanged=()=>{
    const latitude=autocomplete.getPlace().geometry.location.lat();
    const longitude=autocomplete.getPlace().geometry.location.lng();
    console.log(latitude,longitude)
    setCoordinates({lat:latitude, lng:longitude});
    // setCoordinates({lat,lng})
  }




  return (
    <div>
      <nav className="navbar bg-primary text-white navbar-expand-lg mb-2 "  >
  <div className="container-fluid">
    
      <h1>Travel Advisor</h1>

      
      <form className="d-flex" role="search">
      <h6>Explore New Places</h6>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </Autocomplete>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
  </div>
</nav>
    </div>
  )
}

export default Header
