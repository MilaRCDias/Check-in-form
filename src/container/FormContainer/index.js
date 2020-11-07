import React, {useState} from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Box } from "@material-ui/core";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import UserForm from '../../components/UserForm';
import WelcomeCheckin from '../../components/WelcomeCheckin';
import DisplayUsersInfo from '../../components/DisplayUsersInfo';


const useStyles = makeStyles(() =>
  createStyles({
    main: {
      width: "30rem",
      textAlign: "center",
    },
    mainMobile: {
      width: "100%",
      textAlign: "center",
    },
  })
);


/**
 * Form Container Component
 *
 */
const FormContainer = () => {
  const theme = useTheme();
  const screenSM = useMediaQuery(theme.breakpoints.up("md"));
  const style = useStyles();

const [formValues, setFormValues] = useState({});
const [step, setStep] = useState(3);

const submitFirstCheckinInfo =()=>{
    //TODO send to api lastname and flight number
    // set next step and form values to next step
}

return (
  <Box mx="auto" className={screenSM ? style.main : style.mainMobile}>
    step 1 component - welcome
    <WelcomeCheckin currentStep={step} handleStep={submitFirstCheckinInfo} />
    step 2 component - insert info
    <UserForm currentStep={step} formValues={formValues} />
    step 3 component - show info step 4 component - finished
    <DisplayUsersInfo currentStep={step} formValues={formValues} />
  </Box>
);
}
export default FormContainer;