      Project: Developer tools | Holberton Laval, France Intranet

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/0872ca9b19e11650e355.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240527%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240527T072509Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=21ce044f802870e115301025be08a6ac1289522285c86df2e2e23fc1402a3d3e)

In this project, you will analyze this website [https://dev-tools.hbtn.info/](/rltoken/XDJc8x9X5FRGgi01_vRDkg "https://dev-tools.hbtn.info/").

Resources
---------

**Read or watch**:

*   [Chrome DevTools | Tools for Web Developers | Google Developers](/rltoken/xQgGyibNbpXFBYkiw5Yaxg "Chrome DevTools  |  Tools for Web Developers  |  Google Developers")
*   [Introduction | Down and Dirty with Chrome Developer Tools](/rltoken/G_mzqm_oYdNwGPKZge4_rA "Introduction | Down and Dirty with Chrome Developer Tools")
*   [Firefox Developer Tools | MDN](/rltoken/9JR3CXVFNue4C_6820Mv4Q "Firefox Developer Tools | MDN")
*   [Dev Tips - Developer Tips by Umar Hansa](/rltoken/FVe-zSoqr8JFWCSb_MIlnA "Dev Tips - Developer Tips by Umar Hansa")
*   [Get Started With Viewing And Changing CSS | Tools for Web Developers](/rltoken/pFrF6Ec17k1fwgBrefnNKg "Get Started With Viewing And Changing CSS  |  Tools for Web Developers")
*   [Keeping it simple with the JavaScript console - LogRocket Blog](/rltoken/sRc9bRtc24PgU7UH6Rso2Q "Keeping it simple with the JavaScript console - LogRocket Blog")
*   [Inspect Network Activity - Chrome DevTools 101](/rltoken/MBiNxagRKiRQwW7jcloO_g "Inspect Network Activity - Chrome DevTools 101")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/JtuJ8tzZqLIvF3KRXsVBaA "explain to anyone"), **without the help of Google**:

### General

*   What Developer Tools in your browser are
*   How to open the Developer Tools on Chrome, Firefox, Safari, and Edge.
*   How to use the elements tab to edit HTML and CSS
*   How to audit a page according to the tips suggested by Lighthouse
*   How to create and run snippets on a page
*   How to get information about files and server configurations
*   How to block requests
*   How to know how much JavaScript or CSS is used on a page
*   How to detect 404 issues
*   How to move elements on a webpage

Requirements
------------

### General

*   A `README.md` file, at the root of the folder of the project, is mandatory
*   Use the newest version of Google Chrome browser (`78.0.3904.70` or later).
*   Screenshots can be taken via the OS, not necessary via the DevTools. These screenshots are used to see how and where you are doing/playing with the DevTools.

Tasks
-----

### 0\. Responsive device

mandatory

Go to `https://dev-tools.hbtn.info/`

Take a screenshot of the website using the device toolbar Choose iPhone X and show the size in your screenshot (selected device or size in pixel of the rendering)

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `0-responsive_device.png`

Help

×

#### Students who are done with "0. Responsive device"

**0/2** pts

### 1\. Change the background color

mandatory

Go to `https://dev-tools.hbtn.info/`

Change the background-color of the body to use `#4233bd` Take a screenshot of the `PORTFOLIO` section

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `1-change_bg_color.png`

Help

×

#### Students who are done with "1. Change the background color"

**0/1** pt

### 2\. Force element state

mandatory

Go to `https://dev-tools.hbtn.info/`

Force the hover state of the “cake” block in the section Portfolio Take a screenshot of it

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `2-pathways_menu.png`

Help

×

#### Students who are done with "2. Force element state"

**0/1** pt

### 3\. Copy all the styles of the button

mandatory

Go to `https://dev-tools.hbtn.info/`

Select the `Download me!` and copy all the CSS styling that is applied on this button.

Your answer file must contain all CSS styling one per line like this example:

    $ head -2 3-button_styles
    border-radius: 1px;
    color: #FF00FF;
    $


**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `3-button_styles`

Help

×

#### Students who are done with "3. Copy all the styles of the button"

Review your work

×

#### Correction of "3. Copy all the styles of the button"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 4\. Change button styles

mandatory

Go to `https://dev-tools.hbtn.info/`

*   All primary buttons (`btn-primary`) should have the `#0080ee` color as a background color
*   All outlined buttons light (`btn-outline-light`) should have `#0020aa` for the text color
*   Screenshot all buttons that changed and merge it to one image

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `4-new_buttons.png`

Help

×

#### Students who are done with "4. Change button styles"

**0/2** pts

### 5\. Remove part of the website

mandatory

Go to `https://dev-tools.hbtn.info/`

Remove the `div` of the “cake” box in the section Portfolio

Take a screenshot of it

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `5-deleted_elements.png`

Help

×

#### Students who are done with "5. Remove part of the website"

**0/1** pt

### 6\. Where is it coming from?

mandatory

Go to `https://dev-tools.hbtn.info/`

