import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ButtonsLayout.css'; 

const Buttonslayout = () => {
  const exams = [
    'MRCS DHONS PART...',
    'MRCS PART A',
    'MRCGP PART 1',
    'MRCEM PRIMARY',
    'MRCEM INTERMEDIATE SBA',
    'MRCOG PART 1',
    'MRCOG PART 2',
    'MRCPCH PART 1...',
    'MRCP PART 1',
    'PLAB 1 Exam',
    'AMC CAT EXAM',
    'USMLE STEP 1',
    'QATAR (IFOM FOR DOCTORS)',
    'CANADA (MCCQE PART...)',
    'UAE (HAAD)'
  ];

  return (
    <Container className="exam-buttons-container">
      <Row>
        {exams.map((exam, index) => (
          <Col xs={6} sm={4} md={3} key={index} className="mb-3">
            <Button className="exam-btn" variant="primary">
              {exam}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Buttonslayout;
