import React, { useContext } from 'react';
import styled from 'styled-components';
import LocationSvg from '../../assets/svg/LocationSvg';
import ChainSvg from '../../assets/svg/ChainSvg';
import BuildingSvg from '../../assets/svg/BuildingSvg';
import TwitterSvg from '../../assets/svg/TwitterSvg';
import Li from './LiComponent';
import { context } from '../../context/context';

const defaultContent = () => 'Not Available';

const Links = () => {
  const { userSelected } = useContext(context)[0];
  const { location, blog, twitter_username, company } = userSelected;

  return (
    <Ul>
      <Li hasContent={location}>
        <LocationSvg />
        <span>{location || defaultContent()}</span>
      </Li>

      <Li hasContent={blog}>
        <ChainSvg />
        <a href={blog} target="_blank">
          {blog ? 'Blog' : defaultContent()}
        </a>
      </Li>

      <Li hasContent={company}>
        <BuildingSvg />
        <a href={company} target="_blank">
          {company || defaultContent()}
        </a>
      </Li>

      <Li hasContent={twitter_username}>
        <TwitterSvg />
        <a href={`https://twitter.com/${twitter_username}`} target="_blank">
          {twitter_username ? `@${twitter_username}` : defaultContent()}
        </a>
      </Li>
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  justify-content: space-evenly;
  margin: 0px;
  padding: 0px;
`;

export default Links;
