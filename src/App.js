import EducationalExperience from "./components/educational-experience"
import GeneralInformation from "./components/general-info";
import RecentExperience from "./components/recent-experience"
import React, {Component} from "react";

class App extends Component {
    render(){
        return(
            <div>
                <GeneralInformation />
                <EducationalExperience />
                <RecentExperience />
            </div>
        );
    }
}

export default App;
