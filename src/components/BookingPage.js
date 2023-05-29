import BookingForm from "./BookingForm";
import { useState,useReducer } from "react";
import { fetchAPI,submitAPI } from "./API";
import { useNavigate } from "react-router-dom";



function BookingPage() {
  

  
  const [date, setDate] = useState(new Date())
  const navigate = useNavigate();
  
   
  function initializeTimes(date) {
    return fetchAPI(date)
    }
  
  
    function submitForm(formData) {
      const isSubmitted = submitAPI(formData);
  
      if (isSubmitted) {
        navigate("/confirmed");
      }
    }
    
  
  function updateTimes(state,action){
    let newState
    switch (action.type) {
      case 'reservation':
      const newDate = new Date(action.payload);
      newState = fetchAPI(newDate)
      return [...newState]

      default:
        throw new Error()
        
    }
  }
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(date));




  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>;
}

export default BookingPage;
