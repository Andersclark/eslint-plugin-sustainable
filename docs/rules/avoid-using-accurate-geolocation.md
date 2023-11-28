# High accuracy geolocation consumes more power and returns result slower (`sustainable/avoid-using-accurate-geolocation`)

<!-- end auto-generated rule header -->

When using the geolocation browser API, a device will default to returning an approximate location quickly and with minimal power usage. If the options property `enableHighAccuracy: true` is used however, it requires the device to consume more power.

## Rule Details

This rule aims to conserve power usage in the cases where the general area of the device's location is enough.

Examples of **incorrect** code for this rule:

```js
const options = {
  enableHighAccuracy: true, //Not recommended
}
navigator.geolocation.getCurrentPosition(success, error, options)
```

Examples of **correct** code for this rule:

```js
const options = {
  enableHighAccuracy: false,
}
navigator.geolocation.getCurrentPosition(success, error, options)
```

```js
navigator.geolocation.getCurrentPosition(success, error)
```

## When Not To Use It

When the application requires an accurate, GPS-based location to fulfill a user need, high accuracy geolocation is the way to go.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.

- [MDN: Using the geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)

- [W3C Geolocation spec](https://w3c.github.io/geolocation-api/#getcurrentposition-method)
