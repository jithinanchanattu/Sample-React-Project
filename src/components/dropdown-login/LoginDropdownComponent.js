import React, { useState } from 'react';
import { arrayOf, element, func, number, oneOfType, shape, string } from 'prop-types';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
// import { IconArrowUp, IconLogout } from 'assets/icons';

const useStyles = createUseStyles((theme) => ({
    arrowContainer: {
        position: 'absolute',
        top: -19,
        right: 15
    },
    inputText: {
        padding: 2,
        marginLeft: 10,
        marginRight: 10,
        marginTop:10,
        marginBottom:2,
    },
    forgotPasswordLink: {
        fontSize: 14,
        marginLeft: 10,
        cursor: 'pointer',
    },
    dropdownButton: {
        alignItems: 'center',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        padding: 0,
        outline: 'none'
    },
    dropdownContainer: {
        position: 'relative',
    },
    dropdownItemsContainer: {
        background: 'white',
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 5,
        minWidth: 170,
        padding: 0,
        position: 'absolute',
        zIndex: 9999,
        // width: '100%',
        top: ({ position }) => position.top,
        right: ({ position }) => position.right,
        bottom: ({ position }) => position.bottom,
        left: ({ position }) => position.left,
        '& button:first-of-type:hover div > svg > path': {
            fill: theme.color.paleBlue
        }
    },
    dropdownItem: {
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        fontSize: 16,
        outline: 'none',
        padding: '10px 10px',
        '&:hover': {
            background: theme.color.paleBlue
        },
        '&:after': {
            content: '" "',
            display: 'block',
            position: 'relative',
            bottom: -10,
            width: '100%',
            height: 1,
            background: theme.color.paleBlue
        },
        '&:last-child:after': {
            content: '',
            display: 'none'
        }
    }
}));

function LoginDropdownComponent({ label, options, position }) {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const theme = useTheme();
    const classes = useStyles({ theme, position });

    function onDropdownClick() {
        setUserMenuOpen((prev) => !prev);
    }

    function onLogin(onClick) {
        localStorage.setItem('isUserLoggedIn', true);
        setUserMenuOpen(false);
        onClick && onClick();
        window.location.href = '/dashboard';
        // this.props.history.push('/dashboard');
    }

    return (
        <Column className={classes.dropdownContainer}>
            <button className={classes.dropdownButton} onClick={onDropdownClick}>
                {label}
            </button>
            {userMenuOpen && (
                <Column className={classes.dropdownItemsContainer}>
                    <input type="text" placeholder="Username" className={classes.inputText}/>
                    <input type="password" placeholder="Password" className={classes.inputText}/>
                    <span className={classes.forgotPasswordLink}>Forgot Password</span>
                    <button className={classes.dropdownItem} onClick={() => onLogin()} >Login</button>
                    {/* {options.map((option, index) => (
                        <button
                            key={`option-${index}`}
                            className={classes.dropdownItem}
                            onClick={() => onItemClick(option.onClick)}
                        >
                            {option.label}
                            {index === 0 && (
                                <div className={classes.arrowContainer}>
                                    <IconArrowUp />
                                </div>
                            )}
                        </button>
                    ))} */}
                </Column>
            )}
        </Column>
    );
}

LoginDropdownComponent.propTypes = {
    label: oneOfType([string, element]),
    options: arrayOf(
        shape({
            label: oneOfType([string, arrayOf(element)]),
            onClick: func
        })
    ),
    position: shape({
        top: number,
        right: number,
        bottom: number,
        left: number
    })
};

LoginDropdownComponent.defaultProps = {
    position: {
        top: 52,
        right: -6
    }
};

export default LoginDropdownComponent;
