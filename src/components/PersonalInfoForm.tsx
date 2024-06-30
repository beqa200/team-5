import styled from 'styled-components';
import { useForm, useWatch } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import CVcomponent from './CVcomponent';
import { CvContext, personalCvData } from '../App';

function PersonalInfoForm() {
  const { register, handleSubmit, control, formState: { errors, submitCount }, setValue } = useForm();

  useEffect(() => {
    const fields = ['name', 'surname', 'email', 'number'];
    fields.forEach(field => {
      const storedValue = localStorage.getItem(field);
      if (storedValue) {
        setValue(field, storedValue);
      }
    });
  }, [setValue]);

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  const getBorderColor = (fieldName: string) => {
    if (submitCount > 0) {
      if (errors[fieldName]) {
        return "red";
      } else {
        return "#98E37E";
      }
    }
    return "#BCBCBC";
  };

  const {setPersonalInfoCv} = useContext(CvContext)
  const values = useWatch({ control });
  console.log(values);

  useEffect(() => {
    setPersonalInfoCv(values as personalCvData);
  },[setPersonalInfoCv, values]);
  
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <NamesDiv>
        <NameLeft>
          <label>სახელი</label>
          <input 
            type="text" 
            placeholder='ჩაწერეთ სახელი' 
            id="name" 
        
            style={{borderColor: getBorderColor('name')}}
            {...register('name', {
              required: "სახელი სავალდებულოა",
              minLength: {
                value: 2,
                message: 'მინიმუმ 2 ასო, ქართული ასოები'
              }
            })} 

          />
          <span>მინიმუმ 2 ასო, ქართული ასოები</span>
        </NameLeft>
        <SurnameRight>
          <label>გვარი</label>
          <input 
            type="text" 
            placeholder='ჩაწერეთ გვარი' 
            id="surname" 

            style={{borderColor: getBorderColor('surname')}}
            {...register('surname', {
              required: "გვარი სავალდებულოა",
              minLength: {
                value: 2,
                message: 'მინიმუმ 2 ასო, ქართული ასოები'
              }
            })} 
          />
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
          <textarea 
            name="about" 
            placeholder='ზოგადი ინფო შენ შესახებ'
          ></textarea>
        </TextareaDiv>
      </div>

      <EmailDiv>
        <label>ელ.ფოსტა</label>
        <input 
          type="email" 
          placeholder='ანზორი@redberry.com' 
          id="email"

          style={{borderColor: getBorderColor('email')}}
          {...register('email', {
            required: "ელ.ფოსტა სავალდებულოა",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@redberry\.ge$/,
              message: "უნდა მთავრდებოდეს @redberry.ge-ით"
            }
          })}
        />
        <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
      </EmailDiv>

      <NumberDiv>
        <label>მობილურის ნომერი</label>
        <input 
          type="text" 
          placeholder='+995 597 63 45 16' 
          id="number"

          style={{borderColor: getBorderColor('number')}}
          {...register('number', {
            required: "მობილურის ნომერი სავალდებულოა",
            pattern: {
              value: /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/,
              message: "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
            }
          })}
        />
        <span>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</span>
      </NumberDiv>

      <div style={{display: "flex" , justifyContent: "end", width: "100%"}}>
        <Button>შემდეგი</Button>
      </div>
    </Container>
  );
}

export default PersonalInfoForm;

const Container = styled.form`
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
    outline: none;
    border: 1px solid;
  }
  input::placeholder{
    color: #000;
    opacity: 0.6;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem; 
  }

  span{
    color: var(---500, #2E2E2E);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.3125rem;
    opacity: 0.5;
  }
`
const SurnameRight = styled(NameLeft)`
  padding-left: 1.5rem;
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
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    user-select: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  label:hover{
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
    resize: block;
    padding: 0.81rem 1rem;
    color: #000;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.375rem; 
    text-transform: lowercase;
  }
`
const EmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.06rem;
  gap: 0.5rem;
  width: 100%;

  input{
    display: flex;
    padding: 0.8125rem 5.1875rem 0.875rem 1rem;
    align-items: center;
    align-self: stretch;
    border-radius: 0.25rem;
    border: 1px solid;
    outline: none;
  }
  span{
    color: var(---500, #2E2E2E);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.3125rem; 
    opacity: 0.5;
  }
`
const NumberDiv = styled(EmailDiv)`
  input[type=number]{
    opacity: 0.6;
  }
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
`
const Button = styled.button`
  width: 9.4375rem;
  height: 3rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  background: #6B40E3;
  border: none;
  color: white;
  margin-top: 9.5rem;
  cursor: pointer;    
  transition: background-color 0.3s;

  &:hover{
    background-color: #0056b3;
    transform: scale(1.1);
  }
`
function watch(): any {
  throw new Error('Function not implemented.');
}

