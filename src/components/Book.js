import React from 'react'

export default function Book() {
    return (
        <div className='book'>
            <h3 className='book-heading'>Book here</h3>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-white label-1">How many people?</label>
                            <select class="form-select w-75 people" aria-label="Default select example">
                                <option selected>2 people</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-white label-1">Name</label>
                            <select class="form-select w-75 people" aria-label="Default select example">
                                <option selected>Full name</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label text-white label-1">when is your date?</label>
                            <input type="email" class="form-control w-75 text-white date" id="exampleFormControlInput1" placeholder="17-02-2020" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label text-white label-1">Email</label>
                            <input type="email" class="form-control w-75" id="exampleFormControlInput1" placeholder="Your Email address" />
                        </div>
                        <button className='form-control w-75 text-white mt-5 mb-5'>SUBMIT</button>
                    </div>
                    <div className='col-md-4'>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label text-white label-1">Time</label>
                            <input type="email" class="form-control w-75" id="exampleFormControlInput1" placeholder="10:00am" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label text-white label-1">Phone</label>
                            <input type="email" class="form-control w-75" id="exampleFormControlInput1" placeholder="your phone" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
