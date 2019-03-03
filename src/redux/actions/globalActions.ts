export enum GlobalActionType {
	GLOBAL_SET_STATE = "global/SET_STATE"
}

export const setGlobal = (path: string | string[], value: any) => ({
	type: GlobalActionType.GLOBAL_SET_STATE,
	payload: {
		path,
		value
	}
})

export type GlobalAction = ReturnType<typeof setGlobal>

