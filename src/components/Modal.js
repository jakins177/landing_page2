import './Modal.css';
import ConvertKitForm from 'convertkit-react'
import React, { Component } from 'react'
const CONVERTKIT_ID = 1666229;

const config = {
    formId: CONVERTKIT_ID,
    submitText: 'Get Started',
}

export default class Modal extends Component {

    
    render() {
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

        <ConvertKitForm {...config} />


	</div>
</div>

            </div>
        )
    }
}
