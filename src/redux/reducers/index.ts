import { combineReducers } from 'redux'
import dotProp from 'dot-prop-immutable'

import posts, { PostState, initialPostState } from './postReducer'

import { AnyAction } from '../actions/index'
import { GlobalActionType } from '../actions/globalActions'

export type RootState = {
	posts: PostState
}

export const initialRootState: RootState = {
	posts: initialPostState
}

const sliceReducers = combineReducers<RootState>({
	posts
})

export default (state: RootState = initialRootState, action: AnyAction): RootState => {
	switch (action.type) {
		case GlobalActionType.GLOBAL_SET_STATE:
			const { path, value } = action.payload
			return dotProp.set(state, path, value)
		default:
			return sliceReducers(state, action)
	}
}
