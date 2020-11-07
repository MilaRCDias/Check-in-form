import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    error: {
      color: "red",
      fontStyle: "italic",
    },
  })
);

/**
 * Welcome checkin component
 * Step 1 of checkin form
 */
const WelcomeCheckin = ({ handleStep, currentStep }) => {
  const style = useStyles();

  /** Validation schema */
  const validation = Yup.object().shape({
    flightNumber: Yup.string()
      .min(2, "Too Short!")
      .required("Enter a valid flight number. No special character allow")
      .test({
        test: function (flightNumber) {
          const isValid = /[!@#$%^&*(),.?":{}|<>]/.test(flightNumber);
          return !isValid;
        },
      }),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Lastname is required"),
  });

  /** submit values */
  const onSubmitForm = (values) => {
      handleStep(values);
  };

  return (
    <div>
      {currentStep === 1 ? (
        <Box my={8} mx={4}>
          <Typography
            variant="h4"
            component="h1"
            align="left"
            color="textSecondary"
          >
            {" "}
            Welcome to your web check-in
          </Typography>
          <Formik
            initialValues={{ flightNumber: "", lastName: "" }}
            validationSchema={validation}
            onSubmit={onSubmitForm}
          >
            {({ errors, touched, handleChange, isSubmitting }) => {
              return (
                <Form>
                  <Box my={6}>
                    <TextField
                      id="flightNumber"
                      label="Flight Number"
                      onChange={handleChange}
                      error={!!errors.flightNumber}
                      fullWidth
                      variant="outlined"
                    />
                    {errors.flightNumber && touched.flightNumber ? (
                      <div className={style.error}>{errors.flightNumber}</div>
                    ) : null}
                  </Box>

                  <Box>
                    <TextField
                      id="lastName"
                      label="Last Name"
                      onChange={handleChange}
                      error={!!errors.lastName}
                      fullWidth
                      variant="outlined"
                    />
                    {errors.lastName && touched.lastName ? (
                      <div className={style.error}>{errors.lastName}</div>
                    ) : null}
                  </Box>
                  <br />
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Box>
      ) : null}
    </div>
  );
};

WelcomeCheckin.propTypes = {
  /** handle submit form */
  handleStep: PropTypes.func.isRequired,
  /**the number of the form step */
  currentStep: PropTypes.number.isRequired,
};

export default WelcomeCheckin;
