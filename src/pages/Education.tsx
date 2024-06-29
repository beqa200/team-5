import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import BackArrowButton from "../components/BackArrowButton";
import PageNameDiv from "../components/PageNameDiv";
import { Link } from "react-router-dom";

const EducationPage: React.FC = () => {
  const [formCount, setFormCount] = useState(1);
  const {
    control,
    register,
    handleSubmit,
    clearErrors,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const storedData = localStorage.getItem("educationFormData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key as any, parsedData[key]);
      });
      setFormCount(parsedData.formCount || 1);
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    localStorage.setItem(
      "educationFormData",
      JSON.stringify({ ...data, formCount })
    );
  };

  const addForm = () => {
    clearErrors();
    setFormCount(formCount + 1);
  };

  const deleteForm = () => {
    setFormCount((prev) => Math.max(prev - 1, 1));
  };

  const FormComponent: React.FC<{ formIndex: number }> = ({ formIndex }) => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Label>სასწავლებელი</Label>
          <Controller
            name={`schoolName_${formIndex}`}
            control={control}
            defaultValue=""
            rules={{ minLength: 2 }}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                {...register(`schoolName_${formIndex}`, {
                  required: "schoolname is required",
                  minLength: {
                    value: 2,
                    message: "სასწავლებელი უნდა შეიცავდეს მინიმუმ 2 ასოს",
                  },
                })}
                placeholder="სასწავლებელი"
                style={{
                  borderColor: errors[`schoolName_${formIndex}`]
                    ? "red"
                    : field.value?.length >= 2
                    ? "green"
                    : "#bcbcbc",
                }}
                onChange={(e) => {
                  field.onChange(e);
                  const values = getValues();
                  localStorage.setItem(
                    "educationFormData",
                    JSON.stringify({ ...values, formCount })
                  );
                }}
              />
            )}
          />
          {errors[`schoolName_${formIndex}`] && (
            <InputError>
              სასწავლებელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს
            </InputError>
          )}
        </div>
        <SelAndCalDiv>
          <LabelField>
            <Label>ხარისხი</Label>
            <Controller
              name={`degree_${formIndex}`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  {...field}
                  {...register(`degree_${formIndex}`, {
                    required: "degree is required",
                  })}
                  style={{
                    borderColor: errors[`degree_${formIndex}`]
                      ? "red"
                      : field.value !== ""
                      ? "green"
                      : "#bcbcbc",
                  }}
                  onChange={(e) => {
                    field.onChange(e);
                    const values = getValues();
                    localStorage.setItem(
                      "educationFormData",
                      JSON.stringify({ ...values, formCount })
                    );
                  }}
                >
                  <option value="" disabled>
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
                  <option value="ასოცირებული ხარისხი">
                    ასოცირებული ხარისხი
                  </option>
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
              name={`date_${formIndex}`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <CalendarDiv
                  {...field}
                  type="date"
                  {...register(`date_${formIndex}`, {
                    required: "date is required",
                  })}
                  style={{
                    borderColor: errors[`date_${formIndex}`]
                      ? "red"
                      : field.value !== ""
                      ? "green"
                      : "#bcbcbc",
                  }}
                  onChange={(e) => {
                    field.onChange(e);
                    const values = getValues();
                    localStorage.setItem(
                      "educationFormData",
                      JSON.stringify({ ...values, formCount })
                    );
                  }}
                />
              )}
            />
          </LabelField>
        </SelAndCalDiv>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Label style={{ marginTop: "30px" }}>აღწერა</Label>
          <Controller
            name={`description_${formIndex}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Textarea
                rows={4}
                placeholder="განათლების აღწერა"
                {...field}
                {...register(`description_${formIndex}`, {
                  required: "description is required",
                  minLength: {
                    value: 4,
                    message: "აღწერა უნდა შეიცავდეს მინიმუმ 4 სიმბოლოს",
                  },
                })}
                style={{
                  borderColor: errors[`description_${formIndex}`]
                    ? "red"
                    : field.value !== ""
                    ? "green"
                    : "#bcbcbc",
                }}
                onChange={(e) => {
                  field.onChange(e);
                  const values = getValues();
                  localStorage.setItem(
                    "educationFormData",
                    JSON.stringify({ ...values, formCount })
                  );
                }}
              />
            )}
          />
          {errors[`description_${formIndex}`] && (
            <InputError>აღწერა უნდა შეიცავდეს მინიმუმ 4 სიმბოლოს</InputError>
          )}
        </div>
        <Line></Line>
      </>
    );
  };

  return (
    <MainContainer>
      <LeftDiv>
        <Link to={"/experience"}>
          <BackArrowButton />
        </Link>
        <ContentDiv>
          <PageNameDiv pageName={"განათლება"} pageNumber={3} />
          <Form onSubmit={handleSubmit(onSubmit)}>
            {Array.from({ length: formCount }).map((_, index) => (
              <FormAndButton key={index}>
                <FormComponent formIndex={index} />
                {index > 0 && (
                  <DeleteFormButton onClick={() => deleteForm()}>
                    სასწავლებლის წაშლა
                  </DeleteFormButton>
                )}
              </FormAndButton>
            ))}
            <LightSkyButton onClick={addForm} formCount={formCount}>
              სხვა სასწავლებლის დამატება
            </LightSkyButton>
            <ButtonDivs>
              <Link to={"/experience"}>
                <BlueButton formCount={formCount}>უკან</BlueButton>
              </Link>
              <BlueButton formCount={formCount} type="submit">
                დასრულება
              </BlueButton>
            </ButtonDivs>
          </Form>
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

const ButtonDivs = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

const FormAndButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  color: red;
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

export const LightSkyButton = styled.button<{ formCount: number }>`
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
  margin-top: ${({ formCount }) => (formCount > 1 ? "-45px" : "0")};
`;

export const BlueButton = styled(LightSkyButton)`
  background-color: #6b40e3;
  padding: 10px 18px;
`;

const DeleteFormButton = styled.button`
  margin-top: 10px;
  border: none;
  background-color: #ff4d4f;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;
