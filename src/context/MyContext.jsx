import { createContext, useEffect, useState } from "react";  

export const MyContext = createContext()

const MyContextProvider = ({children})=>{
const [data, setData]=useState(null)
const globalState = {data,setData}

const PHOTO_URL = "/photos.json";

 useEffect(()=> {
    const fetchData = async () => {
        try {
            const response = await fetch(PHOTO_URL)
            if(!response.ok){
                throw new Error('No se obtienen resultados de')
            }
            const dataFetch = await response.json()
            setData(dataFetch)
            
        } catch (error) {
            console.error('ha ocurrido un error',error)
        }
    }
    fetchData()
    
    
 },[]

 )
 console.log(data)
    return (

        <MyContext.Provider value = {globalState}>

            {children}

        </MyContext.Provider>
    )
}

export default MyContextProvider

 