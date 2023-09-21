import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

const Marker2 = ({ place, onClick }) => (
  <Wrapper
    alt={place.name}
    onClick={onClick}
  />
);

Marker2.defaultProps = {
  onClick: null,
};

Marker2.propTypes = {
  onClick: PropTypes.func,
  
};

export default Marker2;