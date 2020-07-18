# WebDevChallenge-17
PSD design converted to website.
My page is available at: https://goomel.github.io/WebDevChallenge-17/src

More information about used technologies:


## BEM
  [BEM](https://en.bem.info) (Block, Element, Modifier) is a component-based approach to web development. This makes interface development easy and fast even with a complex UI, and it allows reuse of existing code without copying and pasting.
  Block - Standalone entity that is meaningful on its own, for example: 
  ```html
  nav, container
  ```

  Element - Part of a block with no standalone meaning, for example: 
  ```html
  nav__list, list__item
  ```

  Modifier - A variation of a block or element, for example:
  ```html
  nav__item--active, checbkox--checked
  ```
## Sass
 [Sass](https://sass-lang.com) is the most powerful CSS extension language in the world. It is often recommended to keep code well-organized. 

## Media queries
  My Media queries solution was inspired by Dominique Briggs' [solution](https://medium.com/front-end-developers/the-solution-to-media-queries-in-sass-5493ebe16844)

Example:  
_header.scss
```css
@mixin header\@screen_wide {
    .header{
        height: 90vh;
        margin-top: 10vh;
   }
```
        
_media-queries.scss
```css
// Wide screen > 1024px
@media only screen and (min-width: 1024px) {
  @include header\@screen_wide;
}
```
## File structure 
The architecture was based on [Sass Guidelines](https://sass-guidelin.es/#architecture)
```
src/
|
|--sass/
    |-- abstracts/                  # Global Mixins, Variables and Fonts
    |   |--_abstracts-dir.scss
    |
    |-- base/                       # Base styles
    |   |--_global.scss
    |   |--_normalize.scss
    |
    |-- componets/                  # Blocks, Elements and Modifiers
    |   |-- _components-dir.scss
    |
    |-- layouts/                    # Section and media-queries styles.
    |   |-- _layouts-dir.scss
    |
    |-- style/
    |   |-- style.css               # Main css file
    |
    | -- index.html                 # Main html file
    |
    | -- script.js                  # Javascript file with all variables and functions
```