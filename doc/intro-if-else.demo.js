var React = require('react')
var ReactDOM = require('react-dom')
import Render, { Else, RenderSwitch, Case } from "render.react"
// const Render = require('render.react');const { Else, RenderSwitch, Case } = Render;

class IfElse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            user: 'nimo'
        }
    }
    render () {
        const self = this
        let loading = self.state.loading
        let user = self.state.user
        return (
            <div>
                <Render if={loading} >
                    loading
                    <Else if={user}>
                        用户名：{user}
                    </Else>
                    <Else>
                        <a href="#">请登录</a>
                    </Else>
                </Render>

                <button
                    onClick={function () {
                        self.setState({loading: !loading})
                    }} >
                    change loading
                </button>
                <button
                    onClick={function () {
                        self.setState({user: user?"":user})
                    }} >
                    change user
                </button>
            </div>
        )
    }
}
/*ONFACE-DEL*/IfElse = require("react-hot-loader").hot(module)(IfElse)
ReactDOM.render(
    <IfElse />,
    document.getElementById('intro-if-else-demo')
)
