import { isObject } from 'lodash'
import { initialRootState } from './reducers/index'

interface StatePath {
	$p: string
}

type PathTransform<T> = {
	[K in keyof T]: PathTransform<T[K]> & StatePath
}

function generatePaths<T>(obj: T, prefix = ""): PathTransform<T> {
	const keys: string[] = Object.keys(obj);
	const pathPrefix = prefix ? `${prefix}.` : "";

	return keys.reduce((result, key) => {
		const path = `${pathPrefix}${key}`
		const val: any = (obj as any)[key]
		if (isObject(val)) {
			(result as any)[key] = {
				$p: path,
				...generatePaths(val, path)
			}
		} else (result as any)[key] = { $p: path }
		return result;
	}, {} as PathTransform<T>);
}

export default generatePaths(initialRootState)
