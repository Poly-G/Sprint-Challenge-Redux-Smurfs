1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- Filter, Map and Concat

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions hold payload of information to send to the Redux store. They are plain JavaScript objects that must have the type of action being performed.
- Reducers specify how an action is going to change in response to an action sent to the store.
- The store holds the entire state of an application.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Component state is when the component holds its own state and data/state is passed around with props
- Application state is when the state is located in one single location like the store for example, and components subscribe to that state.

4.  What is middleware?

- For Redux, middleware provides a third-party extension point between dispatching an action and handing the action off to the reducer

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Redux-thunk is middleware that provides tools for working with API calls and other asynchronus code. It gives us direct access to dispatch(), which means we can use dispatch() conditionally within our action-creator AND we can use it multiple times within a single action-creator. Dispatch is what sends the action to the reducer.

6.  Which `react-redux` method links up our `components` with our `redux store`?

- connect() is a HOC that links allows us to pass out application state to components as props using mapStateToProps
