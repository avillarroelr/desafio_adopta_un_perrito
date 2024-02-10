import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Tag = (props) => {
  return <Badge bg={props.color}>{props.texto}</Badge>;
};

export default Tag;