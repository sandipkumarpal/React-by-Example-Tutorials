module.exports = {
    "extends": "airbnb",
    "plugins" : [
        "react",
        "jsx-a11y",
        "import",
    ],
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true
    },
    "rules": {
        "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
        "react/jsx-pascal-case": [2, { allowAllCaps: true }],
        "jsx-closing-bracket-location": [1, "tag-aligned"],
        "react/jsx-indent": ["error", 4],
        "react/jsx-no-undef": [2, { "allowGlobals": true }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};
