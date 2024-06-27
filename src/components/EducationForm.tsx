import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";

const EducationForm: React.FC = () => {
  const {
    control,
    // watch,
    formState: { errors },
  } = useForm();
  // const schoolName = watch("schoolName");

  return (
    <Form>
      <Label>სასწავლებელი</Label>
      <Controller
        name="schoolName"
        control={control}
        defaultValue=""
        rules={{ minLength: 2 }}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            placeholder="სასწავლებელი"
            style={{
              borderColor: field.value?.length >= 2 ? "green" : "#bcbcbc",
            }}
          />
        )}
      />
      {errors.schoolName && <InputError>მინიმუმ 2 სიმბოლო</InputError>}
      <SelAndCalDiv>
        <LabelField>
          <Label>ხარისხი</Label>
          <Controller
            name="degree"
            control={control}
            defaultValue="აირჩიეთ ხარისხი"
            render={({ field }) => (
              <Select
                {...field}
                style={{
                  borderColor:
                    field.value !== "აირჩიეთ ხარისხი" ? "green" : "#bcbcbc",
                }}
              >
                <option value="აირჩიეთ ხარისხი" disabled>
                  აირჩიეთ ხარისხი
                </option>
                <option value="საშუალო სკოლის დიპლომი">
                  საშუალო სკოლის დიპლომი
                </option>
                <option value="ზოგადსაგანმანათლებლო დიპლომი">
                  ზოგადსაგანმანათლებლო დიპლომი
                </option>
                <option value="ბაკალავრი">ბაკალავრი</option>
                <option value="მაგისტრი">მაგისტრი</option>
                <option value="დოქტორი">დოქტორი</option>
                <option value="ასოცირებული ხარისხი">ასოცირებული ხარისხი</option>
                <option value="სტუდენტი">სტუდენტი</option>
                <option value="კოლეჯი (ხარისხის გარეშე)">
                  კოლეჯი (ხარისხის გარეშე)
                </option>
                <option value="სხვა">სხვა</option>
              </Select>
            )}
          />
        </LabelField>
        <LabelField>
          <Label>დამთავრების რიცხვი</Label>
          <Controller
            name="date"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <CalendarDiv
                {...field}
                type="date"
                style={{
                  borderColor: field.value ? "green" : "#bcbcbc",
                }}
              />
            )}
          />
        </LabelField>
      </SelAndCalDiv>
      <Label style={{ marginTop: "30px" }}>აღწერა</Label>
      <Controller
        name="textarea"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Textarea
            rows={4}
            placeholder="განათლების აღწერა"
            {...field}
            style={{
              borderColor: field.value?.length >= 2 ? "green" : "#bcbcbc",
            }}
          />
        )}
      />
      <Line></Line>
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
  outline: none;
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
  outline: none;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  outline: none;
`;

const Line = styled.div`
  width: 100%;
  margin: 50px 0 45px 0;
  border-top: 1px solid #bcbcbc;
`;
