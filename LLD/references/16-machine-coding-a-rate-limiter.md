# 4. Machine Coding a Rate Limiter

## What will you learn

Type: Video · Length: 6 min 8 s

### Lesson notes

In this video, Gaurav Sen explains the concept of rate limiting, which controls the number of requests sent to a server.
The video explores how to break down the problem of implementing a rate limiter into components, the algorithm used to determine which requests to accept or reject, and the different approaches to handling failed requests.
We also discuss the back-pressure algorithm, which helps reduce the amount of capacity when too many requests are failing.

### Resources

Timer Wheel: [https://github.com/InterviewReady/Low-Level-Design/blob/main/rate-limiter/src/main/java/TimerWheel.java](https://github.com/InterviewReady/Low-Level-Design/blob/main/rate-limiter/src/main/java/TimerWheel.java)

Token Bucket: [https://www.scylladb.com/2022/08/03/implementing-a-new-io-scheduler-algorithm-for-mixed-read-write-workloads/](https://www.scylladb.com/2022/08/03/implementing-a-new-io-scheduler-algorithm-for-mixed-read-write-workloads/)
Leaky Bucket: [https://en.wikipedia.org/wiki/Leaky_bucket](https://en.wikipedia.org/wiki/Leaky_bucket)

### Transcript

Hello everyone in this chapter. We'll be learning about rate limiting and also about how we can actually code a rate limiter in the real world. So this is more of a machine coding round where we are focusing on the implementation details. But before we dive into that we'll have to decide on what is a rate limiter. What are the things that we want to tackle? And then how do we actually break this problem down into Concepts or components which can then be eventually coded out?

So step one again just to repeat is to think of what is the atlator? Let's define that based on what the requirements are or what the expectations of this program is going to be we then see how do we actually make this happen? How do we have those behaviors working? And finally, how are we going to code this so let's start. Posting is what is a rate limiter. I'll take an example.

Let's say you are having Amazon Black Friday sales and the Amazon team knows that we can serve at most 1 million requests per second and you are now facing two million requests per second at this point. You might have many possible solutions. One of them is to draw requests which are not very important. You can cash the responses of many of the requests. You can try to scale vertically or horizontally, but there comes a point when none of these Solutions are either practical or they're too slow to implement. So preemptively what you do is you also Force the maximum number requests that your system can take the way to force the number of requests the way to force the limit of requests that your system is going to take is to add a real limit of on the edge of your system.

So now when you have two million requests coming in maybe 1 million requests will be dropped to do this. You need some sort of a system which can look at request and say yes, I will process this and another request and say no I will not process this based on some sort of an algorithm most rate limiting algorithms are based on time because when you think of capacity it is how many requests can I serve in how much time so one component of this is time and the other component is number requests. The rate limiter takes both of them and besides whether request is to be accepted or rejected. I'll take over the example here. You can think of WhatsApp when everyone is sending happy New Year messages at the start of the year. What is most important for the application is the single take the acknowledgment that your message has reached the server the second tick with that the messages reach the client is not so important and the Blue Tick that the person has read the message or not is not so important.

The most important is that the message has reached the server So eventually it will reach the client and you know, they can also see it. This is one example where we degrade our service. So that we can serve a lot of requests but this doesn't have anything to do with rate limiting. So we will not go here. Another thing that we mentioned was to scale the servers horizontally vertically scale our databases again, that's not something we are going to look at over here a rate limiter is very simply going to just stop requests. We are not going to be looking into caching.

We are not going to be looking into exception handling. We assume that all great limiter failed requests are soft errors meaning that if the client sees that it's a rate limiter who has rejected this request. Sometimes the client will try again unlike a password failure with you know, retrying makes no sense here. It means that there was a timeout we might have a lack of resources. Please try again. That's what the determit is going to say.

Now. Let's get into the requirements in a little more detail firstly when a request is failed. What should the real limited do here is multiple things that you can ask the real limited to do but to keep things very simple ask it to do nothing. That's the easiest state limit you can make however, there are two other approaches. You can take one is logging a request so you can take the request which has failed log it as this has failed this log can actually go to a messaging queue a Kafka dead letter q or it could also go to a database as a metric that you know, I feel these many requests effectively. You just need an endpoint where you need to give this result of this request has failed false.

Okay, you might also take the responsibility of the failure by actually taking a call back function. So you give a callback function saying that if it fails then do this you can expose this to the client or you can take it on yourself to run the Callback. I would suggest exposing it to the client. It keeps things quite modular and easy to extend. Okay. So we have taken care of failure cases for a rate limiter.

Another thing which you could do on failure is back pressure. This is a specific algorithm and you might want to code in the algorithm itself. The idea is that if you're getting too many requests and the requests are failing Then you should reduce the amount of capacity that you expected that you can handle. So let's say you made a promise of 1000 requests that you can handle. But in the real world what's happened right now is that at 500 requests you are getting timeouts. So what you should be doing then is dynamically saying that my capacity is somewhere around 500.

So I will start feeling requests which are perfectly genuine or perfectly fine. I will stop putting load on this system because this system is still not able to take the amount of load. It had promised earlier. So back pressure is a dynamic algorithm, which allows you to look at how much load a system is able to take and if there are failures it starts rate limiting immediately. Okay, it does not wait for a particular threshold a manual threshold to be set. This is one algorithm that you can have now, we can have other algorithms which are not just based on failure but based in General on rate limiting Concepts.

One of them is token bucket, very popular leaky bucket very similar to this. You can have a look in the description below for both of these algorithms. The algorithm that we are going to be using is that of a timer wheel which we have discussed in the high level design video for a great limiter. You can have a look at that in the description again, now that we have our requirements set. Let's actually try to code the rate limiter.

## Rate Limiter Overview

Type: Video · Length: 6 min 50 s

### Lesson notes

Gaurav Sen discusses rate limiting in a distributed system, where he assumes the rate limiter service is distributed to avoid a single point of failure.
We suggest using a database to store the configurations of all services that want to limit rates. We recommend using a rate limiting client to keep a snapshot of the configuration of each service, rather than querying the rate limiter every time a request is made.
A rate-limiting client decides whether to accept or reject a request based on the information it has cached.
A single source of truth is used to propagate the data and make decisions based on the acceptance or rejection of requests. We also talk about the need for endpoints to log failed requests and for a limit on where they should be placed.

### Transcript

Just write down what is going to be sent to this limit of? First thing we need to know is that there will be a service for a rate limiter and we can assume this to be a distributed service. Otherwise, there's a single point of failure and the rate limiter can be backed by a database. I'm making a really complex architecture. Of course, you can make it much simpler later. The reason I call it complex is because practically speaking a rate limiter is not a single point of failure.

If the rate limiter times out. Then you can assume that all requests have to go through that would be you know higher availability very low consistency. Let's say or very low accuracy in terms of rate limiting. So you can have a single node which handles all of the rate limiting. That's Point. Number one point number two is do you need a database?

It would be nice to have all the configurations rate limiting configurations of all services in this service, but it's not necessary. It could be that when the server comes up. That's when you can talk to it when it crashes. It loses all its configurations, which means that all the configurations are stored in the services, which talk to it. But I think that will again get pretty messy. So let us assume that we have a nice database where the ret limiter can store all of the configurations of all services which want to limit rates but there are some practical concentrations.

One of them is that whenever a service wants to talk to a rate limiter. It has very little time to make a decision to Take the request or let go of the request. The reason for this is because by definition a rate limit is telling you am I performing enough to take this request. And if part of the performance is taken away by this query to the rate limiter, that's a waste of resources. We don't want that. So if there is a Service, which talks to the rate limiter?

It wants this request to be super fast. There's a few things we can do, but the simplest is to actually use a rate limiting client. It's just called this RL flight. Which is a piece of software or a library that is running on every surface. Which has some rate limiting to do. And what this client does is keep a snapshot of the configuration of this service.

Let's say service 2 has 100 requests per second and service one has 1000 requests per second instead of querying the rate limit. Every time that can I take this request now, you have the information stored in the client cashed in the client and the client is some piece of code which can look at a request and accept or rejected. Okay. A very simple put it's like the important part of the rate limiter has been extracted into a library and put into the services whenever request comes it has enough information and data to make a decision of yes or no. Why do you need a server if you have a client for a real limited client? Why do you need this service, then shouldn't you just have them all in the clients?

I'm having a service so that there is some sort of propagation of data. So if you have multiple instances of service to and all of them are connected to the rate limiter service the benefit of this is that if the first service node handles 100 requests second service load handles 100 requests per second. And the third one handles 100 requests per second and the overall service limit is 270 then. Here you see that you have exceeded that overall service limit. instead of 300 you should have stopped at 270. So an individual rate limiting client will find it difficult to make that decision instead.

It needs to keep checking with those service keep spinning the service and checks whether I can take this request or not from time to time what that means is that there's a single source of truth to this great limiting concept. And there are cached possibly dirty data pieces that are roaming around for performance. Each of these clients report a request being accepted or rejected. to the mother service Right and the mother service decides on what rate they should continue keeping. Is there any configuration changes you can change the rate at which you should accept requests if there are any algorithms like backpack application or token bucket that can also come from the mother service. This is the basic idea what other things that we should look into.

I talked about an endpoint to send requests to or log failed requests. So let's say that will be an endpoint or a callback that you can use. Okay call back is basically a function that is run when a particular event happens. So for success and for failure both you can have callbacks. Okay, as you can expect a callback here in the rate limiter is going to be sending some information to the mother service. The problem here, of course is if your constantly sending messages to the mother service that's going to take a lot of bandwidth and it's going to take your resources instead.

What you want to do is batch many of these requests of past and fail and then send them together to the mother service so that she has an aggregated view of how our service is performing or how great limiting in general is performing across the system another question, which comes up is where should this week limit of be should it be Inside another service like a service registry. Usually that's a good idea. You can have a rate limiter and a Services history in the same place. The reason for that is whenever a service registers itself, it probably wants to suggest what kind of reads it can accept on the spot. But if you want to decouple things and you want to keep a very strong isolation of concerns, go ahead keep a separate service for a rate limiter and a separate service for a service registry fine. Roughly speaking we have idea of what we need to do.

We need a RL client. And we need a RL server. The Sobo is very simple. You want to extract out the algorithmic logic from the server? And what you want to do is you want to keep more data and coordination responsibilities in the server whenever you need to know how many requests were accepted by a system or how many requests can I accept moving forward for the next five seconds 10 seconds. Just ask the server.

It's like a heartbeat mechanism that you have with the service while a client is going to have the logic for accepting or rejecting a request. You cannot expect a client to persist the data and you cannot expect the client to hold a lot of data because this client is expected to run in the machines of people who are using your rate limiter. So you want the client to be easy to use you want it to be fast and you wanted to be efficient in terms of resources and compute that it uses right? So overall we have a decent picture of what we need to do. Let's start getting into the code now.

## Implementation Details

Type: Video · Length: 10 min 19 s

### Lesson notes

In this video, Gaurav Sen talks about the importance of creating a class diagram before coding, especially for larger projects, because it is easier to make changes in a diagram than in the code base.
He shows an example of breaking down a rate limiter software client and server into classes. He discusses the necessary behaviors and states of the client, including algorithms and a flexible system to handle success and failure callback functions.
Finally, he discusses the concept of generics in Java and how it can help avoid dirty code when returning objects in functions.

### Transcript

So one final step before we start coding is to think about the class diagram. And the reason I do this is because it's usually much easier to make changes in the class diagram then it is to make them in the in the real code base. You might feel like let me just jump to the code and start writing code. I'll load down the classes and then I load down the methods and the ID will help me out in some cases it is true. But when you're picking up any kind of a project or when you're picking up any kind of an assignment, which is large enough a little bit of planning helps making changes in the class diagram is also easier and seeing the links between classes and between the states and then behaviors is much easier on the class diagram. It's easier to change.

So with that let's go ahead with this diagram. The first thing that we talked about is is a separation of a client and a server for the rate limiter. I was calling it a mother service but it's basically a rate limiter software client. and a server right so we can initially break them into classes. I think they'll break into more the server we said needs to be as simple as possible. So that customized decisions can be made by the client.

This could be the profile service. It says that I will not take more than 30 registrations per second the profile service whenever it needs to check whether I should serve a request or not goes to this client and gets a response of true or false. So it's important to note that the profile services. Probably going to do this when it gets a request. Even before it starts processing it. The very first thing it's going to do is it's going to check whether I can even process this request.

Okay, so this client is speaking with our Inter service and so what kind of state should this client have what kind of behaviors does it need and based on that what kind of state so the client needs to be able to make decisions which means that it depends on what kind of algorithm you set in this rate limiter. There has to be some sort of an algorithm. possibly customized for every service You also want to give a set of standard algorithms like token bucket, like leaky bucket, like counting window time will sliding window, which will help you. Serve your customers who are the people who are using the services better. They have a set of standard algorithms and they want to use they don't want to code it out. You want to take it up that's up to you.

The idea here is that the algorithm needs to be flexible so I can plug in play different kinds of algorithms based on what kind of service I am. The second thing that the retailmen needs is it needs an endpoint for failure or for Success call back. Can be registered in the rate limiter? the Callback can be of two actions one is on except Which means the rate limiter accepted the request this is good to go and the other one is on reject. Which means the rate limiter found the request not acceptable. Maybe you are exceeding, you know, the capacity that you have therefore the request that we rejected.

What should you do with these functions? Obviously, they have some code inside them which is defined by the person using this rate limiter right in our case profile service. It could be SMS service. It could be some sort of resource manager. But if a request came in you get on acceptor on reject what you do with it. So you might return an object.

Okay, there's some pros and cons to this. If you return an object, then what type of object should you return if you return a generic object, then the code becomes dirty because the people calling this function get an object back. And then they have to be aware of what kind of object this is. Based on what they have returned in the function that they have defined here. Right if they say that I'm going to return a object of type profile or I'm going to return object of type log line. Then after they get the return object.

They will have to specifically type cast it. Okay, I'm talking about Java and other typesafe languages here golang. For example, if you give a very gently object the code gets dirty because there is then type conversion. So now what you can do is you can bring in the concept of generics here in Java and many other languages also give you the concept of you being able to Define what kind of object will be returned in a function. So in Java you have the concept of a function Right, you can you can say a function on accept. And then you can Define the kind of parameters which will be taken here.

And the kind of return types. Which will be here. Note that in Java is just one return type in golang you can have multiple return types. Another multiple return objects. The problem here. Is that the return types Are telling you what kind of object will be returned or what kind of object has to be passed?

But when has it passed did it work did it not work is not is not something that we have in mind. For example, you need to log this on reject request. You try to go to the log and the log field so you get an exception. But maybe you don't care about the exception coming. Maybe you don't want to run this synchronously, right? A request has failed.

We don't want our thread blocked and taking care of the log line. You know, you want to run this on a separate thread. So, what do you Could manually say that. Okay run it on a separate thread but a better idea is to instead of returning a plane object return of future. Of that object. Okay.

So if you're not very sure of what future is have a look at the chapter that we haven't low level design Sprint wise it explains this in reasonable detail. The very basic idea is it's like a container which will be populated with an object on success. So You know, it's similar to what the Callback here is in fact future is a advanced variation of callback. So you using a future inside a callback is kind of funny. But coming back to the main point a future is a container which can be completed. Which means when a particular action happens, you can say that hey go over here and populate this future.

It's like a Boolean variable you can imagine it to be true or false and if it is set to true then you know that the future is completed if it is false, which is by default then you know that the future is not yet completed. And it's going to take some time. So you keep pinging the future. Hey, are you complete? Hey, are you complete so you can think of it? For Loop which is running forever consistency checking whether the future is complete the moment it goes to true.

You're happy because this object which is linked with it is no longer not. Okay, so future effect profile will have an object backing it profile object here and the future will be continued. Are you true? Are you true? Are you true? You can imagine it this way the benefit of a future of course is that you can ask for a task to be completed and I operation a network operation anything which is going to take some time.

And you can come back to it later. The when the future is complete. You will automatically get a signal that. It's complete. Let me run the onaccept on the jet command. What we are doing is we have a callback object inside this rate limiter.

We have a algorithm. Both of these are extremely flexible. Any kind of function can be passed in here. And what exactly are we passing in is a future for the Callback and for an algorithm. Should we have a future hero also because it's going to take time. Or should we have directly a Boolean?

return type For the algorithm you pass in a request so so can accept. Will be the function and you pass in a request over here. Should it return Boolean or should it return the future of Boolean? Which means should we allow this can accept request to make Network calls? Or should we force it? To give a yes or no response if you ask me.

I think we should force it to give a yes one more response a rate limiter in most cases is a performant efficient system. You don't want to make too many Network calls before you make a decision on whether you should accept a rejected request. But it is up to you. I will go with the simple Boolean response. All right, anything else that we need in the client? A client now has a callback for failure and acceptance.

It has algorithm that can be customized according to our needs and use and it has a Can accept method which is basically going to use this algorithm internally. Okay, we talked about back pressure. Right and the back pressure can be either through the client or the server. Ideally though. The back pressure will be propagated up to the client. That back pressure can be set in on reject your algorithm.

If it is, let's say having some sort of back pressure says that if there are 30 requests earlier, but you know, I've started failing a lot of requests on reject has started increasing the number of times I've called on reject in the last three seconds has been above a particular threshold then I keep reducing the onaccept criteria. Okay, I can change my algorithm here. So there is some coupling of on reject with the algorithm here. If you want to extract that coupling and say that should I allow for back pressure then you can do that. Also a back question algorithm can be put in separately, but I'll keep things simple. I'll keep one place where the algorithm will be there and the only check will be there.

Okay and whatever back pressure. I want to apply apply through here on the check. I am going to do account plus plus or fail requests. And then in my algorithm, I'm going to be checking this count plus plus. So this state is shared between this method and this method. Okay.

right the client is roughly done the client then will have three main classes or rather two main classes call back and algorithm. Best part about this is it is Plug and Play you can add any kind of callback. You can change the method here and the algorithm is going to remain the same. You can add a new algorithm and it should have no effect on the Callback if you want to apply back pressure. Like I said, you can isolate that concern but in my case, I'll keep the coupling for Simplicity and I will allow the algorithm and the call back to share state. We'll see if it creates issues later on.

## API Breakdown

Type: Video · Length: 9 min 33 s

### Lesson notes

In this video, Gaurav Sen discusses the basic idea behind rate limiters: allowing a service to configure itself using a server if it wants to limit its requests.
Different services may have different rate-limiting configurations, and the time units and request types may also vary.
Therefore, the server needs to know the service's request type, time unit, and the allowed amount for that service to limit the rate.
The video also discusses the key used for rate limiting and how it can be used to define more specific user configurations.
Finally, the video explains how the client and server interact and how the client can make the right decisions based on the server's state.

### Transcript

The basic idea of the server should be that if there is a service which wants to rate limit then we should allow. It to configure itself using our server. So the profile service wants to date limit itself. It says that I should allow at most 100 registration requests per second at the same time the SMS service might give a different configuration 10 sms's per second and it might be even more specific OTP SMS is Maybe marketing SMS is I can send many more at most. 1000 per hour and this is marketing. What we are noticing here is that when it comes to configurations that different time units.

That different Services want to apply you can send 1000 in one second, but then don't send any message for the next hour. So the time units can be different. There could be different request types for the same service and there could be different Services also. Okay. So what we need is with service has made this request this configuration update. What kind of request?

Is it that needs to be checked? What is the time unit? Of the rate limit and what is the amount that we allow in this time unit in this service? So if I call it request what happens is I am forcibly saying that these many requests will be accepted or rejected in most cases. This is true. But if you want to make it more generic, then you can just call it a resource.

Or any kind of an object. Which has to be real limited. So I'll call it a key, which is generic enough. Right and it actually defines the implementation detail. Also you will have a key. Based on which in for a Time unit and an amount you'll be doing great limiting.

Now there are certain rate limiters which are made complex for no reason in my opinion because if you think of especially young Engineers who come up with a real limiting algorithm, this is my experience with interviews. And as a share it with you. They have this feeling that I have a great limiter. I have to give all of my users very customizable experiences in the sense. I should be able to Define that I will accept only three users every 20 minutes on a Sunday. It is possible to do that with the key also.

Okay, that's the important thing that we need to note here if you're going to read limit users. to 3 on a Sunday all you have to do is say user ID underscore date and so when there is a rate limit being done, you will see that for that user ID on a Sunday. The amount is three and therefore in a Time unit of a day. And this will still work. Okay the configuration. That they set up using Json or yaml or whatever is not very important to us.

We are assuming that we can read files or they have set up the five structure in the way that we can easily read the people using our rate limiter. We are mainly concerned with the functional requirements here having said that if you believe that there are many many custom cases for which your inter will be used. I don't see it. But if there are then you can always give them a generic object and algorithm and a call back which helps the customer the profile service Define their requirements. So this is the Practical part of engineering where you do not over engineer an object. You're not think of all the possible edge cases and use cases that can come up you instead give the flexibility to the user of your object to Define what their requirement is here.

So coming back to the configurations. You have a service? Which defines a key and defines a Time unit and the amount? Which will be acceptable for that key. That's it. Do we have anything else on the server side?

The answer is no, we don't we do not store what algorithm should this service have we do not store anything like that? Because that is being decided by the client. Okay, you might think hey multiple clients can have multiple. I've got them here. Yeah, they can is that a problem? I mean the person who's using the rate limiter is kind of abusing it if they're looking for any kind of global configuration.

One with sliding window one with a timer wheel that's not going to work out. That's bad. Right? No it simplifies the rate limiter. Keeps all the logic on the client the decision making on the client and keeps all the state on the server. So this is the decision that I'm making you can go ahead and say that no, I'll keep all the algorithms on the server also and if a ret limiter is asked should I accept this request continuously from the server?

It should give a response that that may be okay, but in my case, I'm keeping it performant and I'm taking most of the logic and extracting and giving it to the services which are defining it. I'm not storing it in my mother's service. Finally. What we need is the interaction between the client and the server. So how does the client here get to know about the state of the server and therefore make the right decisions of whether or not this request is to be date limited. We spoke about the profile service being a multi-instance service.

So you might have multiple instances running multiple software clients inside them. One of them has accepted 10 requests in the last second. The other has accepted 20. The other has accepted 30 you gave overall limit of how do you know? What the total is 60 and how do you know how many more requests you can accept in this second? Okay, there has to be some sort of a heartbeat mechanism some sort of a ping.

Which gives you a response? If the ping is missed what do you do? I think you can assume that what you have the state you have currently is perfect. It's Global or the last state that you had is still the global state. So there is any timeout in the response or any failure in response. You just go on allowing requests.

It's not a very bad idea. If you want to be super safe, then you can just start failing all requests, but then it becomes a single point of failure. The other thing about the server is that if it is a distributed service, then there needs to be multiple instances of the rate limiting server. And they need to be in sync with each other. I'm going to make this sink rather simple. I'm going to be expecting that there is a central data store.

Some mechanism by which we can get data from a data store and freshen up these services from time to time. So they populate. the data store themselves from time to time and then they synchronize by pulling from this single data source from time to time. Okay, this this populates 10 request this populates 20 this populates 30 and eventually both all three of them show 60. Okay. So there's a central data store which is doing that similarly.

All of the clients over here will eventually start showing 60 because they have a heartbeat mechanism with the Mother service, right? So this is how the data is being sent and received. Obviously, you do not want to slow down the rate limiter much. So you'll be sending Aggregates whenever you're writing to the database here and you'll be sending Aggregates whenever you're paying the server here so we can have some sort of a mechanism that every three seconds five seconds 10 seconds. Just ping the real limiter say that these many requests have been sent for this key by this service. You notice that the time unit doesn't matter the time unit can always be seconds.

You're paying the server based on the time you unit. You have defined not the configuration. Okay coming back this server and database are rather simple. It's like a genetic service. It gets right requests. It Aggregates them sends it to the server from time to time.

And whenever it gets a read request from one of its clients, it gives the response back the final question. Which remains is what kind of network protocol should you use when sending these messages? Let's say to the database or from client to server and the answer is this is a service. It's not a mobile connected on the internet to your service. So it's not like you can't send it a message. You can send the message from your server to the profile service.

No problem. Okay, so that can be done at the same time. The profile service can also send you a message so they can be two-way communication if you like, but ideally. Would like a consistent ping from the client to the server if the client does not get a message. It assumes that the server is dead or it assumes that I have disconnected from the server and I will continue giving my rate limiting standard algorithm requests of except all or reject all you could have a two-way heartbeat also, but I won't go for that. I'll keep it simple.

I'll keep a unidirectional communication. I speak to the server. The server gives me a response the server speaks to the database the database gives it a response. This with architecture is again simple this overall explains how the rate limiter will be implemented. Now, we can go to the code. And before we start with the code one final thing is the file structure.

What I'm going to do is I'm going to break this rate limiter into the standard way in which files are written in a project. So there might be models that might be Services there might be controllers. And finally there is a project which handles all the files of this system. So it will be interesting as you then.

## Models, Controllers, Packages and ThreadPools

Type: Video · Length: 12 min 0 s

### Lesson notes

Gaurav Sen explains the structure of a rate limiter server, where the code is split into different packages and classes.
The main class is not going to have anything inside it because simple objects used only by the rate limiter will be stored in the models package, and all requests that are accepted by this service can be kept in the request package.
We also mention the response package, which can have a generic response class and abstract response. In addition, we talk about the controller, which is a set of classes that expose all of the public APIs in the service.
Finally, we define an update request and an update response, which is the response to an update request.

### Resources

Server: [https://github.com/InterviewReady/rate-limiter-server/tree/main/src](https://github.com/InterviewReady/rate-limiter-server/tree/main/src)
Client: [https://github.com/InterviewReady/rate-limiter-client](https://github.com/InterviewReady/rate-limiter-client)

### Transcript

All right. So let's start with the rate limiter server. It is assume that there's a main class. And this main class is not going to have anything inside it because as you know, most servers have their code split into different packages and different classes in those packages. So let's discuss that once we have a class for all the models which are simple objects used by the rate limiter. For example, one of the objects here is going to be service configuration as discussed the service configuration will have a service string a limit of an integer we send that we need a Time unit.

And finally, we need a key. So it's interesting to note that the key and the service? Can be put together but I'm not doing that so that I can get all the keys for a particular service. This is a practical use case that I'm using here. So that for a particular service I can get you all the keys that have been configured for that service till now. Okay, you might have it in the same place.

So these kind of objects simple objects, which are used only by this service only by the rate limiter will be stored here in the models package. Similarly the file structure also requires some sort of request definition all requests that are accepted by this service can be kept over here. So one of the requests that we mentioned is a heartbeat kind of request. I'll just call it an update request. Right. It's in the request package and update.

The update will contain. count that needs to be updated. the timestamp of this update So I'll use that as a long. Which key needs to be updated. So 30 more requests of this key came in. And with service is actually sending this request.

Alright, you might also have certain requests like for example, if you extend a common request object. Is very common in? In practice where you have a common request object. It could be an abstract request object. And this defines what a general request is going to look like so in this abstract request you have a service name. Right.

So every request can extend this request object so extends request and now I don't need to mention the service Straight. It's already here. Okay, the benefit of this is that certain behaviors like get string get service name or if you want to find out what is the IP address of that service? All of that functionality can be encapsulated here in this request object and everyone else can extend that you might also think of composition but composition done really work out. Well here because update request does not have a request object update request actually is a request object. Okay, so all of its behaviors and all of its state should be maintained by the update request also and should be accessible to it.

Similarly, you have a package for responses. remember that I am Explain this in a calm composed neat way but it's not practical always in an interview which is just 45 minutes or one hour long. It doesn't make sense to explain all of these things in a machine coding round or in a take-home assignment. It makes sense to go over these Concepts in a detailed way and probably when record yourself by the explaining it if it's a take-home assignment if it's not a decom assignment and it's a three hour long interview or two hour long interview. It makes sense to at least mention that these are things that you keep in mind when working on any kind of a project. Okay, the response also can have a generic response class and Abstract response, which basically has some sort of an ID.

string ID and you can use this response ID later on to finally log for this response. You could also keep that in a request. And the response for that request will have the same ID that can be guaranteed. So in fact Let's have a string ID. And the response also has an ID. You need a controller all of your apis need to be exposed somewhere and that has to be done in the controller.

Okay, a controller is basically. A class or a set of classes which expose all of the public apis that you have in your service requests are all kept over here. These requests can be sent to the controllers and you expect these kind of responses from these controllers. Let's define that Epi. It's In response, we have to Define this class. It's going to be the response of an update request.

So let's actually do that seven new Java class. It extends. response and it returns nothing. Okay. So update response returns nothing but we have it in case you want to return something in the update short. Go ahead.

Okay, and you have update request here I'm just going to rename this class to update request. Because it's easier to think of. And change the API name to update key metrics. Okay. So for the particular key the updated Quest is making changes. Now we take this request and we want to find out which key it belongs to or which.

service, it belongs to there's a couple of changes we need for that whenever you can benefit from using a ID go ahead and do so in a take-home assignment. Of course, I think it's obvious that you can use ideas. But even in the interview, especially the machine coding interview, it's best to use an ID that is allowed. So IntelliJ IDEA is pretty common. BS code is pretty common some shortcuts. We really help you here, right if it's allowed and this is a big if GitHub copilot chat GPT.

They will also help you write the code much faster. They can generate the code for you, but it's not sure whether this is acceptable for all companies at interview ready. We do allow it, but this may not be something which the interviewer accepts especially in the older companies. So you have a Constructor that I want to create but even more importantly I want to create get us for all of these parameters here. I want to create Getters for the service name and ID. Okay, let's go to the rate limiter.

I have the service name. I have the key. I have to count and have the time when. Discount was updated. So what I'll do now is update the limit of this service and how am I going to do that? Like we mentioned we are going to be making changes in our database which are then propagated by all the services all these instances of this rate limiter service pulling the database.

Okay. So get service name get the key get the count update the limit. This is something which is going to be making a change in the DB. And what it should return is a future object. Of wild it returns nothing but a future which says that it has successfully completed or not completed. To keep things simple.

I use a compatible future. You can think of the language that you are using. If it allows something similar to a future or a promise, you can see on success on failure what you're going to do with the update limit. Right, so we'll be making DB changes here returning the future here. Do this a little later update limit is then going to be returning an update response. So all I need to do.

is do a Then accept if this is a success then return a response. So new update response which takes nothing as a parameter. Okay, and this has to be engaging Here, of course. There's a huge problem What's Happening Here is that this then except is going to be running on the same thread as the code, which is calling update key metrics. This is very important to understand update key metrics is being called by some sort of a function some code, right? The person calling this code is not expecting the method to throw exceptions or break.

they want to give these requests to the controller and move ahead reading more requests. You don't want to be a bottle neck. With some sort of database update over here being done on the same thread that will reduce the concurrency in the system. Code which is calling update key metrics is running on a thread and it is highly likely that the code calling update key metrics is a very very important request reading thread why because the controller is being called by a thread that just reads the quests and gives it to the controller. It's important that we don't block a request reading thread. Otherwise, our services is going to stop answering requests this request.

Up in this point is fine. But here we are doing an IO operation if you use the same thread. That is reading requests. You're going to block that thread and you won't let it do any other work. That will reduce the number of concurrent reads in your system. That is a problem.

We don't want that. So what we are going to do is we are going to either call this entire method in a separate thread. This is safe. Or any kind of an IO operation a database operation is going to be done in a separate thread so you might have a thread pool over here. Okay, what we are going to do is we are going to use a library method then accept async. And we are going to mention.

The executor over here. Okay. The executed is basically a collection of threads that you can use to run this function. What we are going to do is we are going to take away all of this responsibility of thread management and keep an external service outside whenever it gets a request like a little request object in our service as electronic signal and then it will have to you know, you don't get a direct request object. You have to map it. So somebody needs to map a string a Json string into this request object.

If you're using internally some other format instead of Json you might be using cryo you might be using protobuf. That's also fine. But I'm not going to be doing that over here in this controller. I'm going to be doing it in an outside service that's going to be taking that request object string Json, whatever converting it into this update request and calling this method on a thread of itself. So then I won't need to do any kind of. Thread management here.

I can focus on the important parts of code. Similarly. I can have a thread pool here and say that the database is going to be using this thread pool, but I don't want to do that. I want to have a class which interacts with the database and it has its own thread pool. It manages all database interactions. So in this way you have isolated concerns you have separated out all the responsibilities and your code is much more extendable and it's also safer.

So unlikely that your thread is going to get blocked much. Also, you can read about the computer Futures documentation to understand the methods that it provides. It's useful to know in depth about the libraries that you're using in any project. Assuming it's a long-term project. Of course.

## Reading and Writing Data

Type: Video · Length: 15 min 45 s

### Lesson notes

In this video, we discuss:

- Defining a DB connector

- Updating the database

- Creating a data access object (DAO) to extract common data access patterns

We suggest using Thrift to define a contract of the service and classes that are going to be exposed, and then auto-generating the code, rather than writing it all from scratch.
By creating a DAO, you can separate out common data access patterns and have different controllers access those tables to perform different queries on the same data.

### Transcript

Let's also create a new package for database. We will have our database controllers here if there are any classes, which the database needs then you can keep them in this package. so again, let's have a DB connector what this is going to provide is a connection to our database we can assume that this connection allows us to fire SQL queries and gets results for them. Okay. So what I'll do is I'll make this a little simpler. I'll make it specific to the class that we have.

So that is a service configuration. What this does is it allows you to create a connection to your database. It allows you to fire queries on it. So there are many libraries that you'll find for this. There's no need to write all of this code. Like for example, some of the code that you see in response or requests at times.

You don't need to define the request and response here in the class. These can be auto-generated by you writing a contract. Thrift for example provides you a facility by which you can Define the contract of the service you can Define the classes that the contract has and also the apis that are going to be exposed and then that code is auto generated. So instead of us writing the connector code, what we can do is we can assume that there is some sort of a connection Library which allows us to fire SQL. on the database directly Okay. So what I'll do here is public void.

update DB and this is going to take a string of SQL. It's similarly. What I can do is I can read the DB. After finding an SQL, I'll get a list. of objects Okay, that'll be the result. see Standard libraries, of course have an object of type T.

And then they say that. Alright. I'm going to have a class. Of type T being defined here. So what this does is it says that? After filing this SQL query the results will be a list of this type of class, which I am defining over here.

So the type safety is enforced this way. Let's assume that we have that. And we return a list. of results here Similarly, this has to return nothing because we can assume that the data this is being updated. Let's now go to the controller. The controller you can see is throwing an exception.

So instead of us sending an update response. Here we can return a future. of update response Right and we can return this. This will be then apply. And here instead of returning your connector. Dot So let's define the object here.

Update DB with an SQL. So should we fire the SQL ourselves in the rate limiter? Then you can create another object, right? This sounds crazy. But the whole idea being that you want to separate out concerns. So any kind of update operations related to the rate limiter can be put into something else also called a data access object, right?

You can put it in a separate package data access objects. Let me just show that so that it's a little clearer and this is how you know, usually projects at Large Scale up build. So Dao is data access objects. We have this here. We have a new Java class. for that object, so that is Going to be over here instead of us using a drake connected to the database.

We now extract out common data access patterns into this DL. so that will be public wide update limit right and here all you have to do. is use this object so that will be a so that's a data access object and as the name suggests you can access and update data using this object. That's what you want to do related to the rate limiter. Nobody else should use this data access object if anybody else needs to connect with data around a rate limiter. component right if you have multiple tables, especially And you want to access those tables in different ways.

Then you have them in data access objects. For example, you might want to use the rate limiting table. In one way and a service configuration table in another way, but multiple controllers might be using the same tables. So to access those tables and to take out common SQL queries for those tables, you can put them in the data access objects and then different controllers can use those data access objects to access that data. Let me simplify this with an example if we have a dow update DB is no longer. What we are using we're using update limit similarly.

if there is a different controller or service config And it needs some data. In the same table, then it just uses this data access object. Okay, in our case, it doesn't in our case the service config is probably going to be returning a computable future of wide once the service conflict has been updated. So instead of update responses over here service configs over here in case it needed to access the same table. It would have used the same data access object. So just looking at this controller I could say what tables it is using and whether that is fine or not.

Okay. So let's remove this instead of a relate limited now. It's going to be using a separate down which is service. config down and this has a method called public void update the service config. It would be nice to know when this config has ended. So I'll return the computable future here of type void.

It returns nothing but the fact that I have completed or not completed the action that are supposed to perform. All right, this service config now is going to be used by. This controller, so I need object over here. And that's what I need to return this object. Similarly the rate limited out can have a future of its own. update limit Okay.

Both Services look fine when we are talking about a service config. It's best to pass a service configuration here. And this configuration will be persisted in the database through the Dow. Okay. We spoke about threads blocking the request reading thread. So let's get into that.

Let's fix that problem that we have. You have to solve it at the base before the controllers are called. So what I'm going to do is I'm going to call. Create another package. I know it looks like you know, you're creating too many packages and Isn't it too tedious then to go through each package? It's like a bookstore.

If you have all of your books in a single section, then no one will understand what to read. But if you break it into different parts as long as of course, it's sensible then everyone knows where to go and what to do. So the first time that people use your project is when these kind of package breakdowns make a lot of sense as you get more experience with the same project, of course, you know where each class belongs in college the API Gateway. And basically What's Happening Here? Is that every API? In your entire project will be exposed over here.

If you use libraries, like spring boot you don't need to do this. A lot of the boilerplate code that I'm writing can be just taken care of by annotations like if you if you had a controller annotation here. A lot of it can be taken care of over here. I'll have to Define what the Dow is. You can do it dependency injection here right in a real project. That's how you will be handing things.

You can use dependency injection Library like spring boot juice dagger to get rid of a lot of this redundant code that we have. Okay, but what I'm also going for is a little bit of explanation of exactly how things work. So I'll just write a APA Gateway. This is a public method. Which returns why? and takes update response for update key if it returns wide, how is this going to work?

Well because we respond to that request here inside the method. We will not return anything from here. It's like writing to a database. We are basically writing to a socket. Here in the update key. We're reading from a socket and writing to a socket.

Okay, similarly. The other function that we have is public word update service config. Here we'll have the string Json. Which really eventually need to convert into an object. Right and a string Json here also. this class needs to have all of the controllers inside it so the date limiter.

Update key metrics is going to get this. Json object converted into a request. So we can look at a public library called Json for this. Another thing that we want to do is have our own thread pool. Where this request will be routed so that our reading thread our request reading thread is not blocked. So for that in the public executor service And here we can use a fixed thread pool.

Of let's say 10 threads. The API Gateway here is basically having 10 threads to send requests to the different methods that it exposes. So the thread which is reading the requests. This Json has nothing to do with the thread actually executing this function. And the way I do that is by defining the executive service where this function is supposed to run. Okay, I'm no longer using the same thread as the one reading.

I'm using a different thread by defining executive service which has 10 different threads. Okay, update key metrics cannot take a Json. It needs a object. So for that we can assume we have a g song Library you can use your own specific Library. So I've just convert to object. And for Simplicity, I'll just Define it here.

I'll make an object of type T which will be returned by this method. two object after taking in a spring Json that Similarly. I just need to copy this code. I'm using the same executive service here. Instead of a rate limiter. I'm going to say service config.

dot update service config this requires a service configuration. And so the problem is resolved here. At this point the skeleton of your entire project is well defined. You have an API Gateway which talks to controllers. Who themselves talk to data access objects? They don't talk to the database directly.

The database access object talks to the database. All the classes used by the controllers are defined in the modern package. The requests are defined in the request package. The responses are defined in the response package and the APA Gateway most likely is going to be using these request and response. definitions to run their apis to speak to clients. So after this is done then What you do is you take this response and you write it back.

To the person calling update key. So client Dot return response

## RateLimiter Client Setup

Type: Video · Length: 11 min 23 s

### Lesson notes

We discuss building a rate limiter client in Java that can be used by different teams in the organization that use other languages.
The API package contains a single class containing functions that expose the rate-limiting service. We walk through the different endpoints and functions required in the rate limiter client, such as:

- Getting the service configuration from the server

- Hitting the rate limiter

- Running an algorithm with endpoints for success and failure.

We emphasize the importance of maintaining a consistent package structure throughout the project.

### Transcript

So this takes care of our great limited service. It's also look at the client. For this we need a different project. Let's create a new one. Now you might have multiple clients based on the language that you are. Clients are using for example, if there's a service written golang then the team using your rate limiter client would like a client written in golang.

Similarly, you might have a team which is using python in which case they want to connect to your library and the connection that they would need is a python Library. With a lot of engineering products one of the drawbacks. Let's say is that if you write any client, then you need to write it for many many languages like elasticsearch. If you want a client to speak to the database basically, then you need to have clients written in different languages. But we are looking at of course only one language here and the language we are choosing here is Java. So you have an API package so pretty small client.

We have a single class. This class will have all the functions exposed by the rate limiting service so that the profile service in our case can actually use these apis. One was registered limit. So let's write those functions down. first one is service configuration get service configuration from the server right service configuration needs to be defined here. So I will set up a new package called models.

You see that the same logic the same package structure is being applied here also, that's because whenever code is being written. The concepts are similar the if-else statements the for Loop the while loop after some time. You start seeing bigger patterns than that. Also. You see that there's a models which store all the objects of your project and API with stores all the API configurations and endpoints of your project. You might also have a config folder storing all the configurations.

So now you have service configuration get service configuration. What's going to happen is you need some sort of way to hit the rate limiter, so, Create limiter. server need some sort of a link some way to actually hit that server. Let's see whether we can Define this class. creativity server needs to be able to Get service Conflict for our service. So that is also not going to change if you're using a client in the profile service your service name is never going to change so.

in service name what's in the service name here? And that's it. You can get your configuration here itself. Of course this might take time because it's a IO call so it's best to return a comfortable future. from the client at the same time. I'll just Define the rate limiter server over here.

It provides a method to actually hit. The rate limiters the actual service very limited server. Technically what's happening here is just like the SQL statements. I wrote down. The API that we are hitting is going to be read Service config and what it will take is a request a request of type read config request. To find that the read config was just needs the service name.

When you're creating a new read config request. This needs to be defined in a package. And a general request again, just like we had in the server is going to say. That every request has a service name and ID. so now if I say read config request and I force The Constructor to take a service name and ID you'll suddenly see that there is one related problem read config request has no idea where this is coming from. So I'll say who was creating.

You should send it. The rate limiter server needs to be able to Define this so that's the best bit. You just say so this name and you can randomly generate a request ID. This request can now be sent to this API read Service config. Okay, which is hitting our server. So let's assume that we are not going to be writing any IO connections here.

The important thing is that we can create objects to hit this endpoint. So that is over here. Similarly, we have the other endpoints. I'm just not going to be writing them down. But the basic idea is that you can update and read these. You can just keeping it blank for now.

They're going to have completely features. return to you one avoid and read key will have a completely future of it's I can just call it a map. For this service? and for this key this is the amount that you should rate limit. Okay. So for this service is well known as a single service for this key.

This is the amount that we should rate commit. The limit of course holds the amount and the time unit. So I just use a string and object here. of limit this has an in amount and string time unit All right. Now what? Else is there in the client the client can speak to the server that's good, but the client should also be able to do some other.

Fun things. Basically, it should be able to run an algorithm and it should have an endpoint for on success and on failure. That's what we discussed in the start so what we want is whenever a request is accepted. public on accept you should be running the onaccept function here. Okay defined in the date limited client. So along with these two need a private.

function which takes a request an object and returns a response. So I'll just take this as a general function then. on success and similarly on Failure. No, actually, it should be on rejected. This will become on except. Alright, so run the onaccept function here The question comes what have you accepted?

So it's a rate limiter for what? So it could be a real limiter for every object in general. or it could be a real limit for a specific resource t Okay, or it could be. Or tea could be the base class on which the function on acceptance. So if you use a rate limiter for profile requests, then the onaccept function will take the request which is accepted and return you avoid so take object of type T. Take this request.

And apply it here. And return it. in our void return here Right, you could also have any generic object returned. In which case this is going to return you an object. But I think it's better to have a generic object return. We're also talking about using an endpoint over here which tells you whether something is completed or not.

So a computer feature of type void. will tell you What has happened? And this is what we'll be going ahead with because if you're writing to a log or you're writing to a database or you're writing to a dead letter Q what you want is you want some sort of a computer which tells you that the task is done. But it has to run on a separate thread. Okay, that's the only thing to keep in mind on video. This is on reject.

We can return both of these functions. So that makes the callbacks really flexible and really really useful. The person who's using our client the profile service in our case the engineering team, which is using the profile service rate limiter can Define exactly what they want to do in this function over here. Okay, and so for that we need some sort of a Constructor. which they can use they're going to be passing in the Service name in their case. It will be the profile service and they're going to be passing in two functions.

You could keep this optional also, right one is on except and one is on reject. You could have an optional function to make it even more clear that you don't need to Define it yourself or you can have multiple Constructor signatures. Saying that if you just have a on-accept then do this. if you don't have on acceptor on reject then we will mark this as empty Then we won't do anything with it. Otherwise if you specifically tell us what to do, then we will take that and we will work with it. Okay.

Another thing that you can do is you can just say this. Passenger service name and just pass in null and null here. It will call the same Constructor. We talked about the computer future. And then doing a possible Network. Also you want this in a separate thread for that you have to Define.

a thread pool that's over here. private executor service and this executor service is going to be a fixed pool of the number of Beds which are provided by the service running this client So here maybe. You can pass in 10 here. So that will be 10 threads for the rate limiter. I'm much more practical is going to be you're just going to keep maybe one or two threads.

## Sliding Window Algorithm Setup

Type: Video · Length: 7 min 18 s

### Lesson notes

In this video, Gaurav Sen discusses the implementation of a rate limiter algorithm.

He defines the algorithm as an abstract class with a sliding window implementation. The client sets the algorithm and can customize for back pressure.
The algorithm is used in the "should accept" function, which decides whether a resource should be rate-limited based on the sliding window timestamps. The sliding window implementation is a list of timestamps with maximum requests per second and a service config as inputs.
The service config needs to be extracted by the client and passed to the Constructor. Finally, Gaurav discusses how to allow the service to call the method for extracting the service config.

### Transcript

Finally comes the meat of the service which is the algorithm. We can Define the algorithm in a nice package. But for now, I'll just Define it here so that things are even simpler. And we can make changes in the same file of course refactoring is always a possibility. You have an algorithm here the algorithm. Needs to be set over here.

So the algorithm. The client needs to have the ability to set an algorithm. And if the client passes null then what we're going to do is if the algorithm is null. Then we'll have a standard algorithm. of sliding window Otherwise, we'll use the algorithm that has been mentioned. So class algorithm Is abstract.

And we have a class. sliding window Okay, because it's getting pretty messy. I'm just going to keep a package for algorithm. I'm going to move the algorithm and the sliding window classes. into this new package once this is extended we're good to go. Okay now.

When does this algorithm actually get used? When a decision has to be made so on except on reject is not very looking at we're not looking at update key read key then look at none of these. There needs to be a new function in the client. which uses this algorithm and that is going to return you a single value the most important function Boolean. should accept it takes a type T request. Right profile service sending registration requests note that this is different from the request over here.

This is the request. We are sending two hours service the rate limiter service. T is the type of request that is being sent. to our client Okay, so in fact, I will I just rename this. to resource So it becomes more clear. the resources being rate Limited Okay.

Should accept is the only place where we're using our algorithm, right? We talked about back pressure. This function needs to have the back pressure written into it. It's useful if you want to provide a lot of customization to the people who are using your client they can Define algorithm here. But we don't need to look into that. We just need to look into the simple sliding window algorithm.

without any back pressure if we want to we can of course go to algorithm Dot. back pressure this resource This is the timestamp. So should accept this is the point where the whole algorithm works. When should we accept a request in a sliding window when a certain number of resources having used in a particular second? Less than or equal. So let's use that let's say that our algorithm.

says should accept this resource. That's all. Which means our sliding window has to implement these methods so should accept says. Sliding Windows just list of objects. Which is type resource, but the type is not very important to us. It could be any kind of a resource.

We're just letting it go here. All we care about is the timestamp. when this of the request which came in Can have different types of rate limiters but sliding window usually is all about at what timestamp did a request come in. And should I accept this new request if I accepted then I'll add the timestamp to my list. So it's a list of long. And all you have is timestamps.

Again here, I think we have. It's useless type safety over here. This is going to be long. timestamp and long time so the way here we have system Dot. current time release And that tells us. the current timestamp so if a new timestamp comes in then we need a maximum number of requests per second that we can allow.

We also need one more object and that is a service config. Okay, so the algorithm needs to have this information. So when you're creating the rate limiter, you need the service conflict, right? So I'll just take this configuration say that the rate limiter service needs this the client needs this therefore. This has to be extracted here. This will give us the service conflict, but it's a future.

And we wanted here in the Constructor basically the code which is calling this Constructor. Has to get the service conflict beforehand. So this method will need to be called by the service. How do we allow that? How do we do that here?

## Dependency Inversion

Type: Video · Length: 8 min 28 s

### Lesson notes

In this video, Gaurav Sen discusses the sliding window object that requires a service configuration to work, and the service configuration requires an API call to hit the server.
One way to make an API call inside the Constructor is to use a rate limiter that helps to make the API call inside the Constructor itself.
This will require a server IP address to be hit, which is known by using the service config already set up in the rate limiter server.
There are two ways to handle this problem - one is to use a blocking call, and the other is to expect that the service config will be sent beforehand.
He also discusses creating a separate pool of threads for the rate limiter server to avoid blocking threads.

### Transcript

Here, we have a problem the sliding window object requires a service configuration to work and the service configuration requires us to hit. The server but what we are getting here is a computable future. There's an API call. So, how can you make an API call? Inside of a Constructor that two ways to do this one. Make the API call inside the Constructor itself.

Okay, that will require. a rate limiter to new rate meter server. Let's say all the config is already. Set up in the rate limiter server which IP address. Do you need to hit or at least which IP address you need to hit to know where the rate limiter server is that will be the service config and so on. So the configuration the way to talk to the rate limiter server is all inside this object.

We can assume that. There is a way for us to get the server IP address and from here. We are going to hit that IP address. Right. This API will be hit with this. We can assume this.

but even if you have the rate limiter server, how do you use a future object and pass that into sliding window this object that you need here? So what we'll do here is we'll say rate limiter dot get service config. You need to pass in the service name. This is returning your type of future. You need the actual object. Right.

It's returning you a type of computable future of service config. Which means When the API call is complete then I will give you a service configuration inside it or I can also give you an error inside this future. Okay, we don't want that we want to get This is a blocking call which means till this piece of code has run till the future is complete hold the thread don't do anything else. Just wait, right you can think of a infinite for Loop waiting waiting waiting and waiting. So this is bad because the thread is now blocked. Also, you see that if you do a get it's not exactly sure that you will get the object that you want.

It could also throw an exception right? Maybe you made a API call. There was a timeout exception or there is some sort of the code that you got back was not of the type of a service config object. So for that you have to throw some exceptions. In the method that is making this get called. So execution exception interrupted exception.

I'll just Keep things simple and I'll just say exception is thrown you. This is also a bad practice. I'm just doing this for keeping the code clean. But generally you want to throw only those exceptions which you can throw because the calling method will then deal with those exceptions. Separately, if you say I can throw any kind of exception the general class of exception then the calling method doesn't know what to do. It could be anything.

So the handling becomes complex. Also looking at this. You can't tell what kind of code must be running inside while looking at. a get method which can return interrupted exception or execution exception, you know the kind of exceptions, which can Be thrown here. So this would be one way of handling this problem. The other thing that you can do is you can expect that the service config will be sent beforehand.

So you don't do the get you pass in an object of service configuration. Okay, and this has to come as a parameter? For the person creating this rate limiter client. So when you're constructing this object, someone says, okay. I have the service configuration also take this and where did the service get the service configuration? Maybe in a config file.

We said specifically that this is not what we want. We want the service conflict to be pulled from the rate limiter server. But in reality you can basically store it anywhere. So if your method is getting really complex, this is a possible option. We said that we have our own executive service which is going to be making API calls of readkey update key so that our main service. Does not have its threads blocked on things that we do.

Okay. So let us write that down so that it's clear. We have a rate limiter server Dot. Read key. And this is going to be executed in a computable future. With this executor service.

Okay. That's what we are doing. We are making sure that the person who's creating this rate limit object in our case. The profile service does not have its threads blocked. We create a separate set of threads a separate pool and use that for our job. It's the same thing that we do with database threads we create database threads so that there is a pool of threads that anybody can use to connect to the database it helps in persistent connections.

It just keeps the computation of different. parts of your code isolated and so now this is to be returned. Let's get that method here. That's a completable future of. type map which is having a spring key. and a limit value and this method is returning me a type of future.

And what I really need is just an object. So looking at this function, why do I really have a type of future being returned? Why can't I hit the API and get a value greatly same here. What if I instead of returning a future hit the API and get a response, so it'll be a blocking call this. The reason I wouldn't want to do this is because although it's a very thin client and nobody else is going to use this class. I still would like the signature here to show that it is a IO call and I would return a future so that tomorrow if anybody needs to actually call this method they get a future object instead of you know, having a blocking call looking at service conflict.

There is no expectation that it is going to make a remote procedure call. Okay, so I don't want that to happen looking at this you can tell that hey this can complete after some time. So I better be careful. I better look into the threads that are running this I better look into possible exception cases that can come with this future. if I keep a very simple method here service configuration, then the timeout exceptions have to be thrown here instead of being wrapped up by this completion Future Okay, so for that I will Take this as my API signature and I will suffer. Adding this syntax here.

But it it seems to be worth it. Alright update Keys another method that it's quite important. We need to pass in the key that we are actually updating. and the value so that is the in amount. And probably the timestamp so long. Okay, this is the method signature.

What will be passing is just the key amount and timestamp? So then what needs to happen here is that the update key needs to have a string key? and if you have in demand yeah, and this is going to return null because we don't really know how to hit an API cross server. I mean you can do this. Of course, you have to either hit a HTTP or like we said grpc. Endpoint but writing that code is going to be unnecessarily complex.

You'll have to do the wiring and set things up. So we'll keep things null. All right update key returns a completion. stage or a computable future of type void

## Sliding Window with Backpressure

Type: Video · Length: 10 min 5 s

### Lesson notes

The video by Gaurav Sen is about backpressure in the context of rate limiting.
The discusses two methods, onAccept and onReject, responsible for handling client calls.
The client is responsible for running these functions on a low-priority thread.
The algorithm discussed in the video is a sliding window algorithm that reduces the sliding window size by one if a request fails.
The size of the sliding window is defined by a threshold, and the time unit is determined by the server.
We suggest using an enum time unit to ensure that the client and server have the same representation of time units.
Finally, we discuss the need for an independent object to make the algorithm more scalable.

### Transcript

Two methods remaining and looking at this you might say oh on except should also be run on my thread. Supply you sync I mean, why should I block the thread of the person who created this object? Right the profile service calls on except and then I do an apply and maybe the apply makes a remote call. So simply put if I accepted request and I want to persist it in the database. I want to say that yes, I accepted the request plus one in the database that is going to be a future call Simply put on except is called by the profile service when a request has been accepted by this rate limiter. The function on except could be anything.

It could be that please go to this database and increment account by one on reject could be even more detailed. It could be go and persist this request in a dead letter queue and increment the statistic for a field request by one. All of these are network calls, so shouldn't I be running this on the thread defined over here and my answer will be no. The reason for that is on accept and on reject is largely the responsibility of the client the person who's actually calling this object the profile service in our case. It's your responsibility to make sure that the thread that you're running this function on on accept and on reject. Is a low priority thread.

Or at least a thread which you are comfortable running this function on. Okay. On accept on reject is your responsibility you have created this object. You have defined everything about it. You decide the thread you want to run it on or not. I take responsibility for update key and read key because those things talk to my rate limiter server.

Okay, and finally should accept. Yeah, there's no completion future here. There's basically I got them not should accept that's it. Now that we are taking care of the threads and the concurrency in this system. Let's head to the final part, which is the algorithm and we have a sliding window defined here back pressure. What it's going to do is if a request fails, I'm going to reduce the size of the sliding window by one.

And the size is not going to be defined over here in time stamp. It's going to be defined by threshold in threshold. This is let's say it's also backed by a Time unit. Time unit is over here. And this has to be set here so threshold. is equal to service config dot there must be a value here, so I don't have that here because We haven't set it up yet, but amount.

and stream time unit In fact, I should be string it can be a time unit object. Whoever is actually sending this firstly if it is serializable, it's great. But sometimes you don't want your API signature to have the time unit like we discussed in the server instead. What you can do is when you're serializing this object when you're sending it over the wire just before that you look at these objects of in and time unit and you send it in the way that you want. So the Json representation is set at the last moment before you send things on The Wire. Like over here the read limited server.

I think this should have its own object. So I'll just take this and put it over here. This object before it sends the message over the wire right? Send message to an IP address. It will take this. read config request and serialize it in the way that is required.

So if there is a Time unit object in Java and you know that your server does not expect a Time unit it expects some string you do that here you do the mapping here. Okay that can also be done. but I think we should have the representation on the server also reflecting on the client. So that there's no confusion tomorrow. This is one option. But the right approach in my opinion is to go to the sliding window and have the same representation what you have on the server like your client has the same representation of time unit, which you have on the server that's important because like we said time unit in Java has Nano seconds if your client allows nanoseconds to be pushed in.

By the profile service and then use try to send it over the wire and there is a serialization exception don't want that. You define it? Yeah instead of a string. Maybe you have your own enum time. unit enum and this would be the right way to do it in Kingdom object here. I'm naming this really badly time unit.

Enum is is really bad, but Oral time unit. Let's say rate limited time unit. Again. This is not a great name, but it is slightly better than time unitenum now you you have second minute hour and D here. Alright, so this object also has to be in service conflict. And as you can see, this object needs to be independent.

For us to be able to call it from different. places Okay, let's do a get. Go to the sliding window. We say get the amount. That's your threshold. And the time unit is service config Dot get time unit.

That's what it is. Now in back pressure, what I'm doing is I'm changing the threshold to minus minus. and you can have a back pressure and similarly you can have a forward pressure, which is basically if you have something succeeding if there was a successful request that was accepted by the rate limiter then your algorithm can allow for some change in the system Okay, and back pressure is being. Called here. Similarly you can have forward pressure being called here. right, so threshold plus plus Basic idea here is you had a particular threshold request started feeling at which point back pressure was called right on failure on rejection.

We call back pressure on acceptance. We know that your profile service can probably take more load. So we want to add pressure. We want to move forward with more pressure on rejection. We want to take the pressure and push it back to the person who's calling this method. So push it back means to the profile service Push It Forward means to the resource of the socket that is actually being called.

Okay, let's go to back pressure again. Sliding window is pretty simple to now what about should accept. so if the threshold is greater. Than the size of the timestamps that we have here. Then you should accept. right else the threshold is equal to so actually if it is greater than or equal to then it's all right, if the threshold is equal to a less than the maximum number of timestamps.

You can hold then, you know, we should fail the request so return false. Is over here and here you should return true. And while writing this code I just realized we have made a mistake forward pressure. If I do threshold plus plus what's effectively happening is I'm getting to add infinite number requests every time I accept a request. I increase the threshold by one what happens next time I come back. I see that.

Oh, my threshold is still greater than the number of times times. I have I add one time stamp and I increase it by one. It's a never ending cycle. So forward plus plus is a bad idea. I'll just keep it empty in forward pressure. Maybe you know, if you have let's say threshold is equal to threshold plus 0.5 that is one possibility.

This will be going at half the rate or 0.1. Here threshold becomes double. Okay. What will happen here is for every 10 requests. You'll increase your threshold by one if all requests are accepted. This is not bad while if there is a single request which has feel you reduce your threshold by one.

This is pretty brutal. But that's okay again back pressure can have a more complex algorithm if the timestamp is very recent right is greater than current time Middle East Plus hundred which means it's less than 100 second milliseconds old. So you try to send a request Which is less than 100 milliseconds old and it failed. So all the recent requests are feeling it's not even that the old requests are feeling so you do a threshold minus minus, but otherwise if an old request failed, which is fine. You can do a threshold - 0.1. Right, you're seeing that the algorithm can get more and more complex.

You can say this. into point one So one tenth of this subtract 1/10 of it. This is a geometric progression. Okay? Too much math for me, especially because I like to keep things simple in the production environment.

## Clearing Stale Entries in Sliding Window

Type: Video · Length: 5 min 14 s

### Lesson notes

In this video, Gaurav Sen explains how to implement a rate limiter algorithm with back pressure and forward pressure.
The algorithm checks whether a request should be accepted or rejected based on a sliding window of timestamps.
If a timestamp is older than the current timestamp minus the time unit, it is removed from the sliding window.
The algorithm is divided into a client and a server to optimize for speed and consistency.
The client handles the fast reaction of the rate limiter, while the server manages the configurations and consistency through the update and read keys.
Please take some time to provide feedback and ask questions in the comments section!

### Resources

Server: https://github.com/InterviewReady/rate-limiter-server/tree/main/src
Client: https://github.com/InterviewReady/rate-limiter-client

### Transcript

So I'll get back to the main algorithm should accept. Okay, there's a couple of things here. Your rate limiter has back pressure forward pressure and should accept but it does not look into the timestamp or it doesn't clear old requests. Okay. So whenever you run a should accept maybe the first thing we should do is if You do a for each. You run through the timestamps arraylist.

and you say that if there is a timestamp which is older than the current timestamp. minus the time unit into Millies right so convert Convert this time unit to millise. And if this is the case, which means this request has expired or you know, the request is no longer relevant when it comes to our rate limit. It's beyond the time, you know that we are set if the time unit was one day. This request is older than one day so it should not be considered right now. So if this is the case Then we should remove it from our sliding window.

Okay, this is one way to do things far better is if you just say timestamps Dot remove all and here you pass. dot stream Filter out all the requests. filter out all the timestamps based on their value so this has to be greater than current time release minus convert to Millies and then we collect them all together into a list. And this becomes the new timestamp sorry. Okay, pretty simple. All we are doing is instead of running off.

All Loop. We have kept it to filtering all time stamps such that they are more recent greater than current time minus the time unit. Okay. Has expired expired is now much easier to read. Now expired times times are being thrown out of this sliding window, which is great every time it should accept runs before you make a decision. You're actually cleaning the arraylist you could make it better because you know that the timestamps are ordered.

So they're always appended to the end of the list, you know that the latest timestamps are towards the end and this list is by definition sorted. So the moment you meet. A timestamp which is not expired. You should just break the loop. Okay, that is an optimization. I'll leave that exercise to you.

Can you do it using streams? That is another exercise. I'll leave to you. Can you do it using a for Loop? Yes. Absolutely.

You just have to create a separate list over here. Okay, where your populating each time stamp? Okay. That's great. So should accept is now returning true or false. There is an algorithm for back pressure forward pressure.

We have a sliding window. Implemented here. And as you can see, there are no obvious compilation errors, which is always a good thing to do. So that would be the low level system design or machine coding of a rate limiter. The important thing to note here was that we separated out two pieces of the same solution a client and a server we did this because we wanted fast reactions. For every check request should accept but we also wanted some sort of durability and consistency when it came to service configurations.

So we took the parts that we wanted to persist and keep consistent and we moved it into the server. We kept the server as simple as possible and we took the parts which needed to be done quickly and are okay with Rough answers should accept for example is okay with the RAF answer and we moved it into the client. So the algorithm is defined on the client. The most important feature of the client is that it is fast. It is efficient. It doesn't make many requests to the server and it is extensible.

You can change the algorithm whenever you like. And you can add your own call back functions. The features of the server is that it is simple. It doesn't take the headache off finding out whether the request should be accepted or rejected. It just takes the configurations of every service and handles the fall tolerance or consistency management through update key and read key. If you like the video, please give us a five star rating on the video so that you know, we know that we are doing the right thing.

If you didn't like the video, please give us a one-star rating on the video or you can leave a comment below saying that, you know, this part could be improved suggestions comments are more than welcome. If you have any doubts, also, please feel free to post them in the discussion below. We are actively looking into all sorts of doubts. Thank you so much for watching this. I'll see you next time.

## Quiz 1

Type: Quiz

Questions and answers: see quizzes.md.
