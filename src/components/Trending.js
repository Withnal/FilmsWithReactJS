import { Card, Container, Row, Col, Image } from "react-bootstrap"
import ourFatherImage from "../assets/images/trending/our-father.jpg"
import eiffelImage from "../assets/images/trending/eiffel.jpg"
import morMarvelImage from "../assets/images/trending/morMarvel.jpg"
import hitAndRunImage from "../assets/images/trending/hit-n-run.jpg"
import justMomImage from "../assets/images/trending/just-mom.jpg"
import ttlImage from "../assets/images/trending/teka-teki-lika.jpg"

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Trending Movies</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image
                src={eiffelImage}
                alt="Our Father Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Eiffel</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={ourFatherImage}
                alt="Our Father Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Our Father</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={morMarvelImage}
                alt="Our Father Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Morbius</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={hitAndRunImage}
                alt="Our Father Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Hit & Run</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={justMomImage}
                alt="Our Father Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Just Mom</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={ttlImage}
                alt="Our Father Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Teka-Teki Lika
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Trending
