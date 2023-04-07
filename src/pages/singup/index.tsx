import { useEffect, useRef, useState } from 'react'
import { Form } from '@unform/web';
import Splash from '../../components/splash';
import Input from '../../components/input';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [loading, setLoading] = useState(true);
  const [isEmpyte, setIsEmpyte] = useState(true);
	const navigate = useNavigate();
	const formRef = useRef(null);

  function handleSubmit(data: any){
    window.localStorage.setItem('username', data.username);
    navigate('/home');
  }

  function checkIsEmpyte(){
    setIsEmpyte(formRef.current?.getFieldValue('username') == '');
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);  
  }, []);

  return (
    <>
      <Splash loading={loading} /> 
      <S.Container loading={loading}>
        <S.Form as={Form} ref={formRef} onSubmit={handleSubmit}>
            <S.Title className='p'>Welcome to CodeLeap network!</S.Title>
            <Input name='username' onChange={checkIsEmpyte} label='Please enter your username' placeholder='' />
            <S.Button type='submit' disabled={isEmpyte}>Enter</S.Button>
        </S.Form>
      </S.Container>
    </>
  );
}

export default SignUp;
