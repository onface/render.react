var React = require('react')
var ReactDOM = require('react-dom')
import Render, { Else, RenderSwitch, Case } from "render.react"
// const Render = require('render.react');const { Else, RenderSwitch, Case } = Render;

class IfElse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {loading: undefined}
    }
    render () {
        const self = this
        let loading = self.state.loading
        return (
            <div>
                <Render useDisplay if={loading} >
                    loading
                    <Else if={loading === undefined}>
                        default
                    </Else>
                    <Else>loaded</Else>
                </Render>
                <button
                    onClick={function () {
                        self.setState({loading: !loading})
                    }} >
                    change loading
                </button>
            </div>
        )
    }
}
/*ONFACE-DEL*/IfElse = require("react-hot-loader").hot(module)(IfElse)
ReactDOM.render(
    <IfElse />,
    document.getElementById('if-else-demo')
)
