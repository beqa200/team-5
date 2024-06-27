import styled from "styled-components";
import Header from "../components/exprerienceComp/Header";
import Input, { Label } from "../components/exprerienceComp/Input";
import { LightSkyButton } from "../components/EducationForm";

export default function Experience() {
  return (
    <MainDiv>
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
    </MainDiv>
  );
}

const MainDiv = styled.div`
  width: 1078px;
  background-color: #f9f9f9;
  padding: 45px 149px 65px 48px;
  min-height: 100vh;
`;

const TextArea = styled.textarea`
  height: 123px;
  padding-left: 16px;
  padding-top: 13px;
  resize: none;
  border: solid 1px #bcbcbc;
  border-radius: 4px;
`;
