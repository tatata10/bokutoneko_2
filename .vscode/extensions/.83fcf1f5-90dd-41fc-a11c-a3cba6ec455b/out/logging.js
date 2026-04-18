"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogFilePathProvider = exports.LogType = void 0;
const path = require("path");
const vscode = require("vscode");
/**
 * Formats the given date as a string in the form "YYYYMMddTHHMMSS".
 *
 * @param date The date to format as a string.
 * @returns The formatted date.
 */
function formatDate(date) {
    const year = date.getFullYear().toString().padStart(4, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${year}${month}${day}T${hour}${minute}${seconds}`;
}
var LogType;
(function (LogType) {
    LogType[LogType["DEBUG_SESSION"] = 0] = "DEBUG_SESSION";
})(LogType || (exports.LogType = LogType = {}));
class LogFilePathProvider {
    constructor(context, logger) {
        this.context = context;
        this.logger = logger;
        this.logFolder = "";
        this.updateLogFolder();
        context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration("lldb-dap.logFolder")) {
                this.updateLogFolder();
            }
        }));
    }
    get(type) {
        const logFolder = this.logFolder || this.context.logUri.fsPath;
        switch (type) {
            case LogType.DEBUG_SESSION:
                return path.join(logFolder, `lldb-dap-session-${formatDate(new Date())}.log`);
                break;
        }
    }
    updateLogFolder() {
        const config = vscode.workspace.getConfiguration("lldb-dap");
        let logFolder = config.get("logFolder") || this.context.logUri.fsPath;
        vscode.workspace.fs
            .createDirectory(vscode.Uri.file(logFolder))
            .then(undefined, (error) => {
            this.logger.error(`Failed to create log folder ${logFolder}: ${error}`);
            logFolder = this.context.logUri.fsPath;
        })
            .then(() => {
            this.logFolder = logFolder;
            this.logger.info(`Persisting lldb-dap logs to ${logFolder}`);
        });
    }
}
exports.LogFilePathProvider = LogFilePathProvider;
//# sourceMappingURL=logging.js.map