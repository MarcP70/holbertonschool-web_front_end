      Project: Accessibility | Holberton Laval, France Intranet

### Concepts

_For this project, we expect you to look at this concept:_

*   [A Crash Course on Accessibility](/concepts/956)

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/66ba13a2581c5457361a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240529%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240529T134646Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ad0ab345353fc63e5b964d180921017b460fdedc2260f8f730d15e055797fbe1)

Resources
---------

**Read or watch**:

*   [Accessibility is not a feature. — Ethan Marcotte](/rltoken/KpTE68V9GdL7pm4l6ImWSg "Accessibility is not a feature. — Ethan Marcotte")
*   [How to Meet WCAG (Quickref Reference](/rltoken/UZmj1x99WEmIOEdfuYzAXQ "How to Meet WCAG (Quickref Reference")
*   [Web Accessibility Guidebook for Developers](/rltoken/F_Z9DJFNJmPGw7Z_1kP8bA "Web Accessibility Guidebook for Developers")
*   [Testing with assistive technologies - Service Manual - GOV.UK](/rltoken/is-SqFqGDu8knDObDQGpFg "Testing with assistive technologies - Service Manual - GOV.UK")
*   [A11Y Style Guide](/rltoken/TK3c4IZchCh95mQS2Ug3yg "A11Y Style Guide")
*   [Building Pylon-Free Web Pages: An Intro to Web Accessibility](/rltoken/Lf35D4vRP8_HaRl1KMCzPA "Building Pylon-Free Web Pages: An Intro to Web Accessibility")
*   [I Threw Away my Mouse - 24 Accessibility](/rltoken/n0rn0d1ICp3ABu7AphCqvg "I Threw Away my Mouse - 24 Accessibility")
*   [I Used a Switch Control for a Day - 24 Accessibility](/rltoken/ZpcevrahJ1gRAzc8g8NEAA "I Used a Switch Control for a Day - 24 Accessibility")
*   [The Myths of Color Contrast Accessibility](/rltoken/oPQaEDv3bje2tBh68ZzipA "The Myths of Color Contrast Accessibility")
*   [IAAP Certification](/rltoken/ReDC1Yb2hozDGYfKuD22pw "IAAP Certification")
*   [Accessibility Blog | Deque Systems](/rltoken/YVYK-Uv9g_qfbkquiZE0oQ "Accessibility Blog | Deque Systems")
*   [Tink - Léonie Watson – On technology, food & life in the digital age](/rltoken/c9Hg5OQRvH4O-w2Fkuv9Qg "Tink - Léonie Watson – On technology, food & life in the digital age")
*   [Articles » Simply Accessible](/rltoken/8GcL3tMFf4qi3exOdio40w "Articles » Simply Accessible")
*   [Accessibility Weekly](/rltoken/5muNy3USi2Bk8k5fZvkoig "Accessibility Weekly")
*   [European label (Web Accessibility): Euracert - Home page](/rltoken/P0-K5OAH5TXnTsgmJpxpLw "European label (Web Accessibility): Euracert - Home page")
*   [Section508.gov | GSA Government-wide IT Accessibility Program](/rltoken/uYjFPb1Js37PT0mNUhr8CQ "Section508.gov | GSA Government-wide IT Accessibility Program")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/U5obIvMPAh110X9zYsNMyA "explain to anyone"), **without the help of Google**:

*   ARIA’s main purpose
*   WCAG conformance levels (A, AA and AAA)
*   The importance of Web Accessibility
*   Tools to use for Web Accessibility

Requirements
------------

*   Allowed editors: `vi`, `vim`, `emacs`
*   A `README.md` at the root of the project directory is mandatory
*   HTML and CSS have been rendered on Chrome 78 or more.

### Quiz questions

**Great!** You've completed the quiz successfully! Keep going!

