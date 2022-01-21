import { Container, } from '@material-ui/core';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AddBook from '../pages/AddBook';
import BookList from '../pages/BookList';

const Home = () => {

  return <div>
      <Container>
          <Row>
            <Col>
              <AddBook />
            </Col>
          </Row>  
      </Container>

      <Container>
          <Row> 
             <Col>
                <BookList />
             </Col>
          </Row>
      </Container>

  </div>
};

export default Home;
