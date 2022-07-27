import React from 'react';

import * as S from './styles';

export function Login() {
  return (
    <S.Container>
      <S.WrapperIllustration>
        <S.IllustrationComponent />
      </S.WrapperIllustration>
      <S.WrapperText>
        <S.Title>Discover yout {'\n'}Dream job Here</S.Title>
        <S.Description>
          Explore all the most exiting jobs roles{'\n'}based on your interest
          And study major
        </S.Description>
      </S.WrapperText>
      <S.WrapperButton>
        <S.RegisterButton>
          <S.TitleButton>Register</S.TitleButton>
        </S.RegisterButton>
        <S.SignInButton>
          <S.TitleButton>Sign In</S.TitleButton>
        </S.SignInButton>
      </S.WrapperButton>
    </S.Container>
  );
}
