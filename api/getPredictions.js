import axios from'axios'
import tf  from '@tensorflow/tfjs-node'
import nsfw from 'nsfwjs'

const model = await nsfw.load()

export default async function (imageURL) {
    const pic = await axios.get(`${imageURL}`, {
        responseType: 'arraybuffer',
    })
      
    const image = await tf.node.decodeImage(pic.data,3)
    const predictions = await model.classify(image)
    image.dispose()
    
    return predictions
}