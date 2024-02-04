import React from 'react'
import Navbar1 from './navbar1';
import { useState, useEffect } from 'react';
import  "../firebase.js"
import { getDatabase, ref, child, get } from "firebase/database";

export default function CertificateWinner() {

    const [data, setData] = useState();
    
    const [name1,setName1] = useState("-");
    const [name2,setName2] = useState("-");
    const [name3,setName3] = useState("-");

    const [clgname1,setClgName1] = useState("-");
    const [clgname2,setClgName2] = useState("-");
    const [clgname3,setClgName3] = useState("-");
    
    const [detail,setDetail] = useState();
    const [option,setOption] = useState('pixel-studio');

    useEffect(() => {
        console.log('trigger use effect hook');
        const dbRef = ref(getDatabase());
        get(child(dbRef, `winner/${option}`)).then((snapshot) => {
          if (snapshot.exists()) {
  
          //   console.log(snapshot.val());
              let x = snapshot.val();
              let arr =Object.values(x)
              // console.log(arr)
              setData(arr);

              const dbRef = ref(getDatabase());
              let arrName = []
              let arrobj = []
              for(let i=0;i<3;i++){
                get(child(dbRef, `cyber/${arr[i]}`)).then((snapshot) => {
                  if (snapshot.exists()) {
          
                  //   console.log(snapshot.val());
                      let x = snapshot.val();
                      let arr1 =Object.values(x);
                      console.log("ARR1 : ",arr1)
                      let obj = {
                        id : arr[i],
                        name : arr1[2]
                      }
                      if(i==0){
                        setName1(arr1[7])
                        setClgName1(arr1[1])
                      }
                      else if(i==1){
                        setName2(arr1[7])
                        setClgName2(arr1[1])
                      }
                      else{
                        setName3(arr1[7])
                        setClgName3(arr1[1])
                      }

                      arrobj.push(obj)
                      arrName.push(arr1[2])
                      
                      setDetail(arrobj)
                      // setName(arrName)
                  
                  } else {
                    console.log("No data available");
                    // alert("No data available")
                  }
                 
                }).catch((error) => {
                  console.error(error);
                });
              }
              
              
  
          
          } else {
            console.log("No data available");
            alert("No data available")
          }
        }).catch((error) => {
          console.error(error);
        });
        
       
      },[option])

    


      const getName = ()=>{
       

        console.log(data)
        console.log(detail)
        // console.log(name)
      }

      
      // setName(arrName);


      // }

      // useEffect(() => {
      //   console.log('trigger use effect hook');
      //   const dbRef = ref(getDatabase());
      //   for(let i=0;i<3;i++){
      //   get(child(dbRef, `users/${data[i]}`)).then((snapshot) => {
      //     if (snapshot.exists()) {
  
      //     //   console.log(snapshot.val());
      //         let x = snapshot.val();
      //         let arrName =Object.values(x)
      //         console.log(arrName)
      //         // setData(arr);
              
           
          
      //     } else {
      //       console.log("No data available");
      //     }
      //   }).catch((error) => {
      //     console.error(error);
      //   });
      // }
       
      // },[data])

      if (data) return  (
    <div>
        <Navbar1/>
        <div className="container" style={{marginTop : '10%'}}>
        <select class="form-select" onChange={(e)=>{
            setOption(e.target.value)
            setName1("-")
            setName2("-")
            setName3("-")
            setClgName1("-")
            setClgName2("-")
            setClgName3("-")
         
        }} aria-label="Default select example">
 
 <option value="pixel-studio">Pixel Studio</option>
 <option value="paper-pinnacle">Paper Pinnacle</option>
 <option value="blitz-byte">Blitz Byte</option>
 <option value="web-vortex">Web Vortex</option>
 <option value="con-tac-tix">ConTacTix</option>
 <option value="lexi-charm">Lexi Charm</option>
 <option value="smirk">Smirk</option>
 
</select>
   

        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Place</th>
      <th scope="col">Cyber ID</th>
      <th scope="col">Name</th>
      <th scope="col">College</th>
    </tr>
  </thead>
  <tbody>

        <tr>
          <td>1</td>
          <td>{data[0]}</td>
          <td>{name1}</td>
          <td>{clgname1}</td>

        </tr>

        <tr>
          <td>2</td>
          <td>{data[1]}</td>
          <td>{name2}</td>
          <td>{clgname2}</td>
        </tr>

        <tr>
          <td>3</td>
          <td>{data[2]}</td>
          <td>{name3}</td>
          <td>{clgname3}</td>
        </tr>
        
       

    
  </tbody>
</table>



</div>
    </div>
  )
}
