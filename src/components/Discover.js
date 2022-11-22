import React from 'react'

export default function Discover() {
    return (
        <div className='discover'>
            <div className='container'>
                <h2 className='discover-heading'>Discover</h2>
                <h1 className='discover-heading-2'>OUR NEW MENU</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col pb-5">
                        <div className="card h-100">
                            <img src="./assets/images/discover-image-1.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title-1">Food/16th March, 2019</h5>
                                <h5 className="card-title">Lorem ipsum dolor sit</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit, sed
                                </p>
                                <p className='discover-read'>READ MORE</p>
                            </div>
                        </div>
                    </div>
                    <div className="col pb-5">
                        <div className="card h-100">
                            <img src="./assets/images/discover-image-2.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title-1">Food/16th March, 2019</h5>
                                <h5 className="card-title">Lorem ipsum dolor sit</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit, sed
                                </p>
                                <p className='discover-read'>READ MORE</p>
                            </div>
                        </div>
                    </div>
                    <div className="col pb-5">
                        <div className="card h-100">
                            <img src="./assets/images/discover-image-3.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title-1">Food/16th March, 2019</h5>
                                <h5 className="card-title">Lorem ipsum dolor sit</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit, sed
                                </p>
                                <p className='discover-read'>READ MORE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
