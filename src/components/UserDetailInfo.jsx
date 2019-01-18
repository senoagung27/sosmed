import React from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    card: {
        margin: theme.spacing.unit,
        width: 300,
        heigth: 350
    },
});

function UserDetailInfo(props) {
    const { classes } = props
    const { name, email, username, phone, website, address, company } = props.user

    return (
        <Card data-test="user-about-card" className={classes.card}>
            <CardContent >
                <Typography variant="title" component="h2" >
                    ABOUT USER
                </Typography>
                <Typography component="p">
                    {`Name: ${name}`}
                </Typography>
                <Typography component="p">
                    {`Username: @${username}`}
                </Typography>
                <Typography component="p">
                    {`Email: ${email}`}
                </Typography>
                <Typography component="p">
                    {`Phone: ${phone}`}
                </Typography>
                <Typography component="p">
                    {`Website: ${website}`}
                </Typography>
                <Typography component="p">
                    {`City: ${address.city}`}
                </Typography>
                <Typography component="p">
                    {`Company: ${company.name}`}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(UserDetailInfo);