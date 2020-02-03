import React from "react";
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import { Grid } from "@material-ui/core";

const ListTitle = withStyles({
  root:{
    "& .MuiListItemText-primary": { fontSize: "1.25em" }
  }
})(ListItemText);

const BiggerListItemIcon = withStyles({
  root: {    
    "& .MuiSvgIcon-root": { fontSize: "2em" }
  }
})(ListItemIcon);

const SmallerListItemIcon = withStyles({
  root: {
    minWidth: "1.5rem",
    "& .MuiSvgIcon-root": { fontSize: "0.75em" }
  }
})(ListItemIcon);

const useStylesListItem = makeStyles({
  root:{
    paddingTop: '0.1rem',
    paddingBottom: '0.1rem'
  }
},{name: 'MuiListItem'});

const useStylesListIcon = makeStyles({
  root:{
    color: 'rgb(0,0,0)'
  }
},{name: 'MuiListItemIcon'});

const useStylesDivider = makeStyles({
  root:{
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
}, {name: 'MuiDivider'})

const useStyleListText = makeStyles({
  primary: {
    fontSize: "1rem",
  },
  secondary:{
    fontSize: "0.75rem"
  },
  root:{
    margin: "0.2rem"
  }
}, {name: 'MuiListItemText'})

function Section(props) {
  useStylesListItem();
  useStylesListIcon();
  useStylesDivider();
  useStyleListText();
  const { title, listInfo, icon, gridSize } = props;

  return (
    <List>
      <ListItem>
        <BiggerListItemIcon >{icon}</BiggerListItemIcon>
        <ListTitle primary={title} />
      </ListItem>
      <Divider variant="middle" />
      <Grid container>
        {listInfo.map((item, index) => {
          return (
            <Grid item xs={gridSize}>
              <ListItem key={index}>
                <SmallerListItemIcon>
                  <Brightness1Icon fontSize="small" />
                </SmallerListItemIcon>
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
  listInfo: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  icon: PropTypes.object
};

Section.defaultProps = {
  gridSize: 12,
  secondaryText: ""
};

export default Section;
