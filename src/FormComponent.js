import React from 'react'

function FormComponent(props){
        return(

            <main>
                <form>
                    <input placeholder="First Name" name="firstname" onChange={props.handleChange}/><br />
                    <input placeholder="Last Name" name="lastname" onChange={props.handleChange}/><br />
                    <input placeholder="Age" name="age" onChange={props.handleChange}/><br />
                    
                    {/* Create radio buttons for gender here */}
                    <label>
                    <input type="radio" name="gender" value="male" onChange={props.handleChange}/>
                    Male
                    </label>
                    <br />
                    <label>
                    <input type="radio" name="gender" value="female" onChange={props.handleChange}/>
                    Female
                    </label>
                    
                    {/* Create select box for location here */}
                    <br/>
                    <label>Destination </label>
                    <select name="destination" 
                    onChange={props.handleChange}>
                      <option value="Dallas">Dallas</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Pune">Pune</option>
                    </select>
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <label>Dietary restrictions? </label>   
                    <input type="checkbox" name="isdietery" onChange={props.handleChange}/>
                 
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {props.data.firstname} {props.data.lastname}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender: {props.data.gender}</p>
                <p>Your destination: {props.data.destination}</p>
                <p>
                    Your dietary restrictions: 
                    {props.data.isdietery}
                </p>
            </main>

        )
    }


export default FormComponent