import React, { useState } from 'react'
import "../css/Menu.css";

export default function Menu({setFlag}) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        graduation: ""
    })

    function movePage(page) {
        let allCards = document.querySelectorAll(".form .form-card")
        allCards.forEach((card)=>{
           card.style.transform = `translateX(-${(page-1)*100}%)`
        })
    }

    function changeData(key,value) {
         let data = {...user}
         data[key] = value
         setUser({...data})
    }

    function submitData() {
        setFlag(true)
    }

  return (
    <div className='side-gap menu'>
        <h4>Please fill below details to continue</h4>
        <div className="form">
            <div className="form-card">
                <h4>Step 1</h4>
                <label htmlFor="name">Name</label>
                <input value={user.name} onChange={(e)=> changeData("name",e.target.value)} placeholder='Enter your name' id='name' type="text" />
                <label htmlFor="email">Email</label>
                <input value={user.email} onChange={(e)=> changeData("email",e.target.value)} placeholder='Enter your Email' type="email" id='email' />
                <div className="btns">
                    <button className='btn btn-primary hide'>Previous</button>
                    <button disabled={!(user.name && user.email)} className='btn btn-primary' onClick={() => movePage(2)}>Next</button>
                </div>
            </div>
            <div className="form-card">
                <h4>Step 2</h4>
                <label htmlFor="mobile">Mobile Number</label>
                <input value={user.phone} onChange={(e)=> changeData("phone",e.target.value)} placeholder='Enter your Mobile Number' type="number" id='mobile' />
                <label htmlFor="graduation">Graduation Year</label>
                <input value={user.graduation} onChange={(e)=> changeData("graduation",e.target.value)} placeholder='Enter your Graduation Year' type="number" id='graduation' />
                <div className="btns">
                    <button className='btn btn-primary' onClick={() => movePage(1)}>Previous</button>
                    <button disabled={!(user.phone && user.graduation)} className='btn btn-success' onClick={submitData}>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
