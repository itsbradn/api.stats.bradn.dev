import { config as envConfig } from 'dotenv';
import express from 'express';
import { connect as connectDb } from 'mongoose';
import Terminal from './modules/Terminal.module';
import { createServer, Server as mcServer, Client as mcClient } from 'minecraft-protocol';
import { ControllerService } from './service/controller.service';
import mojangModel from './models/mojang.model';
import cors from 'cors';

let serverStart = Date.now();

envConfig();

class Server {
    public app = express();
    public terminal = Terminal;
    public controllerService = new ControllerService();
    public mcServer: undefined | mcServer = undefined;
    

    async connectDb() {
        let dbConnectStart = Date.now();
        if (!process.env.MONGO_URI) return this.terminal.error(`No database URI supplied. Please make a field named 'MONGO_URI' in the appropriate .env file`);
        await connectDb(process.env.MONGO_URI);
        this.terminal.success(`Connected to database in ${Date.now() - dbConnectStart}ms`);
    }

    async startMcServer() {
        let serverStart = Date.now()
        this.mcServer = createServer({ 'online-mode': true });
        this.terminal.success(`Started Minecraft server in ${Date.now() - serverStart}ms`);

        this.mcServer.on('login',async (client:mcClient) => {
            let code: number = Math.floor(100000 + Math.random() * 900000),
                username: string = client.username.toString(),
                uuid: string = client.uuid.replace(/-/g, ""),
                refreshCodeAt: number = Date.now() + parseInt(process.env.MC_CODE_REFRESH_MINUTES || "5"),
                mcModel = await mojangModel.findOne({ uuid });
                
            
            
        })
    }
}

const server = new Server();

(async (port = process.env.PORT || 5000) => {
    server.app.use(express.json());
    server.app.use(cors({
        origin: '*'
    }));
    server.controllerService.getControllers(server.app);
    await server.app.listen(port, () => server.terminal.log(`Listening on port ${port}`));
    await server.connectDb();
    server.terminal.success(`Started server in ${Date.now() - serverStart}ms`);
})();

export default server;
