# subsup
Unicode subscripts and superscripts mapper

## examples

```js
'W(x) = x' + sup(7);
// W(x) = x⁷
```

```js
`W(x, y) = x${sup(65)} - y${sup('6n+9')}`
// W(x, y) = x⁶⁵ - y⁶ⁿ⁺⁹
```

```js
`W(x) = -3x${sup(3)} - x${sup(2)} + 2x-7`
// W(x) = -3x³ - x² + 2x - 7
```
