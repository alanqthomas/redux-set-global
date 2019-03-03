import { PostAction, PostActionType as actions } from '../actions/postActions'
import { Post } from '../../models/post'

export interface PostState {
	post: Post
}

export const initialPostState: PostState = {
	post: {
		title: "Global State",
		body: "We can change global state easily in Redux"
	}
}

export default (state: PostState = initialPostState, action: PostAction): PostState => {
	switch (action.type) {
		case actions.POST_SET_TITLE:
			const { title } = action.payload
			return { ...state, post: { ...state.post, title } }
		case actions.POST_SET_BODY:
			const { body } = action.payload
			return { ...state, post: { ...state.post, body } }
		default:
			return state
	}
}
