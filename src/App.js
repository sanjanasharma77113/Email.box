import { useState } from "react";
import "./App.css";


function App() {

  const [formData, setFormData] = useState({
    firstName:"",lastName:"" , email:"", country:"", streetAddress:"", city:"", state:"", postaCode:"", comments:false, candidate:false, offer:false
  })

  function changeHandler(event) {
    const {name, value,checked,type} = event.target;
    setFormData ( prev => ({...prev, [name]:value}))

  }
  return (
    <div className="flex flex-col items-center ">
     <form>


      <label htmlFor="firstName">First name</label>
      <br/>
      <input type="text" name="firstName" id="firstName"  placeholder="Sanjana"
      value={formData.firstName}
      onChange={changeHandler}
      className="outline"
      
      />
      <br/>

      <label htmlFor="LastName">Last name</label>
      <br/>
      <input type="text" name="Last Name" id="Last Name"  placeholder="Sharma"
      value={formData.firstName}
      onChange={changeHandler}
      className="outline"
      
      />
      <br/>

      
<label htmlFor="email">Email Address</label>
<br/>
      <input type="text" name="firstName" id="firstName"  placeholder="Sana77113@gmail.com"
      value={formData.email}
      onChange={changeHandler}
      className="outline"
     />
     <br/>

     <label htmlFor="country">Country</label>
     <br/>

     <select
     id="country"
     name="country"
     value={formData.country}
     onChange={changeHandler}
     className="outline"
     >

      <option>India</option>
      <option>United States</option>
      <option>Canada</option>
      <option>Mexico</option>
     </select>

     <br/>
     <label htmlFor="streetAddress">Street Address</label>
     <br/>
      <input type="streetAddres" name="" id="streetAddres"  placeholder="B-25C"
      value={formData.streetAddress}
      onChange={changeHandler}
      className="outline"
     />



     
<br/>
     <label htmlFor="streetAddress">City</label>
     <br/>
      <input type="City" name="" id="city"  placeholder="Delhi"
      value={formData.City}
      onChange={changeHandler}
      className="outline"
     />


     
<br/>
     <label htmlFor="streetAddress">State</label>
     <br/>
      <input type="state" name="" id="state"  placeholder="Delhi"
      value={formData.state}
      onChange={changeHandler}
      className="outline"
     />

     
<br/>
     <label htmlFor="postalCode">PostalCode</label>
     <br/>
      <input type="postalCod" name="" id="postalCod"  placeholder="110087"
      value={formData.streetAddress}
      onChange={changeHandler}
      className="outline"
     />

     <fieldset>
      <legend>By Email</legend>
<div className="flex">
<input
      id="comments"
      name="comments"
      type="checkbox"
      value={formData.comments}
      />
      <div>
        <label htmlFor="comments">comments</label>
        <p>Get notified when someones posts a comment on a positing</p>

      </div>
      </div>

      <div className="flex">
<input
      id="candidates"
      name="candidates"
      type="checkbox"
      value={formData.candidates}
      />
      <div>
        <label htmlFor="candidates">candidates</label>
        <p>Get notified when someones posts a comment on a positing</p>

      </div>
</div>



<div className="flex">
<input
      id="offers"
      name="offers"
      type="checkbox"
      value={formData.offers}
      />
      <div>
        <label htmlFor="offers">offers</label>
        <p>Get notified when someones posts a comment on a positing</p>

      </div>
</div>






     </fieldset>

     <fieldset>
      <legend>Push Notification</legend>
      <p>These are delivered via SMS to your mobile phone.</p>

      <input type="text" />
     </fieldset>




     </form>
    </div>
   
  );
}

export default App;
