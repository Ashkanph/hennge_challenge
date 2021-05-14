import { useState } from "react";
import styled from "styled-components";

import SearchBar from "../components/results/searchBar";
import ResultsContainer from "../components/results/resultsContainer";

const ResultsEl = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 2rem 5rem;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.onBackground};
`;

export default function Results() {
    const currentEpochTime = () => Math.floor(new Date().getTime() / 1000);
    const [dateRange, setDateRange] = useState(new Array(2).fill(currentEpochTime()));
    const epochToDate = et => new Date(et * 1000);

    return (
        <ResultsEl>
            <SearchBar
                rangeChanged={setDateRange}
                defaultDateRange={[epochToDate(dateRange[0]), epochToDate(dateRange[1])]}
            />
            <ResultsContainer dateRange={dateRange} />
        </ResultsEl>
    );
}
