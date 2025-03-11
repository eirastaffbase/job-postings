import { UiSchema } from "@rjsf/utils";
import { JSONSchema7 } from "json-schema";

export const configurationSchema: JSONSchema7 = {
  properties: {
    postingsjson: {
      type: "string",
      title: "Job Items JSON String",
      default: `[
        {
          "title": "Working Student",
          "location": "Berlin",
          "team": "Customer Success",
          "link": "https://staffbase.com"
        },
        {
          "title": "Principal Solutions Engineer",
          "location": "New York",
          "team": "Solutions",
          "link": "https://staffbase.com"
        },
        {
          "title": "Associate Customer Care Agent",
          "location": "New York",
          "team": "Customer Care",
          "link": "https://staffbase.com"
        },
        {
          "title": "Senior Legal Director",
          "location": "Toronto",
          "team": "Legal",
          "link": "https://staffbase.com"
        }
      ]`,
    },
    buttontext: {
      type: "string",
      title: "Button Text",
      default: "Read more",
    },
    buttoncolor: {
      type: "string",
      title: "Button Color",
    },
    lefticon: {
      type: "string",
      title: "Left Icon",
      default: "FaMapMarkerAlt",
      enum: [
        "FaMapMarkerAlt",
        "FaBriefcase",
        "FaBuilding",
        "FaUser",
      ],
    },
    righticon: {
      type: "string",
      title: "Right Icon",
      default: "FaBriefcase",
      enum: [
        "FaBriefcase",
        "FaMapMarkerAlt",
        "FaBuilding",
        "FaUser",
      ],
    },
  },
};

export const uiSchema: UiSchema = {
  postingsjson: {
    "ui:help": "Enter job postings as a JSON array of objects.",
  },
  buttontext: {
    "ui:help": "Text to display on the button (e.g. 'Read more'). If left empty, no button will appear.",
  },
  buttoncolor: {
    "ui:help": "Button color in hex format (e.g. #ff0000, or just 'blue')",
  },
  lefticon: {
    "ui:help": "Left icon to use for the location/first item",
    "ui:enumNames": [
      "Map Marker",
      "Briefcase",
      "Building",
      "User",
    ],
  },
  righticon: {
    "ui:help": "Right icon to use for the role/second item",
    "ui:enumNames": [
      "Briefcase",
      "Map Marker",
      "Building",
      "User",
    ],
  },
};