import styled from "@emotion/styled";
import { colors } from "../design-token";
import { Logo } from "../assets";

export const Header = () => {
  return (
    <Container>
      <Logo/>
    </Container>
  )
}

const Container = styled.header`
  width: 100%;
  height: 68px;
  border-bottom: 1px solid ${colors.gray[300]};
  padding-left: 67px;
  display: flex;
  align-items: center;
  background-color: ${colors.gray[100]};
  position: fixed;
`