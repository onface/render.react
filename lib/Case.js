import React , { Component } from "react"
import renderSymbol from "./symbol"
class Case extends Component {
    constructor (props) {
        super(props)
        const self = this
        self.state = {

        }
    }
    render() {
        const self = this
        return self.props.children
    }
}
Case.defaultProps = {
    __caseMark: renderSymbol.caseMark
}
module.exports = Case
