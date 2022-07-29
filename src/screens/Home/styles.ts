import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #141414;
`;

export const Header = styled.View`
    flex-direction: row;
    padding: 36px;
    justify-content: space-between;
`;

export const User = styled.View`
    flex-direction: row;
`;

export const Avatar = styled.Image`
    height: 45px;
    width: 45px;
    border-radius: 50px;
    margin-right: 10px;
`;

export const InfoUser = styled.View``;

export const Name = styled.Text`
    color: #E5E5E5;
    font-size: 18px;
    font-weight: 600;
`;

export const Username = styled.Text`
    color: #8F8F8F;
    font-size: 14px;
    font-weight: 400;
`;

export const WrapperSearch = styled.View`
    background-color: #202124;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    border-radius: 50px;
`;

export const IconSearch = styled.Text`
    color: #B0BDD1;
`;

export const Highlights = styled.FlatList`
    padding: 0 20px;
`;

export const Content = styled.View`
`;

export const Card = styled.View``;

export const HighlightsImage = styled.Image`
    height: 200px;
    width: 100%;
    border-radius: 30px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 24px;
    align-items: center;
`;

export const CardTitle = styled.Text`
    color: #E5E5E5;
    font-size: 26px;
    font-weight: 600;
`;

export const More = styled.Text`
    color: #F6C801;
    font-size: 16px;
    font-weight: 600;
`;

export const BackgroundCard = styled.View`
    padding: 24px;
    background-color: #202124;
    border-radius: 30px;
`;

export const SenderAvatar = styled.Image`
    height: 45px;
    width: 45px;
    border-radius: 10px;
    margin-right: 10px;
`;

export const SenderInfo = styled.View`
    flex-direction: row ;
    padding: 10px 0 16px;
`;

export const Details = styled.View``;

export const SenderName = styled.Text`
    color: #E5E5E5;
    font-size: 16px;
    font-weight: 600;
`;

export const lastUpdate = styled.Text`
    color: #8B8B8B;
    font-size: 14px;
    font-weight: 600;
`;

export const Description = styled.Text`
    color: #E5E5E5;
    font-size: 16px;
    font-weight: 300;
`;
