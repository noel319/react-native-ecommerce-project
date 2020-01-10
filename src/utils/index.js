import httpClient from './httpClient'
import images from './images'

export function IDGenerator() {
  this.length = 8
  this.timestamp = +new Date()

  var _getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  this.generate = function() {
    var ts = this.timestamp.toString()
    var parts = ts.split('').reverse()
    var id = ''

    for (var i = 0; i < this.length; ++i) {
      var index = _getRandomInt(0, parts.length - 1)
      id += parts[index]
    }

    return id
  }
}

export const delay = (ms = 1000) => new Promise(res => setTimeout(res, ms))

export { httpClient, images }
