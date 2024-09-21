import React, { useRef } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./carousal.css";


const testimonials = [
  {
    imgSrc: "https://www.secrets4exams.com/images/testimonial/2.jpg",
    text: "Really good collection of questions covering the entire topics and good explanations. Found to be very much helpful for preparation for MRCPCH.",
    author: "Dr Hala Abdo",
  },
  {
    imgSrc: "https://www.secrets4exams.com/images/testimonial/sonal-gupta.webp",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    author: "Soumitra Roy",
  },
  {
    imgSrc: "https://www.secrets4exams.com/images/testimonial/download.jpg",
    text: "This is a sample testimonial text to showcase the carousel feature. The content here demonstrates how different testimonials can be displayed in a rotating carousel.",
    author: "Jane Doe",
  },
  {
    imgSrc:
      "https://www.secrets4exams.com/images/testimonial/48FT-Bulbs-Included-Weatherproof-Outdoor-String-Lights-E26-E27-Commercial-Grade-Heavy-Duty-Strand-Lighting-With.webp",
    text: "Another example of a testimonial text that will be rotated in the carousel. It shows how various types of content can be accommodated.",
    author: "John Smith",
  },
  {
    imgSrc: "https://www.secrets4exams.com/images/testimonial/2.jpg",
    text: "Final testimonial example. The carousel component allows for easy navigation between different testimonials.",
    author: "Emily Johnson",
  },
];

const Carousal = () => {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <>
    <div className="about-container">
      <div className="about-image-section">
        <img
          src="https://www.secrets4exams.com/images/pages/about.jpg"
          alt="Medical professionals"
          className="about-image"
        />
      </div>
      <div className="about-text-section">
        <h2 className="about-titleee">ABOUT</h2>
        <h3 className="about-subtitle">
          We're passionate about helping our users succeed
        </h3>
        <p className="about-description">
          Discover everything about our identity, our principles, and our
          unwavering commitment to passionately assist our users in achieving
          success in their medical exams.
        </p>
        <button className="about-button">Learn More</button>
      </div>
    </div>
        

    <Container
      fluid
      className="testimonial-wrapper d-flex flex-column justify-content-center align-items-center"
    >
      <Row className="testimonial-card p-4">
        <Col xs={12}>
          <Carousel
            ref={carouselRef}
            controls={false}
            indicators={false}
            className="carousel-custom"
          >
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <Col xs={12} className="text-center">
                  <Image
                    src={testimonial.imgSrc}
                    className="testimonial-avatar"
                    alt={`Testimonial from ${testimonial.author}`}
                  />
                </Col>
                <Col xs={12} className="text-center mt-3">
                  <p className="testimonial-message">{testimonial.text}</p>
                  <h3 className="testimonial-author mt-3">
                    {testimonial.author}
                  </h3>
                </Col>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      <div className="mt-3">
        <button
          style={{
            backgroundColor: "#44bd79",
            color: "white",
            border: "none",
            padding: "5px 10px",
          }}
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>
        <button
          className="ms-3"
          style={{
            backgroundColor: "#44bd79",
            color: "white",
            border: "none",
            padding: "5px 10px",
          }}
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </Container>
    </>
  );
};

export default Carousal;
