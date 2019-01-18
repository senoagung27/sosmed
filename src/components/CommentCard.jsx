import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Edit, Delete } from '@material-ui/icons';
import { connect } from 'react-redux'
import { deleteComment, fetchComments, setCommentData } from '../actions/index'

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
    await props.deleteComment(props.comment.id)
    props.fetchComments(props.comment.postId)
}

function handleEdit(props){
    props.setCommentData(props.comment)
    props.showEditorComment()
}

function CommentCard(props) {
    const { classes } = props

    return (
        <Card data-test="comment-card" className={classes.card}>
            <CardContent>
                <Typography data-test="comment-card-email" variant="headline" component="h2">
                    {props.comment.email}
                </Typography>
                <Typography data-test="comment-card-body" component="p">
                    {props.comment.body.split(/\\n|\n/).map((item, key) => {
                        return (
                            <span key={key}>
                                {item}
                                <br />
                            </span>
                        );
                    })}
                </Typography>
                <Typography data-test="comment-card-name" color="textSecondary">
                        {`Posted by : ${props.comment.name}`}
                    </Typography>
                </CardContent>
            <CardActions >
                <Button data-test="comment-card-edit-button" onClick={() => handleEdit(props)} className={classes.actionButton} color="default" size="small">
                    Edit Comment
                    <Edit className={classes.rightIcon} />
                </Button>
                <Button data-test="comment-card-delete-button" onClick={() => handleDelete(props)} className={classes.actionButton} color="default" size="small">
                    Delete Comment
                    <Delete className={classes.rightIcon} />
                </Button>
            </CardActions>
        </Card>
    );
}

export default connect(null, { deleteComment, fetchComments, setCommentData })(withStyles(styles)(CommentCard));