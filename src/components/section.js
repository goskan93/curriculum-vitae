import React from "react";
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
import { dotIcon } from "../images/index";

const ListTitle = withStyles({
  root:{
    "& .MuiListItemText-primary": { fontSize: "1em", fontWeight:"bold" }
  }
})(ListItemText);

const useStyleListText = makeStyles({
  primary: {
    fontSize: "0.75rem",
  },
  secondary:{
    fontSize: "0.6rem"
  },
  root:{
    margin: "0"
  }
}, {name: 'MuiListItemText'})

const useStylesListItem = makeStyles({
  root:{
    paddingTop: '0.1rem',
    paddingBottom: '0'
  }
},{name: 'MuiListItem'});

const useStylesList = makeStyles({
  root:{
    paddingTop: '0.25rem',
    paddingBottom: '0'
  }
},{name: 'MuiList'});

const ListItemIconHeader = withStyles({
  root: {
    minWidth: "2.25rem",
  }
})(ListItemIcon);

const ListItemIconDot = withStyles({
  root: {
    minWidth: "1.25rem",
  }
})(ListItemIcon);

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



function Section(props) {
  useStylesListItem();
  useStylesListIcon();
  useStylesDivider();
  useStyleListText();
  useStylesList();
  const { title, listInfo, iconImg, gridSize } = props;

  return (
    <List>
      <ListItem>
        <ListItemIconHeader >
          <img src={iconImg} width="24px" height="24px"/>
        </ListItemIconHeader>
        <ListTitle primary={title} />
      </ListItem>
      <Divider variant="middle" />
      <Grid container>
        {listInfo.map((item, index) => {
          return (
            <Grid item xs={gridSize}>
              <ListItem key={index}>
                <ListItemIconDot>
                  <img src={dotIcon} width="8px" height="8px"/>
                </ListItemIconDot>
                <ListItemText
                  primary={item.primaryText}
                  secondary={item.secondaryText ? item.secondaryText : ""}
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
