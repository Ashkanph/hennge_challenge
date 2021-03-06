import { useState } from "react";
import styled from "styled-components";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

import calendarIcon from "../../static/images/icon_calender.svg";
import searchIcon from "../../static/images/icon_search.svg";

const SearchBarEl = styled.div`
    width: inherit;

    .searchbar-left {
        display: flex;
        height: 60px;

        .searchbar-rangepicker {
            display: flex;
            align-items: center;
            width: 370px;
            height: inherit;
            padding: 0 22px;
            border: 1px solid ${props => props.theme.calendarBorder};
            color: ${props => props.theme.onBackground};
            border-right: none;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;

            .searchbar-callendar-icon {
                width: 28px;
                height: 28px;
                margin-right: 12px;
            }

            .react-daterange-picker__wrapper {
                margin-top: 7px;
                border: none;

                .react-daterange-picker__inputGroup,
                .react-daterange-picker__range-divider {
                    font-size: 22px;
                }

                .react-daterange-picker__range-divider {
                    min-width: 16px;
                }
            }
        }

        .searchbar-search-icon {
            height: 60px;
            width: 80px;
            padding: 16px;
            border: 1px solid ${props => props.theme.resultBorder};
            background-color: ${props => props.theme.surface};
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
        }
    }

    @media (max-width: 767.98px) {
        .searchbar-left {
            height: 50px;

            .searchbar-rangepicker {
                width: 250px;
                padding: 0 10px;

                .searchbar-callendar-icon {
                    width: 25px;
                    height: 25px;
                    margin-right: 12px;
                }

                .react-daterange-picker__wrapper {
                    margin-top: 6px !important;

                    .react-daterange-picker__inputGroup__input {
                        font-size: 18px !important;
                        line-height: 22px;
                    }

                    .react-daterange-picker__inputGroup,
                    .react-daterange-picker__range-divider {
                        font-size: 18px;
                    }
                    .react-daterange-picker__range-divider {
                        min-width: 8px;
                    }
                }
            }

            .searchbar-search-icon {
                height: 50px;
                width: 60px;
                padding: 12px;
            }
        }
    }
`;

export default function SearchBar(props) {
    const { rangeChanged, defaultDateRange } = props;
    const [selectedRange, setSelectedRange] = useState(defaultDateRange);
    const dateToEpoch = d => Math.floor(new Date(d).getTime() / 1000);

    const twoDateAreEqual = (d1, d2) => {
        const firstDate = new Date(d1);
        const secondDate = new Date(d2);
        return (
            firstDate.getFullYear() === secondDate.getFullYear() &&
            firstDate.getMonth() === secondDate.getMonth() &&
            firstDate.getDate() === secondDate.getDate()
        );
    };

    const getDateString = (d, which) => {
        const date = new Date(d);
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${
            which === "first" ? "00:01" : "23:59"
        }`;
    };

    const onRangeChanged = newRange => {
        setSelectedRange(newRange);
        if (twoDateAreEqual(newRange[0], newRange[1])) {
            rangeChanged([dateToEpoch(newRange[0]), dateToEpoch(newRange[0])]);
        } else {
            rangeChanged([
                dateToEpoch(getDateString(newRange[0], "first")),
                dateToEpoch(getDateString(newRange[1], "second")),
            ]);
        }
    };

    return (
        <SearchBarEl>
            <div className="searchbar-left">
                <div className="searchbar-rangepicker">
                    <img
                        className="searchbar-callendar-icon"
                        alt="calendar-icon"
                        src={calendarIcon}
                    />
                    <DateRangePicker
                        onChange={onRangeChanged}
                        value={selectedRange}
                        clearIcon={null}
                        calendarIcon={null}
                        format="yyyy/M/d"
                        rangeDivider="-"
                    />
                </div>
                <img
                    className="searchbar-search-icon"
                    alt="search-icon"
                    src={searchIcon}
                />
            </div>
        </SearchBarEl>
    );
}
