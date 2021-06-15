import React, {useEffect, useState} from "react";
import { Input, Button, Col, FormFeedback, FormText } from 'reactstrap';
import axios from 'axios';

const EmailSignup = (props) => {
  const {show_id, show_form, button_text, button_title_message} = props;
  const [email, setEmail] = useState('');

  const [callbackMessage, setCallbackMessage] = useState({
    valid: false,
    invalid: false,
    message: ''
  })

  const handleEmailChanged = (event) => {
    setCallbackMessage({
      valid: false,
      invalid: false,
      message: ''
    });
    setEmail(event.target.value);
  }

  const handleSubmit = () => {
    axios.post(`${process.env.RAILS_ENDPOINT}/v1/shows/${show_id}/add_mailchimp_subscriber`, {
      email_address: email,
      private_token: process.env.REACT_APP_MAILCHIMP_RAILS_SELF_DEFINE_TOKEN
    })
    .then((res) => {      
      setCallbackMessage({
        valid: true,
        invalid: false,
        message: res.data.message
      })      
    })
    .catch((err) => {      
      setCallbackMessage({
        valid: false,
        invalid: true,
        message: err.response.data.message
      })
    })
  }

  if(show_form) {
    return (
      <div style={{marginTop: '20px'}}>
        <h3 className="text-center">{button_title_message}</h3>
        <div style={{marginBottom: '20px', marginTop: '20px'}}>
            <Input 
            valid={callbackMessage.valid}
            invalid={callbackMessage.invalid}
            placeholder="Your email" 
            style={{borderColor: '#ACDAF5'}} 
            value={email} 
            onChange={handleEmailChanged}/>
            <FormFeedback>{callbackMessage.message}</FormFeedback>
            {callbackMessage.valid && <FormText color="primary">{callbackMessage.message}</FormText>}        
          </div>
          <Button className="btn-block lift" onClick={handleSubmit}>{button_text}</Button>          
      </div>
    )
  }

  return null;
}

export default EmailSignup;