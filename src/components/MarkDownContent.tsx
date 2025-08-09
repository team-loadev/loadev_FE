import { colors, Flex, Text } from '../design-token';
import styled from '@emotion/styled';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import 'highlight.js/styles/github.css';

interface IMarkdownType {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const  MarkDownContent = ({
  label,
  placeholder,
  onChange,
  value,
}: IMarkdownType) => {
  const [datas, setDatas] = useState<string>(value || '');

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDatas(e.target.value);
    onChange?.(e);
  };

  return (
    <Flex isColumn gap={8} width="100%">
      {label && (
        <>
          <Text fontWeight={400} fontSize={16}>{label}</Text>
          <Line />
        </>
      )}
      <Flex gap={40} width="100%">
        <TextArea
          value={datas}
          onChange={handleContentChange}
          placeholder={placeholder}
        />
        <MarkDown>
          <ReactMarkdown
            remarkPlugins={[remarkBreaks, remarkGfm]}
            rehypePlugins={[
              rehypeRaw,
              rehypeHighlight,
              rehypeSlug,
            ]}
          >
            {datas}
          </ReactMarkdown>
        </MarkDown>
      </Flex>
    </Flex>
  );
}

const MarkDown = styled.div`
  width: 50%;
  height: 300px;
  overflow-y: scroll;
  line-height: 1.6;
`;

const TextArea = styled.textarea`
  width: 50%;
  height: 300px;
  resize: none;
  font-size: 16px;
  font-weight: 400;
  color: ${colors.gray[900]};
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.gray[300]};
`;
