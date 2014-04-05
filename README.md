# give me kittens

Show kittens on any website. Copy paste the `kittens.js` script in your developer tools,
call the `giveMeKittens` function with your DOM selector string and
tada, instant kittens!

## api

### giveMeKittens
    /**
     * Turns all your selected items into kittens
     * @param {String} selector a document.querySelectorAll valid selector string
     * @param {Object} [dimensionsThreshold] Optional minimal dimensions before
     *                  elements are kittenized, defaults to width and height of 50px
     *      @param {Number} [dimensionsThreshold.width]
     *      @param {Number} [dimensionsThreshold.width]
     */
    function giveMeKittens( selector, dimensionsThreshold )

Check out the [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document.querySelectorAll) docs for more info

## examples

### http://nu.nl
A Dutch news website
`giveMeKittens( 'img[xtclib], .image img, .trackevent img, iframe[id^=scr_]' );`