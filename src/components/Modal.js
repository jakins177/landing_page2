import './Modal.css';

import ConvertKitForm from 'convertkit-react'
import React, { Component } from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Redirect } from "react-router-dom";

const CONVERTKIT_ID = 1666229;

const MAIL_CHIMP_URL = "https://iridescentwhite.us2.list-manage.com/subscribe/post?u=831ccbfe0100260a9bb7bc7ef&amp;id=5dd3f857df"

const config = {
    formId: CONVERTKIT_ID,
    submitText: 'Get Started',
}
let CRITICAL_REDIRECT = false;
// a basic form
const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
      email &&
      name &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        NAME: name.value
      });

      
  
    return (
      <div
        style={{
          background: "#darkslategray",
          borderRadius: 2,
          padding: 10,
          display: "inline-block"
        }}
      >
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
            
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
            {...CRITICAL_REDIRECT = true}
            
          />
          

        )}
        <input
          style={{outline:"none", fontSize: "2em", padding: 5 }}
          ref={node => (name = node)}
          type="text"
          placeholder="Your name"
        />
        <br />
        <input
          style={{ outline:"none", fontSize: "2em", padding: 5 }}
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
          Submit
        </button>
      </div>
    );
  };



export default class Modal extends Component {

    

    
    render() {
        if(CRITICAL_REDIRECT == false)
        {
        return (
            <div>
                

<div id="openModal" class="modalDialog">
	<div>
		<a href="#close" title="Close" class="close">X</a>
		<h2>Claim Your Free Book Now</h2>
        {/* <form action="/action_page.php"></form>
        <input type="text" id="fname" name="fname" placeholder="Name..."/><br/><br/>
        <input type="email"  id="fname" name="fname" placeholder="Email Address..."/><br/><br/>
        <input class="inputButton" type="submit" value="Get Started"></input>
		<form/> */}

<MailchimpSubscribe
          url={MAIL_CHIMP_URL}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />


	</div>
</div>

            </div>
        )
          }
          else{
              return(<div> <h1>CRITICAL_REDIRECT</h1>
              
              <Redirect to='https://www.yahoo.com/'/>
              </div>)
          }
    }
}
