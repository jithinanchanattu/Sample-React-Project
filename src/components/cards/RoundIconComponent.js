import React from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles} from 'react-jss';
import Avatar from 'react-avatar';

const useStyles = createUseStyles({
    container: {
        cursor: 'pointer',
        marginTop:50
    },
    
});

function RoundIconComponent({ className = '', img }) {
    const classes = useStyles();
    return (
        <Column flexGrow={1} className={classes.container} horizontal='center' vertical='center'>
            <Avatar  src={img} size="150" round={true} />
        </Column>

    );
}

export default RoundIconComponent;