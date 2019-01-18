import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Edit, Delete } from '@material-ui/icons';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePost, fetchPosts, setPostData } from '../actions/index'

const styles = theme => ({
    card: {
        margin: theme.spacing.unit,
        flex: 1,
        heigth: 350
    },
    pos: {
        marginBottom: 12,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    }
});

async function handleDelete(props) {
    await props.deletePost(props.post.id)
    props.fetchPosts(props.post.userId)
}

function handleEdit(props) {
    props.setPostData(props.post)
    props.showEditorPost()
}

function PostCard(props) {
    const { classes } = props

    return (
        <Card data-test="user-post-card" className={classes.card}>
            <CardContent>
                <Typography data-test="user-post-card-title" variant="headline" component="h2">
                    {props.post.title}
                </Typography>
                <Typography data-test="user-post-card-body" component="p">
                    {props.post.body.split(/\\n|\n/).map((item, key) => {
                        return (
                            <span key={key}>
                                {item}
                                <br />
                            </span>
                        );
                    })}
                </Typography>
            </CardContent>
            <CardActions data-test="user-post-card-action">
                <Link to={`/user/${props.post.userId}/post/${props.post.id}`} style={{ textDecoration: 'none' }}>
                    <Button data-test="post-card-detail-button" className={classes.actionButton} color="secondary" size="small">
                        Detail Post
                </Button>
                </Link>
                <Button data-test="user-post-edit-button" onClick={() => handleEdit(props)} className={classes.actionButton} color="default" size="small">
                    edit Post
                    <Edit className={classes.rightIcon} />
                </Button>
                <Button data-test="user-post-delete-button" onClick={() => handleDelete(props)} className={classes.actionButton} color="default" size="small">
                    delete Post
                    <Delete className={classes.rightIcon} />
                </Button>
            </CardActions>
        </Card>
    );
}

export default connect(null, { deletePost, fetchPosts, setPostData })(withStyles(styles)(PostCard));