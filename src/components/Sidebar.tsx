import styled from "@emotion/styled"
import { colors, Flex, Text } from "../design-token"
import { BlogIcon, HtmlIcon, PersonIcon, PhoneIcon } from "../assets"


export const Sidebar = () => {
  return (
    <Container>
      <Flex isColumn={true} gap={24}>
        <Flex isColumn={true} gap={8}>
          <Flex isColumn={true} gap={4}>
            <Flex isColumn={true} gap={12}>
              <IconContainer>
                <HtmlIcon/>
              </IconContainer>
              <Text fontSize={20} fontWeight={600}>박지연</Text>
            </Flex>
            <Text fontSize={12} fontWeight={400} color={colors.gray[500]}>@j02on</Text>
          </Flex>
          <Text fontSize={16} fontWeight={400} color={colors.gray[700]}>Frontend</Text>
        </Flex>
        <Line/>
      </Flex>
      <Flex isColumn={true}>
        <Nav isNav>
          <BlogIcon/>
          블로그
        </Nav>
        <Nav isNav>
          <PersonIcon/>
          포트폴리오
        </Nav>
        <Nav isNav>
          <PhoneIcon/>
          연락처
        </Nav>
      </Flex>
    </Container>
  )
}

const Line = styled.div `
  width: 100%;
  height: 1px;
  background-color: ${colors.gray[300]};
`

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid ${colors.gray[300]};
  background-color: ${colors.gray[200]};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div `
  width: 280px;
  height: 100vh;
  background-color: ${colors.gray[100]};
  border-left: 1px solid ${colors.gray[300]};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Nav = styled.div<{isNav : boolean}>`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 12px;
  font-size: 18px;
  font-weight: 400;
  background-color: ${({isNav}) => isNav ? colors.yellow[600] : colors.gray[600]};
  color: ${({isNav}) => isNav ? colors.yellow[600] : colors.gray[600]};
`