import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Container, Title, IconContainer, SubElements, SubElement
} from './style';

const Item = ({
  title, path, elements
}) => {
  const [hovered, setHovered] = useState(false);
  const isActive = (checkPath) => window.location.pathname.includes(checkPath);
  const history = useHistory();
  return (
    <>
      <Container
        hovered={hovered}
        active={isActive(path)}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => history.push(path)}
      >
        <IconContainer active={isActive(path)} />
        <Title
          active={isActive(path)}
          hovered={hovered}
        >
          {title}
        </Title>
      </Container>
      <SubElements expand={isActive(path)}>
        {elements.map(
          (child, index) => !child.hidden && (
            <SubElement
              key={`${index + 1}`}
              active={isActive(child.path)}
              onClick={() => history.push(`${path}${child.path}`)}
            >
              <Title>{`- ${child.title}`}</Title>
            </SubElement>
          )
        )}
      </SubElements>
    </>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default Item;
