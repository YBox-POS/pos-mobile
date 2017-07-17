import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './duck'
import ImageHome from './components'

const mapStateToProps = state => ({
  imagesa: state.image.imagesa
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ImageHome)