import React, { useState, useEffect } from "react";
import "./review.css";
import fullData from "../Data/fullData.json";
import Form from "./Form";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";

const Review = (props) => {
  // console.log("fullDtaa", fullData);
  const allEnteredData = {};
  const eachData = [];
  const [reviewdata, setReviewData] = useState({});

  allEnteredData["foundation"] = eachData;
  // console.log("allEnteredData", allEnteredData);

  const [close, setClose] = useState(false);
  const [close1, setClose1] = useState(true);

  const [form, setForm] = useState(false);

  const change1 = () => {
    setClose(!close);
    props.name(close);
  };

  const change2 = (data) => {
    setForm(data);
    console.log(data);
  };
  var foundation = JSON.parse(localStorage.getItem("foundation"));
  var roles = JSON.parse(localStorage.getItem("roles"));
  var culture = JSON.parse(localStorage.getItem("culture"));
  var archi = JSON.parse(localStorage.getItem("archi"));
  var visi = JSON.parse(localStorage.getItem("visi"));
  var budget = JSON.parse(localStorage.getItem("budget"));
  var governance = JSON.parse(localStorage.getItem("governance"));
  var value = JSON.parse(localStorage.getItem("value"));
  var right = JSON.parse(localStorage.getItem("right"));
  var purchase = JSON.parse(localStorage.getItem("purchase"));
  var process = JSON.parse(localStorage.getItem("process"));

  useEffect(() => {
    for (let x in fullData) {
      // console.log(x);
      var eachOneData = fullData[x];
      if (x === "Foundation") {
        for (let i = 0; i < eachOneData.length; i++) {
          // console.log(eachOneData[i].question);
          // eachOneData[i].answer = "mani";
          if (i === 0) {
            eachOneData[i].answer = foundation[i].found1.answer;
            eachOneData[i].comment = foundation[i].found1.comment;
          } else {
            eachOneData[i].answer = foundation[i].found2.answer;
            eachOneData[i].comment = foundation[i].found2.comment;
          }
          // console.log(foundation[i].found1.answer);
          // eachOneData[i].comment = foundation[i].found1.comment;
        }
      } else if (x === "Roles") {
        for (let i = 0; i < eachOneData.length; i++) {
          if (i === 0) {
            eachOneData[i].answer = roles[i].role1.answer;
            eachOneData[i].comment = roles[i].role1.comment;
          } else if (i === 1) {
            eachOneData[i].answer = roles[i].role2.answer;
            eachOneData[i].comment = roles[i].role2.comment;
          } else if (i === 2) {
            eachOneData[i].answer = roles[i].role3.answer;
            eachOneData[i].comment = roles[i].role3.comment;
          } else if (i === 3) {
            eachOneData[i].answer = roles[i].role4.answer;
            eachOneData[i].comment = roles[i].role4.comment;
          } else if (i === 4) {
            eachOneData[i].answer = roles[i].role5.answer;
            eachOneData[i].comment = roles[i].role5.comment;
          }
        }
      } else if (x === "Culture") {
        for (let i = 0; i < eachOneData.length; i++) {
          // console.log(eachOneData[i].question);
          if (i === 0) {
            eachOneData[i].answer = culture[i].role1.answer;
            eachOneData[i].comment = culture[i].role1.comment;
          } else if (i === 1) {
            eachOneData[i].answer = culture[i].role2.answer;
            eachOneData[i].comment = culture[i].role2.comment;
          } else if (i === 2) {
            eachOneData[i].answer = culture[i].role3.answer;
            eachOneData[i].comment = culture[i].role3.comment;
          } else if (i === 3) {
            eachOneData[i].answer = culture[i].role4.answer;
            eachOneData[i].comment = culture[i].role4.comment;
          } else if (i === 4) {
            eachOneData[i].answer = culture[i].role5.answer;
            eachOneData[i].comment = culture[i].role5.comment;
          } else if (i === 5) {
            eachOneData[i].answer = culture[i].role6.answer;
            eachOneData[i].comment = culture[i].role6.comment;
          }
        }
      } else if (x === "Architecture") {
        for (let i = 0; i < eachOneData.length; i++) {
          // console.log(eachOneData[i].question);
          if (i === 0) {
            eachOneData[i].answer = archi[i].role1.answer;
            eachOneData[i].comment = archi[i].role1.comment;
          } else if (i === 1) {
            eachOneData[i].answer = archi[i].role2.answer;
            eachOneData[i].comment = archi[i].role2.comment;
          } else if (i === 2) {
            eachOneData[i].answer = archi[i].role3.answer;
            eachOneData[i].comment = archi[i].role3.comment;
          } else if (i === 3) {
            eachOneData[i].answer = archi[i].role4.answer;
            eachOneData[i].comment = archi[i].role4.comment;
          } else if (i === 4) {
            eachOneData[i].answer = archi[i].role5.answer;
            eachOneData[i].comment = archi[i].role5.comment;
          }
        }
      } else if (x === "Visibility") {
        for (let i = 0; i < eachOneData.length; i++) {
          // console.log(eachOneData[i].question);
          if (i === 0) {
            eachOneData[i].answer = visi[i].role1.answer;
            eachOneData[i].comment = visi[i].role1.comment;
          } else if (i === 1) {
            eachOneData[i].answer = visi[i].role2.answer;
            eachOneData[i].comment = visi[i].role2.comment;
          } else if (i === 2) {
            eachOneData[i].answer = visi[i].role3.answer;
            eachOneData[i].comment = visi[i].role3.comment;
          } else if (i === 3) {
            eachOneData[i].answer = visi[i].role4.answer;
            eachOneData[i].comment = visi[i].role4.comment;
          } else if (i === 4) {
            eachOneData[i].answer = visi[i].role5.answer;
            eachOneData[i].comment = visi[i].role5.comment;
          } else if (i === 5) {
            eachOneData[i].answer = visi[i].role6.answer;
            eachOneData[i].comment = visi[i].role6.comment;
          } else if (i === 6) {
            eachOneData[i].answer = visi[i].role7.answer;
            eachOneData[i].comment = visi[i].role7.comment;
          } else if (i === 7) {
            eachOneData[i].answer = visi[i].role8.answer;
            eachOneData[i].comment = visi[i].role8.comment;
          } else if (i === 8) {
            eachOneData[i].answer = visi[i].role9.answer;
            eachOneData[i].comment = visi[i].role9.comment;
          } else if (i === 9) {
            eachOneData[i].answer = visi[i].role10.answer;
            eachOneData[i].comment = visi[i].role10.comment;
          } else if (i === 10) {
            eachOneData[i].answer = visi[i].role11.answer;
            eachOneData[i].comment = visi[i].role11.comment;
          } else if (i === 11) {
            eachOneData[i].answer = visi[i].role12.answer;
            eachOneData[i].comment = visi[i].role12.comment;
          }
        }
      } else if (x === "Budget") {
        for (let i = 0; i < eachOneData.length; i++) {
          // console.log(eachOneData[i].question);
          if (i === 0) {
            eachOneData[i].answer = budget[i].role1.answer;
            eachOneData[i].comment = budget[i].role1.comment;
          } else if (i === 1) {
            eachOneData[i].answer = budget[i].role2.answer;
            eachOneData[i].comment = budget[i].role2.comment;
          } else if (i === 2) {
            eachOneData[i].answer = budget[i].role3.answer;
            eachOneData[i].comment = budget[i].role3.comment;
          } else if (i === 3) {
            eachOneData[i].answer = budget[i].role4.answer;
            eachOneData[i].comment = budget[i].role4.comment;
          } else if (i === 4) {
            eachOneData[i].answer = budget[i].role5.answer;
            eachOneData[i].comment = budget[i].role5.comment;
          } else if (i === 5) {
            eachOneData[i].answer = budget[i].role6.answer;
            eachOneData[i].comment = budget[i].role6.comment;
          }
        }
      } else if (x === "Governance") {
        for (let i = 0; i < eachOneData.length; i++) {
          // console.log(eachOneData[i].question);
          if (i === 0) {
            eachOneData[i].answer = governance[i].role1.answer;
            eachOneData[i].comment = governance[i].role1.comment;
          } else if (i === 1) {
            eachOneData[i].answer = governance[i].role2.answer;
            eachOneData[i].comment = governance[i].role2.comment;
          } else if (i === 2) {
            eachOneData[i].answer = governance[i].role3.answer;
            eachOneData[i].comment = governance[i].role3.comment;
          } else if (i === 3) {
            eachOneData[i].answer = governance[i].role4.answer;
            eachOneData[i].comment = governance[i].role4.comment;
          } else if (i === 4) {
            eachOneData[i].answer = governance[i].role5.answer;
            eachOneData[i].comment = governance[i].role5.comment;
          } else if (i === 5) {
            eachOneData[i].answer = governance[i].role6.answer;
            eachOneData[i].comment = governance[i].role6.comment;
          }
        }
      } else if (x === "Value") {
        for (let i = 0; i < eachOneData.length; i++) {
          // console.log(eachOneData[i].question);
          if (i === 0) {
            eachOneData[i].answer = value[i].role1.answer;
            eachOneData[i].comment = value[i].role1.comment;
          } else if (i === 1) {
            eachOneData[i].answer = value[i].role2.answer;
            eachOneData[i].comment = value[i].role2.comment;
          } else if (i === 2) {
            eachOneData[i].answer = value[i].role3.answer;
            eachOneData[i].comment = value[i].role3.comment;
          } else if (i === 3) {
            eachOneData[i].answer = value[i].role4.answer;
            eachOneData[i].comment = value[i].role4.comment;
          } else if (i === 4) {
            eachOneData[i].answer = value[i].role5.answer;
            eachOneData[i].comment = value[i].role5.comment;
          } else if (i === 5) {
            eachOneData[i].answer = value[i].role6.answer;
            eachOneData[i].comment = value[i].role6.comment;
          }
        }
      } else if (x === "right") {
        for (let i = 0; i < eachOneData.length; i++) {
          // console.log(eachOneData[i].question);
          if (i === 0) {
            eachOneData[i].answer = right[i].role1.answer;
            eachOneData[i].comment = right[i].role1.comment;
          } else if (i === 1) {
            eachOneData[i].answer = right[i].role2.answer;
            eachOneData[i].comment = right[i].role2.comment;
          } else if (i === 2) {
            eachOneData[i].answer = right[i].role3.answer;
            eachOneData[i].comment = right[i].role3.comment;
          } else if (i === 3) {
            eachOneData[i].answer = right[i].role4.answer;
            eachOneData[i].comment = right[i].role4.comment;
          } else if (i === 4) {
            eachOneData[i].answer = right[i].role5.answer;
            eachOneData[i].comment = right[i].role5.comment;
          } else if (i === 5) {
            eachOneData[i].answer = right[i].role6.answer;
            eachOneData[i].comment = right[i].role6.comment;
          } else if (i === 6) {
            eachOneData[i].answer = right[i].role7.answer;
            eachOneData[i].comment = right[i].role7.comment;
          }
        }
      } else if (x === "Purchase") {
        for (let i = 0; i < eachOneData.length; i++) {
          // console.log(eachOneData[i].question);
          if (i === 0) {
            eachOneData[i].answer = purchase[i].role1.answer;
            eachOneData[i].comment = purchase[i].role1.comment;
          } else if (i === 1) {
            eachOneData[i].answer = purchase[i].role2.answer;
            eachOneData[i].comment = purchase[i].role2.comment;
          } else if (i === 2) {
            eachOneData[i].answer = purchase[i].role3.answer;
            eachOneData[i].comment = purchase[i].role3.comment;
          } else if (i === 3) {
            eachOneData[i].answer = purchase[i].role4.answer;
            eachOneData[i].comment = purchase[i].role4.comment;
          } else if (i === 4) {
            eachOneData[i].answer = purchase[i].role5.answer;
            eachOneData[i].comment = purchase[i].role5.comment;
          } else if (i === 5) {
            eachOneData[i].answer = purchase[i].role6.answer;
            eachOneData[i].comment = purchase[i].role6.comment;
          }
        }
      } else if (x === "Process") {
        for (let i = 0; i < eachOneData.length; i++) {
          // console.log(eachOneData[i].question);
          if (i === 0) {
            eachOneData[i].answer = process[i].role1.answer;
            eachOneData[i].comment = process[i].role1.comment;
          } else if (i === 1) {
            eachOneData[i].answer = process[i].role2.answer;
            eachOneData[i].comment = process[i].role2.comment;
          } else if (i === 2) {
            eachOneData[i].answer = process[i].role3.answer;
            eachOneData[i].comment = process[i].role3.comment;
          } else if (i === 3) {
            eachOneData[i].answer = process[i].role4.answer;
            eachOneData[i].comment = process[i].role4.comment;
          } else if (i === 4) {
            eachOneData[i].answer = process[i].role5.answer;
            eachOneData[i].comment = process[i].role5.comment;
          }
        }
      }
    }
    // console.log("review daata - render useEffect", fullData);
    setReviewData(fullData);
    localStorage.setItem("Post-reviewData", JSON.stringify(fullData));
  }, []);

  // console.log(
  //   "final display data - ",
  //   foundation,
  //   roles,
  //   culture,
  //   archi,
  //   visi,
  //   budget,
  //   governance,
  //   value,
  //   right,
  //   purchase,
  //   process
  // );

  // console.log("each daataaa - ", fullData);
  // console.log("review daata - render ", fullData);
  // console.log("review after useeffect", reviewdata);

  return (
    <div className="review-foun">
      <div className="re-full">
        <div className="re-full1">
          {/* <div className="re-head">
            <p className="re-review">Review</p>
            <p onClick={() => change1()} className="re-x">
              <AiOutlineClose />
            </p>
          </div> */}
          <div className="blank">{/* finsecops */}</div>
          {Object.keys(reviewdata).map((ele, idx) => {
            // console.log(ele);
            var newData = fullData[ele];
            // console.log(newData);
            var element = "";
            if (ele === "Foundation") {
              element = "Foundation";
            } else if (ele === "Roles") {
              element = "Roles & Responsilbilties";
            } else if (ele === "Culture") {
              element = "Culture";
            } else if (ele === "Architecture") {
              element = "Architecture";
            } else if (ele === "Visibility") {
              element = "Visibility";
            } else if (ele === "Budget") {
              element = "Budget";
            } else if (ele === "Governance") {
              element = "Governance";
            } else if (ele === "Value") {
              element = "Value";
            } else if (ele === "right") {
              element = "Right-Sizing";
            } else if (ele === "Purchase") {
              element = "Purchase";
            } else if (ele === "Process") {
              element = "Process";
            }
            return (
              <div key={idx} className="re-mid">
                <p className="re-topic">{element} </p>
                {newData.map((data, index) => {
                  var answer = "";
                  var comment = "";
                  if (data.answer === "1") {
                    answer = "Strongly Disagree";
                  } else if (data.answer === "2") {
                    answer = "Somewhat Disagree";
                  } else if (data.answer === "3") {
                    answer = "Disagree";
                  } else if (data.answer === "4") {
                    answer = "Agree";
                  } else if (data.answer === "5") {
                    answer = "Somewhat Agree";
                  } else if (data.answer === "6") {
                    answer = "Strongly Agree";
                  }
                  comment = data.comment;

                  return (
                    <div className="re-each" key={index}>
                      <p className="re-ptag">{data.question}</p>
                      <div className="re-anscom">
                        {/* {data.answer ==="1" } */}
                        <div>
                          <p className="re-ans">{answer}</p>
                        </div>
                        <div>
                          {comment ? (
                            <input
                              defaultValue={comment}
                              disabled
                              className="re-com"
                            />
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
          {/* <div className="blank">finsecops</div> */}

          {/* <div className="re-btn1">
            <div className="bottom-submit">
              <button onClick={() => change1()} className="review1 btn btn1">
                <BsChevronLeft className="left-arr" /> Edit
              </button>
              <button onClick={() => setForm(!form)} className="submit1 btn">
                Next
              </button>
            </div>
          </div> */}
        </div>
        {/* {form ? <Form name={change2} /> : <></>} */}
      </div>
    </div>
  );
};

export default Review;
