import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../state/actions/todo'
import Link from '../../components/Link'

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

//@ts-ignore
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink