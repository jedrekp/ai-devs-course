import {OpenAiClient} from "../openai.client.js";

export const moderationFn = async (inputData) => {
    const moderationResult = await OpenAiClient.moderate(inputData.input)
    return {
        answer: moderationResult.results.map(result => result.flagged ? 1 : 0)
    }
}