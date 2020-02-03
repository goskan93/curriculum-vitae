import React,  {useRef } from "react";
import Grid from "@material-ui/core/Grid";
import { Curriculum } from "./index";
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
      <Grid item xs={12} md={4}>
        <button onClick={createPdf}>Create PDF</button>
      </Grid>
      <Grid item xs={12} md={8} >
        <Paper elevation={5} style={{height:792, width:612, padding:'none', margin:'auto'}} ref={bodyRef}>
          <Curriculum/>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Home;

