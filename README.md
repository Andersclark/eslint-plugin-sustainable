# eslint-plugin-sustainable

## About this project

Keep the climate impact of code low!

The code, infrastructure and devices supporting the internet emits around the [same amount of Carbon Dioxide (CO2) as the global airline industry](https://theshiftproject.org/wp-content/uploads/2019/03/Executive-Summary_Lean-ICT-Report_EN_lowdef.pdf).

As authors of code, we can affect how applications affect climate change by making sure we avoid anti-patterns that unecessarily consume resources.

The goal of this project is to follow the development of the [W3C's Sustainability Guidelines](https://w3c.github.io/sustyweb).

You can read more about this topic on [The Green Web Foundation's website](https://www.thegreenwebfoundation.org).

## Installation

If your project is not currently using ESlint, you will first need to install it [ESLint](https://eslint.org/):

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

## Rules

<!-- begin auto-generated rules list -->

| Name                                                                               | Description                                                             |
| :--------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| [avoid-inefficient-image](docs/rules/avoid-inefficient-image.md)                   | Avoid inefficient image formats                                         |
| [avoid-media-autoplay](docs/rules/avoid-media-autoplay.md)                         | Autplaying media loads data that may not be consumed by the user        |
| [avoid-using-accurate-geolocation](docs/rules/avoid-using-accurate-geolocation.md) | High accuracy geolocation consumes more power and returns result slower |

<!-- end auto-generated rules list -->
