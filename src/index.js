import {appConfig} from "./config.js";
import {TaskFnFactory} from "./task.fn.factory.js";
import {AiDevsClient} from "./ai.devs.client.js";
import {prettyJsonStringify} from "./utils/json.utils.js";

const executeTask = async () => {
    const taskName = appConfig.TASK_NAME

    console.log(`Retrieving function for task: "${taskName}".`)
    const taskFn = TaskFnFactory.getTaskFn(taskName)

    console.log(`Generating task token for task: "${taskName}".`)
    const taskToken = await AiDevsClient.generateTaskToken(taskName)

    console.log(`Retrieving input data for task: "${taskName}".`)
    const inputData = await AiDevsClient.getTaskInputData(taskToken)

    console.log(`Starting execution of task: "${taskName}".`)
    console.log(`Input data: ${prettyJsonStringify(inputData)}`)
    const outputData = await taskFn(inputData)
    console.log(`Output data: ${prettyJsonStringify(outputData)}`)

    console.log(`Submitting answer for task: "${taskName}".`)
    const result = await AiDevsClient.submitAnswer(taskToken, outputData)

    console.log(`Task result: ${prettyJsonStringify(result)}`)
}
await executeTask()