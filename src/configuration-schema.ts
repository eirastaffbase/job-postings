import { UiSchema } from "@rjsf/utils";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 */
export const configurationSchema: JSONSchema7 = {
  properties: {
    postingsCsv: {
      type: "string",
      title: "Job Postings CSV",
      // Provide a default CSV that matches your example in the screenshot:
      default: `title,location,team,link
Working Student,Berlin,Customer Success,https://staffbase.com
Customer Success Manager,Berlin,Customer Success,https://staffbase.com
Associate Customer Care Agent,New York,Customer Care,https://staffbase.com
Senior Legal Director,Commercial,New York,Legal,https://staffbase.com`,
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 */
export const uiSchema: UiSchema = {
  postingsCsv: {
    "ui:widget": "textarea",
    "ui:help": "Enter rows in CSV format: title,location,team,link",
  },
};