import React from 'react'
import Hero from '../components/Hero' 
import GetStarted from './Routing/GetStarted'
import { Router,Routes,BrowserRouter, Route } from 'react-router-dom'
import VideoDemo from './sections/VideoDemo' 
import Features  from './sections/Features'  
import How_its_work from './Routing/How_its_work'
import Dashboard from './Routing/Dashboard'
export default function App(){
  return(
    <>
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} /> 
        <Route path="/src/assets/Sample_Video.mp4" element={<VideoDemo/>}></Route>
        <Route path="/Features" element={<Features/>}></Route>
        <Route path="/HowItWorks" element={<How_its_work/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/GetStarted" element={<GetStarted/>}></Route>
      </Routes>
    </BrowserRouter>
       
        
        
    </>
  )
}