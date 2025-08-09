import styled from "@emotion/styled"
import { colors } from "../design-token"

interface IKeywordType {
  children: string
}

export const Keyword = ({children} : IKeywordType) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div `
  padding: 7px 14px;
  border-radius: 100px;
  background-color: ${colors.gray[200]};
  color: ${colors.gray[500]};
  font-size: 12px;
`