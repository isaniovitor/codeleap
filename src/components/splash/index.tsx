import { useState } from 'react'
import logo from '../../assets/codeleap_logo.png';
import * as S from "./styles"

interface SplashState {
  loading: boolean,
}

function Splash({loading}: SplashState) {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <>
      {isVisible && 
        <S.Container onAnimationEnd={() => {setIsVisible(false);}} loading={loading}>
          <img src={logo}/>
        </S.Container>
      }
    </>
  );
}

export default Splash;
