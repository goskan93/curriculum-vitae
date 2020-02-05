import React from "react";
import { connect } from "react-redux";
import { TextInput } from "../../components/index";
import { updatePersonalInfo } from "../../store/modules/formModule";

//TODO: remove opacity from child
function Form(props) {
  const {form} = props

  const onChangePersonalInfo = fieldName => value => {
    console.log(value)
    // props.dispatch(updatePersonalInfo({field: fieldName, value: value }));
  };
  const onChangeSectionInfo = fieldName => value => {
  };

  return (
    <>
      <TextInput label="Name" value={form.name} xs={6} onChange={value => onChangePersonalInfo('name', value)}/>
      <TextInput label="Email" value={form.email} xs={6} onChange={value => onChangePersonalInfo('email', value)}/>
      <TextInput label="Phone" value={form.phone} xs={6} onChange={value => onChangePersonalInfo('phone', value)}/>
      <TextInput label="GitHub" value={form.github} xs={6} onChange={value => onChangePersonalInfo('github', value)}/>
      <TextInput label="Linkedin" value={form.linkedin} xs={6} onChange={value => onChangePersonalInfo('linkedin', value)}/>
      <TextInput label="Website" value={form.website} xs={6} onChange={value => onChangePersonalInfo('website', value)}/>
    </>
  );
}

function mapStateToProps({ form }, _) {
  return {
    form: form
  };
}
export default connect(mapStateToProps)(Form);