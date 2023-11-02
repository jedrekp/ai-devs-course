import {helloApiFn} from "./tasks/hello.api.js";

export class TaskFnFactory {
    static getTaskFn(taskName) {
        switch (taskName) {
            case "helloapi":
                return helloApiFn
            default:
                throw new Error(`Task ${taskName} not supported.`)
        }
    }
}
