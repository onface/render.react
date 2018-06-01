import { Component } from "react"
import extend from "extend"
class Render extends Component {
    render() {
        const self = this
        if (typeof self.props.children === 'function') {
            return self.props.children()
        }
        return self.props.children
    }
}
Render.Else = require('./Else')
require('./props').default(Render)
module.exports = Render
