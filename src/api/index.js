import axios from 'axios'

// const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData=async(type,sw,ne)=>{
    
    try{
        //request
        const {data:{data}}=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              
            },
            headers: {
              // 'X-RapidAPI-Key': 'afbfecd12emshecc70e2a18b85f0p1201e1jsn41532968233d',
              // 'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'

              // 'X-RapidAPI-Key': '9f1704cb7amshf844e57ba9fbcffp1b3792jsn0ae50b2d7109',
              //  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'

              // 'X-RapidAPI-Key': '1aca7e74abmsh0fc2bfa0013016ep1bc143jsnf76d55b8b3a5',
              // 'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'

              'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'

             }
          });
        return data;
    }catch(error){
        console.log(error)
    }
}