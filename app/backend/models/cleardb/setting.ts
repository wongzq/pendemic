import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { plotpoint, plotpointId } from './plotpoint';
import type { plotpointsetting, plotpointsettingId } from './plotpointsetting';
import type { story, storyId } from './story';

export interface settingAttributes {
  story_id: number;
  setting_id: number;
  name: string;
  description?: string;
  order: number;
}

export type settingPk = "setting_id";
export type settingId = setting[settingPk];
export type settingCreationAttributes = Optional<settingAttributes, settingPk>;

export class setting extends Model<settingAttributes, settingCreationAttributes> implements settingAttributes {
  story_id!: number;
  setting_id!: number;
  name!: string;
  description?: string;
  order!: number;

  // setting belongsToMany plotpoint via setting_id and plotpoint_id
  plotpoint_id_plotpoint_plotpointsettings!: plotpoint[];
  getPlotpoint_id_plotpoint_plotpointsettings!: Sequelize.BelongsToManyGetAssociationsMixin<plotpoint>;
  setPlotpoint_id_plotpoint_plotpointsettings!: Sequelize.BelongsToManySetAssociationsMixin<plotpoint, plotpointId>;
  addPlotpoint_id_plotpoint_plotpointsetting!: Sequelize.BelongsToManyAddAssociationMixin<plotpoint, plotpointId>;
  addPlotpoint_id_plotpoint_plotpointsettings!: Sequelize.BelongsToManyAddAssociationsMixin<plotpoint, plotpointId>;
  createPlotpoint_id_plotpoint_plotpointsetting!: Sequelize.BelongsToManyCreateAssociationMixin<plotpoint>;
  removePlotpoint_id_plotpoint_plotpointsetting!: Sequelize.BelongsToManyRemoveAssociationMixin<plotpoint, plotpointId>;
  removePlotpoint_id_plotpoint_plotpointsettings!: Sequelize.BelongsToManyRemoveAssociationsMixin<plotpoint, plotpointId>;
  hasPlotpoint_id_plotpoint_plotpointsetting!: Sequelize.BelongsToManyHasAssociationMixin<plotpoint, plotpointId>;
  hasPlotpoint_id_plotpoint_plotpointsettings!: Sequelize.BelongsToManyHasAssociationsMixin<plotpoint, plotpointId>;
  countPlotpoint_id_plotpoint_plotpointsettings!: Sequelize.BelongsToManyCountAssociationsMixin;
  // setting hasMany plotpointsetting via setting_id
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
  // setting belongsTo story via story_id
  story!: story;
  getStory!: Sequelize.BelongsToGetAssociationMixin<story>;
  setStory!: Sequelize.BelongsToSetAssociationMixin<story, storyId>;
  createStory!: Sequelize.BelongsToCreateAssociationMixin<story>;

  static initModel(sequelize: Sequelize.Sequelize): typeof setting {
    setting.init({
    story_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'story',
        key: 'story_id'
      }
    },
    setting_id: {
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
    tableName: 'setting',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "setting_id" },
        ]
      },
      {
        name: "setting_story_id_name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "story_id" },
          { name: "name" },
        ]
      },
    ]
  });
  return setting;
  }
}
