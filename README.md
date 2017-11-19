# subsup
Unicode subscripts and superscripts mapper

## Installation

```sh
$ npm i subsub
```

## Examples

```js
'a' + sup(2) + ' + b' + sup(2) + ' = c' + sup(2);
// a² + b² = c²
```

```js
`W(x, y) = -3x${sup('2')} + 2xy${sup(2)} + y${sub(0)}`
// W(x, y) = -3x² + 2xy² + y₀
```

```js
`W(x) = -3x${sup(3)} - x${sup(2)} + 2x-7`
// W(x) = -3x³ - x² + 2x - 7
```

## License

MIT
