import styled from "styled-components";
import PageNameDiv from "../components/PageNameDiv";
import BackArrowButton from "../components/BackArrowButton";

export default function Experience() {
  return (
    <MainDiv>
      <HeaderDiv>
        <BackArrowButton />
        <PageNameDiv pageName={"გამოცდილება"} pageNumber={2} />
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

const HeaderDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 61px;
  height: 41px;
`;

const Label = styled.label``;
