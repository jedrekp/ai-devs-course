import {OpenAiClient} from "../openai.client.js";

export const bloggerFn = async (inputData) => {
    const systemTemplate = `Instructions:  
    1. Maximum of 50 words per section
    2. Add "$$$$$" after each blog section.
    Context ### ${JSON.stringify(inputData.blog)}###`
    const userMessage = inputData.msg
    const aiResponse = await OpenAiClient.chat(systemTemplate, userMessage)
    return {
        answer: aiResponse.choices[0].message.content.split("$$$$$").filter(section => section !== "")
    }
}