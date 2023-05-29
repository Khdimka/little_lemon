import "../styles/ReservationMaker.css";
import { useState } from "react";
import ReservationConfirmation from "./ReservationConfirmation";

function BookingForm({availableTimes,dispatch,submitForm}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    seatLocation: "",
    date: "",
    diners: "",
    occasion: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    specialRequest: "",
    privacyPolicy: false
  });

  function handleInputChange(event) {
    const {
      name,
      value,
      type,
      checked
    } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData(prevFormData => ({ ...prevFormData,
      [name]: newValue
    }));
  }

  function handleStepOneSubmit(event) {
    event.preventDefault();
    setStep(2);
  }

  async function handleDateChange(event){
    const { name, value } = event.target
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
   dispatch({ type: 'reservation', payload: value })
  }

  function handleStepTwoSubmit(event) {
    event.preventDefault(); 
    submitForm(formData)
    console.log(formData);
  }

  return <form onSubmit={step === 1 ? handleStepOneSubmit : handleStepTwoSubmit}>
      {step === 1 ? <div className="content">
          <h2>Make a reservation</h2>
          <div className="grid">
            <div className="radio">
              <label htmlFor="indoor">Indoor seat</label>
              <input onChange={handleInputChange} type="radio" name="seatLocation" id="indoor" value='indoor' checked={formData.seatLocation === "indoor"} required />
            </div>
            <div className="radio">
              <label htmlFor="outdoor">Outdoor seat</label>
              <input onChange={handleInputChange} type="radio" name="seatLocation" id="outdoor" value='outdoor' checked={formData.seatLocation === "outdoor"} required />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input type="date" id="date" name="date" value={formData.date} onChange={handleDateChange} required />            
            </div>
            <div>
              <label htmlFor="diners">Number of Diners</label>
            <select value={formData.diners} required onChange={handleInputChange} name="diners" id="diners">
              <option value="" className="placeholder" disabled>Number of diners</option>
              <option value="1">1 Diner</option>
              <option value="2">2 Diners</option>
              <option value="3">3 Diners</option>
              <option value="4">4 Diners</option>
              <option value="5">5 Diners</option>
              <option value="6">6 Diners</option>
              <option value="7">7 Diners</option>
              <option value="8">8 Diners</option>
              <option value="9">9 Diners</option>
              <option value="10">10 Diners</option>
            </select>
            </div>
            <div>
              <label htmlFor="occasion">Occasion</label>
              <select onChange={handleInputChange} name="occasion" id="occasion" required value={formData.occasion}>
                <option value="" className="placeholder" disabled>Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Engagement">Engagement</option>
              </select>
            </div>
            <div>
              <label htmlFor="time">Time</label>
              <select value={formData.time} onChange={handleInputChange} name="time" id="time">
                <option value="" className="placeholder" disabled>Time</option>
                {
                  availableTimes.map(time =>{
                    return(
                      <option key={time} value={time}>{time}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
          <input value="Reserve a table" disabled={!formData.seatLocation || !formData.date || !formData.diners || !formData.time || !formData.occasion} type="submit"></input>
        </div> : <ReservationConfirmation formData={formData} setStep={setStep} handleInputChange={handleInputChange} />}
    </form>;
}

export default BookingForm;