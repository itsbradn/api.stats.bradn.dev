import { config as envConfig } from 'dotenv';
import express from 'express';
import { connect as connectDb } from 'mongoose';
import Terminal from './modules/Terminal.module';
import { getDate } from './modules/Time.module';
import { ControllerService } from './service/controller.service';

let serverStart = Date.now();

envConfig();

class Server {
    public app = express();
    public terminal = Terminal;
    public controllerService = new ControllerService();

    async connectDb() {
        let dbConnectStart = Date.now();
        if (!process.env.MONGO_URI) return this.terminal.error(`No database URI supplied. Please make a field named 'MONGO_URI' in the appropriate .env file`);
        await connectDb(process.env.MONGO_URI);
        this.terminal.success(`Connected to database in ${Date.now() - dbConnectStart}ms`);
    }
}

const server = new Server();

(async (port = process.env.PORT || 5000) => {
    server.controllerService.getControllers(server.app);
    await server.app.listen(port, () => server.terminal.log(`Listening on port ${port}`));
    await server.connectDb();
    server.terminal.success(`Started server in ${Date.now() - serverStart}ms`)
})();

