import React from 'react'
import Navbar from './navbar';
import { Link, useParams } from "react-router-dom";
import { useState } from "react"
import data from "./data";
import { getDatabase, ref, set } from "firebase/database";
import  "../firebase.js"

export default function Winner() {
    const [cyId1,setCyId1] = useState();
    const [cyId2,setCyId2] = useState();
    const [cyId3,setCyId3] = useState();
  
    let k = useParams()
    let detail = data[k.id]
    let dbName = detail.dbName;
    console.log(detail.name)

    function assertWinner(){
    if(cyId1.length!=0 && cyId2.length!=0 && cyId3.length!=0){
      const db = getDatabase();

      set(ref(db, 'winner/' + dbName), {
        first: cyId1,
        second: cyId2,
        third : cyId3
      }).then((res)=>{
        alert("Success")
      });
      
      
      setCyId1("");
      setCyId2("");
      setCyId3("");

    }
    else{
      alert("Enter valid details")
    }
    }


  return (
    
    <div>
        <Navbar id={k.id}/>
        <h1>{detail.name}</h1>
        
        <div className="container">
        <div class="outer" >
            <h2 style={{textAlign : 'center'}}>Winners</h2>
            <div class="input-group mb-3 w-75 input" >
              <input
                type="text"
                class="form-control"
                placeholder="First place"
                id="cyberId"
                onChange= {(e)=>{
                  setCyId1(e.target.value);
                }}
                value={cyId1}
              />
            </div>

            <div class="input-group mb-3 w-75 input">
              <input
                type="text"
                class="form-control"
                placeholder="Second place"
                id="cyberId"
                onChange= {(e)=>{
                  setCyId2(e.target.value);
                }}
                value={cyId2}
              />
            </div>


<div class="input-group mb-3 w-75 input">
              <input
                type="text"
                class="form-control"
                placeholder="Third place"
                id="cyberId"
                onChange= {(e)=>{
                  setCyId3(e.target.value);
                }}
                value={cyId3}
              />
            </div>

           
           
            <div class="d-grid gap-2 col-6 mx-auto buton">
                <button class="btn btn-info buton "  id={detail.btnId} onClick={assertWinner}  style={{color:'white'}} > ADD </button> 
                
              </div>
           

          </div>
          </div>

    </div>
  )
}
