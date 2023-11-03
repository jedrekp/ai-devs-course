import {appConfig} from "./config.js";
import OpenAI from 'openai';

export class OpenAiClient {
    static openai = new OpenAI({
        apiKey: appConfig.OPENAI_API_KEY
    });

    static moderate(data) {
        return this.openai.moderations.create({input: data})
    }

    static chat(systemTemplate, userMessage) {
        return this.openai.chat.completions.create({
            messages: [{role: "system", content: systemTemplate}, {role: 'user', content: userMessage}],
            model: "gpt-3.5-turbo"
        });
    }
}