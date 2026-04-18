"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLDBDapExtension = void 0;
exports.activate = activate;
const vscode = require("vscode");
const debug_adapter_factory_1 = require("./debug-adapter-factory");
const disposable_context_1 = require("./disposable-context");
const uri_launch_handler_1 = require("./uri-launch-handler");
const debug_configuration_provider_1 = require("./debug-configuration-provider");
const lldb_dap_server_1 = require("./lldb-dap-server");
const debug_session_tracker_1 = require("./debug-session-tracker");
const modules_data_provider_1 = require("./ui/modules-data-provider");
const logging_1 = require("./logging");
/**
 * This class represents the extension and manages its life cycle. Other extensions
 * using it as as library should use this class as the main entry point.
 */
class LLDBDapExtension extends disposable_context_1.DisposableContext {
    constructor(logger, logFilePath, outputChannel) {
        super();
        const lldbDapServer = new lldb_dap_server_1.LLDBDapServer();
        const sessionTracker = new debug_session_tracker_1.DebugSessionTracker(logger);
        this.pushSubscription(logger, outputChannel, lldbDapServer, sessionTracker, vscode.debug.registerDebugConfigurationProvider("lldb-dap", new debug_configuration_provider_1.LLDBDapConfigurationProvider(lldbDapServer, logger, logFilePath)), vscode.debug.registerDebugAdapterDescriptorFactory("lldb-dap", new debug_adapter_factory_1.LLDBDapDescriptorFactory(logger, logFilePath)), vscode.debug.registerDebugAdapterTrackerFactory("lldb-dap", sessionTracker), vscode.window.registerTreeDataProvider("lldb-dap.modules", new modules_data_provider_1.ModulesDataProvider(sessionTracker)), vscode.window.registerUriHandler(new uri_launch_handler_1.LaunchUriHandler()));
        vscode.commands.registerCommand("lldb-dap.modules.copyProperty", (node) => vscode.env.clipboard.writeText(node.value));
    }
}
exports.LLDBDapExtension = LLDBDapExtension;
/**
 * This is the entry point when initialized by VS Code.
 */
function activate(context) {
    return __awaiter(this, void 0, void 0, function* () {
        const outputChannel = vscode.window.createOutputChannel("LLDB-DAP", { log: true });
        outputChannel.info("LLDB-DAP extension activating...");
        const logFilePath = new logging_1.LogFilePathProvider(context, outputChannel);
        context.subscriptions.push(new LLDBDapExtension(outputChannel, logFilePath, outputChannel));
        outputChannel.info("LLDB-DAP extension activated");
    });
}
//# sourceMappingURL=extension.js.map