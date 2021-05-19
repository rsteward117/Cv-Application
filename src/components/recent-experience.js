import React, {Component} from "react";

class RecentExperience extends Component {
    render(){
        return(
            <div>
            <h1>Recent Experience</h1>
                <form>
                    <label htmlFor="Company">Name of Company: </label>
                    <input
                    type="text"
                        />
                    <label htmlFor="Postion">Job Position: </label>
                    <input
                    type="text"
                        />
                    <label htmlFor="StartDate">Your job start date: </label>
                    <input
                    type="date"
                        />
                    <label htmlFor="EndDate">Your job end Date: </label>
                    <input
                    type="date"
                        />
                </form>
            </div>  
        
        )
    }
}
export default RecentExperience;