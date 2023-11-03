import dotenv from "dotenv-flow"

dotenv.config()

export const appConfig = {
    AI_DEVS_API_KEY: process.env.AI_DEVS_API_KEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    TASK_NAME: process.env.TASK_NAME
}