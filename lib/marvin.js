class Marvin {
  /**
   * Constructor
   * @constructor
   * @param {string} text
   * @param {object} state
   */
  constructor (text, state, opts) {
    this.state = state || {}
    console.log(text)
  }

  /**
   * @answer
   */
  answer () {
    return this.request().then((newState) => {
      this.state = newState
      this.response()
    }).catch( (e) => {
      throw new Error(e)
      return this.state
    })
  }
}

module.exports = Marvin;
