import React from "react";
import Grid from "@material-ui/core/Grid";
import { Curriculum } from "./index";
function Home(props) {
  return (
    <Grid container className="app" spacing={8}>
      <Grid item xs={12} md={4}>
        form
      </Grid>
      <Grid item xs={12} md={8}>
        <Curriculum />
      </Grid>
    </Grid>
  );
}
export default Home;
