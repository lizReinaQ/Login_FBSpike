import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
 controllers: [AppController],
  providers: [AppService],
  imports: [ConfigModule,
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: '127.0.0.1',
        port: 5432,
        username: 'example',
        password: 'example',
        database: 'testp_db',
        entities: [Usuario],
        synchronize: true,
      }),
    UsuarioModule,],
  
})
export class AppModule {
   static port: number | string;

  constructor(private readonly _configService: ConfigService){
    AppModule.port= this._configService.get(Configuration.PORT);
 
  }  
 

}
