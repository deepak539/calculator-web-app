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

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Media queries
- desktop-first workflow


### What I learned



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


I learned how to make theme swithcer using SASS.


### Continued development

I am still trying to understand the code of generating css using SASS for switching themes. 

### Useful resources

- (https://joshuatz.com/posts/2019/coding-a-css-theme-switcher-a-multitude-of-web-dev-options/) - This helped me to generate the CSS using SASS for switching themes. 


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)




