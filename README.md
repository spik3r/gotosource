# gotosource README

This is a work in progress.

## Features

Created a command that should ignore .d.ts files when going to source in typescript projects.
## Extension Settings

To change the keybinding: open  `keybindings.json` and update the setting below
```
{
    "key": "cmd+f12",
    "command": "gotosource.goToFile"
},
{
    "key": "alt+f12",
    "command": "gotosource.searchFile"
}
```

## Known Issues

goToFile doesn't seem to work on monorepo projects

## Release Notes

### 0.0.1

Initial release... experimental

### 0.0.2

... still experimental
### 0.0.3

... trying findInFiles without regex