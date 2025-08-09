import styled from "@emotion/styled"
import { colors, Flex } from "../design-token"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export const Category = () => {
  const navigate = useNavigate();
  const [navName, setNavName] = useState<string>('프로젝트')

  const navClick = (pathname : string, navName: string) => {
    navigate(`/${pathname}`)
    setNavName(navName)
  }
  return (
    <Flex gap={8} alignItems="center">
      <Keyword isNav={navName === "프로젝트"} onClick={() => navClick('project', '프로젝트')}>프로젝트</Keyword>
      <Keyword isNav={navName === "코딩"} onClick={() => navClick('coding', '코딩')}>코딩</Keyword>
      <Keyword isNav={navName === "개념"} onClick={() => navClick('concept', '개념')}>개념</Keyword>
      <Keyword isNav={navName === "이슈"} onClick={() => navClick('issue', '이슈')}>이슈</Keyword>
      <Keyword isNav={navName === "나"} onClick={() => navClick('me', '나')}>나</Keyword>
    </Flex>
  )
}

const Keyword = styled.div<{isNav : boolean}>`
  padding: 7px 14px;
  border-radius: 100px;
  background-color: ${({isNav}) => isNav ? colors.yellow[200] : colors.gray[200]};
  color: ${({isNav}) => isNav ? colors.yellow[600] : colors.gray[500]};
  font-size: 12px;
`