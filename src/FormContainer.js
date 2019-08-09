import React,{Component} from 'react'
import FormComponent from './FormComponent';

class FormContainer extends Component {
    constructor() {
        super()
        this.state = {
            firstname:"",
            lastname:"",
            age:"",
            gender:"",
            destination:"",
            isdietery:""

        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value,type,checked} = event.target

    

        type==="checkbox"? checked?this.setState({[name]:"Yes"}):this.setState({[name]:"No"}): this.setState({[name]:value})

        console.log(checked)

    }
    
    render() {
        return (
            <FormComponent
            handleChange = {this.handleChange}
            data = {this.state}
            />

        )
    }
}

export default FormContainer;