<details><summary>Show quiz</summary>

    #### Question #0

    Accessibility level: live video has captions

    *   level A

    *   level AA

    *   level AAA


    #### Question #1

    Accessibility level: provide descriptive link text

    *   level A

    *   level AA

    *   level AAA


    #### Question #2

    Accessibility level: provide ability to skip content

    *   level A

    *   level AA

    *   level AAA


    #### Question #3

    Accessibility level: explain any unusual word

    *   level A

    *   level AA

    *   level AAA


    #### Question #4

    Accessibility level: no major code error

    *   level A

    *   level AA

    *   level AAA


    #### Question #5

    If a person types “paleo recipes” in a site search, which of the following is the best page title?

    *   Search

    *   Search results for “paleo recipes”

    *   Paleo recipes


    #### Question #6

    Identifying the language of an HTML page is important for users of:

    *   Voice recognition software

    *   Screen readers

    *   Screen magnifiers

    *   All of the above


    #### Question #7

    What is the correct language code for Portuguese?

    (select all valid answers)

    *   lang=“portuguese”

    *   lang=“portugues”

    *   lang=“port”

    *   lang=“pt”

    *   lang=“pt-br”


    #### Question #8

    Where should be the lang attribute

    *   In the `<!doctype>` element

    *   In the `<body>` element

    *   In the `html` element


    #### Question #9

    All of the following are true about skip links except

    *   Must be placed just before the main navigation menu

    *   Must become visible upon receiving focus, if hidden

    *   Must be accessible to keyboard-only users

    *   Must be accessible to screen reader users

</details>

Tasks
-----

### 0\. make the "works" card focus visible

mandatory

Start with this `00-styles.css` and `00-index.html` files.


[Images archive](https://intranet-projects-files.s3.amazonaws.com/holbertonschool-webstack/601/images.zip "Images archive")

Let’s start by the “Work” section:

We have an issue with the focus (moving from one link to another with the `TAB` key) in the Desktop version. With the DevTools, you can active the focus on the `<a>` inside `.card-title` and nothing happen.

To solve it, we need to update the way we are managing the hover state of `.card-title`:

*   In your `keyboard/01-styles.css` file, in the `/* Card WORK` section
    *   Remove `opacity: 0` inside `.card-work .card-title`
    *   Remove `.card-work:hover .card-inner`
    *   Remove `.card-work:hover .card-title`
    *   Target the selector `.card-work .card-title a` and add an opacity to 0.
    *   For `.card-work .card-title a` with the `a` in state focus and `.card-work:hover .card-title a`:
        *   Property: `opacity`, Value: `1`
        *   Property: `height`, Value: `100%`
        *   Property: `background-color`, Value: `rgba(0, 0, 0, 0.7)`

Now you use the keyboard to navigate, you should see the card with the title and the dark background like when you hover the card with your mouse.

All the other elements have a blue outline around.

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `accessibility`
*   File: `keyboard/01-styles.css, keyboard/01-index.html`

**0/10** pts

### 1\. add the skip-links

mandatory

Using the `00-index.html` provided in the previous task, in your `skip-links/01-index.html` file, just after the `<body>` HTML open tag

*   Add the `<!-- Skip links -->` comment
*   Create a new `<nav>` tag with the `aria-label` attribute. Put the value `Skip links` inside it.
    *   Create a non ordered list of class `off-screen`
        *   Create a first `li` with a link inside
            *   Href: `#a11y-primary-nav`
            *   Class: `skip-link`
            *   Text: `Skip to primary navigation`
        *   Create a second `li` with a link inside
            *   Href: `#a11y-main-content`
            *   Class: `skip-link`
            *   Text: `Skip to main content`
*   On the `<nav class="navbar-menu">`, add an id with the text: `a11y-primary-nav` and a `tabindex="-1"`
*   On the `<main>` tag, add an id with the text: `a11y-main-content`, and `tabindex="-1"`

`00-article.html` is provided to you below to repeat the same changes in your `skip-links/01-article.html` file.


The name of the ID can be anything but prefixing with a11y can help us to remember why we are using an ID. (I recommend reading [this article](/rltoken/cH8k2P_ivm-7gCkYqzjn8g "this article") about CSS namespacing by Harry Roberts)

Using the stylesheet from the previous task, in your `skip-links/01-styles.css` file, in the `/* Helpers` section, after the `visually-hidden` selector

*   Target the `off-screen` class
    *   Property: `left`, Value: `-100vw`
    *   Property: `position`, Value: `absolute`
*   Target the `skip-link` class
    *   Property: `background`, Value: link to the `color-black` variable
    *   Property: `color`, Value: link to the `color-white` variable
    *   Property: `left`, Value: `0`
    *   Property: `padding`, Value: `.7rem`
    *   Property: `position`, Value: `fixed`
    *   Property: `opacity`, Value: `0`
    *   Property: `top`, Value: `0`
    *   Property: `z-index`, Value: `10`
    *   Property: `transform`, Value: `translateY(-1rem)`
    *   Property: `transition`, Value: `transform .2s ease-in-out, opacity .2s ease-in-out`
*   Target the `focus` state of `skip-link` class
    *   Property: `opacity`, Value: `1`
    *   Property: `transform`, Value: `translateY(0)`

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `accessibility`
*   File: `skip-links/01-index.html, skip-links/01-article.html, skip-links/01-styles.css`

**0/47** pts

### 2\. Elements must have sufficient color contrast

mandatory

You are given this `fix-a11y/00-index.html` starter file:



As you can see, the contrast is not good. The easy fix is simply to remove the `body` styles in the embed `<style>`. Do this in your `fix-a11y/01-index.html` file. In a real case, you could use the [Contrast Ratio](/rltoken/Xj_o9lrwKAodGlLreswi2w "Contrast Ratio") section of the Color Picker.

Check with Axe to ensure the issue is fixed.

**Rendering the page should display something like this**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/6ca4565a4d207b00f718.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240529%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240529T134646Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=adf579e28e171730c4d84d3b444cd44d2ba59d67ea7b5bed08c291fe04327e15)

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `accessibility`
*   File: `fix-a11y/01-index.html`

