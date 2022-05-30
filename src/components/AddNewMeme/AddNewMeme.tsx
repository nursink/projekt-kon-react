import { TextField, Button, Snackbar } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useMeme } from '../../hooks/useMeme';
import './AddNewMeme.css';

interface AddNewMemeProps {}

const AddNewMeme: FC<AddNewMemeProps> = () => {
  const { register, control, handleSubmit } = useForm();
  const {uploadNewMeme} = useMeme()
  const [showAlert, setShowAlert] = useState(false)

  const onSubmit = (data: any) => {
    const imgPath = URL.createObjectURL(data.file[0] as any);
    setShowAlert(true)
    uploadNewMeme({name: data.memeName, imgPath: imgPath});
  };

  return (
  <div className="AddNewMeme">
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={showAlert}
      autoHideDuration={1000}
      onClose={() => setShowAlert(false)}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
      message="Meme added"
    />
  
    <Box mt={5}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FileInput control={control} name="file" />
        <TextField type="text" label="Meme name" InputLabelProps={{ shrink: true }} {...register("memeName")} />
        <Button variant='outlined' size='large' sx={{py:1.7}} type="submit" >
          Add meme
        </Button>
      </form>
    </Box>
  </div>
)};


const FileInput = ({ control, name }: any) => {
  const { field } = useController({ control, name });
  const [value, setValue] = useState("");
  return (
    <TextField 
      value={value}  
      onChange={(e) => {
        setValue(e.target.value);
        field.onChange((e.target as HTMLInputElement).files as any);
      }} 
      type="file" 
      label="Meme path" 
      InputLabelProps={{ shrink: true }} 
    />
  );
};

export default AddNewMeme;
