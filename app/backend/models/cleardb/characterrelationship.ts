import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { character, characterId } from './character';

export interface characterrelationshipAttributes {
  character_id_1: number;
  character_id_2: number;
  relationship_1_to_2: string;
  relationship_2_to_1: string;
}

export type characterrelationshipPk = "character_id_1" | "character_id_2";
export type characterrelationshipId = characterrelationship[characterrelationshipPk];
export type characterrelationshipCreationAttributes = Optional<characterrelationshipAttributes, characterrelationshipPk>;

export class characterrelationship extends Model<characterrelationshipAttributes, characterrelationshipCreationAttributes> implements characterrelationshipAttributes {
  character_id_1!: number;
  character_id_2!: number;
  relationship_1_to_2!: string;
  relationship_2_to_1!: string;

  // characterrelationship belongsTo character via character_id_1
  character_id_1_character!: character;
  getCharacter_id_1_character!: Sequelize.BelongsToGetAssociationMixin<character>;
  setCharacter_id_1_character!: Sequelize.BelongsToSetAssociationMixin<character, characterId>;
  createCharacter_id_1_character!: Sequelize.BelongsToCreateAssociationMixin<character>;
  // characterrelationship belongsTo character via character_id_2
  character_id_2_character!: character;
  getCharacter_id_2_character!: Sequelize.BelongsToGetAssociationMixin<character>;
  setCharacter_id_2_character!: Sequelize.BelongsToSetAssociationMixin<character, characterId>;
  createCharacter_id_2_character!: Sequelize.BelongsToCreateAssociationMixin<character>;

  static initModel(sequelize: Sequelize.Sequelize): typeof characterrelationship {
    characterrelationship.init({
    character_id_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'character',
        key: 'character_id'
      }
    },
    character_id_2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'character',
        key: 'character_id'
      }
    },
    relationship_1_to_2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    relationship_2_to_1: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'characterrelationship',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "character_id_1" },
          { name: "character_id_2" },
        ]
      },
      {
        name: "characterrelationship_character_id_2_foreign",
        using: "BTREE",
        fields: [
          { name: "character_id_2" },
        ]
      },
    ]
  });
  return characterrelationship;
  }
}
