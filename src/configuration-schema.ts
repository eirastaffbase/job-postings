/*!
 * Copyright 2024, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/-licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { UiSchema } from "@rjsf/utils";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://rjsf-team.github.io/react-jsonschema-form/docs/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  properties: {
    postingscsv: {
      type: "string",
      title: "Job Postings CSV",
      default: `title,location,team,link
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