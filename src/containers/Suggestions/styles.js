import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  },
}))`
  background-color: #1e222b;
  height: 130px;
`

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`

export const ImageWrapper = styled.View`
  border: 2px solid #fff;
  border-radius: 40px;
`

export const Img = styled.Image``

export const Label = styled.Text`
  color: #fff;
  margin-top: 8px;
  font-size: 14px;
`
