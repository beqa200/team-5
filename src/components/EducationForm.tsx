import React from "react";
import styled from "styled-components";

const EducationForm: React.FC = () => {
  return (
    <Form>
      <Label>სასწავლებელი</Label>
      <Input type="text" placeholder="სასწავლებელი" />
      <InputError>მინიმუმ 2 სიმბოლო</InputError>
      <SelAndCalDiv>
        <LabelField>
          <Label>ხარისხი</Label>
          <Select defaultValue={"აირჩიეთ ხარისხი"}>
            <option value="developer">საშუალო სკოლის დიპლომი</option>
            <option value="designer">ზოგადსაგანმანათლებლო დიპლომი</option>
            <option value="manager">ბაკალავრი</option>
            <option value="developer">მაგისტრი</option>
            <option value="designer">დოქტორი</option>
            <option value="manager">ასოცირებული ხარისხი</option>
            <option value="developer">სტუდენტი</option>
            <option value="designer">კოლეჯი (ხარისხის გარეშე)</option>
            <option value="manager">სხვა</option>
          </Select>
        </LabelField>
        <LabelField>
          <Label>დამთავრების რიცხვი</Label>
          <CalendarDiv type="date" />
        </LabelField>
      </SelAndCalDiv>
      <Label style={{ marginTop: "30px" }}>განათლების აღწერა</Label>
      <Textarea rows={4} />
      <Line></Line>
      <LightSkyButton>სხვა სასწავლებლის დამატება</LightSkyButton>
      <ButtonDivs>
        <BlueButton>უკან</BlueButton>
        <BlueButton>დასრულება</BlueButton>
      </ButtonDivs>
    </Form>
  );
};

export default EducationForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

const LabelField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  column-gap: 8px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 14px 16px;
  font-size: 14px;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  width: 100%;
  margin: 8px 0;
`;

const InputError = styled.p`
  font-size: 14px;
  font-weight: lighter;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #2e2e2e;
`;

const SelAndCalDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 30px;
  gap: 50px;
`;

const Select = styled.select`
  width: 100%;
  padding: 14px 16px;
  font-size: 14px;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  cursor: pointer;
`;

const CalendarDiv = styled.input`
  width: 100%;
  padding: 14px 16px;
  font-size: 14px;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  cursor: pointer;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Line = styled.div`
  width: 100%;
  margin: 50px 0 45px 0;
  border-top: 1px solid #bcbcbc;
`;

export const LightSkyButton = styled.button`
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
