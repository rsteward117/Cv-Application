import React, {Component} from "react";

class RecentExperience extends Component {
    constructor(){
        super()
        this.state ={
            company: '',
            jobPostion: '',
            startDate: '',
            endDate: '',
            sumbit: false,
        }
    }
    
    
    handleCompanyChange = (e) =>{
        this.setState({
           company: e.target.value
       }); 
    }
    handleJobPostionChange = (e) =>{
        this.setState({
           jobPostion: e.target.value
       }); 
    }
    handleStartDateChange = (e) =>{
        this.setState({
           startDate: e.target.value
       }); 
    }
    handleEndDateChange = (e) =>{
        this.setState({
           endDate: e.target.value
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
        const {company, jobPostion, startDate, endDate} = this.state;
        return this.state.submit ? (
            <div>
                <h1>Recent Experience</h1>
                <p>{company}</p>
                <p>{jobPostion}</p>
                <p>{startDate}</p>
                <p>{endDate}</p>
                <button type="button" onClick={this.handleEdit}> Edit </button>
            </div>
            
            ):(
            <div>
            <h1>Recent Experience</h1>
                <form>
                    <label htmlFor="Company">Name of Company: </label>
                    <br />
                    <input
                    type="text"
                    value={company}
                    onChange={this.handleCompanyChange}
                        />
                    <br />
                    <label htmlFor="Postion">Job Position: </label>
                    <br />
                    <input
                    type="text"
                    value={jobPostion}
                    onChange={this.handleJobPostionChange}
                        />
                    <br />
                    <label htmlFor="StartDate">Your job start date: </label>
                    <br />
                    <input
                    type="date"
                    value={startDate}
                    onChange={this.handleStartDateChange}
                        />
                    <br />
                    <label htmlFor="EndDate">Your job end Date: </label>
                    <br />
                    <input
                    type="date"
                    value={endDate}
                    onChange={this.handleEndDateChange}
                        />
                    <br />
                    <br />
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>  
        
        )
    }
}
export default RecentExperience;