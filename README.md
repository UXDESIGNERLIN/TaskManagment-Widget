

### Task Management Widget

You can play around with the application here: [Task management widget](https://taskmanager-widget.herokuapp.com/)

### How to set up the project

After cloning the project, do `npm install` and `npm run start`, you will see the project in your local at `localhost:3000`

### Tech stack

I use React and emotion mainly for the application.
Due to the simple logic and the components structure at this stage, I use component composition approach for sharing the state around so component such as `CustomCheckBox` doesn't have to pass data to other components to know whether it is checked or not.

### Project structure

src
├── App.css
├── App.js
├── App.test.js
├── api
│   └── AccordionApi.js
├── components
│   ├── Accordion
│   │   ├── index.jsx
│   │   └── style.js
│   ├── AccordionItem
│   │   ├── index.jsx
│   │   └── style.js
│   ├── CustomCheckBox
│   │   ├── index.jsx
│   │   └── style.js
│   └── ProgressBar
│       ├── index.jsx
│       └── style.js
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
├── setupTests.js
├── styles
│   └── variables.js
└── widgets
    └── TaskManagement
        ├── index.jsx
        └── style.js