import { config as envConfig } from 'dotenv';
import express from 'express';
import Terminal from './modules/Terminal.module';
import { getDate } from './modules/Time.module';
import { ControllerService } from './service/controller.service';

let serverStart = Date.now();

envConfig();

class Server {
    public app = express();
    public terminal = Terminal;
    public controllerService = new ControllerService();
}

const server = new Server();

(async (port = process.env.PORT || 5000) => {
    server.controllerService.getControllers(server.app);
    await server.app.listen(port, () => server.terminal.log(`Listening on port ${port}`));
    server.terminal.success(`Started server in ${Date.now() - serverStart}ms`)
})();