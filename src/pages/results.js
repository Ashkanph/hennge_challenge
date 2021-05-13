import styled from "styled-components";

const ResultsEl = styled.div`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.onBackground};
`;

export default function Results() {
    return <ResultsEl className="App">Hennge Challenge Results</ResultsEl>;
}
