import p from 'prop-types'
export default function (app) {
    app.defaultProps = {
        loose: false,
        useDisplay: false
    }
    app.propTypes = {
        loose: p.bool,
        useDisplay:p.bool
    }
}
