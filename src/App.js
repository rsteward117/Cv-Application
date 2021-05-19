import EducationalExperience from "./components/educational-experience"
import GeneralInformation from "./components/general-info";
import RecentExperience from "./components/recent-experience"
import React, {Component} from "react";

class App extends Component {
    constructor(){
        super()
        this.state={
            name: '',
            number: '',
            email: ''
        }
    }
    handleNameChange = (e) =>{
       this.setState({
           name: e.target.value
       }); 
    }
    handleNumberChange = (e) =>{
        this.setState({
           number: e.target.value
       }); 
    }
    handleEmailChange = (e) =>{
        this.setState({
           email: e.target.value
       }); 
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        let createParagraph = document.createElement('p');
        createParagraph.textContent = `Email:${this.state.name}`
        
    } 
    render(){
        const {name, number, email} = this.state;
        return(
            <div>
                <h1>Personal Information </h1>
                <form>
                    <label htmlFor="Name">Name: </label>
                    <input
                    type="text"
                    value={name}
                    onChange={this.handleNameChange}
                        />
                    <label htmlFor="Number">Phone Number: </label>
                    <input
                    type="tel"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    value={number}
                    onChange={this.handleNumberChange}
                        />
                    <label htmlFor="Email">Email Address: </label>
                    <input
                    type="email"
                    value={email}
                    onChange={this.handleEmailChange}
                        />
                    <button type="submit" onClick={this.handleSubmit}>Submit </button>
                </form>
                <EducationalExperience />
                <RecentExperience />
            </div>
        );
    }
}

export default App;
