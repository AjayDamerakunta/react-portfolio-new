
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";




export default function ContactMe() {
  const [form, setForm] = useState({firstName: "", lastName: "", email: "", phoneNumber: ""})

  const handleOnChangeInput = (event)=> {

    setForm({
      ...form,
      [event.target.name]:event.target.value
    })


  }

  const submitForm= async (event)=>{
    event.preventDefault()
    const {firstName, lastName, email, phoneNumber} = form 
    if(firstName.length>1 && lastName.length>1 && email.length>1 && phoneNumber.length>1){
      const contactBody = {firstName, lastName, email, phoneNumber}
      const url="https://node-portfolio-f4sf.onrender.com/sendMail"
      const options = {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(contactBody)
      }
      const response = await fetch(url, options)
      const data = await response.json()
      
    setForm({firstName: "", lastName: "", email: "", phoneNumber: ""})
    
     if(response.ok) {


      alert(data.message)
      console.log(data)
     }
     else{
      alert(data.err_msg)
     }
    }

  }

  // console.log(form)
    return (
      <section id="Contact" className="contact--section">
        <div>
          <p className="sub--title">Get In Touch</p>
          <h2>Contact Me</h2>
       
        </div>
        

        <form onSubmit={submitForm} className="contact-form-container">
          <div className="form-container">
          {/* <div className="input-container"> */}
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md"></span>
              <input
                type="text" placeholder="First Name" onChange={handleOnChangeInput}
                className="contact--input text-md"
                name="firstName" value={form.firstName}
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md"></span>
              <input
                type="text" placeholder="Second Name"  onChange={handleOnChangeInput}
                className="contact--input text-md"
                name="lastName" value={form.lastName}
                id="last-name"
                required
              />
            </label>
            <label  htmlFor="email"  className="contact--label">
              <span className="text-md"></span>
              <input
                type="email" placeholder="Email"
                className="contact--input text-md"
                name="email"  onChange={handleOnChangeInput} value={form.email}
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md"></span>
              <input
                type="tel" placeholder="Phone Number"
                className="contact--input text-md"
                name="phoneNumber"  onChange={handleOnChangeInput} value={form.phoneNumber}
                id="phone-number"
                required
              />
            </label>
            {/* </div> */}
         
            {/* <div className="message-container"> */}
           <label htmlFor="message" className="contact--label">
            <span className="text-md"></span>
           
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Type your message..."></textarea>
              </label> 
           {/* </div> */}

              <div className="email-container">
               <MdOutlineMail className="email-icon" />
               <p>ajaydamerakunta8589@gmail.com</p>
               </div>
           
           <button className="submit-button">submit</button>
           </div>
   
       
              
        </form>
        
      </section>
    );
  }