import { MdKeyboardArrowLeft } from "react-icons/md";
import styled from "styled-components";

function BackArrowButton() {
  return (
    <Eclipse>
      <MdKeyboardArrowLeft style={{ width: "25px", height: "25px" }} />
    </Eclipse>
  );
}

export default BackArrowButton;

const Eclipse = styled.div`
  width: 50px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
