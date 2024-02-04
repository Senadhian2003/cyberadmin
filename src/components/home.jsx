import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import data from "./data";
import Navbar from './navbar';
import { getDatabase, ref, child, get, update } from "firebase/database";
import "../firebase.js"
export default function Home() {
  const [id,setid]=useState("")
  
    let k = useParams()
    let detail = data[k.id]
    
    const [event,setevent]=useState(detail.btnId)
   
    function verifyUser(e){
        setevent(e.target.id);
        console.log(id)
        console.log("hi",event)
      
       if(id.length!=0){
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
            const db = getDatabase();
            alert("Success 👌👌👌👌")
            
            if(event=="PythonCoding")
            {
              console.log("hi")
                update(ref(db,`/users/${id}`),
                {
                  PythonCoding:1,
                  isParticipate:1
                })
             }
             else if(event=="PaperPresentation")
            {
                console.log("jojoj")
                update(ref(db,`/users/${id}`),
                {
                  PaperPresentation:1,
                  isParticipate:1
                })
             }
            else if(event=="SoloCompile")
            {
                update(ref(db,`/users/${id}`),
                {
                  SoloCompile:1,
                  isParticipate:1
                })
             }
            else if(event=="CaptureTheFlag")
            {
                update(ref(db,`/users/${id}`),
                {
                  CaptureTheFlag:1,
                  isParticipate:1
                })
             }
            else if(event=="OptimizeCoding")
            {   console.log("triggered")
                update(ref(db,`/users/${id}`),
                {
                  OptimizeCoding:1,
                  isParticipate:1
                })
             }
             else if(event=="Connections")
            {
                update(ref(db,`/users/${id}`),
                {
                  Connections:1,
                  isParticipate:1
                })
             }
             else if(event=="ShipWreck")
            {
                update(ref(db,`/users/${id}`),
                {
                  ShipWreck:1,
                  isParticipate:1
                })
             }
             else if(event=="TreasureHunt")
            {
                update(ref(db,`/users/${id}`),
                {
                  TreasureHunt:1,
                  isParticipate:1
                })
             }
           
            
        }
        else {
            alert("No data available 🤷‍♂🤷‍♂")
        }
}).catch((error) => {
  console.error(error);
});

       }
       else{
        alert("Enter valid detail 😒😒😒")
       }

setid("")

        
    }
    function prevent(e){
      e.preventDefault();
    }
  return (
    <div>
        <Navbar id={k.id}/>
        <h1> {detail.name} </h1>
        <div className="container">
        <div className="outer">
            <h2 style={{textAlign : 'center'}}>Verification</h2>
            <div className="input-group mb-3 w-75 input">
             
             <input
                type="text"
                className="form-control"
                placeholder="User ID"
                id="name"
                value={id}
                onChange={(e)=>{setid(e.target.value)}}
              />
              </div>
              
              <div className="d-grid gap-2 col-6 mx-auto button">
                <button className="btn btn-info buton " id={detail.btnId} onClick={verifyUser} style={{color:'white'}} > Verify </button> 
                
              </div>
            
            

           
           
            
           

          </div>
          </div>

    </div>
  )
}
