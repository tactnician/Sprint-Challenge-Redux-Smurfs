1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

~ Array.map(); Array.filter(); Array.concat(); Object.assign();

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

~ An action is an object that lets the reducer how to update the redux store
~ Reducers hold the logic that updates the store. They are the only way to change the state of the applications 
~ A redux store holds our state tree and acts as the single source of truth in our react app


3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

~ Component state is held within the component's class object and handles things like input while the application state is used to pass logic and information between components. 

4.  What is middleware?

~ Middleware is implemented after the action and before the reducer. It allows us interupt the flow of an application perform some task and then reenter that flow. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

~ Thunk allows us to handle asnycronous functions before they are passed to the syncronous reducer. 

6.  Which `react-redux` method links up our `components` with our `redux store`?

~ The connect()() function allows up to connect a component to the redux store.
