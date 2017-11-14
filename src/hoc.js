import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { checkVisibility } from "./core"

const Authorization = (allowed = [], except = []) =>
  (WrappedComponent, FallbackElement) => {
    class WithAuthorization extends Component {
      static propTypes = {
        roles: PropTypes.array.isRequired,
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
        const { roles } = this.props
        const { visible } = this.state
        const newVisibility = checkVisibility(roles, allowed, except)
        if (visible !== newVisibility) {
          this.setState({
            visible: newVisibility,
          })
        }
      }

      render() {
        const { visible } = this.state
        if (visible) {
          return <WrappedComponent {...this.props} />
        }
        return typeof FallbackElement === "function" ? <FallbackElement /> : FallbackElement
      }
    }

    return connect(state => ({
      roles: state.permissions,
    }))(WithAuthorization)
  }

export default Authorization
