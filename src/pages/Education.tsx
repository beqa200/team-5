import React from "react";
import styled from "styled-components";
import BackArrowButton from "../components/BackArrowButton";
import PageNameDiv from "../components/PageNameDiv";
import EducationForm from "../components/EducationForm";

const EducationPage: React.FC = () => {
  return (
    <MainContainer>
      <LeftDiv>
        <BackArrowButton />
        <ContentDiv>
          <PageNameDiv pageName={"განათლება"} pageNumber={3} />
          <EducationForm />
        </ContentDiv>
      </LeftDiv>
      <RightComponent>CV</RightComponent>
    </MainContainer>
  );
};

export default EducationPage;

const MainContainer = styled.div`
  width: 100vw;
  display: flex;
`;

const LeftDiv = styled.div`
  width: 100%;
  flex: 1;
  background-color: #f9f9f9;
  padding: 48px 130px 65px 48px;
  display: flex;
  align-items: flex-start;
  gap: 60px;
`;

const RightComponent = styled.div`
  width: 650px;
  background-color: #ffffff;
`;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
