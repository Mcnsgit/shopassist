import { Link, useParams } from 'react-router-dom';
import { LoaderFunction } from '@remix-run/node';
import { useRouteData }



export default function Product(...args: []) {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <h2>Welcome to our shopping assistant</h2>
          <p>Here you can find a variety of products tailored for your needs.</p>
        </Col>
        <Col sm={4}>
          <Button variant="primary">Start Shopping</Button>
        </Col>
      </Row>
    </Container>
  );
}
