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

    @media (max-width: 769px) {
        padding: 2rem 1.5rem;
    }
`;

export default function Results() {
    const [dateRange, setDateRange] = useState([
        new Date("2019/12/31 00:01").getTime() / 1000,
        new Date("2020/1/3 23:59").getTime() / 1000,
    ]);
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
