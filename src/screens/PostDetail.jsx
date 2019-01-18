import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser, fetchPost, fetchComments } from '../actions/index'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import CommentCard from '../components/CommentCard'
import CommentEditor from '../components/CommentEditor'

class PostDetail extends Component {
    state = {
        isLoading: true,
        dialogOpen: false
    }

    async componentDidMount() {
        await this.props.fetchUser(this.props.match.params.id)
        await this.props.fetchPost(this.props.match.params.postid)
        await this.props.fetchComments(this.props.match.params.postid)
        this.setState({ isLoading: false })
    }

    renderLoading() {
        return (
            <CircularProgress color="primary" thickness={5} />
        );
    }

    renderPostDetail() {
        return (
            <Card style={{ flex: 1, margin: 10 }}>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.props.post.title}
                    </Typography>
                    <Typography component="p">
                        {this.props.post.body.split(/\\n|\n/).map((item, key) => {
                            return (
                                <span key={key}>
                                    {item}
                                    <br />
                                </span>
                            );
                        })}
                    </Typography>
                    <Typography color="textSecondary">
                        {`Posted by : @${this.props.user.username}`}
                    </Typography>
                </CardContent>
            </Card>
        )
    }

    renderComments(){
        return this.props.comments.map((comment) => <CommentCard key={comment.id} comment={comment} showEditorComment={() =>this.setState({dialogOpen: true})} />)
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', flex:1 }}>
                <div style={{ flex: 1 }}>
                    {
                        this.state.isLoading ? '' : this.renderPostDetail()
                    }
                </div>
                <div>
                    {
                        (!this.state.isLoading && this.props.comments.length > 0) ? this.renderComments() : this.renderLoading()
                    }
                </div>
                <Button data-test="addnew-comment-button" onClick={() => this.setState({dialogOpen: true})} style={{position: 'fixed', bottom: 30, right: 30}}variant="fab" color="primary" aria-label="Add">
                        <AddIcon />
                </Button>
                <CommentEditor isOpen={this.state.dialogOpen} handleClose={() => this.setState({dialogOpen: false})} />
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        post: state.post,
        comments: state.comments
    }
}

export default connect(mapStateToProps, { fetchUser, fetchPost, fetchComments })(PostDetail)