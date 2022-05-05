import { Express } from 'express';
import { RouteType } from '../constant/route.constant';
import { controllers } from '../decorator/controller.decorator';
import * as ScanService from './scan.service';

export class ControllerService {
    getControllers(app: Express) {
        ScanService;
        controllers.forEach((route: RouteType) => {
            app.use(`/api${route.path}`, route.router);
        });
    }
}