import React from 'react'
import ServiceCard from './ServiceCard';
import {Col, col} from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData =[
  {
    imgUrl:weatherImg,
    title:'calculate weather',
    desc:'collect and process weather data information'
  },
  
    {
      imgUrl:guideImg,
      title:'Best Tour Guide',
      desc:'undertaking research and planning tours',
    },
    
      {
        imgUrl:customizationImg,
        title:'customization',
        desc:'Contextual  important visual information ',
      }
    
  
]

function ServiceList() {
  return (
    <>
    {
      serviceData.map((item,index)=><Col lg='3' key={index}><ServiceCard item={item}/></Col>)
    }
    </>
  )
}

export default ServiceList;