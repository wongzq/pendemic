import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { story, storyId } from './story';

export interface writerAttributes {
  writer_id: number;
  firebase_id: string;
  username?: string;
  name?: string;
}

export type writerPk = "writer_id";
export type writerId = writer[writerPk];
export type writerCreationAttributes = Optional<writerAttributes, writerPk>;

export class writer extends Model<writerAttributes, writerCreationAttributes> implements writerAttributes {
  writer_id!: number;
  firebase_id!: string;
  username?: string;
  name?: string;

  // writer hasMany story via writer_id
  stories!: story[];
  getStories!: Sequelize.HasManyGetAssociationsMixin<story>;
  setStories!: Sequelize.HasManySetAssociationsMixin<story, storyId>;
  addStory!: Sequelize.HasManyAddAssociationMixin<story, storyId>;
  addStories!: Sequelize.HasManyAddAssociationsMixin<story, storyId>;
  createStory!: Sequelize.HasManyCreateAssociationMixin<story>;
  removeStory!: Sequelize.HasManyRemoveAssociationMixin<story, storyId>;
  removeStories!: Sequelize.HasManyRemoveAssociationsMixin<story, storyId>;
  hasStory!: Sequelize.HasManyHasAssociationMixin<story, storyId>;
  hasStories!: Sequelize.HasManyHasAssociationsMixin<story, storyId>;
  countStories!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof writer {
    writer.init({
    writer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firebase_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "firebase_id"
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "username"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'writer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "writer_id" },
        ]
      },
      {
        name: "firebase_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "firebase_id" },
        ]
      },
      {
        name: "username",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
  return writer;
  }
}
