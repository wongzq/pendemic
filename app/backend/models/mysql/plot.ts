import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { plotpoint, plotpointId } from './plotpoint';
import type { story, storyId } from './story';

export interface plotAttributes {
  story_id: number;
  plot_id: number;
  name: string;
  description?: string;
  order: number;
}

export type plotPk = "plot_id";
export type plotId = plot[plotPk];
export type plotCreationAttributes = Optional<plotAttributes, plotPk>;

export class plot extends Model<plotAttributes, plotCreationAttributes> implements plotAttributes {
  story_id!: number;
  plot_id!: number;
  name!: string;
  description?: string;
  order!: number;

  // plot hasMany plotpoint via plot_id
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
  // plot belongsTo story via story_id
  story!: story;
  getStory!: Sequelize.BelongsToGetAssociationMixin<story>;
  setStory!: Sequelize.BelongsToSetAssociationMixin<story, storyId>;
  createStory!: Sequelize.BelongsToCreateAssociationMixin<story>;

  static initModel(sequelize: Sequelize.Sequelize): typeof plot {
    plot.init({
    story_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'story',
        key: 'story_id'
      }
    },
    plot_id: {
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
    tableName: 'plot',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plot_id" },
        ]
      },
      {
        name: "plot_index_0",
        using: "BTREE",
        fields: [
          { name: "story_id" },
          { name: "order" },
        ]
      },
    ]
  });
  return plot;
  }
}
