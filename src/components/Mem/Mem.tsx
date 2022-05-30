import {  Typography, BottomNavigation, BottomNavigationAction } from '@mui/material';
import {  Favorite, FavoriteBorder, ThumbDown, ThumbUp } from '@mui/icons-material';
import { FC } from 'react';
import { Meme } from '../../types/types';
import './Mem.css';
import { useMeme } from '../../hooks/useMeme';

interface MemProps {
  meme: Meme
}

const Mem: FC<MemProps> = ({meme}) => {
  const {memeVote, changeFavoriteStatus} = useMeme()

  return (
  <div className="Mem">
    <Typography variant="h5" my={2}>{meme.title}</Typography>
    <img src={meme.imgPath} alt={meme.title} />
    <BottomNavigation
      showLabels
    >
      <BottomNavigationAction label={`${meme.upVotes} Up Votes`}  icon={<ThumbUp  />} onClick={() => memeVote('upVote', meme.id)} />
      <BottomNavigationAction label={meme.favorite ? 'Remove from Favorites' : 'Add to Favorites'}  icon={meme.favorite ? <Favorite  /> : <FavoriteBorder />} onClick={() => changeFavoriteStatus(meme.id)} />
      <BottomNavigationAction label={`${meme.downVotes} Down Vote`}  icon={<ThumbDown  />} onClick={() => memeVote('downVote', meme.id)}/>
    </BottomNavigation>
  </div>
)};

export default Mem;
