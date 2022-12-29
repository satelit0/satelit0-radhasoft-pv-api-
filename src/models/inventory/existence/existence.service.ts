import { Injectable } from '@nestjs/common';
import { CreateExistenceDto } from './dto/create-existence.dto';
import { UpdateExistenceDto } from './dto/update-existence.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Existence } from './entities/existence.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExistenceService {

  constructor(
    @InjectRepository(Existence) private existenceRepository: Repository<Existence>
  ) { }

  create(createExistenceDto: CreateExistenceDto) {
    const extitence = this.existenceRepository.create({ ...createExistenceDto });
    const newExistence = this.existenceRepository.save(extitence);
    return newExistence;
  }

  findAll() {
    return this.existenceRepository.findAndCount();
  }

  findOne(id: number) {
    return this.existenceRepository.findOne({ where: { id } });
  }

  update(id: number, updateExistenceDto: UpdateExistenceDto) {
    const existence = this.existenceRepository.create({ ...updateExistenceDto });
    const existenceEdited = this.existenceRepository.update(id, existence);
    return existenceEdited;
  }

  remove(id: number, soft: boolean = true) {
    if (soft) return this.existenceRepository.softDelete(id);
    return this.existenceRepository.delete(id);
  }
  
  restore(id: number) {
    this.existenceRepository.restore(id);
  }
}
