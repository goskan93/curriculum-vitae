import React from "react";
import { Grid, Divider } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import { Section } from "../components/index";
import { connect } from "react-redux";

function Education(props) {
  const { education } = props;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Section title="EDUCATION" listInfo={education} icon={<SchoolIcon />} />
      </Grid>
    </Grid>
  );
}
function mapStateToProps({ form }, _) {
  return {
    education: form.education
  };
}

export default connect(mapStateToProps)(Education);
