import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './duck'
import Main from './components'

const mapStateToProps = state => ({
  initialized: state.app.initialized
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Main)