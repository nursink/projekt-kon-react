import './App.css';
import { Route, Routes } from 'react-router';
import MemeList from './components/MemeList/MemeList';
import { Box, Drawer, useTheme } from '@mui/material';
import MemeCategories from './components/MemeCategories/MemeCategories';
import AddNewMeme from './components/AddNewMeme/AddNewMeme';

function App() {

  const theme = useTheme();

  return (
    <div className="App" >
      <Box sx={{ display: 'flex' }}>
      <Drawer 
          anchor="left"
          open={true}
          variant="permanent"
          sx={{
            width: 400,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 400,
              boxSizing: 'border-box',
            },
          }}  
          PaperProps={{
            sx: {
              backgroundColor: theme.palette.grey[300],
            }
          }}
          >
          <MemeCategories />
      </Drawer>
       <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: theme.palette.grey[200], minHeight: "100vh" }}
      >
        <Routes>
          <Route path='/hot' element={<MemeList />} />
          <Route path='/regular' element={<MemeList />} />
          <Route path='/favorite' element={<MemeList />} />
          <Route path='/add-new' element={<AddNewMeme />} />
        </Routes>
      </Box>
      </Box>
    </div>
  );
}

export default App;
