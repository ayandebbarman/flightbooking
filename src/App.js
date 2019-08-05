import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstname:"",
            lastname:"",
            age:""
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value} = event.target

        this.setState({[name]:value})

        
    }
    
    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name" name="firstname" onChange={this.handleChange}/><br />
                    <input placeholder="Last Name" name="lastname" onChange={this.handleChange}/><br />
                    <input placeholder="Age" name="age" onChange={this.handleChange}/><br />
                    
                    {/* Create radio buttons for gender here */}
                    <label>
                    <input type="radio" value="male"/>
                    Male
                    </label>
                    <br />
                    <label>
                    <input type="radio" value="female"/>
                    Female
                    </label>
                    
                    {/* Create select box for location here */}
                    <br/>
                    <label>Destination </label>
                    <select>
                      <option value="dallas">Dallas</option>
                      <option value="hyderabad">Hyderabad</option>
                      <option value="pune">Pune</option>
                    </select>
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <label>Dietary restrictions? 
                    <input type="checkbox" name="dietery"/>
                      </label>                    
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstname} {this.state.lastname}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {/* Gender here */}</p>
                <p>Your destination: {/* Destination here */}</p>
                <p>
                    Your dietary restrictions: 
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default App
