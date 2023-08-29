import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axiosClient from "../../utils/axiosClient";
// import {
//   KEY_ACCESS_TOKEN,
//   settingItemFromLocalStorage,
//   setItem,
// } from "../../utils/localStorageManage";

function Dashboard() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  // console.log(axiosClient.baseUrl);
  async function handleSubmit(event) {
    event.preventDefault(); // it prevent to reload the page
    try {
      //   const result = await axiosClient.post("/auth/login", {
      //     email,
      //     password,
      //   });

      // console.log(result);
      // settingItemFromLocalStorage(
      // setItem(KEY_ACCESS_TOKEN, JSON.stringify(result.accessToken));
      // setItem(KEY_ACCESS_TOKEN, result.accessToken);
      // console.log(result.accessToken);
      console.log("logged in ");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  //   return (
  //     <div className="login">
  //       <div className="login-box">
  //         <h2 className="heading">Login</h2>
  //         <form onSubmit={handleSubmit}>
  //           {/* providing id to the input field is important,as id can be linked to label */}
  //           <label htmlFor="email">Email</label>
  //           <input
  //             type="email"
  //             className="email"
  //             id="email"
  //             onChange={(event) => setEmail(event.target.value)}
  //           />

  //           <label htmlFor="password">Password</label>
  //           <input
  //             type="password"
  //             className="password"
  //             id="password"
  //             onChange={(event) => setPassword(event.target.value)}
  //           />
  //           <button type="submit" onSubmit={handleSubmit}>
  //             Login
  //           </button>
  //         </form>
  //         <p className="signUp">
  //           Need an account? <Link to="/signup">SignUp</Link>
  //         </p>
  //       </div>
  //     </div>
  //   );

  return (
    <div
      className="ELearning"
      style={{
        width: 1916,
        height: 1024,
        position: "relative",
        background: "#FAFAFA",
        borderRadius: 14,
        overflow: "hidden",
      }}
    >
      <div
        className="Rectangle6624"
        style={{
          width: 433,
          height: 1024,
          left: 1445,
          top: -2,
          position: "absolute",
          background:
            "linear-gradient(180deg, #7D5999 0%, rgba(125.11, 89.37, 153.20, 0.51) 100%, rgba(125.11, 89.37, 153.20, 0) 100%)",
        }}
      ></div>
      <div
        className="Group34601"
        style={{
          width: 334,
          height: 277,
          left: 1497,
          top: 235,
          position: "absolute",
        }}
      >
        <div
          className="Group34600"
          style={{
            width: 32.36,
            height: 277,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 5.02,
              height: 20.38,
              left: 13.28,
              top: 48.83,
              position: "absolute",
              opacity: 0.3,
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            1
          </div>
          <div
            style={{
              width: 9.03,
              height: 20.38,
              left: 12.21,
              top: 101.08,
              position: "absolute",
              opacity: 0.3,
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            8
          </div>
          <div
            style={{
              width: 14.05,
              height: 20.38,
              left: 8.98,
              top: 153.33,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            15
          </div>
          <div
            style={{
              width: 15.05,
              height: 20.38,
              left: 8.98,
              top: 204.37,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            22
          </div>
          <div
            style={{
              width: 17.06,
              height: 20.38,
              left: 7.9,
              top: 256.62,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            29
          </div>
          <div
            className="DowRegular"
            style={{
              width: 32.36,
              height: 47.21,
              left: 0,
              top: 0,
              position: "absolute",
              borderRadius: 4.29,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Frame3813"
              style={{
                width: 52.57,
                height: 47.21,
                paddingLeft: 21.46,
                paddingRight: 21.46,
                paddingTop: 13.95,
                paddingBottom: 13.95,
                borderRadius: 4.29,
                justifyContent: "center",
                alignItems: "center",
                gap: 10.73,
                display: "flex",
              }}
            >
              <div
                className="Frame3814"
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 10.73,
                  display: "flex",
                }}
              >
                <div
                  className="Mo"
                  style={{
                    textAlign: "center",
                    color: "#3649F9",
                    fontSize: 12.88,
                    fontFamily: "DM Sans",
                    fontWeight: "700",
                    lineHeight: 18.24,
                    wordWrap: "break-word",
                  }}
                >
                  Mo
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="Group34599"
          style={{
            width: 42.92,
            height: 277,
            left: 37,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 8.03,
              height: 20.38,
              left: 25.81,
              top: 48.83,
              position: "absolute",
              opacity: 0.3,
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            2
          </div>
          <div
            style={{
              width: 9.03,
              height: 20.38,
              left: 24.73,
              top: 101.08,
              position: "absolute",
              opacity: 0.3,
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            9
          </div>
          <div
            style={{
              width: 14.05,
              height: 20.38,
              left: 22.58,
              top: 153.33,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            16
          </div>
          <div
            style={{
              width: 16.05,
              height: 20.38,
              left: 21.5,
              top: 204.37,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            23
          </div>
          <div
            style={{
              width: 19.06,
              height: 20.38,
              left: 20.42,
              top: 256.62,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            30
          </div>
          <div
            className="DowRegular"
            style={{
              width: 42.92,
              height: 47.21,
              left: 0,
              top: 0,
              position: "absolute",
              borderRadius: 4.29,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "inline-flex",
            }}
          >
            <div
              className="Frame3813"
              style={{
                width: 42.92,
                height: 47.21,
                paddingLeft: 21.46,
                paddingRight: 21.46,
                paddingTop: 13.95,
                paddingBottom: 13.95,
                borderRadius: 4.29,
                justifyContent: "center",
                alignItems: "center",
                gap: 10.73,
                display: "flex",
              }}
            >
              <div
                className="Tu"
                style={{
                  textAlign: "center",
                  color: "#3649F9",
                  fontSize: 12.88,
                  fontFamily: "DM Sans",
                  fontWeight: "700",
                  lineHeight: 18.24,
                  wordWrap: "break-word",
                }}
              >
                Tu
              </div>
            </div>
          </div>
        </div>
        <div
          className="Group34598"
          style={{
            width: 42.92,
            height: 277,
            left: 92,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 8.03,
              height: 20.38,
              left: 21.4,
              top: 48.83,
              position: "absolute",
              opacity: 0.3,
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            3
          </div>
          <div
            style={{
              width: 16.05,
              height: 20.38,
              left: 18.17,
              top: 101.08,
              position: "absolute",
              opacity: 0.3,
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            10
          </div>
          <div
            style={{
              width: 13.04,
              height: 20.38,
              left: 19.25,
              top: 153.33,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            17
          </div>
          <div
            style={{
              width: 16.05,
              height: 20.38,
              left: 17.1,
              top: 204.37,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            24
          </div>
          <div
            style={{
              width: 13.04,
              height: 20.38,
              left: 19.25,
              top: 256.62,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            31
          </div>
          <div
            className="DowRegular"
            style={{
              width: 42.92,
              height: 47.21,
              left: 0,
              top: 0,
              position: "absolute",
              borderRadius: 4.29,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10.73,
              display: "inline-flex",
            }}
          >
            <div
              className="Frame3813"
              style={{
                width: 42.92,
                height: 47.21,
                paddingLeft: 21.46,
                paddingRight: 21.46,
                paddingTop: 13.95,
                paddingBottom: 13.95,
                borderRadius: 4.29,
                justifyContent: "center",
                alignItems: "center",
                gap: 10.73,
                display: "inline-flex",
              }}
            >
              <div
                className="We"
                style={{
                  textAlign: "center",
                  color: "#3649F9",
                  fontSize: 12.88,
                  fontFamily: "DM Sans",
                  fontWeight: "700",
                  lineHeight: 18.24,
                  wordWrap: "break-word",
                }}
              >
                We
              </div>
            </div>
          </div>
        </div>
        <div
          className="Group34597"
          style={{
            width: 48.28,
            height: 224.75,
            left: 151,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="Oval"
            style={{
              width: 37.68,
              height: 42.53,
              left: 1.16,
              top: 91.36,
              position: "absolute",
              background: "#3649F9",
              borderRadius: 9999,
            }}
          />
          <div
            style={{
              width: 9.03,
              height: 20.38,
              left: 15.15,
              top: 48.83,
              position: "absolute",
              opacity: 0.3,
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            4
          </div>
          <div
            style={{
              width: 10.03,
              height: 20.38,
              left: 15.15,
              top: 102.3,
              position: "absolute",
              color: "white",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            11
          </div>
          <div
            style={{
              width: 14.05,
              height: 20.38,
              left: 13,
              top: 153.33,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            18
          </div>
          <div
            style={{
              width: 17.06,
              height: 20.38,
              left: 10.85,
              top: 204.37,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            25
          </div>
          <div
            className="DowRegular"
            style={{
              width: 48.28,
              height: 47.21,
              left: 0,
              top: 0,
              position: "absolute",
              borderRadius: 4.29,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10.73,
              display: "inline-flex",
            }}
          >
            <div
              className="Frame3813"
              style={{
                width: 48.28,
                height: 47.21,
                paddingLeft: 21.46,
                paddingRight: 21.46,
                paddingTop: 13.95,
                paddingBottom: 13.95,
                borderRadius: 4.29,
                justifyContent: "center",
                alignItems: "center",
                gap: 10.73,
                display: "inline-flex",
              }}
            >
              <div
                className="Th"
                style={{
                  textAlign: "center",
                  color: "#3649F9",
                  fontSize: 12.88,
                  fontFamily: "DM Sans",
                  fontWeight: "700",
                  lineHeight: 18.24,
                  wordWrap: "break-word",
                }}
              >
                Th
              </div>
            </div>
          </div>
        </div>
        <div
          className="Group34596"
          style={{
            width: 43.99,
            height: 224.75,
            left: 203,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 9.03,
              height: 20.38,
              left: 16.98,
              top: 48.83,
              position: "absolute",
              opacity: 0.3,
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            5
          </div>
          <div
            style={{
              width: 13.04,
              height: 20.38,
              left: 14.83,
              top: 101.08,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            12
          </div>
          <div
            style={{
              width: 14.05,
              height: 20.38,
              left: 14.83,
              top: 153.33,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            19
          </div>
          <div
            style={{
              width: 17.06,
              height: 20.38,
              left: 12.67,
              top: 204.37,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            26
          </div>
          <div
            className="DowRegular"
            style={{
              width: 43.99,
              height: 47.21,
              left: 0,
              top: 0,
              position: "absolute",
              borderRadius: 4.29,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10.73,
              display: "inline-flex",
            }}
          >
            <div
              className="Frame3813"
              style={{
                width: 43.99,
                height: 47.21,
                paddingLeft: 21.46,
                paddingRight: 21.46,
                paddingTop: 13.95,
                paddingBottom: 13.95,
                borderRadius: 4.29,
                justifyContent: "center",
                alignItems: "center",
                gap: 10.73,
                display: "inline-flex",
              }}
            >
              <div
                className="Fr"
                style={{
                  textAlign: "center",
                  color: "#3649F9",
                  fontSize: 12.88,
                  fontFamily: "DM Sans",
                  fontWeight: "700",
                  lineHeight: 18.24,
                  wordWrap: "break-word",
                }}
              >
                Fr
              </div>
            </div>
          </div>
        </div>
        <div
          className="Group34595"
          style={{
            width: 41.84,
            height: 224.75,
            left: 250,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 9.03,
              height: 20.38,
              left: 20.58,
              top: 48.83,
              position: "absolute",
              opacity: 0.3,
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            6
          </div>
          <div
            style={{
              width: 13.04,
              height: 20.38,
              left: 18.43,
              top: 101.08,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            13
          </div>
          <div
            style={{
              width: 18.06,
              height: 20.38,
              left: 16.27,
              top: 153.33,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            20
          </div>
          <div
            style={{
              width: 15.05,
              height: 20.38,
              left: 17.35,
              top: 204.37,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            27
          </div>
          <div
            className="DowRegular"
            style={{
              width: 41.84,
              height: 47.21,
              left: 0,
              top: 0,
              position: "absolute",
              borderRadius: 4.29,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10.73,
              display: "inline-flex",
            }}
          >
            <div
              className="Frame3813"
              style={{
                width: 41.84,
                height: 47.21,
                paddingLeft: 21.46,
                paddingRight: 21.46,
                paddingTop: 13.95,
                paddingBottom: 13.95,
                borderRadius: 4.29,
                justifyContent: "center",
                alignItems: "center",
                gap: 10.73,
                display: "inline-flex",
              }}
            >
              <div
                className="Sa"
                style={{
                  textAlign: "center",
                  color: "#3649F9",
                  fontSize: 12.88,
                  fontFamily: "DM Sans",
                  fontWeight: "700",
                  lineHeight: 18.24,
                  wordWrap: "break-word",
                }}
              >
                Sa
              </div>
            </div>
          </div>
        </div>
        <div
          className="Group34594"
          style={{
            width: 16.05,
            height: 175.92,
            left: 317.95,
            top: 48.83,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 8.03,
              height: 20.38,
              left: 4.31,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            7
          </div>
          <div
            style={{
              width: 14.05,
              height: 20.38,
              left: 1.08,
              top: 52.25,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            14
          </div>
          <div
            style={{
              width: 13.04,
              height: 20.38,
              left: 2.15,
              top: 104.5,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            21
          </div>
          <div
            style={{
              width: 16.05,
              height: 20.38,
              left: 0,
              top: 155.53,
              position: "absolute",
              color: "black",
              fontSize: 15.02,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            28
          </div>
        </div>
      </div>
      <div
        className="DowRegular"
        style={{
          left: 1794,
          top: 235,
          position: "absolute",
          borderRadius: 4.29,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 10.73,
          display: "inline-flex",
        }}
      >
        <div
          className="Frame3813"
          style={{
            width: 45.06,
            height: 47.21,
            paddingLeft: 21.46,
            paddingRight: 21.46,
            paddingTop: 13.95,
            paddingBottom: 13.95,
            borderRadius: 4.29,
            justifyContent: "center",
            alignItems: "center",
            gap: 10.73,
            display: "inline-flex",
          }}
        >
          <div
            className="Su"
            style={{
              textAlign: "center",
              color: "#3649F9",
              fontSize: 12.88,
              fontFamily: "DM Sans",
              fontWeight: "700",
              lineHeight: 18.24,
              wordWrap: "break-word",
            }}
          >
            Su
          </div>
        </div>
      </div>
      <div
        className="MonthYear"
        style={{
          left: 1502,
          top: 160,
          position: "absolute",
          color: "#1B1D21",
          fontSize: 36,
          fontFamily: "CocoSharp",
          fontWeight: "700",
          lineHeight: 46,
          wordWrap: "break-word",
        }}
      >
        July, 2021
      </div>
      <div
        className="Schedule"
        style={{
          left: 1047,
          top: 512,
          position: "absolute",
          color: "black",
          fontSize: 20,
          fontFamily: "CocoSharp",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Schedule
      </div>
      <div
        className="Group34603"
        style={{
          width: 353,
          height: 416,
          left: 1495,
          top: 610,
          position: "absolute",
        }}
      >
        <div
          className="Rectangle1140"
          style={{
            width: 353,
            height: 70,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#F9F9F9",
            borderRadius: 14,
          }}
        />
        <div
          className="VuesaxLinearArrowRight"
          style={{
            width: 14,
            height: 14,
            left: 309,
            top: 28,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="ArrowRight"
            style={{ width: 14, height: 14, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 4.14,
                height: 9.24,
                left: 5.2,
                top: 2.38,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 14,
                height: 14,
                left: 14,
                top: 14,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Group34602"
          style={{
            width: 136,
            height: 404,
            left: 66,
            top: 12,
            position: "absolute",
          }}
        >
          <div
            className="EnglishClasses"
            style={{
              left: 0,
              top: 0,
              position: "absolute",
              color: "black",
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            English classes
          </div>
          <div
            className="Connect2Learn"
            style={{
              width: 134,
              height: 26,
              left: 2,
              top: 378,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 15,
              fontFamily: "Play",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Connect 2 Learn
          </div>
          <div
            className="Connect2Learn"
            style={{
              width: 134,
              height: 26,
              left: 0,
              top: 32,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 15,
              fontFamily: "Play",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Connect 2 Learn
          </div>
        </div>
        <div
          className="Ellipse114"
          style={{
            width: 6,
            height: 6,
            left: 30,
            top: 33,
            position: "absolute",
            background: "#3649F9",
            borderRadius: 9999,
          }}
        />
      </div>
      <div
        className="Group34606"
        style={{
          width: 353,
          height: 70,
          left: 1495,
          top: 888,
          position: "absolute",
        }}
      >
        <div
          className="Rectangle1140"
          style={{
            width: 353,
            height: 70,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#F9F9F9",
            borderRadius: 14,
          }}
        />
        <div
          className="VuesaxLinearArrowRight"
          style={{
            width: 14,
            height: 14,
            left: 309,
            top: 28,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="ArrowRight"
            style={{ width: 14, height: 14, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 4.14,
                height: 9.24,
                left: 5.2,
                top: 2.38,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 14,
                height: 14,
                left: 14,
                top: 14,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Group34602"
          style={{
            width: 134,
            height: 55,
            left: 65,
            top: 12,
            position: "absolute",
          }}
        >
          <div
            className="EnglishClasses"
            style={{
              left: 1,
              top: 0,
              position: "absolute",
              color: "black",
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            English classes
          </div>
          <div
            className="Connect2Learn"
            style={{
              width: 134,
              height: 26,
              left: 0,
              top: 29,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 15,
              fontFamily: "Play",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Connect 2 Learn
          </div>
        </div>
        <div
          className="Ellipse114"
          style={{
            width: 6,
            height: 6,
            left: 30,
            top: 33,
            position: "absolute",
            background: "#3649F9",
            borderRadius: 9999,
          }}
        />
      </div>
      <div
        className="Group34604"
        style={{
          width: 353,
          height: 70,
          left: 1495,
          top: 701,
          position: "absolute",
        }}
      >
        <div
          className="Rectangle1140"
          style={{
            width: 353,
            height: 70,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#F9F9F9",
            borderRadius: 14,
          }}
        />
        <div
          className="VuesaxLinearArrowRight"
          style={{
            width: 14,
            height: 14,
            left: 309,
            top: 28,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="ArrowRight"
            style={{ width: 14, height: 14, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 4.14,
                height: 9.24,
                left: 5.2,
                top: 2.38,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 14,
                height: 14,
                left: 14,
                top: 14,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="MathematicClasses"
          style={{
            left: 66,
            top: 12,
            position: "absolute",
            color: "black",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Mathematic classes
        </div>
        <div
          className="Ellipse114"
          style={{
            width: 6,
            height: 6,
            left: 30,
            top: 33,
            position: "absolute",
            background: "#3649F9",
            borderRadius: 9999,
          }}
        />
      </div>
      <div
        className="Group34605"
        style={{
          width: 353,
          height: 72,
          left: 1495,
          top: 794,
          position: "absolute",
        }}
      >
        <div
          className="Rectangle1140"
          style={{
            width: 353,
            height: 70,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#F9F9F9",
            borderRadius: 14,
          }}
        />
        <div
          className="VuesaxLinearArrowRight"
          style={{
            width: 14,
            height: 14,
            left: 309,
            top: 28,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="ArrowRight"
            style={{ width: 14, height: 14, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 4.14,
                height: 9.24,
                left: 5.2,
                top: 2.38,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 14,
                height: 14,
                left: 14,
                top: 14,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Group34602"
          style={{
            width: 134,
            height: 60,
            left: 66,
            top: 12,
            position: "absolute",
          }}
        >
          <div
            className="PhysicalClasses"
            style={{
              left: 0,
              top: 0,
              position: "absolute",
              color: "black",
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Physical classes
          </div>
          <div
            className="Connect2Learn"
            style={{
              width: 134,
              height: 26,
              left: 0,
              top: 34,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 15,
              fontFamily: "Play",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Connect 2 Learn
          </div>
        </div>
        <div
          className="Ellipse114"
          style={{
            width: 6,
            height: 6,
            left: 30,
            top: 33,
            position: "absolute",
            background: "#3649F9",
            borderRadius: 9999,
          }}
        />
      </div>
      <div
        className="Group47874"
        style={{
          width: 353,
          height: 70,
          left: 1495,
          top: 978,
          position: "absolute",
        }}
      >
        <div
          className="Rectangle1140"
          style={{
            width: 353,
            height: 70,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#F9F9F9",
            borderRadius: 14,
          }}
        />
        <div
          className="VuesaxLinearArrowRight"
          style={{
            width: 14,
            height: 14,
            left: 309,
            top: 28,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="ArrowRight"
            style={{ width: 14, height: 14, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 4.14,
                height: 9.24,
                left: 5.2,
                top: 2.38,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 14,
                height: 14,
                left: 14,
                top: 14,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Group34602"
          style={{
            width: 131,
            height: 46,
            left: 66,
            top: 12,
            position: "absolute",
          }}
        >
          <div
            className="PhysicalClasses"
            style={{
              left: 0,
              top: 0,
              position: "absolute",
              color: "black",
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Physical classes
          </div>
          <div
            className="TikaSarakSPd"
            style={{
              left: 0,
              top: 32,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 12,
              fontFamily: "CocoSharp",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Tika sarak s.pd
          </div>
        </div>
        <div
          className="Ellipse114"
          style={{
            width: 6,
            height: 6,
            left: 30,
            top: 33,
            position: "absolute",
            background: "#3649F9",
            borderRadius: 9999,
          }}
        />
      </div>
      <div
        className="Rectangle5695"
        style={{
          width: 262,
          height: 982,
          left: 15,
          top: 40,
          position: "absolute",
          background: "#8552A5",
          borderRadius: 8,
        }}
      />
      <div
        className="Group34589"
        style={{ left: 50, top: 947, position: "absolute", opacity: 0.4 }}
      >
        <div
          className="VuesaxBoldLogout"
          style={{
            width: 24,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Logout"
            style={{ width: 24, height: 24, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 12.99,
                height: 20,
                left: 9,
                top: 2,
                position: "absolute",
                background: "black",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 7,
                height: 8.2,
                left: 2,
                top: 7.9,
                position: "absolute",
                background: "black",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 24,
                height: 24,
                left: 24,
                top: 24,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
                background: "black",
              }}
            ></div>
          </div>
        </div>
        <div
          className="Logout"
          style={{
            left: 42,
            top: 1,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "CocoSharp",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Logout
        </div>
      </div>
      <div
        className="Rectangle1137"
        style={{
          width: 196,
          height: 49,
          left: 34,
          top: 161,
          position: "absolute",
          background: "#6E78DB",
          borderRadius: 8,
        }}
      />
      <div
        className="Group34582"
        style={{ left: 50, top: 172, position: "absolute" }}
      >
        <div
          className="Dashboard"
          style={{
            left: 38,
            top: 0,
            position: "absolute",
            color: "white",
            fontSize: 18,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Dashboard
        </div>
        <div
          className="VuesaxBoldElement4"
          style={{
            width: 20,
            height: 20,
            left: 0,
            top: 2,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Element4"
            style={{ width: 20, height: 20, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 7.08,
                height: 9.17,
                left: 10.83,
                top: 1.67,
                position: "absolute",
                background: "white",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 7.08,
                height: 9.17,
                left: 2.08,
                top: 9.17,
                position: "absolute",
                background: "white",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 20,
                height: 20,
                left: 20,
                top: 20,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 7.08,
                height: 5.83,
                left: 10.83,
                top: 12.5,
                position: "absolute",
                background: "white",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 7.08,
                height: 5.83,
                left: 2.08,
                top: 1.67,
                position: "absolute",
                background: "white",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Group34583"
        style={{
          width: 198,
          height: 112,
          left: 50,
          top: 228,
          position: "absolute",
          opacity: 0.4,
        }}
      >
        <div
          className="Courses"
          style={{
            width: 169,
            height: 40,
            left: 29,
            top: 0,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Courses
        </div>
        <div
          className="VuesaxBoldCalendar"
          style={{
            width: 20,
            height: 20,
            left: 0,
            top: 92,
            position: "absolute",
            background: "black",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Calendar"
            style={{ width: 20, height: 20, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 20,
                height: 20,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0,
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 14.94,
                height: 5.91,
                left: 2.53,
                top: 1.04,
                position: "absolute",
                background: "#6D7C90",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 15,
                height: 10.13,
                left: 2.5,
                top: 8.2,
                position: "absolute",
                background: "#6D7C90",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Group47898"
        style={{
          width: 198,
          height: 112,
          left: 50,
          top: 228,
          position: "absolute",
          opacity: 0.4,
        }}
      >
        <div
          className="Courses"
          style={{
            width: 169,
            height: 40,
            left: 29,
            top: 0,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Courses
        </div>
        <div
          className="VuesaxBoldCalendar"
          style={{
            width: 20,
            height: 20,
            left: 0,
            top: 92,
            position: "absolute",
            background: "black",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Calendar"
            style={{ width: 20, height: 20, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 20,
                height: 20,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0,
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 14.94,
                height: 5.91,
                left: 2.53,
                top: 1.04,
                position: "absolute",
                background: "#6D7C90",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 15,
                height: 10.13,
                left: 2.5,
                top: 8.2,
                position: "absolute",
                background: "#6D7C90",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Group34584"
        style={{
          width: 89,
          height: 108,
          left: 50,
          top: 232,
          position: "absolute",
        }}
      >
        <div
          className="Exams"
          style={{
            left: 30,
            top: 81,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Exams
        </div>
        <div
          className="VuesaxBoldBriefcase"
          style={{
            width: 20,
            height: 20,
            left: 0,
            top: 0,
            position: "absolute",
            background: "black",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="VuesaxBoldBriefcase"
            style={{ width: 20, height: 20, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 16.66,
                height: 12.32,
                left: 1.67,
                top: 1.47,
                position: "absolute",
                background: "#6D7C90",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 16.12,
                height: 7.41,
                left: 1.95,
                top: 11.12,
                position: "absolute",
                background: "#6D7C90",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 20,
                height: 20,
                left: 20,
                top: 20,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Group34584"
        style={{
          width: 89,
          height: 108,
          left: 50,
          top: 232,
          position: "absolute",
        }}
      >
        <div
          className="Exams"
          style={{
            left: 30,
            top: 81,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Exams
        </div>
        <div
          className="VuesaxBoldBriefcase"
          style={{
            width: 20,
            height: 20,
            left: 0,
            top: 0,
            position: "absolute",
            background: "black",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="VuesaxBoldBriefcase"
            style={{ width: 20, height: 20, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 16.66,
                height: 12.32,
                left: 1.67,
                top: 1.47,
                position: "absolute",
                background: "#6D7C90",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 16.12,
                height: 7.41,
                left: 1.95,
                top: 11.12,
                position: "absolute",
                background: "#6D7C90",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 20,
                height: 20,
                left: 20,
                top: 20,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Group34586"
        style={{ left: 49, top: 271, position: "absolute", opacity: 0.4 }}
      >
        <div
          className="Chat"
          style={{
            left: 30,
            top: 0,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Chat
        </div>
        <div
          className="VuesaxBoldSms"
          style={{
            width: 20,
            height: 20,
            left: 0,
            top: 3,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Sms"
            style={{ width: 20, height: 20, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 20,
                height: 20,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0,
                background: "black",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 16.67,
                height: 14.17,
                left: 1.67,
                top: 2.92,
                position: "absolute",
                background: "black",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Group47897"
        style={{ left: 49, top: 271, position: "absolute", opacity: 0.4 }}
      >
        <div
          className="Chat"
          style={{
            left: 30,
            top: 0,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Chat
        </div>
        <div
          className="VuesaxBoldSms"
          style={{
            width: 20,
            height: 20,
            left: 0,
            top: 3,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Sms"
            style={{ width: 20, height: 20, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 20,
                height: 20,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0,
                background: "black",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 16.67,
                height: 14.17,
                left: 1.67,
                top: 2.92,
                position: "absolute",
                background: "black",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Group34587"
        style={{
          width: 138,
          height: 52,
          left: 488,
          top: 403,
          position: "absolute",
          opacity: 0.4,
        }}
      >
        <div
          className="Certificate"
          style={{
            left: 43,
            top: 25,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Certificate
        </div>
        <div
          className="VuesaxBoldProfile2user"
          style={{
            width: 20,
            height: 20,
            left: 0,
            top: 0,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Profile2user"
            style={{ width: 20, height: 20, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 7.92,
                height: 7.91,
                left: 3.54,
                top: 1.67,
                position: "absolute",
                background: "black",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 11.73,
                height: 7.7,
                left: 1.63,
                top: 10.63,
                position: "absolute",
                background: "black",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 4.91,
                height: 5.98,
                left: 11.76,
                top: 3.38,
                position: "absolute",
                background: "black",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 6.68,
                height: 6.04,
                left: 11.66,
                top: 10.42,
                position: "absolute",
                background: "black",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 20,
                height: 20,
                left: 20,
                top: 20,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
                background: "black",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Group34588"
        style={{ left: 45, top: 550, position: "absolute", opacity: 0.4 }}
      >
        <div
          className="Settings"
          style={{
            left: 34,
            top: 0,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Settings
        </div>
        <div
          className="VuesaxBoldSetting2"
          style={{
            width: 20,
            height: 20,
            left: 0,
            top: 4,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Setting2"
            style={{ width: 20, height: 20, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 16.68,
                height: 15.73,
                left: 1.67,
                top: 2.13,
                position: "absolute",
                background: "black",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 20,
                height: 20,
                left: 20,
                top: 20,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Group47895"
        style={{ left: 45, top: 550, position: "absolute", opacity: 0.4 }}
      >
        <div
          className="Settings"
          style={{
            left: 34,
            top: 0,
            position: "absolute",
            color: "black",
            fontSize: 18,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Settings
        </div>
        <div
          className="VuesaxBoldSetting2"
          style={{
            width: 20,
            height: 20,
            left: 0,
            top: 4,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Setting2"
            style={{ width: 20, height: 20, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 16.68,
                height: 15.73,
                left: 1.67,
                top: 2.13,
                position: "absolute",
                background: "black",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 20,
                height: 20,
                left: 20,
                top: 20,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Group74"
        style={{
          width: 422.38,
          height: 132,
          left: 299,
          top: 42,
          position: "absolute",
        }}
      >
        <div
          className="WelcomeAlexaAYearGrade1QuickLearner"
          style={{
            width: 295.38,
            left: 127,
            top: 0,
            position: "absolute",
            color: "#3E435D",
            fontSize: 24,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Welcome, Alexa A.
          <br />
          Year Grade 1 Quick Learner
        </div>
        <div
          className="HaveAGoodDay"
          style={{
            width: 188.94,
            left: 0,
            top: 108,
            position: "absolute",
            color: "#ADA7A7",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "300",
            wordWrap: "break-word",
          }}
        >
          Have a good day!
        </div>
        <div
          className="HaveAGoodDay"
          style={{
            width: 188.94,
            left: 0,
            top: 108,
            position: "absolute",
            color: "#ADA7A7",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "300",
            wordWrap: "break-word",
          }}
        >
          Have a good day!
        </div>
        <div
          className="HaveAGoodDay"
          style={{
            width: 188.94,
            left: 0,
            top: 108,
            position: "absolute",
            color: "#ADA7A7",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "300",
            wordWrap: "break-word",
          }}
        >
          Have a good day!
        </div>
        <div
          className="HaveAGoodDay"
          style={{
            width: 188.94,
            left: 0,
            top: 108,
            position: "absolute",
            color: "#ADA7A7",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "300",
            wordWrap: "break-word",
          }}
        >
          Have a good day!
        </div>
        <div
          className="HaveAGoodDay"
          style={{
            width: 188.94,
            left: 0,
            top: 108,
            position: "absolute",
            color: "#ADA7A7",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "300",
            wordWrap: "break-word",
          }}
        >
          Have a good day!
        </div>
        <div
          className="HaveAGoodDay"
          style={{
            width: 188.94,
            left: 0,
            top: 108,
            position: "absolute",
            color: "#ADA7A7",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "300",
            wordWrap: "break-word",
          }}
        >
          Have a good day!
        </div>
        <div
          className="HaveAGoodDay"
          style={{
            width: 188.94,
            left: 0,
            top: 108,
            position: "absolute",
            color: "#ADA7A7",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "300",
            wordWrap: "break-word",
          }}
        >
          Have a good day!
        </div>
        <div
          className="HaveAGoodDay"
          style={{
            width: 188.94,
            left: 0,
            top: 108,
            position: "absolute",
            color: "#ADA7A7",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "300",
            wordWrap: "break-word",
          }}
        >
          Have a good day!
        </div>
        <div
          className="HaveAGoodDay"
          style={{
            width: 188.94,
            left: 0,
            top: 108,
            position: "absolute",
            color: "#ADA7A7",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "300",
            wordWrap: "break-word",
          }}
        >
          Have a good day!
        </div>
      </div>
      <div
        className="Group72"
        style={{
          width: 392.65,
          height: 46,
          left: 894,
          top: 50,
          position: "absolute",
        }}
      >
        <div
          className="Rectangle1072"
          style={{
            width: 392.65,
            height: 46,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#9F71DA",
            borderRadius: 100,
          }}
        />
        <div
          className="VuesaxLinearSearchNormal"
          style={{
            width: 24.41,
            height: 21.23,
            left: 20.34,
            top: 12.38,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="SearchNormal"
            style={{ width: 24.41, height: 21.23, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 19.33,
                height: 16.81,
                left: 2.03,
                top: 1.77,
                position: "absolute",
                border: "0.75px #ADA7A7 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 2.03,
                height: 1.77,
                left: 20.34,
                top: 17.69,
                position: "absolute",
                border: "0.75px #ADA7A7 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 24.41,
                height: 21.23,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Search"
          style={{
            width: 57.98,
            height: 21.23,
            left: 61.03,
            top: 12.38,
            position: "absolute",
            color: "#ADA7A7",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Search
        </div>
      </div>
      <img
        className="Rectangle1072"
        style={{
          width: 119,
          height: 107,
          left: 299,
          top: 40,
          position: "absolute",
          borderRadius: 10,
        }}
        src="https://via.placeholder.com/119x107"
      />
      <div
        className="Group77"
        style={{
          width: 46.21,
          height: 47,
          left: 1778,
          top: 29,
          position: "absolute",
        }}
      >
        <div
          className="Rectangle1076"
          style={{
            width: 46.21,
            height: 47,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#FAFAFA",
            borderRadius: 10,
          }}
        />
        <div
          className="VuesaxLinearNotificationBing"
          style={{
            width: 21.33,
            height: 21.69,
            left: 12.44,
            top: 12.65,
            position: "absolute",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="NotificationBing"
            style={{ width: 21.33, height: 21.69, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 0,
                height: 3.01,
                left: 10.66,
                top: 5.82,
                position: "absolute",
                border: "0.75px #ADA7A7 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 15.82,
                height: 15.91,
                left: 2.76,
                top: 1.81,
                position: "absolute",
                border: "0.75px #ADA7A7 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.92,
                height: 3.01,
                left: 7.7,
                top: 17.01,
                position: "absolute",
                border: "0.75px #ADA7A7 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 21.33,
                height: 21.69,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Rectangle6623"
        style={{
          width: 697,
          height: 391,
          left: 665,
          top: 243,
          position: "absolute",
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 84%)",
          borderRadius: 14,
        }}
      />
      <div
        className="ExploreClasses"
        style={{
          left: 308,
          top: 606,
          position: "absolute",
          opacity: 0.5,
          color: "black",
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "600",
          letterSpacing: 0.4,
          wordWrap: "break-word",
        }}
      >
        Explore Classes
      </div>
      <div
        className="Classes"
        style={{
          left: 479,
          top: 679,
          position: "absolute",
          opacity: 0.5,
          color: "black",
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "600",
          letterSpacing: 0.4,
          wordWrap: "break-word",
        }}
      >
        {" "}
        Classes
      </div>
      <div
        className="SeeAll"
        style={{
          left: 1245,
          top: 594,
          position: "absolute",
          color: "#3649F9",
          fontSize: 16,
          fontFamily: "Poppins",
          fontWeight: "400",
          letterSpacing: 0.32,
          wordWrap: "break-word",
        }}
      >
        See all
      </div>
      <img
        className="Rectangle6625"
        style={{
          width: 322,
          height: 327,
          left: 309,
          top: 670,
          position: "absolute",
          boxShadow: "4px 4px 4px ",
          borderRadius: 14,
          filter: "blur(4px)",
          backdropFilter: "blur(4px)",
        }}
        src="https://via.placeholder.com/322x327"
      />
      <div
        className="Group47865"
        style={{
          width: 83,
          height: 18,
          left: 341,
          top: 870,
          position: "absolute",
        }}
      >
        <div
          className="VuesaxBoldStickynote"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Stickynote"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 5.66,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 11.22,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 14.25,
                height: 13.88,
                left: 1.88,
                top: 2.62,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Stickynote"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="Vector"
            style={{
              width: 1.12,
              height: 3.22,
              left: 5.66,
              top: 1.5,
              position: "absolute",
              background: "#292D32",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 1.12,
              height: 3.22,
              left: 11.22,
              top: 1.5,
              position: "absolute",
              background: "#292D32",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 5.11,
              height: 5.11,
              left: 11.02,
              top: 11.39,
              position: "absolute",
              background: "#292D32",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 5.11,
              height: 5.11,
              left: 11.02,
              top: 11.39,
              position: "absolute",
              background: "#292D32",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 14.25,
              height: 13.88,
              left: 1.88,
              top: 2.62,
              position: "absolute",
              background: "#292D32",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 18,
              height: 18,
              left: 18,
              top: 18,
              position: "absolute",
              transform: "rotate(-180deg)",
              transformOrigin: "0 0",
              opacity: 0,
            }}
          ></div>
        </div>
        <div
          className="BClasses"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          B classes
        </div>
        <div
          className="BClasses"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          B classes
        </div>
        <div
          className="BClasses"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          B classes
        </div>
        <div
          className="BClasses"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          B classes
        </div>
        <div
          className="BClasses"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          B classes
        </div>
      </div>
      <div
        className="Group47881"
        style={{
          width: 73,
          height: 18,
          left: 511,
          top: 877,
          position: "absolute",
        }}
      >
        <div
          className="VuesaxBoldTimer"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Timer"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 13.01,
                height: 13.01,
                left: 2.5,
                top: 3.49,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.41,
                height: 1.09,
                left: 6.29,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="VuesaxBoldTimer"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Timer"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 13.01,
                height: 13.01,
                left: 2.5,
                top: 3.49,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.41,
                height: 1.09,
                left: 6.29,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Hours"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          3 Hours
        </div>
        <div
          className="Group47866"
          style={{
            width: 73,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="VuesaxBoldTimer"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Timer"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 13.01,
                  height: 13.01,
                  left: 2.5,
                  top: 3.49,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.41,
                  height: 1.09,
                  left: 6.29,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="Hours"
            style={{
              left: 26,
              top: 0,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            3 Hours
          </div>
        </div>
      </div>
      <div
        className="Group47891"
        style={{
          width: 73,
          height: 18,
          left: 511,
          top: 877,
          position: "absolute",
        }}
      >
        <div
          className="VuesaxBoldTimer"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Timer"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 13.01,
                height: 13.01,
                left: 2.5,
                top: 3.49,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.41,
                height: 1.09,
                left: 6.29,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="VuesaxBoldTimer"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Timer"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 13.01,
                height: 13.01,
                left: 2.5,
                top: 3.49,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.41,
                height: 1.09,
                left: 6.29,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Hours"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          3 Hours
        </div>
        <div
          className="Group47866"
          style={{
            width: 73,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="VuesaxBoldTimer"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Timer"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 13.01,
                  height: 13.01,
                  left: 2.5,
                  top: 3.49,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.41,
                  height: 1.09,
                  left: 6.29,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="Hours"
            style={{
              left: 26,
              top: 0,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            3 Hours
          </div>
        </div>
        <div
          className="Group47881"
          style={{
            width: 73,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="VuesaxBoldTimer"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Timer"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 13.01,
                  height: 13.01,
                  left: 2.5,
                  top: 3.49,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.41,
                  height: 1.09,
                  left: 6.29,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="VuesaxBoldTimer"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Timer"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 13.01,
                  height: 13.01,
                  left: 2.5,
                  top: 3.49,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.41,
                  height: 1.09,
                  left: 6.29,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="Hours"
            style={{
              left: 26,
              top: 0,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            3 Hours
          </div>
          <div
            className="Group47866"
            style={{
              width: 73,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="VuesaxBoldTimer"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Timer"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 13.01,
                    height: 13.01,
                    left: 2.5,
                    top: 3.49,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.41,
                    height: 1.09,
                    left: 6.29,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="Hours"
              style={{
                left: 26,
                top: 0,
                position: "absolute",
                opacity: 0.4,
                color: "black",
                fontSize: 12,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              3 Hours
            </div>
          </div>
          <div
            className="Group47881"
            style={{
              width: 73,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="VuesaxBoldTimer"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Timer"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 13.01,
                    height: 13.01,
                    left: 2.5,
                    top: 3.49,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.41,
                    height: 1.09,
                    left: 6.29,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="VuesaxBoldTimer"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Timer"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 13.01,
                    height: 13.01,
                    left: 2.5,
                    top: 3.49,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.41,
                    height: 1.09,
                    left: 6.29,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="Hours"
              style={{
                left: 26,
                top: 0,
                position: "absolute",
                opacity: 0.4,
                color: "black",
                fontSize: 12,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              3 Hours
            </div>
            <div
              className="Group47866"
              style={{
                width: 73,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <div
                className="VuesaxBoldTimer"
                style={{
                  width: 18,
                  height: 18,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  opacity: 0.3,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  className="Timer"
                  style={{ width: 18, height: 18, position: "relative" }}
                >
                  <div
                    className="Vector"
                    style={{
                      width: 13.01,
                      height: 13.01,
                      left: 2.5,
                      top: 3.49,
                      position: "absolute",
                      background: "#292D32",
                    }}
                  ></div>
                  <div
                    className="Vector"
                    style={{
                      width: 5.41,
                      height: 1.09,
                      left: 6.29,
                      top: 1.5,
                      position: "absolute",
                      background: "#292D32",
                    }}
                  ></div>
                  <div
                    className="Vector"
                    style={{
                      width: 18,
                      height: 18,
                      left: 18,
                      top: 18,
                      position: "absolute",
                      transform: "rotate(-180deg)",
                      transformOrigin: "0 0",
                      opacity: 0,
                    }}
                  ></div>
                </div>
              </div>
              <div
                className="Hours"
                style={{
                  left: 26,
                  top: 0,
                  position: "absolute",
                  opacity: 0.4,
                  color: "black",
                  fontSize: 12,
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                3 Hours
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="Group47864"
        style={{
          width: 118,
          height: 18,
          left: 340,
          top: 837,
          position: "absolute",
        }}
      >
        <div
          className="Connect2learn"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Connect2learn
        </div>
        <div
          className="Connect2learn"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Connect2learn
        </div>
        <div
          className="VuesaxBoldFrame"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Frame"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 7.12,
                height: 7.12,
                left: 5.44,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 10.56,
                height: 6.93,
                left: 3.72,
                top: 9.57,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="VuesaxBoldFrame"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Frame"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 7.12,
                height: 7.12,
                left: 5.44,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 10.56,
                height: 6.93,
                left: 3.72,
                top: 9.57,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="VuesaxBoldFrame"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Frame"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 7.12,
                height: 7.12,
                left: 5.44,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 10.56,
                height: 6.93,
                left: 3.72,
                top: 9.57,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Group47890"
        style={{
          width: 118,
          height: 18,
          left: 340,
          top: 837,
          position: "absolute",
        }}
      >
        <div
          className="Connect2learn"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Connect2learn
        </div>
        <div
          className="Connect2learn"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Connect2learn
        </div>
        <div
          className="VuesaxBoldFrame"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Frame"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 7.12,
                height: 7.12,
                left: 5.44,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 10.56,
                height: 6.93,
                left: 3.72,
                top: 9.57,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="VuesaxBoldFrame"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Frame"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 7.12,
                height: 7.12,
                left: 5.44,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 10.56,
                height: 6.93,
                left: 3.72,
                top: 9.57,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="VuesaxBoldFrame"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Frame"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 7.12,
                height: 7.12,
                left: 5.44,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 10.56,
                height: 6.93,
                left: 3.72,
                top: 9.57,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Group47864"
          style={{
            width: 118,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="Connect2learn"
            style={{
              left: 26,
              top: 0,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Connect2learn
          </div>
          <div
            className="Connect2learn"
            style={{
              left: 26,
              top: 0,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Connect2learn
          </div>
          <div
            className="VuesaxBoldFrame"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Frame"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 7.12,
                  height: 7.12,
                  left: 5.44,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 10.56,
                  height: 6.93,
                  left: 3.72,
                  top: 9.57,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="VuesaxBoldFrame"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Frame"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 7.12,
                  height: 7.12,
                  left: 5.44,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 10.56,
                  height: 6.93,
                  left: 3.72,
                  top: 9.57,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="VuesaxBoldFrame"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Frame"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 7.12,
                  height: 7.12,
                  left: 5.44,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 10.56,
                  height: 6.93,
                  left: 3.72,
                  top: 9.57,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="Group47864"
            style={{
              width: 118,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="Connect2learn"
              style={{
                left: 26,
                top: 0,
                position: "absolute",
                opacity: 0.4,
                color: "black",
                fontSize: 12,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Connect2learn
            </div>
            <div
              className="Connect2learn"
              style={{
                left: 26,
                top: 0,
                position: "absolute",
                opacity: 0.4,
                color: "black",
                fontSize: 12,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Connect2learn
            </div>
            <div
              className="VuesaxBoldFrame"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Frame"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 7.12,
                    height: 7.12,
                    left: 5.44,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 10.56,
                    height: 6.93,
                    left: 3.72,
                    top: 9.57,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="VuesaxBoldFrame"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Frame"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 7.12,
                    height: 7.12,
                    left: 5.44,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 10.56,
                    height: 6.93,
                    left: 3.72,
                    top: 9.57,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="VuesaxBoldFrame"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Frame"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 7.12,
                    height: 7.12,
                    left: 5.44,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 10.56,
                    height: 6.93,
                    left: 3.72,
                    top: 9.57,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="VuesaxLinearMore"
        style={{
          width: 28,
          height: 24,
          left: 581,
          top: 714,
          position: "absolute",
          opacity: 0.2,
        }}
      >
        <div
          className="More"
          style={{
            width: 28,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="Vector"
            style={{
              width: 4.67,
              height: 4,
              left: 3.5,
              top: 10,
              position: "absolute",
              background: "black",
              border: "0.75px solid",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 4.67,
              height: 4,
              left: 19.83,
              top: 10,
              position: "absolute",
              background: "black",
              border: "0.75px solid",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 4.67,
              height: 4,
              left: 11.67,
              top: 10,
              position: "absolute",
              background: "black",
              border: "0.75px solid",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 28,
              height: 24,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0,
            }}
          ></div>
        </div>
      </div>
      <div
        className="English"
        style={{
          width: 214,
          height: 205,
          left: 335,
          top: 714,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "700",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        English
      </div>
      <div
        className="English"
        style={{
          width: 214,
          height: 205,
          left: 335,
          top: 714,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "700",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        English
      </div>
      <div
        className="English"
        style={{
          width: 214,
          height: 205,
          left: 335,
          top: 714,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "700",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        English
      </div>
      <div
        className="English"
        style={{
          width: 214,
          height: 205,
          left: 335,
          top: 714,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "700",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        English
      </div>
      <div
        className="Group34624"
        style={{
          width: 102,
          height: 36,
          left: 341,
          top: 925,
          position: "absolute",
        }}
      >
        <img
          className="Ellipse116"
          style={{
            width: 36,
            height: 36,
            left: 0,
            top: 0,
            position: "absolute",
            borderRadius: 9999,
            border: "1px white solid",
          }}
          src="https://via.placeholder.com/36x36"
        />
        <img
          className="Ellipse117"
          style={{
            width: 36,
            height: 36,
            left: 22,
            top: 0,
            position: "absolute",
            borderRadius: 9999,
            border: "1px white solid",
          }}
          src="https://via.placeholder.com/36x36"
        />
        <img
          className="Ellipse118"
          style={{
            width: 36,
            height: 36,
            left: 44,
            top: 0,
            position: "absolute",
            borderRadius: 9999,
            border: "1px white solid",
          }}
          src="https://via.placeholder.com/36x36"
        />
        <img
          className="Ellipse119"
          style={{
            width: 36,
            height: 36,
            left: 66,
            top: 0,
            position: "absolute",
            borderRadius: 9999,
            border: "1px white solid",
          }}
          src="https://via.placeholder.com/36x36"
        />
      </div>
      <div
        className="Group34625"
        style={{ left: 570, top: 938, position: "absolute" }}
      >
        <div
          style={{
            width: 22.62,
            left: 140.24,
            top: 4,
            position: "absolute",
            opacity: 0.2,
            color: "black",
            fontSize: 14,
            fontFamily: "CocoSharp",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          20
        </div>
        <div
          className="VuesaxLinearMessages"
          style={{
            width: 24,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Messages"
            style={{ width: 24, height: 24, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 15,
                height: 16.14,
                left: 2,
                top: 2,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 13.43,
                height: 15.93,
                left: 8.57,
                top: 6.07,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5,
                height: 0,
                left: 7,
                top: 9,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 24,
                height: 24,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Group47882"
        style={{ left: 570, top: 938, position: "absolute" }}
      >
        <div
          style={{
            width: 22.62,
            left: 140.24,
            top: 4,
            position: "absolute",
            opacity: 0.2,
            color: "black",
            fontSize: 14,
            fontFamily: "CocoSharp",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          20
        </div>
        <div
          className="VuesaxLinearMessages"
          style={{
            width: 24,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Messages"
            style={{ width: 24, height: 24, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 15,
                height: 16.14,
                left: 2,
                top: 2,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 13.43,
                height: 15.93,
                left: 8.57,
                top: 6.07,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5,
                height: 0,
                left: 7,
                top: 9,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 24,
                height: 24,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Group47892"
        style={{
          width: 162.86,
          height: 24,
          left: 570,
          top: 938,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 22.62,
            left: 140.24,
            top: 4,
            position: "absolute",
            opacity: 0.2,
            color: "black",
            fontSize: 14,
            fontFamily: "CocoSharp",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          20
        </div>
        <div
          className="VuesaxLinearMessages"
          style={{
            width: 24,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Messages"
            style={{ width: 24, height: 24, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 15,
                height: 16.14,
                left: 2,
                top: 2,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 13.43,
                height: 15.93,
                left: 8.57,
                top: 6.07,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5,
                height: 0,
                left: 7,
                top: 9,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 24,
                height: 24,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Group47882"
          style={{
            width: 162.86,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: 22.62,
              left: 140.24,
              top: 4,
              position: "absolute",
              opacity: 0.2,
              color: "black",
              fontSize: 14,
              fontFamily: "CocoSharp",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            20
          </div>
          <div
            className="VuesaxLinearMessages"
            style={{
              width: 24,
              height: 24,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Messages"
              style={{ width: 24, height: 24, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 15,
                  height: 16.14,
                  left: 2,
                  top: 2,
                  position: "absolute",
                  border: "0.75px #292D32 solid",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 13.43,
                  height: 15.93,
                  left: 8.57,
                  top: 6.07,
                  position: "absolute",
                  border: "0.75px #292D32 solid",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5,
                  height: 0,
                  left: 7,
                  top: 9,
                  position: "absolute",
                  border: "0.75px #292D32 solid",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 24,
                  height: 24,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="Group47882"
            style={{
              width: 162.86,
              height: 24,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              style={{
                width: 22.62,
                left: 140.24,
                top: 4,
                position: "absolute",
                opacity: 0.2,
                color: "black",
                fontSize: 14,
                fontFamily: "CocoSharp",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              20
            </div>
            <div
              className="VuesaxLinearMessages"
              style={{
                width: 24,
                height: 24,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Messages"
                style={{ width: 24, height: 24, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 15,
                    height: 16.14,
                    left: 2,
                    top: 2,
                    position: "absolute",
                    border: "0.75px #292D32 solid",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 13.43,
                    height: 15.93,
                    left: 8.57,
                    top: 6.07,
                    position: "absolute",
                    border: "0.75px #292D32 solid",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5,
                    height: 0,
                    left: 7,
                    top: 9,
                    position: "absolute",
                    border: "0.75px #292D32 solid",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 24,
                    height: 24,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="Rectangle6625"
        style={{
          width: 238,
          height: 330,
          left: 25,
          top: 588,
          position: "absolute",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: 14,
          backdropFilter: "blur(4px)",
        }}
        src="https://via.placeholder.com/238x330"
      />
      <div
        className="Rectangle1149"
        style={{
          width: 322,
          height: 11,
          left: 309,
          top: 666,
          position: "absolute",
          background: "#3649F9",
        }}
      ></div>
      <div
        className="Group47872"
        style={{ height: 24, left: 1215, top: 565, position: "absolute" }}
      >
        <div
          className="VuesaxBoldTimer"
          style={{
            width: 24,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Timer"
            style={{ width: 24, height: 24, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 17.34,
                height: 17.35,
                left: 3.33,
                top: 4.65,
                position: "absolute",
                background: "white",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 7.22,
                height: 1.45,
                left: 8.39,
                top: 2,
                position: "absolute",
                background: "white",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 24,
                height: 24,
                left: 24,
                top: 24,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Hours"
          style={{
            left: 30,
            top: 0,
            position: "absolute",
            color: "white",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          3 Hours
        </div>
      </div>
      <div
        className="VuesaxLinearMore"
        style={{
          width: 24,
          height: 24,
          left: 934,
          top: 705,
          position: "absolute",
          opacity: 0.2,
        }}
      >
        <div
          className="More"
          style={{
            width: 24,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="Vector"
            style={{
              width: 4,
              height: 4,
              left: 3,
              top: 10,
              position: "absolute",
              background: "black",
              border: "0.75px solid",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 4,
              height: 4,
              left: 17,
              top: 10,
              position: "absolute",
              background: "black",
              border: "0.75px solid",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 4,
              height: 4,
              left: 10,
              top: 10,
              position: "absolute",
              background: "black",
              border: "0.75px solid",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 24,
              height: 24,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0,
            }}
          ></div>
        </div>
      </div>
      <div
        className="FullAToZEnglishClassConnect2Learn"
        style={{
          width: 258,
          left: 339,
          top: 762,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Full A to Z English Class - Connect 2 Learn
      </div>
      <div
        className="FullAToZEnglishClassConnect2Learn"
        style={{
          width: 258,
          left: 339,
          top: 762,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Full A to Z English Class - Connect 2 Learn
      </div>
      <div
        className="FullAToZEnglishClassConnect2Learn"
        style={{
          width: 258,
          left: 339,
          top: 762,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Full A to Z English Class - Connect 2 Learn
      </div>
      <div
        className="FullAToZEnglishClassConnect2Learn"
        style={{
          width: 258,
          left: 339,
          top: 762,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Full A to Z English Class - Connect 2 Learn
      </div>
      <div
        className="Group47873"
        style={{ height: 62, left: 690, top: 549, position: "absolute" }}
      >
        <div
          className="Mathematics"
          style={{
            width: 177,
            height: 29.85,
            left: 0,
            top: 0,
            position: "absolute",
            color: "white",
            fontSize: 26,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Mathematics
        </div>
        <div
          className="Lesson"
          style={{
            width: 85.45,
            height: 22.96,
            left: 0,
            top: 39.04,
            position: "absolute",
            color: "white",
            fontSize: 20,
            fontFamily: "Poppins",
            fontWeight: "300",
            wordWrap: "break-word",
          }}
        >
          11 Lesson
        </div>
      </div>
      <div
        className="Group47875"
        style={{
          width: 80,
          height: 80,
          left: 984,
          top: 422,
          position: "absolute",
        }}
      >
        <div
          className="Ellipse120"
          style={{
            width: 80,
            height: 80,
            left: 0,
            top: 0,
            position: "absolute",
            background: "rgba(255, 255, 255, 0.40)",
            borderRadius: 9999,
            border: "0.50px rgba(255, 255, 255, 0.50) solid",
            backdropFilter: "blur(24px)",
          }}
        />
      </div>
      <div
        className="Rectangle1137"
        style={{
          width: 138,
          height: 35,
          left: 65,
          top: 857,
          position: "absolute",
          background: "#6E78DB",
          borderRadius: 8,
        }}
      />
      <div
        className="Subscription"
        style={{
          left: 75,
          top: 863,
          position: "absolute",
          color: "black",
          fontSize: 18,
          fontFamily: "Poppins",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Subscription
      </div>
      <div
        className="Rectangle6627"
        style={{
          width: 327,
          height: 336,
          left: 667,
          top: 660,
          position: "absolute",
          background:
            "linear-gradient(0deg, rgba(212.70, 39.88, 39.88, 0.20) 0%, rgba(212.70, 39.88, 39.88, 0.20) 100%)",
          boxShadow: "4px 4px 4px ",
          borderRadius: 14,
          filter: "blur(4px)",
          backdropFilter: "blur(4px)",
        }}
      />
      <div
        className="Rectangle6628"
        style={{
          width: 322,
          height: 11,
          left: 670,
          top: 660,
          position: "absolute",
          background: "#3649F9",
        }}
      ></div>
      <div
        className="VuesaxLinearMore"
        style={{
          width: 28,
          height: 24,
          left: 918,
          top: 707,
          position: "absolute",
          opacity: 0.2,
        }}
      >
        <div
          className="More"
          style={{
            width: 28,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="Vector"
            style={{
              width: 4.67,
              height: 4,
              left: 3.5,
              top: 10,
              position: "absolute",
              background: "black",
              border: "0.75px solid",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 4.67,
              height: 4,
              left: 19.83,
              top: 10,
              position: "absolute",
              background: "black",
              border: "0.75px solid",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 4.67,
              height: 4,
              left: 11.67,
              top: 10,
              position: "absolute",
              background: "black",
              border: "0.75px solid",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 28,
              height: 24,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0,
            }}
          ></div>
        </div>
      </div>
      <div
        className="ScienceFullClassConnect2Learn"
        style={{
          width: 258,
          left: 688,
          top: 758,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science full class - Connect 2 learn
      </div>
      <div
        className="ScienceFullClassConnect2Learn"
        style={{
          width: 258,
          left: 688,
          top: 758,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science full class - Connect 2 learn
      </div>
      <div
        className="ScienceFullClassConnect2Learn"
        style={{
          width: 258,
          left: 688,
          top: 758,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science full class - Connect 2 learn
      </div>
      <div
        className="ScienceFullClassConnect2Learn"
        style={{
          width: 258,
          left: 688,
          top: 758,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science full class - Connect 2 learn
      </div>
      <div
        className="ScienceFullClassConnect2Learn"
        style={{
          width: 258,
          left: 688,
          top: 758,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science full class - Connect 2 learn
      </div>
      <div
        className="ScienceFullClassConnect2Learn"
        style={{
          width: 258,
          left: 688,
          top: 758,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science full class - Connect 2 learn
      </div>
      <div
        className="ScienceFullClassConnect2Learn"
        style={{
          width: 258,
          left: 688,
          top: 758,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science full class - Connect 2 learn
      </div>
      <div
        className="ScienceFullClassConnect2Learn"
        style={{
          width: 258,
          left: 688,
          top: 758,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science full class - Connect 2 learn
      </div>
      <div
        className="ScienceFullClassConnect2Learn"
        style={{
          width: 258,
          left: 688,
          top: 758,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science full class - Connect 2 learn
      </div>
      <div
        className="ScienceFullClassConnect2Learn"
        style={{
          width: 258,
          left: 688,
          top: 758,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science full class - Connect 2 learn
      </div>
      <div
        className="ScienceFullClassConnect2Learn"
        style={{
          width: 258,
          left: 688,
          top: 758,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science full class - Connect 2 learn
      </div>
      <div
        className="ScienceFullClassConnect2Learn"
        style={{
          width: 258,
          left: 688,
          top: 758,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science full class - Connect 2 learn
      </div>
      <div
        className="Group47876"
        style={{ height: 18, left: 688, top: 828, position: "absolute" }}
      >
        <div
          className="Connect2learn"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Connect2learn
        </div>
        <div
          className="VuesaxBoldFrame"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Frame"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 7.12,
                height: 7.12,
                left: 5.44,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 10.56,
                height: 6.93,
                left: 3.72,
                top: 9.57,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Group47886"
        style={{
          width: 118,
          height: 18,
          left: 688,
          top: 828,
          position: "absolute",
        }}
      >
        <div
          className="Connect2learn"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Connect2learn
        </div>
        <div
          className="VuesaxBoldFrame"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Frame"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 7.12,
                height: 7.12,
                left: 5.44,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 10.56,
                height: 6.93,
                left: 3.72,
                top: 9.57,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Group47876"
          style={{
            width: 118,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="Connect2learn"
            style={{
              left: 26,
              top: 0,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Connect2learn
          </div>
          <div
            className="VuesaxBoldFrame"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Frame"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 7.12,
                  height: 7.12,
                  left: 5.44,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 10.56,
                  height: 6.93,
                  left: 3.72,
                  top: 9.57,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="Group47876"
            style={{
              width: 118,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="Connect2learn"
              style={{
                left: 26,
                top: 0,
                position: "absolute",
                opacity: 0.4,
                color: "black",
                fontSize: 12,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Connect2learn
            </div>
            <div
              className="VuesaxBoldFrame"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Frame"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 7.12,
                    height: 7.12,
                    left: 5.44,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 10.56,
                    height: 6.93,
                    left: 3.72,
                    top: 9.57,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="Group47876"
              style={{
                width: 118,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <div
                className="Connect2learn"
                style={{
                  left: 26,
                  top: 0,
                  position: "absolute",
                  opacity: 0.4,
                  color: "black",
                  fontSize: 12,
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Connect2learn
              </div>
              <div
                className="VuesaxBoldFrame"
                style={{
                  width: 18,
                  height: 18,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  opacity: 0.3,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  className="Frame"
                  style={{ width: 18, height: 18, position: "relative" }}
                >
                  <div
                    className="Vector"
                    style={{
                      width: 7.12,
                      height: 7.12,
                      left: 5.44,
                      top: 1.5,
                      position: "absolute",
                      background: "#292D32",
                    }}
                  ></div>
                  <div
                    className="Vector"
                    style={{
                      width: 10.56,
                      height: 6.93,
                      left: 3.72,
                      top: 9.57,
                      position: "absolute",
                      background: "#292D32",
                    }}
                  ></div>
                  <div
                    className="Vector"
                    style={{
                      width: 18,
                      height: 18,
                      left: 18,
                      top: 18,
                      position: "absolute",
                      transform: "rotate(-180deg)",
                      transformOrigin: "0 0",
                      opacity: 0,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="Group47877"
        style={{ height: 18, left: 864, top: 869, position: "absolute" }}
      >
        <div
          className="VuesaxBoldTimer"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Timer"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 13.01,
                height: 13.01,
                left: 2.5,
                top: 3.49,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.41,
                height: 1.09,
                left: 6.29,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Hours"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          3 Hours
        </div>
      </div>
      <div
        className="Group47885"
        style={{
          width: 73,
          height: 18,
          left: 864,
          top: 869,
          position: "absolute",
        }}
      >
        <div
          className="VuesaxBoldTimer"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Timer"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 13.01,
                height: 13.01,
                left: 2.5,
                top: 3.49,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.41,
                height: 1.09,
                left: 6.29,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="VuesaxBoldTimer"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Timer"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 13.01,
                height: 13.01,
                left: 2.5,
                top: 3.49,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.41,
                height: 1.09,
                left: 6.29,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Hours"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          3 Hours
        </div>
      </div>
      <div
        className="Group47888"
        style={{
          width: 73,
          height: 18,
          left: 864,
          top: 869,
          position: "absolute",
        }}
      >
        <div
          className="VuesaxBoldTimer"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Timer"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 13.01,
                height: 13.01,
                left: 2.5,
                top: 3.49,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.41,
                height: 1.09,
                left: 6.29,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="VuesaxBoldTimer"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Timer"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 13.01,
                height: 13.01,
                left: 2.5,
                top: 3.49,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.41,
                height: 1.09,
                left: 6.29,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Hours"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          3 Hours
        </div>
        <div
          className="Group47885"
          style={{
            width: 73,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="VuesaxBoldTimer"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Timer"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 13.01,
                  height: 13.01,
                  left: 2.5,
                  top: 3.49,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.41,
                  height: 1.09,
                  left: 6.29,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="VuesaxBoldTimer"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Timer"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 13.01,
                  height: 13.01,
                  left: 2.5,
                  top: 3.49,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.41,
                  height: 1.09,
                  left: 6.29,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="Hours"
            style={{
              left: 26,
              top: 0,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            3 Hours
          </div>
          <div
            className="Group47885"
            style={{
              width: 73,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="VuesaxBoldTimer"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Timer"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 13.01,
                    height: 13.01,
                    left: 2.5,
                    top: 3.49,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.41,
                    height: 1.09,
                    left: 6.29,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="VuesaxBoldTimer"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Timer"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 13.01,
                    height: 13.01,
                    left: 2.5,
                    top: 3.49,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.41,
                    height: 1.09,
                    left: 6.29,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="Hours"
              style={{
                left: 26,
                top: 0,
                position: "absolute",
                opacity: 0.4,
                color: "black",
                fontSize: 12,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              3 Hours
            </div>
          </div>
        </div>
      </div>
      <div
        className="Group47878"
        style={{ height: 18, left: 691, top: 872, position: "absolute" }}
      >
        <div
          className="VuesaxBoldStickynote"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Stickynote"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 5.66,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 11.22,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 14.25,
                height: 13.88,
                left: 1.88,
                top: 2.62,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="BClasses"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          B classes
        </div>
      </div>
      <div
        className="Group47884"
        style={{
          width: 83,
          height: 18,
          left: 691,
          top: 872,
          position: "absolute",
        }}
      >
        <div
          className="VuesaxBoldStickynote"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Stickynote"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 5.66,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 11.22,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 14.25,
                height: 13.88,
                left: 1.88,
                top: 2.62,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="VuesaxBoldStickynote"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Stickynote"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 5.66,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 11.22,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 14.25,
                height: 13.88,
                left: 1.88,
                top: 2.62,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="BClasses"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          B classes
        </div>
      </div>
      <div
        className="Group47887"
        style={{
          width: 83,
          height: 18,
          left: 691,
          top: 872,
          position: "absolute",
        }}
      >
        <div
          className="VuesaxBoldStickynote"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Stickynote"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 5.66,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 11.22,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 14.25,
                height: 13.88,
                left: 1.88,
                top: 2.62,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="VuesaxBoldStickynote"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Stickynote"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 5.66,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 11.22,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 14.25,
                height: 13.88,
                left: 1.88,
                top: 2.62,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="BClasses"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          B classes
        </div>
        <div
          className="Group47884"
          style={{
            width: 83,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="VuesaxBoldStickynote"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Stickynote"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 1.12,
                  height: 3.22,
                  left: 5.66,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 1.12,
                  height: 3.22,
                  left: 11.22,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.11,
                  height: 5.11,
                  left: 11.02,
                  top: 11.39,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.11,
                  height: 5.11,
                  left: 11.02,
                  top: 11.39,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 14.25,
                  height: 13.88,
                  left: 1.88,
                  top: 2.62,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="VuesaxBoldStickynote"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Stickynote"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 1.12,
                  height: 3.22,
                  left: 5.66,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 1.12,
                  height: 3.22,
                  left: 11.22,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.11,
                  height: 5.11,
                  left: 11.02,
                  top: 11.39,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.11,
                  height: 5.11,
                  left: 11.02,
                  top: 11.39,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 14.25,
                  height: 13.88,
                  left: 1.88,
                  top: 2.62,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="BClasses"
            style={{
              left: 26,
              top: 0,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            B classes
          </div>
          <div
            className="Group47884"
            style={{
              width: 83,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="VuesaxBoldStickynote"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Stickynote"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 1.12,
                    height: 3.22,
                    left: 5.66,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 1.12,
                    height: 3.22,
                    left: 11.22,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.11,
                    height: 5.11,
                    left: 11.02,
                    top: 11.39,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.11,
                    height: 5.11,
                    left: 11.02,
                    top: 11.39,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 14.25,
                    height: 13.88,
                    left: 1.88,
                    top: 2.62,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="VuesaxBoldStickynote"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Stickynote"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 1.12,
                    height: 3.22,
                    left: 5.66,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 1.12,
                    height: 3.22,
                    left: 11.22,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.11,
                    height: 5.11,
                    left: 11.02,
                    top: 11.39,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.11,
                    height: 5.11,
                    left: 11.02,
                    top: 11.39,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 14.25,
                    height: 13.88,
                    left: 1.88,
                    top: 2.62,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="BClasses"
              style={{
                left: 26,
                top: 0,
                position: "absolute",
                opacity: 0.4,
                color: "black",
                fontSize: 12,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              B classes
            </div>
          </div>
        </div>
      </div>
      <div
        className="Group47879"
        style={{
          width: 102,
          height: 36,
          left: 688,
          top: 916,
          position: "absolute",
        }}
      >
        <img
          className="Ellipse116"
          style={{
            width: 36,
            height: 36,
            left: 0,
            top: 0,
            position: "absolute",
            borderRadius: 9999,
            border: "1px white solid",
          }}
          src="https://via.placeholder.com/36x36"
        />
        <img
          className="Ellipse117"
          style={{
            width: 36,
            height: 36,
            left: 22,
            top: 0,
            position: "absolute",
            borderRadius: 9999,
            border: "1px white solid",
          }}
          src="https://via.placeholder.com/36x36"
        />
        <img
          className="Ellipse118"
          style={{
            width: 36,
            height: 36,
            left: 44,
            top: 0,
            position: "absolute",
            borderRadius: 9999,
            border: "1px white solid",
          }}
          src="https://via.placeholder.com/36x36"
        />
        <img
          className="Ellipse119"
          style={{
            width: 36,
            height: 36,
            left: 66,
            top: 0,
            position: "absolute",
            borderRadius: 9999,
            border: "1px white solid",
          }}
          src="https://via.placeholder.com/36x36"
        />
      </div>
      <div
        className="VuesaxLinearMessages"
        style={{
          width: 24,
          height: 24,
          left: 895,
          top: 921,
          position: "absolute",
          opacity: 0.3,
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          className="Messages"
          style={{ width: 24, height: 24, position: "relative" }}
        >
          <div
            className="Vector"
            style={{
              width: 15,
              height: 16.14,
              left: 2,
              top: 2,
              position: "absolute",
              border: "0.75px #292D32 solid",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 13.43,
              height: 15.93,
              left: 8.57,
              top: 6.07,
              position: "absolute",
              border: "0.75px #292D32 solid",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 5,
              height: 0,
              left: 7,
              top: 9,
              position: "absolute",
              border: "0.75px #292D32 solid",
            }}
          ></div>
          <div
            className="Vector"
            style={{
              width: 24,
              height: 24,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0,
            }}
          ></div>
        </div>
      </div>
      <div
        className="Group47889"
        style={{
          width: 24,
          height: 24,
          left: 895,
          top: 921,
          position: "absolute",
        }}
      >
        <div
          className="VuesaxLinearMessages"
          style={{
            width: 24,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Messages"
            style={{ width: 24, height: 24, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 15,
                height: 16.14,
                left: 2,
                top: 2,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 13.43,
                height: 15.93,
                left: 8.57,
                top: 6.07,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5,
                height: 0,
                left: 7,
                top: 9,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 24,
                height: 24,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Group47880"
          style={{
            width: 24,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="VuesaxLinearMessages"
            style={{
              width: 24,
              height: 24,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Messages"
              style={{ width: 24, height: 24, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 15,
                  height: 16.14,
                  left: 2,
                  top: 2,
                  position: "absolute",
                  border: "0.75px #292D32 solid",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 13.43,
                  height: 15.93,
                  left: 8.57,
                  top: 6.07,
                  position: "absolute",
                  border: "0.75px #292D32 solid",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5,
                  height: 0,
                  left: 7,
                  top: 9,
                  position: "absolute",
                  border: "0.75px #292D32 solid",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 24,
                  height: 24,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="Group47880"
            style={{
              width: 24,
              height: 24,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="VuesaxLinearMessages"
              style={{
                width: 24,
                height: 24,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Messages"
                style={{ width: 24, height: 24, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 15,
                    height: 16.14,
                    left: 2,
                    top: 2,
                    position: "absolute",
                    border: "0.75px #292D32 solid",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 13.43,
                    height: 15.93,
                    left: 8.57,
                    top: 6.07,
                    position: "absolute",
                    border: "0.75px #292D32 solid",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5,
                    height: 0,
                    left: 7,
                    top: 9,
                    position: "absolute",
                    border: "0.75px #292D32 solid",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 24,
                    height: 24,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="Group47880"
              style={{
                width: 24,
                height: 24,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <div
                className="VuesaxLinearMessages"
                style={{
                  width: 24,
                  height: 24,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  opacity: 0.3,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  className="Messages"
                  style={{ width: 24, height: 24, position: "relative" }}
                >
                  <div
                    className="Vector"
                    style={{
                      width: 15,
                      height: 16.14,
                      left: 2,
                      top: 2,
                      position: "absolute",
                      border: "0.75px #292D32 solid",
                    }}
                  ></div>
                  <div
                    className="Vector"
                    style={{
                      width: 13.43,
                      height: 15.93,
                      left: 8.57,
                      top: 6.07,
                      position: "absolute",
                      border: "0.75px #292D32 solid",
                    }}
                  ></div>
                  <div
                    className="Vector"
                    style={{
                      width: 5,
                      height: 0,
                      left: 7,
                      top: 9,
                      position: "absolute",
                      border: "0.75px #292D32 solid",
                    }}
                  ></div>
                  <div
                    className="Vector"
                    style={{
                      width: 24,
                      height: 24,
                      left: 0,
                      top: 0,
                      position: "absolute",
                      opacity: 0,
                    }}
                  ></div>
                </div>
              </div>
              <div
                className="Group47880"
                style={{
                  width: 24,
                  height: 24,
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
              >
                <div
                  className="VuesaxLinearMessages"
                  style={{
                    width: 24,
                    height: 24,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    opacity: 0.3,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="Messages"
                    style={{ width: 24, height: 24, position: "relative" }}
                  >
                    <div
                      className="Vector"
                      style={{
                        width: 15,
                        height: 16.14,
                        left: 2,
                        top: 2,
                        position: "absolute",
                        border: "0.75px #292D32 solid",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 13.43,
                        height: 15.93,
                        left: 8.57,
                        top: 6.07,
                        position: "absolute",
                        border: "0.75px #292D32 solid",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 5,
                        height: 0,
                        left: 7,
                        top: 9,
                        position: "absolute",
                        border: "0.75px #292D32 solid",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 24,
                        height: 24,
                        left: 0,
                        top: 0,
                        position: "absolute",
                        opacity: 0,
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  className="VuesaxLinearMessages"
                  style={{
                    width: 24,
                    height: 24,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    opacity: 0.3,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="Messages"
                    style={{ width: 24, height: 24, position: "relative" }}
                  >
                    <div
                      className="Vector"
                      style={{
                        width: 15,
                        height: 16.14,
                        left: 2,
                        top: 2,
                        position: "absolute",
                        border: "0.75px #292D32 solid",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 13.43,
                        height: 15.93,
                        left: 8.57,
                        top: 6.07,
                        position: "absolute",
                        border: "0.75px #292D32 solid",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 5,
                        height: 0,
                        left: 7,
                        top: 9,
                        position: "absolute",
                        border: "0.75px #292D32 solid",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 24,
                        height: 24,
                        left: 0,
                        top: 0,
                        position: "absolute",
                        opacity: 0,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="Science"
        style={{
          width: 214,
          height: 205,
          left: 688,
          top: 711,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "700",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science
      </div>
      <div
        className="Science"
        style={{
          width: 214,
          height: 205,
          left: 688,
          top: 711,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "700",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science
      </div>
      <div
        className="Science"
        style={{
          width: 214,
          height: 205,
          left: 688,
          top: 711,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "700",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science
      </div>
      <div
        className="Switch"
        style={{
          width: 97,
          height: 42,
          left: 1195,
          top: 140,
          position: "absolute",
        }}
      >
        <div
          className="SwitchTrackMask"
          style={{
            width: 52,
            height: 30,
            left: 6,
            top: 6,
            position: "absolute",
            background: "#B6B6B6",
            borderRadius: 50,
          }}
        />
        <div
          className="SwitchTrackEmpty"
          style={{
            width: 52,
            height: 30,
            left: 6,
            top: 6,
            position: "absolute",
            background: "#B0B0B0",
          }}
        />
        <div
          className="SwitchTrackFilled"
          style={{
            width: 52,
            height: 30,
            left: 6,
            top: 6,
            position: "absolute",
            opacity: 0,
            background: "#3485FE",
          }}
        />
        <div
          className="SwitchTrackShadow"
          style={{
            width: 52,
            height: 30,
            left: 6,
            top: 6,
            position: "absolute",
            background: "rgba(0, 0, 0, 0.01)",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08) inset",
            borderRadius: 50,
          }}
        />
        <div
          className="SwitchThumb"
          style={{
            width: 22,
            height: 22,
            left: 10,
            top: 10,
            position: "absolute",
            background: "white",
            boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.08)",
            borderRadius: 22,
          }}
        />
      </div>
      <div
        className="Rectangle6629"
        style={{
          width: 203,
          height: 49,
          left: 39,
          top: 608,
          position: "absolute",
          background: "#6E78DB",
          borderRadius: 8,
        }}
      />
      <div
        className="PrimeMembership"
        style={{
          left: 51,
          top: 618,
          position: "absolute",
          color: "black",
          fontSize: 18,
          fontFamily: "Poppins",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Prime membership
      </div>
      <div
        className="SharePlayTv"
        style={{
          width: 336,
          height: 392,
          left: 303,
          top: 185,
          position: "absolute",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 18,
          display: "inline-flex",
        }}
      >
        <div className="Shareplay" />
        <div
          className="SharePlayTv"
          style={{
            paddingTop: 24,
            paddingBottom: 28,
            paddingLeft: 16,
            paddingRight: 16,
            background: "rgba(0, 0, 0, 0.14)",
            boxShadow: "0px -1px 4px rgba(255, 255, 255, 0.15) inset",
            borderRadius: 24,
            backdropFilter: "blur(80px)",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 24,
            display: "flex",
          }}
        >
          <div
            className="Frame1171276140"
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              className="Memoji"
              style={{
                width: 60,
                background: "#C5ECFD",
                borderRadius: 999,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <img
                className="Memoji"
                style={{ width: 68, height: 68 }}
                src="https://via.placeholder.com/68x68"
              />
            </div>
            <div
              className="Frame1171276139"
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                display: "flex",
              }}
            >
              <div
                className="ShareTv"
                style={{
                  textAlign: "center",
                  color: "black",
                  fontSize: 18,
                  fontFamily: "Actor",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Share “COURSE LINK”
              </div>
            </div>
          </div>
          <div
            className="Frame1171276146"
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 24,
              display: "flex",
            }}
          >
            <div
              className="Frame1171276145"
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 18,
                display: "flex",
              }}
            >
              <div
                className="Vector906"
                style={{
                  width: 300,
                  height: 0,
                  border: "0.50px rgba(0, 0, 0, 0.24) solid",
                }}
              ></div>
              <div
                className="Frame1171276143"
                style={{
                  paddingLeft: 10,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: 20,
                  display: "flex",
                }}
              >
                <div
                  className="Frame1171276141"
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 14,
                    display: "inline-flex",
                  }}
                >
                  <img
                    className="Rectangle42035"
                    style={{ width: 44, height: 40, borderRadius: 6 }}
                    src="https://via.placeholder.com/44x40"
                  />
                  <div
                    className="Frame1171276140"
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: 4,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      className="WatchTogether"
                      style={{
                        textAlign: "center",
                        color: "black",
                        fontSize: 16,
                        fontFamily: "SF Pro Display",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      Watch Together
                    </div>
                    <div
                      className="Shareplay"
                      style={{
                        textAlign: "center",
                        color: "rgba(0, 0, 0, 0.64)",
                        fontSize: 14,
                        fontFamily: "SF Pro Display",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      SharePlay
                    </div>
                  </div>
                </div>
                <div
                  className="Frame1171276142"
                  style={{
                    paddingLeft: 8,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 22,
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="RectangleOnRectangle"
                    style={{ width: 28, height: 28, position: "relative" }}
                  >
                    <div
                      className="RectangleOnRectangle"
                      style={{
                        width: 23.2,
                        height: 18.89,
                        left: 2.4,
                        top: 4.22,
                        position: "absolute",
                        background: "black",
                      }}
                    ></div>
                  </div>
                  <div
                    className="ShareMyEntireWindow"
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: 16,
                      fontFamily: "SF Pro Display",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Share My Entire Window
                  </div>
                </div>
              </div>
              <div
                className="Vector905"
                style={{
                  width: 300,
                  height: 0,
                  border: "0.50px rgba(0, 0, 0, 0.24) solid",
                }}
              ></div>
            </div>
            <div
              className="Frame1171276144"
              style={{
                alignSelf: "stretch",
                paddingLeft: 10,
                paddingRight: 10,
                justifyContent: "space-between",
                alignItems: "center",
                gap: 143,
                display: "inline-flex",
              }}
            >
              <div
                className="SharingOptions"
                style={{
                  textAlign: "center",
                  color: "rgba(0, 0, 0, 0.64)",
                  fontSize: 16,
                  fontFamily: "SF Pro Display",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Sharing Options
              </div>
              <div
                className="ChevronRight"
                style={{ width: 16, height: 16, position: "relative" }}
              >
                <div
                  className="ChevronRight"
                  style={{
                    width: 5.13,
                    height: 8.91,
                    left: 6.1,
                    top: 3.35,
                    position: "absolute",
                    background: "rgba(0, 0, 0, 0.64)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="Bottoms"
          style={{
            opacity: 0.3,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 16,
            display: "inline-flex",
          }}
        >
          <div
            className="Rectangle41982"
            style={{
              width: 120,
              height: 14,
              background: "white",
              borderRadius: 10,
            }}
          />
        </div>
      </div>
      <img
        className="Rectangle6630"
        style={{
          width: 322,
          height: 327,
          left: 1041,
          top: 663,
          position: "absolute",
          boxShadow: "4px 4px 4px ",
          borderRadius: 14,
          filter: "blur(4px)",
          backdropFilter: "blur(4px)",
        }}
        src="https://via.placeholder.com/322x327"
      />
      <div
        className="ScienceFullClassConnect2Learn"
        style={{
          width: 258,
          left: 688,
          top: 758,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science full class - Connect 2 learn
      </div>
      <div
        className="Science"
        style={{
          width: 214,
          height: 205,
          left: 688,
          top: 711,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "700",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science
      </div>
      <div
        className="Science"
        style={{
          width: 214,
          height: 205,
          left: 688,
          top: 711,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "700",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Science
      </div>
      <div
        className="Group47893"
        style={{ left: 570, top: 938, position: "absolute" }}
      >
        <div
          style={{
            width: 22.62,
            left: 140.24,
            top: 4,
            position: "absolute",
            opacity: 0.2,
            color: "black",
            fontSize: 14,
            fontFamily: "CocoSharp",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          20
        </div>
        <div
          className="VuesaxLinearMessages"
          style={{
            width: 24,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Messages"
            style={{ width: 24, height: 24, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 15,
                height: 16.14,
                left: 2,
                top: 2,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 13.43,
                height: 15.93,
                left: 8.57,
                top: 6.07,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5,
                height: 0,
                left: 7,
                top: 9,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 24,
                height: 24,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Group47894"
        style={{ left: 570, top: 938, position: "absolute" }}
      >
        <div
          style={{
            width: 22.62,
            left: 140.24,
            top: 4,
            position: "absolute",
            opacity: 0.2,
            color: "black",
            fontSize: 14,
            fontFamily: "CocoSharp",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          20
        </div>
        <div
          className="VuesaxLinearMessages"
          style={{
            width: 24,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Messages"
            style={{ width: 24, height: 24, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 15,
                height: 16.14,
                left: 2,
                top: 2,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 13.43,
                height: 15.93,
                left: 8.57,
                top: 6.07,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5,
                height: 0,
                left: 7,
                top: 9,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 24,
                height: 24,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="Yoga"
        style={{
          width: 214,
          height: 205,
          left: 1061,
          top: 716,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "700",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Yoga
      </div>
      <div
        className="Yoga"
        style={{
          width: 214,
          height: 205,
          left: 1061,
          top: 716,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "700",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Yoga
      </div>
      <div
        className="Yoga"
        style={{
          width: 214,
          height: 205,
          left: 1061,
          top: 716,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "700",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Yoga
      </div>
      <div
        className="Yoga"
        style={{
          width: 214,
          height: 205,
          left: 1061,
          top: 716,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "700",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Yoga
      </div>
      <div
        className="YogaFullClassConnect2Learn"
        style={{
          width: 258,
          left: 1061,
          top: 756,
          position: "absolute",
          opacity: 0.6,
          color: "black",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          lineHeight: 24,
          wordWrap: "break-word",
        }}
      >
        Yoga full class - Connect 2 learn
      </div>
      <div
        className="Group47899"
        style={{
          width: 118,
          height: 18,
          left: 1061,
          top: 828,
          position: "absolute",
        }}
      >
        <div
          className="Connect2learn"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Connect2learn
        </div>
        <div
          className="VuesaxBoldFrame"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Frame"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 7.12,
                height: 7.12,
                left: 5.44,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 10.56,
                height: 6.93,
                left: 3.72,
                top: 9.57,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Group47876"
          style={{
            width: 118,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="Connect2learn"
            style={{
              left: 26,
              top: 0,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Connect2learn
          </div>
          <div
            className="VuesaxBoldFrame"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Frame"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 7.12,
                  height: 7.12,
                  left: 5.44,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 10.56,
                  height: 6.93,
                  left: 3.72,
                  top: 9.57,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="Group47876"
            style={{
              width: 118,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="Connect2learn"
              style={{
                left: 26,
                top: 0,
                position: "absolute",
                opacity: 0.4,
                color: "black",
                fontSize: 12,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Connect2learn
            </div>
            <div
              className="VuesaxBoldFrame"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Frame"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 7.12,
                    height: 7.12,
                    left: 5.44,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 10.56,
                    height: 6.93,
                    left: 3.72,
                    top: 9.57,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="Group47876"
              style={{
                width: 118,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <div
                className="Connect2learn"
                style={{
                  left: 26,
                  top: 0,
                  position: "absolute",
                  opacity: 0.4,
                  color: "black",
                  fontSize: 12,
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Connect2learn
              </div>
              <div
                className="VuesaxBoldFrame"
                style={{
                  width: 18,
                  height: 18,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  opacity: 0.3,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  className="Frame"
                  style={{ width: 18, height: 18, position: "relative" }}
                >
                  <div
                    className="Vector"
                    style={{
                      width: 7.12,
                      height: 7.12,
                      left: 5.44,
                      top: 1.5,
                      position: "absolute",
                      background: "#292D32",
                    }}
                  ></div>
                  <div
                    className="Vector"
                    style={{
                      width: 10.56,
                      height: 6.93,
                      left: 3.72,
                      top: 9.57,
                      position: "absolute",
                      background: "#292D32",
                    }}
                  ></div>
                  <div
                    className="Vector"
                    style={{
                      width: 18,
                      height: 18,
                      left: 18,
                      top: 18,
                      position: "absolute",
                      transform: "rotate(-180deg)",
                      transformOrigin: "0 0",
                      opacity: 0,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="Group47900"
        style={{
          width: 73,
          height: 18,
          left: 1245,
          top: 877,
          position: "absolute",
        }}
      >
        <div
          className="VuesaxBoldTimer"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Timer"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 13.01,
                height: 13.01,
                left: 2.5,
                top: 3.49,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.41,
                height: 1.09,
                left: 6.29,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="VuesaxBoldTimer"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Timer"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 13.01,
                height: 13.01,
                left: 2.5,
                top: 3.49,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.41,
                height: 1.09,
                left: 6.29,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Hours"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          3 Hours
        </div>
        <div
          className="Group47885"
          style={{
            width: 73,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="VuesaxBoldTimer"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Timer"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 13.01,
                  height: 13.01,
                  left: 2.5,
                  top: 3.49,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.41,
                  height: 1.09,
                  left: 6.29,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="VuesaxBoldTimer"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Timer"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 13.01,
                  height: 13.01,
                  left: 2.5,
                  top: 3.49,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.41,
                  height: 1.09,
                  left: 6.29,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="Hours"
            style={{
              left: 26,
              top: 0,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            3 Hours
          </div>
          <div
            className="Group47885"
            style={{
              width: 73,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="VuesaxBoldTimer"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Timer"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 13.01,
                    height: 13.01,
                    left: 2.5,
                    top: 3.49,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.41,
                    height: 1.09,
                    left: 6.29,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="VuesaxBoldTimer"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Timer"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 13.01,
                    height: 13.01,
                    left: 2.5,
                    top: 3.49,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.41,
                    height: 1.09,
                    left: 6.29,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="Hours"
              style={{
                left: 26,
                top: 0,
                position: "absolute",
                opacity: 0.4,
                color: "black",
                fontSize: 12,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              3 Hours
            </div>
          </div>
        </div>
      </div>
      <div
        className="Group47901"
        style={{
          width: 83,
          height: 18,
          left: 1061,
          top: 878,
          position: "absolute",
        }}
      >
        <div
          className="VuesaxBoldStickynote"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Stickynote"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 5.66,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 11.22,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 14.25,
                height: 13.88,
                left: 1.88,
                top: 2.62,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="VuesaxBoldStickynote"
          style={{
            width: 18,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Stickynote"
            style={{ width: 18, height: 18, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 5.66,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 1.12,
                height: 3.22,
                left: 11.22,
                top: 1.5,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5.11,
                height: 5.11,
                left: 11.02,
                top: 11.39,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 14.25,
                height: 13.88,
                left: 1.88,
                top: 2.62,
                position: "absolute",
                background: "#292D32",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 18,
                height: 18,
                left: 18,
                top: 18,
                position: "absolute",
                transform: "rotate(-180deg)",
                transformOrigin: "0 0",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="BClasses"
          style={{
            left: 26,
            top: 0,
            position: "absolute",
            opacity: 0.4,
            color: "black",
            fontSize: 12,
            fontFamily: "Poppins",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          B classes
        </div>
        <div
          className="Group47884"
          style={{
            width: 83,
            height: 18,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="VuesaxBoldStickynote"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Stickynote"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 1.12,
                  height: 3.22,
                  left: 5.66,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 1.12,
                  height: 3.22,
                  left: 11.22,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.11,
                  height: 5.11,
                  left: 11.02,
                  top: 11.39,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.11,
                  height: 5.11,
                  left: 11.02,
                  top: 11.39,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 14.25,
                  height: 13.88,
                  left: 1.88,
                  top: 2.62,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="VuesaxBoldStickynote"
            style={{
              width: 18,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Stickynote"
              style={{ width: 18, height: 18, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 1.12,
                  height: 3.22,
                  left: 5.66,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 1.12,
                  height: 3.22,
                  left: 11.22,
                  top: 1.5,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.11,
                  height: 5.11,
                  left: 11.02,
                  top: 11.39,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5.11,
                  height: 5.11,
                  left: 11.02,
                  top: 11.39,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 14.25,
                  height: 13.88,
                  left: 1.88,
                  top: 2.62,
                  position: "absolute",
                  background: "#292D32",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 18,
                  height: 18,
                  left: 18,
                  top: 18,
                  position: "absolute",
                  transform: "rotate(-180deg)",
                  transformOrigin: "0 0",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="BClasses"
            style={{
              left: 26,
              top: 0,
              position: "absolute",
              opacity: 0.4,
              color: "black",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            B classes
          </div>
          <div
            className="Group47884"
            style={{
              width: 83,
              height: 18,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="VuesaxBoldStickynote"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Stickynote"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 1.12,
                    height: 3.22,
                    left: 5.66,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 1.12,
                    height: 3.22,
                    left: 11.22,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.11,
                    height: 5.11,
                    left: 11.02,
                    top: 11.39,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.11,
                    height: 5.11,
                    left: 11.02,
                    top: 11.39,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 14.25,
                    height: 13.88,
                    left: 1.88,
                    top: 2.62,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="VuesaxBoldStickynote"
              style={{
                width: 18,
                height: 18,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Stickynote"
                style={{ width: 18, height: 18, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 1.12,
                    height: 3.22,
                    left: 5.66,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 1.12,
                    height: 3.22,
                    left: 11.22,
                    top: 1.5,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.11,
                    height: 5.11,
                    left: 11.02,
                    top: 11.39,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5.11,
                    height: 5.11,
                    left: 11.02,
                    top: 11.39,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 14.25,
                    height: 13.88,
                    left: 1.88,
                    top: 2.62,
                    position: "absolute",
                    background: "#292D32",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 18,
                    height: 18,
                    left: 18,
                    top: 18,
                    position: "absolute",
                    transform: "rotate(-180deg)",
                    transformOrigin: "0 0",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="BClasses"
              style={{
                left: 26,
                top: 0,
                position: "absolute",
                opacity: 0.4,
                color: "black",
                fontSize: 12,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              B classes
            </div>
          </div>
        </div>
      </div>
      <div
        className="Group47902"
        style={{
          width: 102,
          height: 36,
          left: 1055,
          top: 919,
          position: "absolute",
        }}
      >
        <img
          className="Ellipse116"
          style={{
            width: 36,
            height: 36,
            left: 0,
            top: 0,
            position: "absolute",
            borderRadius: 9999,
            border: "1px white solid",
          }}
          src="https://via.placeholder.com/36x36"
        />
        <img
          className="Ellipse117"
          style={{
            width: 36,
            height: 36,
            left: 22,
            top: 0,
            position: "absolute",
            borderRadius: 9999,
            border: "1px white solid",
          }}
          src="https://via.placeholder.com/36x36"
        />
        <img
          className="Ellipse118"
          style={{
            width: 36,
            height: 36,
            left: 44,
            top: 0,
            position: "absolute",
            borderRadius: 9999,
            border: "1px white solid",
          }}
          src="https://via.placeholder.com/36x36"
        />
        <img
          className="Ellipse119"
          style={{
            width: 36,
            height: 36,
            left: 66,
            top: 0,
            position: "absolute",
            borderRadius: 9999,
            border: "1px white solid",
          }}
          src="https://via.placeholder.com/36x36"
        />
      </div>
      <div
        className="Group47903"
        style={{
          width: 24,
          height: 24,
          left: 1245,
          top: 931,
          position: "absolute",
        }}
      >
        <div
          className="VuesaxLinearMessages"
          style={{
            width: 24,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
            opacity: 0.3,
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Messages"
            style={{ width: 24, height: 24, position: "relative" }}
          >
            <div
              className="Vector"
              style={{
                width: 15,
                height: 16.14,
                left: 2,
                top: 2,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 13.43,
                height: 15.93,
                left: 8.57,
                top: 6.07,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 5,
                height: 0,
                left: 7,
                top: 9,
                position: "absolute",
                border: "0.75px #292D32 solid",
              }}
            ></div>
            <div
              className="Vector"
              style={{
                width: 24,
                height: 24,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0,
              }}
            ></div>
          </div>
        </div>
        <div
          className="Group47880"
          style={{
            width: 24,
            height: 24,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <div
            className="VuesaxLinearMessages"
            style={{
              width: 24,
              height: 24,
              left: 0,
              top: 0,
              position: "absolute",
              opacity: 0.3,
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <div
              className="Messages"
              style={{ width: 24, height: 24, position: "relative" }}
            >
              <div
                className="Vector"
                style={{
                  width: 15,
                  height: 16.14,
                  left: 2,
                  top: 2,
                  position: "absolute",
                  border: "0.75px #292D32 solid",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 13.43,
                  height: 15.93,
                  left: 8.57,
                  top: 6.07,
                  position: "absolute",
                  border: "0.75px #292D32 solid",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 5,
                  height: 0,
                  left: 7,
                  top: 9,
                  position: "absolute",
                  border: "0.75px #292D32 solid",
                }}
              ></div>
              <div
                className="Vector"
                style={{
                  width: 24,
                  height: 24,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  opacity: 0,
                }}
              ></div>
            </div>
          </div>
          <div
            className="Group47880"
            style={{
              width: 24,
              height: 24,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <div
              className="VuesaxLinearMessages"
              style={{
                width: 24,
                height: 24,
                left: 0,
                top: 0,
                position: "absolute",
                opacity: 0.3,
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Messages"
                style={{ width: 24, height: 24, position: "relative" }}
              >
                <div
                  className="Vector"
                  style={{
                    width: 15,
                    height: 16.14,
                    left: 2,
                    top: 2,
                    position: "absolute",
                    border: "0.75px #292D32 solid",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 13.43,
                    height: 15.93,
                    left: 8.57,
                    top: 6.07,
                    position: "absolute",
                    border: "0.75px #292D32 solid",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 5,
                    height: 0,
                    left: 7,
                    top: 9,
                    position: "absolute",
                    border: "0.75px #292D32 solid",
                  }}
                ></div>
                <div
                  className="Vector"
                  style={{
                    width: 24,
                    height: 24,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    opacity: 0,
                  }}
                ></div>
              </div>
            </div>
            <div
              className="Group47880"
              style={{
                width: 24,
                height: 24,
                left: 0,
                top: 0,
                position: "absolute",
              }}
            >
              <div
                className="VuesaxLinearMessages"
                style={{
                  width: 24,
                  height: 24,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  opacity: 0.3,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                <div
                  className="Messages"
                  style={{ width: 24, height: 24, position: "relative" }}
                >
                  <div
                    className="Vector"
                    style={{
                      width: 15,
                      height: 16.14,
                      left: 2,
                      top: 2,
                      position: "absolute",
                      border: "0.75px #292D32 solid",
                    }}
                  ></div>
                  <div
                    className="Vector"
                    style={{
                      width: 13.43,
                      height: 15.93,
                      left: 8.57,
                      top: 6.07,
                      position: "absolute",
                      border: "0.75px #292D32 solid",
                    }}
                  ></div>
                  <div
                    className="Vector"
                    style={{
                      width: 5,
                      height: 0,
                      left: 7,
                      top: 9,
                      position: "absolute",
                      border: "0.75px #292D32 solid",
                    }}
                  ></div>
                  <div
                    className="Vector"
                    style={{
                      width: 24,
                      height: 24,
                      left: 0,
                      top: 0,
                      position: "absolute",
                      opacity: 0,
                    }}
                  ></div>
                </div>
              </div>
              <div
                className="Group47880"
                style={{
                  width: 24,
                  height: 24,
                  left: 0,
                  top: 0,
                  position: "absolute",
                }}
              >
                <div
                  className="VuesaxLinearMessages"
                  style={{
                    width: 24,
                    height: 24,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    opacity: 0.3,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="Messages"
                    style={{ width: 24, height: 24, position: "relative" }}
                  >
                    <div
                      className="Vector"
                      style={{
                        width: 15,
                        height: 16.14,
                        left: 2,
                        top: 2,
                        position: "absolute",
                        border: "0.75px #292D32 solid",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 13.43,
                        height: 15.93,
                        left: 8.57,
                        top: 6.07,
                        position: "absolute",
                        border: "0.75px #292D32 solid",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 5,
                        height: 0,
                        left: 7,
                        top: 9,
                        position: "absolute",
                        border: "0.75px #292D32 solid",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 24,
                        height: 24,
                        left: 0,
                        top: 0,
                        position: "absolute",
                        opacity: 0,
                      }}
                    ></div>
                  </div>
                </div>
                <div
                  className="VuesaxLinearMessages"
                  style={{
                    width: 24,
                    height: 24,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    opacity: 0.3,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    className="Messages"
                    style={{ width: 24, height: 24, position: "relative" }}
                  >
                    <div
                      className="Vector"
                      style={{
                        width: 15,
                        height: 16.14,
                        left: 2,
                        top: 2,
                        position: "absolute",
                        border: "0.75px #292D32 solid",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 13.43,
                        height: 15.93,
                        left: 8.57,
                        top: 6.07,
                        position: "absolute",
                        border: "0.75px #292D32 solid",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 5,
                        height: 0,
                        left: 7,
                        top: 9,
                        position: "absolute",
                        border: "0.75px #292D32 solid",
                      }}
                    ></div>
                    <div
                      className="Vector"
                      style={{
                        width: 24,
                        height: 24,
                        left: 0,
                        top: 0,
                        position: "absolute",
                        opacity: 0,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="Rectangle6631"
        style={{
          width: 322,
          height: 11,
          left: 1041,
          top: 661,
          position: "absolute",
          background: "#3649F9",
        }}
      ></div>
      <img
        className="CopyOfCopyOfCopyOfCopyOfCopyOfCopyOfCopyOfCopyOfCopyOfCopyOfCopyOfCopyOfCopyOfCopyOfPeopleAndTechnologyAtItsBestRemovebgPreview2"
        style={{
          width: 176,
          height: 110,
          left: 687,
          top: 18,
          position: "absolute",
        }}
        src="https://via.placeholder.com/176x110"
      />
    </div>
  );
}

export default Dashboard;
