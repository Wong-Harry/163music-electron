const util = {}

const session = {
  set: (name, value) => {
    sessionStorage.setItem(name, JSON.stringify(value))
  },
  get: name => {
    return JSON.parse(sessionStorage.getItem(name))
  }
}

util.session = session

export default util
