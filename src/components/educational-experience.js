import React, {Component} from "react";

class EducationalExperience extends Component {
    
    render(){
        return(
            <div>
                <h1>Education</h1>
                <form>
                    <label htmlFor="School">Name of School: </label>
                    <input
                    type="text"
                        />
                    <label htmlFor="Gradation">Gradation Date: </label>
                    <input
                    type="date"
                        />
                    <label htmlFor="Degree">Degree Title: </label>
                    <input
                    type="text"
                        />
                </form>
            </div>
        );
    }
}
export default EducationalExperience;