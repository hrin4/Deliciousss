import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export const Card = styled.div`
  min-height: 25vh;
  border-radius: 2px;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 0.75rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  border-radius: 2rem;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    h4 {
      color: white;
    }

    svg {
      color: white;
    }
  }
`;

export const Form = styled.form`
  margin: 0rem 10rem;

  div {
    position: relative;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export const SearchBar = styled.input`
  border: none;
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 1.5rem;
  color: white;
  padding: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  outline: none;
  width: 100%;
`;

export const LogoMain = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

export const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem;
  }
`;
