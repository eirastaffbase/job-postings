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

import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaBuilding,
  FaUser,
} from "react-icons/fa";

const ICON_MAP: Record<string, React.ComponentType> = {
  FaMapMarkerAlt,
  FaBriefcase,
  FaBuilding,
  FaUser,
};

export interface JobPostingsProps extends BlockAttributes {
  postingscsv: string;
  buttontext: string;
  buttoncolor: string;
  lefticon: string;
  righticon: string;
}

function parsePostings(csv: string) {
  try {
    const lines = csv.trim().split("\n");
    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
    const dataLines = lines.slice(1);

    const parsed = dataLines.map((line) => {
      const fields = line.split(",").map((f) => f.trim());
      return {
        title: fields[0] || "",
        location: fields[1] || "",
        team: fields[2] || "",
        link: fields[3] || "#",
      };
    });
    if (parsed.length === 0) {
      return null;
    }
    return parsed;
  } catch (error) {
    console.error("Error parsing CSV:", error);
    return null;
  }
}

export const JobPostings = ({
  postingscsv,
  buttontext,
  buttoncolor,
  lefticon,
  righticon,
}: JobPostingsProps): ReactElement => {
  const defaultCsv = `title,location,team,link
Working Student,Berlin,Customer Success,https://staffbase.com
Customer Success Manager,Berlin,Customer Success,https://staffbase.com
Associate Customer Care Agent,New York,Customer Care,https://staffbase.com
Senior Legal Director,Vancouver,Legal,https://staffbase.com`;

  const csvToUse = postingscsv !== undefined ? postingscsv : defaultCsv;
  const parsedPostings = parsePostings(csvToUse);

  const postings =
    parsedPostings !== null ? parsedPostings : parsePostings(defaultCsv);

  const LeftIcon = ICON_MAP[lefticon] || FaMapMarkerAlt;
  const RightIcon = ICON_MAP[righticon] || FaBriefcase;

  return (
    <div style={{ maxWidth: 500 }}>
      {postings.map((p, idx) => (
        <div
          key={idx}
          style={{
            borderBottom:
              idx === postings.length - 1 ? "none" : "1px solid #eee",
            padding: "1em 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            lineHeight: "150%",
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "16px" }}>
              {p.title}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#555",
                marginTop: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LeftIcon style={{ marginRight: "5px", marginBottom: "-1px" }} />
              <span style={{ marginRight: "10px" }}>{p.location}</span>

              <RightIcon style={{ marginRight: "5px", marginBottom: "-1px" }} />
              {p.team}
            </div>
          </div>
          {buttontext && buttontext.trim() !== "" && ( // Conditionally render the button
            <div style={{ marginLeft: "20px" }}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background:
                    buttoncolor !== undefined ? buttoncolor : "#009EF6",
                  color: "#fff",
                  padding: "0.5em 1em",
                  borderRadius: 6,
                  textDecoration: "none",
                }}
              >
                {buttontext}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};