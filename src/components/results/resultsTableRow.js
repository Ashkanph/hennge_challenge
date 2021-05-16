import { useState, useEffect } from "react";
import styled from "styled-components";

import { formatDateTime } from "../../helpers/date";

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

    &:hover {
        .from,
        .to,
        .subject,
        .date {
            color: blue;
        }
    }
`;

export default function ResultsTableRow(props) {
    const { className, item, key } = props;
    const [showBody, setShowBody] = useState(false);

    return (
        <ResultsTableRowEl
            className={`${className} ${showBody ? "showbody" : ""}`}
            key={key}
            onClick={() => setShowBody(!showBody)}>
            <span className="from text-truncate cursor-pointer">{item?.from}</span>
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
            <span className="subject text-truncate cursor-pointer">{item?.subject}</span>
            <span className="date text-bold cursor-pointer">
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
