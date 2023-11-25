import React from "react";
import './Contact.css'

function Contact() {
  return (
    <div id="contact" className="body_content">
      <h1>Contact</h1>
      <br />
      <p>
        <h3>Prachi Varshney</h3>
        <p>Research Scholar (Textiles and Clothing)</p>
        <p>Department of Home Science </p>
        <p>Dayalbagh Educational Institute; (Deemed University)</p> 
        <p>Dayalbagh, Agra </p>
        <p>prachivarshney295@gmail.com</p>
      </p>
      <br />
      <br />
    <div className="container">
      <br></br>
      <h4>Please fill out the form provided below and we will respond to your inquirey shortly, Thank you!</h4>
      <br></br>
      <form >
     <label >First Name</label>
     <input type="text" name="firstname" />

     <label for="lname">Last Name</label>
     <input type="text" name="lastname" />

     <label for="email">Email</label>
     <input type="text" id="email" />

     <label for="message">Message</label>
     <textarea id="message" name="message"/>

     <input type="submit" value="Submit"/>

   </form>
   </div>
   </div>
    
  );
}

export default Contact;
