export type State = {
  memeList: Meme[],
}

export type Meme = {
  title: string,
  upVotes: number,
  downVotes: number,
  imgPath: string,
  favorite: boolean,
  id: number
}
