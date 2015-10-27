# Cotifil
Cotifil gives the a Mithril application a nice and organized architecture.

## Why?
Mithril is a nice and highly customizable framework but its too simple. That's nice for small apps with 3 or 4 features, but when you have 20, 30 features it starts to get hard to give maintance.

## Purpose
Keep the direct access to Mithril, Cotifil will never hide it from you so you can enjoy the whole Mithril community. And also enable you to write Mithril applicatons using ES6.

## What is included in the Cotifil?
* **Application** - Mithril does not have a 'real' application, the ideia of this is organize different parts of your 'application'. It gives you an isolated environment for your application.
* **Page** - Mithril look at Pages and Components as the same thing and they are. But when you want to reuse pages in different Applications its nice to treat Pages and Components differents.
* **Component** - Same as Mithril components, the difference is that in the Component controller you can access the Application and the Page that it is being called.
* **Middleware** - Same as the common backend middlewares(ex. Rack Middleware), it can be used to create logged areas in your website.
* **Session** - A place where you store some important values. It have different ways to store but the main is the browser session.
* **Template(Pending)** - Is a structure that the view of a page will be redered in.

## Roadmap

### Application
* [x] This is the basic of the Cotifil, it is not 'ready' beacuse it will be always changing, but for now we can use it.

### Page
* [x] You can define the views and use it in your application routes.

### Component
* [x] The basics are ready, and you can use it.
* [ ] Components in the Application Template don't need to be recreated every time.

### Session
* [ ] Enable it to have different storage strategies. A dedicated session for each Application.

### Middleware
* [x] For pages is ready.
* [ ] For components.

### Shared
* [ ] Create a nice way to define some heavy logic to be cached.

### Template(Pending)
* [ ] Actually it doesn't exists.

### Docs
* [ ] Create nice examples

### Test
* [ ] The structure of creating tests are ready and now is just create the tests. ;D
