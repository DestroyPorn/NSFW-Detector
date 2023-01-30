import express from 'express'
import classify from '../image/classify'
const app = express()
const port = 3000

app.get('/api/classify', async (req, res) => {
  var url = req.query.frame

  if(!url){
    return res.json({response:"Param 'frame' is required.", error:true})
  }


  var results = await classify(url, true)
  
  if(results.ClassifiedAs === 'NSFW'){
      return res.json({response:"nsfw", type:results.WinnerTag, probability:results.Probability, predictions:results.AllOptions, error:false})
  } else {
      return res.json({response:"neutral", type:results.WinnerTag, probability:results.Probability, predictions:results.AllOptions, error:false})
  }
})

app.listen(port, () => {
  console.log(`- Api working`)
})