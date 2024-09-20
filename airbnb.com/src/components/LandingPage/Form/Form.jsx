import React from 'react'
import './Form.css'
import { assets } from '../../../assets/assets'
import { Navigate, useNavigate } from 'react-router-dom'

const navigate = useNavigate();
const handleSubmit = (e) =>{
    e.preventDefault();
    navigate('/home')
}


const Form = () => {
    return (
        <>
        <div className='container'>
            <div className='container-inner'>
                <h1>Find places to stay on Airbnb</h1>
                <p>Discover entire homes and rooms perfect for any trip.</p>
            <form className='form' onSubmit={handleSubmit}>
                <div className='location'>
                   <label for='location' className='locati'>LOCATION</label>
                   <input type='text' placeholder='Anywhere' id='location' />
                </div>   
                <div className='check-in-out'>
                    <div className='checkin'>
                    <label for='checkin'>CHECK IN</label>
                    <input placeholder="Add Date"
                      class="textbox-n"
                      type="text"
                      onfocus="(this.type='date')"
                      onblur="(this.type='text')"
                      id="date" />                 
             </div>
                <div className='checkout'>
                    <label for='checkout'>CHECK OUT</label>
                    <input placeholder="Add Date"
                       class="textbox-n"
                       type="text"
                       onfocus="(this.type='date')"
                       onblur="(this.type='text')"
                       id="date" />                 
                </div>
                </div>
                <div className='input-numbers'>
                   <div className='adults'>
                    <label for='adults' className='adult' >ADULT</label>
                    <select id='adults' >
                        <option>1</option>
                        <option selected>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>7</option>
                        <option>8</option>
                    </select>
                    </div> 
                    <div className='childrens'>
                    <label for='children' className='children' >CHILDREN</label>
                    <select id='children' >
                        <option>0</option>
                        <option>1</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>7</option>
                        <option>8</option>
                    </select>
                    </div>
                   
                </div>
                <button className='submit-btn' type='submit'>Search</button>
            </form>
        </div>
        <img className='form-bg-img' src={assets.Landing_img} alt="" />
    </div>
        </>
    )
}

export default Form