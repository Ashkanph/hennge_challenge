import { useState, useEffect } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import sortArrow from "../../static/images/icon_arrow01.svg";
import ResultsTableRow from "./resultsTableRow";

const ResultsTableEl = styled.div`
    width: inherit;

    .mail-info,
    .header {
        font-size: 21px;
        display: grid;
        grid-template-columns: 208px 370px auto 130px;
        height: 50px;
        align-items: center;
        color: ${props => props.theme.onBackground};
        border-bottom: 1px solid ${props => props.theme.resultBorder};

        .date {
            color: ${props => props.theme.onBackground};

            .sort-arrow-asc,
            .sort-arrow-desc {
                width: 12px;
                height: 12px;
                margin-left: 10px;
            }

            .sort-arrow-asc {
                transform: scaleY(-1);
            }
        }

        .from,
        .to,
        .subject,
        .date {
            padding-right: 30px;
        }
    }

    .header {
        background-color: ${props => props.theme.surface};
        font-weight: bold;
        color: ${props => props.theme.resultsText};
        font-size: 19px;
    }
`;

export default function ResultsTable(props) {
    const { data } = props;
    const [sortDirection, setSortDirection] = useState("desc");
    const [sortedData, setSortedData] = useState(null);

    useEffect(() => {
        if (data) {
            setSortedData(sortDirection === "desc" ? data : data.reverse());
        }
    }, [data]);

    const sortData = () => {
        setSortDirection(sortDirection === "desc" ? "asc" : "desc");
        if (data) {
            setSortedData(data.reverse());
        }
    };

    if (!data || data.length < 1) {
        return null;
    }

    return (
        <ResultsTableEl>
            <div className="header text-capitalize">
                <span className="from">
                    <FormattedMessage id="common.from" />
                </span>
                <span className="to">
                    <FormattedMessage id="common.to" />
                </span>
                <span className="subject">
                    <FormattedMessage id="common.subject" />
                </span>
                <span className="date cursor-pointer" onClick={sortData}>
                    <FormattedMessage id="common.date" />
                    <img
                        className={`sort-arrow-${sortDirection}`}
                        src={sortArrow}
                        alt="sort-arrow"
                    />
                </span>
            </div>
            {sortedData &&
                sortedData.map((item, index) => (
                    <ResultsTableRow
                        className="mail-info"
                        key={`result-table-row-${index}`}
                        item={item}
                    />
                ))}
        </ResultsTableEl>
    );
}
