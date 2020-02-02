import React from "react";
import Grid from "@material-ui/core/Grid";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import { Section } from "../components/index";
import { connect } from "react-redux";

function Experience(props) {
  const { experience } = props;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Section
          title="EXPERIENCE"
          listInfo={experience}
          icon={<BusinessCenterIcon />}
        />
      </Grid>
    </Grid>
  );
}
function mapStateToProps({ form }, _) {
  return {
    experience: form.experience
  };
}

export default connect(mapStateToProps)(Experience);
