import React from 'react'
import { connect } from 'react-redux'

const IndexPage = ({ count }) => <div style={{fontSize: '28px'}}>Gatsby SSR, count: {count}</div>

export default connect(state => state)(IndexPage)
