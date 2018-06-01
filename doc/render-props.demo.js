var React = require('react')
var ReactDOM = require('react-dom')
import Render, { Else, Case } from "render.react"
// const Render = require('render.react');const { Else, Case } = Render;

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
/*ONFACE-DEL*/RenderProps = require("react-hot-loader").hot(module)(RenderProps)
ReactDOM.render(
    <RenderProps />,
    document.getElementById('render-props-demo')
)
