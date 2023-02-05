import getPredictions from'./getPredictions.js'

class DestroyPornError {
    name = 'DestroyPorn_Error';
    constructor(message){
        this.message = message;
    }
}

export default async function classify(imageURL, sendMoreInfo) {
    if(sendMoreInfo === true){
        let predictions = await getPredictions(imageURL)
        if(predictions[0].className === 'Neutral'){
            let returnit = {
                ClassifiedAs:"Normal",
                WinnerTag:predictions[0].className,
                Probability:predictions[0].probability,
                AllOptions:[
                    predictions
                ]
            }

            return returnit;
        } else {
            let returnit = {
                ClassifiedAs:"NSFW",
                WinnerTag:predictions[0].className,
                Probability:predictions[0].probability,
                AllOptions:[
                    predictions
                ]
            }

            return returnit;
        }
    } else if(sendMoreInfo === false){
        let predictions = await getPredictions(imageURL)

        if(predictions[0].className === 'Neutral'){
            return false
        } else {
            return true;
        }

        //true = there is nsfw;
        //false = its not nsfw;
    } else {
        throw new DestroyPornError(`'${sendMoreInfo}' is not a valid sendMoreInfo option. Expected true or false.`)
    }
}