import styled from 'styled-components/native';
import Illustration from '../../assets/illustrations/illustration.png';

export const Container = styled.View`
    flex: 1;
    background-color: #EAECF5;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 34px;
`;

export const WrapperIllustration = styled.View`
    width: 100%;
    height: 55%;
    align-items: center;
    padding: 10px;
`;

export const IllustrationComponent = styled.Image.attrs({
    source: Illustration,
})`
    width: 100%;
    height: 100%;
    border-radius: 34px;
`;

export const WrapperText = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: 34px;
    font-weight: 600;
    color: #373248;
`;

export const Description = styled.Text`
    text-align: center;
    font-size: 16px;
    margin-top: 16px;
`;

export const WrapperButton = styled.View`
    flex-direction: row;
    background-color: #EAECF5;
    width: 85%;
    justify-content: center;
    border-radius: 14px;
    border: 1px solid #fff;
`;

export const RegisterButton = styled.TouchableOpacity`
    background-color: white;
    width: 50%;
    align-items : center;
    padding: 20px;
    border-radius: 14px;
    /* margin: 2px; */
`;

export const SignInButton = styled.TouchableOpacity`
    width: 50%;
    align-items : center;
    justify-content : center;
    padding: 14px;
`;

export const TitleButton = styled.Text`
    color: #3A354B;
    font-weight: 500;
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    padding: 24px;
    padding-top: 16%;
    justify-content: space-between;
`;

export const Body = styled.View``;

export const Header = styled.View``;

export const DescriptionInputLogin = styled.Text`
    text-align: center;
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 44px;
`;

export const Input = styled.TextInput`
    background-color: white;
    border-radius: 10px;
    /* height: 50px; */
    width: 100%;

    margin-bottom: 16px;
    padding: 14px;
`;

export const WrapperPassword = styled.View`
    align-items: flex-end;
`;

export const ForgotPassword = styled.Text`
    font-size: 12px;
    color: #3A354B;
    font-weight: 500;
`;

export const ButtonSignIn = styled.TouchableOpacity`
    background-color: #FD6B68;
    padding: 16px;
    align-items: center;
    border-radius: 10px;
    margin-top: 10%;
`;

export const TitleButtonSignIn = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: 500;
`;

export const MoreSighIn = styled.View`
    align-items: center;
    margin: 12% 0;
`;

export const TextMoreSignIn = styled.Text`
    font-size: 12px;
    color: #3A354B;
`;

export const BoxSocial = styled.View`
    padding: 14px;
    border: 1px solid white;
    width: 24%;
    align-items: center;
    border-radius: 10px;
`;

export const BoxSignInSocial = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const WrapperNotMember = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`;

export const NotMember = styled.Text`
    font-size: 12px;
    color: #3A354B;
`;

export const NotMemberButtonLink = styled.View``;

export const NotMemberLink = styled.Text`
    font-size: 12px;
    color: #3588F1;
`;