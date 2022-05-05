import { config as envConfig } from 'dotenv';
import express from 'express';
import Terminal from './modules/Terminal.module';
import { ControllerService } from './service/controller.service';

envConfig();

class Server {
    public app = express();
    public terminal = Terminal;
    public controllerService = new ControllerService();
}

const server = new Server();

((port = process.env.PORT || 5000) => {
    server.controllerService.getControllers(server.app);
    server.app.listen(port, () => server.terminal.log(`Listening on port ${port}`));
})();