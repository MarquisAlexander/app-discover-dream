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
`;

export const Description = styled.Text`
    text-align: center;
    font-size: 16px;
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
    padding: 14px;
    border-radius: 14px;
    /* margin: 2px; */
`;

export const SignInButton = styled.TouchableOpacity`
    width: 50%;
    align-items : center;
    padding: 14px;
`;

export const TitleButton = styled.Text`
    color: #3A354B;
`;
