import React from 'react'

import { TabContainer, TabUnderline, TabText } from './styles'

export function ActivityTab({ title, active = false }) {
  return (
    <TabContainer active={active}>
      <TabText active={active}>{title}</TabText>
      <TabUnderline active={active} />
    </TabContainer>
  )
}
