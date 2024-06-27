import styled from "styled-components";

export default function Experience() {
  return (
    <MainDiv>
      <HeaderDiv>
        <ArrowDiv>
          <img src="/Vector.jpg" />
        </ArrowDiv>
        <SecondDiv>
          <HeaderTxt>გამოცდილება</HeaderTxt>
          <HeaderTxt>2/3</HeaderTxt>
        </SecondDiv>
      </HeaderDiv>
      <section style={{ marginTop: "77px", paddingLeft: "102px" }}>
        <Label></Label>
      </section>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  width: 1078px;
  background-color: #f9f9f9;
  padding: 45px 149px 65px 48px;
  min-height: 100vh;
`;

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

const Label = styled.label``;
