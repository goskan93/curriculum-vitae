import React from "react";
import Grid from "@material-ui/core/Grid";
import LanguageIcon from "@material-ui/icons/Language";
import { Section } from "../../components/index";
import { connect } from "react-redux";

function Languages(props) {
  const { languages } = props;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Section
          title="LANGUAGES"
          listInfo={languages}
          icon={<LanguageIcon />}
          gridSize={6}
        />
      </Grid>
    </Grid>
  );
}
function mapStateToProps({ form }, _) {
  return {
    languages: form.languages
  };
}

export default connect(mapStateToProps)(Languages);
