import styled from "styled-components";

export default function Header() {
  return (
    <HeaderDiv>
      <ArrowDiv>
        <img src="/Vector.jpg" />
      </ArrowDiv>
      <SecondDiv>
        <HeaderTxt>გამოცდილება</HeaderTxt>
        <HeaderTxt>2/3</HeaderTxt>
      </SecondDiv>
    </HeaderDiv>
  );
}

const ArrowDiv = styled.div`
  width: 40px;
  height: 40px;
  padding: 12px 16.8px 12px 14px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
`;

const HeaderDiv = styled.div`
  display: flex;
  gap: 61px;
  height: 41px;
`;

const HeaderTxt = styled.h1`
  font-size: 24px;
  color: #1a1a1a;
`;

const SecondDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: -webkit-fill-available;
  border-bottom: 1px solid #1a1a1a;
`;
