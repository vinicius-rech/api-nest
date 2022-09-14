import {Module} from '@nestjs/common';
import {AppService} from "./app.service";
import {AppController} from "./app.controller";
import {ConfigModule} from "@nestjs/config";
import {TaskModule} from "../task/task.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env.production', '.env'],
            isGlobal: true
        }),
        TaskModule
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {
}
