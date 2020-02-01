import React from "react";
import { Grid, Divider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import SchoolIcon from "@material-ui/icons/School";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Brightness1Icon from "@material-ui/icons/Brightness1";

function Education(props) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <List>
            <ListItem>
              <ListItemIcon>
                <SchoolIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="EDUCATION" />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemIcon>
                <Brightness1Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="03.2016 - 07.2017: Wroclaw University of Science and Technology (Poland)"
                secondary="Mathematics for Industry and Commerce, Master of Science degree"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Brightness1Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="09.2016 - 01.2017: University of Coimbra (Portugal)"
                secondary="Applied Mathematics, Erasmus+ programme exchange student"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Brightness1Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="10.2012 - 01.2016: Wroclaw University of Science and Technology (Poland)"
                secondary="Applied Mathematics, Bachelor of Science degree"
              />
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Education;
