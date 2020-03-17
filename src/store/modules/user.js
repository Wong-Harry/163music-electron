const user = {
  state: {
    userInfo: {},
    token: '',
    userMusicList: []
  },
  mutations: {
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_USERMUSICLIST: (state, userMusicList) => {
      state.userMusicList = userMusicList
    },
    RESET_USERINFO: state => {
      state.userInfo = ''
    }
  },
  actions: {
    getUserInfo({ commit, state }, data) {
      return new Promise((reject, resolve) => {
        // 请求api，获取用户信息获取用户歌单等
        const userInfo = ''
        const userMusicList = []
        commit('SET_USERINFO', userInfo)
        commit('SET_USERMUSICLIST', userMusicList)
        reject()
      })
    }
  },
  modules: {}
}

export default user
