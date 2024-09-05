import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  songs: undefined,
  play: false,
  currentMusicId: undefined
}

export const playlist = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addBaseSongs: (state, action) => {
      state.songs = action.payload
      state.currentMusicId = action.payload[0].id
    },
    togglePlay: (state, action) => {
      state.play = !state.play 
    },
    nextSong: (state, action) => {
      if(action.payload === state.songs.length){
        state.currentMusicId = state.songs[0].id
      } 
      else {
        state.currentMusicId = state.songs[action.payload].id
      }
    },
    prevSong: (state, action) => {
      if(action.payload < 0){
        state.currentMusicId = state.songs[state.songs.length - 1].id
      } 
      else {
        state.currentMusicId = state.songs[action.payload].id
      }
    },
    changeSong: (state, action) => {
     state.currentMusicId = action.payload 
    }
  }
})

export function getMusicsData(action) {
  return function(dispatch, getState) {
    fetch("/data/playlist.json")
    .then(data => data.json())
    .then(data => dispatch(addBaseSongs(data.playlist)))
  }
}

export const {
  addBaseSongs,
  togglePlay,
  nextSong,
  prevSong,
  changeSong
} = playlist.actions
export default playlist.reducer