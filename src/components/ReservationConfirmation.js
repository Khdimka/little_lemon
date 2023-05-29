import '../styles/ReservationConfirmation.css'

function ReservationConfirmation({formData,handleInputChange,setStep}){
    return(
        <div className="content">
            <h2>Confirm Reservation</h2>
            <div className="credentials">
                <div>
                    <label htmlFor='firstName'>First name</label>
                    <input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" placeholder="First name" required></input>
                </div>
                <div>
                    <label htmlFor='lastName'>Last name</label>
                    <input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" placeholder="Last name" required></input>
                </div>
                <div className='textarea'>
                    <label htmlFor='specialRequest'>Special request</label>
                    <textarea id="specialRequest" name="specialRequest" value={formData.specialRequest}  onChange={handleInputChange}  cols="30" rows="10" placeholder="special requests"></textarea>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input id="email" name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Email" required></input>
                </div>
                <div>
                    <label htmlFor='phoneNumber'>Phone number</label>
                    <input id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} type="tel" 
                 placeholder="Phone number" minrequired></input>
                </div>
            </div>
            <input type="checkbox"  value="accepted" checked={!!formData.privacyPolicy} onChange={handleInputChange} name="privacyPolicy" id="privacyPolicy" required/>
            <label htmlFor="privacyPolicy" >you agree to our privacy policy</label>
            <p>
            Your Reservation is {formData.seatLocation} with seats for{" "}
            {formData.diners} diners on {formData.date} at {formData.time} PM.
            </p>
            <p>Is this information correct?</p>
            <button name="goBack" type="button" onClick={() => setStep(1)}>
            <i className="fa fa-arrow-left" aria-hidden="true" ></i> Go back
            </button>
            <input type="submit" aria-label="On Click" disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.privacyPolicy} value="Confirm Reservation" />
      </div>
    )
}

export default ReservationConfirmation;