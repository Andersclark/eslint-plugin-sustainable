# eslint-plugin-sustainable

Keep the climate impact of code low.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-sustainable`:

```sh
npm install eslint-plugin-sustainable --save-dev
```

## Usage

Add `sustainable` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["sustainable"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "sustainable/rule-name": 2
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                                                               | Description                                                             |
| :--------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| [avoid-using-accurate-geolocation](docs/rules/avoid-using-accurate-geolocation.md) | High accuracy geolocation consumes more power and returns result slower |

<!-- end auto-generated rules list -->
