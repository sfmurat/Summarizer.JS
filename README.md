# Summarizer.JS
Summarizer.JS is simply a text summarizer for websites.

## How to use

```html
<html>
<head>
    <script src="summary.js"></script>
</head>
<body>
  
  <p id="text">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Doloribus temporibus atque expedita? Doloribus, 
    eaque dolor ratione reiciendis quaerat illo cupiditate!
  </p>
  
  <script>
    sum("text", 7, true)
  </script>

  </body>
</html>
```

## 
```js
sum("a", b, c)
// a -> id of the text to be shortened
// b -> max word count
// c -> three dots (true/false)
```
