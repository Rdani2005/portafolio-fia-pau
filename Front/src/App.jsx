// import React from 'react'
import "./css/App.css"
import "./css/Slider.css"
import "./css/Profile.css"
import "./css/Cards.css"
import {CarouselOneData} from "./components/CarouselOneData"
import Carousel from './components/Carousel'
import Profile from './components/Profile'
const App = () => {
  return (
    <div>
      <Profile></Profile>
      <div>
        <h1>Trabajos Realizados</h1>
      </div>
      <Carousel slides={CarouselOneData} title="Tecnicas de Presentación y Modelos" ></Carousel>
      <Carousel slides={CarouselOneData} title="Dibujo Arquitectónico Asistido" ></Carousel>
      <Carousel slides={CarouselOneData} title="Dibujo Arquitectónico" ></Carousel>
    </div>
  )
}

export default App