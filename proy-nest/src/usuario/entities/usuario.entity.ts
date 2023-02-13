import {BaseEntity, Entity, Column,PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'usuario'})
export class Usuario extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type:'varchar',unique:true, length:25,nullable:false})
    username:string;
    
    @Column({type:'varchar',nullable:false})
    password:string;

   
}
