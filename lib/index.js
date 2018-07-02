import { Component, isValidElement } from "react"
import extend from "extend"
import { defaultIf } from "./props"
import util from "util.react"
import errorMessage from "./errorMessage"
import renderSymbol from "./symbol"
class Render extends Component {
    render() {
        const self = this
        let children = util.childrenToArray(self.props.children)
        if (typeof self.props.children === 'function') {
            return self.props.children()
        }
        let ifElseTarget
        let targetIndex
        if (self.props.if !== renderSymbol.if) {
            require('./if-else-error')(children)
            if (self.props.if) {
                 argetIndex = 0
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
                    return false
                }
            })
        }
        else if(self.props.switch !== renderSymbol.switch){
            let isCase = function (comp) {
                if (typeof comp.props !== 'undefined' && comp.props.__caseMark === renderSymbol.caseMark) {
                    return true
                }
                return false
            }
            var resultChildren = children.map(function (item) {
                let switchValue = self.props.switch
                if (isCase(item) && item.props.eql === switchValue) {
                    return true
                }
                return false
            })
            let notMatch = resultChildren.every((item) => {
                return item === false
            })
            if (notMatch && !isCase(children[children.length-1])) {
                resultChildren[children.length-1] = true
            }
            return resultChildren.map(function (isTraget, index) {
                let item = children[index]
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
                else {
                    return isTraget? item: false
                }
            })
        }

    }
}
Render.Else = require('./Else')
Render.Case = require('./Case')
require('./props').default(Render)
module.exports = Render
