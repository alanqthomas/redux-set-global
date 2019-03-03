import { ActionsUnion, createAction } from '@martin_hotell/rex-tils'

export enum PostActionType {
	POST_SET_TITLE = "post/SET_TITLE",
	POST_SET_BODY = "post/SET_BODY"
}

const actions = {
	postSetTitle: (title: string) => createAction(PostActionType.POST_SET_TITLE, { title }),
	postSetBody: (body: string) => createAction(PostActionType.POST_SET_BODY, { body })
}

export type PostAction = ActionsUnion<typeof actions>

export default actions
