import { useState } from "react"
import "../styles/enquiry_form.css"

export function EnquiryForm (){

  const [password, setPassword] = useState()

  console.log(password)

  const handleSubmit = (e) => {
    e.preventDefault()
    let body = JSON.stringify(Object.fromEntries(new FormData(e.target)))

    const endpoint = "https://6illfmtpa9.execute-api.us-east-1.amazonaws.com/";

    
    fetch(endpoint, {
      method: "POST",
      body
    }).then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      return response.json();
    })
    .then((response) => {
      console.log(response)
    })    
  }
  
// <div><input placeholder="Password" onChange={e => setPassword(e.target.value)} name="data"/></div>  
  return (
    <div className="background">
      <h3 className="form--title">Send me an enquiry</h3>
      <div className="form--wrapper">
        <form onSubmit={handleSubmit}>

          <div className="form--name-email--wrapper">
            <input placeholder="Name" name="name"/>
            <input placeholder="Email" type="email" name="email"/>
          </div>
          <textarea placeholder="Message" name="message"></textarea>
          <button className="enquiry--button" type="submit">Send</button>
        </form>
      </div>
    </div>
  )}