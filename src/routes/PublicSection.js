import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Column, Row } from 'simple-flexbox';
import { SidebarContext } from 'components/sidebar';
import HomeHeaderComponent from 'components/header/HomeHeaderComponent';
import PublicRoutes from './PublicRoutes';

const useStyles = createUseStyles({
    container: {
        height: '100%',
        minHeight: 850
    },
    mainBlock: {
        // marginLeft: 255,
        padding: 30,
        '@media (max-width: 1080px)': {
            marginLeft: 0
        }
    },
    contentBlock: {
        marginTop: 54
    }
});

function PublicSection() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
        <SidebarContext>
            <Row className={classes.container}>
                <Column flexGrow={1} className={classes.mainBlock}>
                    <HomeHeaderComponent />
                    <div className={classes.contentBlock}>
                        <PublicRoutes />
                    </div>
                </Column>
            </Row>
        </SidebarContext>
    );
}

export default PublicSection;
