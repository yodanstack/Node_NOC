import { log } from "console";
import { LogModel } from "../../data/mongo";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";


export class MongoLogDatasource implements LogDatasource{
    async saveLog(log: LogEntity): Promise<void>  {
        const newLog = await LogModel.create(log);
        console.log('Mongo log creatred', newLog.id);
    }
   async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    const logs = await LogModel.find({
        level: severityLevel
    });
    return logs.map(mongoLog => LogEntity.fromObject(mongoLog));
} 

}
