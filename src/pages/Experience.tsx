import styled from "styled-components";
import Header from "../components/exprerienceComp/Header";
import Input from "../components/exprerienceComp/Input";
import { BlueButton, LightSkyButton } from "../components/EducationForm";
import { Link } from "react-router-dom";
import { FormProvider, useForm, useFieldArray } from "react-hook-form";

type formTypes = {
  experience: {
    position: string;
    employer: string;
    startingDate: string;
    finishingDate: string;
    description: string;
  }[];
};

const submit = (data: formTypes) => {
  console.log(data);
};

export default function Experience() {
  const methods = useForm<formTypes>({
    defaultValues: {
      experience: [
        {
          position: "",
          employer: "",
          startingDate: "",
          finishingDate: "",
          description: "",
        },
      ],
    },
  });

  const { handleSubmit, control, register } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>
        <MainDiv>
          <Header />
          <section style={{ marginTop: "77px", paddingLeft: "102px" }}>
            {fields.map((item, index) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  gap: "31px",
                  flexDirection: "column",
                  marginTop: index !== 0 ? "40px" : "0",
                }}
              >
                <Input
                  type="text"
                  labelTxt="თანამდებობა"
                  errorTxt="მინუმუმ 2 სიმბოლო"
                  name={`experience.[${index}].position`}
                >
                  დეველოპერი, დიზაინერი, ა.შ.
                </Input>
                <Input
                  type="text"
                  labelTxt="დამსაქმებელი"
                  errorTxt="მინუმუმ 2 სიმბოლო"
                  name={`experience.[${index}].employer`}
                >
                  დამსაქმებელი
                </Input>
                <div style={{ display: "flex", gap: "56px" }}>
                  <div style={{ width: "calc(50% - 23px)" }}>
                    <Input
                      type="date"
                      labelTxt="დაწყების რიცხვი"
                      name={`experience.[${index}].startingDate`}
                    ></Input>
                  </div>
                  <div style={{ width: "calc(50% - 23px)" }}>
                    <Input
                      type="date"
                      labelTxt="დაწყების რიცხვი"
                      name={`experience.${index}.finishingDate`}
                    ></Input>
                  </div>
                </div>
                <TextArea
                  placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                  {...register(`experience.${index}.description`, {
                    required: true,
                  })}
                ></TextArea>
                <div
                  style={{
                    marginTop: "56px",
                    height: "1px",
                    width: "100%",
                    backgroundColor: "#bcbcbc",
                  }}
                ></div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <LightSkyButton
                    type="button"
                    onClick={() =>
                      append({
                        position: "",
                        employer: "",
                        startingDate: "",
                        finishingDate: "",
                        description: "",
                      })
                    }
                  >
                    მეტი გამოცდილების დამატება
                  </LightSkyButton>
                  {index !== 0 && (
                    <DeleteButton type="button" onClick={() => remove(index)}>
                      გამოცდილების წაშლა
                    </DeleteButton>
                  )}
                </div>
              </div>
            ))}
          </section>
          <Footer>
            <Link to={"/PersonalInfo"}>
              <BlueButton>უკან</BlueButton>
            </Link>
            <BlueButton>შემდეგი</BlueButton>
          </Footer>
        </MainDiv>
      </form>
    </FormProvider>
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
  outline: none;
`;

const Footer = styled.footer`
  padding-left: 102px;
  margin-top: 115px;
  display: flex;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: none;
  background-color: red;
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
