declare module "dot-prop-immutable" {
	export function set<T extends Object, U extends T>(obj: T, prop: string | string[], val: T): U

	export function get(obj: Object, prop: string | string[]): any

	function _delete(obj: Object, prop: string | string[]): Object

	export { _delete as delete }

	export function toggle<T extends Object, U extends T>(obj: T, prop: string | string[], val: T): U

	export function merge(obj: Object, prop: string | string[], val: any): any
}
