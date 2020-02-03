import React from "react";
import Grid from "@material-ui/core/Grid";
import { Section } from "../../components/index";
import { connect } from "react-redux";
import CodeIcon from "@material-ui/icons/Code";

function Skills(props) {
  const { skills } = props;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Section
          title="SKILLS"
          listInfo={skills}
          icon={<CodeIcon />}
        />
      </Grid>
    </Grid>
  );
}
function mapStateToProps({ form }, _) {
  return {
    skills: form.skills
  };
}

export default connect(mapStateToProps)(Skills);
