import React, {useState} from 'react';
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  TextField,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    error: {
      color: "red",
      fontStyle: "italic",
    },
  })
);


/**
 * User Form Component
 * Step 2 to user insert all informations
 */
const UserForm = ({ formValues, currentStep, handleStep, setStep }) => {
  const style = useStyles();
  const [userNationality, setUserNationality] = useState("");
  const userName =
    formValues.lastName?.charAt(0).toUpperCase() +
    formValues.lastName?.slice(1);

  //TODO get from api
  const nationalityList = [
    "Portuguese",
    "Grand Britain",
    "Germany",
    "Austria",
    "Belgium",
    "France",
    "Greece",
    "Spain",
    "Italia",
  ];

  /** */
  const initialValue = {
    firstName: "",
    lastName: formValues.lastName || null,
    nationality: "",
    email: "",
    phoneNumber: "",
    passportNumber: "",
    city: "",
    country: "",
    address: "",
    birthdate: "",
    birthplace: "",
    passportExpireDate: "",
    passportDateIssue: "",
    passportCityIssue: "",
    passportCountryIssue: "",
    terms: "",
  };
  /** */
  const validation = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Firstname is required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Lastname is required"),
    nationality: Yup.string().required("Select a nationality"),
    email: Yup.string().email().required("Email is required"),
    phoneNumber: Yup.string()
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        "Invalid phone"
      )
      .required("Phone number is required"),
    passportNumber: Yup.string()
      .min(2, "Too Short!")
      .required("enter a valid passport number")
      .test({
        test: function (passportNumber) {
          const isValid = /[!@#$%^&*(),.?":{}|<>]/.test(passportNumber);
          return !isValid;
        },
      }),
    city: Yup.string()
      .nullable()
      .when("nationality", {
        is: () => ["Austria", "Belgium", "France"].includes(userNationality),
        then: Yup.string().nullable().required("required"),
      }),
    country: Yup.string()
      .nullable()
      .when("nationality", {
        is: () => ["Austria", "Belgium", "France"].includes(userNationality),
        then: Yup.string().nullable().required("required"),
      }),
    address: Yup.string()
      .nullable()
      .when("nationality", {
        is: () => ["Belgium", "Spain"].includes(userNationality),
        then: Yup.string().nullable().required("required"),
      }),
    birthdate: Yup.string()
      .nullable()
      .when("nationality", {
        is: () => ["Belgium", "France"].includes(userNationality),
        then: Yup.string().nullable().required("required"),
      }),
    birthplace: Yup.string()
      .nullable()
      .when("nationality", {
        is: () => ["France"].includes(userNationality),
        then: Yup.string().nullable().required("required"),
      }),

    passportExpireDate: Yup.string()
      .nullable()
      .when("nationality", {
        is: () => ["Austria", "Greece"].includes(userNationality),
        then: Yup.string().nullable().required("required"),
      }),
    passportDateIssue: Yup.string()
      .nullable()
      .when("nationality", {
        is: () => ["Greece"].includes(userNationality),
        then: Yup.string().nullable().required("required"),
      }),
    passportCityIssue: Yup.string()
      .nullable()
      .when("nationality", {
        is: () => ["Greece"].includes(userNationality),
        then: Yup.string().nullable().required("required"),
      }),
    passportCountryIssue: Yup.string()
      .nullable()
      .when("nationality", {
        is: () => ["Greece"].includes(userNationality),
        then: Yup.string().nullable().required("required"),
      }),
    terms: Yup.boolean().required("Terms and conditions are required"),
  });

  /** */
  const onSubmitForm = (values) => {
    console.log(values);
    handleStep(values);
    setStep(3);
  };

  return (
    <div>
      {currentStep === 2 ? (
        <div>
          {" "}
          <Box mt={8} mx={4}>
            <Typography
              variant="h4"
              component="h1"
              align="left"
              color="textSecondary"
            >
              {" "}
              Hi, {userName}{" "}
            </Typography>
            <Typography variant="body1" align="left" color="textSecondary">
              Please fill your informations
            </Typography>
          </Box>
          <Formik
            initialValues={initialValue}
            validationSchema={validation}
            onSubmit={onSubmitForm}
          >
            {({ errors, touched, handleChange, isSubmitting }) => {
              const handleInfoChange = (e) => {
                handleChange(e);
                setUserNationality(e.target.value);
              };

              return (
                <Form>
                  <Box m={4}>
                    <TextField
                      id="firstName"
                      name="firstName"
                      label="first name"
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                      error={!!errors.firstName}
                    />
                    {errors.firstName && touched.firstName ? (
                      <div className={style.error}>{errors.firstName}</div>
                    ) : null}
                  </Box>
                  <Box m={4}>
                    <TextField
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      disabled
                      fullWidth
                      variant="outlined"
                      value={formValues.lastName}
                      onChange={handleChange}
                      error={!!errors.lastName}
                    />
                    {errors.lastName && touched.lastName ? (
                      <div className={style.error}>{errors.lastName}</div>
                    ) : null}
                  </Box>
                  <Box m={4}>
                    <FormControl
                      fullWidth
                      variant="outlined"
                      error={!!errors.nationality}
                    >
                      <InputLabel id="nationality">Nationality</InputLabel>
                      <Select
                        labelId="nationality"
                        id="nationality"
                        name="nationality"
                        label="Nationality"
                        value={userNationality}
                        onChange={handleInfoChange}
                      >
                        <MenuItem value="" disabled>
                          Choose
                        </MenuItem>
                        {nationalityList.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.nationality && touched.nationality ? (
                        <div className={style.error}>{errors.nationality}</div>
                      ) : null}
                    </FormControl>
                  </Box>
                  {["Austria", "France"].includes(userNationality) ? (
                    <Box>
                      <Box m={4}>
                        <TextField
                          id="city"
                          name="city"
                          label="City of residence"
                          fullWidth
                          variant="outlined"
                          onChange={handleChange}
                          error={!!errors.city}
                        />
                        {errors.city && touched.city ? (
                          <div className={style.error}>{errors.city}</div>
                        ) : null}
                      </Box>
                      <Box m={4}>
                        <TextField
                          id="country"
                          name="country"
                          label="Country of residence"
                          fullWidth
                          variant="outlined"
                          onChange={handleChange}
                          error={!!errors.country}
                        />
                        {errors.country && touched.country ? (
                          <div className={style.error}>{errors.country}</div>
                        ) : null}
                      </Box>
                    </Box>
                  ) : null}
                  {["Belgium", "Spain"].includes(userNationality) ? (
                    <Box m={4}>
                      <TextField
                        id="address"
                        label="Address"
                        name="address"
                        fullWidth
                        variant="outlined"
                        onChange={handleChange}
                        error={!!errors.address}
                      />
                      {errors.address && touched.address ? (
                        <div className={style.error}>{errors.address}</div>
                      ) : null}
                    </Box>
                  ) : null}

                  {["Belgium", "France"].includes(userNationality) ? (
                    <Box m={4}>
                      <TextField
                        id="birthdate"
                        label="Date of birth"
                        name="birthdate"
                        type="date"
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={handleChange}
                        error={!!errors.birthdate}
                      />
                      {errors.birthdate && touched.birthdate ? (
                        <div className={style.error}>{errors.birthdate}</div>
                      ) : null}
                    </Box>
                  ) : null}
                  {userNationality === "France" ? (
                    <Box m={4}>
                      <TextField
                        id="birthplace"
                        name="birthplace"
                        label="Place of birth"
                        fullWidth
                        variant="outlined"
                        onChange={handleChange}
                        error={!!errors.birthplace}
                      />
                      {errors.birthplace && touched.birthplace ? (
                        <div className={style.error}>{errors.birthplace}</div>
                      ) : null}
                    </Box>
                  ) : null}
                  <Box m={4}>
                    <TextField
                      id="email"
                      name="email"
                      label="email"
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                      error={!!errors.email}
                    />
                    {errors.email && touched.email ? (
                      <div className={style.error}>{errors.email}</div>
                    ) : null}
                  </Box>
                  <Box m={4}>
                    <TextField
                      id="phoneNumber"
                      name="phoneNumber"
                      label="Phone Number"
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                      error={!!errors.phoneNumber}
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <div className={style.error}>{errors.phoneNumber}</div>
                    ) : null}
                  </Box>
                  <Box m={4}>
                    <TextField
                      id="passportNumber"
                      name="passportNumber"
                      label="Passport Number"
                      fullWidth
                      variant="outlined"
                      onChange={handleChange}
                      error={!!errors.passportNumber}
                    />
                    {errors.passportNumber && touched.passportNumber ? (
                      <div className={style.error}>{errors.passportNumber}</div>
                    ) : null}
                  </Box>
                  {["Austria", "Greece"].includes(userNationality) ? (
                    <Box m={4}>
                      <TextField
                        id="passportExpireDate"
                        name="passportExpireDate"
                        label="Passport expire date"
                        type="date"
                        fullWidth
                        variant="outlined"
                        onChange={handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        error={!!errors.passportExpireDate}
                      />
                      {errors.passportExpireDate &&
                      touched.passportExpireDate ? (
                        <div className={style.error}>
                          {errors.passportExpireDate}
                        </div>
                      ) : null}
                    </Box>
                  ) : null}
                  {userNationality === "Greece" ? (
                    <Box>
                      <Box m={4}>
                        <TextField
                          id="passportDateIssue"
                          name="passportDateIssue"
                          label="Passport date of issue"
                          type="date"
                          fullWidth
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          onChange={handleChange}
                          error={!!errors.passportDateIssue}
                        />
                        {errors.passportDateIssue &&
                        touched.passportDateIssue ? (
                          <div className={style.error}>
                            {errors.passportDateIssue}
                          </div>
                        ) : null}
                      </Box>
                      <Box m={4}>
                        <TextField
                          id="passportCityIssue"
                          name="passportCityIssue"
                          label="Passport city of issue"
                          fullWidth
                          variant="outlined"
                          onChange={handleChange}
                          error={!!errors.passportCityIssue}
                        />
                        {errors.passportCityIssue &&
                        touched.passportCityIssue ? (
                          <div className={style.error}>
                            {errors.passportCityIssue}
                          </div>
                        ) : null}
                      </Box>
                      <Box m={4}>
                        <TextField
                          id="passportCountryIssue"
                          name="passportCountryIssue"
                          label="Passport country of issue"
                          fullWidth
                          variant="outlined"
                          onChange={handleChange}
                          error={!!errors.passportCountryIssue}
                        />
                        {errors.passportCountryIssue &&
                        touched.passportCountryIssue ? (
                          <div className={style.error}>
                            {errors.passportCountryIssue}
                          </div>
                        ) : null}
                      </Box>
                    </Box>
                  ) : null}
                  <Box m={4}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          //checked={termsChecked}
                          onChange={handleChange}
                          name="terms"
                          color="primary"
                          error={errors.terms}
                        />
                      }
                      label="Terms & conditions"
                    />
                    {errors.terms && touched.terms ? (
                      <div className={style.error}>{errors.terms}</div>
                    ) : null}
                  </Box>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Continue
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      ) : null}
    </div>
  );
};

 UserForm.propTypes={
     /** the number of the form step */
  currentStep: PropTypes.number.isRequired,
  /** handle submit form */
  handleStep: PropTypes.func.isRequired,
  /** object with form information */
  formValues: PropTypes.shape({}).isRequired,
  /** set next step */
  setStep: PropTypes.func.isRequired,
}



export default UserForm;