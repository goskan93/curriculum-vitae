import React,  {useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { Curriculum, Form } from "./index";
import { savePDF } from '@progress/kendo-react-pdf';
import Paper from "@material-ui/core/Paper";

function Home(props) {
  const bodyRef = useRef();

  const createPdf = () => savePDF(bodyRef.current, { 
    paperSize: 'Letter',
    fileName: 'test.pdf',
    margin: 0
  })

  return (
    <Grid container className="app">
      <Grid item xs={12} md={5}>
        <Grid container spacing={1}>
          <Form/>
          <Grid item xs={12} > 
            <button onClick={createPdf}>Create PDF</button>
          </Grid >
        </Grid>
      </Grid>
      <Grid item xs={12} md={7} >
        <Paper elevation={5} style={{height:792, width:612, padding:'none', margin:'auto'}} ref={bodyRef}>
          <Curriculum/>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Home;

