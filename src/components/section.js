import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import { Grid } from "@material-ui/core";

function Section(props) {
  const { title, listInfo, icon, gridSize } = props;

  return (
    <List>
      <ListItem>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
      <Divider variant="middle" />
      <Grid container>
        {listInfo.map((item, index) => {
          return (
            <Grid item xs={gridSize}>
              <ListItem key={index}>
                <ListItemIcon>
                  <Brightness1Icon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary={item.primaryText}
                  secondary={item.secondaryText}
                />
              </ListItem>
            </Grid>
          );
        })}
      </Grid>
    </List>
  );
}

Section.propTypes = {
  gridSize: PropTypes.number,
  // primaryText: PropTypes.string,
  // secondaryText: PropTypes.string,
  listInfo: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  icon: PropTypes.object
};

Section.defaultProps = {
  gridSize: 12,
  secondaryText: ""
};

export default Section;