*   On the right panel, click on the `Computed tab`
*   Then, select the `h2` with the text `ABOUT`
*   Search for `margin-bottom`

Which file is that declaration coming from?

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `6-declaration_file`

Help

×

#### Students who are done with "6. Where is it coming from?"

Review your work

×

#### Correction of "6. Where is it coming from?"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 7\. How many listeners

mandatory

Go to `https://dev-tools.hbtn.info/`

How many times click events are referenced in JavaScript files?

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `7-number_of_listeners`

Help

×

#### Students who are done with "7. How many listeners"

Review your work

×

#### Correction of "7. How many listeners"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 8\. What is the HSL code

mandatory

Go to `https://dev-tools.hbtn.info/`

Select the primary button “Send”

What is the equivalent value of the hexadecimal background-color, in HSL?

(format of your answer should be: `hsl(<VALUES>);`, example: `hsl(241, 23%, 24%);` following by a new line)

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `8-hsl`

Help

×

#### Students who are done with "8. What is the HSL code"

Review your work

×

#### Correction of "8. What is the HSL code"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 9\. The max-width of the container

mandatory

Go to `https://dev-tools.hbtn.info/`

What is the `max-width` for the first `.container` in the section “About”? (your browser width must be between 1250px and 1440px and with a zoom at 100%)

(format of your answer should be `max-width: <VALUE>;`, example: `max-width: 670px`)

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `9-max_width`

Help

×

#### Students who are done with "9. The max-width of the container"

Review your work

×

#### Correction of "9. The max-width of the container"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 10\. Moving around

mandatory

Go to `https://dev-tools.hbtn.info/`

Switch the sections of “About” and “Portfolio”

Take a screenshot of it

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `10-moved_around.png`

Help

×

#### Students who are done with "10. Moving around"

**0/1** pt

### 11\. Coverage

mandatory

Go to `https://dev-tools.hbtn.info/`

How big, in bytes, is the `freelancer.css` file?

Answer file must contain the value in Byte (example: `6144` for 6KB)

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `11-coverage`

Help

×

#### Students who are done with "11. Coverage"

Review your work

×

#### Correction of "11. Coverage"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 12\. Emulate the print version of the webpage

mandatory

Go to `https://dev-tools.hbtn.info/`

Under Rendering, change the CSS media type emulation to “print” and take a screenshot of the home page.

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `12-print_version.png`

Help

×

#### Students who are done with "12. Emulate the print version of the webpage"

**0/1** pt

### 13\. Using the console

mandatory

Go to `https://dev-tools.hbtn.info/`

Select the Avatar image in the header and type `$0` in the console. Enter.

What does it return?

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `13-logo_dollar0`

Help

×

#### Students who are done with "13. Using the console"

Review your work

×

#### Correction of "13. Using the console"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 14\. Write code in the console

mandatory

Go to `https://dev-tools.hbtn.info/`

Write in the console `console.log(document.title)`, what is returned?

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `14-doc_title`

Help

×

#### Students who are done with "14. Write code in the console"

Review your work

×

#### Correction of "14. Write code in the console"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 15\. Holberton web framework

mandatory

Go to `https://dev-tools.hbtn.info/`

Which front-end framework could we guess this page is using?

In your answer file only put the letter of the multiple choice answer from below:

*   A. React JS
*   B. Material Design
*   C. Bootstrap
*   D. Angular JS

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `15-hbtn_framework`

Help

×

#### Students who are done with "15. Holberton web framework"

Review your work

×

#### Correction of "15. Holberton web framework"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 16\. Homepage weight

mandatory

Go to `https://dev-tools.hbtn.info/`

What is the total weight of the page (with all the elements)?

Take a screenshot of it

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `16-weight.png`

Help

×

#### Students who are done with "16. Homepage weight"

**0/1** pt

### 17\. Number of requests

mandatory

Go to `https://dev-tools.hbtn.info/`

What is the number of requests done when accessing this page?

Take a screenshot of it

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `17-requests.png`

Help

×

#### Students who are done with "17. Number of requests"

**0/1** pt

### 18\. Number of CSS files

mandatory

Go to `https://dev-tools.hbtn.info/`

How many CSS resources are loaded on this page?

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `18-css_loaded`

Help

×

#### Students who are done with "18. Number of CSS files"

Review your work

×

#### Correction of "18. Number of CSS files"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 19\. Number of images

mandatory

Go to `https://dev-tools.hbtn.info/`

How many image resources are loaded on this page?

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `19-images_loaded`

Help

×

#### Students who are done with "19. Number of images"

Review your work

×

#### Correction of "19. Number of images"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 20\. Favicon image type

mandatory

Go to `https://dev-tools.hbtn.info/`

What is the `type` value of the favicon image?

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `20-favicon_type`

Help

×

#### Students who are done with "20. Favicon image type"

Review your work

×

#### Correction of "20. Favicon image type"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 21\. Font library

mandatory

