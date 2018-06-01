var React = require('react')
var ReactDOM = require('react-dom')
import Render, { Else, Case } from "../lib/index"

class RenderProps extends React.Component {
    render () {
        const self = this
        let data = [
            { type: 'fail'},
            { type: 'pass', name: 'nimo'},
            { type: 'pass', name: 'tim'}
        ]
        return (
            <Render>{() => {
                let target
                data.some(function (item){
                    if (item.type === 'pass') {
                        target = item
                        return true
                    }
                })
                return (<div>{target.name}</div>)
            }}</Render>
        )
    }
}
module.exports = RenderProps
