import React, { useEffect, useState } from 'react'
import {db} from "../firebase.js"
import { getDatabase,update, ref, child, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import "./Cert.css"
import Navbar1 from './navbar1';
import Table from 'react-bootstrap/Table';


export default function CertificateParticipants() {
  const [data,setdata]=useState()
  const [allow,setallow]=useState()
const dbRef = ref(getDatabase());
const navigate = useNavigate();
useEffect(() => {
  get(child(dbRef, 'cyber')).then((snapshot) => {
  
    if (snapshot.exists()) {
      let x=snapshot.val()
      let a = Object.values(x);
      setdata(a)
      setallow()

    
     
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}, [allow]) 
function Suc(e){
  let id=e.target.id
  console.log(id)
  update(ref(db,`/cyber/${id}`),{
    isParticipate:2
   }) 
   setallow("hi")
   


  console.log(e.target.id)
}
function fail(e){
  let id=e.target.id
  console.log(id)
  update(ref(db,`/cyber/${id}`),{
    isParticipate:1
   }) 
   setallow("hi")

}
console.log(data)
if(data) return (
  <div>

     <Navbar1/>
    <div className="container">
    <Table striped bordered hover className='certtb'>
     <thead>
        <tr>
          <th>Unique Id</th>
          <th>Name</th>
          <th>College</th>
          <th>Paper Pinnacle</th>
          <th>Pixel studio</th>
          <th>BlitzByte</th>
          <th>Web Vortex</th>
          <th>ConTacTix</th>
          <th>Lexi Charm</th>
          <th>Smirk</th>
        </tr>
      </thead>
      {
       (data.map((data)=>{
        if(data.isParticipate>=1) return <tbody className={data.isParticipate == 2 ? "act":"norm"}>
        <tr >
          <td>{data.userId}</td>
          <td>{data.name}</td>
          <td>{data.college}</td>
          <td>{data.paperPinnacle=== 2 ? "YES":"NO"}</td>
          <td>{data.pixelPlayground=== 2 ? "YES":"NO"}</td>
          <td>{data.blitzbyte=== 2 ? "YES":"NO"}</td>
          <td>{data.webVortex=== 2 ? "YES":"NO"}</td>
          <td>{data.conTacTix=== 2 ? "YES":"NO"}</td>
          <td>{data.lexiCharm=== 2 ? "YES":"NO"}</td>
          <td>{data.smirk=== 2 ? "YES":"NO"}</td>
         
          <td> <button className='btn o' id={data.userId}  onClick={Suc}>Given</button></td>
          <td><button className='btn t' id={data.userId} onClick={fail} >Not Given</button></td>
        
          {console.log(data.isParticipate)}

         
         </tr>
         </tbody>
          
          
       
        }))
      }
    </Table>
    </div>

    </div>
  )
}
