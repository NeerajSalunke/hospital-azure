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
                <button type="button" class="btn btn-primary btn-lg">Book Appointment</button>
            </Link><br/>
            Get all Information about Covid-19 Vaccination<br/>
            <Link to="/vaccine">
                <button type="button" class="btn btn-primary btn-lg">Vaccination</button>
            </Link>
        </div>
    </div>
);
}

export default Home;