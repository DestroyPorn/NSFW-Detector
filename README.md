<p align="center">
  <img src="https://avatars.githubusercontent.com/u/123158165?s=200&v=4" />
  <h1>DestroyPorn - NSFW Image Detector</h1>
</p>

## Example
```js
async function example(){
    const classify = require('./classify.js')

    var nsfw_image_example = 'https://cdn.discordapp.com/attachments/1065928419059179522/1066087850371711047/meaAaGwObaaaamhsUPZEqiIbxKg8tny13.png' //example porn image
    var results = await classify(nsfw_image_example, true)
    
    if(results.ClassifiedAs === 'NSFW'){
        return console.log(`This image has been classified as NSFW, the probability of it being a ${results.WinnerTag} image is ${results.Probability}.`)
    } else {
        return console.log("Yay, this image is not nsfw!")
    }
}

example()
```

## Run locally
- Run these commands:
```
npm i nsfwjs
npm i axios
npm i @tensorflow/tfjs-node@4.1.0
```
- Run example.js file:
```
node example.js
```