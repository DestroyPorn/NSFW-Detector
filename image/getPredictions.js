module.exports = async function (imageURL) {
    const axios = require('axios')
    const tf = require('@tensorflow/tfjs-node')
    const nsfw = require('nsfwjs')
    const pic = await axios.get(`${imageURL}`, {
        responseType: 'arraybuffer',
    })
    const model = await nsfw.load()
      
    const image = await tf.node.decodeImage(pic.data,3)
    const predictions = await model.classify(image)
    image.dispose() 
    
    return predictions
}

