import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { isEmpty } from 'rxjs';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }
   
  @Post('login')
   async login(@Body() { username, password }) {
    console.log(username);
    const user = await this.usuarioService.findOneByUsername(username);
    console.log(user);

    if (!user) {
      return { success: false, message: 'el nombre no existe'};
    }

    if (user.password !== password) {
      return { success: false, message: 'la contraseña no existe' };
    }

    return { success: true,message: 'Bienvenido '+ username + ' Felicidades!!!!!!' };
  } 
 


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
