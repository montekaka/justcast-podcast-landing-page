import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Button } from 'reactstrap';
import { loadStripe } from "@stripe/stripe-js";
import PriceModal from './PriceModal';
import EmailUsButton from './../EmailUsButton'

const Tipjar = ({slug, prices, stripe_user_id, email, name}) => {
  const [modal, setModal] = useState(false)
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if(query.get("canceled")) {
      setModal(true)
      setMessage("Order canceled -- continue to enjoy the podcast and tip to support when you're ready.");   
      setTitle("Message")      
    }
    if(query.get("success")) {
      setModal(true)
      setMessage("Order placed! You will receive an email confirmation.");   
      setTitle("Success")      
    }
  }, [])
  

  const toggle = () => {
    setModal(!modal)
  }   

  const handlePriceClick = (slug, price_id) => {
    let sessionId = '';    
  
    axios.post(`${process.env.RAILS_ENDPOINT}/v1/create-checkout-session/${price_id}`, {
      callback_url: `${process.env.REACT_BASE_PATH}/${slug}`
    })
    .then((res) => {
      return res.data;
    })
    .then((session) => {
      sessionId = session.id;
      return loadStripe(process.env.REACT_STRIPE_PUBLIC_KEY, {
        stripeAccount: stripe_user_id
      });          
    })
    .then((stripe) => {
      return stripe.redirectToCheckout({
        sessionId: sessionId
      })
    })
    .then((res) => {
      if(res.error) {
        // console.log(res.error.message);
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
        setMessage(res.error.message);   
        setTitle("Error")
        //addNotifcationAtom({title: 'Error', message, active: true})
      }
    })
    .catch((err) => {
      setModal(false)
      console.log(err);     
    }) 
  }
  // const {prices, stripe_user_id} = data
  if(prices.length > 0) {
    return (
      <>
      <PriceModal 
        title={title} 
        message={message}
        slug={slug}         
        prices={prices} 
        modal={modal} 
        toggle={toggle} 
        handlePriceClick={handlePriceClick}
      />
      <div style={{marginBottom: "20px"}}>      
        <Button color="warning" onClick={() => {
          setTitle("How much would you like to tip?")
          setMessage("")
          toggle();
        }} className="btn-block lift">Support Us</Button>        
        <EmailUsButton email={email} subject={`Feedback for ${name}`}/>
      </div>
      </>
    )
  }

  return <div style={{marginBottom: "20px"}}><EmailUsButton/></div>;
}


export default Tipjar;