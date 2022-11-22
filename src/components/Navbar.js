import React from 'react'

export default function Navbar() {
  return (
    <div className='container'>
   <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">BRUNCH</a>
    <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav navbar-1">
        <li class="nav-item">
          <a class="nav-link active text-white nav-list" aria-current="page" href="#">WELCOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white nav-list" href="#">MENU</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white nav-list" href="#">EVENTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white nav-list" href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
