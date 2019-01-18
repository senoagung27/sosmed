import axios from 'axios'

import {
    FETCH_USERS, FETCH_USER, FETCH_POSTS, FETCH_POST,
    FETCH_ALBUMS, FETCH_ALBUM, ADD_POST, UPDATE_POST,DELETE_POST, 
    SET_POST_DATA, SET_TITLEPOST, SET_BODYPOST,
    FETCH_COMMENTS, SET_COMMENT_DATA, SET_NAMECOMMENT, SET_EMAILCOMMENT,
    SET_BODYCOMMENT, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT,
    FETCH_PHOTOS
} from './types'

const ROOT_URL = 'https://be-smd.herokuapp.com'

export async function fetchUser(userId) {
    const response = await axios.get(`${ROOT_URL}/users/${userId}`)
    return {
        type: FETCH_USER,
        payload: response
    }
}

export async function fetchUsers(callback) {
    const response = await axios.get(`${ROOT_URL}/users`);
    callback();
    return {
        type: FETCH_USERS,
        payload: response
    }
}

export async function fetchPosts(userId) {
    const response = await axios.get(`${ROOT_URL}/posts?userId=${userId}`);
    return {
        type: FETCH_POSTS,
        payload: response
    }
}

export async function fetchPost(postId) {
    const response = await axios.get(`${ROOT_URL}/posts/${postId}`);
    return {
        type: FETCH_POST,
        payload: response
    }
}


export async function fetchAlbums(userId) {
    const response = await axios.get(`${ROOT_URL}/albums?userId=${userId}`);
    return {
        type: FETCH_ALBUMS,
        payload: response
    }
}

export async function fetchAlbum(albumId) {
    const response = await axios.get(`${ROOT_URL}/albums/${albumId}`);
    return {
        type: FETCH_ALBUM,
        payload: response
    }
}

export async function addPost(userId, title, body) {
    const params = { title, body, userId }
    const response = await axios.post(`${ROOT_URL}/posts`, params)
    return {
        type: ADD_POST,
        payload: response
    }
}

export async function updatePost(userId, id, title, body) {
    const params = { title, body, userId, id }
    const response = await axios.put(`${ROOT_URL}/posts/${id}`, params)
    return {
        type: UPDATE_POST,
        payload: response
    }
}

export async function deletePost(postid) {
    await axios.delete(`${ROOT_URL}/posts/${postid}`)
    return {
        type: DELETE_POST,
        payload: postid
    }
}

export function setPostData(post) {
    return {
        type: SET_POST_DATA,
        payload: post
    }
}

export function setTitlePost(title){
    return {
        type: SET_TITLEPOST,
        payload: title
    }
}

export function setBodyPost(body){
    return {
        type: SET_BODYPOST,
        payload: body
    }
}

export async function fetchComments(postId){
    const response = await axios.get(`${ROOT_URL}/comments?postId=${postId}`)

    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

export async function addComment(postId,name, email,body) {
    const params = { postId, name, email, body }
    const response = await axios.post(`${ROOT_URL}/comments`, params)
    return {
        type: ADD_COMMENT,
        payload: response
    }
}

export async function updateComment(commentid, name, email, body) {
    const params = { name, email, body }
    const response = await axios.patch(`${ROOT_URL}/comments/${commentid}`, params)
    return {
        type: UPDATE_COMMENT,
        payload: response
    }
}

export async function deleteComment(commentid) {
    await axios.delete(`${ROOT_URL}/comments/${commentid}`)
    return {
        type: DELETE_COMMENT,
        payload: commentid
    }
}

export function setCommentData(comment) {
    return {
        type: SET_COMMENT_DATA,
        payload: comment
    }
}

export function setNameComment(name){
    return {
        type: SET_NAMECOMMENT,
        payload: name
    }
}

export function setEmailComment(email){
    return {
        type: SET_EMAILCOMMENT,
        payload: email
    }
}

export function setBodyComment(body){
    return {
        type: SET_BODYCOMMENT,
        payload: body
    }
}

export async function fetchPhotos(albumid) {
    const response = await axios.get(`${ROOT_URL}/photos?albumId=${albumid}`)

    return {
        type: FETCH_PHOTOS,
        payload: response
    }
}