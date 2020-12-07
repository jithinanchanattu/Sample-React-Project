import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { Button } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './commonStyle.css';
import RoundIconComponent from 'components/cards/RoundIconComponent';
import styled from 'styled-components';


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.1,
            width: '100%'
        }}
    />
);

const useStyles = createUseStyles({
    welcomeBlock: {
        margin: 'auto',
        width: '50%',
        padding: '10px',
    },
    imgHomeSlider: {
        width: '100%'
    },
    headingLabel: {
        fontSize: 40,
        fontWeight: 500,
        color: "grey",

    },
    lineContainer: {
        marginTop: 50,
    },
    textLabel: {
        color: "#585b71ff",
        fontSize: "large",
        marginTop: 30,
        marginRight: 50,
        marginBottom: 30,
        textAlign: "justify"
    },
    paddingTopBottom: {
        marginTop: 50,
        marginBottom: 50
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    minCardContainer: {
        flexGrow: 2,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    input: {

        width: "100%",
        padding: 20,
        boxSizing: "borderBox",
        marginBottom: 25,
        border: "2px solid #e9eaea",
        fontSize: 14,
        borderRadius: 5,
        outline: "none",
        transition: "all 0.5s ease",
    },
    rightButton: {
        float: "right"
    },
    inputStyle: {
        width: "50%",
        margin: 30,
        marginLeft: -5
    }

})
function HomePage() {
    const classes = useStyles();
    return (
        <Column>
            <ColoredLine color="grey" />
            <div class="row">
                <div class="col-md-6" className={classes.welcomeBlock}>
                    <label className={classes.headingLabel}>Welcome to Aria!</label><br />
                    <p className={classes.textLabel}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <Button variant="secondary" size="lg">Join Us</Button>
                </div>
                <div class="col-md-6"><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="Pixaby" className={classes.imgHomeSlider} /></div>
            </div>
            <br />
            <div className={classes.lineContainer}>
                <h2 ><span>How it Works</span></h2>
            </div>
            <br />
            <div className={classes.paddingTopBottom}>
                <div class="row">
                    <div class="col-md-4">
                        <img src={require('assets/images/flower3.jpg')}
                            alt='placeholder'
                        /><br />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div class="col-md-4">
                        <img src={require('assets/images/flower2.jpg')}
                            alt='placeholder'
                        /><br />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div class="col-md-4">
                        <img src={require('assets/images/flower3.jpg')}
                            alt='placeholder'
                        /><br />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
            <br />
            <div className={classes.lineContainer}>
                <h2 ><span>Our Services</span></h2>
            </div>
            <br />
            <Row
                className={classes.cardsContainer}
                wrap
                flexGrow={1}
                horizontal='space-between'
                breakpoints={{ 768: 'column' }}
            >
                <Row
                    className={classes.cardRow}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 384: 'column' }}
                >
                    <RoundIconComponent
                        className={classes.miniCardContainer}
                        img="https://m.media-amazon.com/images/M/MV5BNDBjMmJiNjUtZjc0MS00OTFlLTgxM2UtMTlhN2E0MGI0OTQwXkEyXkFqcGdeQXVyMTY4NjM3MDY@._V1_.jpg"
                    />
                    <RoundIconComponent
                        className={classes.miniCardContainer}
                        img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-baby-animals-1558535060.jpg"
                    />
                </Row>
                <Row
                    className={classes.cardRow}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 384: 'column' }}
                >
                    <RoundIconComponent
                        className={classes.miniCardContainer}
                        img="https://cloud.mysteryscience.com/image/fetch/f_auto,q_auto/https://www.dropbox.com/s/dr7tlb0jk06vrjp/Thumbnail-Mini-Lesson-Wow_Baby-Animals_shutterstock_1065233273.jpg%3Fdl%3D1"
                    />
                    <RoundIconComponent
                        className={classes.miniCardContainer}
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKogRAQtx4Do7li4jYHdVeIL_Oc9IujF3HA&usqp=CAU"
                    />
                </Row>
            </Row>
            <br />
            
            <h3 className="h3-label">Contact Us</h3>
            <div className="container" style={{ display: "flex" }} >
            
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <input type="text" className={classes.input} placeholder="First Name" />
                        </div>
                        <div className="col-6">
                            <input type="text" className={classes.input} placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <input type="text" className={classes.input} placeholder="Email Address" />
                        </div>
                    </div>
                </div>
                <div className="col-6" >
                    <textarea style={{height:160}} className={classes.input} placeholder="Message"></textarea>
                </div>
            </div>

            <br />

        </Column>

    );

}
export default HomePage;