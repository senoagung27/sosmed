import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

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

function AlbumCard(props) {
    const { classes } = props;
    return (
            <Card data-test="album-card" className={classes.card}>
                <CardActionArea style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'flex-start' }}>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        height="150"
                        image={`https://placeimg.com/300/300/any?${Math.random()}`}
                        title="Contemplative Reptile"
                    />
                    <CardContent style={{ flex: 1 }}>
                        <Typography style={{ flex: 1 }} component="p">
                            {props.album.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/user/${props.userId}/album/${props.album.id}`} style={{ textDecoration: 'none' }}>
                        <Button data-test="album-card-button" size="small" color="secondary">
                            See Photos Album
                        </Button>
                    </Link>
                </CardActions>
            </Card>
            );
        }
        
export default withStyles(styles)(AlbumCard);