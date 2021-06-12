import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { characterrelationship, characterrelationshipId } from './characterrelationship';
import type { plotpoint, plotpointId } from './plotpoint';
import type { plotpointcharacter, plotpointcharacterId } from './plotpointcharacter';
import type { story, storyId } from './story';

export interface characterAttributes {
  story_id: number;
  character_id: number;
  name: string;
  description?: string;
  order: number;
}

export type characterPk = "character_id";
export type characterId = character[characterPk];
export type characterCreationAttributes = Optional<characterAttributes, characterPk>;

export class character extends Model<characterAttributes, characterCreationAttributes> implements characterAttributes {
  story_id!: number;
  character_id!: number;
  name!: string;
  description?: string;
  order!: number;

  // character belongsToMany character via character_id_1 and character_id_2
  character_id_2_characters!: character[];
  getCharacter_id_2_characters!: Sequelize.BelongsToManyGetAssociationsMixin<character>;
  setCharacter_id_2_characters!: Sequelize.BelongsToManySetAssociationsMixin<character, characterId>;
  addCharacter_id_2_character!: Sequelize.BelongsToManyAddAssociationMixin<character, characterId>;
  addCharacter_id_2_characters!: Sequelize.BelongsToManyAddAssociationsMixin<character, characterId>;
  createCharacter_id_2_character!: Sequelize.BelongsToManyCreateAssociationMixin<character>;
  removeCharacter_id_2_character!: Sequelize.BelongsToManyRemoveAssociationMixin<character, characterId>;
  removeCharacter_id_2_characters!: Sequelize.BelongsToManyRemoveAssociationsMixin<character, characterId>;
  hasCharacter_id_2_character!: Sequelize.BelongsToManyHasAssociationMixin<character, characterId>;
  hasCharacter_id_2_characters!: Sequelize.BelongsToManyHasAssociationsMixin<character, characterId>;
  countCharacter_id_2_characters!: Sequelize.BelongsToManyCountAssociationsMixin;
  // character belongsToMany character via character_id_2 and character_id_1
  character_id_1_characters!: character[];
  getCharacter_id_1_characters!: Sequelize.BelongsToManyGetAssociationsMixin<character>;
  setCharacter_id_1_characters!: Sequelize.BelongsToManySetAssociationsMixin<character, characterId>;
  addCharacter_id_1_character!: Sequelize.BelongsToManyAddAssociationMixin<character, characterId>;
  addCharacter_id_1_characters!: Sequelize.BelongsToManyAddAssociationsMixin<character, characterId>;
  createCharacter_id_1_character!: Sequelize.BelongsToManyCreateAssociationMixin<character>;
  removeCharacter_id_1_character!: Sequelize.BelongsToManyRemoveAssociationMixin<character, characterId>;
  removeCharacter_id_1_characters!: Sequelize.BelongsToManyRemoveAssociationsMixin<character, characterId>;
  hasCharacter_id_1_character!: Sequelize.BelongsToManyHasAssociationMixin<character, characterId>;
  hasCharacter_id_1_characters!: Sequelize.BelongsToManyHasAssociationsMixin<character, characterId>;
  countCharacter_id_1_characters!: Sequelize.BelongsToManyCountAssociationsMixin;
  // character hasMany characterrelationship via character_id_1
  characterrelationships!: characterrelationship[];
  getCharacterrelationships!: Sequelize.HasManyGetAssociationsMixin<characterrelationship>;
  setCharacterrelationships!: Sequelize.HasManySetAssociationsMixin<characterrelationship, characterrelationshipId>;
  addCharacterrelationship!: Sequelize.HasManyAddAssociationMixin<characterrelationship, characterrelationshipId>;
  addCharacterrelationships!: Sequelize.HasManyAddAssociationsMixin<characterrelationship, characterrelationshipId>;
  createCharacterrelationship!: Sequelize.HasManyCreateAssociationMixin<characterrelationship>;
  removeCharacterrelationship!: Sequelize.HasManyRemoveAssociationMixin<characterrelationship, characterrelationshipId>;
  removeCharacterrelationships!: Sequelize.HasManyRemoveAssociationsMixin<characterrelationship, characterrelationshipId>;
  hasCharacterrelationship!: Sequelize.HasManyHasAssociationMixin<characterrelationship, characterrelationshipId>;
  hasCharacterrelationships!: Sequelize.HasManyHasAssociationsMixin<characterrelationship, characterrelationshipId>;
  countCharacterrelationships!: Sequelize.HasManyCountAssociationsMixin;
  // character hasMany characterrelationship via character_id_2
  character_id_2_characterrelationships!: characterrelationship[];
  getCharacter_id_2_characterrelationships!: Sequelize.HasManyGetAssociationsMixin<characterrelationship>;
  setCharacter_id_2_characterrelationships!: Sequelize.HasManySetAssociationsMixin<characterrelationship, characterrelationshipId>;
  addCharacter_id_2_characterrelationship!: Sequelize.HasManyAddAssociationMixin<characterrelationship, characterrelationshipId>;
  addCharacter_id_2_characterrelationships!: Sequelize.HasManyAddAssociationsMixin<characterrelationship, characterrelationshipId>;
  createCharacter_id_2_characterrelationship!: Sequelize.HasManyCreateAssociationMixin<characterrelationship>;
  removeCharacter_id_2_characterrelationship!: Sequelize.HasManyRemoveAssociationMixin<characterrelationship, characterrelationshipId>;
  removeCharacter_id_2_characterrelationships!: Sequelize.HasManyRemoveAssociationsMixin<characterrelationship, characterrelationshipId>;
  hasCharacter_id_2_characterrelationship!: Sequelize.HasManyHasAssociationMixin<characterrelationship, characterrelationshipId>;
  hasCharacter_id_2_characterrelationships!: Sequelize.HasManyHasAssociationsMixin<characterrelationship, characterrelationshipId>;
  countCharacter_id_2_characterrelationships!: Sequelize.HasManyCountAssociationsMixin;
  // character belongsToMany plotpoint via character_id and plotpoint_id
  plotpoint_id_plotpoint_plotpointcharacters!: plotpoint[];
  getPlotpoint_id_plotpoint_plotpointcharacters!: Sequelize.BelongsToManyGetAssociationsMixin<plotpoint>;
  setPlotpoint_id_plotpoint_plotpointcharacters!: Sequelize.BelongsToManySetAssociationsMixin<plotpoint, plotpointId>;
  addPlotpoint_id_plotpoint_plotpointcharacter!: Sequelize.BelongsToManyAddAssociationMixin<plotpoint, plotpointId>;
  addPlotpoint_id_plotpoint_plotpointcharacters!: Sequelize.BelongsToManyAddAssociationsMixin<plotpoint, plotpointId>;
  createPlotpoint_id_plotpoint_plotpointcharacter!: Sequelize.BelongsToManyCreateAssociationMixin<plotpoint>;
  removePlotpoint_id_plotpoint_plotpointcharacter!: Sequelize.BelongsToManyRemoveAssociationMixin<plotpoint, plotpointId>;
  removePlotpoint_id_plotpoint_plotpointcharacters!: Sequelize.BelongsToManyRemoveAssociationsMixin<plotpoint, plotpointId>;
  hasPlotpoint_id_plotpoint_plotpointcharacter!: Sequelize.BelongsToManyHasAssociationMixin<plotpoint, plotpointId>;
  hasPlotpoint_id_plotpoint_plotpointcharacters!: Sequelize.BelongsToManyHasAssociationsMixin<plotpoint, plotpointId>;
  countPlotpoint_id_plotpoint_plotpointcharacters!: Sequelize.BelongsToManyCountAssociationsMixin;
  // character hasMany plotpointcharacter via character_id
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
  // character belongsTo story via story_id
  story!: story;
  getStory!: Sequelize.BelongsToGetAssociationMixin<story>;
  setStory!: Sequelize.BelongsToSetAssociationMixin<story, storyId>;
  createStory!: Sequelize.BelongsToCreateAssociationMixin<story>;

  static initModel(sequelize: Sequelize.Sequelize): typeof character {
    character.init({
    story_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'story',
        key: 'story_id'
      }
    },
    character_id: {
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
    tableName: 'character',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "character_id" },
        ]
      },
      {
        name: "character_story_id_order_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "story_id" },
          { name: "order" },
        ]
      },
      {
        name: "character_story_id_name_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "story_id" },
          { name: "name" },
        ]
      },
    ]
  });
  return character;
  }
}
