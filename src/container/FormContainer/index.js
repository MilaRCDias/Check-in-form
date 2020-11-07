import React, {useState} from 'react';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Box } from "@material-ui/core";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import UserForm from '../../components/UserForm';
import WelcomeCheckin from '../../components/WelcomeCheckin';
import DisplayUsersInfo from '../../components/DisplayUsersInfo';
import FinishCheckin from '../../components/FinishCheckin';


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
const [step, setStep] = useState(1);

const submitFirstCheckinInfo =(values)=>{
    //TODO send to api lastname and flight number
    // set next step and form values to next step
    setStep(2);
    setFormValues(values);
}

/** Submit Post to api */
const submitForm = () => {
// send checkin information to api
};

return (
  <Box mx="auto" className={screenSM ? style.main : style.mainMobile}>
    <WelcomeCheckin currentStep={step} handleStep={submitFirstCheckinInfo} />
    <UserForm
      currentStep={step}
      formValues={formValues}
      handleStep={setFormValues}
      setStep={setStep}
    />
    <DisplayUsersInfo
      currentStep={step}
      formValues={formValues}
      submitForm={submitForm}
    />
    <FinishCheckin currentStep={step} />
  </Box>
);
}
export default FormContainer;