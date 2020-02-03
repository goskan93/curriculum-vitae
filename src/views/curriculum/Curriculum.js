import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import BackgroundImage from "../../components/backgroundImage";
import { Grid } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LanguageIcon from "@material-ui/icons/Language";
import CodeIcon from "@material-ui/icons/Code";

import { Header } from "../index";
import { Section } from "../../components/index";

//TODO: remove opacity from child
function Curriculum(props) {
  const { experience, education, languages, skills } = props;
  return (
    <Paper elevation={5} style={{ minHeight: 1000 }}>
      <Grid container direction="column" spacing={0}>
        <Grid item xs={12}>
          <BackgroundImage>
            <Header />
          </BackgroundImage>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Section title="EDUCATION" listInfo={education} icon={<SchoolIcon />} />
            </Grid>
            <Grid item xs={12} >
              <Section title="EXPERIENCE" listInfo={experience} icon={<BusinessCenterIcon />}/>
            </Grid>
            <Grid item xs={5}>
              <Section title="LANGUAGES" listInfo={languages} icon={<LanguageIcon />} gridSize={6}/>
            </Grid>
            <Grid item xs={7}>
              <Section title="SKILLS" listInfo={skills} icon={<CodeIcon />} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

function mapStateToProps({ form }, _) {
  return {
    education: form.education,
    experience: form.experience,
    languages: form.languages,
    skills: form.skills
  };
}
export default connect(mapStateToProps)(Curriculum);