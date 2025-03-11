import { UiSchema } from "@rjsf/utils";
import { JSONSchema7 } from "json-schema";

export const configurationSchema: JSONSchema7 = {
  properties: {
    postingscsv: {
      type: "string",
      title: "Job Postings CSV",
      default: String.raw`title,location,team,link
Working Student,Berlin,Customer Success,https://staffbase.com
Principal Solutions Engineer,New York,Solutions,https://staffbase.com
Associate Customer Care Agent,New York,Customer Care,https://staffbase.com
Senior Legal Director,Vancouver,Legal,https://staffbase.com`,
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
  postingscsv: {
    "ui:widget": "textarea",
    "ui:help":
      "Enter rows in CSV format, including header: title,location,team,link",
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