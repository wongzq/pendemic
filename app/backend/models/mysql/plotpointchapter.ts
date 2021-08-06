import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { chapter, chapterId } from './chapter';
import type { plotpoint, plotpointId } from './plotpoint';

export interface plotpointchapterAttributes {
  plotpoint_id: number;
  chapter_id: number;
}

export type plotpointchapterPk = "plotpoint_id" | "chapter_id";
export type plotpointchapterId = plotpointchapter[plotpointchapterPk];
export type plotpointchapterCreationAttributes = Optional<plotpointchapterAttributes, plotpointchapterPk>;

export class plotpointchapter extends Model<plotpointchapterAttributes, plotpointchapterCreationAttributes> implements plotpointchapterAttributes {
  plotpoint_id!: number;
  chapter_id!: number;

  // plotpointchapter belongsTo chapter via chapter_id
  chapter!: chapter;
  getChapter!: Sequelize.BelongsToGetAssociationMixin<chapter>;
  setChapter!: Sequelize.BelongsToSetAssociationMixin<chapter, chapterId>;
  createChapter!: Sequelize.BelongsToCreateAssociationMixin<chapter>;
  // plotpointchapter belongsTo plotpoint via plotpoint_id
  plotpoint!: plotpoint;
  getPlotpoint!: Sequelize.BelongsToGetAssociationMixin<plotpoint>;
  setPlotpoint!: Sequelize.BelongsToSetAssociationMixin<plotpoint, plotpointId>;
  createPlotpoint!: Sequelize.BelongsToCreateAssociationMixin<plotpoint>;

  static initModel(sequelize: Sequelize.Sequelize): typeof plotpointchapter {
    plotpointchapter.init({
    plotpoint_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'plotpoint',
        key: 'plotpoint_id'
      }
    },
    chapter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'chapter',
        key: 'chapter_id'
      }
    }
  }, {
    sequelize,
    tableName: 'plotpointchapter',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plotpoint_id" },
          { name: "chapter_id" },
        ]
      },
      {
        name: "chapter_id",
        using: "BTREE",
        fields: [
          { name: "chapter_id" },
        ]
      },
    ]
  });
  return plotpointchapter;
  }
}
