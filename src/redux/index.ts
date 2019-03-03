import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer, { initialRootState } from "./reducers"

const enhancers: any[] = []
const middleware: any[] = []

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension())
	}
}

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
)

export default createStore(
	rootReducer,
	initialRootState,
	composedEnhancers
)
