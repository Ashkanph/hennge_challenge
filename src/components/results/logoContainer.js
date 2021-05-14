import styled from "styled-components";
import Logo from "../../static/images/logo.png";

const LogoContainerEl = styled.div`
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
`;

export default function LogoContainer(props) {
    const { count } = props;

    if (count !== 0) {
        return null;
    }

    return (
        <LogoContainerEl>
            <img className="logo" src={Logo} alt="logo" />
        </LogoContainerEl>
    );
}
