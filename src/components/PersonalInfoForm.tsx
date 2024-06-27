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

    <div style={{display: "flex" , justifyContent: "start", width: "100%", flexDirection: "column"}}>
        <UploadImage>
          <span>პირადი ფოტოს ატვირთვა</span>
          <input type="file" id="upload"/>
          <label htmlFor="upload">ატვირთვა</label>
        </UploadImage>

      <TextareaDiv>
        <span>ჩემ შესახებ (არასავალდებულო)</span>
        <textarea name="" placeholder='ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ. '></textarea>
      </TextareaDiv>
    </div>


    </Container>
  )
}

export default PersonalInfoForm

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
const UploadImage = styled.div`
  display: flex;
  margin-top: 2.69rem;
  gap: 1.19rem;
  align-items: center;

  input[type="file"]{
    display: none;
  }
  span{
    color: var(--off-black, #1A1A1A);
    font-family: "Helvetica Neue";
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  label{
    padding: 0.4rem 1rem;
    border-radius: 0.25rem;
    background: #0E80BF;
    color: white;
    font-family: "Helvetica Neue";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    user-select: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  label:active{
    transform: scale(0.9);
  }
  label:hover{
    background-color: #0056b3;
  }
`
const TextareaDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  gap: 0.5rem;

  textarea{
    resize: vertical;
    padding: 1rem;
    color: #000;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.375rem; 
    text-transform: lowercase;
  }
`