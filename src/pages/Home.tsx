import styled from "styled-components";
import Redberry from "../../public/images/LOGO-02 3.png";
import BackgroundImage from "../../public/images/shutterstock_2189773743 1.png";
import Agency from "../../public/images/LOGO-40 1.png"

export default function Home() {
  return (
    <Background>
      <div className="redberry-image">
        <img src={Redberry} alt="Redberry Logo" />
      </div>
      <div className="center-div">
        <button>ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</button>
        <img src={Agency} alt="Agency Logo" />
      </div>
    </Background>
  );
}

const Background = styled.div`
  background: url(${BackgroundImage}) no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  height: 100vh;
  padding: 0 4.36rem;
  display: flex;
  flex-direction: column;

  .redberry-image {
    width: 100%;
    border-bottom: 0.0625rem solid #1A1A1A;
    img {
      padding-top: 1.57rem;
      padding-bottom: 1.63rem;
    }
  }

  .center-div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    position: relative;

    img{
      position: absolute;
      right: 270px;
      bottom: 130px;
    }

    button {
      width: 29rem;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      padding: 1.12rem 0;
      border-radius: 0.5rem;
      background: var(--off-black, #1A1A1A);
      color: white;
      border: none;
      cursor: pointer;
    }
  }
`;
