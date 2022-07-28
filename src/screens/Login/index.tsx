import React, {useState} from 'react';

import * as S from './styles';

export function Login() {
  const [step, setStep] = useState(0);

  const signInSocial = [{}, {}, {}];
  return (
    <S.Container>
      {step === 0 ? (
        <>
          <S.WrapperIllustration>
            <S.IllustrationComponent />
          </S.WrapperIllustration>
          <S.WrapperText>
            <S.Title>Discover yout {'\n'}Dream job Here</S.Title>
            <S.Description>
              Explore all the most exiting jobs roles{'\n'}based on your
              interest And study major
            </S.Description>
          </S.WrapperText>
          <S.WrapperButton>
            <S.RegisterButton>
              <S.TitleButton>Register</S.TitleButton>
            </S.RegisterButton>
            <S.SignInButton onPress={() => setStep(1)}>
              <S.TitleButton>Sign In</S.TitleButton>
            </S.SignInButton>
          </S.WrapperButton>
        </>
      ) : (
        <S.Content>
          <S.Body>
            <S.Header>
              <S.Title>Hello Again!</S.Title>
              <S.DescriptionInputLogin>
                Explore all the most exiting jobs roles{'\n'}based on your
                interest And study major
              </S.DescriptionInputLogin>
            </S.Header>
            <S.Input placeholder="Enter username" />
            <S.WrapperPassword>
              <S.Input placeholder="Password" />
              <S.ForgotPassword>Recovery Password</S.ForgotPassword>
            </S.WrapperPassword>
            <S.ButtonSignIn onPress={() => setStep(0)}>
              <S.TitleButtonSignIn>Sign In</S.TitleButtonSignIn>
            </S.ButtonSignIn>
            <S.MoreSighIn>
              <S.TextMoreSignIn>Or continue with</S.TextMoreSignIn>
            </S.MoreSighIn>
            <S.BoxSignInSocial>
              {signInSocial.map(item => (
                <S.BoxSocial>
                  <S.TextMoreSignIn>Oi</S.TextMoreSignIn>
                </S.BoxSocial>
              ))}
            </S.BoxSignInSocial>
          </S.Body>
          <S.WrapperNotMember>
            <S.NotMember>Not a member? </S.NotMember>
            <S.NotMemberButtonLink>
              <S.NotMemberLink>Register now</S.NotMemberLink>
            </S.NotMemberButtonLink>
          </S.WrapperNotMember>
        </S.Content>
      )}
    </S.Container>
  );
}
