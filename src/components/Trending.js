import { useEffect, useState } from "react"
import { Card, Container, Row, Col, Image } from "react-bootstrap"
// import eiffelImage from "../assets/images/trending/eiffel.jpg"
// import ourFatherImage from "../assets/images/trending/our-father.jpg"
// import morMarvelImage from "../assets/images/trending/morMarvel.jpg"
// import hitAndRunImage from "../assets/images/trending/hit-n-run.jpg"
// import justMomImage from "../assets/images/trending/just-mom.jpg"
// import ttlImage from "../assets/images/trending/teka-teki-lika.jpg"
import axios from "axios"

const Trending = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then(response => {
        // console.log("datas =>", response.data.results)
        setMovies(response.data.results)
      })
  }, [])

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Trending Movies</h1>
        <br />
        <Row>
          {movies.map((result, index) => {
            return (
              <Col
                md={4}
                className="movieWrapper mb-3"
                id="trending"
                key={index}
              >
                <Card className="movieImage">
                  <Image
                    src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}
                    alt="Our Father Movies"
                    className="images"
                  />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                      <Card.Title className="text-center">
                        {result.title}
                      </Card.Title>
                      <Card.Text className="text-left">
                        {result.overview}
                      </Card.Text>
                      <Card.Text className="text-left">
                        Release Date : {result.release_date}
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Trending
