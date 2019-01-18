import { combineReducers } from 'redux'

import UsersReducer from './UsersReducer'
import UserReducer from './UserReducer'
import PostsReducer from './PostsReducer'
import AlbumsReducer from './AlbumsReducer'
import AlbumReducer from './AlbumReducer'
import PostReducer from './PostReducer'
import CommentsReducer from './CommentsReducer'
import CommentReducer from './CommentReducer'
import PhotosReducer from './PhotosReducer'

const rootReducer = combineReducers({
    user: UserReducer,
    users: UsersReducer,
    posts: PostsReducer,
    albums: AlbumsReducer,
    album: AlbumReducer,
    post: PostReducer,
    comments: CommentsReducer,
    comment: CommentReducer,
    photos: PhotosReducer
})

export default rootReducer;