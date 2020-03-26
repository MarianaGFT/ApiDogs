import React,{useEffect, useState} from 'react';
import { Card,Cascader, Row, Col } from 'antd';
import "antd/dist/antd.css";

const { Meta } = Card;

function App() {

  const options= [
    {
      value: 'beagle',
      label: 'Beagle',
    },
    {
    value: 'husky',
    label: 'Husky',
    },
    {
      value: 'chihuahua',
      label: 'Chihuahua',
    },
    {
      value: 'pug',
      label: 'Pug',
    },
    {
      value: 'shiba',
      label: 'Shiba',
    },
    {
      value: 'labrador',
      label: 'Labrador',
    },
    {
      value: 'akita',
      label: 'Akita',
    },
    {
      value: 'malamute',
      label: 'Malamute',
    },
    {
      value: 'papillon',
      label: 'Papillon',
    },
    {
      value: 'mexicanhairless',
      label: 'Mexicanhairless',
    },
    {
      value: 'appenzeller',
      label: 'Appenzeller',
    }
  ]

  const[dogs,setDogs]=useState([]);
  const [dogType,setDogType]=useState("beagle");

   const obtenerDatosDeLaAPI = async ()=>{
   const result= await  fetch(`https://dog.ceo/api/breed/${dogType}/images`);
   const json= await result.json();
   setDogs(json.message);
  } 

  function onChange(value){
    if(value[0])
    setDogType(value[0]);
  }

  useEffect(()=>{
    obtenerDatosDeLaAPI()
  },[dogType]);


  return (
    <div>
    <Cascader  options={options} onChange={onChange}/>
    <Row>
    {dogs.map((dog,index)=>(
    <Col xs={24} md={12} lg={8}   key={index}>
     <Card
     hoverable
     style={{margin:10}}
     cover={<img alt="puppy" src={dog} style={{height:300,objectFit:'cover'}}/>}
   >
   <Meta title={dogType.toUpperCase()} />
   </Card>
   </Col>
    ))}
    </Row>
  </div>
  );
}

export default App;