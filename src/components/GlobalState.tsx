import React, { ReactNode, SyntheticEvent } from 'react'
import { connect } from 'react-redux'

import { setGlobal } from '../redux/actions/globalActions'
import $p from '../redux/statePaths'

type Props = {
	setGlobal: typeof setGlobal
}

type State = {
	titleInput: string,
	bodyInput: string
}

class GlobalState extends React.Component<Props, State> {
	state: Readonly<State> = {
		titleInput: "",
		bodyInput: ""
	}

	setTitle = (e: SyntheticEvent) => {
		e.preventDefault()
		this.props.setGlobal($p.posts.post.title.$p, this.state.titleInput)
	}

	setBody = (e: SyntheticEvent): void => {
		e.preventDefault()
		this.props.setGlobal($p.posts.post.body.$p, this.state.bodyInput)
	}

	render(): ReactNode {
		return (
			<div className="row">
				<form onSubmit={this.setTitle}>
					<div className="form-group col-sm">
						<label>Title</label>
						<div className="input-group">
							<input
								className="form-control"
								value={this.state.titleInput}
								onChange={e => this.setState({ titleInput: e.target.value })}
							/>
							<button
								className="input-group-append btn btn-primary"
								type="submit"
							>
								Set Title
							</button>
						</div>
					</div>
				</form>
				<form onSubmit={this.setBody}>
					<div className="form-group col-sm">
						<label>Body</label>
						<div className="input-group">
							<input
								className="form-control"
								value={this.state.bodyInput}
								onChange={e => this.setState({ bodyInput: e.target.value })}
							/>
							<button
								className="input-group-append btn btn-primary"
								type="submit"
							>
								Set Body
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default connect(
	() => { },
	{ setGlobal }
)(GlobalState)
