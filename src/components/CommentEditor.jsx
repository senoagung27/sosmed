import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux'
import { addComment, updateComment, fetchComments, setBodyComment, setNameComment, setEmailComment, setCommentData } from '../actions/index'

import Button from '@material-ui/core/Button';

class CommentEditor extends Component {

    handleCloseAndClearTextField() {
        this.props.handleClose()
        this.props.setCommentData({ id: 0, name: "", email: "", body: "" })
    }

    async handleSave() {
        if (this.props.comment.id > 0) {
            await this.props.updateComment(this.props.comment.id, this.props.comment.name, this.props.comment.email, this.props.comment.body)
        } else {
            await this.props.addComment(this.props.post.id, this.props.comment.name, this.props.comment.email, this.props.comment.body)
        }
        this.props.fetchComments(this.props.post.id)
        this.handleCloseAndClearTextField()
    }

    render() {
        return (
            <Dialog
                open={this.props.isOpen}
                onClose={() => this.handleCloseAndClearTextField()}
                aria-labelledby="form-dialog-title"
                data-test="comment-editor-dialog"
            >
                <DialogTitle id="form-dialog-title">{`${this.props.post.id > 0 ? 'Edit' : 'Add'} Post`}</DialogTitle>
                <DialogContent>
                    <TextField
                        data-test="comment-editor-name"
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Name"
                        type="text"
                        fullWidth
                        value={this.props.comment.name}
                        onChange={(event) => this.props.setNameComment(event.target.value)}
                    />
                    <TextField
                        data-test="comment-editor-email"
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={this.props.comment.email}
                        onChange={(event) => this.props.setEmailComment(event.target.value)}
                    />
                    <TextField
                        data-test="comment-editor-body"
                        autoFocus
                        margin="dense"
                        id="body"
                        label="Body"
                        type="text"
                        fullWidth
                        multiline
                        value={this.props.comment.body}
                        onChange={(event) => this.props.setBodyComment(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleCloseAndClearTextField()} color="primary">
                        Cancel
                    </Button>
                    <Button data-test="comment-editor-save-button" onClick={() => this.handleSave()} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

function mapStateToProps(state) {
    return {
        comment: state.comment,
        post: state.post
    }
}
export default connect(mapStateToProps, { addComment, updateComment, fetchComments, setCommentData, setNameComment, setEmailComment, setBodyComment })(CommentEditor)