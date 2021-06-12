import type { Sequelize } from "sequelize";
import { chapter } from "./chapter";
import type { chapterAttributes, chapterCreationAttributes } from "./chapter";
import { character } from "./character";
import type {
  characterAttributes,
  characterCreationAttributes,
} from "./character";
import { characterrelationship } from "./characterrelationship";
import type {
  characterrelationshipAttributes,
  characterrelationshipCreationAttributes,
} from "./characterrelationship";
import { plot } from "./plot";
import type { plotAttributes, plotCreationAttributes } from "./plot";
import { plotpoint } from "./plotpoint";
import type {
  plotpointAttributes,
  plotpointCreationAttributes,
} from "./plotpoint";
import { plotpointchapter } from "./plotpointchapter";
import type {
  plotpointchapterAttributes,
  plotpointchapterCreationAttributes,
} from "./plotpointchapter";
import { plotpointcharacter } from "./plotpointcharacter";
import type {
  plotpointcharacterAttributes,
  plotpointcharacterCreationAttributes,
} from "./plotpointcharacter";
import { plotpointsetting } from "./plotpointsetting";
import type {
  plotpointsettingAttributes,
  plotpointsettingCreationAttributes,
} from "./plotpointsetting";
import { setting } from "./setting";
import type { settingAttributes, settingCreationAttributes } from "./setting";
import { story } from "./story";
import type { storyAttributes, storyCreationAttributes } from "./story";
import { writer } from "./writer";
import type { writerAttributes, writerCreationAttributes } from "./writer";

export {
  chapter,
  character,
  characterrelationship,
  plot,
  plotpoint,
  plotpointchapter,
  plotpointcharacter,
  plotpointsetting,
  setting,
  story,
  writer,
};