**0/1** pt

### 3\. Documents must have `<title>` element to aid in navigation

mandatory

Taking your code from the previous task, in your `fix-a11y/02-index.html` file

Add a title: `Homepage - A fake website`

Check with Axe to ensure the issue is fixed

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/2/4c0ba151685ae5b2c801.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240529%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240529T134646Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=84385bf46acada3a7e399d0eee72d3b51b6d3bd78263291fb727673973107faf)

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `accessibility`
*   File: `fix-a11y/02-index.html`

**0/1** pt

### 4\. <html> element must have a lang attribute

mandatory

Taking your code from the previous task, in your `fix-a11y/03-index.html` file

On the `html` tag, add the attribute `lang` with the `en` value.

Check with Axe to ensure the issue is fixed.

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `accessibility`
*   File: `fix-a11y/03-index.html`

**0/1** pt

### 5\. Images must have alternate text

mandatory

Taking your code from the previous task, in your `fix-a11y/04-index.html` file

*   Locate the `img` that points to the `logo.png`
    *   Add an `alt` attribute with the text `Name of the logo`
*   Locate the `img` that points to the `hero-img.png`
    *   Add an empty `alt` (decorative image)

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `accessibility`
*   File: `fix-a11y/04-index.html`

**0/2** pts

### 6\. Form elements must have labels

mandatory

Taking your code from the previous task, in your `fix-a11y/05-index.html` file, locate the `form`

*   Add a `label` just before the `input`
    *   Class: `visually-hidden`
    *   For: `email`
*   On the `input`
    *   Add an `id`: `email`

Axe tells use that the issue is solved. But actually, some elements should be fixed for better accessibility and usability.

*   We can change the `type` from `text` to `email`
*   Add the attribute `autocomplete` with the value `email`
*   Add the `required` attribute and the `aria-required="true"`
*   Change the `a` to be a `button`
*   We can remove the `placeholder` as it doesn’t add any value

We don’t have any error handling in our example, that should exist on the front-end / back-end side.

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `accessibility`
*   File: `fix-a11y/05-index.html`

**0/8** pts

### 7\. Links must have discernible text

mandatory

In your `fix-a11y/06-index.html` file

*   Locate the`facebook-icon` and add an `aria-label` on the `a` with the text `Facebook`
*   Locate the `twitter-icon` and add an `aria-label` on the `a` with the text `Twitter`

Links should never be empty, in our case, we are using a font (like [Font Awesome](/rltoken/hqohLrLexD50IhD7duY0BQ "Font Awesome")) to generate icons.

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `accessibility`
*   File: `fix-a11y/06-index.html`

**0/2** pts

### 8\. Zooming and scaling must not be disabled

mandatory

In your `fix-a11y/07-index.html` file

Locate the `meta` viewport and remove `user-scalable=no`

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `accessibility`
*   File: `fix-a11y/07-index.html`

**0/1** pt

