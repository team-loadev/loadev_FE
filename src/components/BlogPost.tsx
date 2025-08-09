import styled from "@emotion/styled"
import { colors, Text } from "../design-token"
import { Keyword } from "./Keyword"

interface IPostType {
  title: string,
  content: string,
  keyword: string,
}

export const BlogPost = ({title, content, keyword} : IPostType) => {
  return (
    <Container>
      <Text fontSize={24} fontWeight={600}>{title}</Text>
      <Text fontSize={16} fontWeight={300} color={colors.gray[500]}>{content}</Text>
      <Keyword>{keyword}</Keyword>
    </Container>
  )
}

const Container = styled.div `
  width: 100%;
  padding: 35px 44px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`