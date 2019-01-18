import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { connect } from 'react-redux'

import UserDetailInfo from '../components/UserDetailInfo'
import PostAndAlbumTab from '../components/PostsAndAlbumsTabs'
import { fetchUser } from '../actions/index'

class UserProfile extends Component {

    state = {
        isLoading: true,
    }

    async componentDidMount() {
        const { location, history } = this.props;
        if (!this.props.match.params.page) {
            history.replace(location.pathname + '/posts');
        }
        await this.props.fetchUser(this.props.match.params.id)
        this.setState({isLoading: false})
    }

    renderLoading() {
        return (
            <CircularProgress color="primary" thickness={5} />
        );
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <div style={{ display: 'flex' }}>
                    {
                        (!this.state.isLoading && this.props.user.id) ?
                            <UserDetailInfo user={this.props.user} /> : ''
                    }
                </div>
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    <PostAndAlbumTab {...this.props} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}



export default connect(mapStateToProps, { fetchUser })(UserProfile)