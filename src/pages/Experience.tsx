import styled from "styled-components";
import Header from "../components/exprerienceComp/Header";
import Input from "../components/exprerienceComp/Input";

export default function Experience() {
  return (
    <MainDiv>
      <Header />
      <section style={{ marginTop: "77px", paddingLeft: "102px" }}>
        <div style={{ display: "flex", gap: "31px", flexDirection: "column" }}>
          <Input labelTxt="თანამდებობა" errorTxt="მინუმუმ 2 სიმბოლო">
            დეველოპერი, დიზაინერი, ა.შ.
          </Input>
          <Input labelTxt="თანამდებობა" errorTxt="მინუმუმ 2 სიმბოლო">
            დამსაქმებელი
          </Input>
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
