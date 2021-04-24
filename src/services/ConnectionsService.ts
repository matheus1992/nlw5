import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionCreate{
    admin_id?: string;
    socket_id: string; 
    user_id: string; 
    id?: string; 
}

class ConnectionsService{
    private connectionsRepository: Repository<Connection>;
    
    constructor() {
        this.connectionsRepository = getCustomRepository(ConnectionsRepository);
    }   

    async create({ socket_id, admin_id, id, user_id }: IConnectionCreate) {
        // INSERIR MENSAGEM NO DB
        const connection = this.connectionsRepository.create({
            socket_id, admin_id, id, user_id
        });

        await this.connectionsRepository.save(connection);
        return connection;
    }

    async findByUserId(user_id: string){
        const connection = await this.connectionsRepository.findOne({user_id});
        return connection;
    }
}

export { ConnectionsService };