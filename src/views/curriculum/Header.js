import React from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import {githubIcon, linkedinIcon, websiteIcon, foto} from "../../images/index"
import Avatar from '@material-ui/core/Avatar';

//TODO: remove opacity from child
function Header(props) {
  const { name, email, phone, github, linkedin, website } = props
  const xs = 12 / (Number(github.length > 0) + Number(linkedin.length > 0) + Number(website.length > 0)) ;
  
  return (
    <Grid container direction="row" justify="center" alignItems="center" style={{minHeight:"150px"}} >
      <Grid item xs={5} style={{margin:"auto"}}>
        <Grid container justify="center">
          <Avatar alt="Foto" src={foto} style={{width:"120px", height:"120px"}}/>
        </Grid>
      </Grid>
      <Grid item xs={1}> 
        <Grid container direction="column" justify="center" alignItems="center" alignContent="center" > 
          {github &&
            <Grid item xs={xs} style={{paddingTop:"0.5rem", paddingBottom: "0.5rem"}}>
              <a href={github} target="_blank" rel="noopener noreferrer" >
                <img alt="github" src={githubIcon} width="24px" height="24px" />
              </a>
            </Grid>
          }
          {linkedin &&
            <Grid item xs={xs} style={{paddingTop:"0.5rem", paddingBottom: "0.5rem"}}>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" >
                <img alt="linkedin" src={linkedinIcon} width="24px" height="24px" />
              </a>
            </Grid>
          }
          {website &&
            <Grid item xs={xs} style={{paddingTop:"0.5rem", paddingBottom: "0.5rem"}}>
              <a href={website} target="_blank" rel="noopener noreferrer" >
                <img alt="website" src={websiteIcon} width="24px" height="24px"/>
              </a>
            </Grid>
          }
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="row" justify="center" alignItems="center" alignContent="center" >
            <Grid item xs={12} style={{paddingBottom:"16px"}}>
              <Typography style={{color:'white', textAlign:'center', fontSize:'1.75rem'}}>{name && name}</Typography>
            </Grid>
            <Grid item xs={12} >
              <Typography style={{color:'white', textAlign:'center', fontSize:'1rem'}}>{email && `email: ${email}`}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography style={{color:'white', textAlign:'center', fontSize:'1rem'}}>{phone && `phone: ${phone}`}</Typography>
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
    github: form.github,
    website: form.website
  };
}
export default connect(mapStateToProps)(Header);