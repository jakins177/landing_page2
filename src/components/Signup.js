import React, { Component } from 'react'
import SignupModal from './SignupModal'
import Modal from './Modal'
export default class Signup extends Component {


    render() {

    

        return (
            <div>
            <div>
            <br/>

            <a href="#openModal">
                <button >Get Your FREE Copy!</button></a>

               <Modal/>
                
            </div>

    
            <div>
                <br/>
            <img src="https://trafficsecrets.com/hosted/images/0c/5409028308437590c05ba2fcfe0d78/Traffic-Secrets-1080x1080px-Ad-03.png"  width="50%" />
            </div>
            </div>

        )
    }
}
