import React from "react";
import { connect } from "react-redux";
import { TextInput, Expanded } from "../../components/index";
import { updatePersonalInfo, updateSection, addElemSection } from "../../store/modules/formModule";

//TODO: remove opacity from child
function Form(props) {
  const {form} = props

  const onChangePersonalInfo = fieldName => value => {
    props.dispatch(updatePersonalInfo({field: fieldName, value: value }));
  };
  const onChangeSectionInfo = fieldName => (value, index, elem) => {
    props.dispatch(updateSection({field: fieldName, value: value, index:index, element:elem }));
  };

  const onAddElementSection = fieldName => {
    props.dispatch(addElemSection({field: fieldName }));
  };

  return (
    <>
      <TextInput label="Name" value={form.name} xs={6} onChange={onChangePersonalInfo('name')}/>
      <TextInput label="Email" value={form.email} xs={6} onChange={onChangePersonalInfo('email')}/>
      <TextInput label="Phone" value={form.phone} xs={6} onChange={onChangePersonalInfo('phone')}/>
      <TextInput label="GitHub" value={form.github} xs={6} onChange={onChangePersonalInfo('github')}/>
      <TextInput label="Linkedin" value={form.linkedin} xs={6} onChange={onChangePersonalInfo('linkedin')}/>
      <TextInput label="Website" value={form.website} xs={6} onChange={onChangePersonalInfo('website')}/>
      <Expanded title="Add education" list={form.education} onChange={onChangeSectionInfo('education')} onAdd={() => onAddElementSection('education')}/>
    </>
  );
}

function mapStateToProps({ form }, _) {
  return {
    form: form
  };
}
export default connect(mapStateToProps)(Form);