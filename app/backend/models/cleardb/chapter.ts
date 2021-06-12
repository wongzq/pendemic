import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { plotpoint, plotpointId } from './plotpoint';
import type { plotpointchapter, plotpointchapterId } from './plotpointchapter';
import type { story, storyId } from './story';

export interface chapterAttributes {
  story_id: number;
  chapter_id: number;
  title: string;
  content_url: string;
  order: number;
}

export type chapterPk = "chapter_id";
export type chapterId = chapter[chapterPk];
export type chapterCreationAttributes = Optional<chapterAttributes, chapterPk>;

export class chapter extends Model<chapterAttributes, chapterCreationAttributes> implements chapterAttributes {
  story_id!: number;
  chapter_id!: number;
  title!: string;
  content_url!: string;
  order!: number;

  // chapter belongsToMany plotpoint via chapter_id and plotpoint_id
  plotpoint_id_plotpoints!: plotpoint[];
  getPlotpoint_id_plotpoints!: Sequelize.BelongsToManyGetAssociationsMixin<plotpoint>;
  setPlotpoint_id_plotpoints!: Sequelize.BelongsToManySetAssociationsMixin<plotpoint, plotpointId>;
  addPlotpoint_id_plotpoint!: Sequelize.BelongsToManyAddAssociationMixin<plotpoint, plotpointId>;
  addPlotpoint_id_plotpoints!: Sequelize.BelongsToManyAddAssociationsMixin<plotpoint, plotpointId>;
  createPlotpoint_id_plotpoint!: Sequelize.BelongsToManyCreateAssociationMixin<plotpoint>;
  removePlotpoint_id_plotpoint!: Sequelize.BelongsToManyRemoveAssociationMixin<plotpoint, plotpointId>;
  removePlotpoint_id_plotpoints!: Sequelize.BelongsToManyRemoveAssociationsMixin<plotpoint, plotpointId>;
  hasPlotpoint_id_plotpoint!: Sequelize.BelongsToManyHasAssociationMixin<plotpoint, plotpointId>;
  hasPlotpoint_id_plotpoints!: Sequelize.BelongsToManyHasAssociationsMixin<plotpoint, plotpointId>;
  countPlotpoint_id_plotpoints!: Sequelize.BelongsToManyCountAssociationsMixin;
  // chapter hasMany plotpointchapter via chapter_id
  plotpointchapters!: plotpointchapter[];
  getPlotpointchapters!: Sequelize.HasManyGetAssociationsMixin<plotpointchapter>;
  setPlotpointchapters!: Sequelize.HasManySetAssociationsMixin<plotpointchapter, plotpointchapterId>;
  addPlotpointchapter!: Sequelize.HasManyAddAssociationMixin<plotpointchapter, plotpointchapterId>;
  addPlotpointchapters!: Sequelize.HasManyAddAssociationsMixin<plotpointchapter, plotpointchapterId>;
  createPlotpointchapter!: Sequelize.HasManyCreateAssociationMixin<plotpointchapter>;
  removePlotpointchapter!: Sequelize.HasManyRemoveAssociationMixin<plotpointchapter, plotpointchapterId>;
  removePlotpointchapters!: Sequelize.HasManyRemoveAssociationsMixin<plotpointchapter, plotpointchapterId>;
  hasPlotpointchapter!: Sequelize.HasManyHasAssociationMixin<plotpointchapter, plotpointchapterId>;
  hasPlotpointchapters!: Sequelize.HasManyHasAssociationsMixin<plotpointchapter, plotpointchapterId>;
  countPlotpointchapters!: Sequelize.HasManyCountAssociationsMixin;
  // chapter belongsTo story via story_id
  story!: story;
  getStory!: Sequelize.BelongsToGetAssociationMixin<story>;
  setStory!: Sequelize.BelongsToSetAssociationMixin<story, storyId>;
  createStory!: Sequelize.BelongsToCreateAssociationMixin<story>;

  static initModel(sequelize: Sequelize.Sequelize): typeof chapter {
    chapter.init({
    story_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'story',
        key: 'story_id'
      }
    },
    chapter_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    content_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "chapter_content_url_unique"
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'chapter',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "chapter_id" },
        ]
      },
      {
        name: "chapter_story_id_order_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "story_id" },
          { name: "order" },
        ]
      },
      {
        name: "chapter_content_url_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "content_url" },
        ]
      },
    ]
  });
  return chapter;
  }
}
