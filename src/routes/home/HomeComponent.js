import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import TodayTrendsComponent from './TodayTrendsComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';
import { Button } from 'react-bootstrap';

const useStyles = createUseStyles({
    alignCenter:{
        margin: 'auto',
    },
    introBlockHome: {
        // margin: 'auto'
        margin: 'auto',
        width: '50%',
        padding: '10px',
    },
    imgHomeSlider:{
        width:'100%'
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
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    }
});

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            width: '100%'
        }}
    />
);

function HomeComponent() {
    const classes = useStyles();
    return (
        <Column>
         <ColoredLine color="grey" />   
            <div class="row">
                <div class="col-md-6" className={classes.introBlockHome}>
                    <h1>Welcome to Aria!</h1><br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <Button type="button" class="btn btn-primary" >Join Us</Button>
                </div>
                <div class="col-md-6"><img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Trulli" className={classes.imgHomeSlider} /></div>
            </div>
            <br/>            
            <ColoredLine color="grey" /> 
            <h3 className={classes.alignCenter}>How it Works!</h3>  
            <br/>
            <div class="row">
                <div class="col-md-4">
                    <img src={require('assets/images/imgholder.jpg')}
                        alt='placeholder'
                    /><br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="col-md-4">
                    <img src={require('assets/images/imgholder.jpg')}
                        alt='placeholder'
                    /><br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="col-md-4">
                    <img src={require('assets/images/imgholder.jpg')}
                        alt='placeholder'
                    /><br/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            <br/>
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
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Unresolved'
                        value='60'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Overdue'
                        value='16'
                    />
                </Row>
                <Row
                    className={classes.cardRow}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 384: 'column' }}
                >
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Open'
                        value='43'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='On hold'
                        value='64'
                    />
                </Row>
            </Row>
            <div className={classes.todayTrends}>
                <TodayTrendsComponent />
            </div>
            <Row
                horizontal='space-between'
                className={classes.lastRow}
                breakpoints={{ 1024: 'column' }}
            >
                <UnresolvedTicketsComponent containerStyles={classes.unresolvedTickets} />
                <TasksComponent containerStyles={classes.tasks} />
            </Row>
        </Column>
    );
}

export default HomeComponent;
