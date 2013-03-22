# Fermi - Quicker Templating

Enrico Fermi was a well-known Italian theoretical and experimental physicist whose work impacted nuclear, particle, and quantum physics. Fermi is a library that allows developers to quickly and effortless provide templating for simple websites.

```html
<!DOCTYPE HTML>
<html>
  <head>
    <script src="js/fermi.js"></script>
  </head>
  <body>
    <header id="header" content="templates/header.handlebars"></header>

    <div class="bars" content="/bars.json">
      <h2>Bars</h2>

      {{#each this}}
      <div class="bar">
        {{bar}}, {{foo}}
      </div>
      {{/each}}
    </div>
  </body>
</html>
```
## CLI

Fermi has a command-line interface for pre-compiling.

```
fermi -o build/index.html index.html
```

Fermi will follow all of the content links in the document and replace the innerHTML of elements with the content parameter specified with content from the link.