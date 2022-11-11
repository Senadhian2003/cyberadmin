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
    
    const [detail,setDetail] = useState();
    const [option,setOption] = useState('python-coding');

    useEffect(() => {
        console.log('trigger use effect hook');
        const dbRef = ref(getDatabase());
        get(child(dbRef, `winner/${option}`)).then((snapshot) => {
          if (snapshot.exists()) {
  
          //   console.log(snapshot.val());
              let x = snapshot.val();
              let arr =Object.values(x)
            //   console.log(arr)
              setData(arr);

              const dbRef = ref(getDatabase());
              let arrName = []
              let arrobj = []
              for(let i=0;i<3;i++){
                get(child(dbRef, `users/${arr[i]}`)).then((snapshot) => {
                  if (snapshot.exists()) {
          
                  //   console.log(snapshot.val());
                      let x = snapshot.val();
                      let arr1 =Object.values(x);
                      let obj = {
                        id : arr[i],
                        name : arr1[2]
                      }
                      if(i==0){
                        setName1(arr1[2])
                      }
                      else if(i==1){
                        setName2(arr1[2])
                      }
                      else{
                        setName3(arr1[2])
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

      


      if (data ) return  (
    <div>
        <Navbar1/>
        <div className="container" style={{marginTop : '10%'}}>
        <select class="form-select" onChange={(e)=>{
            setOption(e.target.value)
            setName1("-")
            setName2("-")
            setName3("-")
         
        }} aria-label="Default select example">
 
 <option value="python-coding">Python Coding</option>
 <option value="paper-presentation">Paper Presentation</option>
 <option value="optimized-coding">Optimized Coding</option>
 <option value="solo-compile">Solo Compile</option>
</select>
   

        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Place</th>
      <th scope="col">Cyber ID</th>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody>

        <tr>
          <td>1</td>
          <td>{data[0]}</td>
          <td>{name1}</td>

        </tr>

        <tr>
          <td>2</td>
          <td>{data[1]}</td>
          <td>{name2}</td>

        </tr>

        <tr>
          <td>3</td>
          <td>{data[2]}</td>
          <td>{name3}</td>

        </tr>
        
       

    
  </tbody>
</table>

<button onClick={getName} >Click Me</button>

</div>
    </div>
  )
}
