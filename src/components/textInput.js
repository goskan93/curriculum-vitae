import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';

// const CustomTextField = withStyles({
//   root: {
//     '& label':{
//       color:green
//     },
//     '& label.Mui-focused': {
//       color: pink,
//     },
//     '&:hover label':{
//       color: pink,
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: green,
//       },
//       '&:hover fieldset': {
//         borderColor: pink,
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: pink,
//         borderWidth: 1,
//       },
//     },
//   }
// })(TextField);

export default function TextInput(props) {
  const {
    label,
    value,
    onChange,
    variant,
    fullWidth,
    multiline,
    rows,
    margin,
    xs
  } = props;
  return (
    <Grid item  xs={xs} >
      <TextField
        label={label}
        value={value}
        onChange={e => onChange(e.target.value)}
        variant={variant}
        fullWidth={fullWidth}
        multiline={multiline}
        rows={rows}
        margin={margin}
      />
    </Grid>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  margin: PropTypes.string,
  xs: PropTypes.number,
};

TextInput.defaultProps = {
  variant: "outlined",
  fullWidth: true,
  multiline: false,
  rows: 2,
  value: "",
  margin: 'dense',
  xs: 12
};
