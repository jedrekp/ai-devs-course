import {helloApiFn} from "./tasks/helloapi.js";
import {moderationFn} from "./tasks/moderation.js";
import {bloggerFn} from "./tasks/blogger.js";

export class TaskFnFactory {
    static getTaskFn(taskName) {
        switch (taskName) {
            case "helloapi":
                return helloApiFn
            case "moderation":
                return moderationFn
            case "blogger":
                return bloggerFn
            default:
                throw new Error(`Task ${taskName} not supported.`)
        }
    }
}
