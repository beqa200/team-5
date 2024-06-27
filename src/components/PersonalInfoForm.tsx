import styled from 'styled-components'

function PersonalInfoForm() {
  return (
    <Container>
      <NamesDiv>
        <NameLeft>
          <label>სახელი</label>
          <input type="text" placeholder='ანზორი' />
          <span>მინიმუმ 2 ასო, ქართული ასოები</span>
        </NameLeft>

        <SurnameRight>
        <label>გვარი</label>
          <input type="text" placeholder='მუმლაძე' />
          <span>მინიმუმ 2 ასო, ქართული ასოები</span>
        </SurnameRight>
      </NamesDiv>
    </Container>
  )
}

export default PersonalInfoForm

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NamesDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`

const NameLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding-right: 1.5rem;

  input{
    padding: 0.8125rem 0.875rem 0.875rem 1rem;
    border-radius: 0.25rem;
    border: 1px solid black;
  }
  input::placeholder{
    color: #000;
    font-family: "Helvetica Neue";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem; 
  }

  span{
    color: var(---500, #2E2E2E);
    font-family: "Helvetica Neue";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.3125rem;
  }
`
const SurnameRight = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding-left: 1.5rem;

    input{
    padding: 0.8125rem 0.875rem 0.875rem 1rem;
    border-radius: 0.25rem;
    border: 1px solid black;
  }
  input::placeholder{
    color: #000;
    font-family: "Helvetica Neue";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem; 
  }

  span{
    color: var(---500, #2E2E2E);
    font-family: "Helvetica Neue";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.3125rem;
  }
`