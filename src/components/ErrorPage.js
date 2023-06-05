import React, { useState } from 'react'
import './error.css'
import axios from 'axios'
import errorimage from '../images/errorimage.png'
import longarrow from '../images/Long-arrow-left.png'
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const [state, handleSubmit] = useForm("mqkoddve");
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    const [err, setErr] = useState("");

    // if (state.succeeded) {
    //     console.log("state ---------", state);
    //     navigate("/sent")
    //     // return <p className='thanks' >Thanks for joining!</p>;
    // }

    async function handleSubmit1(e) {
        try {
            e.preventDefault();
            console.log("value----", value, typeof value);


            if (value.includes("gmail") ||
                value.includes("yahoo") ||
                value.includes("outlook") ||
                value.includes("protonmail") ||
                value.includes("zoho") ||
                value.includes("icloud")) {
                setErr("Only Organisation Mail should be Used");
                setTimeout(() => {
                    setErr("");
                }, 3000)
                setValue("");
            } else {
                // console.log("success");
                const res = await axios.post(`https://formspree.io/f/mqkoddve`, { email: value });
                console.log("res-----", res);
                if (res.data.next.includes("thanks")) {
                    setValue("");
                    navigate("/sent");
                }
            }
        }
        catch (e) {
            console.log("error---", e);
        }
    }

    return (
        <div className='errorfully'>
            <form style={{ width: "100%" }} onSubmit={handleSubmit1} >
                <div className="flexing d-flex">
                    <img src={errorimage} alt="" className="errorimage1" />
                    <div className='allf'>
                        <h4>We want to give you a </h4>
                        <h2>Better Experience!</h2>
                    </div>
                    <div className='allh'>
                        <p>Your screen resolution is {window.innerWidth} * {window.innerHeight}. For using the assessment tool please use any device with a minimum resolution of 1024x768px.</p>
                    </div>
                    <p>Kindly provide your email address and we'll send you the link to the assessment tool.</p>
                    <div className='inputdiv'>
                        <input id="email" type="email" value={value} onChange={(e) => setValue(e.target.value)} name="email" required placeholder="Enter your email" /><br />
                        <span className='error-message' > {err} </span>
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <button>Get Link</button>
                    <a href="https://www.cloudangles.com/">
                        <span><i class="fa-solid fa-arrow-left"></i>
                            <img src={longarrow} alt="" className='long-arrow' /> Back to Website</span>
                    </a>
                </div>
            </form>
        </div>
    )
}

export default ErrorPage