import React, { useState } from "react";
import styled from "styled-components";
import BackArrowButton from "../components/BackArrowButton";
import PageNameDiv from "../components/PageNameDiv";
import EducationForm from "../components/EducationForm";
import { Link } from "react-router-dom";

const EducationPage: React.FC = () => {
  const [formCount, setFormCount] = useState(1);

  const addForm = () => {
    setFormCount(formCount + 1);
  };

  const forms = Array.from({ length: formCount }).map((_, index) => (
    <EducationForm key={index} />
  ));

  return (
    <MainContainer>
      <LeftDiv>
        <Link to={"/experience"}>
          <BackArrowButton />
        </Link>
        <ContentDiv>
          <PageNameDiv pageName={"განათლება"} pageNumber={3} />
          {forms}
          <LightSkyButton onClick={addForm}>
            სხვა სასწავლებლის დამატება
          </LightSkyButton>
          <ButtonDivs>
            <Link to={"/experience"}>
              <BlueButton>უკან</BlueButton>
            </Link>
            <BlueButton>დასრულება</BlueButton>
          </ButtonDivs>
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

const LightSkyButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: none;
  background-color: #62a1eb;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  padding: 14px 22px;
  cursor: pointer;
`;

const BlueButton = styled(LightSkyButton)`
  background-color: #6b40e3;
  padding: 10px 18px;
`;

const ButtonDivs = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 100px;
`;