Go to `https://dev-tools.hbtn.info/`

Holberton School website uses a font library for their icons, which one is it?

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `21-hbtn_font_lib`

Help

×

#### Students who are done with "21. Font library"

Review your work

×

#### Correction of "21. Font library"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 22\. XHR calls

mandatory

Go to `https://dev-tools.hbtn.info/`

What is the name of the resource that generates 1 XHR calls?

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `22-xhr_calls`

Help

×

#### Students who are done with "22. XHR calls"

Review your work

×

#### Correction of "22. XHR calls"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 23\. Audits panel

mandatory

Go to `https://dev-tools.hbtn.info/`

What is the notation for `Performance` (for desktop mode and no throttling - also called Lighthouse)?

Take a screenshot of it

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `23-performance_audit.png`

Help

×

#### Students who are done with "23. Audits panel"

**0/1** pt

### 24\. Static assets

mandatory

Go to `https://dev-tools.hbtn.info/`

How many static assets need a better cache policy?

Take a screenshot of it

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `24-static_assets_audit.png`

Help

×

#### Students who are done with "24. Static assets"

**0/1** pt

### 25\. Accessibility

mandatory

Go to `https://dev-tools.hbtn.info/`

When you run an accessibility audit, what is the contrast issue?

In your answer file only put the letter of the multiple choice answer from below:

*   A. Image elements do not have \[alt\] attributes
*   B. Links do not have a discernible name
*   C. Background and foreground colors do not have a sufficient contrast ratio.

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `25-contrast_issue`

Help

×

#### Students who are done with "25. Accessibility"

Review your work

×

#### Correction of "25. Accessibility"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 26\. No alt

mandatory

Go to `https://dev-tools.hbtn.info/`

Which classes are on the images that have no `alt` attribute?

Your answer file must contains all classes, example: `.my_class.my_second` if 2 classes

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `26-no_alt`

Help

×

#### Students who are done with "26. No alt"

Review your work

×

#### Correction of "26. No alt"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 27\. Best practices

mandatory

Go to `https://dev-tools.hbtn.info/`

Which attribute is missing on all the links with the target `_blank`?

In your answer file only put the letter of the multiple choice answer from below:

*   A. `rel="noopener"`
*   B. `rel="noreferrer"`
*   C. A and B

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `27-missing_attr`

Help

×

#### Students who are done with "27. Best practices"

Review your work

×

#### Correction of "27. Best practices"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 28\. SEO

mandatory

Go to `https://dev-tools.hbtn.info/`

Which `<a>` links don’t have enough text description?

Take a screenshot of it

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `28-unclear_desc.png`

Help

×

#### Students who are done with "28. SEO"

**0/1** pt

### 29\. Sources

mandatory

Go to `https://dev-tools.hbtn.info/`

The `sources` panel allow you to edit files, add breakpoints to analyse your JavaScript code and create snippets.

*   Create a new snippet called `allcolors.js`
*   Copy-paste the code on [this page](/rltoken/GtDwHzoJafYiYdu7b8RA4Q "this page")
*   Run the code
*   Take a screenshot of the result in your console

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `29-how_many_colors.png`

Help

×

#### Students who are done with "29. Sources"

**0/1** pt

### 30\. Block CSS files

mandatory

Go to `https://dev-tools.hbtn.info/`

Block all CSS requests

Take a screenshot of it

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `30-no_css.png`

Help

×

#### Students who are done with "30. Block CSS files"

**0/1** pt

### 31\. Application panel

mandatory

Go to `https://dev-tools.hbtn.info/`

The `application` panel gives you access to the storage (cookies, sessions, cache…) and some other options as Services Workers and more recently, notifications.

What is the only key present in the session storage for this page?

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `31-session_storage_key`

Help

×

#### Students who are done with "31. Application panel"

Review your work

×

#### Correction of "31. Application panel"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 32\. Service workers

mandatory

Go to `https://dev-tools.hbtn.info/`

Does this page have any service workers? `Yes` or `No`

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `32-service_workers`

Help

×

#### Students who are done with "32. Service workers"

Review your work

×

#### Correction of "32. Service workers"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 33\. Security

mandatory

Go to `https://dev-tools.hbtn.info/`

The `security` panel allows you to make sure HTTS is properly implement on a webpage.

Which organization issued the SSL certificate for this page?

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `33-ssl_cert`

Help

×

#### Students who are done with "33. Security"

Review your work

×

#### Correction of "33. Security"

Start a new test Close

Requirement success

Requirement fail

Code success

Code fail

Efficiency success

Efficiency fail

Text answer success

Text answer fail

Skipped - Previous check failed

Get a sandbox

**0/1** pt

### 34\. Expiration date

mandatory

Go to `https://dev-tools.hbtn.info/`

When does the SSL certificate expire?

Take a screenshot of it

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `developer_tools`
*   File: `34-ssl_expiration.png`

Help

×

#### Students who are done with "34. Expiration date"

**0/1** pt
