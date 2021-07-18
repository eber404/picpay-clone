import React from 'react'
import { View } from 'react-native'

import { Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

import { ActivityTab } from '../../components/ActivityTab'

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles'

import avatar from '../../images/avatar.png'

export function Activities() {
  return (
    <Container>
      <Header>
        <View>
          <Title>Atividades</Title>
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <ActivityTab title="Todas" active />
          <ActivityTab title="Minhas" />
        </View>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar}></Avatar>
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@fulano</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Eber Camargo</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 100,00</Value>
            <Divider />
            <Feather name="lock" color="rgba(255,255,255, 0.4)" />
            <Date> há 6 meses</Date>
          </Details>
          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={14}
                color="rgba(255,255,255, 0.4)"
              />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign
                name="hearto"
                size={14}
                color="#rgba(255,255,255, 0.4)"
              />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  )
}
