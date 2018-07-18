module.exports = {
    linters: {
        '**/*.+(js|md|css)': [
            'eslint --fix',
            'prettier-write',
            'git add'
        ]
    }
}