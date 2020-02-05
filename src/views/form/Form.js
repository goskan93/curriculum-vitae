import React from "react";
import { connect } from "react-redux";
import { TextInput } from "../../components/index";

//TODO: remove opacity from child
function Form(props) {
  const {form} = props
  return (
    <>
      <TextInput label="Name" value={form.name} xs={6}/>
      <TextInput label="Email" value={form.email} xs={6}/>
      <TextInput label="Phone" value={form.phone} xs={6}/>
      <TextInput label="GitHub" value={form.github} xs={6}/>
      <TextInput label="Linkedin" value={form.linkedin} xs={6}/>
      <TextInput label="Website" value={form.website} xs={6}/>
    </>
  );
}

function mapStateToProps({ form }, _) {
  return {
    form: form
  };
}
export default connect(mapStateToProps)(Form);