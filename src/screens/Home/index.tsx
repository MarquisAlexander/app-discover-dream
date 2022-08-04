import React from 'react';

import * as S from './styles';

export function Home() {
  const highlights = [
    {
      id: 1,
      title: 'Trending',
      lastPublication: {
        sender: {
          name: 'Marquis',
          avatar: 'https://github.com/marquisalexander.png',
          date: new Date(),
          description: 'Work by your house front a computer',
          highlights: 'https://alonza.com.br/wp-content/uploads/2021/07/react-native.png',
        },
      },
    },
  ];

  return (
    <S.Container>
      <S.Header>
        <S.User>
          <S.Avatar source={{uri: 'https://github.com/marquisalexander.png'}} />
          <S.InfoUser>
            <S.Name>Marquis</S.Name>
            <S.Username>@sajon.co</S.Username>
          </S.InfoUser>
        </S.User>
        <S.WrapperSearch>
          <S.IconSearch>S</S.IconSearch>
        </S.WrapperSearch>
      </S.Header>
      <S.Highlights
        data={highlights}
        renderItem={({item}) => (
          <S.Content>
            <S.Card>
              <S.CardHeader>
                <S.CardTitle>{item.title}</S.CardTitle>
                <S.More>More</S.More>
              </S.CardHeader>
              <S.BackgroundCard>
                <S.HighlightsImage
                  source={{uri: item.lastPublication.sender.highlights}}
                />
                <S.SenderInfo>
                  <S.SenderAvatar
                    source={{uri: 'http://comoajudarmeuproximo.com.br/wp-content/uploads/2018/08/user.png'}}
                  />
                  <S.Details>
                    <S.SenderName>
                      {item.lastPublication.sender.name}
                    </S.SenderName>
                    <S.lastUpdate>2 min ago</S.lastUpdate>
                  </S.Details>
                </S.SenderInfo>
                <S.Description>
                  {item.lastPublication.sender.description}
                </S.Description>
              </S.BackgroundCard>
            </S.Card>
          </S.Content>
        )}
      />
    </S.Container>
  );
}
