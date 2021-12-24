import pic from "./vaccination.svg";
import pic2 from "./vaccine.svg";
import pic3 from "./dosanddonts.png";
import pic4 from "./guide.png";
function Vaccine() {
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
        paddingTop: "30px",
        fontSize: "30px",
        fontStyle: "Bold",
        // marginTop:"50px",
        // position:"relative",
        // zIndex:"1"
    }

    let thirdStyle = {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        color: "white",
        fontSize: "30px",
        fontStyle: "Bold",
        paddingTop: "30px",
    }

    let fourthStyle = {
        display:"flex",
        // flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        // width:"100%",
        // color: "white",
        // fontSize: "30px",
        // fontStyle: "Bold",
        // width:"200px",
        paddingTop: "30px",
    }
    return (
        <>
            <img style={firstStyle} src={pic} alt="Vaccine" />
            <div style={secondStyle}>
                <u>Covid-19:Vaccine Registration Process And Important Guidelines</u>
            </div>
            <div style={thirdStyle}>
                <img src={pic2} alt="Vaccine" />
                <span>Register on the Cowin App to book your Vaccination Slot</span><br/>
                <img src={pic2} alt="Vaccine" />
            </div>
            <div style={{textAlign:"center"}}> 
                <a href="https://selfregistration.cowin.gov.in/" target="_blank">
                    <button type="button" class="btn btn-primary btn-lg">Register Here</button>
                </a> 
            </div> 
            <div style={{fontSize:"30px",fontStyle:"bold",color:"white",textAlign:"center"}}>
                <u>Important Resources From Cowin Website:</u><br/>
            </div>
            <div style={fourthStyle}>
                <a href="https://hospitalstorage.blob.core.windows.net/hospitalfiles/Dos_and_Donts_for_Citizens.pdf" target="_blank">
                    {/* Dos and Donts For Citizens */}
                    <img className="cowinimg" style={{width:"300px",height:"370px",border:"3px solid black"}} src={pic3} alt="Dos and Donts" />
                </a>
                <a href="https://hospitalstorage.blob.core.windows.net/hospitalfiles/User Guide_Citizen registration_18.pdf" target="_blank">
                    {/* Guide For Citizens */}
                    <img className="cowinimg" style={{width:"300px",height:"300px",border:"3px solid black"}} src={pic4} alt="Guide" />
                </a>
            </div>
        </>
    )
}

export default Vaccine;