# Avoid inefficient image formats (`avoid-inefficient-iomage`)

Inefficient file encoding requires internet infrastructure, and ultimately the client to process larger files, which consumes more energy and potentially slows down the user experience,.

## Rule Details

A significant portion of most web pages size is made up of media. This rule aims to help developers use more efficient formats to keep the bundle size as low as possible.

Examples of **incorrect** code for this rule:

```js
import Inefficient from '../images/BadImage.png'
import Inefficient from '../images/BadImage.jpeg'
import Inefficient from '../images/BadImage.jpg'
import Inefficient from '../images/BadImage.gif'
```

Examples of **correct** code for this rule:

```js
import Efficient from '../images/GoodImage.webp'
import Efficient from '../images/GoodImage.avif'
```

## When Not To Use It

If your user base depends heavily on legacy browsers that lack support for newer image formats.

## Further Reading

[MDN: Choosing an image format](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#choosing_an_image_format)

[Google: WebP, An image format for the web](https://developers.google.com/speed/webp/)

[WebP converter](https://developers.google.com/speed/webp/#webp_converter_download)

[Web.dev course: Images on the web](https://web.dev/learn/images)

[Squoosh: Compare image encodings](https://squoosh.app/)
