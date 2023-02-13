import { Injectable,Inject} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';


@Injectable()
export class UsuarioService {
  
  constructor(
    @InjectRepository(Usuario)
    private usersRepository: Repository<Usuario>,
  ) {}
 
  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

/*  findAll() {
    return Usuario.find;
  } */
  async findAll(): Promise<Usuario[]> {
    return this.usersRepository.find();
  }

  async findOneByUsername(username: string) {
    console.log('ingrese a buscar ' + username)
    return this.usersRepository.findOne({ where: { username } });
  }

  
  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
