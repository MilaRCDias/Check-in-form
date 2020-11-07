import React, { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Box } from "@material-ui/core";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import UserForm from "../../components/UserForm";
import WelcomeCheckin from "../../components/WelcomeCheckin";
import DisplayUsersInfo from "../../components/DisplayUsersInfo";
import FinishCheckin from "../../components/FinishCheckin";
import API from "../../http";

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
 * Main Container with form steps
 */
const FormContainer = () => {
  const theme = useTheme();
  const screenSM = useMediaQuery(theme.breakpoints.up("md"));
  const style = useStyles();

  const [formValues, setFormValues] = useState({});
  const [step, setStep] = useState(1);
  const [nationalityList, setNationalityList] = useState([]);

  /** Get from API flight number and lastname
   * it verifies if checkin was already been made
   */
  const submitFirstCheckinInfo = (values) => {
    API.get("checkin")
      .then((res) => {
        res.data.map((data) => {
          if (
            data.flightNumber === values.flightNumber &&
            data.lastName === values.lastName
          ) {
            alert(
              "This checkin was been done already. Please enter new information"
            );
            setStep(1);
          } else {
            setFormValues(values);
            setStep(2);
          }
        });
      })
      .catch((err) => {
        throw err;
      });
  };
  /**
   * Get from API a list of nationalities
   * when user goes to step 2
   */
  useEffect(() => {
    API.get("/nationality")
      .then((response) => {
        setNationalityList(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [step === 2]);

  /** Submit Post to api */
  const submitForm = () => {
    const payload = {
      id: `${formValues.lastName}_${formValues.flightNumber}`,
      ...formValues,
    };

    API.post("/checkin", payload)
      .then(() => {
        setStep(4);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <Box mx="auto" className={screenSM ? style.main : style.mainMobile}>
      <WelcomeCheckin currentStep={step} handleStep={submitFirstCheckinInfo} />
      <UserForm
        currentStep={step}
        formValues={formValues}
        handleStep={setFormValues}
        setStep={setStep}
        nationalityList={nationalityList}
      />
      <DisplayUsersInfo
        currentStep={step}
        formValues={formValues}
        submitForm={submitForm}
      />
      <FinishCheckin currentStep={step} />
    </Box>
  );
};
export default FormContainer;
