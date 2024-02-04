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
        get(child(dbRef, `cyber/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log("jjojo")
            const db = getDatabase();
            alert("Success 👌👌👌👌")
            
            if(event=="Paper Pinnacle")
            {
              console.log("hi")
                update(ref(db,`/cyber/${id}`),
                {
                  paperPinnacle:2
                })
             }
             else if(event=="Pixel studio")
            {
                
                update(ref(db,`/cyber/${id}`),
                {
                  
                  pixelPlayground:2
                
                })
             }
            else if(event=="BlitzByte")
            {
                update(ref(db,`/cyber/${id}`),
                {
                  blitzbyte:2
                 
                })
             }
            else if(event=="Web Vortex")
            {
                update(ref(db,`/cyber/${id}`),
                {
                  webVortex:2
                })
             }
            else if(event=="ConTacTix")
            {   console.log("triggered")
                update(ref(db,`/cyber/${id}`),
                {
                  conTacTix:2
                })
             }
             else if(event=="Lexi Charm")
            {
                update(ref(db,`/cyber/${id}`),
                {
                  
                  lexiCharm:2

                  })
             }
             else if(event=="Smirk")
            {
                update(ref(db,`/cyber/${id}`),
                {
                  smirk:2
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
