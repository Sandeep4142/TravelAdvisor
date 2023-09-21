import React from 'react'
import { Rating } from '@mui/material';
import { forwardRef } from 'react';

const PlaceDetails = ({place,selected},ref) => {

   
  if(selected) ref?.current?.scrollIntoView({behavior:'smooth',block:'start'})

  
  // if(Number(place.location_id)!==297661){
    // console.log(place.location_id)

  return (
    <>
    <div ref={ref} className="card" style={{width: '100%'}}>
      <img src={place.photo?place.photo.images.large.url:'https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?w=900&t=st=1690574665~exp=1690575265~hmac=07cd9f72a27de0515b34c7944baca54b6d06f0a0100dad6a103357d99ad0e4d2'} className="card-img-top" alt="..."/>
      
      <div className="card-body">
          <h5>{place.name}</h5>
          {place?.rating?(
            <div  className="d-flex justify-content-between">
              <Rating value={Number(place.rating)} readOnly />
              <h6 className="card-subtitle mb-2 text-body-secondary">out of {place.num_reviews}</h6>
            </div>
          ):null}
          <div className="d-flex justify-content-between">
              <h6 className="card-subtitle mb-2 text-body-secondary">Price</h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">{place.price?place.price:'__'}</h6>
          </div>
          <div className="d-flex justify-content-between">
              <h6 className="card-subtitle mb-2 text-body-secondary">Ranking</h6>
              <h6 className="card-subtitle mb-2 text-body-secondary">{place.ranking?place.ranking:'__'}</h6>
          </div>

          {place?.awards?.map((award)=>(
            <div key={award} className="d-flex justify-content-between">
              <img src={award.images.small} alt={award.display_name}/>
              <h6 className="card-subtitle mb-2 text-body-secondary">{award.display_name}</h6>
            </div>
          ))}

          {place?.cuisine?.map(({name,index})=>(
            <span key={index} className="m-1 badge rounded-pill text-bg-secondary">{name}</span>
          ))}

          {place?.address && (
            <div className="d-flex justify-content-between">
            <i className="bi bi-geo-alt-fill"></i>
            <h6 className="card-subtitle mb-2 text-body-secondary">{place.address}</h6>
        </div>
          )}

          {place?.phone && (
            <div className="d-flex justify-content-between">
            <i className="bi bi-telephone-fill"/>
            <h6 className="card-subtitle mb-2 text-body-secondary">{place.phone}</h6>
           </div>
          )}

          <div className='mt-1'>
          <button type="button" className="btn mr-1" onClick={()=>window.open(place.web_url,'_blank')}>Trip Advisor</button>
          <button type="button" className="btn mr-1" onClick={()=>window.open(place.website,'_blank')}>Website</button>
          </div>

      </div>
    </div>
    </>
  )
          
}

export default forwardRef(PlaceDetails)
