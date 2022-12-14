# Class 13 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Message Queues

Below you will find some reading material, code samples, and some additional resources that support today’s topic and the upcoming lecture.

## Reading

[Socket.io Chat Example](https://socket.io/get-started/chat/)

Explain to a non-technical recruiter what the Chat Example (above) does.

* We are creating an application with express adn  sockets to connect server and clients that will connect and send information (messages) either direction (to and from)

What proof of life are we getting on the backend from the above app?

* We should have confirmation of (listening on *PORT(3000/3001/3002) in our terminal and our localhost on web browser.

Socket.IO gives us the i0.emit() method to send an event to everyone. What flag would you use if you want to send a message to everyone except for a certain emitting socket?

* we use the (socket.broadcast.emit) to emit from that particular socket.

[Rooms](https://socket.io/docs/v4/rooms)

What is a room and how might a room be useful?

* A "channel" for sockets to join/leave. It can be used to broadcast to certain/specific (subset of) clients.

How do you join a room?

* **join** is used to subscribe to a specific channel.

How do you leave a room?

* **leave** is used to leave a channel/room.

[Namespaces](https://socket.io/docs/v4/namespaces/)

What is a Namespace and what does it allow you to do?

* [A Namespace is a communication channel that allows you to split the logic of your application over a single shared connection (also called "multiplexing").](https://socket.io/docs/v4/namespaces/#:~:text=A%20Namespace%20is%20a%20communication%20channel%20that%20allows%20you%20to%20split%20the%20logic%20of%20your%20application%20over%20a%20single%20shared%20connection%20(also%20called%20%22multiplexing%22).)

Each namespace potentially has its own what? (hint: 3 things)

* event handlers

* rooms

* middleware(s)

Discuss a possible use case for separate namespaces

* When information is only for a subset of clients/ authorized users only.

## Bookmark and Review

[Socket.io Emit Cheatsheet](https://socket.io/docs/v4/emit-cheatsheet/)

## Reflection

What are your learning goals after reading and reviewing the [class README?](https://codefellows.github.io/code-401-javascript-guide/curriculum/class-06/)

* These current topics we are learning are very interesting to me, I want to get a better understanding of it all. Honestly I would like to get really knowledgeble and good at utilizing these for my own personal projects. This is the area that I initially would think of when I thought of "full-stack" web development.

## Things I want to know more about
