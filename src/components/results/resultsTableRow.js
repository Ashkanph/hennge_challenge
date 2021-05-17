import { useState, useEffect } from "react";
import styled from "styled-components";

import { formatDateTime } from "../../helpers/date";
import ClipIcon from "../../components/icons/clip";
import mobileIcon from "../../static/images/icon_mail_sp.svg";
import iconArrow2 from "../../static/images/icon_arrow02.svg";

const ResultsTableRowEl = styled.div`
    .date {
        display: flex;
        align-items: center;
        grid-area: date;

        .icon-arrow2 {
            display: none;
            width: 5px;
            margin-left: 10px;
        }

        .clip-icon-mobile {
            display: none;
        }
    }

    .mail-body {
        grid-area: mail-body;
    }

    .mobile-icon {
        grid-area: mobile-icon;
        display: none;
    }

    grid-template-areas: "from to subject date";

    &.showbody {
        grid-template-areas:
            "from to subject date"
            "mail-body mail-body mail-body mail-body";
        height: auto !important;
        grid-template-rows: 50px auto;

        .mail-body {
            background-color: ${props => props.theme.surface};
            border-top: 4px solid ${props => props.theme.resultBorder};
            color: ${props => props.theme.resultsText};
            padding: 10px 15px;
            max-height: 250px;
            display: flex;
            flex-direction: column;
            overflow: scroll;

            .mail-body-subject {
                margin-bottom: 20px;
            }

            .attached-files {
                display: flex;
                align-items: center;
                margin-top: 20px;

                .attached-label {
                    margin-right: 20px;
                }

                a {
                    color: ${props => props.theme.links};
                    text-decoration: none;
                }
            }
        }
    }

    .to {
        display: flex;
        grid-area: to;

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
        grid-area: subject;

        .subject-text {
            display: inline-block;
            width: calc(100% - 40px);
        }

        .clip-icon-desktop {
            float: right;
        }
    }

    .from {
        grid-area: from;
    }

    .from,
    .to,
    .subject,
    .date {
        display: flex;
        align-items: center;
    }

    &:hover:not(.showbody) {
        .from,
        .to,
        .subject {
            color: ${props => props.theme.links};

            svg {
                fill: ${props => props.theme.links} !important;
            }
        }
    }

    @media (max-width: 769px) {
        width: inherit;
        margin: 0 -1.5rem;
        padding: 0.8rem 1.5rem;

        &.mail-info {
            height: 130px !important;
            grid-template-areas:
                "mobile-icon from from date"
                "mobile-icon to to to"
                "subject subject subject subject";
            grid-template-columns: 40px 1fr 1fr 1fr !important;
            grid-template-rows: 35px 35px 50px;

            .mobile-icon {
                display: inline-block;
                width: 20px;
            }

            .date {
                padding-right: 0 !important;
                justify-self: flex-end;

                .icon-arrow2 {
                    display: inline-block;
                }

                .clip-icon-mobile {
                    display: inline-block;
                    margin-right: 10px;
                }
            }

            .to {
                padding-right: 0 !important;

                .to-count {
                    padding-right: 0;
                }
            }

            .from {
                padding-left: 0 !important;
            }

            .subject {
                padding-right: 0 !important;

                .clip-icon-desktop {
                    display: none;
                }
            }

            &.showbody {
                grid-template-areas:
                    "mobile-icon from from date"
                    "mobile-icon to to to"
                    "subject subject subject subject"
                    "mail-body mail-body mail-body mail-body";
                height: auto !important;
                grid-template-rows: 35px 35px 50px auto;

                .mail-body {
                    max-height: 250px;
                    display: flex;
                    flex-direction: column;
                    overflow: scroll;
                }
            }
        }
    }

    @media (max-width: 767.98px) {
        &.mail-info {
            font-size: 20px !important;
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
            <img className="mobile-icon" src={mobileIcon} alt="mobile-icon" />
            <div
                className={`from cursor-pointer text-truncate ${
                    sortedBy === "from" ? "sorted-column" : ""
                }`}>
                <div className="text-truncate">{item?.from}</div>
            </div>
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
                {item?.attach && <ClipIcon className="clip-icon-desktop" width="20px" />}
            </span>
            <span
                className={`date cursor-pointer ${
                    sortedBy === "date" ? "sorted-column" : ""
                }`}>
                {item?.attach && <ClipIcon className="clip-icon-mobile" width="20px" />}
                <span>{formatDateTime(item?.date * 1000)}</span>
                <img className="icon-arrow2" src={iconArrow2} alt="arrow-icon" />
            </span>
            {showBody && (
                <div className="mail-body">
                    <div>
                        <span className="text-bold">From: </span>
                        {item?.from}
                    </div>
                    <div>
                        <span className="text-bold">To: </span>
                        {item?.to.join(", ")}
                    </div>
                    <div className="mail-body-subject">
                        <span className="text-bold">Subject: </span>
                        {item?.subject}
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: item?.body }} />
                    {item?.attach && (
                        <div className="attached-files">
                            <span className="attached-label text-bold">
                                Attached Files:
                            </span>
                            <a href={item?.attach?.text} download>
                                {item?.attach?.text}
                            </a>
                        </div>
                    )}
                </div>
            )}
        </ResultsTableRowEl>
    );
}
