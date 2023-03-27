import React from 'react'
import emailsent from '../images/emailsent.png'
import longarrow from '../images/Long-arrow-left.png'

const Sent = () => {
    return (
        <div className="errorfully fullheight">
            <div className="flexing d-flex">
                <img src={emailsent} alt="" className="errorimage1" />
                <div className='allf'>
                    <h2>Link Sent!</h2>
                </div>
                <div className='allh'>
                    <h6>Check your email</h6>
                </div>

                <a href="https://www.cloudangles.com/">
                    <span><i class="fa-solid fa-arrow-left" ></i>
                        <img src={longarrow} alt="" className='long-arrow' /> Back to Website</span>
                </a>
            </div>
        </div>
    )
}

export default Sent