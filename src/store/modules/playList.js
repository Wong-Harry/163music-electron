const playList = {
  state: {
    playList: [],
    playState: '',
    plsyProgress: '',
    musicInfo: ''
  },
  mutathions: {
    SET_MUISCINFO: (state, musicInfo) => {
      state.musicInfo = musicInfo
    },
    SET_PLAYPROGRESS: (state, progress) => {
      state.plsyProgress = progress
    },
    SET_PLAYSTATE: (state, playState) => {
      state.playState = playState
    },
    SET_PLAYLIS: (state, playList) => {
      state.playList = playList
    },
    RESET_PLAYLIST: state => {
      state.playList = []
      state.playState = ''
      state.plsyProgress = ''
      state.musicInfo = ''
    }
  },
  actions: {},
  modules: {}
}

export default playList
