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
            border-right: none;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;

            .searchbar-callendar-icon {
                width: 28px;
                height: 28px;
                margin-right: 12px;
            }

            .react-daterange-picker__wrapper {
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
`;

export default function SearchBar(props) {
    const { rangeChanged, defaultDateRange } = props;
    const [selectedRange, setSelectedRange] = useState(defaultDateRange);
    const dateToEpoch = d => Math.floor(new Date(d).getTime() / 1000);

    const onRangeChanged = newRange => {
        setSelectedRange(newRange);
        rangeChanged([dateToEpoch(newRange[0]), dateToEpoch(newRange[1])]);
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
