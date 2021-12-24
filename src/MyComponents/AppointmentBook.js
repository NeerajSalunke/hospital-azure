import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

// export const AppointmentBook = () => {
function AppointmentBook() {
  const btn=document.getElementById('submit');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    btn.value="Booking...";
    emailjs.sendForm('contact_service', 'contact_form', form.current, 'user_kshYWY0DFRlLW7n4LBDdi')
      .then((result) => {
        btn.value="Book";
        alert("Appointment Booked. Check Your Mail For Confirmation")
        console.log(result.text);
      }, (error) => {
        alert(error.text)
        console.log(error.text);
      });
  };

  var today = new Date();
  var date = today.getDate();
  var minDate = date + 1;
  var maxDate = date + 7;
  var month = today.getMonth();
  month = month + 1;
  var year = today.getFullYear();
  var min = year + "-" + month + "-" + minDate + "T" + "00:00";
  var max = year + "-" + month + "-" + maxDate + "T" + "00:00";
  console.log(date, min, max)

  return (
    <>
      <table>
        <tr>
          <th>Speciality</th>
          <th>Doctors</th>
        </tr>
        <tr>
          <td>Cardiologist</td>
          <td>Sima Gulati</td>
        </tr>
        <tr>
          <td>Orthopaedician</td>
          <td>Apurva Chander</td>
        </tr>
        <tr>
          <td>ENT specialist</td>
          <td>Parvati Kade</td>
        </tr>
        <tr>
          <td>Pediatric</td>
          <td>Dev Talwar</td>
        </tr>
        <tr>
          <td>Urologist</td>
          <td>Darsh Shroff</td>
        </tr>
        <tr>
          <td>Oncologist</td>
          <td>Atharv Talwar</td>
        </tr>
        <tr>
          <td>Physician</td>
          <td>Vihaan Basu</td>
        </tr>
      </table>
      <form ref={form} onSubmit={sendEmail}>
        <input className='formDetails' type="text" name="user_name" placeholder='Enter Your Name' />
        <input className='formDetails' type="email" name="user_email" placeholder='Enter your Email ID' />
        <label htmlFor='date_time' className='formDetails'>To Select Date and time, Click on  
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
        <br/>Online Booking is available for next 7 days only</label>
        <input type="datetime-local" min={min} max={max} className='formDetails' name='date_time' />
        <div className='formDetails'>
          <input type="radio" id="html" name="doc_name" value="Sima Gulati" />
          <label>Sima Gulati</label>
        </div>
        <div className='formDetails'>
          <input type="radio" id="html" name="doc_name" value="Apurva Chander" />
          <label>Apurva Chander</label>
        </div>
        <div className='formDetails'>
          <input type="radio" id="html" name="doc_name" value="Parvati Kade" />
          <label>Parvati Kade</label>
        </div>
        <div className='formDetails'>
          <input type="radio" id="html" name="doc_name" value="Dev Talwar" />
          <label>Dev Talwar</label>
        </div>
        <div className='formDetails'>
          <input type="radio" id="html" name="doc_name" value="Darsh Shroff" />
          <label>Darsh Shroff</label>
        </div>
        <div className='formDetails'>
          <input type="radio" id="html" name="doc_name" value="Atharv Talwar" />
          <label>Atharv Talwar</label>
        </div>
        <div className='formDetails'>
          <input type="radio" id="html" name="doc_name" value="Vihaan Basu" />
          <label>Vihaan Basu</label>
        </div>
        <input className='formDetails' id='submit' type="submit" value="Book" />
      </form>
    </>
  );
};
export default AppointmentBook;