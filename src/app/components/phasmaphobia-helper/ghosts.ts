import {GhostType} from "./ghost-type.model";
import {
  DOTS_PROJECTOR,
  EMF_LEVEL_5,
  FINGERPRINTS,
  FREEZING_TEMPERATURE,
  GHOST_ORBS,
  GHOST_WRITING,
  SPIRIT_BOX
} from "./evidence";

export const SPIRIT: GhostType = {
  name: "Spirit",
  primaryEvidence: [
    EMF_LEVEL_5,
    GHOST_WRITING,
    SPIRIT_BOX,
  ],
  secondaryEvidence: [
    "smudge sticks stop attacks for a long time",
  ],
};

export const WRAITH: GhostType = {
  name: "Wraith",
  primaryEvidence: [
    EMF_LEVEL_5,
    SPIRIT_BOX,
    DOTS_PROJECTOR,
  ],
  secondaryEvidence: [
    "flying, no footprints",
    "toxic reaction to salt",
    "travelling through walls",
  ],
};

export const PHANTOM: GhostType = {
  name: "Phantom",
  primaryEvidence: [
    FINGERPRINTS,
    SPIRIT_BOX,
    DOTS_PROJECTOR,
  ],
  secondaryEvidence: [
    "looking at the ghost drops sanity considerably",
    "taking a photo makes the ghost temporarily disappear",
    "summoned by a Ouija Board",
    "possesses the living",
  ],
};

export const POLTERGEIST: GhostType = {
  name: "Poltergeist",
  primaryEvidence: [
    FINGERPRINTS,
    SPIRIT_BOX,
    GHOST_WRITING,
  ],
  secondaryEvidence: [
    "throws multiple objects at once",
  ],
};

export const BANSHEE: GhostType = {
  name: "Banshee",
  primaryEvidence: [
    FINGERPRINTS,
    GHOST_ORBS,
    DOTS_PROJECTOR,
  ],
  secondaryEvidence: [
    "targets and hunts one person at a time",
    "scared off easily by the Crucifix",
  ],
};

export const JINN: GhostType = {
  name: "Jinn",
  primaryEvidence: [
    EMF_LEVEL_5,
    FINGERPRINTS,
    FREEZING_TEMPERATURE,
  ],
  secondaryEvidence: [
    "territorial ghost that attacks when threatened",
    "travels fast when victim is far away",
    "turning off the locations power source slows down ghost movement",
  ],
};

export const MARE: GhostType = {
  name: "Mare",
  primaryEvidence: [
    GHOST_ORBS,
    GHOST_WRITING,
    SPIRIT_BOX,
  ],
  secondaryEvidence: [
    "most powerful in the dark",
    "increased chance of an attack in the dark",
    "lower chance of an attack when lights are on",
  ],
};

export const REVENANT: GhostType = {
  name: "Revenant",
  primaryEvidence: [
    FREEZING_TEMPERATURE,
    GHOST_ORBS,
    GHOST_WRITING,
  ],
  secondaryEvidence: [
    "travels at significantly high speeds when hunting",
    "hiding slows the ghost significantly",
  ],
};

export const SHADE: GhostType = {
  name: "Shade",
  primaryEvidence: [
    EMF_LEVEL_5,
    FREEZING_TEMPERATURE,
    GHOST_WRITING,
  ],
  secondaryEvidence: [
    "shy ghost with no activity/hunting when multiple people are nearby",
  ],
};

export const DEMON: GhostType = {
  name: "Demon",
  primaryEvidence: [
    FINGERPRINTS,
    FREEZING_TEMPERATURE,
    GHOST_WRITING,
  ],
  secondaryEvidence: [
    "attacks often and without reason",
    "sanity is not lowered when asking successful Ouija Board questions",
  ],
};

export const YUREI: GhostType = {
  name: "Yurei",
  primaryEvidence: [
    FREEZING_TEMPERATURE,
    GHOST_ORBS,
    DOTS_PROJECTOR,
  ],
  secondaryEvidence: [
    "reduces sanity more quickly",
    "smudging the room will stop it from wandering around for a long time",
  ],
};

export const GORYO: GhostType = {
  name: "Goryo",
  primaryEvidence: [
    EMF_LEVEL_5,
    FINGERPRINTS,
    DOTS_PROJECTOR,
  ],
  secondaryEvidence: [
    "only visible through the video camera",
    "rarely seen far away from their place of death",
  ],
};

export const MYLING: GhostType = {
  name: "Myling",
  primaryEvidence: [
    EMF_LEVEL_5,
    FINGERPRINTS,
    GHOST_WRITING
  ],
  secondaryEvidence: [
    "makes paranormal sounds",
    "quieter when hunting",
  ],
};

export const ONI: GhostType = {
  name: "Oni",
  primaryEvidence: [
    EMF_LEVEL_5,
    FREEZING_TEMPERATURE,
    DOTS_PROJECTOR,
  ],
  secondaryEvidence: [
    "objects moved at great speeds",
    "more active when people are nearby",
  ],
};

export const YOKAI: GhostType = {
  name: "Yokai",
  primaryEvidence: [
    GHOST_ORBS,
    SPIRIT_BOX,
    DOTS_PROJECTOR,
  ],
  secondaryEvidence: [
    "attacks more often when players talk nearby",
    "while hunting, can only hear nearby voices"
  ],
};

export const HANTU: GhostType = {
  name: "Hantu",
  primaryEvidence: [
    FINGERPRINTS,
    FREEZING_TEMPERATURE,
    GHOST_ORBS,
  ],
  secondaryEvidence: [
    "moves faster in colder areas, slower in warmer areas"
  ],
};

export const ONRYO: GhostType = {
  name: "Onryo",
  primaryEvidence: [
    SPIRIT_BOX,
    GHOST_ORBS,
    FREEZING_TEMPERATURE,
  ],
  secondaryEvidence: [
  ],
};

export const THE_TWINS: GhostType = {
  name: "The Twins",
  primaryEvidence: [
    EMF_LEVEL_5,
    SPIRIT_BOX,
    FREEZING_TEMPERATURE,
  ],
  secondaryEvidence: [
  ],
};

export const RAIJU: GhostType = {
  name: "Raiju",
  primaryEvidence: [
    EMF_LEVEL_5,
    GHOST_ORBS,
    DOTS_PROJECTOR,
  ],
  secondaryEvidence: [
  ],
};

export const OBAKE: GhostType = {
  name: "Obake",
  primaryEvidence: [
    EMF_LEVEL_5,
    FINGERPRINTS,
    GHOST_ORBS,
  ],
  secondaryEvidence: [
  ],
};

export const GHOST_TYPES: GhostType[] = [
  SPIRIT,
  ONI,
  YUREI,
  DEMON,
  SHADE,
  REVENANT,
  MARE,
  JINN,
  BANSHEE,
  POLTERGEIST,
  PHANTOM,
  WRAITH,
  YOKAI,
  HANTU,
  GORYO,
  MYLING,
  ONRYO,
  THE_TWINS,
  RAIJU,
  OBAKE,
];
