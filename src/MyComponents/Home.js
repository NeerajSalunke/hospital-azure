import pic from "./consultancy.svg";
import pic2 from "./logo.jpg"
import { Link } from "react-router-dom";
function Home() {
    let firstStyle = {
        position: "absolute",
        width: "100%",
        height: "100%",
        content: "",
        zIndex: "-1",
        opacity: "0.35"
    // zIndex:"-1"
}
let secondStyle = {
    color: "white",
    textAlign: "center",
    paddingTop: "5px",
    fontSize: "30px",
    fontStyle: "Bold",
    // marginTop:"50px",
    // position:"relative",
    // zIndex:"1"
}

let thirdStyle = {
    color:"greenyellow",
    fontSize:"50px"
}

let fourthStyle = {
    color: "white",
    textAlign: "center",
    paddingTop: "50px",
    fontSize: "40px",
    fontStyle: "Bold",
}

let fifthStyle = {
    height:"10%",
    width:"100%",
    textAlign:"center",
    margin:"10px auto"
}

let sixthStyle = {
    // position:"fixed",
    // right:"4px",
    color:"white",
    fontSize:"30px",
    fontStyle:"bold",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    height:"500px",
    width:"100%"
}

return (
    <div>
        <img style={firstStyle} src={pic} alt="hospital" id="hospPic" />
        <div style={fifthStyle}>
            <img src={pic2} alt="logo" />
        </div>
        <div style={secondStyle}>
            <span style={thirdStyle}>Welcome to Salunke's Hospital</span><br />
            <span>Years ago, we made a commitment. We’ve kept it.</span><br />
            <span>Uncompromising Excellence. Commitment to Care.</span>
        </div>
        <div style={fourthStyle}>
            Consult Topmost Doctors with Years of expertise and training<br/>
            <Link to="/appointmentbook">
                <button type="button" className="btn btn-primary btn-lg">Book Appointment</button>
            </Link><br/>
            Get all Information about Covid-19 Vaccination<br/>
            <Link to="/vaccine">
                <button type="button" className="btn btn-primary btn-lg">Vaccination</button>
            </Link>
        </div>
        <div style={sixthStyle}>
            <p>Interact With Our ChatBot To Get Answer To Your Queries</p>
            <p>You May Ask General Covid-19 Questions. It's More Than A Personal Doctor!</p>
            <iframe style={{height:"300px",width:"600px",border:"4px solid #0c6efd",borderRadius:"15px"}} src='https://webchat.botframework.com/embed/hospitalbot-bot?s=oRMRI8UDrf4.Vjjk4HX98KJLCMpMeVqQ43b2soQ_eCy70J5hSlg-Rb8'></iframe>
        </div>
    </div>
);
}

export default Home;