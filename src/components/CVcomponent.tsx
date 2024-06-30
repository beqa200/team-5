import { useContext } from "react";
import styled from "styled-components";
import { CvContext } from "../App";

function CVcomponent() {
  const { experienceCv } = useContext(CvContext);
  console.log(experienceCv);
  return (
    <div style={{ padding: "48px 75px" }}>
      <Experience>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</Experience>
      {experienceCv.map((item, index) => (
        <div key={index}>
          <div style={{ display: "flex" }}>
            <p>{item.position}</p>
            <p>{item.employer}</p>
          </div>
          <div style={{ display: "flex" }}>
            <p>{item.startingDate}</p>
            <p>{item.finishingDate}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CVcomponent;

const Experience = styled.h1`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: normal;
  color: #f93b1d;
  margin-top: 24px;
`;
