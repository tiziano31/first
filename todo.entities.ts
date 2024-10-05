import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn() 
  public id: number;

  @Column()
  public title: string;

  @Column({ default: false }) 
  public completed: boolean; 

  public constructor(title: string) {
    this.title = title;
    this.completed = false;
  }
}
