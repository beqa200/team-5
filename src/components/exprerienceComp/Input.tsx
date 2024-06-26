import styled from "styled-components";

const Input: React.FC<{
  labelTxt: string;
  children: string;
  errorTxt: string;
}> = ({ labelTxt, children, errorTxt }) => {
  return (
    <div>
      <Label>{labelTxt}</Label>
      <Inputs placeholder={children} />
      <p style={{ marginTop: "8px", fontSize: "14px", color: "#2e2e2e" }}>
        {errorTxt}
      </p>
    </div>
  );
};

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.31;
`;

const Inputs = styled.input`
  width: -webkit-fill-available;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 8px;
  border: solid 1px #bcbcbc;
  background-color: #fff;
  border-radius: 4px;
`;
export default Input;
