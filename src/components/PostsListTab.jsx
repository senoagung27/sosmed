import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'
import PostCard from './PostCard'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import PostEditor from '../components/PostEditor'

const styles = theme => ({
    scrollContainer: {
        flex: 1,
        overFlow: 'auto',
        overflowY: 'scroll'
    },
    containerList: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        flex: 1
    },
})

class PostsList extends Component {
    state = {
        isLoading: true,
        dialogOpen: false
    }

    async componentDidMount() {
        const userId = this.props.match.params.id;
        await this.props.fetchPosts(userId)
        this.setState({ isLoading: false })
    }

    renderPosts() {
        return this.props.posts.map(post => <PostCard key={post.id} showEditorPost={() =>this.setState({dialogOpen: true})} post={post} />)
    }

    renderLoading() {
        return (
            <div style={{display: 'flex', flex:1,justifyContent: 'center'}}>
            <CircularProgress color="primary" thickness={5} />
            </div>
        );
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.scrollContainer}>
                <div className={classes.containerList}>
                    {
                        (!this.state.isLoading && this.props.posts.length > 0) ?
                            this.renderPosts() : this.renderLoading()
                    }
                    <Button data-test="addnew-post-button" onClick={() => this.setState({dialogOpen: true})} style={{position: 'fixed', bottom: 30, right: 30}}variant="fab" color="primary" aria-label="Add" className={classes.button}>
                        <AddIcon />
                    </Button>
                </div>
                <PostEditor isOpen={this.state.dialogOpen} handleClose={() => this.setState({dialogOpen: false})}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(withStyles(styles)(PostsList))