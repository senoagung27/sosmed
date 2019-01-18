import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ViewListOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom'

const styles = (theme) => ({
    title: {
        flexGrow: 1,
        marginLeft: 10
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    }
});

function Header(props) {
    const { classes } = props;
    return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.title}>
                        Social Media Dashboard
                    </Typography>
                    <Link style={{textDecoration:'none'}} to="/users">
                        <Button data-test="userslist-header-button" variant="contained" color="secondary" >
                            Users List
                        <ViewListOutlined className={classes.rightIcon} />
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);