import { useMemeContext } from "./useMemeContext"

export const useMeme = () => {
  const { state, dispatch } = useMemeContext()

  const memeVote = (voteType: string, memeId: number) => {
    const updatedMeme = state.memeList.find(meme => meme.id === memeId);
    if (!updatedMeme) {
      return
    }
    voteType === 'upVote' ? dispatch({
      type: "vote", payload: { id: updatedMeme.id, upVotes: updatedMeme.upVotes + 1 }
    }) : dispatch({
      type: "vote", payload: { id: updatedMeme.id, downVotes: updatedMeme.downVotes + 1 }
    })
  }

  const changeFavoriteStatus = (memeId: number) => {
    const updatedMeme = state.memeList.find(meme => meme.id === memeId);
    if (!updatedMeme) {
      return
    }
    dispatch({
      type: "changeFavoriteStatus", payload: {
        ...updatedMeme,
        favorite: !updatedMeme.favorite
      }
    })
  }

  const uploadNewMeme = ({ name, imgPath }: { name: string, imgPath: string }) => {
    console.log(imgPath)
    dispatch({
      type: "uploadMeme",
      payload: {
        title: name,
        upVotes: 0,
        downVotes: 0,
        imgPath: imgPath,
        favorite: false,
        id: state.memeList.length + 1
      }
    })

  }

  return {
    memeVote,
    changeFavoriteStatus,
    uploadNewMeme
  }
}