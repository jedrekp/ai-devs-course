import dotenv from "dotenv-flow"
import {TaskFnFactory} from "./task.fn.factory.js";
import {AiDevsClient} from "./ai.devs.client.js";

dotenv.config()

const executeTask = async () => {
    const taskName = process.env.TASK_NAME

    console.log(`Retrieving function for task: ${taskName}.`)
    const taskFn = TaskFnFactory.getTaskFn(taskName)

    console.log(`Generating task token for task: ${taskName}.`)
    const taskToken = await AiDevsClient.generateTaskToken(taskName)

    console.log(`Retrieving input data for task: ${taskName}.`)
    const inputData = await AiDevsClient.getTaskInputData(taskToken)

    console.log(`Starting execution of task: ${taskName}.`)
    const answer = await taskFn(inputData)

    console.log(`Submitting answer for task ${taskName}.`)
    const result = await AiDevsClient.submitAnswer(taskToken, answer)

    console.log(result)
}
await executeTask()