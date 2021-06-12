import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { character, characterId } from './character';
import type { plotpoint, plotpointId } from './plotpoint';

export interface plotpointcharacterAttributes {
  plotpoint_id: number;
  character_id: number;
}

export type plotpointcharacterPk = "plotpoint_id" | "character_id";
export type plotpointcharacterId = plotpointcharacter[plotpointcharacterPk];
export type plotpointcharacterCreationAttributes = Optional<plotpointcharacterAttributes, plotpointcharacterPk>;

export class plotpointcharacter extends Model<plotpointcharacterAttributes, plotpointcharacterCreationAttributes> implements plotpointcharacterAttributes {
  plotpoint_id!: number;
  character_id!: number;

  // plotpointcharacter belongsTo character via character_id
  character!: character;
  getCharacter!: Sequelize.BelongsToGetAssociationMixin<character>;
  setCharacter!: Sequelize.BelongsToSetAssociationMixin<character, characterId>;
  createCharacter!: Sequelize.BelongsToCreateAssociationMixin<character>;
  // plotpointcharacter belongsTo plotpoint via plotpoint_id
  plotpoint!: plotpoint;
  getPlotpoint!: Sequelize.BelongsToGetAssociationMixin<plotpoint>;
  setPlotpoint!: Sequelize.BelongsToSetAssociationMixin<plotpoint, plotpointId>;
  createPlotpoint!: Sequelize.BelongsToCreateAssociationMixin<plotpoint>;

  static initModel(sequelize: Sequelize.Sequelize): typeof plotpointcharacter {
    plotpointcharacter.init({
    plotpoint_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'plotpoint',
        key: 'plotpoint_id'
      }
    },
    character_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'character',
        key: 'character_id'
      }
    }
  }, {
    sequelize,
    tableName: 'plotpointcharacter',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plotpoint_id" },
          { name: "character_id" },
        ]
      },
      {
        name: "plotpointcharacter_character_id_foreign",
        using: "BTREE",
        fields: [
          { name: "character_id" },
        ]
      },
    ]
  });
  return plotpointcharacter;
  }
}
