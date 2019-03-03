import React, { ReactNode } from 'react'
import { connect } from 'react-redux'

import GlobalState from './GlobalState'
import StandardRedux from './StandardRedux'

import { RootState } from '../redux/reducers/index'
import { Post } from '../models/post'

type Props = {
  post?: Post
}

const App = (props: Props) => {
  const { post } = props
  return (
    <div className="container">
      <h1>{post && post.title}</h1>
      <p>{post && post.body}</p>

      <h2>Global State</h2>
      <GlobalState />

      <h2>Standard Redux</h2>
      <StandardRedux />
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  post: state.posts.post
})

export default connect(mapStateToProps)(App)
