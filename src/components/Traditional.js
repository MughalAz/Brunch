import React from 'react'

export default function Traditional() {
    return (
        <div>
            <div class="traditional">
                <h5 class="card-title traditional-heading">Traditional cuisine made easy</h5>
                <p class="card-text traditional-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                <div className='d-flex traditional-point pb-4'>
                    <div className='point'></div>
                    <div className='point'></div>
                    <div className='point'></div>
                </div>
                <div className='traditional-nav d-flex'>
                    <h5 className='meal'>Meals</h5>
                    <h5 className='meal'>Spices</h5>
                    <h5 className='meal'>Book</h5>
                    <h5 className='meal'>Gallery</h5>
                </div>
            </div>
        </div>
    )
}
