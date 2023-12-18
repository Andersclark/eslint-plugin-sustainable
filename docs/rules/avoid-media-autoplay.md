# Autplaying media loads data that may not be consumed by the user (`sustainable/avoid-media-autoplay`)

<!-- end auto-generated rule header -->

Streamed media content represents a large portion of data transmitted over the internet. By not defaulting to autoplaying media, the climate impact of this can be minimised.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```jsx

<video autoplay />
<video autoplay={true} />

```

Examples of **correct** code for this rule:

```jsx
<video />
<video autoplay={false} />

```

## When Not To Use It

If the media is the main reason a user visits this page, it can be assumed that loading the data will improve the user experience.

## Further Reading

[Web Sustainability Guidelines](https://github.com/w3c/sustyweb)
