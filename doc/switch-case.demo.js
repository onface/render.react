var React = require('react')
var ReactDOM = require('react-dom')
import Render, { Else, Case } from "render.react"
// const Render = require('render.react');const { Else, Case } = Render;
class SwitchCase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: ''
        }
    }
    render () {
        const self = this
        return (
            <div>
                <Render switch={self.state.type} >
                    <Case eql="pass" >
                        成功
                    </Case>
                    <Case eql="fail">
                        失败
                    </Case>
                    {/* default: */}
                    无状态
                </Render>
                <button onClick={function () { self.setState({type: 'pass'}) }} >pass</button>
                <button onClick={function () { self.setState({type: 'fail'}) }} >fail</button>
            </div>
        )
    }
}
/*ONFACE-DEL*/SwitchCase = require("react-hot-loader").hot(module)(SwitchCase)
ReactDOM.render(
    <SwitchCase />,
    document.getElementById('switch-case-demo')
)
