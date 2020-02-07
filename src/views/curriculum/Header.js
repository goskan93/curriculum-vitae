import React from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import {githubIcon, linkedinIcon, websiteIcon, foto} from "../../images/index"

//TODO: remove opacity from child
function Header(props) {
  const { name, email, phone, github, linkedin, website, photo } = props
  const xs = 12 / (Number(github.length > 0) + Number(linkedin.length > 0) + Number(website.length > 0)) ;

  const social = [
    {
      name: "github",
      icon: githubIcon
    },
    {
      name: "linkedin",
      icon: linkedinIcon
    },
    {
      name: "website",
      icon: websiteIcon
    },
  ]
  const personal = [
    {
      fontSize: "1.75rem",
      field: 'name',
      text: name,
      style: {paddingBottom:"16px"}
    },
    {
      fontSize: "1rem",
      field: 'email',
      text: `email: ${email}`,
      style: {}
    },
    {
      fontSize: "1rem",
      field: 'phone',
      text: `phone: ${phone}`,
      style: {}
    },
  ]

  return (
    <Grid container direction="row" justify="center" alignItems="center" style={{minHeight:"150px"}} >
      <Grid item xs={5} style={{margin:"auto"}}>
        <Grid container justify="center">
          <img alt="Foto" src={photo ? photo : foto}  style={{width:"120px", height:"120px", borderRadius: "70%"}}/>
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <Grid container direction="column" justify="center" alignItems="center" alignContent="center" >
          {social.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {props[item.name] &&
                  <Grid item xs={xs} style={{paddingTop:"0.5rem", paddingBottom: "0.5rem"}}>
                    <a href={props[item.name]} target="_blank" rel="noopener noreferrer" >
                      <img alt="github" src={item.icon} width="24px" height="24px" />
                    </a>
                  </Grid>
                } 
              </React.Fragment>
            )
          })}
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="row" justify="center" alignItems="center" alignContent="center" >
          {personal.map((item, index) => {
            return(
              <Grid item xs={12} style={item.style} key={index}>
                <Typography style={{color:'white', textAlign:'center', fontSize:item.fontSize}}>{props[item.field] && item.text}</Typography>
              </Grid>
            )
          })}
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
    website: form.website,
    photo: form.photo
  };
}
export default connect(mapStateToProps)(Header);