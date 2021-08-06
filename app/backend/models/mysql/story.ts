import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { chapter, chapterId } from './chapter';
import type { character, characterId } from './character';
import type { plot, plotId } from './plot';
import type { plotpoint, plotpointId } from './plotpoint';
import type { setting, settingId } from './setting';
import type { writer, writerId } from './writer';

export interface storyAttributes {
  writer_id: number;
  story_id: number;
  name: string;
  description?: string;
}

export type storyPk = "story_id";
export type storyId = story[storyPk];
export type storyCreationAttributes = Optional<storyAttributes, storyPk>;

export class story extends Model<storyAttributes, storyCreationAttributes> implements storyAttributes {
  writer_id!: number;
  story_id!: number;
  name!: string;
  description?: string;

  // story hasMany chapter via story_id
  chapters!: chapter[];
  getChapters!: Sequelize.HasManyGetAssociationsMixin<chapter>;
  setChapters!: Sequelize.HasManySetAssociationsMixin<chapter, chapterId>;
  addChapter!: Sequelize.HasManyAddAssociationMixin<chapter, chapterId>;
  addChapters!: Sequelize.HasManyAddAssociationsMixin<chapter, chapterId>;
  createChapter!: Sequelize.HasManyCreateAssociationMixin<chapter>;
  removeChapter!: Sequelize.HasManyRemoveAssociationMixin<chapter, chapterId>;
  removeChapters!: Sequelize.HasManyRemoveAssociationsMixin<chapter, chapterId>;
  hasChapter!: Sequelize.HasManyHasAssociationMixin<chapter, chapterId>;
  hasChapters!: Sequelize.HasManyHasAssociationsMixin<chapter, chapterId>;
  countChapters!: Sequelize.HasManyCountAssociationsMixin;
  // story hasMany character via story_id
  characters!: character[];
  getCharacters!: Sequelize.HasManyGetAssociationsMixin<character>;
  setCharacters!: Sequelize.HasManySetAssociationsMixin<character, characterId>;
  addCharacter!: Sequelize.HasManyAddAssociationMixin<character, characterId>;
  addCharacters!: Sequelize.HasManyAddAssociationsMixin<character, characterId>;
  createCharacter!: Sequelize.HasManyCreateAssociationMixin<character>;
  removeCharacter!: Sequelize.HasManyRemoveAssociationMixin<character, characterId>;
  removeCharacters!: Sequelize.HasManyRemoveAssociationsMixin<character, characterId>;
  hasCharacter!: Sequelize.HasManyHasAssociationMixin<character, characterId>;
  hasCharacters!: Sequelize.HasManyHasAssociationsMixin<character, characterId>;
  countCharacters!: Sequelize.HasManyCountAssociationsMixin;
  // story hasMany plot via story_id
  plots!: plot[];
  getPlots!: Sequelize.HasManyGetAssociationsMixin<plot>;
  setPlots!: Sequelize.HasManySetAssociationsMixin<plot, plotId>;
  addPlot!: Sequelize.HasManyAddAssociationMixin<plot, plotId>;
  addPlots!: Sequelize.HasManyAddAssociationsMixin<plot, plotId>;
  createPlot!: Sequelize.HasManyCreateAssociationMixin<plot>;
  removePlot!: Sequelize.HasManyRemoveAssociationMixin<plot, plotId>;
  removePlots!: Sequelize.HasManyRemoveAssociationsMixin<plot, plotId>;
  hasPlot!: Sequelize.HasManyHasAssociationMixin<plot, plotId>;
  hasPlots!: Sequelize.HasManyHasAssociationsMixin<plot, plotId>;
  countPlots!: Sequelize.HasManyCountAssociationsMixin;
  // story hasMany plotpoint via story_id
  plotpoints!: plotpoint[];
  getPlotpoints!: Sequelize.HasManyGetAssociationsMixin<plotpoint>;
  setPlotpoints!: Sequelize.HasManySetAssociationsMixin<plotpoint, plotpointId>;
  addPlotpoint!: Sequelize.HasManyAddAssociationMixin<plotpoint, plotpointId>;
  addPlotpoints!: Sequelize.HasManyAddAssociationsMixin<plotpoint, plotpointId>;
  createPlotpoint!: Sequelize.HasManyCreateAssociationMixin<plotpoint>;
  removePlotpoint!: Sequelize.HasManyRemoveAssociationMixin<plotpoint, plotpointId>;
  removePlotpoints!: Sequelize.HasManyRemoveAssociationsMixin<plotpoint, plotpointId>;
  hasPlotpoint!: Sequelize.HasManyHasAssociationMixin<plotpoint, plotpointId>;
  hasPlotpoints!: Sequelize.HasManyHasAssociationsMixin<plotpoint, plotpointId>;
  countPlotpoints!: Sequelize.HasManyCountAssociationsMixin;
  // story hasMany setting via story_id
  settings!: setting[];
  getSettings!: Sequelize.HasManyGetAssociationsMixin<setting>;
  setSettings!: Sequelize.HasManySetAssociationsMixin<setting, settingId>;
  addSetting!: Sequelize.HasManyAddAssociationMixin<setting, settingId>;
  addSettings!: Sequelize.HasManyAddAssociationsMixin<setting, settingId>;
  createSetting!: Sequelize.HasManyCreateAssociationMixin<setting>;
  removeSetting!: Sequelize.HasManyRemoveAssociationMixin<setting, settingId>;
  removeSettings!: Sequelize.HasManyRemoveAssociationsMixin<setting, settingId>;
  hasSetting!: Sequelize.HasManyHasAssociationMixin<setting, settingId>;
  hasSettings!: Sequelize.HasManyHasAssociationsMixin<setting, settingId>;
  countSettings!: Sequelize.HasManyCountAssociationsMixin;
  // story belongsTo writer via writer_id
  writer!: writer;
  getWriter!: Sequelize.BelongsToGetAssociationMixin<writer>;
  setWriter!: Sequelize.BelongsToSetAssociationMixin<writer, writerId>;
  createWriter!: Sequelize.BelongsToCreateAssociationMixin<writer>;

  static initModel(sequelize: Sequelize.Sequelize): typeof story {
    story.init({
    writer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'writer',
        key: 'writer_id'
      }
    },
    story_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'story',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "story_id" },
        ]
      },
      {
        name: "writer_id",
        using: "BTREE",
        fields: [
          { name: "writer_id" },
        ]
      },
    ]
  });
  return story;
  }
}
