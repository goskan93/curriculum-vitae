import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { TextInput } from "./index";

function Expanded(props) {
  const { onChange, onAdd, onDelete, title, list } = props;

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={1} direction="row">
          <Grid item xs={12}>
            <Button variant="outlined" color="primary" onClick={() => onAdd()}>
              Add
            </Button>
          </Grid>
          {list.map((item, i) => (
            <Paper
              style={{ width: "100%", margin: "0.25rem", padding: "0.7rem" }}
              variant="outlined"
              key={i}
            >
              <TextInput
                label="Main Text"
                value={item.primaryText}
                xs={12}
                onChange={value => onChange(value, i, "primaryText")}
              />
              <TextInput
                label="Addicional Text"
                value={item.secondaryText}
                xs={12}
                onChange={value => onChange(value, i, "secondaryText")}
                multiline={true}
              />
              <Button color="secondary" onClick={() => onDelete(i)}>
                Delete
              </Button>
            </Paper>
          ))}
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default Expanded;
