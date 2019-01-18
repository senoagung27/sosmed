import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import { fetchPhotos, fetchAlbum } from '../actions/index'
import PhotosDetailCard from '../components/PhotosDetailCard'

class AlbumDetail extends Component {

    state = {
        isLoading: true
    }

    async componentDidMount() {
        await this.props.fetchPhotos(this.props.match.params.albumid)
        await this.props.fetchAlbum(this.props.match.params.albumid)
        this.setState({ isLoading: false })
    }

    renderPhotosList() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                {this.props.photos.map((photo) => <PhotosDetailCard key={photo.id} photo={photo} />)}
            </div>
        )
    }

    renderLoading() {
        return (
            <CircularProgress color="primary" thickness={5} />
        );
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="display1" gutterBottom>
                    {this.props.album.title}
                </Typography>
                {
                    this.state.isLoading ? this.renderLoading() : this.renderPhotosList()
                }
            </div>
        )
    }
}

function mapStateToProps(state, ownprops) {
    return {
        photos: state.photos,
        album: state.album
    }
}
export default connect(mapStateToProps, { fetchPhotos, fetchAlbum })(AlbumDetail)