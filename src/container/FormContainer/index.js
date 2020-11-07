import React from 'react';
import WelcomeCheckin from '../../components/WelcomeCheckin';



/**
 * Form Container Component
 *
 */
const FormContainer = (props) => {

return(
        <div>
        step 1 component - welcome
        <WelcomeCheckin />
        step 2 component - insert info
        step 3 component - show info
        step 4 component - finished
        </div>    
    );
}
export default FormContainer;