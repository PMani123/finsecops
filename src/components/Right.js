import React, { useEffect, useState } from "react";
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
import { BsChevronLeft } from "react-icons/bs";
import ErrorPage from "./ErrorPage";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

import Formdialog from "./Formdialog";
import Successdialog from "./Successdialog";

const Right = (props) => {

  const [dialogShow, setDialogShow] = useState(false);
  const [successShow, setSuccessShow] = useState(false);
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState(true);

  const [fullDone, setFullDone] = useState(false);

  const [budgetComplete, setBudgetComplete] = useState(false);
  const [govComplete, setGovComplete] = useState(false);
  const [valueComplete, setValueComplete] = useState(false);
  const [rightComplete, setRightComplete] = useState(false);
  const [purComplete, setPurComplete] = useState(false);
  const [processComplete, setprocessComplete] = useState(false);

  // const [review, setReview] = useState(false);

  const [see1, setSee1] = useState(false);
  const [see2, setSee2] = useState(false);
  const [see3, setSee3] = useState(false);
  const [see4, setSee4] = useState(false);
  const [see5, setSee5] = useState(false);
  const [see6, setSee6] = useState(false);
  const [see7, setSee7] = useState(false);

  const [role1ans, setRole1ans] = useState("");
  const [role1com, setRole1com] = useState("");
  const [role2ans, setRole2ans] = useState("");
  const [role2com, setRole2com] = useState("");
  const [role3ans, setRole3ans] = useState("");
  const [role3com, setRole3com] = useState("");
  const [role4ans, setRole4ans] = useState("");
  const [role4com, setRole4com] = useState("");
  const [role5ans, setRole5ans] = useState("");
  const [role5com, setRole5com] = useState("");
  const [role6ans, setRole6ans] = useState("");
  const [role6com, setRole6com] = useState("");
  const [role7ans, setRole7ans] = useState("");
  const [role7com, setRole7com] = useState("");

  // const [renderData, setRenderData] = useState([]);

  const [displayBasic, setDisplayBasic] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);

  const [formSubmit, setFormsubmit] = useState(false);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });


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

  useEffect(() => {
    function findScreenSize() {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    }
    window.addEventListener("resize", findScreenSize);
    return () => window.removeEventListener("resize", findScreenSize);
  }, [dimensions.width, dimensions.height]);

  window.addEventListener("beforeunload", function (e) {
    // console.log('beoferunload');
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
    //console.log("1st Useffect");
    try {
      function findScreenSize() {
        if (window.innerWidth < 1024) {
          setScreenSize(false);
        }
      }

      window.addEventListener("resize", findScreenSize());

      var newData = JSON.parse(localStorage.getItem("right"));
      if (newData) {
        //console.log("newdata is ", newData);
        for (let i = 0; i < newData.length; i++) {
          // //console.log(`hi ${i} `, newData[i]);
          var jjds = Object.values(newData[i]);
          if (i === 0) {
            //console.log("jjdsfgf", jjds[0].answer);
          } else {
          }
          //console.log("sf1", newData);
        }
        for (let i = 0; i < newData.length; i++) {
          // //console.log(`hi ${i} `, newData[i]);
          var jjds = Object.values(newData[i]);
          if (i === 0) {
            //console.log("jjdsfgf", jjds[0].answer);
            setRole1ans(jjds[0].answer);
            setRole1com(jjds[0].comment);
          } else if (i === 1) {
            setRole2ans(jjds[0].answer);
            setRole2com(jjds[0].comment);
          } else if (i === 2) {
            setRole3ans(jjds[0].answer);
            setRole3com(jjds[0].comment);
          } else if (i === 3) {
            setRole4ans(jjds[0].answer);
            setRole4com(jjds[0].comment);
          } else if (i === 4) {
            setRole5ans(jjds[0].answer);
            setRole5com(jjds[0].comment);
          } else if (i === 5) {
            setRole6ans(jjds[0].answer);
            setRole6com(jjds[0].comment);
          } else if (i === 6) {
            setRole7ans(jjds[0].answer);
            setRole7com(jjds[0].comment);
          }
          //console.log("sf1", newData);
        }
      }
    } catch (error) {
      navigate("/");
      window.location.reload(false);
    }
  }, []);

  useEffect(() => {
    //console.log("2nd useEffect ");
    var foundation = [];
    var rol1 = { answer: role1ans, comment: role1com };
    var rol2 = { answer: role2ans, comment: role2com };
    var rol3 = { answer: role3ans, comment: role3com };
    var rol4 = { answer: role4ans, comment: role4com };
    var rol5 = { answer: role5ans, comment: role5com };
    var rol6 = { answer: role6ans, comment: role6com };
    var rol7 = { answer: role7ans, comment: role7com };

    var roles1 = { role1: rol1 };
    var roles2 = { role2: rol2 };
    var roles3 = { role3: rol3 };
    var roles4 = { role4: rol4 };
    var roles5 = { role5: rol5 };
    var roles6 = { role6: rol6 };
    var roles7 = { role7: rol7 };

    // //console.log("found1- ", fou1);
    // //console.log("found2- ", fou2);
    foundation.push(roles1);
    foundation.push(roles2);
    foundation.push(roles3);
    foundation.push(roles4);
    foundation.push(roles5);
    foundation.push(roles6);
    foundation.push(roles7);

    // //console.log("2nd useEffect foundation - ", foundation);
    localStorage.setItem("right", JSON.stringify(foundation));

    allData.right.map((ele, idx) => {
      if (idx === 0) {
        ele["answer"] = role1ans;
        ele["comment"] = role1com;
      } else if (idx === 1) {
        ele["answer"] = role2ans;
        ele["comment"] = role2com;
      } else if (idx === 2) {
        ele["answer"] = role3ans;
        ele["comment"] = role3com;
      } else if (idx === 3) {
        ele["answer"] = role4ans;
        ele["comment"] = role4com;
      } else if (idx === 4) {
        ele["answer"] = role5ans;
        ele["comment"] = role5com;
      } else if (idx === 5) {
        ele["answer"] = role6ans;
        ele["comment"] = role6com;
      } else if (idx === 6) {
        ele["answer"] = role7ans;
        ele["comment"] = role7com;
      }
    });
    //console.log("allData.roles", allData.Roles);
    // setRenderData(allData.Foundation);
    if (
      role1ans &&
      role2ans &&
      role3ans &&
      role4ans &&
      role5ans &&
      role6ans &&
      role7ans
    ) {
      localStorage.setItem("rightDone", JSON.stringify(true));
    } else {
      localStorage.setItem("rightDone", JSON.stringify(false));
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

    if (budgetCheck) {
      setBudgetComplete(true);
    }
    if (govCheck) {
      setGovComplete(true);
    }
    if (valueCheck) {
      setValueComplete(true);
    }
    if (rightCheck) {
      setRightComplete(true);
    }
    if (purCheck) {
      setPurComplete(true);
    }
    if (processCheck) {
      setprocessComplete(true);
    }
  }, [
    role1ans,
    role2ans,
    role3ans,
    role4ans,
    role5ans,
    role6ans,
    role7ans,
    role1com,
    role2com,
    role3com,
    role4com,
    role5com,
    role6com,
    role7com,
  ]);

  function changing(e) {
    if (e.target.name === "q1") {
      if (e.target.type === "textarea") {
        setRole1com(e.target.value);
      } else {
        if (e.target.value === "1") {
          setRole1ans("1");
        } else if (e.target.value === "2") {
          setRole1ans("2");
        } else if (e.target.value === "3") {
          setRole1ans("3");
        } else if (e.target.value === "4") {
          setRole1ans("4");
        } else if (e.target.value === "5") {
          setRole1ans("5");
        } else {
          setRole1ans("6");
        }
      }
    } else if (e.target.name === "q2") {
      if (e.target.type === "textarea") {
        setRole2com(e.target.value);
      } else {
        if (e.target.value === "1") {
          setRole2ans("1");
        } else if (e.target.value === "2") {
          setRole2ans("2");
        } else if (e.target.value === "3") {
          setRole2ans("3");
        } else if (e.target.value === "4") {
          setRole2ans("4");
        } else if (e.target.value === "5") {
          setRole2ans("5");
        } else {
          setRole2ans("6");
        }
      }
    } else if (e.target.name === "q3") {
      if (e.target.type === "textarea") {
        setRole3com(e.target.value);
      } else {
        if (e.target.value === "1") {
          setRole3ans("1");
        } else if (e.target.value === "2") {
          setRole3ans("2");
        } else if (e.target.value === "3") {
          setRole3ans("3");
        } else if (e.target.value === "4") {
          setRole3ans("4");
        } else if (e.target.value === "5") {
          setRole3ans("5");
        } else {
          setRole3ans("6");
        }
      }
    } else if (e.target.name === "q4") {
      if (e.target.type === "textarea") {
        setRole4com(e.target.value);
      } else {
        if (e.target.value === "1") {
          setRole4ans("1");
        } else if (e.target.value === "2") {
          setRole4ans("2");
        } else if (e.target.value === "3") {
          setRole4ans("3");
        } else if (e.target.value === "4") {
          setRole4ans("4");
        } else if (e.target.value === "5") {
          setRole4ans("5");
        } else {
          setRole4ans("6");
        }
      }
    } else if (e.target.name === "q5") {
      if (e.target.type === "textarea") {
        setRole5com(e.target.value);
      } else {
        if (e.target.value === "1") {
          setRole5ans("1");
        } else if (e.target.value === "2") {
          setRole5ans("2");
        } else if (e.target.value === "3") {
          setRole5ans("3");
        } else if (e.target.value === "4") {
          setRole5ans("4");
        } else if (e.target.value === "5") {
          setRole5ans("5");
        } else {
          setRole5ans("6");
        }
      }
    } else if (e.target.name === "q6") {
      if (e.target.type === "textarea") {
        setRole6com(e.target.value);
      } else {
        if (e.target.value === "1") {
          setRole6ans("1");
        } else if (e.target.value === "2") {
          setRole6ans("2");
        } else if (e.target.value === "3") {
          setRole6ans("3");
        } else if (e.target.value === "4") {
          setRole6ans("4");
        } else if (e.target.value === "5") {
          setRole6ans("5");
        } else {
          setRole6ans("6");
        }
      }
    } else if (e.target.name === "q7") {
      if (e.target.type === "textarea") {
        setRole7com(e.target.value);
      } else {
        if (e.target.value === "1") {
          setRole7ans("1");
        } else if (e.target.value === "2") {
          setRole7ans("2");
        } else if (e.target.value === "3") {
          setRole7ans("3");
        } else if (e.target.value === "4") {
          setRole7ans("4");
        } else if (e.target.value === "5") {
          setRole7ans("5");
        } else {
          setRole7ans("6");
        }
      }
    }
  }

  // function closing(data) {
  //   //console.log(data);
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
          // onClick={() => onClick("displayForm")}
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
  const renderFooter1 = (name) => {
    return (
      <div className="form-btn1">
        <Button
          label="Review"
          icon="pi pi-angle-left"
          onClick={() => onHide(name)}
          className="edit-fin"
        />
        <Button
          label="Submit"
          // icon="pi pi-check"
          onClick={() => setFormsubmit(true)}
          autoFocus
          className="complete-fin"
        />
      </div>
    );
  };
  function changeingformdis(data) {
    setFormsubmit(data);
    setDisplayForm(data);
  }

  // //console.log("found1ans", found1ans);
  // //console.log("found1com", found1com);
  // //console.log("found2ans", found2ans);
  // //console.log("found2com", found2com);

  allData.right.map((ele, idx) => {
    if (idx === 0) {
      ele["answer"] = role1ans;
      ele["comment"] = role1com;
    } else if (idx === 1) {
      ele["answer"] = role2ans;
      ele["comment"] = role2com;
    } else if (idx === 2) {
      ele["answer"] = role3ans;
      ele["comment"] = role3com;
    } else if (idx === 3) {
      ele["answer"] = role4ans;
      ele["comment"] = role4com;
    } else if (idx === 4) {
      ele["answer"] = role5ans;
      ele["comment"] = role5com;
    } else if (idx === 5) {
      ele["answer"] = role6ans;
      ele["comment"] = role6com;
    } else if (idx === 6) {
      ele["answer"] = role7ans;
      ele["comment"] = role7com;
    }
  });
  // //console.log("allData.Foundation", allData.Foundation);
  function fullquestionclose() {
    setSee1(false);
    setSee2(false);
    setSee3(false);
    setSee4(false);
    setSee5(false);
    setSee6(false);
    setSee7(false);
  }
  function basic(data) {
    // console.log("form data close", data);
    setDisplayBasic(true);
  }
  return (
    <div onClick={() => fullquestionclose()}>
      {dimensions.width >= 1024 && screenSize ? (
        <div className="ro-full">
          {
            dialogShow ? <><Formdialog formDialogshow={dialogShow} closeformDialog={closingForm} /></> : <></>
          }
          <Successdialog successDialog={successShow} closeSuccess={closesuccessDialog} />

          <Header onClick={() => fullquestionclose()} dialog={headerPopupchange} />

          <Dialog
            header="Review"
            visible={displayBasic}
            className="dialog-header"
            // style={{ width: "60vw", height: "70vh" }}
            style={{ width: "950px", height: "500px" }}
            footer={renderFooter("displayBasic")}
            onHide={() => onHide("displayBasic")}
          >
            {/* <p>Hello World</p> */}
            <Review />
          </Dialog>

          <Dialog
            header="Personal Info"
            visible={displayForm}
            // className="dialog-header"
            // style={{ width: "60vw" }}
            className="dialog-header form-personal"
            // footer={renderFooter1("displayForm")}
            // onHide={() => onHide("displayForm")}
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
                  <p className={` more`}>
                    <BsChevronLeft />5 more
                  </p>
                </Link>
                <Link to="/budget">
                  <p className={`${budgetComplete ? `completed` : ``}  `}>
                    Budget
                  </p>
                </Link>
                <Link to="/governance">
                  <p className={`${govComplete ? `completed` : ``} `}>
                    Governance
                  </p>
                </Link>
                <Link to="/value">
                  <p className={`${valueComplete ? `completed` : ``} `}>
                    Value
                  </p>
                </Link>
                <Link to="/right">
                  <p className={`${rightComplete ? `completed` : ``} current`}>
                    Right - Sizing
                  </p>
                </Link>
                <Link to="/purchase">
                  <p className={`${purComplete ? `completed` : ``} `}>
                    Purchase
                  </p>
                </Link>
                <Link to="/process">
                  <p className={`${processComplete ? `completed` : ``} `}>
                    Process
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
                {allData.right.map((data, idx) => {
                  var inputData = "";
                  var seeing = "";

                  if (data.no === "q1") {
                    if (role1ans === "1") {
                      inputData = "Strongly Disagree";
                    } else if (role1ans === "2") {
                      inputData = "Somewhat Disagree";
                    } else if (role1ans === "3") {
                      inputData = "Disagree";
                    } else if (role1ans === "4") {
                      inputData = "Agree";
                    } else if (role1ans === "5") {
                      inputData = "Somewhat Agree";
                    } else if (role1ans === "6") {
                      inputData = "Strongly Agree";
                    }
                    seeing = see1;
                  } else if (data.no === "q2") {
                    if (role2ans === "1") {
                      inputData = "Strongly Disagree";
                    } else if (role2ans === "2") {
                      inputData = "Somewhat Disagree";
                    } else if (role2ans === "3") {
                      inputData = "Disagree";
                    } else if (role2ans === "4") {
                      inputData = "Agree";
                    } else if (role2ans === "5") {
                      inputData = "Somewhat Agree";
                    } else if (role2ans === "6") {
                      inputData = "Strongly Agree";
                    }
                    seeing = see2;
                  } else if (data.no === "q3") {
                    if (role3ans === "1") {
                      inputData = "Strongly Disagree";
                    } else if (role3ans === "2") {
                      inputData = "Somewhat Disagree";
                    } else if (role3ans === "3") {
                      inputData = "Disagree";
                    } else if (role3ans === "4") {
                      inputData = "Agree";
                    } else if (role3ans === "5") {
                      inputData = "Somewhat Agree";
                    } else if (role3ans === "6") {
                      inputData = "Strongly Agree";
                    }
                    seeing = see3;
                  } else if (data.no === "q4") {
                    if (role4ans === "1") {
                      inputData = "Strongly Disagree";
                    } else if (role4ans === "2") {
                      inputData = "Somewhat Disagree";
                    } else if (role4ans === "3") {
                      inputData = "Disagree";
                    } else if (role4ans === "4") {
                      inputData = "Agree";
                    } else if (role4ans === "5") {
                      inputData = "Somewhat Agree";
                    } else if (role4ans === "6") {
                      inputData = "Strongly Agree";
                    }
                    seeing = see4;
                  } else if (data.no === "q5") {
                    if (role5ans === "1") {
                      inputData = "Strongly Disagree";
                    } else if (role5ans === "2") {
                      inputData = "Somewhat Disagree";
                    } else if (role5ans === "3") {
                      inputData = "Disagree";
                    } else if (role5ans === "4") {
                      inputData = "Agree";
                    } else if (role5ans === "5") {
                      inputData = "Somewhat Agree";
                    } else if (role5ans === "6") {
                      inputData = "Strongly Agree";
                    }
                    seeing = see5;
                  } else if (data.no === "q6") {
                    if (role6ans === "1") {
                      inputData = "Strongly Disagree";
                    } else if (role6ans === "2") {
                      inputData = "Somewhat Disagree";
                    } else if (role6ans === "3") {
                      inputData = "Disagree";
                    } else if (role6ans === "4") {
                      inputData = "Agree";
                    } else if (role6ans === "5") {
                      inputData = "Somewhat Agree";
                    } else if (role6ans === "6") {
                      inputData = "Strongly Agree";
                    }
                    seeing = see6;
                  } else if (data.no === "q7") {
                    if (role7ans === "1") {
                      inputData = "Strongly Disagree";
                    } else if (role7ans === "2") {
                      inputData = "Somewhat Disagree";
                    } else if (role7ans === "3") {
                      inputData = "Disagree";
                    } else if (role7ans === "4") {
                      inputData = "Agree";
                    } else if (role7ans === "5") {
                      inputData = "Somewhat Agree";
                    } else if (role7ans === "6") {
                      inputData = "Strongly Agree";
                    }
                    seeing = see7;
                  }
                  function commentDisplay(data) {
                    //console.log(data);
                    if (data === "q1") {
                      setSee1(!seeing);
                      setSee2(false);
                      setSee3(false);
                      setSee4(false);
                      setSee5(false);
                      setSee6(false);
                      setSee7(false);
                    } else if (data === "q2") {
                      setSee2(!seeing);
                      setSee1(false);
                      setSee3(false);
                      setSee4(false);
                      setSee5(false);
                      setSee6(false);
                      setSee7(false);
                    } else if (data === "q3") {
                      setSee3(!seeing);
                      setSee1(false);
                      setSee2(false);
                      setSee4(false);
                      setSee5(false);
                      setSee6(false);
                      setSee7(false);
                    } else if (data === "q4") {
                      setSee4(!seeing);
                      setSee1(false);
                      setSee2(false);
                      setSee3(false);
                      setSee5(false);
                      setSee6(false);
                      setSee7(false);
                    } else if (data === "q5") {
                      setSee5(!seeing);
                      setSee1(false);
                      setSee2(false);
                      setSee3(false);
                      setSee4(false);
                      setSee6(false);
                    } else if (data === "q6") {
                      setSee6(!seeing);
                      setSee1(false);
                      setSee2(false);
                      setSee3(false);
                      setSee4(false);
                      setSee5(false);
                      setSee7(false);
                    } else if (data === "q7") {
                      setSee7(!seeing);
                      setSee1(false);
                      setSee2(false);
                      setSee3(false);
                      setSee4(false);
                      setSee5(false);
                      setSee6(false);
                    }
                  }

                  function questionClick() {
                    setSee1(false);
                    setSee2(false);
                    setSee3(false);
                    setSee4(false);
                    setSee5(false);
                    setSee6(false);
                    setSee7(false);
                  }
                  return (
                    <div key={idx} className="eachOne">
                      <div className="ro-mid-each">
                        <p onClick={() => questionClick()}>{data?.question}</p>
                        <div className="ro-div-range">
                          {data?.answer ? (
                            <input
                              type="range"
                              step="1"
                              max="6"
                              min="1"
                              value={data.answer || ""}
                              // defaultValue="6"
                              onChange={(e) => changing(e)}
                              name={data.no}
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
                            // onClick={() => commentDisplay(data.no)}
                            onClick={(e) => {
                              commentDisplay(data.no);
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                          />
                        ) : (
                          <BsChatDotsFill
                            className={data.comment ? `comment1` : `comment`}
                            // onClick={() => commentDisplay(data.no)}
                            onClick={(e) => {
                              commentDisplay(data.no);
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                          />
                        )}
                        {/* <BsChatDotsFill className="comment" onClick={() => commentDisplay(data.no)}/> */}
                        {/* <img
                      src={comment}
                      onClick={() => commentDisplay(data.no)}
                      alt="comment"
                      className="comment"
                    /> */}
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
            <Link to="/value">
              <button className="bottombtn prev">Prev</button>
            </Link>
            <Link to="/purchase">
              <button className="bottombtn next">
                Next <BsChevronRight />
              </button>
            </Link>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="error-message">
          <ErrorPage />
        </div>
      )}
    </div>
  );
};

export default Right;
