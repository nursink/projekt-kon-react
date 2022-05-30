import { FC, useCallback } from 'react';
import { useLocation } from 'react-router';
import { useMemeContext } from '../../hooks/useMemeContext';
import { Meme } from '../../types/types';
import Mem from '../Mem/Mem';
import './MemeList.css';

interface MemeListProps {}

const MemeList: FC<MemeListProps> = (props) => {
  
  const { state } = useMemeContext();
  const location = useLocation();

  const memeList = useCallback(() => {
    if(location.pathname === '/favorite') {
      return state.memeList.filter((meme) => meme.favorite);
    }
    const [hotMemes, regularMemes] = state.memeList.reduce<[Meme[], Meme[]]>((result, meme) => {
          result[meme.upVotes - meme.downVotes > 5 ? 0 : 1].push(meme);
          return result;
        },
        [[], []]);

    return location.pathname === '/hot' ? hotMemes : regularMemes
  }, [state.memeList, location.pathname])

  return (
  <div className="MemeList">
    {memeList().map((meme, i) => <Mem meme={meme} key={i} />)}
  </div>
)};

export default MemeList;
