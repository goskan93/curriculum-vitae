import React from "react";
import Paper from "@material-ui/core/Paper";
import BackgroundImage from "../components/backgroundImage";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Education from "./curriculum/Education";

//TODO: remove opacity from child
function Curriculum(props) {
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
            <Grid item xs={6} style={{ padding: "1rem" }}>
              <Education />
            </Grid>
            <Grid item xs={6} style={{ padding: "1rem" }}>
              dasd
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Curriculum;
