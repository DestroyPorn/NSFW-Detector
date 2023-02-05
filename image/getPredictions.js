import axios from'axios'
import tf  from '@tensorflow/tfjs-node'
import nsfw from 'nsfwjs'

const model = await nsfw.load()

export default async function (imageURL) {
    let pic = await axios.get(`${imageURL}`, {
        responseType: 'arraybuffer',
    })
      
    let image = tf.node.decodeImage(pic.data,3)
    let predictions = await model.classify(image)
    image.dispose()
    
    return predictions
}

