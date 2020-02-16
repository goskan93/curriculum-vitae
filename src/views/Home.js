import React, { useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { Curriculum, Form } from "./index";
import { savePDF } from "@progress/kendo-react-pdf";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";

function Home() {
  const bodyRef = useRef();

  const createPdf = () =>
    savePDF(bodyRef.current, {
      paperSize: "Letter",
      fileName: "CurriculumVitae.pdf",
      margin: 0
    });

  return (
    <>
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" style={{ fontFamily: "Pacifico" }}>
              Your Curriculum Vitae
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Grid
        container
        className="app"
        alignItems="flex-start"
        alignContent="center"
      >
        <Grid item xs={12} md={5}>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Form />
            <Grid item xs={3}>
              <Grid container justify="center">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<SaveIcon />}
                  onClick={createPdf}
                >
                  Save PDF
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7} style={{ marginTop: "0.5rem" }}>
          <Paper
            elevation={5}
            style={{ height: 792, width: 612, padding: "none", margin: "auto" }}
            ref={bodyRef}
          >
            <Curriculum />
          </Paper>
        </Grid>
      </Grid>
      <div style={{ flexGrow: 1 }}>
        <footer
          style={{ padding: 10 }}
          class="MuiPaper-root MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary MuiPaper-elevation4"
        >
          <div align="center">
            <a href="https://www.counter12.com">
              <img
                src="https://www.counter12.com/img-yZZdyz87W8A6ZzyA-3.gif"
                border="0"
                alt="conter12"
              />
            </a>
            <script
              type="text/javascript"
              src="https://www.counter12.com/ad.js?id=yZZdyz87W8A6ZzyA"
            ></script>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Home;
