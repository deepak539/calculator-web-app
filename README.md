# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)


## Overview

	Calculator app is a app which calculates basic expressions. It has a feature of multiple themes. 

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

https://github.com/deepak539/calculator-web-app/issues/1#issue-998272529


### Links

- Solution URL: (https://github.com/deepak539/calculator-web-app)
- Live Site URL: (https://deepak539.github.io/calculator-web-app/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Media queries
- desktop-first workflow


### What I learned: 
I learned how to make theme swithcer using SASS.

$scopedTheme: null;
@mixin themeGen($allThemesMap: $themes) {
  @each $themeName, $themeMap in $allThemesMap {
    .theme-#{$themeName} & {
      // Creating a map that contains values specific to theme.
      // Global is necessary since in mixin
      $scopedTheme: () !global;
      @each $variableName, $variableValue in $themeMap {
        // Merge each key-value pair into the theme specific map
        $scopedTheme: map-merge(
          $scopedTheme,
          (
            $variableName: $variableValue,
          )
        ) !global;
      }
      // The original content passed
      @content;
      // Unset
      $scopedTheme: null !global;
    }
  }
}
/**
* Function to call within themeGen mixin, to get value from the current theme in the iterator
*/
@function getThemeVal($themeVar) {
  @return map-get($scopedTheme, $themeVar);
}


### Continued development

I am still trying to understand the code of generating css using SASS for switching themes. 

### Useful resources

- (https://joshuatz.com/posts/2019/coding-a-css-theme-switcher-a-multitude-of-web-dev-options/) - This helped me to generate the CSS using SASS for switching themes. 


## Author

- Website - [Deepak Kumar Asnani](https://deepak539.github.io/calculator-web-app/)
- Frontend Mentor - [@deepak539](https://www.frontendmentor.io/profile/deepak539)




