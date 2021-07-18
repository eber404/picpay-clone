import styled from 'styled-components/native'

export const TabContainer = styled.View`
  align-items: center;
  margin-left: 10px;
`

export const TabUnderline = styled.View`
  background-color: ${({ active }) => (active ? '#10c86e' : 'transparent')};
  height: 3px;
  width: 70%;
`

export const TabText = styled.Text`
  color: ${({ active }) => (active ? '#10c86e' : '#fff')};
  font-size: 14px;
  padding-bottom: 3px;
  text-align: center;
`
