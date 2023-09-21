import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


// let classes={
//   paper: {
//     padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
//   },
//   mapContainer: {
//     height: '85vh', width: '100%',position: 'relative'
//   },
//   markerContainer: {
//     position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1,
//   },
//   pointer: {
//     cursor: 'pointer',
//   },
// }






const Map = ({setCoordinates,setBounds,coordinates,places,setChildClicked}) => {
  
  

  return (
    <div className='container-fluid' style={{ height: '85vh', width: '100%' }}>
        
        
        <GoogleMapReact
        
            bootstrapURLKeys={{key:process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={''}
            onChange={(e)=>{
              setCoordinates({lat:e.center.lat, lng:e.center.lng});
              setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
            }}
            // onChildClick={()=>(alert('Child Clicked'))}
        >

      
            {places?.map((place,i)=>(
                // <div style={{position:'relative'}}>

              <Marker
                key={i} 
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                // lat={place.geometry.location.lat}
                // lng={place.geometry.location.lng}
                place={place}
                setChildClicked={setChildClicked}
                
                />

            ))}





        </GoogleMapReact>
    </div>
  )
}

export default Map



{/* <div>
            {places?.map((place,i)=>(
                // <div style={{position:'relative'}}>

              <div 
                key={i} 
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                // style={{position: 'absolute', transform: 'translate(-50%, -50%)'}}
                >

                    {
                      isMobile?(
                        <i className="bi bi-geo"></i>
                      ):(
                        <div className="card" style={{width: '5rem'}}>
                            <h6 className="text-center card-subtitle text-body-secondary">{place.name}</h6>
                            <img src={place.photo?place.photo.images.large.url:'https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?w=900&t=st=1690574665~exp=1690575265~hmac=07cd9f72a27de0515b34c7944baca54b6d06f0a0100dad6a103357d99ad0e4d2'} className="card-img-top" alt="..."/>
                            
                                 <p className=" text-center card-text">{Number(place.rating)}</p>
                            
                        </div>
                        
                      )
                    }
              </div>
              // </div>
          
            ))}

            </div>
 */}
