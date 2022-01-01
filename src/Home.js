import './styles/Home.css'
import {Button, Col, Container, Row} from "react-bootstrap";

const Home = () =>  {
    return (
        <>
            <div className="Section-one">
                <Container>
                <h3 className="Head-text">Simple. Secure. Seamless.</h3>
                <p className="Sub-text">It’s our mission to provide you with a delightful crypto trading experience!</p>
                    <Row>
                        <Col md={4}>
                            <div className="Box">
                            <h5 className="Box-header"> Trusted and Secure</h5>
                            <p className="Box-text">
                                We store the vast majority of the digital assets in secure offline cold storage.
                            </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="Box">
                            <h5 className="Box-header"> Delightful Experience</h5>
                            <p className="Box-text">
                                Our charting tools and simple order process will get you trading from day one.
                            </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="Box">
                            <h5 className="Box-header"> Beginner Friendly</h5>
                            <p className="Box-text">
                                Jamark Exchange offers an intuitive, beginner friendly interface and 24/7 support. No prior trading experience required.
                            </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="Section-two">
                <Row>
                    <Col md={9}>
                        <h5>Do you know Jamark Exchange has traded over $100,000 worth of bitcoin in 2021?</h5>
                    </Col>
                    <Col md={3}>
                        <a href="https://" className="btn btn-md btn-primary"> trade with us</a>
                    </Col>
                </Row>
            </div>

            <div className="Section-three">
                <Row>
                    <Col md={6}>
                        <p>
                            At Jamark exchange, we are the most reliable, fastest
                            and cheapest e-currency exchanger since 2009 (buy/sell perfectmoney, webmoney, bitcoin, in nigeria).
                        </p>
                        <p>
                            We are a perfect money exchanger of repute and we pride ourselves to
                            instantly fund perfect money account for both small and large orders efficiently.
                            We do not delay, we fund your perfect money accounts instantly.
                        </p>

                        <a href="https://" className="btn btn-md btn-success">
                            Get Started
                        </a>

                    </Col>
                    <Col md={6}>

                    </Col>
                </Row>
            </div>

            <div className="section-four">
                <Row>
                    <Col md={6}>
                        <h3>Rate</h3>
                    </Col>
                    <Col md={6}>
                        <h3>Contact US</h3>
                    </Col>
                </Row>
            </div>

            <div className="Section-five">
                <Container>
                    <h4>Words on the Street</h4>
                    <Row>
                        <Col md={4}>
                            one
                        </Col>

                        <Col md={4}>
                            two
                        </Col>

                        <Col md={4}>
                            three
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Home;
