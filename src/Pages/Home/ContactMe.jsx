
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";




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
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
          </p>
        </div>
        

        <form onSubmit={submitForm} className="contact--form--container">
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text" placeholder="Enter your First Name" onChange={handleOnChangeInput}
                className="contact--input text-md"
                name="firstName" value={form.firstName}
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text" placeholder="Enter your Second Name"  onChange={handleOnChangeInput}
                className="contact--input text-md"
                name="lastName" value={form.lastName}
                id="last-name"
                required
              />
            </label>
            <label  htmlFor="email"  className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email" placeholder="Enter  your Email"
                className="contact--input text-md"
                name="email"  onChange={handleOnChangeInput} value={form.email}
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">Phone Number</span>
              <input
                type="tel" placeholder="Enter your PhoneNo"
                className="contact--input text-md"
                name="phoneNumber"  onChange={handleOnChangeInput} value={form.phoneNumber}
                id="phone-number"
                required
              />
            </label>
          </div>
          {/* <label htmlFor="choode-topic" className="contact--label">
            <span className="text-md">Choose a topic</span>
            <select id="choose-topic" className="contact--input text-md">
              <option>Select One...</option>
              <option>Item 1</option>
              <option>Item 2</option>
              <option>Item 3</option>
            </select>
          </label>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label> */}
          {/* <label htmlFor="checkbox" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label> */}
          <div>
            <button  type="submit" className="btn btn-primary contact--form--btn">Submit</button>
          </div>

          {/* <div className="footer--social--icons"> */}
        
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M22.6667 8.65479H18.6667C17.9303 8.65479 17.3333 9.25175 17.3333 9.98812V13.9881H22.6667C22.8183 13.9848 22.9621 14.0553 23.0523 14.1773C23.1424 14.2993 23.1677 14.4575 23.12 14.6015L22.1333 17.5348C22.0424 17.804 21.7908 17.986 21.5067 17.9881H17.3333V27.9881C17.3333 28.3563 17.0348 28.6548 16.6667 28.6548H13.3333C12.9651 28.6548 12.6667 28.3563 12.6667 27.9881V17.9881H10.6667C10.2985 17.9881 10 17.6896 10 17.3215V14.6548C10 14.2867 10.2985 13.9881 10.6667 13.9881H12.6667V9.98812C12.6667 7.0426 15.0545 4.65479 18 4.65479H22.6667C23.0348 4.65479 23.3333 4.95327 23.3333 5.32145V7.98812C23.3333 8.35631 23.0348 8.65479 22.6667 8.65479Z"
                    fill="black"
                  />
                </svg> */}
               
                <div class="social-container">
                  
              {/* <ul> */}
          
                <div class="icons-litle-container">
                  
                {/* <li> */}
                <a
                href="https://www.facebook.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer" > <FaFacebook  className="socialmedia-icons1"/>
                </a>
                {/* </li> */}
                </div>



                <div class="icons-litle-container">

                {/* <li> */}
                
                  <a
                  href="https://www.facebook.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"> <FaInstagram  className="socialmedia-icons2" />

                  </a>
                {/* </li> */}
                </div>



                <div class="icons-litle-container">
                {/* <li> */}
                  <a
                  href="https://www.linkedin.com/in/ajaydamerakunta//"
                className="navbar--content"
                target="_blank"
                rel="noreferrer">   <IoLogoLinkedin   className="socialmedia-icons3"/>

                  </a>
                {/* </li> */}
                </div>



                <div class="icons-litle-container">
                {/* <li> */}
                  <a
                  href="https://www.facebook.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer">   <FaSquareXTwitter  className="socialmedia-icons4" />

                  </a>
                {/* </li> */}
                </div>

              {/* </ul> */}
              </div>
              {/* </div> */}
              
        
               
               

              

       


                
              {/* <FaSquareXTwitter /> */}

              

          
        </form>
      </section>
    );
  }