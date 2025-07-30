import { useEffect, useState } from "react"

let useMenu =()=>{
    let [Menu,Setmenu]= useState([])
    let [Loading,SetLoading]= useState(true)


        useEffect(()=>{
           fetch('http://localhost:3200/Menu-Data')
           .then(res => res.json())
           .then(data=>{
   Setmenu(data)
   SetLoading(false)
           })
        },[])
        return [Menu,Loading]
}
export default useMenu