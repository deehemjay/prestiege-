import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Banner = (props) => {
  return (
      <>
          <Container fluid className='banner-contents'>
              <Row>
                  <Col lg={6} md={6} sm={6} xs={6} className='txt'>
                      <h3 className='fs-1'>{props.text}</h3>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6} className='banner'>
                      <img src={props.img} alt="ijk" className='img-fluid' />
                  </Col>
              </Row>
      </Container>
      </>
  )
}

export default Banner