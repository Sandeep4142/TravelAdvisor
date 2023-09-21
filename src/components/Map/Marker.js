import React, { useState } from 'react'
import './Marker.css'

function detectMob() {
    return ( ( window.screen.width <= 800 ) || ( window.screen.height <= 600 ) );
  }


const isMobile=detectMob()
// console.log(isMobile)


const Marker = ({place,setChildClicked}) => {

    const [displayBox,setDisplayBox]=useState(false)
    // const style = '&:hover' ?greatPlaceStyle2: greatPlaceStyleHover2 ;
    // const hoverCl=$hover?"hover":"nohover"
  return (
    <>
    <div onClick={()=>setChildClicked(place.location_id)} onMouseEnter={()=>setDisplayBox(true)}>

       {isMobile?(<h3><i class="bi bi-geo-fill text-danger"></i></h3>
                      ):(

                        <div style={{position:'relative'}} onMouseLeave={()=>setDisplayBox(false)}>
                          <h3><i className="bi bi-geo-alt-fill text-danger"></i></h3>
                          {displayBox?(
                            <div className="card box" style={{zIndex:'2',position:'absolute',bottom:'30px',left:'-30px',bpadding: '3px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '7rem'}} >
                                 <h6>{place.name}</h6>
                                 <img src={place.photo?place.photo.images.large.url:'https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?w=900&t=st=1690574665~exp=1690575265~hmac=07cd9f72a27de0515b34c7944baca54b6d06f0a0100dad6a103357d99ad0e4d2'} className="card-img-top" alt="..."/>
                                 {/* <Rating size="small" value={Number(place.rating)} readOnly /> */}
                             </div>
                          ):null
                            
                          }
                        </div>
                        
                        

        // <div className="card box" style={{ padding: '3px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '7rem'}} >
        //     <h6>{place.name}</h6>
        //     <img src={place.photo?place.photo.images.large.url:'https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?w=900&t=st=1690574665~exp=1690575265~hmac=07cd9f72a27de0515b34c7944baca54b6d06f0a0100dad6a103357d99ad0e4d2'} className="card-img-top" alt="..."/>
        //     {/* <Rating size="small" value={Number(place.rating)} readOnly /> */}
        // </div>
                        )
}
      
    </div>
    </>
  )
}

export default Marker
