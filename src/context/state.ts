import { State } from "../types/types";

export const initialState: State = {
  memeList: [
    {
      "title": "Mem 1",
      "upVotes": 6,
      "downVotes": 0,
      "imgPath": "/memes/mem1.jpg",
      "favorite": false,
      "id": 1
    },
    {
      "title": "Mem 2",
      "upVotes": 10,
      "downVotes": 5,
      "imgPath": "/memes/mem2.jpg",
      "favorite": false,
      "id": 2
    },
    {
      "title": "Mem 3",
      "upVotes": 2137,
      "downVotes": 666,
      "imgPath": "/memes/mem3.jpg",
      "favorite": false,
      "id": 3
    },
    {
      "title": "Mem 4",
      "upVotes": 120,
      "downVotes": 40,
      "imgPath": "/memes/mem4.jpg",
      "favorite": false,
      "id": 4
    }
  ]
}