var React = require('react')
var ReactDOM = require('react-dom')
import Render, { Else, Case } from "render.react"
// const Render = require('render.react');const { Else, Case } = Render;

class SwitchCase extends React.Component {
    render () {
        const self = this
        let loading = self.state.type
        return (
            <div>
                <Render loose switch={type} >
                    <Case eql="1" >
                        one
                    </Case>
                    <Case loose={false} eql={2}>
                        tow(number)
                    </Case>
                    <Case loose={false} eql="2">
                        tow(string)
                    </Case>
                </Render>
                <button onClick={function () { self.setState({value: 1}) }} >1</button>
                <button onClick={function () { self.setState({value: 2}) }} >2</button>
                <button onClick={function () { self.setState({value: "2"}) }} >"2"</button>
            </div>
        )
    }
}
/*ONFACE-DEL*/SwitchCase = require("react-hot-loader").hot(module)(SwitchCase)
ReactDOM.render(
    <SwitchCase />,
    document.getElementById('loose-switch-demo')
)
