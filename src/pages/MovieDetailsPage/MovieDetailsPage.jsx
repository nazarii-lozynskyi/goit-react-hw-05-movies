import { useState, useEffect } from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';

import PageHeading from '../../components/PageHeading';

import { Card, Row, Tab, Col, ListGroup, Container } from 'react-bootstrap';

import styles from './MovieDetailsPage.module.css';

const API_KEY = 'ab110991d3be565bd4f323a235f186b7';
const BASE_URL = 'https://api.themoviedb.org/3';

function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();

  const URL = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(result => setMovie(result))
      .catch(err => console.warn(err));
  }, []);
  return (
    <section className={styles.Section}>
      <Container>
        <PageHeading text="Tr" />

        <Card className="bg-dark text-white">
          <Card.Img
            src={
              movie.backdrop_path
                ? `https://www.themoviedb.org/t/p/original${movie.backdrop_path}`
                : ''
            }
            alt={movie.title}
          />
          <Card.ImgOverlay>
            <Card.Title>{movie.original_title}</Card.Title>
            <Card.Text>{movie.overview}</Card.Text>
            <Card.Text>
              {movie.genres && movie.genres.map(g => g.name).join(', ')}
            </Card.Text>
          </Card.ImgOverlay>
          <p>{`User score: ${Math.trunc(movie.vote_average * 10)}%`}</p>
          {movie.release_date && movie.release_date.slice(0, 4)}
        </Card>

        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                  Cast
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                  Reviews
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#link1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem delectus soluta cum quisquam mollitia illo
                  animi commodi, recusandae nihil. Obcaecati explicabo
                  perspiciatis nostrum officia molestias expedita cupiditate
                  dolorem enim! Inventore. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Earum deleniti omnis quidem
                  quisquam odio nostrum, assumenda magnam neque minus
                  voluptatibus natus aliquid, quasi repellendus error repellat
                  officiis? Repudiandae, earum cupiditate.
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  gggggggggggggggggggggggggggggggggggggggggggggg
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
}

export default MovieDetailsPage;
