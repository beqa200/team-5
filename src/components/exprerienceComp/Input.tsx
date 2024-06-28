import { useFormContext } from "react-hook-form";
import styled from "styled-components";

interface InputProps {
  labelTxt: string;
  children?: string;
  errorTxt?: string;
  type: string;
  name: string;
}

const Input: React.FC<InputProps> = ({
  labelTxt,
  children,
  errorTxt,
  type,
  name,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const georgianRegex = /^[ა-ჰ]+$/;

  const validateGeorgian = (value: string) =>
    georgianRegex.test(value) || "Must contain only Georgian characters";

  const validateMinLength = (value: string) =>
    value.length >= 2 || "Must be at least 2 characters";

  const validationRules: any = {
    required: "This field is required",
  };

  if (name.includes("position") || name.includes("employer")) {
    validationRules.validate = {
      minLength: validateMinLength,
      georgian: validateGeorgian,
    };
  }

  return (
    <div>
      <Label>{labelTxt}</Label>
      <Inputs
        placeholder={type === "text" ? children : ""}
        type={type}
        {...register(name, validationRules)}
        name={name}
      />
      <p style={{ marginTop: "8px", fontSize: "14px", color: "#2e2e2e" }}>
        {errorTxt}
      </p>
    </div>
  );
};

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.31;
`;

const Inputs = styled.input<{ height?: string }>`
  width: -webkit-fill-available;
  height: 48px;
  padding-left: 16px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 8px;
  border: solid 1px #bcbcbc;
  background-color: #fff;
  border-radius: 4px;
  padding-right: 15px;
  outline: none;
`;

export default Input;
