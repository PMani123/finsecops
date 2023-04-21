import { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./foundation.css";
import comment from "../images/comment.svg";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import allData from "../Data/fullData.json";
import Review from "./Review";
import Form from "./Form";
import { BsChatDotsFill } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import ErrorPage from "./ErrorPage";
// import Errorfrom "./Error";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

import { Dropdown } from "primereact/dropdown";
import Formdialog from "./Formdialog";
import Successdialog from "./Successdialog";

const Foundation = (props) => {

  const [dialogShow, setDialogShow] = useState(false);
  const [successShow, setSuccessShow] = useState(false);
  // const [code, setCode] = useState(null);
  // const [success, setSuccess] = useState(false);
 
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);
  const [fullDone, setFullDone] = useState(false);
  const [screenSize, setScreenSize] = useState(true);

  const [foundComplete, setFoundComplete] = useState(false);
  const [roleComplete, setRoleComplete] = useState(false);
  const [culComplete, setCulComplete] = useState(false);
  const [archiComplete, setArchiComplete] = useState(false);
  const [visiComplete, setVisiComplete] = useState(false);
  // const [review, setReview] = useState(false);

  const [see1, setSee1] = useState(false);
  const [see2, setSee2] = useState(false);

  const [found1ans, setFound1ans] = useState("");
  const [found1com, setFound1com] = useState("");
  const [found2ans, setFound2ans] = useState("");
  const [found2com, setFound2com] = useState("");

  // const [renderData, setRenderData] = useState([]);

  const [displayBasic, setDisplayBasic] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);

  const [formSubmit, setFormsubmit] = useState(false);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function findScreenSize() {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    }
    window.addEventListener("resize", findScreenSize);
    return () => window.removeEventListener("resize", findScreenSize);
  }, [dimensions.width, dimensions.height]);

  // window.addEventListener("beforeunload", (e) => {
  //   console.log("tab closed!!!!");
  //   e.preventDefault();
  //   e.returnValue='';
  // });

  window.addEventListener("beforeunload", function (e) {
    // console.log("beoferunload");
    // var confirmationMessage = "\o/";
    // (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    // return confirmationMessage;                            //Webkit, Safari, Chrome
    localStorage.removeItem("Post-reviewData");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("foundDone");
    localStorage.removeItem("roleDone");
    localStorage.removeItem("culDone");
    localStorage.removeItem("archiDone");
    localStorage.removeItem("visiDone");
    localStorage.removeItem("budgetDone");
    localStorage.removeItem("govDone");
    localStorage.removeItem("valueDone");
    localStorage.removeItem("rightDone");
    localStorage.removeItem("purDone");
    localStorage.removeItem("processDone");
    localStorage.removeItem("foundation");
    localStorage.removeItem("roles");
    localStorage.removeItem("culture");
    localStorage.removeItem("archi");
    localStorage.removeItem("visi");
    localStorage.removeItem("budget");
    localStorage.removeItem("governance");
    localStorage.removeItem("value");
    localStorage.removeItem("right");
    localStorage.removeItem("purchase");
    localStorage.removeItem("process");
  });

  useEffect(() => {
    try {
      function findScreenSize() {
        if (window.innerWidth < 1024) {
          setScreenSize(false);
        }
      }

      window.addEventListener("resize", findScreenSize());

      var newData = JSON.parse(localStorage.getItem("foundation"));
      // console.log('getting found',newData);

      if (newData) {
        for (let i = 0; i < newData.length; i++) {
          var jjds = Object.values(newData[i]);
          if (i === 0) {
            setFound1ans(jjds[0].answer);
            setFound1com(jjds[0].comment);
          } else {
            setFound2ans(jjds[0].answer);
            setFound2com(jjds[0].comment);
          }
        }
      }
    } catch (error) {
      navigate("/");
      window.location.reload(false);
    }
  }, []);

  useEffect(() => {
    // console.log("2nd useEffect ");

    var foundation = [];
    var fou1 = { answer: found1ans, comment: found1com };
    var fou2 = { answer: found2ans, comment: found2com };

    var founds1 = { found1: fou1 };
    var founds2 = { found2: fou2 };

    foundation.push(founds1);
    foundation.push(founds2);
    // console.log('setting',foundation);

    localStorage.setItem("foundation", JSON.stringify(foundation));

    allData.Foundation.map((ele, idx) => {
      if (idx === 0) {
        ele["answer"] = found1ans;
        ele["comment"] = found1com;
      } else {
        ele["answer"] = found2ans;
        ele["comment"] = found2com;
      }
    });
    if (found1ans && found2ans) {
      setCompleted(true);
      localStorage.setItem("foundDone", JSON.stringify(true));
    } else {
      localStorage.setItem("foundDone", JSON.stringify(false));
    }

    var foundCheck = JSON.parse(localStorage.getItem("foundDone"));
    var roleCheck = JSON.parse(localStorage.getItem("roleDone"));
    var culCheck = JSON.parse(localStorage.getItem("culDone"));
    var archiCheck = JSON.parse(localStorage.getItem("archiDone"));
    var visiCheck = JSON.parse(localStorage.getItem("visiDone"));
    var budgetCheck = JSON.parse(localStorage.getItem("budgetDone"));
    var govCheck = JSON.parse(localStorage.getItem("govDone"));
    var valueCheck = JSON.parse(localStorage.getItem("valueDone"));
    var rightCheck = JSON.parse(localStorage.getItem("rightDone"));
    var purCheck = JSON.parse(localStorage.getItem("purDone"));
    var processCheck = JSON.parse(localStorage.getItem("processDone"));

    if (
      foundCheck &&
      roleCheck &&
      culCheck &&
      archiCheck &&
      visiCheck &&
      budgetCheck &&
      govCheck &&
      valueCheck &&
      rightCheck &&
      purCheck &&
      processCheck
    ) {
      setFullDone(true);
    }

    if (foundCheck) {
      setFoundComplete(true);
    }
    if (roleCheck) {
      setRoleComplete(true);
    }
    if (culCheck) {
      setCulComplete(true);
    }
    if (archiCheck) {
      setArchiComplete(true);
    }
    if (visiCheck) {
      setVisiComplete(true);
    }
  }, [
    found1ans,
    found1com,
    found2ans,
    found2com,
    window.innerWidth,
    window.innerHeight,
  ]);

  function changing(e) {
    if (e.target.name === "q1") {
      if (e.target.type === "textarea") {
        setFound1com(e.target.value);
      } else {
        if (e.target.value === "1") {
          setFound1ans("1");
        } else if (e.target.value === "2") {
          setFound1ans("2");
        } else if (e.target.value === "3") {
          setFound1ans("3");
        } else if (e.target.value === "4") {
          setFound1ans("4");
        } else if (e.target.value === "5") {
          setFound1ans("5");
        } else {
          setFound1ans("6");
        }
      }
    } else {
      if (e.target.type === "textarea") {
        setFound2com(e.target.value);
      } else {
        if (e.target.value === "1") {
          setFound2ans("1");
        } else if (e.target.value === "2") {
          setFound2ans("2");
        } else if (e.target.value === "3") {
          setFound2ans("3");
        } else if (e.target.value === "4") {
          setFound2ans("4");
        } else if (e.target.value === "5") {
          setFound2ans("5");
        } else {
          setFound2ans("6");
        }
      }
    }
  }

  // function closing(data) {
  //   ////console.log(data);
  //   setReview(data);
  // }
  const onClick = (name) => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
    displayForm: setDisplayForm,
  };
  const renderFooter = (name) => {
    return (
      <div className="form-btn">
        <Button
          label="Edit"
          icon="pi pi-angle-left"
          onClick={() => onHide(name)}
          className="edit-fin"
        />
        <Button
          label="Complete"
          // icon="pi pi-check"
          onClick={() => {
            onClick("displayForm");
            onHide("displayBasic");
          }}
          autoFocus
          className="complete-fin"
        />
      </div>
    );
  };

  function changeingformdis(data) {
    setFormsubmit(data);
    // console.log("close");
    setDisplayForm(data);
  }

  allData.Foundation.map((ele, idx) => {
    if (idx === 0) {
      ele["answer"] = found1ans;
      ele["comment"] = found1com;
    } else {
      ele["answer"] = found2ans;
      ele["comment"] = found2com;
    }
  });

  function fullquestionclose() {
    setSee1(false);
    setSee2(false);
  }
  
  function basic(data) {
    setDisplayBasic(true);
  }

  function headerPopupchange(data) {
    setDialogShow(data);
  }

  function closingForm(data) {
    if (data === "data got") {
      setSuccessShow(true)
    }
    setDialogShow(false);
  }

  function closesuccessDialog() {
    setSuccessShow(false)
  }

  return (
    <div onClick={() => fullquestionclose()}>
      {dimensions.width >= 1024 && screenSize ? (
        <div>
          <div className="ro-full">

            {
              dialogShow ? <><Formdialog formDialogshow={dialogShow} closeformDialog={closingForm} /></> : <></>
            }
           
            <Successdialog successDialog={successShow} closeSuccess={closesuccessDialog} />

            <Header onClick={() => fullquestionclose()} dialog={headerPopupchange} />

            <div className="re-middle">
              <Dialog
                header="Review"
                visible={displayBasic}
                className="dialog-header"
                style={{ width: "950px", height: "500px" }}
                footer={renderFooter("displayBasic")}
                onHide={() => onHide("displayBasic")}
              >
                <Review />
              </Dialog>
            </div>
            <Dialog
              header="Personal Info"
              visible={displayForm}
              className="dialog-header form-personal"
              onHide={() => {
                onHide("displayForm");
                setDisplayBasic(true);
              }}
            >
              {/* <h2>HelloWorld</h2> */}
              <Form
                linkform={formSubmit}
                backForm={changeingformdis}
                view={basic}
              />
            </Dialog>

            {/* {form ? <Form /> :<></>  } */}
            <div className="ro-mid">
              <div className="re-btn1">
                <div className="hov-flex">
                  <p className="hov-complete"> Please complete all sections </p>
                </div>
              </div>
              <div className="ro-mid1">
                <div className="ro-mid1-head">
                  <Link to="/">
                    <p
                      className={`${foundComplete ? `completed` : ``} current`}
                    >
                      Foundation
                    </p>
                  </Link>
                  <Link to="/roles">
                    <p className={`${roleComplete ? `completed` : ``} `}>
                      Roles & Responsibilities
                    </p>
                  </Link>
                  <Link to="/culture">
                    <p className={`${culComplete ? `completed` : ``} `}>
                      Culture
                    </p>
                  </Link>
                  <Link to="/archi">
                    <p className={`${archiComplete ? `completed` : ``} `}>
                      Architecture
                    </p>
                  </Link>
                  <Link to="/visi">
                    <p className={`${visiComplete ? `completed` : ``} `}>
                      Visibility
                    </p>
                  </Link>
                  <Link to="/budget">
                    <p className="rest more ">
                      6 more <BsChevronRight />
                    </p>
                  </Link>
                  {fullDone ? (
                    <button
                      className={`com-btn ${fullDone ? "" : "revi-pen"}`}
                      onClick={() => onClick("displayBasic")}
                    // onClick={() => setReview(!review)}
                    >
                      Review <BsChevronRight />
                    </button>
                  ) : (
                    <div>
                      <div className="btn-hovering">
                        <button
                          className={"com-btn revi-pen"}
                        // onClick={() => onClick("displayBasic")}
                        // onClick={() => setReview(!review)}
                        >
                          Review <BsChevronRight />
                        </button>
                        <p className="please">Please answer all questions </p>
                      </div>
                      {/* <p> Please Complete all sections  </p> */}
                    </div>
                  )}
                </div>
                <div className="ro-mid1-p">
                  {allData.Foundation.map((data, idx) => {
                    var inputData = "";
                    var seeing = "";

                    if (data.no === "q1") {
                      if (found1ans === "1") {
                        inputData = "Strongly Disagree";
                      } else if (found1ans === "2") {
                        inputData = "Somewhat Disagree";
                      } else if (found1ans === "3") {
                        inputData = "Disagree";
                      } else if (found1ans === "4") {
                        inputData = "Agree";
                      } else if (found1ans === "5") {
                        inputData = "Somewhat Agree";
                      } else if (found1ans === "6") {
                        inputData = "Strongly Agree";
                      }
                      seeing = see1;
                    } else {
                      if (found2ans === "1") {
                        inputData = "Strongly Disagree";
                      } else if (found2ans === "2") {
                        inputData = "Somewhat Disagree";
                      } else if (found2ans === "3") {
                        inputData = "Disagree";
                      } else if (found2ans === "4") {
                        inputData = "Agree";
                      } else if (found2ans === "5") {
                        inputData = "Somewhat Agree";
                      } else if (found2ans === "6") {
                        inputData = "Strongly Agree";
                      }
                      seeing = see2;
                    }

                    function commentDisplay(data) {
                      //console.log(data);
                      if (data === "q1") {
                        setSee1(!seeing);
                        setSee2(false);
                      } else {
                        setSee2(!seeing);
                        setSee1(false);
                      }
                    }
                    function questionClick() {
                      setSee1(false);
                      setSee2(false);
                    }

                    return (
                      <div key={idx} className="eachOne">
                        <div className="ro-mid-each">
                          <p onClick={() => questionClick()}>
                            {data?.question}
                          </p>
                          <div className="ro-div-range">
                            {data?.answer ? (
                              <input
                                type="range"
                                step="1"
                                max="6"
                                min="1"
                                value={data?.answer || ""}
                                // defaultValue="6"
                                onChange={(e) => changing(e)}
                                name={data.no}
                                // className="rinpbor"
                                className="input-range"
                              />
                            ) : (
                              <input
                                type="range"
                                step="1"
                                max="6"
                                min="1"
                                // value={data.answer}
                                defaultValue="0"
                                onChange={(e) => changing(e)}
                                name={data.no}
                                className="input-range"
                              // className="rinpbor"
                              />
                            )}

                            <p className="strongly">
                              {inputData ? (
                                inputData
                              ) : (
                                <span className="drag">
                                  Click / Drag to give your feedback
                                </span>
                              )}
                              {/* {inputData} */}
                            </p>
                          </div>
                          {seeing ? (
                            <BsChatDotsFill
                              className="comment1"
                              onClick={(e) => {
                                commentDisplay(data.no);
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                            />
                          ) : (
                            <BsChatDotsFill
                              className={data.comment ? `comment1` : `comment`}
                              onClick={(e) => {
                                commentDisplay(data.no);
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                            />
                          )}
                        </div>
                        {seeing ? (
                          <div className="div-comment">
                            <div
                              className="div1-com"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                            >
                              <textarea
                                rows="3"
                                type="text"
                                autoFocus
                                name={data.no}
                                placeholder="Write your comment here.."
                                value={data.comment}
                                onChange={(e) => changing(e)}
                                className="comment-input"
                              />
                              <button
                                onClick={(e) => {
                                  commentDisplay(data.no);
                                }}
                                className={
                                  data.comment ? `save-btnx` : `save-btnx1`
                                }
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <button onClick={() => submitted()}> Submit </button> */}
            <div className="bot-btn">
              <button className="bottombtn prev prev-pen">Prev</button>
              <Link to="/roles">
                <button className="bottombtn next">
                  Next <BsChevronRight />
                </button>
              </Link>
            </div>
            <Footer />
          </div>
        </div>
      ) : (
        <div className="error-message">
          <ErrorPage />
        </div>
      )}
    </div>
  );
};

export default Foundation;
