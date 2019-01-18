import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux'
import { addPost, updatePost, fetchPosts, setBodyPost, setTitlePost, setPostData } from '../actions/index'

import Button from '@material-ui/core/Button';

class PostEditor extends Component {

    handleCloseAndClearTextField() {
        this.props.handleClose()
        this.props.setPostData({ id: 0, title: "", body: "" })
    }

    async handleSave() {
        if(this.props.post.id > 0){
            await this.props.updatePost(this.props.userId, this.props.post.id, this.props.post.title, this.props.post.body)
        } else {
            await this.props.addPost(this.props.userId, this.props.post.title, this.props.post.body)
        }
        this.props.fetchPosts(this.props.userId)
        this.handleCloseAndClearTextField()
    }

    render() {
        return (
            <Dialog data-test="posteditor-dialog"
                open={this.props.isOpen}
                onClose={() => this.handleCloseAndClearTextField()}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">{`${this.props.post.id > 0 ? 'Edit':'Add'} Post`}</DialogTitle>
                <DialogContent>
                    <TextField
                        data-test="posteditor-title-textinput"
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        value={this.props.post.title}
                        onChange={(event) => this.props.setTitlePost(event.target.value)}
                    />
                    <TextField
                        data-test="posteditor-body-textinput"
                        autoFocus
                        margin="dense"
                        id="body"
                        label="Body"
                        type="text"
                        fullWidth
                        multiline
                        value={this.props.post.body}
                        onChange={(event) => this.props.setBodyPost(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleCloseAndClearTextField()} color="primary">
                        Cancel
                    </Button>
                    <Button data-test="posteditor-save-button" onClick={() => this.handleSave()} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

function mapStateToProps(state) {
    return {
        userId: state.user.id,
        post: state.post
    }
}
export default connect(mapStateToProps, { addPost, updatePost, fetchPosts, setPostData, setTitlePost, setBodyPost })(PostEditor)