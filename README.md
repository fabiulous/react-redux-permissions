**react-redux-permissions** is a simple library to handle your react application permissions using redux.

## Installation

```
npm i react-redux-permissions --save
```

or 

```
yarn add react-redux-permissions
```

## Features

* Disable views and components
* Provide a fallback component for users without permission
* Designed for react-redux
* High Order Component option

## Requirements

* node >= 4.0.0

## Usage

### Reducer

Import the reducer and pass it to your store:

``` javascript
import { createStore, combineReducers } from 'redux';

import { reducer as permissions } from "react-redux-permissions"

export function configureStore(initialState = {}) {
  return createStore(
    combineReducers({
      permissions
    }),
    initialState
  );
}
```  
### Actions
Add roles to the current user:

```javascript
import { add } from "react-redux-permissions"

dispatch(add("manager"))
dispatch(add("canSeeMessages")) // Pretty much anything
```
Remove roles from the current user:

```javascript
import { remove } from "react-redux-permissions"

dispatch(remove("canSeeMessages"))
```

Remove all roles. Useful once you logout.
```javascript
import { clear } from "react-redux-permissions"

dispatch(clear())
```

### Component

You can limit access to your views using the default Permissions component.

#### allowed
With the `allowed` prop, only users with one of the permissions will be able to see child components.
```javascript
import Permissions from "react-redux-permissions"

...

<Permissions
  allowed={["paying"]}
>
  <Route path="/dashboard" component={DashboardView} />
</Permissions>
```
#### except
With the `except` prop, every user except the ones with the passed permission will be able to see child components.
```javascript
import Permissions from "react-redux-permissions"

...

<Permissions
  except={["paying"]}
>
  <Route path="/dashboard" component={DashboardView} />
</Permissions>
```

#### fallbackElement
You can send a `fallbackElement` to show an alternative view for users without permission
```javascript
import Permissions from "react-redux-permissions"

...

<Permissions
  except={["paying"]}
  fallbackElement={<DashboardDisabled />}
>
  <Route path="/dashboard" component={DashboardView} />
</Permissions>
```

### HOC
You can also use a High Order Component to disable views and components:

Send allowed roles as the first argument and disallowed as the second argument.
You can also provide a fallback component as second argument of the second function.
```javascript
import { HOC as Permissions } from "react-redux-permissions"

const DashboardView = Permissions(
  ["admin", "paying"],
  ["trial"]
)(Dashboard, <ModuleDisabled view="Dashboard" />)

...

<Route path="/dashboard" component={DashboardView} />
```

Avoid using it like:
```javascript
import { HOC as Permissions } from "react-redux-permissions"

const DashboardView = Permissions(["admin", "paying"], ["trial"])

...
render() {
  return (
    ...
    <Route path="/dashboard" component={DashboardView(Dashboard, <ModuleDisabled view="Dashboard" />)} />
    ...
  )
}
```
This approach inside render will make react mount the component again and cause undesired effects.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/shizpi/react-redux-permissions. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The module is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
 