### 9\. Heading levels should only increase by one and all page content must be contained by landmarks

mandatory

You can install the [headingsMap](/rltoken/jplGrKZu39PzAOcyC4hmcA "headingsMap") extension to have a visual representation of your headings.

Taking your code from the previous task, in your `fix-a11y/08-index.html` file

*   Like our Techium project, we are going to create an `h1` just after the `<div class="header">` closing tag. (The `h1` will be sibling to the `<div class="header">` div)
    *   Text: `Homepage`
*   Change `<h6>This is me</h6>` to be `<h2>This is me</h2>`
*   Change `<h1>Philip Gilbert</h1>` to be `<span>Philip Gilbert</span>`
*   Change `<h6>About Me</h6>` to be `<h2>About Me</h2>`
*   Change `<h1>Personal Details</h1>` to be `<span>Personal Details</span>`
*   Change `<h1>My Offered Services</h1>` to be `<h2>My Offered Services</h2>`
*   Change `<h4>Web Design</h4>` to be `<h3>Web Design</h3>`
*   Change `<h4>Web Development</h4>` to be `<h3>Web Development</h3>`
*   Change `<h1 class="counter">2536</h1>` to be `<span class="counter">2536</span>`
*   Change `<h1 class="counter">6784</h1>` to be `<span class="counter">6784</span>`
*   Change `<h1>Client's Feedback About Me</h1>` to be `<h2>Client's Feedback About Me</h2>`
*   Change `<h4>Harriet Maxwell</h4>` to be `<span>Harriet Maxwell</span>`
*   Change `<h1>Choose Your Plan</h1>` to be `<h2>Choose Your Plan</h2>`
*   Change `<h1>01</h1>` to be `<h3>01</h3>`
*   Change `<h1>$199.00</h1>` to be `<span>$199.00</span>`
*   Change `<h4>About Me</h4>` to be `<span>About Me</span>`
*   Change `<h4>Newsletter</h4>` to be `<span>Newsletter</span>`
*   Change `<h4>Follow Me</h4>` to be `<span>Follow Me</span>`

Fixing wrong `headings` is not an easy task. Headings represent the outline of your content. Like the table of contents in a book, headings should help to understand what is inside your page.

Always ask yourself if that word or sentence would make sense for anybody visiting your website.

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `accessibility`
*   File: `fix-a11y/08-index.html`

**0/18** pts

### 10\. Document must have one main landmark

mandatory

You can install the [Landmarks](/rltoken/O1cT6M28QLy1kDI4Pg3ZCw "Landmarks") extension to visually locate the landmarks on your pages.

Taking your code from the previous task, in your `fix-a11y/09-index.html` file

*   Locate the `header` class and convert that `<div>` into a `<header>` tag (only change the tag, no need to change or remove other attributes in the tag)
*   Convert the `<div class='nav'>` into a `<nav>` element (only change the tag, no need to change or remove other attributes in the tag)
*   Wrap everything from the `<h1>Homepage</h1>` to before the `<div class="footer">` in a `<main>` tag.
*   Locate the `footer` class and transform the `div` to a `<footer>` (only change the tag, no need to change or remove other attributes in the tag)
*   Locate all divs with the `section` class, and update divs to be `<section>` (only change the tag, no need to change or remove other attributes in the tag).
    *   Exclude the one with the `Projects Completed` text. Sections should have headings, we don’t have one anymore. This should remain a `<div>`.

If you open the `landmarks` extension, you should see the landmarks showing.

Tip

Remember that `header`, `section`, `footer` etc contain a default role (=landmarks).

All automated issues are now solved! You fixed around 50% of accessibility issues. The rest are manual issues, tested using screen-reading tools or just reading the code.

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `accessibility`
*   File: `fix-a11y/09-index.html`

**0/7** pts

### 11\. More than 2 elements become list

mandatory

Automated tools can’t always alert about elements that should exist as a list.

Taking your code from the previous task, in your `fix-a11y/10-index.html` file

*   Locate the `nav`
    *   Transform the `<div>` in a `<ul>` and every `<p>` in an `li`
*   Locate the div with `package-list` class
    *   Transform the children in an `ul` with the 3 spans being each an `li`

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `accessibility`
*   File: `fix-a11y/10-index.html`

**0/6** pts
