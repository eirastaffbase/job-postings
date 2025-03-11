import React from "react"
import {screen, render} from "@testing-library/react"

import {JobPostings} from "./job-postings";

describe("JobPostings", () => {
    it("should render the component", () => {
        render(<JobPostings contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
