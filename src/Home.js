import './styles/Home.css'
import {Button, Col, Container, Form, Row, Table} from "react-bootstrap";
import ImageOne from './assets/images/wavy-tech.png';
import ImageTwo from  './assets/images/mario.png'
import ImageTrust from './assets/images/trusted.png'
import ImageDelight from './assets/images/delightful.png'
import ImageFriendly from './assets/images/friendly.jpg'
import VideoOne from './assets/images/jamark-video.mp4'
import React from "react";

const Home = () =>  {
    return (
        <>
            <div className="Hero">
                <Row>
                    <Col lg={7}>

                    </Col>
                    <Col lg={5} className="Text col-md-12">
                        <div className="Float">
                            <h6>
                                Buy and Sell CryptoCurrency at the best price, no hidden fees.
                                Premier service to buy bitcoin instantly.
                            </h6>
                            <h5>Jamark <span className="Exchange">Exchange</span></h5>

                            <Button className="btn btn-lg btn-success">
                                Open Live Chat to trade instantly
                            </Button>
                        </div>
                    </Col>

                </Row>
            </div>
            <div className="Section-one">
                <Container>
                <h3 className="Head-text">Easy. Reliable. Consistent.</h3>
                <p className="Sub-text">Jamark Exchange brings you trading with ease</p>
                    <Row>
                        <Col md={4}>
                            <div className="Box">
                                <img src={ImageTrust} alt="box-im" className="Box-im"/>
                            <h5 className="Box-header"> Trusted and Secure</h5>
                            <p className="Box-text">
                                We store the vast majority of the digital assets in secure offline cold storage.
                            </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="Box">
                                <img src={ImageDelight} alt="box-im" className="Box-im"/>
                            <h5 className="Box-header"> Delightful Experience</h5>
                            <p className="Box-text">
                                Our charting tools and simple order process will get you trading from day one.
                            </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="Box">
                                <img src={ImageFriendly} alt="box-im" className="Box-im"/>
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
                        <h5>Do you know Jamark Exchange is one of the top crypto exchange in 2021?</h5>
                    </Col>
                    <Col md={3}>
                        <a href="https://" className="btn btn-md btn-primary"> Trade with Us <i
                            className="fas fa-arrow-right"></i></a>
                    </Col>
                </Row>
            </div>

            <div className="Section-three">
                <Container>
                    <Row>
                        <Col md={5}>
                            <h4>About Jamark Exchange</h4>
                            <p>
                                Jamark Exchange is the best and reliable trading platform, where we buy all cryptocurrencies (BTC, ETH, USDT, XRP, TRC, BNB) etc.
                            </p>

                            <p>
                                And all countries gift cards (STEAM, AMAZON, ITUNES, GOOGLE PLAY, APPLE, AMERICAN EXPRESS) etc.
                                Make us your crypto and gift cards plugs (Bulk and Unit) </p>
                                <p>
                                    Trust us for fast payment. We’re available 24/7 for all your deals.
                                </p>

                            <a href="https://" className="btn btn-md btn-success">
                                Get Started <i
                                className="fas fa-arrow-right"></i>
                            </a>

                        </Col>
                        <Col md={6}>

                            <img
                                src={ImageOne}
                                className="img-fluid"
                                alt="About Jamark"
                            />

                        </Col>
                    </Row>

                </Container>

            </div>

            <div className="Section-four" id="rates">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h3>Rate</h3>

                            <div className="Table">
                                <Table className="table-bordered">
                                    <thead>
                                    <tr>
                                        <th>Service</th>
                                        <th>Rate</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="Strong"> Bitcoin </td>
                                        <td className="Soft"> 519/$</td>
                                    </tr>
                                    <tr>
                                        <td className="Strong"> Ethereum </td>
                                        <td className="Soft"> 519/$</td>
                                    </tr>
                                    <tr>
                                        <td className="Strong"> Gift Cards </td>
                                        <td className="Soft"> Depends</td>
                                    </tr>
                                    <tr>
                                        <td className="Strong"> Perfect Money</td>
                                        <td className="Soft"> 450/$</td>
                                    </tr>
                                    <tr>
                                        <td className="Strong"> Skrill </td>
                                        <td className="Soft"> 300/$</td>
                                    </tr>

                                    <tr>
                                        <td className="Strong"> All Crypto Currencies </td>
                                        <td className="Soft"> 510/$</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                        <Col md={6}>
                            <h3>Contact US</h3>
                            <div className="Form">
                                <Form method="POST" action="#">
                                    <div className="form-group">
                                        <label for="fullname">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Full Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" className="form-control" placeholder="Subject of the Message"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="msg" cols="30" rows="5" className="form-control">

                                        </textarea>
                                    </div>

                                    <div className="form-group text-center">
                                        <Button type="submit" className="btn btn-md btn-success">Send Message</Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

            <div className="Section-live">
                <div className="Chart">
                    <h3>Live Chart</h3>
                    <Container>

                        <div style={{height: '433px', backgroundColor: '#FFFFFF', overflow: 'hidden', boxSizing: 'border-box', border: '1px solid #56667F', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', fontSize: '12px', fontFeatureSettings: 'normal', textSizeAdjust: '100%', boxShadow: 'inset 0 -20px 0 0 #56667F', padding: '0px', margin: '0px', width: '100%'}}>
                            <div style={{height: '413px', padding: '0px', margin: '0px', width: '100%'}}>
                                <iframe title="live chart" src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=6&pref_coin_id=1505&graph=yes" width="100%" height="409px" scrolling="auto" marginWidth={0} marginHeight={0} frameBorder={0} border={0} style={{border: 0, margin: 0, padding: 0}} /></div>
                            <div style={{color: '#FFFFFF', lineHeight: '14px', fontWeight: 400, fontSize: '11px', boxSizing: 'border-box', padding: '2px 6px', width: '100%', fontFamily: 'Verdana, Tahoma, Arial, sans-serif'}}>
                                <a href="https://coinlib.io" target="_blank" rel="noreferrer" style={{fontWeight: 500, color: '#FFFFFF', textDecoration: 'none', fontSize: '11px'}}>Cryptocurrency Prices</a>&nbsp;by Coinlib</div>
                        </div>

                    </Container>
                </div>
            </div>


            <div className="Section-five">
                <Container>
                    <h4>Words on the Street</h4>

                    <Row>
                        <Col md={4}>
                            <div className="Testimony">
                                <video width="100%" height="100%" preload="auto" controls>
                                    <source src={VideoOne} type="video/mp4" />
                                    Your browser does not support HTML5 video.
                                </video>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className="Testimony">
                                <div className="Testimony-text">
                                    <p>This website is very fast and reliable for buying bitcoins. I received my money in less than 3 minutes after sending them my coins. Thanks Boss!!!.
                                    </p>
                                </div>                                <div className="Profile">
                                    <Row>
                                        <Col md={3} className="col-3">
                                            <img src={ImageTwo} alt="profile" className="Round-profile"/>
                                        </Col>
                                        <Col md={9} className="col-9">
                                            <h6>Jude Johnson</h6>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>

                        <Col md={4}>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Home;
