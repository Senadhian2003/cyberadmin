import React from 'react'

import { useState } from 'react';

import Navbar2 from './Navbar2';
import { getDatabase, ref, child, get, update } from "firebase/database";
import "../firebase.js"
export default function Verification(){
  const [id,setid]=useState("")
  
   
    
    const [event,setevent]=useState("Attendance")
    console.log("senthajiji")
    function verifyUser(e){
        setevent(e.target.id);
        console.log(id)
        console.log("hi",event)
        
        if(id.length!=0){
            
        const dbRef = ref(getDatabase());
        get(child(dbRef, `cyber/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
            const db = getDatabase();
           
              console.log("hi")
                update(ref(db,`/cyber/${id}`),
                {
                  isParticipate:1
                })
                alert("Success❤")
            
            
        }
        else {
            alert("No data available 🤷‍♂🤷‍♂")
        }
}).catch((error) => {
  console.error(error);
});

        }
    else{
        alert("Enter valid Id 👺👺")
    }

setid("")

        
    }
    function prevent(e){
      e.preventDefault();
    }
  return (
    <div>
        <Navbar2/>
        <h1>Attendance</h1>
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
                <button className="btn btn-info buton " id="Attendance" onClick={verifyUser} style={{color:'white'}} > Verify </button> 
                
              </div>
            
            

           
           
            
           

          </div>
          </div>

    </div>
  )
}
