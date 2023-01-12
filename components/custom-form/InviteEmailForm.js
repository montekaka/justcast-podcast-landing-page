import React, {useState} from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Form, Button, FormText, FormGroup, Label, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

export default function InviteEmailForm({slug, requiresFullName}) {
  const {register, formState: {errors}, handleSubmit} = useForm();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [requestAccess, setRequestAccess] = useState(false)
  const [requestEmail, setRequestEmail] = useState("");
  const [fullName, setFullName] = useState(null);

  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const toggle = () => {
    setModalOpen(!modalOpen)
    setRequestAccess(false)
    setRequestEmail("")
  }
  const clickCheckAccess = (data) => {
    const { email, full_name } = data;

    if(email) {
      axios.post(`${process.env.RAILS_ENDPOINT}/v1/shows/${slug}/access`, {
        email_address: email.toLowerCase()
      })
      .then((res) => {      
        setModalMessage(res.data.message)
        setModalOpen(true)
        setRequestAccess(false)
        setRequestEmail("")
      })
      .catch((err) => {
        setModalMessage(err.response.data.error)
        setModalOpen(true)
        setRequestAccess(true)
        setRequestEmail(email.toLowerCase())
        setFullName(full_name);
      })
    }
  }

  const clickSendRequest = () => {
    if(requestEmail && emailPattern.test(requestEmail.toLowerCase()))
    axios.post(`${process.env.RAILS_ENDPOINT}/v1/shows/${slug}/request_access`, {
      email_address: requestEmail,
      full_name: fullName
    })
    .then((res) => {
      setModalMessage(res.data.message)
      setRequestAccess(false)
      setRequestEmail("")
    })
    .catch((err) => {
      setModalMessage(err.response.data.error)
      setRequestAccess(false)
      setRequestEmail("")      
    })
  }

  const clickCancel = () => {
    setModalOpen(false)
    setRequestAccess(false)
    setRequestEmail("")
  }

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Subscription status</ModalHeader>
        <ModalBody>
          <p>{modalMessage}</p>
          <div>
            {
              requestAccess && <div>
                <Button size="sm" color="warning" block onClick={clickSendRequest}>Yes</Button>
                <Button size="sm" color="secondary" block onClick={clickCancel}>No</Button>
              </div>
            }
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-sm" color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
      <div style={{
        borderRadius: "10px",
        padding: "1.25rem",
        backgroundColor: "#ffffff"
      }}>
        <Form onSubmit={handleSubmit(clickCheckAccess)}>
          <FormGroup>
            <Label for="email">What is your email address?</Label>
            <input
              type="email"
              name="email"
              style={{width: "100%"}}
              className='form-control-sm'
              placeholder="Your email address"
              {...register("email", {
                required: "required",
                pattern: {
                  value: emailPattern,
                  message: "Entered value does not match email format"
                }
              })}
            />            
            <FormText color="danger">{errors.email?.message}</FormText>
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              name="full_name"
              style={{width: "100%"}}
              className='form-control-sm'
              placeholder="Full name"
              {...register("full_name", {
                required: requiresFullName ? "required" : false,
              })}
            />            
            <FormText color="danger">{errors.full_name?.message}</FormText>
          </FormGroup>          
          <Button className="btn-block lift btn-sm btn-secondary" type="submit">VERIFY EMAIL &#38; SUBSCRIBE</Button>
        </Form>
      </div>
    </div>
  )
}
