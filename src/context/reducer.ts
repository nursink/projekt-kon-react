import { State } from "../types/types";


export const reducer = (state: State, action: any): State => {
  switch (action.type) {
    case 'vote':
      return {
        ...state,
        memeList: state.memeList.map(meme => (meme.id === action.payload.id) ? { ...meme, ...action.payload } : meme)
      }
    case 'changeFavoriteStatus':
      return {
        ...state,
        memeList: state.memeList.map(meme => (meme.id === action.payload.id) ? action.payload : meme)
      }
    case 'uploadMeme':
      return {
        ...state,
        memeList: [...state.memeList, action.payload]
      }
    default:
      return state
  }
}