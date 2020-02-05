import React from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import {githubIcon, linkedinIcon, foto} from "../../images/index"
import Avatar from '@material-ui/core/Avatar';

//TODO: remove opacity from child
function Header(props) {
  const { name, email, phone, github, linkedin } = props
  return (
    <Grid container direction="row" justify="center" alignItems="center" style={{minHeight:"200px"}} >
      <Grid item xs={5} style={{margin:"auto"}}>
        <Grid container justify="center">
          <Avatar alt="Foto" src={foto} style={{width:"176px", height:"176px"}}/>
        </Grid>
      </Grid>
      <Grid item xs={7}>
        <Grid container direction="row" justify="center" alignItems="center" alignContent="center" >
            <Grid item xs={12} style={{paddingBottom:"8px"}}>
              <Typography style={{color:'white', textAlign:'center', fontSize:'2rem'}}>{name}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Grid container justify="center">
                <a href={github} target="_blank">
                  <img src={githubIcon} width="32px" height="32px" color="white"/>
                </a>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container justify="center">
                <a href={linkedin} target="_blank" >
                  <img src={linkedinIcon} width="32px" height="32px" color="white"/>
                </a>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container justify="center">
                <a href={linkedin} target="_blank" >
                  <img src={linkedinIcon} width="32px" height="32px" color="white"/>
                </a>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{paddingTop:"8px"}}>
              <Typography style={{color:'white', textAlign:'center', fontSize:'1rem'}}>email: {email}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography style={{color:'white', textAlign:'center', fontSize:'1rem'}}>phone: {phone}</Typography>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function mapStateToProps({ form }, _) {
  return {
    name: form.name,
    email: form.email,
    phone: form.phone,
    linkedin: form.linkedin,
    github: form.github
  };
}
export default connect(mapStateToProps)(Header);