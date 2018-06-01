var React = require('react')
var ReactDOM = require('react-dom')
import Render, { Else, RenderSwitch, Case } from "render.react"
// const Render = require('render.react');const { Else, RenderSwitch, Case } = Render;

class IfElse extends React.Component {
    render () {
        const self = this
        let loading = self.state.loading
        return (
            <div>
                <Render if={loading} >
                    loading
                    <Else if={loading === undefined}>
                        default
                    </Else>
                    <Else>loaded</Else>
                </Render>
            </div>
        )
    }
}
/*ONFACE-DEL*/IfElse = require("react-hot-loader").hot(module)(IfElse)
ReactDOM.render(
    <IfElse />,
    document.getElementById('if-else-demo')
)
