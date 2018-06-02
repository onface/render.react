module.exports = function (children) {
    let firstChildIsElse = false
    let onlyHasElse = false
    children.forEach(function (item, index) {
        let isElse = typeof item.props === 'object' && item.props.$$mark === 'render.react:Else'
        if (index === 0 && isElse) {
            firstChildIsElse = true
        }
    })
    if (firstChildIsElse) {
        onlyHasElse = children.every(function (item, index) {
            let isElse = typeof item.props === 'object' && item.props.$$mark === 'render.react:Else'
            return isElse
        })
    }
    if (firstChildIsElse && onlyHasElse) {
        throw new Error(errorMessage['if-else'])
    }

}
