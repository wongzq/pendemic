import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { plotpoint, plotpointId } from './plotpoint';
import type { setting, settingId } from './setting';

export interface plotpointsettingAttributes {
  plotpoint_id: number;
  setting_id: number;
}

export type plotpointsettingPk = "plotpoint_id" | "setting_id";
export type plotpointsettingId = plotpointsetting[plotpointsettingPk];
export type plotpointsettingCreationAttributes = Optional<plotpointsettingAttributes, plotpointsettingPk>;

export class plotpointsetting extends Model<plotpointsettingAttributes, plotpointsettingCreationAttributes> implements plotpointsettingAttributes {
  plotpoint_id!: number;
  setting_id!: number;

  // plotpointsetting belongsTo plotpoint via plotpoint_id
  plotpoint!: plotpoint;
  getPlotpoint!: Sequelize.BelongsToGetAssociationMixin<plotpoint>;
  setPlotpoint!: Sequelize.BelongsToSetAssociationMixin<plotpoint, plotpointId>;
  createPlotpoint!: Sequelize.BelongsToCreateAssociationMixin<plotpoint>;
  // plotpointsetting belongsTo setting via setting_id
  setting!: setting;
  getSetting!: Sequelize.BelongsToGetAssociationMixin<setting>;
  setSetting!: Sequelize.BelongsToSetAssociationMixin<setting, settingId>;
  createSetting!: Sequelize.BelongsToCreateAssociationMixin<setting>;

  static initModel(sequelize: Sequelize.Sequelize): typeof plotpointsetting {
    plotpointsetting.init({
    plotpoint_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'plotpoint',
        key: 'plotpoint_id'
      }
    },
    setting_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'setting',
        key: 'setting_id'
      }
    }
  }, {
    sequelize,
    tableName: 'plotpointsetting',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plotpoint_id" },
          { name: "setting_id" },
        ]
      },
      {
        name: "plotpointsetting_setting_id_foreign",
        using: "BTREE",
        fields: [
          { name: "setting_id" },
        ]
      },
    ]
  });
  return plotpointsetting;
  }
}
