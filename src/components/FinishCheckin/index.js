import React from 'react';
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";


/**
 * 
 * Step 4 and last
 */
const FinishCheckin = ({ currentStep }) => {
  return (
    <Box m={8}>
      {currentStep === 4 ? (
        <div>
          <Typography
            variant="h3"
            component="h3"
            align="left"
            color="textSecondary"
          >
            Your check-in is confirmed
          </Typography>
        </div>
      ) : null}
    </Box>
  );
};

FinishCheckin.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default FinishCheckin;