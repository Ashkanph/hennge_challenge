import { useState, useEffect } from "react";
import styled from "styled-components";

import { formatDateTime } from "../../helpers/date";
import ClipIcon from "../../components/icons/clip";

const ResultsTableRowEl = styled.div`
    &.showbody {
        .from {
            grid-area: from;
        }

        .to {
            grid-area: to;
        }

        .subject {
            grid-area: subject;
        }

        .date {
            grid-area: date;
        }

        .mail-body {
            grid-area: mail-body;
        }

        grid-template-areas:
            "from to subject date"
            "mail-body mail-body mail-body mail-body";
        height: auto !important;
        grid-template-rows: 50px auto;

        .mail-body {
            max-height: 250px;
            display: flex;
            flex-direction: column;
            overflow: scroll;
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

    .subject {
        .subject-text {
            display: inline-block;
            width: calc(100% - 40px);
        }

        .clip-icon {
            float: right;
        }
    }

    &:hover {
        .from,
        .to,
        .subject {
            color: ${props => props.theme.links};

            svg {
                fill: ${props => props.theme.links} !important;
            }
        }
    }
`;

export default function ResultsTableRow(props) {
    const { className, item, sortedBy } = props;
    const [showBody, setShowBody] = useState(false);

    return (
        <ResultsTableRowEl
            className={`${className} ${showBody ? "showbody" : ""}`}
            onClick={() => setShowBody(!showBody)}>
            <span
                className={`from text-truncate cursor-pointer ${
                    sortedBy === "from" ? "sorted-column" : ""
                }`}>
                {item?.from}
            </span>
            <div className="to cursor-pointer">
                <span className="first-to text-truncate">
                    {`${item?.to?.[0]} ${item.to.length > 1 ? ", ..." : ""}`}
                </span>
                {item.to.length > 1 && (
                    <div className="to-count">
                        <span>+{item.to.length - 1}</span>
                    </div>
                )}
            </div>
            <span className="subject cursor-pointer text-truncate">
                <span className="subject-text text-truncate">{item?.subject}</span>
                {item?.attach && <ClipIcon className="clip-icon" width="20px" />}
            </span>
            <span
                className={`date cursor-pointer ${
                    sortedBy === "date" ? "sorted-column" : ""
                }`}>
                {formatDateTime(item?.date * 1000)}
            </span>
            {showBody && (
                <div className="mail-body">
                    <div>From: {item?.from}</div>
                    <div>To: {item?.to}</div>
                    {item.body}
                </div>
            )}
        </ResultsTableRowEl>
    );
}
