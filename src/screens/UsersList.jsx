import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types';

import UserCard from '../components/UserCard'
import { fetchUsers } from '../actions'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        display: 'flex',
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        margin: theme.spacing.unit,
        overflowY: 'auto'
    },
    usersList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flex: 1
    },
    loadingCircular: {
        alignSelf: 'center'
    }
});

class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
        }

        this.renderUsersCard = this.renderUsersCard.bind(this)
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        this.props.fetchUsers(() => this.setState({ isLoading: false }))
    }

    renderLoading() {
        return (
            <CircularProgress color="primary" thickness={5} />
        );
    }

    renderUsersCard() {
        if (this.props.users.length > 0) {
            return this.props.users.map(user => {
                return (
                    <UserCard
                        user={user}
                        key={user.id}
                    />
                )
            })
        }
        else {
            return <div>Data not found</div>
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root} elevation={1}>
                <div className={classes.usersList}>
                    {
                        (!this.state.isLoading && this.props.users.length > 0) ?
                            this.renderUsersCard() : this.renderLoading()
                    }
                </div>
            </Paper>
        );
    }
}

UsersList.propTypes = {
    classes: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps, { fetchUsers })(withStyles(styles)(UsersList));