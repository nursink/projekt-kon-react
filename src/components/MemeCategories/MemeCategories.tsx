import { Button, Container, Stack } from '@mui/material';
import { FC } from 'react';
import { useLocation, useNavigate  } from 'react-router';
import './MemeCategories.css';

interface MemeCategoriesProps {}

const MemeCategories: FC<MemeCategoriesProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getButtonSyle = (path: string) => {
    return location.pathname === `/${path}` ? 'contained' : 'outlined'
  }

  const navigateToCategory = (category: string) => {
    navigate(`/${category}`);
  }

  return (
    <Container fixed>
      <div className="MemeCategories">
        <Stack spacing={2} mx={12} mt={4}>
          <Button variant={getButtonSyle('hot')} onClick={() => navigateToCategory('hot')} >
            Hot
          </Button>
          <Button variant={getButtonSyle('regular')} onClick={() => navigateToCategory('regular')} >
            Regular
          </Button>
          <Button variant={getButtonSyle('favorite')} onClick={() => navigateToCategory('favorite')} >
            Favorite
          </Button>
          <Button variant={getButtonSyle('add-new')} onClick={() => navigateToCategory('add-new')} >
            Add new meme
          </Button>
        </Stack>
      </div>
  </Container>
)};

export default MemeCategories;
