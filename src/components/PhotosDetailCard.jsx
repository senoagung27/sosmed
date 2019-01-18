import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
    card: {
        maxWidth: 200,
        margin: theme.spacing.unit,
        display: 'flex',
        flexDirection: 'column'
    },
    media: {
        objectFit: 'cover',
    },
})

function PhotosDetailCard(props) {
    const {classes} = props
    return (
        <Card data-test="photo-detail-card" className={classes.card}>
            <CardMedia
                component="img"
                className={classes.media}
                height="150"
                image={props.photo.url}
            />
            <CardContent style={{ flex: 1 }}>
                <Typography style={{ flex: 1 }} component="p">
                    {props.photo.title}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(PhotosDetailCard)