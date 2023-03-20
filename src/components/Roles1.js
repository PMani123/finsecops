import React, { useState } from "react";
import rolesData from "../Data/roles.json";
import { roleData } from "../Data/roleData";
import { Link } from "react-router-dom";

const Roles1 = () => {
  const [user, setUser] = useState({ fname: "", lname: "", email: "" });
  const [found1, setFound1] = useState({ answer: "", comment: "" });
  const [found2, setFound2] = useState({ answer: "", comment: "" });
  const [found3, setFound3] = useState({ answer: "", comment: "" });
  const [found4, setFound4] = useState({ answer: "", comment: "" });
  // const [roles,setRoles]=useState([]);

  const mani = [
    { name: "q1", value: "strong agree", type: "radio" },
    { name: "q1", value: "agree", type: "radio" },
    { name: "q1", value: "somewhat agree", type: "radio" },
    { name: "q1", value: "somewhat disagree", type: "radio" },
    { name: "q1", value: "disagree", type: "radio" },
    { name: "q1", value: "", type: "text" },
  ];

  //   console.log(rolesData);
  //   for (let x in rolesData) {
  //     console.log(x);
  //     console.log(rolesData[x]);
  //     for (let i = 0; i < rolesData[x].length; i++) {
  //       console.log(rolesData[x][i]);
  //     }
  //   }

  function submitted() {
    var fullData = {
      userData: user,
      foundation: [
        { found1: found1 },
        { found2: found2 },
        { found3: found3 },
        { found4: found4 },
      ],
    };
    // console.log(user);
    // console.log(found1);
    // console.log(found2);
    console.log(fullData);
  }
  function handleChange1(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    if (e.target.name === "q1") {
      console.log("question 1 clicked");
      // setFound1({[e.target.name]:e.target.value});
      if (e.target.type === "text") {
        setFound1({ ...found1, comment: e.target.value });
      } else {
        setFound1({ ...found1, answer: e.target.value });
      }
    } else if (e.target.name === "q2") {
      console.log("question 2 clicked");
      // setFound2({...found2,name:e.target.value});
      if (e.target.type === "text") {
        setFound2({ ...found2, comment: e.target.value });
      } else {
        setFound2({ ...found2, answer: e.target.value });
      }
    } else if (e.target.name === "q3") {
      console.log("question 3 clicked");
      // setFound2({...found2,name:e.target.value});
      if (e.target.type === "text") {
        setFound3({ ...found3, comment: e.target.value });
      } else {
        setFound3({ ...found3, answer: e.target.value });
      }
    } else if (e.target.name === "q4") {
      console.log("question 4 clicked");
      // setFound2({...found2,name:e.target.value});
      if (e.target.type === "text") {
        setFound4({ ...found4, comment: e.target.value });
      } else {
        setFound4({ ...found4, answer: e.target.value });
      }
    }
  }

  return (
    <div>
      <Link to="/chart">
        <h2> Spider chart </h2>
      </Link>
      <div>
        <h2>User data</h2>
        <label>First Name -</label>
        <input
          name="fname"
          type="text"
          onChange={(e) => setUser({ ...user, fname: e.target.value })}
        />
        <label>Last Name -</label>
        <input
          name="lname"
          type="text"
          onChange={(e) => setUser({ ...user, lname: e.target.value })}
        />
        <label>EMail id -</label>
        <input
          name="email"
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div>
        <h2>Roles</h2>

        {/* <div>
                <p>Question 1.</p>
                <input onChange={(e)=>handleChange1(e)}  type="radio"  value="strong agree" name="q1" /><label htmlFor="q1" >strong agree</label>
                <input onChange={(e)=>handleChange1(e)} type="radio"  value="agree"  name="q1" /><label htmlFor="q1" >agree</label>
                <input onChange={(e)=>handleChange1(e)} type="radio"  value="disagree"  name="q1" /><label htmlFor="q1" >Disagree</label>
                <input onChange={(e)=>handleChange1(e)} type="radio"  value="somewhat agree" name="q1" /><label htmlFor="q1" >somewhat agree</label>
                <input onChange={(e)=>handleChange1(e)} type="radio"  value="somewhat disagree" name="q1" /><label htmlFor="q1" >somewhat disagree</label>
                <input onChange={(e)=>handleChange1(e)} type='text' name='q1' /><label htmlFor='q1' >Comment</label>
            </div> */}

        {/* <div>
                <p>Question 2.</p>
                <input type="checkbox" id="q1" value="strong agree" name="q1" /><label for="q1" >strong agree</label>
                <input type="checkbox" id="q1" value="agree"  name="q1" /><label for="q1" >agree</label>
                <input type="checkbox" id="q1" value="disagree"  name="q1" /><label for="q1" >Disagree</label>
                <input type="checkbox" id="q1" value="somewhat agree" name="q1" /><label for="q1" >somewhat agree</label>
                <input type="checkbox" id="q1" value="somewhat disagree" name="q1" /><label for="q1" >somewhat disagree</label>
            </div> */}

        {/* <div>
                <p>Question 2.</p>
                <input onChange={(e)=>handleChange1(e)}  type="radio"  value="strong agree" name="q2" /><label htmlFor="q2" >strong agree</label>
                <input onChange={(e)=>handleChange1(e)} type="radio"  value="agree"  name="q2" /><label htmlFor="q2" >agree</label>
                <input onChange={(e)=>handleChange1(e)} type="radio"  value="disagree"  name="q2" /><label htmlFor="q2" >Disagree</label>
                <input onChange={(e)=>handleChange1(e)} type="radio"  value="somewhat agree" name="q2" /><label htmlFor="q2" >somewhat agree</label>
                <input onChange={(e)=>handleChange1(e)} type="radio"  value="somewhat disagree" name="q2" /><label htmlFor="q2" >somewhat disagree</label>
                <input onChange={(e)=>handleChange1(e)} type='text'  name='q2' /><label htmlFor='q2' >Comment</label>
            </div> */}

        {/* <div>
                {mani.map((ele,idx)=>{
                    return(
                        <span key={idx}>
                            <input onChange={(e)=>handleChange1(e)} value={ele.value} name={ele.name} type={ele.type} /><label htmlFor={ele.name}>{ele.value} </label>
                        </span>
                    )
                })}
            </div> */}

        <div>
          {Object.keys(roleData).map((ele, idx) => {
            // console.log("hiiiiiii", ele);
            // console.log(roleData[ele]);
            var newData = roleData[ele];
            return (
              <div key={idx}>
                <h2>{ele}</h2>
                {newData.map((ele, idx) => {
                  return (
                    <span key={idx}>
                      {ele.value ? (
                        <input
                          onChange={(e) => handleChange1(e)}
                          value={ele.value}
                          name={ele.name}
                          type={ele.type}
                        />
                      ) : (
                        <></>
                      )}

                      {ele.value ? (
                        <></>
                      ) : (
                        <input
                          type="text"
                          name={ele.name}
                          onChange={(e) => handleChange1(e)}
                        />
                      )}
                      <label htmlFor={ele.name}>
                        {ele.value ? ele.value : "comment"}
                      </label>
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* <div>
            {
                roleData.question1.map()
            }
            </div> */}
      </div>
      {/* <button onClick={() => submitted()}>Submit</button> */}
    </div>
  );
};

export default Roles1;
