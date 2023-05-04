import React from "react";

const Blog = () => {
  return (
    <div className="mx-14">
      <h1 className="text-4xl text-center font-medium mt-[80px]">Blogs</h1>
      <hr className="w-48 h-1 mx-auto my-10 bg-black" />

      <div className="border-2 my-3 p-5">
      <h1 className="text-2xl my-4">
        The differences between uncontrolled and controlled components
      </h1>
      <p>
        The most succinct way to explain it is that a controlled input’s state
        is externally passed to it via props, whereas an uncontrolled input's
        state is managed internally. For example, an uncontrolled text input's
        contents can only be changed by the user's input, whereas a controlled
        text input's contents will always be equal to one of it's props.
      </p>
      </div>

     <div className="border-2 my-3 p-5">
     <h1 className="text-2xl my-4">
        How to validate React props using PropTypes ?
      </h1>
      <p>
        Different validators are exported by the PropTypes to configure type
        definitions. Validators used for basic data types are stated below:
        <ul className="list-disc" >
          <li>any: Props of any data type can get validated by this.</li>
          <li>symbol: Props with symbol data type can be validated by this.</li>
          <li>
            func: Function PropType can be used for validation by this
            validator.
          </li>
          <li>
            array: Prop with an array data type can get validated by this.
          </li>
          <li>bool: Props with Boolean data type can get validated by this.</li>
          <li>
            string: Props with String data type can get validated by this.
          </li>
          <li>object: Object type of prop can get validated by this.</li>
          <li>
            number: Props with Numeric data type can get validated by this.
          </li>
          <li>
            The above PropTypes can be used while building a react application.
          </li>
        </ul>
      </p>

     </div>
     
      <div className="border-2 my-3 p-5">
      <h1 className="text-2xl my-4">
      Tell us the difference between nodejs and express js.
      </h1>

      <p><ul className="list-disc"><li>Node.js: </li></ul> <br />
Node.js is a runtime environment for executing JavaScript code outside of a web browser. It provides a powerful set of features for building server-side applications, such as non-blocking I/O, event-driven architecture, and the ability to work with streams and buffers.Node.js is often used as a backend technology for building web applications, APIs, and microservices. It can also be used for other types of applications, such as desktop apps, command-line tools, and IoT devices.</p> <br /> <br />

<p> <ul className="list-disc"><li>Express.js: </li></ul>  <br /> 
Express.js is a web framework for Node.js that simplifies the process of building web applications. It provides a set of tools and utilities for handling HTTP requests, managing routes, and rendering views.Express.js is built on top of Node.js and provides an additional layer of abstraction that makes it easier to write web applications. It supports a wide range of middleware modules that can be used to add functionality to an application, such as authentication, logging, and error handling.</p>

      </div>

      <div className="border-2 my-3 p-5">
      <h1 className="text-2xl my-4">
      What is a custom hook, and why will you create a custom hook?
      </h1>

      <p>
      In React, a custom hook is a reusable piece of logic that can be shared across multiple components. Custom hooks allow you to extract complex logic from your components, making them easier to read and maintain. They also enable you to abstract away certain concerns and provide a cleaner, more concise API for your components to use.
      </p>


      </div>
    </div>
  );
};

export default Blog;
