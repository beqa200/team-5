import styled from "styled-components";
import PageNameDiv from "../components/PageNameDiv";
import BackArrowButton from "../components/BackArrowButton";
import Header from "../components/exprerienceComp/Header";
import Input from "../components/exprerienceComp/Input";
import { BlueButton, LightSkyButton } from "../components/EducationForm";


export default function Experience() {
  return (
    <MainDiv>
      <HeaderDiv>
        <BackArrowButton />
        <PageNameDiv pageName={"გამოცდილება"} pageNumber={2} />
      </HeaderDiv>
      <Header />
      <section style={{ marginTop: "77px", paddingLeft: "102px" }}>
        <div style={{ display: "flex", gap: "31px", flexDirection: "column" }}>
          <Input
            type="text"
            labelTxt="თანამდებობა"
            errorTxt="მინუმუმ 2 სიმბოლო"
          >
            დეველოპერი, დიზაინერი, ა.შ.
          </Input>
          <Input
            type="text"
            labelTxt="თანამდებობა"
            errorTxt="მინუმუმ 2 სიმბოლო"
          >
            დამსაქმებელი
          </Input>
          <div style={{ display: "flex", gap: "56px" }}>
            <div style={{ width: "calc(50% - 23px)" }}>
              <Input type="date" labelTxt="დაწყების რიცხვი"></Input>
            </div>
            <div style={{ width: "calc(50% - 23px)" }}>
              <Input type="date" labelTxt="დაწყების რიცხვი"></Input>
            </div>
          </div>
          <TextArea placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"></TextArea>
          <div
            style={{
              marginTop: "56px",
              height: "1px",
              width: "100%",
              backgroundColor: "#bcbcbc",
            }}
          ></div>
          <div style={{ width: "289px" }}>
            <LightSkyButton>მეტი გამოცდილების დამატება</LightSkyButton>
          </div>
        </div>
      </section>
      <Footer>
        <BlueButton>უკან</BlueButton>
        <BlueButton>შემდეგი</BlueButton>
      </Footer>
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

const TextArea = styled.textarea`
  height: 123px;
  padding-left: 16px;
  padding-top: 13px;
  resize: none;
  border: solid 1px #bcbcbc;
  border-radius: 4px;
`;

const Footer = styled.footer`
  padding-left: 102px;
  margin-top: 115px;
  display: flex;
  justify-content: space-between;
`;

