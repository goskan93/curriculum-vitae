import React from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TextInput } from './index'

function Expanded(props) {
  const {onChange, onAdd, onDelete, title, list } = props

  return (
    <Grid item xs={12}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Grid container spacing={1} direction="row">
              <Grid item xs={12}>
                <button onClick={() => onAdd()}>Add</button>
              </Grid>
              {list.map((item,i) => 
                <Paper style={{width:"100%", margin:"0.25rem", padding:"0.25rem"}} variant="outlined" key={i}>
                  <TextInput label="Main Text" value={item.primaryText} xs={12} onChange={(value) => onChange(value, i, 'primaryText')}/>
                  <TextInput label="Addicional Text" value={item.secondaryText} xs={12} onChange={(value) => onChange(value, i, 'secondaryText')} multiline={true}/>  
                  <button onClick={() => onDelete(i)}>Delete</button>              
                </Paper>
              )} 
            </Grid>           
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  );
}

  export default Expanded;