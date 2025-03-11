/*!
 * Copyright 2024, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";

export interface JobPostingsProps extends BlockAttributes {
  postingsCsv: string;
}

/**
 * Parse CSV string into an array of objects with
 * { title, location, team, link }
 */
function parsePostings(csv: string) {
  const lines = csv.trim().split("\n");
  // First line is a header: title,location,team,link
  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
  const dataLines = lines.slice(1);

  return dataLines.map((line) => {
    const fields = line.split(",").map((f) => f.trim());
    // In case of missing columns, be defensive:
    return {
      title: fields[0] || "",
      location: fields[1] || "",
      team: fields[2] || "",
      link: fields[3] || "#",
    };
  });
}

export const JobPostings = ({
  postingsCsv,
}: JobPostingsProps): ReactElement => {
  const postings = parsePostings(postingsCsv);
  console.log("postings", postings);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 400 }}>
      {postings.map((p, idx) => (
        <div
          key={idx}
          style={{
            borderBottom: "1px solid #eee",
            padding: "1em 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: "1.1em", fontWeight: "bold" }}>
              {p.title}
            </div>
            <div style={{ color: "#555" }}>
              <span style={{ marginRight: 8 }}>{p.location}</span>
              <span>| {p.team}</span>
            </div>
          </div>
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#007bff",
              color: "#fff",
              padding: "0.5em 1em",
              borderRadius: 4,
              textDecoration: "none",
            }}
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};