export type {
  chapterAttributes,
  chapterCreationAttributes,
  characterAttributes,
  characterCreationAttributes,
  characterrelationshipAttributes,
  characterrelationshipCreationAttributes,
  plotAttributes,
  plotCreationAttributes,
  plotpointAttributes,
  plotpointCreationAttributes,
  plotpointchapterAttributes,
  plotpointchapterCreationAttributes,
  plotpointcharacterAttributes,
  plotpointcharacterCreationAttributes,
  plotpointsettingAttributes,
  plotpointsettingCreationAttributes,
  settingAttributes,
  settingCreationAttributes,
  storyAttributes,
  storyCreationAttributes,
  writerAttributes,
  writerCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  chapter.initModel(sequelize);
  character.initModel(sequelize);
  characterrelationship.initModel(sequelize);
  plot.initModel(sequelize);
  plotpoint.initModel(sequelize);
  plotpointchapter.initModel(sequelize);
  plotpointcharacter.initModel(sequelize);
  plotpointsetting.initModel(sequelize);
  setting.initModel(sequelize);
  story.initModel(sequelize);
  writer.initModel(sequelize);

  chapter.belongsToMany(plotpoint, {
    as: "plotpoint_id_plotpoints",
    through: plotpointchapter,
    foreignKey: "chapter_id",
    otherKey: "plotpoint_id",
  });
  character.belongsToMany(character, {
    as: "character_id_2_characters",
    through: characterrelationship,
    foreignKey: "character_id_1",
    otherKey: "character_id_2",
  });
  character.belongsToMany(character, {
    as: "character_id_1_characters",
    through: characterrelationship,
    foreignKey: "character_id_2",
    otherKey: "character_id_1",
  });
  character.belongsToMany(plotpoint, {
    as: "plotpoint_id_plotpoint_plotpointcharacters",
    through: plotpointcharacter,
    foreignKey: "character_id",
    otherKey: "plotpoint_id",
  });
  plotpoint.belongsToMany(chapter, {
    as: "chapter_id_chapters",
    through: plotpointchapter,
    foreignKey: "plotpoint_id",
    otherKey: "chapter_id",
  });
  plotpoint.belongsToMany(character, {
    as: "character_id_characters",
    through: plotpointcharacter,
    foreignKey: "plotpoint_id",
    otherKey: "character_id",
  });
  plotpoint.belongsToMany(setting, {
    as: "setting_id_settings",
    through: plotpointsetting,
    foreignKey: "plotpoint_id",
    otherKey: "setting_id",
  });
  setting.belongsToMany(plotpoint, {
    as: "plotpoint_id_plotpoint_plotpointsettings",
    through: plotpointsetting,
    foreignKey: "setting_id",
    otherKey: "plotpoint_id",
  });
  plotpointchapter.belongsTo(chapter, {
    as: "chapter",
    foreignKey: "chapter_id",
  });
  chapter.hasMany(plotpointchapter, {
    as: "plotpointchapters",
    foreignKey: "chapter_id",
  });
  characterrelationship.belongsTo(character, {
    as: "character_id_1_character",
    foreignKey: "character_id_1",
  });
  character.hasMany(characterrelationship, {
    as: "characterrelationships",
    foreignKey: "character_id_1",
  });
  characterrelationship.belongsTo(character, {
    as: "character_id_2_character",
    foreignKey: "character_id_2",
  });
  character.hasMany(characterrelationship, {
    as: "character_id_2_characterrelationships",
    foreignKey: "character_id_2",
  });
  plotpointcharacter.belongsTo(character, {
    as: "character",
    foreignKey: "character_id",
  });
  character.hasMany(plotpointcharacter, {
    as: "plotpointcharacters",
    foreignKey: "character_id",
  });
  plotpoint.belongsTo(plot, { as: "plot", foreignKey: "plot_id" });
  plot.hasMany(plotpoint, { as: "plotpoints", foreignKey: "plot_id" });
  plotpointchapter.belongsTo(plotpoint, {
    as: "plotpoint",
    foreignKey: "plotpoint_id",
  });
  plotpoint.hasMany(plotpointchapter, {
    as: "plotpointchapters",
    foreignKey: "plotpoint_id",
  });
  plotpointcharacter.belongsTo(plotpoint, {
    as: "plotpoint",
    foreignKey: "plotpoint_id",
  });
  plotpoint.hasMany(plotpointcharacter, {
    as: "plotpointcharacters",
    foreignKey: "plotpoint_id",
  });
  plotpointsetting.belongsTo(plotpoint, {
    as: "plotpoint",
    foreignKey: "plotpoint_id",
  });
  plotpoint.hasMany(plotpointsetting, {
    as: "plotpointsettings",
    foreignKey: "plotpoint_id",
  });
  plotpointsetting.belongsTo(setting, {
    as: "setting",
    foreignKey: "setting_id",
  });
  setting.hasMany(plotpointsetting, {
    as: "plotpointsettings",
    foreignKey: "setting_id",
  });
  chapter.belongsTo(story, { as: "story", foreignKey: "story_id" });
  story.hasMany(chapter, { as: "chapters", foreignKey: "story_id" });
  character.belongsTo(story, { as: "story", foreignKey: "story_id" });
  story.hasMany(character, { as: "characters", foreignKey: "story_id" });
  plot.belongsTo(story, { as: "story", foreignKey: "story_id" });
  story.hasMany(plot, { as: "plots", foreignKey: "story_id" });
  plotpoint.belongsTo(story, { as: "story", foreignKey: "story_id" });
  story.hasMany(plotpoint, { as: "plotpoints", foreignKey: "story_id" });
  setting.belongsTo(story, { as: "story", foreignKey: "story_id" });
  story.hasMany(setting, { as: "settings", foreignKey: "story_id" });
  story.belongsTo(writer, { as: "writer", foreignKey: "writer_id" });
  writer.hasMany(story, { as: "stories", foreignKey: "writer_id" });

  return {
    chapter: chapter,
    character: character,
    characterrelationship: characterrelationship,
    plot: plot,
    plotpoint: plotpoint,
    plotpointchapter: plotpointchapter,
    plotpointcharacter: plotpointcharacter,
    plotpointsetting: plotpointsetting,
    setting: setting,
    story: story,
    writer: writer,
  };
}
