import React , { Component } from "react"
class Else extends Component {
    render() {
        const self = this
        return self.props.children
    }
}
Else.defaultProps = {
    $$mark: 'render.react:Else'
}
module.exports = Else
