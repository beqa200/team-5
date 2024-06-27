import styled from "styled-components";

function PageNameDiv({ pageName, pageNumber }: pageNameDivProps) {
  return (
    <ContainerDiv>
      <PageName>{pageName}</PageName>
      <PageNumber>
        <span>{pageNumber}</span>/3
      </PageNumber>
    </ContainerDiv>
  );
}

export default PageNameDiv;

const ContainerDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 2px solid #1a1a1a;
  margin-bottom: 70px;
`;

const PageName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #1a1a1a;
`;

const PageNumber = styled.p`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #1a1a1a;
`;
