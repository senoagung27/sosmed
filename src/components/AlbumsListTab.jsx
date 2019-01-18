import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import { fetchAlbums } from '../actions/index'
import AlbumCard from './AlbumCard'

const styles = theme => ({
    scrollContainer: {
        flex: 1,
        overFlow: 'auto',
        overflowY: 'scroll'
    },
    containerList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        flex: 1
    },
})

class AlbumsList extends Component {

    state = {
        isLoading: true
    }

    async componentDidMount() {
        const userId = this.props.match.params.id;
        await this.props.fetchAlbums(userId)
        this.setState({ isLoading: false })
    }

    renderAlbums() {
        return this.props.albums.map(album => <AlbumCard key={album.id} album={album} userId={this.props.match.params.id}/>)
    }

    renderLoading() {
        return (
            <CircularProgress color="primary" thickness={5} />
        );
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.scrollContainer}>
                <div className={classes.containerList}>
                    {
                        (!this.state.isLoading && this.props.albums.length > 0) ?
                            this.renderAlbums() : this.renderLoading()
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        albums: state.albums
    }
}

export default connect(mapStateToProps, { fetchAlbums })(withStyles(styles)(AlbumsList));