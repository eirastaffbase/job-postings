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
import React, { ReactElement, useState, useEffect } from "react";
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
  postingsjson: string;
  buttontext: string;
  buttoncolor: string;
  lefticon: string;
  righticon: string;
}

export const JobPostings = ({
  postingsjson,
  buttontext,
  buttoncolor,
  lefticon,
  righticon,
}: JobPostingsProps): ReactElement => {
  const defaultJson = [
    {
      title: "Working Student",
      location: "Berlin",
      team: "Customer Success",
      link: "https://staffbase.com",
    },
    {
      title: "Customer Success Manager",
      location: "Berlin",
      team: "Customer Success",
      link: "https://staffbase.com",
    },
    {
      title: "Associate Customer Care Agent",
      location: "New York",
      team: "Customer Care",
      link: "https://staffbase.com",
    },
    {
      title: "Senior Legal Director",
      location: "Vancouver",
      team: "Legal",
      link: "https://staffbase.com",
    },
  ];

  const [postings, setPostings] = useState(defaultJson);

  useEffect(() => {
    if (postingsjson) {
      if (typeof postingsjson === "string") {
        try {
          setPostings(JSON.parse(postingsjson));
        } catch (error) {
          console.error("Error parsing JSON:", error);
          setPostings(defaultJson);
        }
      } else if (Array.isArray(postingsjson)) {
        setPostings(postingsjson);
      } else {
        setPostings(defaultJson);
      }
    } else {
        setPostings(defaultJson);
    }
  }, [postingsjson, defaultJson]);

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
          <div style={{ flex: 1, minWidth: "60%" }}>
            <div style={{ fontSize: "16px", lineHeight: "normal" }}>
              {p.title}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#555",
                marginTop: "4px",
                display: "flex",
                alignItems: "center",
                lineHeight: "normal",
              }}
            >
              <LeftIcon style={{ marginRight: "5px", marginBottom: "-1px" }} />
              <span style={{ marginRight: "10px" }}>{p.location}</span>
  
              <RightIcon style={{ marginRight: "5px", marginBottom: "-1px" }} />
              {p.team}
            </div>
          </div>
          {buttontext && buttontext.trim() !== "" && (
            <div
              style={{
                marginLeft: window.innerWidth <= 400 ? "5px" : "20px", // Conditional marginLeft
              }}
            >
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
                  display: "inline-block",
                  whiteSpace: "normal",
                  textAlign: "center",
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