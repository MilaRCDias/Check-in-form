import React from 'react';
import PropTypes from "prop-types";
import { Button, TextField, Box, Typography } from "@material-ui/core";

/**
 * Step 3
 */
const DisplayUsersInfo = ({ formValues, currentStep }) => {

formValues = {
  firstName: "mila",
  lastName: "dias",
  nationality: "portuguese",
  email: "milarabello.dias@gmail.com",
  phoneNumber: "+351935550670",
  passportNumber: "w3333",
  terms: true,
};

  return (
    <Box mx={4} my={8}>
      {currentStep === 3 ? (
        <>
          <Typography
            variant="h4"
            component="h1"
            align="left"
            color="textSecondary"
          >
            Please review your information{" "}
          </Typography>

          {formValues &&
            Object.entries(formValues).map((value) => {
              return (
                <>
                  {value[1] !== "" && value[1] !== true ? (
                    <Box m={4} key={`id_${value[0]}`}>
                      <TextField
                        disabled
                        defaultValue={value[1]}
                        label={value[0]}
                        fullWidth
                        variant="outlined"
                      />
                    </Box>
                  ) : null}
                </>
              );
            })}

          <Button
            variant="contained"
            color="primary"
            type="submit"
           
          >
            Confirm
          </Button>
        </>
      ) : null}
    </Box>
  );
};

DisplayUsersInfo.propTypes = {
  /** object with form information */
  formValues: PropTypes.shape({}).isRequired,
  /** the number of the form step */
  currentStep: PropTypes.number.isRequired,
};
export default DisplayUsersInfo;