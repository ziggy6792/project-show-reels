import { Clip, ClipModel } from 'src/entities/clip.entity';
import { Service } from 'typedi';
import { ObjectId } from 'mongodb';
import { IPaginateOptions, IPaginateResult } from 'typegoose-cursor-pagination';
import BaseEntityService from './base-entity.service';

@Service()
export class ClipService extends BaseEntityService<Clip> {
  constructor() {
    super(ClipModel);
  }

  async getByIds(ids: ObjectId[]): Promise<Clip[]> {
    return ClipModel.find({ _id: { $in: ids } });
  }
}
