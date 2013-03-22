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

## Fermi, huh, ya - what is it good for?

This isn't for large projects. This is for small projects that you want to hack together quickly. It does prevent you from doing something stupid like making 5 static pages and copying and pasting the same content over and over again. It provides a quick way to support templating and it uses handlebars so everything is ready to go when you decide to actually make a good design.
