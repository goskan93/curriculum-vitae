import React from "react";
import { connect } from "react-redux";
import { TextInput, Expanded } from "../../components/index";
import { updatePersonalInfo, updateSection, addElemSection, deleteElemSection } from "../../store/modules/formModule";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

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
  const onDeleteElementSection = fieldName => index => {
    props.dispatch(deleteElemSection({field: fieldName, index: index }));
  };

  const onUploadPhoto = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      props.dispatch(updatePersonalInfo({field: 'imagePreviewUrl', value: reader.result }));
    }
    reader.readAsDataURL(file)
  }

  return (
    <>
      <TextInput label="Name" value={form.name} xs={6} onChange={onChangePersonalInfo('name')}/>
      <TextInput label="Email" value={form.email} xs={6} onChange={onChangePersonalInfo('email')}/>
      <TextInput label="Phone" value={form.phone} xs={6} onChange={onChangePersonalInfo('phone')}/>
      <TextInput label="GitHub" value={form.github} xs={6} onChange={onChangePersonalInfo('github')}/>
      <TextInput label="Linkedin" value={form.linkedin} xs={6} onChange={onChangePersonalInfo('linkedin')}/>
      <TextInput label="Website" value={form.website} xs={6} onChange={onChangePersonalInfo('website')}/>
      <Expanded 
        title="Add education" list={form.education} 
        onChange={onChangeSectionInfo('education')} 
        onAdd={() => onAddElementSection('education')} 
        onDelete={onDeleteElementSection('education') }
      />
      <Expanded 
        title="Add experience" list={form.experience} 
        onChange={onChangeSectionInfo('experience')} 
        onAdd={() => onAddElementSection('experience')} 
        onDelete={onDeleteElementSection('experience') }
      />
      <Expanded 
        title="Add languages" list={form.languages} 
        onChange={onChangeSectionInfo('languages')} 
        onAdd={() => onAddElementSection('languages')} 
        onDelete={onDeleteElementSection('languages') }
      />
      <Expanded 
        title="Add skills" list={form.skills} 
        onChange={onChangeSectionInfo('skills')} 
        onAdd={() => onAddElementSection('skills')} 
        onDelete={onDeleteElementSection('skills') }
      />
      <Expanded 
        title="Add other" list={form.other} 
        onChange={onChangeSectionInfo('other')} 
        onAdd={() => onAddElementSection('other')} 
        onDelete={onDeleteElementSection('other') }
      />
      <Grid item xs={12}>
        <Grid container>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            type="file"
            onChange={e => onUploadPhoto(e)}
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained" component="span">
              <CloudUploadIcon />
              <span style={{ marginLeft: 10 }}>Upload File</span>
            </Button>
          </label>
        </Grid>
      </Grid>
    </>
  );
}

function mapStateToProps({ form }, _) {
  return {
    form: form
  };
}
export default connect(mapStateToProps)(Form);