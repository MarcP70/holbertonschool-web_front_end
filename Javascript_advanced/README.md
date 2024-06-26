      Project: JavaScript advanced | Holberton Laval, France Intranet            Cookies.set('timezone', (new Date()).getTimezoneOffset() / -60.0);

Toggle navigation[

](/)

*   [

    Help

    ](https://students-support.hbtn.io/hc)
*   [

    Projects

    ](/projects/current)
*   [

    My reports

    ](/users/my_reports)
*   [

    QA Reviews I can make

    ](/corrections/to_review)
*   [

    Mock interviews

    ](/dashboards/my_current_reefineries)
*   [

    Evaluation quizzes

    ](/dashboards/my_current_evaluation_quizzes)

* * *

*   [

    Concepts

    ](/concepts)
*   [

    Servers

    ](/servers)
*   [

    Sandboxes

    ](/user_sandboxes)
*   [

    Tools

    ](/dashboards/my_tools)

* * *

*   [

    Peers

    ](/users/peers)
*   [

    Captain's Logs

    ](/dashboards/my_captain_log)
*   [

    Officers

    ](/dashboards/my_officers)
*   [

    Speakers of the Day

    ](/dashboards/my_speakers_of_the_day)

* * *

*   [

    Slack

    ](https://holberton-school-org.slack.com)

    [

    Search

    ](#)

    [

    My Profile

    ](/users/my_profile)


[

](/)

*   [

    Help

    ](https://students-support.hbtn.io/hc)
*   [

    Projects

    ](/projects/current)
*   [

    My reports

    ](/users/my_reports)
*   [

    QA Reviews I can make

    ](/corrections/to_review)
*   [

    Mock interviews

    ](/dashboards/my_current_reefineries)
*   [

    Evaluation quizzes

    ](/dashboards/my_current_evaluation_quizzes)

* * *

*   [

    Concepts

    ](/concepts)
*   [

    Servers

    ](/servers)
*   [

    Sandboxes

    ](/user_sandboxes)
*   [

    Tools

    ](/dashboards/my_tools)

* * *

*   [

    Peers

    ](/users/peers)
*   [

    Captain's Logs

    ](/dashboards/my_captain_log)
*   [

    Officers

    ](/dashboards/my_officers)
*   [

    Speakers of the Day

    ](/dashboards/my_speakers_of_the_day)

* * *

*   [

    Slack

    ](https://holberton-school-org.slack.com)

    [

    Search

    ](#)

    [

    My Profile

    ](/users/my_profile)


Curriculum

\[C#21\] Spe - Web Stack programming 2024 Average: 16.36%

*   [

    \[C#20\] Foundations v2 - Part 1 Average: 0.0%



    ](/curriculums/208/observe/27054)
*   [

    \[C#20\] Foundations v2 - Part 2 Average: 0.0%



    ](/curriculums/252/observe/27059)
*   [

    \[C#20\] Foundations v2 - Part 3 Average: 0.0%



    ](/curriculums/274/observe/27064)
*   [

    \[C#21\] Spe - Web Stack programming 2024 Average: 16.36%



    ](/curriculums/343/observe/37643)
*   [

    \[C#21\] Interview Preparation - Algorithms Average: 100.0%



    ](/curriculums/215/observe/37644)
*   [

    \[C#21\] Interview Preparation - Prepare Yourself Average: %



    ](/curriculums/219/observe/37645)

[

You have a captain's log due before 2024-06-02 (in 2 days)! Log it now!

](/captain_logs/192104/edit)

Resources
---------

**Read or watch:**

*   [Lexical scoping](/rltoken/ePGYHoF7G6QtQLrAo5jXBA "Lexical scoping")
*   [Closure](/rltoken/5hVqVK9QjNOzh_xsPtPxag "Closure")
*   [Call stack](/rltoken/Z5BRWGr9-D30Tn9e8y6uAw "Call stack")
*   [Binding](/rltoken/1jcQ4CgKqN2c3X3xHFbW5Q "Binding")
*   [Callbacks](/rltoken/SIcSmzcprPwCWcwAOo6qaw "Callbacks")

Learning Objectives
-------------------

*   What is lexical scoping in JavaScript
*   What is closure in JavaScript
*   How to use closure
*   How to chain different closures
*   How to simulate private methods with Closure
*   The execution stack order with JavaScript
*   How to use binding
*   How to use callbacks

Requirements
------------

*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the folder of the project, is mandatory
*   Your code should use the `js` extension

### Quiz questions

**Great!** You've completed the quiz successfully! Keep going!
<details>
    <summary>Click to expand/hide quiz</summary>

#### Question #0

What’s the result of this block of code?

    let i = 12;
    console.log(i);


*   10

*   12 [x]

*   14

*   undefined


#### Question #1

What’s the result of this block of code?

    let i = 12;
    {
      i = 15;
    }
    console.log(i);


*   10

*   12

*   15 [x]

*   undefined


#### Question #2

What’s the result of this block of code?

    {
      let i = 12;
    }
    console.log(i);


*   10

*   12

*   14

*   undefined [x]


#### Question #3

What’s the result of this block of code?

    let i = 12;
    function increase() {
      i += 1;
    }
    console.log(i);


*   10

*   12 [x]

*   13

*   14

*   undefined


#### Question #4

What’s the result of this block of code?

    let i = 12;
    function increase() {
      i += 1;
    }
    increase();
    console.log(i);


*   10

*   12

*   13 [x]

*   14

*   undefined


#### Question #5

What’s the result of this block of code?

    let i = 12;
    function increase() {
      let i = 14;
    }
    increase();
    console.log(i);


*   10

*   12 [x]

*   13

*   14

*   undefined

</details>

Tasks
-----

### 0\. Lexical scoping and welcome message

mandatory

Create a function named `welcome`:

*   It takes two arguments: `firstName` (string) and `lastName` (string)
*   It contains a variable named `fullName`, that will contains the `firstName` followed by a space and then the `lastName`
*   Within the `welcome` function, write a function named `displayFullName`:
    *   It should display an alert with the message `Welcome` + the variable `fullName` + and exclamation mark.
*   Call the function `displayFullName` at the end of the function `welcome`

**How to test**

*   Open your web inspector in the tab “Console”
*   Copy paste your code
*   Run `welcome('Holberton', 'School');` should prompt an alert with this content: `Welcome Holberton School!`
*   `alert(fullName)`, should return a reference error `fullName is not defined`

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Javascript_advanced`
*   File: `0-welcome.js`

**0/12** pts

### 1\. Closure Scope Chain

mandatory

*   Create a variable named `globalVariable` with value `Welcome`
*   Create a function `outer` that:
    *   alerts the content of the variable `globalVariable`
    *   creates a variable named `course` with value `Holberton`
    *   creates a function `inner` that:
        *   alerts the content of the variable `globalVariable` and `course` (concatenated)
        *   creates a variable named `exclamation` with value `!`
        *   creates a function `inception` that alerts the content of the variable `globalVariable`, `course`, and `exclamation` (concatenated)
        *   calls the function `inception`
    *   calls the function `inner`
*   Call the function `outer`

**Compose the code:**

*   Write the function `inception` within `inner`
*   Write the function `inner` within `outer`
*   Call the function `outer` in the main code (outside any function)
*   Call the function `inner` within `outer`
*   Call the function `inception` within `inner`

**Requirements:**

*   Running the script should display three popups one by one with the text `Welcome`, `Welcome Holberton`, and `Welcome Holberton!`

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Javascript_advanced`
*   File: `1-nested_functions.js`

**0/19** pts

### 2\. Closure

mandatory

Write a function named `welcomeMessage`:

*   It accepts one argument `fullName` (string)
*   It should be a closure for an alert displaying `Welcome <fullName>`

After this function definition, create three variables:

*   `guillaume` contains a call `welcomeMessage` with `Guillaume` as argument
*   `alex` contains a call `welcomeMessage` with `Alex` as argument
*   `fred` contains a call `welcomeMessage` with `Fred` as argument

**How to test:**

*   In your web console, cop/paste your file
*   Executing the following in the console:

    guillaume();
    alex();
    fred();


Should display three alerts like below:

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/783cce39c2d154fdd206.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240531%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240531T114547Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d26fea12c89565217c46b4e345cd9b009dd69a0d4d2183755482e947af8cd46a)

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/a1ea60145098f4cf67cd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240531%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240531T114547Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=1edd5d102f18711f6bdc6c90433e155d9dea90efe850d44dde0d66a5ee08f003)

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/0b25941037734e3b83d8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240531%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240531T114547Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=253eeea7baf9eac74017a5434d19314690b88bfd87b0aba2e643b2a55f75b1b6)

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Javascript_advanced`
*   File: `2-function_me.js`

**0/13** pts

### 3\. Closure and loops

mandatory

Write a function named `createClassRoom`:

*   It takes into argument `numbersOfStudents` (number)
*   Inside, it contains a function `studentSeat`, that takes into argument `seat` (number) and returns a function that returns the `seat` number
*   After the definition of `studentSeat`, create and populate a variable `students` (array)
    *   Using a loop from 0 to `numbersOfStudents`, pass the number of iteration + 1 to `studentSeat` and add its return value to the `students` array
*   Returns the `students` array

Create a closure `classRoom`, calling `createClassRoom` with 10 students

**Requirements:**

Executing the following code:

    console.log(classRoom[0]());
    console.log(classRoom[3]());
    console.log(classRoom[9]());


Should return

    1
    4
    10


**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Javascript_advanced`
*   File: `3-classrooms.js`

**0/12** pts

### 4\. Complex Closure

mandatory

Create a function `divideBy`:

*   It takes into argument `firstNumber` (number)
*   It returns a function that takes into argument `secondNumber` (number)
    *   It returns the second number divided by the first number

Create a function `addBy`:

*   It takes into argument `firstNumber` (number)
*   It returns a function that takes into argument `secondNumber` (number)
    *   It returns the sum of the two numbers

Create four closures:

*   `addBy100`, that uses the function `addBy` with the number 100
*   `addBy1000`, that uses the function `addBy` with the number 1000
*   `divideBy10`, that uses the function `divideBy` with the number 10
*   `divideBy100`, that uses the function `divideBy` with the number 100

**Requirements:**

Executing the following code:

    console.log(addBy100(20));
    console.log(divideBy10(20));
    console.log(divideBy100(200));
    console.log(addBy1000(20));


Should display in the console:

    120
    2
    2
    1020


**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Javascript_advanced`
*   File: `4-math.js`

**0/17** pts

### 5\. Changing DOM with closure

mandatory

Create a function named `changeMode`:

*   It accepts 5 arguments `size` (number), `weight` (string), `transform` (string), `background` (string), `color` (string)
*   Using closure, it changes the style of the entire page and set the `font-size`, `font-weight`, `text-transform`, `background-color`, and `color`

Write a function named `main`:

*   Set a variable named `spooky` that passes the arguments `9`, `bold`, `uppercase`, `pink`, `green` to `changeMode`
*   Set a variable named `darkMode` that passes the arguments `12`, `bold`, `capitalize`, `black`, `white` to `changeMode`
*   Set a variable named `screamMode` that passes the arguments `12`, `normal`, `lowercase`, `white`, `black` to `changeMode`
*   Add a paragraph to the body of the page with the text `Welcome Holberton!`
*   Add a button to the body with the text `Spooky`
*   Add a button to the body with the text `Dark mode`
*   Add a button to the body with the text `Scream mode`
*   When clicking on each button, the page CSS should change to the different themes you created previously

Call the `main` function

**Requirements:**

*   Use vanilla JavaScript to add the elements to the DOM and change the style of the page
*   JQuery not allowed!

Clicking the `Spooky` button should change the web page to look something like this:

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/e44712a9577dbd8425fd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240531%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240531T114547Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=683ec2c615f0b3a41b7484c218e8c4f7707ed98570e6c36882c0bc5713a174f8)

Clicking the `Dark mode` button should change the web page to look something like this:

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/39d42bc7735aa787ea40.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240531%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240531T114547Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e6649e10b057462253960fac82608b47aea6c919e16af2298876e6b9d5efb92c)

Clicking the `Scream mode` button should change the web page to look something like this:

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/bd22426bfc6ffed7cf74.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240531%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240531T114547Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8b83cb229beeb17267e45a0c81f072db43884fe3c7740b9ca25b86dc09574b11)

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Javascript_advanced`
*   File: `5-mode.js`

**0/26** pts

### 6\. Private methods with closure

mandatory

Write a module named `studentHogwarts`:

*   It contains two variables `privateScore` set to 0, and `name` set to `null`
*   It contains one private method `changeScoreBy`, it takes `points` in argument and add it to `privateScore`
*   The module gives access to four public methods (return an object):
    *   `setName`, it takes into argument `newName`, and set the private variable `name`
    *   `rewardStudent`, it calls the method `changeScoreBy` with 1
    *   `penalizeStudent`, it calls the method `changeScoreBy` with -1
    *   `getScore`, it returns `name: score` (ex: `Harry: 14`)

Create one variable named `harry`, that is an instance of `studentHogwarts`:

*   Set the name of the object to `Harry`
*   Reward the student four times
*   Log to the console the name and score

Create one variable named `draco`, that is an instance of `studentHogwarts`:

*   Sets the name of the object to `Draco`
*   Reward the student one time
*   Penalize the student three times
*   Log to the console the name and score

**Requirements:**

*   Executing the code should display in the console

    Harry: 4
    Draco: -2


**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Javascript_advanced`
*   File: `6-hogwarts.js`

**0/19** pts

### 7\. Stack order and setTimeout

mandatory

**Write the following commands in the following order:**

*   Log to the console `Start of the execution queue`
*   Log to the console `Final code block to be executed` using `setTimeout` (with delay of 0)
*   Using a loop that iterates 100 times, each iteration logs to the console the iteration number
*   Log to the console `End of the loop printing`

**Requirements:**

*   Your code should log to the console the following:

    Start of the execution queue
    1
    2
    ...
    100
    End of the loop printing
    Final code block to be executed


**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Javascript_advanced`
*   File: `7-timeout.js`

**0/6** pts

### 8\. Stack order in functions

mandatory

Write a function `processPayment`:

*   It takes one argument `amount` (number)
*   It logs to the console `Collecting payment of <amount>`

Write a function named `processOrder`:

*   It takes two arguments `orderId` (number), and `amount` (number)
*   It logs to the console `<orderId> is being processed`
*   It calls the function `processPayment`
*   It logs to the console `<orderId> has been fully processed`

In the main part of the code:

*   Logs to the console `Processing orders`
*   Call `processOrder` with `12321` and `10.99`
*   Call `processOrder` with `12322` and `12.99`
*   Call `processOrder` with `12323` and `15.0`
*   Logs to the console `All the orders have been processed`

**Requirements:**

*   Your code should log the following to the console

    Processing orders
    12321 is being processed
    Collecting payment of 10.99
    12321 has been fully processed
    12322 is being processed
    Collecting payment of 12.99
    12322 has been fully processed
    12323 is being processed
    Collecting payment of 15
    12323 has been fully processed
    All the orders have been processed


**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Javascript_advanced`
*   File: `8-payments.js`

**0/15** pts

### 9\. Prime numbers & timing execution

mandatory

Write a function named `countPrimeNumbers`:

*   It will return the number of prime numbers from 2 to 100

Log to the console the time in milliseconds to execute the function in this format: `Execution time of printing countPrimeNumbers was <time used> milliseconds.`

**Requirements:**

*   You must use `performance` API to measure the time needed to execute the function (`performance.now()`)
*   Your code should display something in the range of `Execution time of printing countPrimeNumbers was 0.2700000002514571 milliseconds.`

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Javascript_advanced`
*   File: `9-prime.js`

**0/6** pts

### 10\. Execution stack & timing execution

mandatory

Reuse the function `countPrimeNumbers` from `9-prime.js` (copy/paste)

*   Execute the function `countPrimeNumbers` 100 times
*   Log to the console the time in milliseconds to execute the function 100 times

**Requirements:**

*   Your code should display something in the range of `Execution time of calculating prime numbers 100 times was 40.865000002551824 milliseconds.`

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Javascript_advanced`
*   File: `10-prime.js`

**0/6** pts

### 11\. Changing stack order using setTimeout

mandatory

Reuse the function `countPrimeNumbers` from `10-prime.js` (copy/paste)

*   Log to the console the time in milleseconds to execute the function 100 times
*   Find a way to actually do most of the calculation at the end of the execution stack

**Requirements:**

*   Your code should display something in the range of `Execution time of calculating prime numbers 100 times was 0.03999999910593033 milliseconds.`
*   Use `setTimeout` keyword to change the stack order

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Javascript_advanced`
*   File: `11-prime.js`

**0/7** pts

### 12\. Binding

mandatory

Create an object named `roomDimensions` with the following three attributes:

*   `width`: `50`
*   `length`: `100`
*   `getArea`: function that returns the surface area of a the object using the `width` and `length`

Create a variable named `boundGetArea`, that will bind the object `roomDimensions` to the `getArea` function

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Javascript_advanced`
*   File: `12-room_area.js`

**0/8** pts

### 13\. Binding + Closure

mandatory

Write an object `user` with the attributes:

*   `hobby`: `Calligraphy`
*   `favoriteSport`: `Hockey`
*   `astrologicalSign`: `Aries`
*   `firstName`: `Buillaume`
*   `lastName`: `Johns`
*   `location`: `Netherlands`
*   `occupation`: `Engineer`

Create a function named `logWelcomeUser`:

*   It takes one argument `welcomeString` (String)
*   It logs to the console `<welcomeString>, <firstName>. Your occupation is: <occupation>`

Create a variable named `bindLogWelcomeUser`. It binds the `logWelcomeUser` function to the `user` object.

Call the function with the string `Welcome`

**Requirements:**

*   Calling `bindLogWelcomeUser('Hello');` should return `Hello, Buillaume. Your occupation is: Engineer`

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Javascript_advanced`
*   File: `13-bind_user.js`

**0/17** pts

### 14\. Simple callback

mandatory

Write a new function named `createElement`:

*   It accepts one argument `data` (String)
*   It creates a paragraph element
*   The content of the paragraph is set to `data`
*   It appends to the document `body` the paragraph

Create a new function named `queryWikipedia`:

*   It accepts one argument `callback` (function)

*   Using `XMLHttpRequest`, it get the article of Stack Overflow with the URL `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*`
*   Once the fetch is correctly executed, it calls the `callback` function with the `extract` of the API response

Call `queryWikipedia` with `createElement` as callback

**Requirements:**

*   Use vanilla javascript to run the Ajax query (no jQuery or other framework)
*   You must not call `createElement` within `queryWikipedia` directly

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Javascript_advanced`
*   File: `14-wikipedia.js`

**0/13** pts
