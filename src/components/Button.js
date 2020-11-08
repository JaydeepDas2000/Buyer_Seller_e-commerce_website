import styled from "styled-components";

export const ButtonContainer = styled.button`
    text-transform:capitalize;
    front-size:1.4rem;
    background:transparent;
    border: 0.2rem solid var(--lightBlue);
    border-color:${props => (props.cart ? "var(--mainWhite)":"var(--lightBlue)")};
    color: ${props => (props.cart ? "var(--mainWhite)":"var(--lightBlue)")};
    border-radius: 1rem;
    padding: 0.2rem 0.5rem;
    transition:all 0.5s ease-in-out;
    &:hover{
        background: ${props => (props.cart ? "var(--mainWhite)":"var(--lightBlue)")};
        color : ${props => (props.cart ? "var(--mainBlue)":"var(--mainWhite)")};
    }
    &:focus{
        outline: none;
    }

`;