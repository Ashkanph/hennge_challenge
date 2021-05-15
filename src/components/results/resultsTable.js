import { useState, useEffect } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import { formatDateTime } from "../../helpers/date";
import sortArrow from "../../static/images/icon_arrow01.svg";

const ResultsTableEl = styled.div`
    width: inherit;

    .header-container {
        background-color: ${props => props.theme.surface};
        font-weight: bold;
    }

    .mail,
    .header-container {
        .mail-info {
            font-size: 21px;
            display: grid;
            grid-template-columns: 208px 370px auto 130px;
            height: 50px;
            align-items: center;
            color: ${props => props.theme.onBackground};
            border-bottom: 1px solid ${props => props.theme.resultBorder};

            &.header {
                color: ${props => props.theme.resultsText};
                font-size: 19px;
            }

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

            .to {
                display: flex;

                .first-to {
                    max-width: 278px;
                }

                .to-count {
                    display: flex;
                    flex-grow: 1;
                    justify-content: flex-end;
                    padding-right: 20px;

                    span {
                        color: ${props => props.theme.background};
                        background-color: ${props => props.theme.tags};
                        width: 32px;
                        border-radius: 5px;
                        font-weight: bold;
                        display: block;
                        text-align: center;
                        height: 25px;
                        font-size: 19px;
                    }
                }
            }

            .from,
            .to,
            .subject,
            .date {
                padding-right: 30px;
            }
        }
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
            <div className="header-container">
                <div className="mail-info header text-capitalize">
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
            </div>
            {sortedData &&
                sortedData.map((item, index) => (
                    <div className="mail" key={`result-table-row-${index}`}>
                        <div className="mail-info">
                            <span className="from text-truncate">{item?.from}</span>
                            <div className="to">
                                <span className="first-to text-truncate">
                                    {`${item?.to?.[0]} ${
                                        item.to.length > 1 ? ", ..." : ""
                                    }`}
                                </span>
                                {item.to.length > 1 && (
                                    <div className="to-count">
                                        <span>+{item.to.length - 1}</span>
                                    </div>
                                )}
                            </div>
                            <span className="subject text-truncate">{item?.subject}</span>
                            <span className="date text-bold">
                                {formatDateTime(item?.date * 1000)}
                            </span>
                        </div>
                        {index % 3 === 0 && <div className="mail-body"></div>}
                    </div>
                ))}
        </ResultsTableEl>
    );
}
