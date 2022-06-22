import React from 'react';
import styled from 'styled-components';

const LiComponent = ({ children, hasContent }) => <Li hasContent={hasContent}>{children}</Li>;

const Li = styled.li`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  margin: 0px;
  padding: 0px;

  opacity: ${({ hasContent }) => (hasContent ? 1 : 0.5)};
  pointer-events: ${({ hasContent }) => (hasContent ? 'auto' : 'none')};

  & * {
    color: var(--txt-mid-contrast);
  }
  & a {
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 1px solid transparent;
  }

  @media screen and (hover: hover) {
    & a:hover {
      border-color: var(--txt-mid-contrast);
    }
  }
`;

export default LiComponent;
