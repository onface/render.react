import { Component, isValidElement } from "react"
import extend from "extend"
import { defaultIf } from "./props"
import util from "util.react"
import errorMessage from "./errorMessage"
class Render extends Component {
    render() {
        const self = this
        let children = util.childrenToArray(self.props.children)
        if (typeof self.props.children === 'function') {
            return self.props.children()
        }
        let ifElseTarget
        let targetIndex
        if (true) {
            require('./if-else-error')(children)
            if (self.props.if) {
                targetIndex = 0
            }
            else {
                children.some(function (item, index) {
                    if (index === 0) { return }
                    // <Else if={}>
                    if (item.props.if !== defaultIf) {
                        if (item.props.if) {
                            targetIndex = index;return true
                        }
                    }
                    // <Else>
                    else {
                        targetIndex = index;return true
                    }
                })
            }
        }

        return children.map(function (item, index) {
            let isTraget = index === targetIndex
            let useDisplayStyle = {display: isTraget?'inline':'none'}
            if (self.props.useDisplay) {
                if (typeof item === 'string') {
                    return isTraget?item:''
                }
                if (isValidElement(item)) {
                    item = <div style={useDisplayStyle} >{item}</div>
                }
                return item
            }
            else if (isTraget) {
                return item
            }
            else {
                return ''
            }
        })
    }
}
Render.Else = require('./Else')
require('./props').default(Render)
module.exports = Render
