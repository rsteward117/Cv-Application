import React from 'react';

    const GeneralInformation = (props) => {
        const {name, number, email } = props; 
    

    return(
        <p>
            {props.name}
        </p>
    )
}
export default GeneralInformation;
