import { PostAction } from './postActions'
import { GlobalAction } from './globalActions'

export type Action =
	| PostAction

export type AnyAction =
	| Action
	| GlobalAction

