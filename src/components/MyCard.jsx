import React from 'react';
import Card from 'react-bootstrap/Card';
import Tag from './Tags.jsx';

function MyCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Tag color={props.tagColor} texto={props.tagText} />
      </Card.Body>
    </Card>
  );
}

export default MyCard;