import React from "react";
import { connect } from "react-redux";
import { TextInput } from "../../components/index";
import { updatePersonalInfo } from "../../store/modules/formModule";

//TODO: remove opacity from child
function Form(props) {
  const {form} = props

  const onChangePersonalInfo = fieldName => value => {
    props.dispatch(updatePersonalInfo({field: fieldName, value: value }));
  };
  const onChangeSectionInfo = fieldName => value => {
  };

  return (
    <>
      <TextInput label="Name" value={form.name} xs={6} onChange={onChangePersonalInfo('name')}/>
      <TextInput label="Email" value={form.email} xs={6} onChange={onChangePersonalInfo('email')}/>
      <TextInput label="Phone" value={form.phone} xs={6} onChange={onChangePersonalInfo('phone')}/>
      <TextInput label="GitHub" value={form.github} xs={6} onChange={onChangePersonalInfo('github')}/>
      <TextInput label="Linkedin" value={form.linkedin} xs={6} onChange={onChangePersonalInfo('linkedin')}/>
      <TextInput label="Website" value={form.website} xs={6} onChange={onChangePersonalInfo('website')}/>
    </>
  );
}

function mapStateToProps({ form }, _) {
  return {
    form: form
  };
}
export default connect(mapStateToProps)(Form);