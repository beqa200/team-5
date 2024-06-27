import styled from "styled-components";

interface InputProps {
  labelTxt: string;
  children?: string;
  errorTxt?: string;
  type: string;
  height?: string;
}

const Input: React.FC<InputProps> = ({
  labelTxt,
  children,
  errorTxt,
  type,
  height,
}) => {
  return (
    <div>
      <Label>{labelTxt}</Label>
      <Inputs
        placeholder={type === "text" ? children : ""}
        type={type}
        height={height}
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
  height: ${({ height }) => height || "48px"};
  padding-left: 16px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 8px;
  border: solid 1px #bcbcbc;
  background-color: #fff;
  border-radius: 4px;
  padding-right: 15px;
`;

export default Input;
