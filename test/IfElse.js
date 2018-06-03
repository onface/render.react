var React = require('react')
var ReactDOM = require('react-dom')
import Render, { Else, RenderSwitch, Case } from "../lib/index"
// const Render = require('render.react');const { Else, RenderSwitch, Case } = Render;
//
class Text extends React.Component {
    render() {
        const self = this
        return (
            <div data-name="text" >{self.props.children}</div>
        )
    }
}
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
                <em>
                <Render useDisplay={self.props.useDisplay} if={loading} >
                    loading
                    <Else if={loading === undefined}>
                        <span>default</span>
                    </Else>
                    <Else><Text>loaded</Text></Else>
                </Render>
                </em>
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
module.exports = IfElse
