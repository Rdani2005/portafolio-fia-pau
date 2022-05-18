import React from 'react'
import Trabajos from '../components/Trabajos'

import { useContext } from 'react'
import { ObjectContext } from '../context/Context'

import { FiInstagram } from 'react-icons/fi'
const Home = () => {

    const { trabajos, modelos, asistido, dibujo } = useContext(ObjectContext)


    return (
        <main>
            {/* Pequeña introduccion a Paula */}
            <section className="paula" >
                <div className="container">
                    <div className="row centered">
                        <h1>Paula Hernandez</h1>
                        <p>Arquitecta | Hernandezpau2004@gmail.com</p>
                    </div>
                </div>
            </section>

            {/* About me */}
            <section className="about">
                <div id="intro">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-2 col-lg-offset-1">
                                <h5>Acerca de mi</h5>
                            </div>
                            <div className="col-lg-6">
                                <p>Soy una estudiante destacada de la especialidad de dibujo arquitectonico.</p>
                            </div>
                            <div className="col-lg-3">
                                <a href="http://instagram.com/ph_designerbuild" className='text-white icons'><FiInstagram/></a>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
            <Trabajos titulo="Trabajos en General" objetos={trabajos} identificacion="general"></Trabajos>
            <Trabajos titulo="Tecnicas de Presentacion de Modelos" objetos={modelos} identificacion="modelos"></Trabajos>
            <Trabajos titulo="Dibujo Asistido por Computadora" objetos={asistido} identificacion="compu"></Trabajos>
            <Trabajos titulo="Dibujo Arquitectonico" objetos={dibujo} identificacion="arqui"></Trabajos>

        </main>
    )
}

export default Home