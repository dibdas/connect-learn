import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axiosClient from "../../utils/axiosClient";
// import {
//   KEY_ACCESS_TOKEN,
//   settingItemFromLocalStorage,
//   setItem,
// } from "../../utils/localStorageManage";
import "./Login.scss";

function Login() {
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
      className="LoginScreen3"
      style={{
        width: 1490,
        height: 932,
        position: "relative",
        background: "#151316",
        borderRadius: 26,
        overflow: "hidden",
      }}
    >
      <div
        className="Background"
        style={{
          width: 1458,
          height: 1037,
          left: -82,
          top: -55,
          position: "absolute",
        }}
      >
        <div
          className="Ellipse3"
          style={{
            width: 397,
            height: 397,
            left: 430,
            top: 640,
            position: "absolute",
            opacity: 0.58,
            background:
              "radial-gradient(100.00% 100.00% at NaN% NaN%, #B379DF 0%, rgba(54.37, 0, 95.62, 0) 100%)",
            borderRadius: 9999,
          }}
        />
        <div
          className="Ellipse2"
          style={{
            width: 397,
            height: 397,
            left: 0,
            top: 619,
            position: "absolute",
            opacity: 0.58,
            background:
              "radial-gradient(100.00% 100.00% at NaN% NaN%, #C45647 0%, rgba(210, 90, 99, 0) 100%)",
            borderRadius: 9999,
          }}
        />
        <div
          className="Rectangle1"
          style={{
            width: 447,
            height: 803,
            left: 213,
            top: 118,
            position: "absolute",
            background:
              "radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(179, 121, 223, 0.20) 0%, rgba(204, 88, 84, 0.02) 77%, rgba(179, 121, 223, 0.20) 100%)",
            borderRadius: 59,
            backdropFilter: "blur(80px)",
          }}
        />
        <div
          className="Ellipse1"
          style={{
            width: 640.29,
            height: 381.72,
            left: 817.71,
            top: 0,
            position: "absolute",
            opacity: 0.58,
            background:
              "radial-gradient(100.00% 100.00% at NaN% NaN%, #B379DF 0%, rgba(54.37, 0, 95.62, 0) 100%)",
            borderRadius: 9999,
          }}
        />
        <div
          className="Name"
          style={{
            width: 359,
            height: 52,
            left: 264,
            top: 404,
            position: "absolute",
          }}
        >
          <div
            className="Card"
            style={{
              width: 359,
              height: 52,
              left: 0,
              top: 0,
              position: "absolute",
            }}
          >
            <img
              className="Rectangle3"
              style={{
                width: 359,
                height: 52,
                left: 0,
                top: 0,
                position: "absolute",
                background:
                  "radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.04) 77%, rgba(255, 255, 255, 0) 100%)",
                borderRadius: 8,
                border: "0.15px white solid",
                backdropFilter: "blur(12.16px)",
              }}
              src="https://via.placeholder.com/359x52"
            />
            <img
              className="Rectangle1"
              style={{
                width: 359,
                height: 52,
                left: 0,
                top: 0,
                position: "absolute",
                background:
                  "radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.04) 77%, rgba(255, 255, 255, 0) 100%)",
                borderRadius: 8,
                border: "0.15px white solid",
                backdropFilter: "blur(12.16px)",
              }}
              src="https://via.placeholder.com/359x52"
            />
          </div>
          <div
            className="Vector"
            style={{
              width: 22,
              height: 18,
              left: 281,
              top: 13,
              position: "absolute",
              background: "#A4A4A4",
            }}
          ></div>
          <div
            className="Yourname"
            style={{
              left: 12,
              top: 10,
              position: "absolute",
              color: "#A4A4A4",
              fontSize: 14.33,
              fontFamily: "Poppins",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            @yourname
          </div>
        </div>
        <div
          className="YourName"
          style={{
            left: 278,
            top: 378,
            position: "absolute",
            color: "#A4A4A4",
            fontSize: 14.33,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Your Name
        </div>
      </div>
      <div
        className="Objects"
        style={{
          width: 1594.09,
          height: 197,
          left: 119,
          top: 52,
          position: "absolute",
        }}
      >
        <img
          className="FrontShapes"
          style={{
            width: 65.15,
            height: 53.51,
            left: 49.18,
            top: 96.97,
            position: "absolute",
            transform: "rotate(-66.77deg)",
            transformOrigin: "0 0",
            boxShadow: "22px 22px 22px ",
            filter: "blur(22px)",
          }}
          src="https://via.placeholder.com/65x54"
        />
        <img
          className="FrontShapes"
          style={{
            width: 101.81,
            height: 68.53,
            left: 373.96,
            top: 150.54,
            position: "absolute",
            transform: "rotate(-18.69deg)",
            transformOrigin: "0 0",
            boxShadow: "4px 4px 4px ",
            filter: "blur(4px)",
          }}
          src="https://via.placeholder.com/102x69"
        />
        <img
          className="Saly16"
          style={{
            width: 311.86,
            height: 197,
            left: 1282.23,
            top: 0,
            position: "absolute",
            boxShadow: "9px 9px 9px ",
            filter: "blur(9px)",
          }}
          src="https://via.placeholder.com/312x197"
        />
      </div>
      <div
        className="SigninButton"
        style={{
          width: 314,
          height: 50,
          left: 209,
          top: 514,
          position: "absolute",
        }}
      >
        <div
          className="Rectangle2"
          style={{
            width: 314,
            height: 50,
            left: 0,
            top: 0,
            position: "absolute",
            background: "linear-gradient(90deg, #9C3FE4 0%, #C65647 100%)",
            borderRadius: 15,
          }}
        />
        <div
          className="SignIn"
          style={{
            left: 126,
            top: 11,
            position: "absolute",
            color: "white",
            fontSize: 17.92,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Sign in
        </div>
      </div>
      <div
        className="ContinueWith"
        style={{ width: 303, left: 192, top: 629, position: "absolute" }}
      >
        <div
          className="OrContinueWith"
          style={{
            left: 105,
            top: 0,
            position: "absolute",
            color: "#B6B6B6",
            fontSize: 11.25,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Or continue with
        </div>
        <div
          className="Rectangle3"
          style={{
            width: 98,
            height: 1,
            left: 0,
            top: 8,
            position: "absolute",
            background:
              "linear-gradient(270deg, rgba(217, 217, 217, 0.75) 0%, rgba(217, 217, 217, 0) 100%)",
          }}
        ></div>
        <div
          className="Rectangle4"
          style={{
            width: 98,
            height: 1,
            left: 205,
            top: 8,
            position: "absolute",
            background:
              "linear-gradient(90deg, rgba(217, 217, 217, 0.75) 0%, rgba(217, 217, 217, 0) 100%)",
          }}
        ></div>
      </div>
      <div
        className="Buttons"
        style={{
          width: 58.76,
          height: 52,
          left: 426,
          top: 664,
          position: "absolute",
        }}
      >
        <div
          className="Card"
          style={{
            width: 58.76,
            height: 52,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <img
            className="Rectangle3"
            style={{
              width: 58.76,
              height: 52,
              left: 0,
              top: 0,
              position: "absolute",
              background:
                "radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.04) 77%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: 8.85,
              border: "0.15px white solid",
              backdropFilter: "blur(12.01px)",
            }}
            src="https://via.placeholder.com/59x52"
          />
          <img
            className="Rectangle1"
            style={{
              width: 58.76,
              height: 52,
              left: 0,
              top: 0,
              position: "absolute",
              background:
                "radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.04) 77%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: 8.85,
              border: "0.15px white solid",
              backdropFilter: "blur(12.01px)",
            }}
            src="https://via.placeholder.com/59x52"
          />
        </div>
        <div
          className="Group1431"
          style={{
            width: 38,
            height: 38,
            left: 10,
            top: 9,
            position: "absolute",
          }}
        >
          <div
            className="Ellipse4"
            style={{
              width: 38,
              height: 38,
              left: 0,
              top: 0,
              position: "absolute",
              background: "#0A66C2",
              borderRadius: 9999,
            }}
          />
          <div
            className="Vector"
            style={{
              width: 18,
              height: 25,
              left: 8,
              top: 6,
              position: "absolute",
              background: "white",
            }}
          ></div>
        </div>
      </div>
      <div
        className="Buttons"
        style={{
          width: 60,
          height: 55,
          left: 209,
          top: 663,
          position: "absolute",
        }}
      >
        <div
          className="Card"
          style={{
            width: 60,
            height: 55,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <img
            className="Rectangle3"
            style={{
              width: 60,
              height: 55,
              left: 0,
              top: 0,
              position: "absolute",
              background:
                "radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.04) 77%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: 8.85,
              border: "0.15px white solid",
              backdropFilter: "blur(12.01px)",
            }}
            src="https://via.placeholder.com/60x55"
          />
          <img
            className="Rectangle1"
            style={{
              width: 60,
              height: 55,
              left: 0,
              top: 0,
              position: "absolute",
              background:
                "radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.04) 77%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: 8.85,
              border: "0.15px white solid",
              backdropFilter: "blur(12.01px)",
            }}
            src="https://via.placeholder.com/60x55"
          />
        </div>
        <div
          className="Vector"
          style={{
            width: 44,
            height: 31,
            left: 8,
            top: 10,
            position: "absolute",
            background: "#FFC107",
          }}
        ></div>
        <div
          className="Vector"
          style={{
            width: 35,
            height: 12,
            left: 10,
            top: 29,
            position: "absolute",
            background: "#4CAF50",
          }}
        ></div>
        <div
          className="Vector"
          style={{
            width: 22,
            height: 15,
            left: 30,
            top: 22,
            position: "absolute",
            background: "#1976D2",
          }}
        ></div>
        <div
          className="Vector"
          style={{
            width: 34,
            height: 12,
            left: 11,
            top: 10,
            position: "absolute",
            background: "#FF3D00",
          }}
        ></div>
      </div>
      <div
        className="Buttons"
        style={{
          width: 58.96,
          height: 55,
          left: 315,
          top: 664,
          position: "absolute",
        }}
      >
        <div
          className="Card"
          style={{
            width: 58.96,
            height: 55,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <img
            className="Rectangle3"
            style={{
              width: 58.96,
              height: 55,
              left: 0,
              top: 0,
              position: "absolute",
              background:
                "radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.04) 77%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: 8.85,
              border: "0.15px white solid",
              backdropFilter: "blur(12.01px)",
            }}
            src="https://via.placeholder.com/59x55"
          />
          <img
            className="Rectangle1"
            style={{
              width: 58.96,
              height: 55,
              left: 0,
              top: 0,
              position: "absolute",
              background:
                "radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.04) 77%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: 8.85,
              border: "0.15px white solid",
              backdropFilter: "blur(12.01px)",
            }}
            src="https://via.placeholder.com/59x55"
          />
        </div>
        <div
          className="Vector"
          style={{
            width: 37,
            height: 40,
            left: 10,
            top: 7,
            position: "absolute",
            background: "white",
            boxShadow:
              "0px 2.98305082321167px 2.98305082321167px rgba(0, 0, 0, 0.09)",
          }}
        ></div>
      </div>
      <div
        className="Username"
        style={{
          left: 196,
          top: 224,
          position: "absolute",
          color: "#A4A4A4",
          fontSize: 14.33,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        Username
      </div>
      <div
        className="ForgotPassword"
        style={{
          left: 312,
          top: 571,
          position: "absolute",
          color: "#A4A4A4",
          fontSize: 11.33,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        Forgot Password?
      </div>
      <div
        className="Password"
        style={{
          width: 353.18,
          height: 55,
          left: 182,
          top: 433,
          position: "absolute",
        }}
      >
        <div
          className="Card"
          style={{
            width: 353.18,
            height: 55,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <img
            className="Rectangle3"
            style={{
              width: 353.18,
              height: 55,
              left: 0,
              top: 0,
              position: "absolute",
              background:
                "radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.04) 77%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: 8,
              border: "0.15px white solid",
              backdropFilter: "blur(12.16px)",
            }}
            src="https://via.placeholder.com/353x55"
          />
          <img
            className="Rectangle1"
            style={{
              width: 353.18,
              height: 55,
              left: 0,
              top: 0,
              position: "absolute",
              background:
                "radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.04) 77%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: 8,
              border: "0.15px white solid",
              backdropFilter: "blur(12.16px)",
            }}
            src="https://via.placeholder.com/353x55"
          />
        </div>
        <div
          className="Vector"
          style={{
            width: 23.91,
            height: 15.03,
            left: 284,
            top: 18,
            position: "absolute",
            background: "#A4A4A4",
          }}
        ></div>
        <div
          className="Vector"
          style={{
            width: 22.84,
            height: 11.58,
            left: 319,
            top: 20,
            position: "absolute",
            background: "#A4A4A4",
          }}
        ></div>
        <div
          className="Frame1433"
          style={{
            width: 26.76,
            height: 4.26,
            left: 21.86,
            top: 20.52,
            position: "absolute",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 3.03,
            display: "inline-flex",
          }}
        >
          <div
            className="Ellipse5"
            style={{
              width: 5.2,
              height: 5.2,
              background: "#A4A4A4",
              borderRadius: 9999,
            }}
          />
          <div
            className="Ellipse6"
            style={{
              width: 5.2,
              height: 5.2,
              background: "#A4A4A4",
              borderRadius: 9999,
            }}
          />
          <div
            className="Ellipse7"
            style={{
              width: 5.2,
              height: 5.2,
              background: "#A4A4A4",
              borderRadius: 9999,
            }}
          />
          <div
            className="Ellipse8"
            style={{
              width: 5.2,
              height: 5.2,
              background: "#A4A4A4",
              borderRadius: 9999,
            }}
          />
          <div
            className="Ellipse9"
            style={{
              width: 5.2,
              height: 5.2,
              background: "#A4A4A4",
              borderRadius: 9999,
            }}
          />
          <div
            className="Ellipse10"
            style={{
              width: 5.2,
              height: 5.2,
              background: "#A4A4A4",
              borderRadius: 9999,
            }}
          />
          <div
            className="Ellipse11"
            style={{
              width: 5.2,
              height: 5.2,
              background: "#A4A4A4",
              borderRadius: 9999,
            }}
          />
          <div
            className="Ellipse12"
            style={{
              width: 5.2,
              height: 5.2,
              background: "#A4A4A4",
              borderRadius: 9999,
            }}
          />
          <div
            className="Ellipse13"
            style={{
              width: 5.2,
              height: 5.2,
              background: "#A4A4A4",
              borderRadius: 9999,
            }}
          />
        </div>
      </div>
      <div
        className="Title"
        style={{
          width: 320,
          height: 73,
          left: 188,
          top: 106,
          position: "absolute",
        }}
      >
        <div
          className="WelcomeBackWeMissedYou"
          style={{
            left: 51,
            top: 52,
            position: "absolute",
            color: "#A4A4A4",
            fontSize: 14.33,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          welcome back we missed you
        </div>
        <div
          className="WelcomeBack"
          style={{
            left: 0,
            top: 0,
            position: "absolute",
            color: "#EFEFEF",
            fontSize: 40.33,
            fontFamily: "Poppins",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          Welcome Back!
        </div>
      </div>
      <div
        className="Password"
        style={{
          left: 199,
          top: 408,
          position: "absolute",
          color: "#A4A4A4",
          fontSize: 14.33,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        Password
      </div>
      <div
        className="Text"
        style={{
          left: 268,
          top: 408,
          position: "absolute",
          color: "black",
          fontSize: 14.33,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        {" "}
      </div>
      <div
        className="Rectangle2"
        style={{
          width: 314,
          height: 50,
          left: 187,
          top: 514,
          position: "absolute",
          background: "linear-gradient(90deg, #9C3FE4 0%, #C65647 100%)",
          borderRadius: 15,
        }}
      />
      <div
        className="SignUp"
        style={{
          left: 325,
          top: 531,
          position: "absolute",
          color: "white",
          fontSize: 17.92,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        Sign up
      </div>
      <div
        className="Email"
        style={{
          width: 349,
          height: 57,
          left: 182,
          top: 253,
          position: "absolute",
        }}
      >
        <div
          className="Email"
          style={{
            width: 349,
            height: 57,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        >
          <img
            className="Rectangle3"
            style={{
              width: 349,
              height: 57,
              left: 0,
              top: 0,
              position: "absolute",
              background:
                "radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.04) 77%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: 8,
              border: "0.15px white solid",
              backdropFilter: "blur(12.16px)",
            }}
            src="https://via.placeholder.com/349x57"
          />
          <img
            className="Rectangle1"
            style={{
              width: 349,
              height: 57,
              left: 0,
              top: 0,
              position: "absolute",
              background:
                "radial-gradient(43.45% 36.33% at 31.24% 29.39%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.04) 77%, rgba(255, 255, 255, 0) 100%)",
              borderRadius: 8,
              border: "0.15px white solid",
              backdropFilter: "blur(12.16px)",
            }}
            src="https://via.placeholder.com/349x57"
          />
        </div>
        <div
          className="YournameGmailCom"
          style={{
            width: 186.73,
            height: 21.76,
            left: 32,
            top: 16,
            position: "absolute",
            color: "#A4A4A4",
            fontSize: 14.33,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          yourname@gmail.com
        </div>
        <div
          className="Vector"
          style={{
            width: 24,
            height: 16,
            left: 279,
            top: 21,
            position: "absolute",
            background: "#A4A4A4",
          }}
        ></div>
      </div>
      <div
        className="Illustration"
        style={{
          width: 792.81,
          height: 573,
          left: 662.19,
          top: 83,
          position: "absolute",
        }}
      >
        <img
          className="Avatar"
          style={{
            width: 792.81,
            height: 573,
            left: 0,
            top: 0,
            position: "absolute",
          }}
          src="https://via.placeholder.com/793x573"
        />
        <div
          className="Ellipse14"
          style={{
            width: 85.98,
            height: 82.63,
            left: 17.26,
            top: 65.23,
            position: "absolute",
            transform: "rotate(-1.51deg)",
            transformOrigin: "0 0",
            background: "#E1DFDF",
            boxShadow: "4px 4px 4px ",
            filter: "blur(4px)",
            backdropFilter: "blur(4px)",
          }}
        ></div>
        <img
          className="Image1"
          style={{
            width: 15.48,
            height: 72.23,
            left: 49.81,
            top: 66,
            position: "absolute",
          }}
          src="https://via.placeholder.com/15x72"
        />
      </div>
    </div>
  );
}

export default Login;
