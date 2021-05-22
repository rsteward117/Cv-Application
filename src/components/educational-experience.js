import React, {Component} from "react";

class EducationalExperience extends Component {
    constructor(){
        super()
        this.state={
            school: '',
            date: '',
            degree: '',
            submit: false,
        }
    }
    handleSchoolChange = (e) =>{
        this.setState({
           school: e.target.value
       }); 
    }
    handleDateChange = (e) =>{
        this.setState({
           date: e.target.value
       }); 
    }
    handleDegreeChange = (e) =>{
        this.setState({
           degree: e.target.value
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
        const {school, degree, date} = this.state;
        return this.state.submit ? (
            <div>
                <h1>Education</h1>
                <p>{school}</p>
                <p>{date}</p>
                <p>{degree}</p>
                <button type="button" onClick={this.handleEdit}> Edit </button>
            </div>
        ):(
            <div>
                <h1>Education</h1>
                <form>
                    <label htmlFor="School">Name of School: </label>
                    <br />
                    <input
                    type="text"
                    value={school}
                    onChange={this.handleSchoolChange}
                        />
                    <br />
                    <label htmlFor="Gradation">Gradation Date: </label>
                    <br />
                    <input
                    type="date"
                    value={date}
                    onChange ={this.handleDateChange}
                        />
                    <br />
                    <label htmlFor="Degree">Degree Title: </label>
                    <br />
                    <input
                    type="text"
                    value={degree}
                    onChange={this.handleDegreeChange}
                        />
                    <br />
                    <br />
                    <button type="submit" onClick={this.handleSubmit}>Submit </button>
                </form>
            </div>
        )
    }
}
export default EducationalExperience;