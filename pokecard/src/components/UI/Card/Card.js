
const Card = (props) => {
    return <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.cardImg} />
            <Card.Body>
                <Card.Title>{props.cardTitle}</Card.Title>
                <Card.Text>
                    {props.cardText}
                </Card.Text>
                <Button variant="primary">{props.cardButtonTitle}</Button>
            </Card.Body>
      </Card>
}

export default Card