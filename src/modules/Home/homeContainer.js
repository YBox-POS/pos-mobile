import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './duck'
import Home from './components'

const mapStateToProps = state => ({
  users: state.home.users
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
