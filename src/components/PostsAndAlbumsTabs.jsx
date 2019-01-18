import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Route } from 'react-router-dom'

import AlbumsListTab from './AlbumsListTab'
import PostsListTab from './PostsListTab'

const styles = theme => ({
    root: {
        margin: theme.spacing.unit,
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class PostsAndAlbumsTabs extends Component {
    state = {
        value: 0,
    };

    componentDidMount() {
        const pageName = this.props.match.params.page;
        if(pageName === 'posts' || !pageName){
            this.setState({value: 0})
        } else {
            this.setState({value: 1})
        }
    }

    handleChange = (event, value) => {
        this.setState({ value });
        const userId = this.props.match.params.id;
        this.props.history.push(value === 0 ? `/user/${userId}/posts` : `/user/${userId}/albums`);
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar style={{ alignItems: 'center' }} position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab data-test="posts-tab" label="Posts" />
                        <Tab data-test="albums-tab" label="Albums" />
                    </Tabs>
                </AppBar>
                <Route path="/user/:id/posts" component={PostsListTab} />
                <Route path="/user/:id/albums" component={AlbumsListTab} />
            </div>
        );
    }
}

export default withStyles(styles)(PostsAndAlbumsTabs);