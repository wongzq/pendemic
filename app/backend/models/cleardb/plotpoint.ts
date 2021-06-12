import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { chapter, chapterId } from './chapter';
import type { character, characterId } from './character';
import type { plot, plotId } from './plot';
import type { plotpointchapter, plotpointchapterId } from './plotpointchapter';
import type { plotpointcharacter, plotpointcharacterId } from './plotpointcharacter';
import type { plotpointsetting, plotpointsettingId } from './plotpointsetting';
import type { setting, settingId } from './setting';
import type { story, storyId } from './story';

export interface plotpointAttributes {
  story_id: number;
  plot_id: number;
  plotpoint_id: number;
  name: string;
  description?: string;
  order: number;
}

export type plotpointPk = "plotpoint_id";
export type plotpointId = plotpoint[plotpointPk];
export type plotpointCreationAttributes = Optional<plotpointAttributes, plotpointPk>;

export class plotpoint extends Model<plotpointAttributes, plotpointCreationAttributes> implements plotpointAttributes {
  story_id!: number;
  plot_id!: number;
  plotpoint_id!: number;
  name!: string;
  description?: string;
  order!: number;

  // plotpoint belongsTo plot via plot_id
  plot!: plot;
  getPlot!: Sequelize.BelongsToGetAssociationMixin<plot>;
  setPlot!: Sequelize.BelongsToSetAssociationMixin<plot, plotId>;
  createPlot!: Sequelize.BelongsToCreateAssociationMixin<plot>;
  // plotpoint belongsToMany chapter via plotpoint_id and chapter_id
  chapter_id_chapters!: chapter[];
  getChapter_id_chapters!: Sequelize.BelongsToManyGetAssociationsMixin<chapter>;
  setChapter_id_chapters!: Sequelize.BelongsToManySetAssociationsMixin<chapter, chapterId>;
  addChapter_id_chapter!: Sequelize.BelongsToManyAddAssociationMixin<chapter, chapterId>;
  addChapter_id_chapters!: Sequelize.BelongsToManyAddAssociationsMixin<chapter, chapterId>;
  createChapter_id_chapter!: Sequelize.BelongsToManyCreateAssociationMixin<chapter>;
  removeChapter_id_chapter!: Sequelize.BelongsToManyRemoveAssociationMixin<chapter, chapterId>;
  removeChapter_id_chapters!: Sequelize.BelongsToManyRemoveAssociationsMixin<chapter, chapterId>;
  hasChapter_id_chapter!: Sequelize.BelongsToManyHasAssociationMixin<chapter, chapterId>;
  hasChapter_id_chapters!: Sequelize.BelongsToManyHasAssociationsMixin<chapter, chapterId>;
  countChapter_id_chapters!: Sequelize.BelongsToManyCountAssociationsMixin;
  // plotpoint belongsToMany character via plotpoint_id and character_id
  character_id_characters!: character[];
  getCharacter_id_characters!: Sequelize.BelongsToManyGetAssociationsMixin<character>;
  setCharacter_id_characters!: Sequelize.BelongsToManySetAssociationsMixin<character, characterId>;
  addCharacter_id_character!: Sequelize.BelongsToManyAddAssociationMixin<character, characterId>;
  addCharacter_id_characters!: Sequelize.BelongsToManyAddAssociationsMixin<character, characterId>;
  createCharacter_id_character!: Sequelize.BelongsToManyCreateAssociationMixin<character>;
  removeCharacter_id_character!: Sequelize.BelongsToManyRemoveAssociationMixin<character, characterId>;
  removeCharacter_id_characters!: Sequelize.BelongsToManyRemoveAssociationsMixin<character, characterId>;
  hasCharacter_id_character!: Sequelize.BelongsToManyHasAssociationMixin<character, characterId>;
  hasCharacter_id_characters!: Sequelize.BelongsToManyHasAssociationsMixin<character, characterId>;
  countCharacter_id_characters!: Sequelize.BelongsToManyCountAssociationsMixin;
  // plotpoint hasMany plotpointchapter via plotpoint_id
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
  // plotpoint hasMany plotpointcharacter via plotpoint_id
  plotpointcharacters!: plotpointcharacter[];
  getPlotpointcharacters!: Sequelize.HasManyGetAssociationsMixin<plotpointcharacter>;
  setPlotpointcharacters!: Sequelize.HasManySetAssociationsMixin<plotpointcharacter, plotpointcharacterId>;
  addPlotpointcharacter!: Sequelize.HasManyAddAssociationMixin<plotpointcharacter, plotpointcharacterId>;
  addPlotpointcharacters!: Sequelize.HasManyAddAssociationsMixin<plotpointcharacter, plotpointcharacterId>;
  createPlotpointcharacter!: Sequelize.HasManyCreateAssociationMixin<plotpointcharacter>;
  removePlotpointcharacter!: Sequelize.HasManyRemoveAssociationMixin<plotpointcharacter, plotpointcharacterId>;
  removePlotpointcharacters!: Sequelize.HasManyRemoveAssociationsMixin<plotpointcharacter, plotpointcharacterId>;
  hasPlotpointcharacter!: Sequelize.HasManyHasAssociationMixin<plotpointcharacter, plotpointcharacterId>;
  hasPlotpointcharacters!: Sequelize.HasManyHasAssociationsMixin<plotpointcharacter, plotpointcharacterId>;
  countPlotpointcharacters!: Sequelize.HasManyCountAssociationsMixin;
  // plotpoint hasMany plotpointsetting via plotpoint_id
  plotpointsettings!: plotpointsetting[];
  getPlotpointsettings!: Sequelize.HasManyGetAssociationsMixin<plotpointsetting>;
  setPlotpointsettings!: Sequelize.HasManySetAssociationsMixin<plotpointsetting, plotpointsettingId>;
  addPlotpointsetting!: Sequelize.HasManyAddAssociationMixin<plotpointsetting, plotpointsettingId>;
  addPlotpointsettings!: Sequelize.HasManyAddAssociationsMixin<plotpointsetting, plotpointsettingId>;
  createPlotpointsetting!: Sequelize.HasManyCreateAssociationMixin<plotpointsetting>;
  removePlotpointsetting!: Sequelize.HasManyRemoveAssociationMixin<plotpointsetting, plotpointsettingId>;
  removePlotpointsettings!: Sequelize.HasManyRemoveAssociationsMixin<plotpointsetting, plotpointsettingId>;
  hasPlotpointsetting!: Sequelize.HasManyHasAssociationMixin<plotpointsetting, plotpointsettingId>;
  hasPlotpointsettings!: Sequelize.HasManyHasAssociationsMixin<plotpointsetting, plotpointsettingId>;
  countPlotpointsettings!: Sequelize.HasManyCountAssociationsMixin;
  // plotpoint belongsToMany setting via plotpoint_id and setting_id
  setting_id_settings!: setting[];
  getSetting_id_settings!: Sequelize.BelongsToManyGetAssociationsMixin<setting>;
  setSetting_id_settings!: Sequelize.BelongsToManySetAssociationsMixin<setting, settingId>;
  addSetting_id_setting!: Sequelize.BelongsToManyAddAssociationMixin<setting, settingId>;
  addSetting_id_settings!: Sequelize.BelongsToManyAddAssociationsMixin<setting, settingId>;
  createSetting_id_setting!: Sequelize.BelongsToManyCreateAssociationMixin<setting>;
  removeSetting_id_setting!: Sequelize.BelongsToManyRemoveAssociationMixin<setting, settingId>;
  removeSetting_id_settings!: Sequelize.BelongsToManyRemoveAssociationsMixin<setting, settingId>;
  hasSetting_id_setting!: Sequelize.BelongsToManyHasAssociationMixin<setting, settingId>;
  hasSetting_id_settings!: Sequelize.BelongsToManyHasAssociationsMixin<setting, settingId>;
  countSetting_id_settings!: Sequelize.BelongsToManyCountAssociationsMixin;
  // plotpoint belongsTo story via story_id
  story!: story;
  getStory!: Sequelize.BelongsToGetAssociationMixin<story>;
  setStory!: Sequelize.BelongsToSetAssociationMixin<story, storyId>;
  createStory!: Sequelize.BelongsToCreateAssociationMixin<story>;

  static initModel(sequelize: Sequelize.Sequelize): typeof plotpoint {
    plotpoint.init({
    story_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'story',
        key: 'story_id'
      }
    },
    plot_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'plot',
        key: 'plot_id'
      }
    },
    plotpoint_id: {
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
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'plotpoint',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plotpoint_id" },
        ]
      },
      {
        name: "plotpoint_story_id_order_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "story_id" },
          { name: "order" },
        ]
      },
      {
        name: "plotpoint_plot_id_name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plot_id" },
          { name: "name" },
        ]
      },
    ]
  });
  return plotpoint;
  }
}
