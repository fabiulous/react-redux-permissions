import { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { checkVisibility } from "./core"

class Authorization extends Component {
  static propTypes = {
    allowed: PropTypes.array,
    except: PropTypes.array,
    roles: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired,
    fallbackElement: PropTypes.node,
  }
  static defaultProps = {
    allowed: [],
    except: [],
    fallbackElement: null,
  }
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
    }
  }
  componentWillMount() {
    this.setVisibility()
  }

  componentDidUpdate() {
    this.setVisibility()
  }

  setVisibility() {
    const { roles, allowed, except } = this.props
    const { visible } = this.state
    const newVisibility = checkVisibility(roles, allowed, except)
    if (visible !== newVisibility) {
      this.setState({
        visible: newVisibility,
      })
    }
  }

  render() {
    const { children, fallbackElement } = this.props
    const { visible } = this.state
    if (visible) {
      return children
    }
    return fallbackElement
  }
}

export default connect(state => ({
  roles: state.permissions,
}))(Authorization)
