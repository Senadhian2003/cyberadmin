import React from 'react'
import './navbar.css'
import data from "./data";

export default function navbar(props) {
    let id = props.id;
    

  return (
    <div>

<nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">EMART</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    
                    <li class="nav-item">
                        <a class="nav-link active" style={{color : 'black' }} aria-current="page" href={'/home/' + id}>Verification</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active"  style={{color : 'black'}} aria-current="page" href={'/winner/' + id}>Winners</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </div>
  )
}
