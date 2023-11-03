import axios from "axios";

export class AiDevsClient {


    static generateTaskToken(taskName) {
        return axios.post(`https://zadania.aidevs.pl/token/${taskName}`, {apikey: process.env.AI_DEVS_API_KEY})
            .then(res => res.data.token)
    }

    static getTaskInputData(taskToken) {
        return axios.get(`https://zadania.aidevs.pl/task/${taskToken}`)
            .then(res => res.data)
    }

    static submitAnswer(taskToken, data) {
        return axios.post(`https://zadania.aidevs.pl/answer/${taskToken}`, data)
            .then(res => res.data)
            .catch(err => {
                throw new Error(err.data)
            })
    }
}