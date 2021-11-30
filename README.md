# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

Screenshot of a fifteen percent tip selection

![screenshotfifteenpercent](https://user-images.githubusercontent.com/82453818/144024975-311fb68e-0bac-4b54-9007-6df350893e61.png)

Screenshot of a custom tip selection

![screenshotcustombtn](https://user-images.githubusercontent.com/82453818/144025001-acde26cb-3d78-4006-a68a-4ef0fa642211.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript

### What I learned

This was a good opportunity to practice css grid and flexbox.
I also practised making the app responsive, which still needs a bit of ironing out. I used @media, see example below.
First time i included a svg into an output, see below.
It was good and challenging practising javascript and getting to app to function, see example below.

Code snippets:

```html
<img
  id="dollarIconImg"
  class="dollarIcon"
  src="images/icon-dollar.svg"
  alt="dollaricon"
/>
```

```css
@media (max-width: 1119px) {
  .personIcon {
    display: grid;
    position: absolute;
    top: 320px;
    left: 25px;
    width: 10px;
  }
}
```

```js
const eachPersTotal = function (billAmount, noOfPeople, fivePercent) {
  if (noOfPeople == "") {
    document.querySelector("#notZeroText").textContent = "Can't be zero";
    document.getElementById("noOfPeople").style.border = "thin solid #FF0000";
  } else {
    document.querySelector("#notZeroText").textContent = "";
    tipPerPerson = billAmount * fivePercent;
    let tipAmount = tipPerPerson / noOfPeople;
    document.querySelector(".tipAmountPerPerson").textContent =
      "$" + tipAmount.toFixed(2);

    let amountPerPerson = billAmount / noOfPeople;
    let totalAmountPerPerson = amountPerPerson + tipAmount;
    document.querySelector(".totalAmountPerPerson").textContent =
      "$" + totalAmountPerPerson.toFixed(2);
  }
};
};
```

### Continued development

I'm still facing a few challenges:

I'm struggling to align the inputs for 'Bill' and 'Number of People' to the far righthand side of the input as shown in the completed app reference pics.
The app is not completely responsive - the right hand side collapses under the tip button's too quickly. Also in mobile size there is a row of three tip buttons, instead of only two.
Also i'd like a clearer understanding of best way to use div's in the html? Best to put everything in a div wrapper. The left content and right content in div wrappers? The inputs with the svg's in their own div's? What the best way to approach using div's?
Finally how can i make my javascript more dry and still have it fucntion?

### Useful resources

- [Css grid layout](//Useful links: https://travishorn.com/responsive-grid-in-2-minutes-with-css-grid-layout-4842a41420fe
  // https://www.w3schools.com/jsref/jsref_isnan.asp) - This helped me to better understand CSS grid.
- [Flex Container](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
  https://www.freecodecamp.org/news/use-svg-images-in-css-html/) - This helped me better understand flexbox.

## Author

- Frontend Mentor - [@Wolfmuller](https://www.frontendmentor.io/profile/Wolfmuller)
- Twitter - [@wolfdogmuller](https://www.twitter.com/wolfdogmuller)
