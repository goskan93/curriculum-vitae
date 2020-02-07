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

  const textInputs = ['Name', 'Email', 'Phone', 'GitHub', 'Linkedin', 'Website' ]
  const expandedInputs = ['education', 'experience', 'languages', 'skills', 'others' ]

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
  };

  return (
    <>
      {textInputs.map((item,index) => {
        return <TextInput label={item} value={form[item.toLowerCase()]} xs={6} onChange={onChangePersonalInfo(item.toLowerCase())} key={index}/>
      })}
      {expandedInputs.map((item,index) => {
        return (
          <Expanded 
            key={index}
            title={`Add ${item}`} list={form[item]} 
            onChange={onChangeSectionInfo(item)} 
            onAdd={() => onAddElementSection(item)} 
            onDelete={onDeleteElementSection(item) }
          />
        )
      })}
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
              <span style={{ marginLeft: 10 }}>Upload Photo</span>
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