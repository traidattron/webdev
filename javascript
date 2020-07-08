--Destructuring: object destructuring and array destructuring
++ function: 
variable aissignment
swapping
ignoring

--Arrow function:
--Spread operator:
functions: merge an array, copy and update an object, simpler function Calls

--Interceptor axios: run/modify ur code the request/response before these reach their destination
--promise: is an object that may produce a single value sometime in the future
--promise.all: to aggregate a group of promises to a single promise
--async/wait: a special syntax to work with promise

PART3-SERVER SIDE
--express (libraries):  ease server side development with Node by pleasing interface to work with than the built-in http module
--nodemon: nodemone will observe any changed files in directory where nodemon is started. Then nodemon automatically restart ur node application 
--REST: architectural style meant for building a scalable web
--curl: is used in commandline or script to transfer data
--POSTMAN: collaboration platform for API development, Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs—faster
--Cross-origin resource sharing (CORS):
  + a mechanism that allows restricted resources (e.g. fonts) on a web page to be requested from another domain outside the domain from which the first resource was served
--Middleware: functions that can be used for handling request and response objects
--HTTP request types
  + safety: executing request must not cause any side effects in the server (side effects mean 
    == the state of the database must not change as a result of the request, 
    == and the response must only return data that already exists on the server
  + idempotency: if a request has side-effects, then the result should be same regardless of how many times the request is sent

--REDUX:
+ the state is stored in a "store"
+ state of store is changed with "action"
  == action example:
  {
    type: 'INCREMENT'
  }
+ impact of the action to the stage defined using a "reducer"
  == reducer: a function, parameters: current state and action, return a new state
  == reducer example: 
    const counterReducer = (state = 0, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return state + 1
        case 'DECREMENT':
          return state - 1
        case 'ZERO':
          return 0
        default: // if none of the above matches, code comes here
          return state
        }
      }
   == Reducer is only given as a parameter to the "createStore-function"
   == The STORE now uses the REDUCER to HANDLE ACTIONS, which are DISPATCHED or 'sent' to the store with its "dispatch-method"
   
