import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

import { Header } from "../index";
import { Section, BackgroundImage } from "../../components/index";

import {
  experienceIcon,
  educationIcon,
  languagesIcon,
  skillsIcon,
  othersIcon
} from "../../images/index";

//TODO: remove opacity from child
function Curriculum(props) {
  const { form } = props;
  const sections = [
    {
      name: "education",
      iconImg: educationIcon,
      itemSize: 12,
      otherProps: {}
    },
    {
      name: "experience",
      iconImg: experienceIcon,
      itemSize: 12,
      otherProps: {}
    },
    {
      name: "languages",
      iconImg: languagesIcon,
      itemSize:
        form.languages.length > 0 ? (form.skills.length > 0 ? 5 : 12) : 0,
      otherProps: { gridSize: form.skills.length > 0 ? 6 : 3 }
    },
    {
      name: "skills",
      iconImg: skillsIcon,
      itemSize: form.languages.length > 0 ? 7 : 12,
      otherProps: {}
    },
    {
      name: "others",
      iconImg: othersIcon,
      itemSize: 12,
      otherProps: {}
    }
  ];
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <BackgroundImage image={form.photoBackground}>
          <Header />
        </BackgroundImage>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          {sections.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {props.form[item.name].length > 0 && (
                  <Grid item xs={item.itemSize}>
                    <Section
                      title={item.name.toUpperCase()}
                      listInfo={props.form[item.name]}
                      iconImg={item.iconImg}
                      {...item.otherProps}
                    />
                  </Grid>
                )}
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

function mapStateToProps({ form }, _) {
  return {
    form: form
  };
}
export default connect(mapStateToProps)(Curriculum);
