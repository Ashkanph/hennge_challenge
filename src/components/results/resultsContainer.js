import { useMemo } from "react";
import styled from "styled-components";

import ResultsCount from "./resultsCount";
import LogoContainer from "./logoContainer";
import resultsMockData from "../../static/mockData";
import ResultsTable from "./resultsTable";

const ResultsContainerEl = styled.div`
    width: inherit;

    .logo-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .logo {
            width: 170px;
        }
    }

    .results-container {
    }
`;

export default function ResultsContainer(props) {
    const { dateRange } = props;
    const filteredSortedData = useMemo(() => {
        return resultsMockData
            .filter(item => item.date <= dateRange[1] && item.date >= dateRange[0])
            .sort((a, b) => a?.date < b?.date);
    }, [dateRange]);
    const count = useMemo(() => filteredSortedData.length, [filteredSortedData]);

    return (
        <ResultsContainerEl>
            <ResultsCount count={count} />
            <LogoContainer count={count} />
            <ResultsTable data={filteredSortedData} />
        </ResultsContainerEl>
    );
}
