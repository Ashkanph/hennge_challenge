import styled from "styled-components";
import { FormattedMessage } from "react-intl";

const ResultsCountEl = styled.div`
    border-bottom: 1px solid ${props => props.theme.resultBorder};
    margin-top: 31px;
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.theme.resultsText};

    .results-count {
        font-size: 28px;
        margin: 0 5px;
    }

    @media (max-width: 769px) {
        border-bottom: none;
    }
`;

export default function ResultsCount(props) {
    const { count } = props;

    return (
        <ResultsCountEl>
            <span className="text-capitalize">
                <FormattedMessage id="common.results" />:
            </span>
            <span className="results-count">{count}</span>
            <FormattedMessage id="common.mails" />
        </ResultsCountEl>
    );
}
