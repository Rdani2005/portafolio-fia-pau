import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ObjectContext = createContext()

const ContextProvider = ({ children }) => {

    let [trabajos, setTrabajos] = useState([])

    let [modelos, setModelos] = useState([])

    let [asistido, setAsistido] = useState([])

    let [dibujo, setDibujo] = useState([])


    const getData = async () => {
        const res = await axios.get('http://127.0.0.1:8000/trabajos/api/')
        const data = res.data

        setTrabajos(data)

        setModelos(data.filter(data => data.tipo_trabajo === "TPYM"))
        setAsistido(data.filter(data => data.tipo_trabajo === "DAC"))
        setDibujo(data.filter(data => data.tipo_trabajo === "DA"))
    }

    useEffect(
        () => {
            getData()
        },[]
    )    

    return (
        <ObjectContext.Provider
            value={{
                trabajos,
                modelos,
                asistido,
                dibujo

            }}
        >
            {children}
        </ObjectContext.Provider>
    )
}

export { ContextProvider, ObjectContext } 