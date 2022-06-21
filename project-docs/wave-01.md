# Wave 01: Setup and Baseline

**Learn Topics: React Components, Props, and State & Event Handling required for this wave**

## Setup

Use the following steps to get started:

1. One team member should fork and clone the repository.
1. Add other team member(s) as collaborators in GitHub
1. Run `yarn install` to install dependencies.
1. Run `yarn start` to run the local development server.

## Baseline

In Wave 01, we will explore the starter code for Task List Front End.

Read through the code in `App.js`, `TaskList.js` and `Task.js` and their style sheets to understand how data and events are being handled. You may use the following questions and suggestions to guide your exploration:

1. What `props` does `Task` have? Where do they come from? *id, title, and the isComplete func?
2. The `Task` component uses destructuring to read in the props `const Task = ({ id, title, isComplete }) => {...`
    - How would the code change if `{id, title, isComplete}` were replaced with `props`?
       * it wouldn't change much... when we go to use the props we would have to write 'props.id' instead of just id?
    - Consider making this change and the subsequent necessary changes through the rest of the component to deepen your understanding of the code.
      * see comments in code
3. How is the ~~strikethrough~~ style applied when the task title is clicked? * when the task title is clicked, then the state of setComplete changes and the CSS styling changes to 'tasks_item_toggle--completed' per the buttonclass. 
    - Consider updating the appropriate rule sets to change the text or background color when a task is marked complete.
4. What `props` does `TaskList` have? Where do they come from? * TaskList has the prop 'tasks'
5. Where is the function `getTaskListJSX` called in `TaskList`? *it's called in the return statement
    - How would the code change without this helper function?
6. What component is `TASKS` passed to in `App`? *TASKS is passed as a prop to TASKLIST in the App return statement
    - How does the component pass `TASKS`?
    - What element is the component wrapped in?

The suggestions above should give you a strong foundation for working with Task List Front End. As time allows, follow your curiosity to explore more of the code and features.








