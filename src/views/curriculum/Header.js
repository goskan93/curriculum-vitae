import React from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";

//TODO: remove opacity from child
function Header(props) {
  const { name, email, phone } = props
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={6}>
        dasd
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography style={{color:'white', textAlign:'center', fontSize:'2rem'}}>{name}</Typography>
            <Typography style={{color:'white', textAlign:'center', fontSize:'1rem'}}>email: {email}</Typography>
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
  };
}
export default connect(mapStateToProps)(Header);