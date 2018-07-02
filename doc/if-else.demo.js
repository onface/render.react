var React = require('react')
var ReactDOM = require('react-dom')
import Render, { Else, Case } from "render.react"
// const Render = require('render.react');const { Else, Case } = Render;

class IfElse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {loading: false}
    }
    render () {
        const self = this
        let loading = self.state.loading
        return (
            <div>
                <Render if={loading} >
                    loading
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
