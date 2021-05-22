import React, {Component} from 'react';
import './componetsStyles.css'
class GeneralInformation extends Component{
    constructor(){
        super()
        this.state={
            name: '',
            number: '',
            email: '',
            submit: false,
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
        this.setState({
            submit: !this.state.submit,
        })
    }
    handleEdit = (e) =>{
        e.preventDefault();
        this.setState({
            submit: false,
        })
    }
    render(){
        const {name, number, email} = this.state;
        
        
        return this.state.submit ? (
            <div>
                <h1>Personal Information </h1>
                <p>{name}</p>
                <p>{number}</p>
                <p>{email}</p>
                <button type="button" onClick={this.handleEdit}> Edit </button>
            </div>
        ) : (
            <div className = "general-info-container">
                <h1>Personal Information </h1>
                <form>
                    <label htmlFor="Name">Name: </label>
                    <br />
                    <input
                    type="text"
                    value={name}
                    onChange={this.handleNameChange}
                        />
                    <br />
                    <label htmlFor="Number">Phone Number: </label>
                    <br />
                    <input
                    type="tel"
                    pattern="[1]{1}[0-9]{3}[0-9]{3}[0-9]{4}"
                    value={number}
                    onChange={this.handleNumberChange}
                        />
                    <br />
                    <label htmlFor="Email">Email Address: </label>
                    <br />
                    <input
                    type="email"
                    value={email}
                    onChange={this.handleEmailChange}
                        />
                    <br />
                    <br />
                    <button type="submit" onClick={this.handleSubmit}>Submit </button>
                </form>
            </div>
            )
    }
}
export default GeneralInformation;
