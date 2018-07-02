import p from 'prop-types'
import renderSymbol from "./symbol"
export default function (app) {
    app.defaultProps = {
        loose: false,
        useDisplay: false,
        if: renderSymbol.if,
        switch: renderSymbol.switch
    }
    app.propTypes = {
        loose: p.bool,
        useDisplay:p.bool
    }
}
