import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  Index,
} from 'sequelize-typescript';
import { DatabaseEnum } from 'src/enum/DatabaseEnum';
import { UserGroupModel } from './UserGroupModel';

@Table({ tableName: DatabaseEnum.Tables.User.name })
export class UserModel extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING(100) })
  @Index({ unique: true })
  username: string;

  @Column({ type: DataType.STRING(100) })
  password: string;

  @HasMany(() => UserGroupModel)
  groups: UserGroupModel[];
}
