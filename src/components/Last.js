import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Chart } from "primereact/chart";
import "./last.css";
import axios from "axios";
import begineer from "../images/beginner.png";
import intermediate from "../images/inter.png";
import advance from "../images/advance.png";
import Successdialog from "./Successdialog";
import { Dialog } from "primereact/dialog";
import Form from "./Form";


import { Link, useNavigate } from "react-router-dom";

const Last = () => {
  // Chart.defaults.plugins.legend.display=false;
  const options = {
    plugins: {
      legend: { display: false },
    },
    events: [],
    // tooltips: {enabled: false},
    // hover:{mode:null},
  };
  const [dialogShow, setDialogShow] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [formSubmit, setFormsubmit] = useState(false);

  const [chartData, setChartData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const [indicator, setIndicator] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [rateTxt, setRateTxt] = useState("");

  const [begi, setBegi] = useState(false);
  const [inter, setInter] = useState(false);
  const [advan, setAdvan] = useState(false);
  const [successShow, setSuccessShow] = useState(false);
  const [displayBasic, setDisplayBasic] = useState(false);



  // const beginner="You're in the early stages of developing your cloud cost management capabilities."
  //  const  intermediate   = You have many of the basic best practices in place, and are moving on to optimizing.
  // Advanced    You score highly across most cloud cost management capabilities. Reach out to an analyst for ideas on how to improve.
  useEffect(() => {
    // navigate("/");
    // console.log("last page -------------------->");
    async function fetchData() {
      try {
        const userData = [];
        var sendingPost = {};

        var sendingData = JSON.parse(localStorage.getItem("Post-reviewData"));
        var userDetails = JSON.parse(localStorage.getItem("userDetails"));

        userData.push(sendingData);
        userData.push(userDetails);

        // console.log("hiiiiiiiiiiiiiiii", userDetails);
        sendingPost["userData"] = userDetails;

        for (let x in sendingData) {
          // console.log(x);
          if (x === "Foundation") {
            let ans = [];
            let each = sendingData[x];
            for (let i = 0; i < each.length; i++) {
              // console.log(each[i]);
              if (i === 0) {
                var found1 = {};
                found1["answer"] = each[i].answer;
                found1["comment"] = each[i].comment;
                ans.push({ found1: found1 });
              } else {
                var found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ found2: found2 });
              }
              sendingPost["Foundation"] = ans;
            }
          } else if (x === "Roles") {
            let ans = [];
            let each = sendingData[x];
            for (let i = 0; i < each.length; i++) {
              // console.log(each[i]);
              if (i === 0) {
                let found1 = {};
                found1["answer"] = each[i].answer;
                found1["comment"] = each[i].comment;
                ans.push({ roles1: found1 });
              } else if (i === 1) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ roles2: found2 });
              } else if (i === 2) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ roles3: found2 });
              } else if (i === 3) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ roles4: found2 });
              } else if (i === 4) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ roles5: found2 });
              }
              sendingPost["Roles"] = ans;
            }
          } else if (x === "Culture") {
            let ans = [];
            let each = sendingData[x];
            for (let i = 0; i < each.length; i++) {
              // console.log(each[i]);
              if (i === 0) {
                let found1 = {};
                found1["answer"] = each[i].answer;
                found1["comment"] = each[i].comment;
                ans.push({ culture1: found1 });
              } else if (i === 1) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ culture2: found2 });
              } else if (i === 2) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ culture3: found2 });
              } else if (i === 3) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ culture4: found2 });
              } else if (i === 4) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ culture5: found2 });
              } else if (i === 5) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ culture6: found2 });
              }
              sendingPost["culture"] = ans;
            }
          } else if (x === "Architecture") {
            let ans = [];
            let each = sendingData[x];
            for (let i = 0; i < each.length; i++) {
              // console.log(each[i]);
              if (i === 0) {
                let found1 = {};
                found1["answer"] = each[i].answer;
                found1["comment"] = each[i].comment;
                ans.push({ archi1: found1 });
              } else if (i === 1) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ archi2: found2 });
              } else if (i === 2) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ archi3: found2 });
              } else if (i === 3) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ archi4: found2 });
              } else if (i === 4) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ archi5: found2 });
              }
              sendingPost["architech"] = ans;
            }
          } else if (x === "Visibility") {
            let ans = [];
            let each = sendingData[x];
            for (let i = 0; i < each.length; i++) {
              // console.log(each[i]);
              if (i === 0) {
                let found1 = {};
                found1["answer"] = each[i].answer;
                found1["comment"] = each[i].comment;
                ans.push({ visi1: found1 });
              } else if (i === 1) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ visi2: found2 });
              } else if (i === 2) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ visi3: found2 });
              } else if (i === 3) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ visi4: found2 });
              } else if (i === 4) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ visi5: found2 });
              } else if (i === 5) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ visi6: found2 });
              } else if (i === 6) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ visi7: found2 });
              } else if (i === 7) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ visi8: found2 });
              } else if (i === 8) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ visi9: found2 });
              } else if (i === 9) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ visi10: found2 });
              } else if (i === 10) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ visi11: found2 });
              } else if (i === 11) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ visi12: found2 });
              }
              sendingPost["visi"] = ans;
            }
          } else if (x === "Budget") {
            let ans = [];
            let each = sendingData[x];
            for (let i = 0; i < each.length; i++) {
              // console.log(each[i]);
              if (i === 0) {
                let found1 = {};
                found1["answer"] = each[i].answer;
                found1["comment"] = each[i].comment;
                ans.push({ budget1: found1 });
              } else if (i === 1) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ budget2: found2 });
              } else if (i === 2) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ budget3: found2 });
              } else if (i === 3) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ budget4: found2 });
              } else if (i === 4) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ budget5: found2 });
              } else if (i === 5) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ budget6: found2 });
              }
              sendingPost["budget"] = ans;
            }
          } else if (x === "Governance") {
            let ans = [];
            let each = sendingData[x];
            for (let i = 0; i < each.length; i++) {
              //console.log(each[i]);
              if (i === 0) {
                let found1 = {};
                found1["answer"] = each[i].answer;
                found1["comment"] = each[i].comment;
                ans.push({ governance1: found1 });
              } else if (i === 1) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ governance2: found2 });
              } else if (i === 2) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ governance3: found2 });
              } else if (i === 3) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ governance4: found2 });
              } else if (i === 4) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ governance5: found2 });
              } else if (i === 5) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ governance6: found2 });
              }
              sendingPost["governance"] = ans;
            }
          } else if (x === "Value") {
            let ans = [];

            let each = sendingData[x];

            for (let i = 0; i < each.length; i++) {
              //console.log(each[i]);

              if (i === 0) {
                var value1 = {};

                value1["answer"] = each[i].answer;

                value1["comment"] = each[i].comment;

                ans.push({ value1: value1 });
              } else if (i === 1) {
                var value2 = {};

                value2["answer"] = each[i].answer;

                value2["comment"] = each[i].comment;

                ans.push({ value2: value2 });
              } else if (i === 2) {
                var value3 = {};

                value3["answer"] = each[i].answer;

                value3["comment"] = each[i].comment;

                ans.push({ value3: value3 });
              } else if (i === 3) {
                var value4 = {};

                value4["answer"] = each[i].answer;

                value4["comment"] = each[i].comment;

                ans.push({ value4: value4 });
              } else if (i === 4) {
                var value5 = {};

                value5["answer"] = each[i].answer;

                value5["comment"] = each[i].comment;

                ans.push({ value5: value5 });
              } else {
                var value6 = {};

                value6["answer"] = each[i].answer;

                value6["comment"] = each[i].comment;

                ans.push({ value6: value6 });
              }
              sendingPost["value"] = ans;
            }
          } else if (x === "right") {
            let ans = [];

            let each = sendingData[x];

            for (let i = 0; i < each.length; i++) {
              //console.log(each[i]);

              if (i === 0) {
                var right1 = {};

                right1["answer"] = each[i].answer;

                right1["comment"] = each[i].comment;

                ans.push({ right1: right1 });
              } else if (i === 1) {
                var right2 = {};

                right2["answer"] = each[i].answer;

                right2["comment"] = each[i].comment;

                ans.push({ right2: right2 });
              } else if (i === 2) {
                var right3 = {};

                right3["answer"] = each[i].answer;

                right3["comment"] = each[i].comment;

                ans.push({ right3: right3 });
              } else if (i === 3) {
                var right4 = {};

                right4["answer"] = each[i].answer;

                right4["comment"] = each[i].comment;

                ans.push({ right4: right4 });
              } else if (i === 4) {
                var right5 = {};

                right5["answer"] = each[i].answer;

                right5["comment"] = each[i].comment;

                ans.push({ right5: right5 });
              } else if (i === 5) {
                var right6 = {};

                right6["answer"] = each[i].answer;

                right6["comment"] = each[i].comment;

                ans.push({ right6: right6 });
              } else {
                var right7 = {};

                right7["answer"] = each[i].answer;

                right7["comment"] = each[i].comment;

                ans.push({ right7: right7 });
              }
              sendingPost["rightSize"] = ans;
            }
          } else if (x === "Purchase") {
            let ans = [];

            let each = sendingData[x];

            for (let i = 0; i < each.length; i++) {
              //console.log(each[i]);

              if (i === 0) {
                var purchase1 = {};

                purchase1["answer"] = each[i].answer;

                purchase1["comment"] = each[i].comment;

                ans.push({ purchase1: purchase1 });
              } else if (i === 1) {
                var purchase2 = {};

                purchase2["answer"] = each[i].answer;

                purchase2["comment"] = each[i].comment;

                // ans.push(purchase2);

                ans.push({ purchase2: purchase2 });
              } else if (i === 2) {
                var purchase3 = {};

                purchase3["answer"] = each[i].answer;

                purchase3["comment"] = each[i].comment;

                // ans.push(purchase3);

                ans.push({ purchase3: purchase3 });
              } else if (i === 3) {
                var purchase4 = {};

                purchase4["answer"] = each[i].answer;

                purchase4["comment"] = each[i].comment;

                // ans.push(purchase4);

                ans.push({ purchase4: purchase4 });
              } else if (i === 4) {
                var purchase5 = {};

                purchase5["answer"] = each[i].answer;

                purchase5["comment"] = each[i].comment;

                // ans.push(purchase5);

                ans.push({ purchase5: purchase5 });
              } else {
                var purchase6 = {};

                purchase6["answer"] = each[i].answer;

                purchase6["comment"] = each[i].comment;

                // ans.push(purchase6);

                ans.push({ purchase6: purchase6 });
              }
              sendingPost["purchase"] = ans;
            }
          } else if (x === "Process") {
            let ans = [];
            let each = sendingData[x];
            for (let i = 0; i < each.length; i++) {
              //console.log(each[i]);
              if (i === 0) {
                let found1 = {};
                found1["answer"] = each[i].answer;
                found1["comment"] = each[i].comment;
                ans.push({ process1: found1 });
              } else if (i === 1) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ process2: found2 });
              } else if (i === 2) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ process3: found2 });
              } else if (i === 3) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ process4: found2 });
              } else if (i === 4) {
                let found2 = {};
                found2["answer"] = each[i].answer;
                found2["comment"] = each[i].comment;
                // ans.push(found2);
                ans.push({ process5: found2 });
              }
              sendingPost["process"] = ans;
            }
          }
        }
        // console.log("sendingData  - ", sendingData);
        // console.log("sendingPost  - ", sendingPost);
        // //console.log("sendingPost ------------------------", sendingPost);
        const res = await axios.post(
          // "https://mlmatassappsvc-6yditixtuq-uc.a.run.app",
          "https://finopsassessor-tnyo2gb4zq-uw.a.run.app",
          sendingPost,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json;charset=UTF-8",
            },
          }
        );

        // console.log("res.data - ", res?.data);
        setName(res?.data.firstname);
        setRating(res?.data.rating);
        setRateTxt(res?.data.rating_text);
        setIndicator(res.data.rating);
        // var showImage = "";

        if (res.data.rating === "Beginner") {
          setBegi(true);
        } else if (res.data.rating === "Advanced") {
          setAdvan(true);
        } else {
          setInter(true);
        }
        let userData1 = [];
        userData1.push(res?.data.Foundation);
        userData1.push(res?.data.Roles);
        userData1.push(res?.data.culture);
        userData1.push(res?.data.architech);
        userData1.push(res?.data.visi);
        userData1.push(res?.data.budget);
        userData1.push(res?.data.governance);
        userData1.push(res?.data.value);
        userData1.push(res?.data.rightSize);
        userData1.push(res?.data.purchase);
        userData1.push(res?.data.process);
        // console.log("userData - ", userData);
        // console.log("res.headers- ", res.headers);
        // for (let x in res.data.data) {
        //   // console.log(res.data.data[x]);
        //   userData.push(res.data.data[x]);
        // }
        setChartData({
          labels: [
            `Foundation(${res.data.Foundation})`,
            `Roles(${res.data.Roles})`,
            `Culture(${res.data.culture})`,
            `Architecture(${res.data.architech})`,
            `Visibility(${res.data.visi})`,
            `Budget(${res.data.budget})`,
            `Governance(${res.data.governance})`,
            `Value(${res.data.value})`,
            `Right(${res.data.rightSize})`,
            `Purchase(${res.data.purchase})`,
            `Process(${res.data.process})`,
          ],
          // legend: {
          //   display: false,
          // },
          // labels: {
          //   display: false,
          // },
          datasets: [
            {
              label: res?.data.firstname,
              // display:none,
              backgroundColor: "#680FD280",
              // backgroundImage: "linear-gradient(284.45deg, #EE691E 20.48%, #680FD2 79.52%)",
              borderColor: "#EE691E50",
              pointBackgroundColor: "rgba(255,99,132,1)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(255,99,132,1)",
              data: userData1,
            },
          ],
        });
        setIsLoading(false);

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

        // console.log("heloooooo", sendingData, userDetails);

        if (!sendingData || !userDetails) {
          // console.log("No data is there");
          setError(true);
          navigate("/");
        }
      } catch (err) {
        // console.log("error getting----");
        navigate("/");
        // console.log(err);
      }
    }
    fetchData();
  }, []);

  function headerPopupchange(data) {
    setDialogShow(data);
  }

  function closesuccessDialog() {
    setSuccessShow(false)
  }
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  function basic(data) {
    setDisplayBasic(true);
  }
  function changeingformdis(data) {
    setFormsubmit(data);
    // console.log("close");
    setDisplayForm(data);
  }

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
    displayForm: setDisplayForm,
  };

  return (
    <div className="last-fulling">
      {isLoading ? (
        <div className="loading">
          <i className="pi pi-spin pi-spinner" style={{ fontSize: "2em" }}></i>{" "}
          Loading
        </div>
      ) : (
        <div>
          <Header dialog={headerPopupchange} />
          <Successdialog successDialog={successShow} closeSuccess={closesuccessDialog} />

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

          {error ? (
            <h2>
              <Link to="/">Go to Home Page</Link>
            </h2>
          ) : (
            <div className="w-mid">
              <div className="las-width">
                <div className="overall">
                  <p className="over-p">Overall capability Score</p>
                </div>
                <div className="la-middle">
                  <div className="last1">
                    <div className="la-first">
                      {begi ? <img src={begineer} alt="overall" /> : <></>}
                      {inter ? <img src={intermediate} alt="overall" /> : <></>}
                      {advan ? <img src={advance} alt="overall" /> : <></>}

                      <p className="la-white la1">{rating} </p>
                      <p className="la-white">
                        Hi {name} ,{rateTxt}
                      </p>
                    </div>
                  </div>
                  <div className="last1 la-second">
                    <Chart
                      type="radar"
                      data={chartData}
                      options={options}
                      style={{ position: "relative", width: "60%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Last;
