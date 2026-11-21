# 3. Machine Coding an Event Bus

## What is an event bus?

Type: Video · Length: 1 min 23 s

### Lesson notes

We define an event bus.

### Transcript

An event bus consists of objects, which described the corresponding events. For example, if your service creates updates or deletes objects, then you'll have corresponding objects describing those events. The way these objects to describe an event is storing all relevant input parameters for all that given action. They describe it an action, which you can encapsulate in an object sent to the event bus and other services can read this event to take further actions. For example, if there is a user registered, you may want to send the registration email. So the way we do that is by creating an event whenever the user registers sending it to the event bus.

And one of the subscribers of this event is the email service with sends the registration email. As you can see, the communication is happening over the bus. Let's look at this in a little more detail. So what exactly is a bus? In an abstract way a bus is just a data structure which accepts and transmits events. This data structure is is a distributed one.

So it's deployed on multiple nodes. It has a set of publishers who input events to it and a set of subscribers who consume events from it.

## Breaking down engineering requirements

Type: Video · Length: 9 min 55 s

### Lesson notes

We list the engineering requirements of an event bus, and note implementation challenges.

### Transcript

Now we'll talk about the low-level design of an event bus. We'll again tackle this problem the same way that we tackle the caching problem. And we look at the CRUD operations here, Okay. Data schema of these events, how are those events structured? So usually events have ideas. They have a type which defines what type of an event is this.

So is this a profile creation? Is this a session expiring? What type of element is this really helps code, which is pulling these events subscribers to identify whether they are really interested in this event or not. So that's a quick way to accept or reject events. And you have a variable number of fields in the events. Cause the schema is not very fixed.

You have an ID, you have a type, and then you can post in any kind of details that you want. In this event, creating an event is quite obvious. The publisher just post an event to the event. Bus. The event bus is not just one message queue. It's usually a distributed system in itself.

So you can imagine multiple publishers and multiple subscribers. That's the very first requirement. If someone is interested in the profile topic, that probably means that they're interested in profile updation, profile, deletion, profile creation, everything related to profiles and all of those events when created by your upstream system, which is usually the profile service will be posted over here. So at anyone interested in profile events and actually pull from this queue, what this does is it partitions the types of events into different queues, breaking out partitioning events, into separate queues, depending on their type is called a topic. Interestingly one event can be part of multiple topics. This publisher says that, yes, it's a profile updation so the profile topic should have this, but because the profile is updated, maybe the password has been updated.

The session topic should also have It. You Have multiple topics and events can be part off multiple topics. And these subscribers and publishers are based on topics. You'll have to subscribe to each topic individually to of the requirements are, the item potency and dead letter queue. For example, if you have an event with ID one, two, three, and some body JSon body and type, If you publish another Event with ID one, two, three, the queue, or in this case, the event bus is going to assume that I've already had the this event earlier. Maybe this is a retry from the server side, I'm going to accept this given acknowledgment, but I'm not going to be processing this event again.

Similarly, you want a dead letter queue. If you have one, two, three, you send it and you don't get an acknowledgement or you're unable to send it for some reason. So you try again and you try it again and you have exponential backoff you have multiple strategies for this, but after a maximum number of tries, let's say five tries. You decide that it doesn't make sense for me to go on trying this one, two, three event to be sent to this subscriber. So you send this event to something like an error queue, where you publish all events, which have issues. Okay?

So this is called a dead letter queue. What this does is it gives subscribers and opportunity later on to diagnose, why was this event not working? So maybe it was taking the event, maybe the contract that you had for that particular one was failing. b l a n Maybe your service was down, whatever, be the case. You can then pull events from this dead letter queue later on and diagnose from this, itself you can say that it's a requirement for our system. We need to be able to retry on failure.

So if the subscriber fails to acknowledge the event we can retry. And how many times do you retry? That can be configurable. You can have five or 10, maybe in the code. We can make it configurable. We can also, you know, the more you accept the harder it will be for you to code, but you can have multiple algorithms.

So you can have exponential backoff you can say that. No, I'm going to be trying after every one second. These are most of the features that we have. Let's just talk about the guarantees here. The first guarantee we should get to is delete We are not going to be allowing delete operations in our, in our rent log. And this is common for a lot of event driven architectures.

You don't allow deletes on events because they are considered immutable objects. You can change them, once being created, which also simplifies the update operation, which is never going to happen. If you need an update, let's say you need a subtract ten more rupees from account B. And initially you had subtracted 52 rupees from account B. So you sent a completely new event and in that event. You can have some metadata that, Hey, I messed up.

This is an update event, but your event bus has no idea about that for it. This is an event with ID one, five, six, and this is an event with ID one, five seven. Once things have been published your event bus, there's no change. And this is very popular in financial systems because they don't want to see any kind of mutation or update on the data ever. So event driven architecture is a pretty popular there. So you don't have updates and deletes.

The only operation you're left with is reading. Now reading gives us a few interesting things to think of. Firstly, how do you read from this event bus? You could ask the event bus to send you messages. In which case this will be a push architecture the event bus pushes events to you that could be push, or you can pull from the event bus. You go to the event bus, you send it to request.

And you say that, give me even the ID XYZ, which is a little weird because actually how will you know about the event ID? So it's probably going to be an offset. I have 15 events untill now. Now give me the 16th event. That's how you tell it's either a push or pull mechanism. We talked about pulling from a particular ID of an event.

So what happens is sometimes you're, service is working perfectly fine. And then it crashes it crashes. And you know that the last event that I saw was one, two, three. So every event after one, two, three, four, this topic, which I've subscribed to please give it back to me. That's what you're going to be asking the event bus. So we need some sort of a feature where we can pull events from a particular ID.

So you mentioned ID and you're good. You can pull events after that. Sometimes you don't know about the ID also. So you have either for diagnostic purposes or you have a new service, which has come in. You want all the events from the past three months. So you get a timestamp.

So you pull events from an ID and you pull events also from a particular timestamp And the final requirement, which is the hardest, which makes everything hard in this entire system is you need to have ordering Let's assume that the service publishes events in our event bus in the order of one, two and three, we process them in the same order. One, two, and three. This is called ordered execution. This is good. On the other hand, the event bus may accept the orders one, two and three in order, but execute them in a different order of one, three and two. So order number three may complete execution.

Even before order. Number two has finished. This can be a problem in some systems like financial systems where order number two is credit a hundred, to A, and order number three is debit hundred from A, if A starts with the balance of zero initially the first order of two and three is fine, but the second order of three and two is illegal. Therefore in certain systems ordering is a critical requirement. So how do we order these events? Let's take the most obvious approach of timestamps.

Timestamps are good. Usually they work, but they're not perfect. For example, let's take three systems. The first one publishes timestamps one, two, three, and four within the first four hours. The second one has a fast clock. So it produces timestamps one, two, three, four, and five within the first four hours.

So we have an additional timestamp of five. It's going too fast. The third one is a little slow on the other hand. So it produces just one, two and three. So you're seeing three boxes, three computers with different clock speeds. Potentially this could mess up the ordering of the events that we have.

For example, an event with timestamp for in the fast processor actually occurs before an event with timestamp three in the slow processor. So ideally we should be processing event with timestamp four, for the fast processor before the event with timestamp three in the slow processor. There's two ways to fix this. The first one is to synchronize the clocks repeatedly. So there are some network protocols which help do this And the second one is Vector clocks. Although vector clocks is a great approach for many use cases and using timestamps is totally possible.

We want to do something which is a little more simple and a little more suited for our use case. These four requirements are absolutely core to the system, multiple publishers and subscribers, that kind of support is absolutely necessary. You also need to have multiple topics that events can be published to and others can subscribe from, which tells us what kind of mechanism do we need to use. Also has to be configurable. It can be the push or pull. And finally, when a person is actually pulling events from the system, they need to be in an ordered fashion.

## The mechanics of the bus

Type: Video · Length: 4 min 42 s

### Lesson notes

We attempt to maximize concurrency in the bus using different assignment strategies for publishers and subscribers.

### Transcript

Before we get to the code, let's understand the mechanics of this at a deep level. You have a subscriber here, subscriber A, and they are subscribed to the topic of profile. You have an event bus over here and what's going to happen is every time they get a pull request from you, it goes to this event bus. The event bus says, we need to order these pull requests. So I'm going to be taking the hash of subscriber ID, which is A, and then moding it with the number of threads that I have. T is the total number of reader threads.

These threads are part of a thread pool. You will have a resource pool, it's an array of threads. What happens is you take this value, which is the hash(A)%T, and that gives you an index. So that index contains a thread. You actually assign this task to that thread. So what ends up happening is they have ordered execution.

All requests of A will be falling into the same thread and therefore all requests of A will be done in order. However, you can make it even more fine-grained. Let's say this is a profile and this is a session. So A doesn't care whether the profile event is before this event, the ordering is causal ordering for these guys. So what you end up doing is instead of taking the hash(A), you take the hash(A, topic). So you can have the topic over here, hash(A, topic).

And then mod that with the number of threads you have. That gives you a particular index. So now you have multiple threads running on multiple topics, possibly for the same subscriber. So if A wants an event for a session and an event for profile, they're going to be running concurrently. So you want to increase as much concurrency as possible so that the system is fast in responding. If it sends multiple requests, a new request to topic "session", you can handle that concurrently.

Because you don't care about ordering for different topics. You care about ordering for the same topic. And that's how you take hash(subscriber_ID, topic) % T that gives you ordering on one topic for one subscriber. However, we don't have this luxury when dealing with publishers. For publishers, you want some kind of ordering, let's say publisher B is posting events. What kind of ordering are you looking for?

All events, belonging to a particular topic should be ordered. So if this ends in event 123, and then C sends an event, which is also publisher, which is 124, there should be an ordering as long as they belong to the same topic. So in this topic you want 123 and 124 over here. That's the ordering. How do you guarantee this? You can take the hash(topic)% WTs that you have.

So this is WT and this is let's RT. So these are reader threads, and these are writer threads. Both of them are pools. So that's a separate array. Can I make it more fine-grained, like what I did over here was allow concurrency for every subscriber and topic pair. So that's more concurrency.

That's good. Can I do that over here? Can I make it subscriber and topic pair? No. I mean, I could technically, but my guarantees are going to get even looser. Then if I want strict ordering for a topic for multiple publishers, I need to have much stricter ordering here.

If I make it hash(publisher, topic) there will be ordering for all events being sent by the same publisher to the same topic. If that is the kind of guarantee that you want, that is perfectly fine. But usually if you have one topic which is profile creation, you want all events to this topic to be completely ordered. So the read-write guarantees we're giving is ordered reads per pair of subscriber and topic. However, the right guarantee that we're giving is that it is ordered for every topic. This is a much stronger ordering because this is across all publishers.

This is a much weaker ordering because it is relevant per subscriber, per topic. That's the difference. Let's talk about how we are going to do this in code.

## Why use threads?

Type: Video · Length: 4 min 14 s

### Lesson notes

We discuss a way to implement causal ordering with threads.

### Transcript

What we are going to use is the concept of threads. The way these work Is that an operating system divides the total time it has into slices and assigns each time slice to a particular thread. The reason this is done is so that multiple tasks can be executed concurrently. For example, if the first task in thread T one is taking too much time, thread T2 can come in complete its task and still wait for T one to complete. So it could be that T one is waiting for an input output operation to complete, or it could be that it is waiting for a user input. While that is happening, the other treads are going on executing their tasks and the operating system is able to judiciously use its time.

This is something that we want concurrency, so that multiple tasks in our event bus can be executed in a concurrent fashion. We are also going to be taking advantage of the fact that all our patients in the thread execute sequentially. Let's take an example. The operating system needs to execute three tasks, one, two, and three. There's two scenarios. Either, we want ordering in one, two and three, or we don't care about ordering.

If we get about ordering, they should execute this in a single thread. If it uses a single thread, there is no way that the tasks can be jumbled up, it's never going to be one, three and two. It's always going to be sequential one, two, and three. So this is great in terms of ordering. However, if these tasks are independent, then we don't care about the ordering. And in this case, if we execute them in a single thread, we are unnecessarily constraining the execution order and making this process slow.

For example, if task number one takes 20 seconds and the other two tasks take just one second, it would be much better to execute all of these tasks in different threads. So we are seeing a trade off here between a single thread and multiple trends. Single threads are slow. Multiple threads are fast, but single threads are ordered. Multiple threads are not ordered. This is where the importance of causal ordering comes in.

Causal Ordering means that taking the tasks, which are dependent on one another and only ordering those tasks. Well, example, user is tasks of A one, A two and A three need to be causally ordered. They need to be ordered amongst each other, but they don't care about any of these tasks, busy to B zero B one and B two. This is Causal ordering and we can do it by forcing all of user A's tasks to fall on one thread. So there's total ordering there for user A and forcing all of use B tasks to fall on the other thread where they're totally ordered, but they run concurrently with user A. So what we need is a user to thread mapping.

The problem is you might have millions of users in which case, every user will require one thread that is going to be super expensive. Also storing the mapping itself is going to take some memory. So that is also going to be expensive when you're talking about millions of users. So Instead, what we do is take a pool of threads and map multiple users to a single thread. This is very similar to a hash map where we take the user ID, hash, it divided by the total number of buckets, which in our case is the total number of threads that we have. And we find a thread index to assign this task to Now If we divide our users from A to L into three boxes of red, blue, and pink, we see that the users ABC and D have total ordering, that's not great because we are sacrificing some concurrency over here.

But in turn, we are saving memory. We are saving the expense of creating threads and also practically, we cannot have millions of cores running in our system. We cannot have one core for each user. And so we have this interesting trade off of concurrency and ordering

## Event Bus: Quiz #1

Type: Quiz

Questions and answers: see quizzes.md.

## Code Skeleton and using an extensible Retry Algorithm

Type: Video · Length: 12 min 20 s

### Lesson notes

In this chapter we will be discussing how to populate an event bus and describe its attributes. We also create an extendable retry algorithm class.

### Transcript

All right. Let's start with the code. The first data structure that we need inside in an event bus is going to be topics. So a map of topics to a list of events, Each event in turn has an ID, A name and it has certain attributes. So these attributes can be populated using the creator of the event. For example, the profile created event will have relevant information like the user ID, email, country code, etcetera.

While an event like access requested is going to have details like user role access level and requested resource. So once these events are published on the event bus on the relevant topic, they will be either pulled by subscribers or the subscribers will have the events pushed to them, which means that we need some sort of mechanism to describe how we are going to push these events. Are we going to push them 10 times, 20 times, 30 times that's one parameter, which is the maximum number of retries. And at what intervals are we going to push them? So is it going to be exponential backoff is it going to be at fixed intervals? Depends on the retrial algorithm that we use.

So let us define that the retrial algorithm. I'm going to make this last abstract because the function retry is going to be overloaded by its subclasses. So Let's go for exponential backoff first. There's a retrial function it overrides. And the question here, is retry what does what should it retry? It should write a retry a task, right?

Either it could be sending a message or it could be a little more complex. So let's give the consumer some flexibility here. They can define a function which takes a parameter P and gives the result R. Okay. And they can pass this parameter over here on the second retry function. Right.

So whoever is calling this retry function just has to define what is to be done. And what is the parameter that you're passing into this function. We are going to try task dot apply by parameter and we are good here. Right? I can see an issue over here. The retry function used to be called recursively in case there is an exception while we are trying to execute this function, this task.

So, because we are talking about exponential backoff and fixed intervals, we need some sort of a timer to tell us that this much time has elapsed. So let's just define that class timer. The reason I'm doing this is because later on while testing, I can easily extend this class and set my own timer. Okay. This is going to return system dot nanotime. Later on, I can have my own time for testing.

The other thing is I wanted this to be a Singleton, and I like this injected in the exponential backoff let's pass maximum attempts as a parameter. If The maximum number of attempts has been hit, then we throw a new exception called retry limit exceeded. Otherwise If the exception type is off retryable exception, okay, I'm doing this because should we, retry is a question that I'm leaving to the user. The consumer of this retry function will be able to define what is a retriable exception. Okay. For example, if you have a database error, you should probably retry, but if you have an error, which says that the user field is too small.

Then you shouldn't retry because the same input is going to give you the same output in that case. So let me just define those two exceptions. All right. Now let's get to the logic of the timer. Initially, we have that in time. The number of times is one, the wait time factor for exponential backoff, let's set it at one.

And now if there is a retriable exception and the maximum number of attempts is not yet hit, we find the time to sleep by doing a wait time factor into 1000. So I then multiply that by two, Make the thread sleep for that long. And then I should retry. In fact, the wait time factor is not making much sense on every retry. We want to double the amount of wait time. So the first time it's one second, second time.

It's two seconds. Then it's four seconds. Now you can see that these are powers of two. So what we need to do is do a math dot power of two raised is to power number of attempts, minus one, because the first time that we're going to be sleeping just for one second. So that's two raised to the power of zero. So that's attempt number one to make it do, to be able to do one minus one, and then so on.

So it will then become one and two and four. Let's remove the wait time factor Okay. In case it does not have the retriable exception, just throw an exception because we don't know how to deal with that. Let's add their dependency for juice now the compilation errors are sorted. So exponential backoff has been defined. The other type of retrial I'll call them that we can use is periodic retry, which happens after every one second.

So we attempt the task. If it fails, then one second later we attempted again, if it fails again, then we attempted again, after another second, that's the linear or perodic retry Oh, let's just copy paste this stuff because a lot of it is common. Okay. One of the things we can do is inject the maximum number of retries we can have. And also the time to Millis, which is the wait time of each of these algorithms. So we are no longer forced to wait for just one second, depending on the object, we can wait for half a second.

And the next time we wait for two seconds. And so on. One of the things that we can do is to create these objects in the code, which is not a very bad idea. It gives you a little more flexibility and a little more clarity as to what are the parameters we are applying on the constructor. In this case, I made the parameters name parameters, which should be injected using a properties file. Let's define these classes in the appropriate packages.

So that will be an exception package with all the exceptions, a modules package, with all the primitive objects. And we can have a retry package, which is going to be storing our retry algorithm. We can have a utils package, which will be starting the timer. And this leaves us free to focus again on the event bus.

## The Keyed Executor

Type: Video · Length: 6 min 13 s

### Lesson notes

How do we create threads in code? A Keyed Executor helps us assign tasks to particular threads.

### Transcript

Now every time we want to publish an event, we have to mention what is the topic in which we are publishing this event. And so we'll have topics dot get the name of the topic. In which we'll add an event. So topics is going to be defined by a new concurrent hash map. The reason I'm going for concurrency here is that we'll have multiple threads. Speaking of multiple threads, we need executor's on which we are going to be having these threads.

We can define this specialized thread class in the event bus itself, but that's not a great way to write code. So let's decouple. These two classes, let's create a keyed executer, which is going to be assigning tasks to the threads that it has based on the hash of that task. As we discussed in the whiteboard, this is going to be taking the hash of the task and then assigning it to the appropriate thread to make sure that the ordering of those tasks in that thread is maintained. So the keyed executer has a fixed thread pool, in which when we submit a task, a particular thread will be assigned. Let's define this executer.

Let's say it has 10 threads. Ideally we want this ten to be passed in through a properties file. So let's pass that in as a parameter, Also, this executer will be taking a type of runnable, which is a function or a task that it can compete. Also, we need to pass in the hash of this task. So I was just past in the topic and we need to pass a key of this task, which will be used for making a hash So in the keyed executor, we are going to be having an array of executor's And depending on the hashcode of the ID of this task, we are going to be assigning a particular thread. So we'll be returning a completion stage of type void.

If you give us a runnable task in the keyed executer, or you can give us a supplier. Now, a supplier is something which has a parameter and expects a return type. So there'll be two types of submissions. So every time you submit a task to this keyed executer, it's going to be returned your completion stage of type void, which means that this task has been completed. If the completion stage is successfully completed, it means that the task is completed. We know that completely futures or a future object helps us define when has a task ended.

And similarly, if you want to value out of it, instead of void, if you want a real value out of it, then we can pass a supplier which returns an object. This object will be stored in the future object. Once this task is complete. So two functions of summit, which takes on runnable and returns, nothing, except that it notifies you when the task is complete or there is get, which takes a supplier and returns you the result of that task, when it is complete, let's put this key keyed executor in a separate file so that things are nicely decoupled and heading back to their main bus. We have a single method of publish. Once these events are published, we need a method by which we can subscribe to the events.

So subscribers need to be able to tell bus at, Hey, I want to subscribe to these types of events for that. We can have a subscribed method, which takes the topic that you want to subscribe to, and your IDs are subscriber. And we need a mapping for every topic who are the subscribers for those events. So a map of string to a list of string, which is topic to list of subscribers. Uh, every time a person says, I want to subscribe to this topic, we get the topic and we add this subscriber at this point, and the subscribers can get an event by either pulling or pushing. It depends on the subscription that they have registered for.

## Pull and Push Subscribers

Type: Video · Length: 6 min 55 s

### Lesson notes

We discuss how to create a publisher and a (pull/push) subscriber.

### Transcript

In terms of push or pull. We have two different types of subscribers, either. It is a push subscriber, which says that whenever event is received on the bus, please send it to me. Or it is a pull subscriber, which says that whenever I want to pull events from this bus, give me the events from a particular timestamp or a particular index, and define two methods for subscriptions, one is for pull and one is for push So the pull subscribers will be able to pull events from us using a method. Let's say, get events after timestamp, This will have the topic ID, which the subscribers are intrested in, the subscriber ID who is actually pulling events and then pull subscriber dot get status , yet we should be able to get the topic. But I'm wondering whether this is the best approach.

What we're seeing here above is that there's two maps, which are identical. And the only reason they are being separated is because the behaviors of the it's pulling from this are different. So I'm wondering whether they should be different maps or whether they should be the same map with a defined subscription type of pull or push Theres a scope for ref-factoring. Here, we should ideally have something like a topic ID mapping, the subscription ID mapping, and the subscription should define itself. So it should have the ID of the subscriber. It should also be mentioning whether it's a pull or push subscription.

So let's do That. Let's define an object called subscription. which has an ID. It has The ID of the subscriber also. So the ID of the subscription and the ID of the subscriber are different things. This is the same subscriber can subscribe to the same topic multiple times for different reasons.

And then we have subscription type, which is either pull or push. You can also define a precondition, which is going to state this event is worthy of being consumed by the subscriber. So for example, I am only interested in events which have timestamp greater than 1000. And of course, I'll be defining a topic and I'll be defining the pull and push mechanism. But the important thing is I'm putting a filter for the types of events that I'm interested in. Therefore, I won't be eating into the network unnecessarily with the event by sending me event, which I don't care about so we can define a precondition object.

But what it's technically doing is it's taking an input parameter, which is the event, and an output parameter, which is which is going to be boolean yes or no. So that's just a function which takes some paramater type T and returns a boolean define the constructor and let's come back to get events after timestamp, let's do this. And sometime I'll Mark it as a to do and let's try to fix the issues that we have right now, before we can get events after timestamp, we need to be able to somehow Mark an index after which a particular pull subscriber is going to be pulling events. So for example, if we have an event bus with the events ABCD, with the timestamps 10, 20, 30, and 40, we need to be able to first set the index of an event after timestamp 25, which in our case is C once we have done this, we can ask the subscribers to start pulling events from this point. So let's define the get method which is Topics dot get this particular topic, Find An event which matches the given ID of the event. So I'll just, expose the get ID method here.

And this will be returning an event. In case we don't find the event we'll just throw it an event not found exception. Let's also move to subscription class to models because that's what it is. A subscription type is also going to be there. And just to fix some of the import issues here. Okay, this is good.

The only problem is that the get event method is a bit slow. The reason being that it's going through all the events in a particular topic and finding the event ID that are looking for, maybe later on, we can speed this up.

## Defining the data structures in the bus

Type: Video · Length: 4 min 0 s

### Lesson notes

We define the types of maps, lists and other data structures required to efficiently execute event bus operations.

### Transcript

At this point, we can define what is set index, opera timestamp, which like you said, is effectively allowing the subscribers to get all events after timestamp. So for that, we need something which holds indexes for every subscription. So let's define the structure for that. We have a map with the subscriber ID and event index. That's going to be the subscriber indexes map. And in fact, to make it better and simpler.

I'll just make it a nested map. So it's going to be topic, the subscriber ID to event index. So I know what I need to know from index I need to pull events for the particular subscription. I go to the first map, find the topic. Then I find the corresponding subscription to get the evnt index. Now, strictly speaking, we don't need this.

We can use the subscription ID to event index, but we cannot assume that our clients, the subscribers are going to be storing the subscription IDs. Also with that them persistently, because what's going to happen is as a subscriber, all I want to do is tell you, the topic that I'm interested in and then let you tell me which events I haven't pulled yet. Also, if you're setting your next after particular timestamp we need to define the timestamp. So that would be the method. Okay. Similarly, there'll be an event for setting index from an event.

Yeah. So that's just directly event ID and this is easy. We just need to put that event ID as the new event index. Okay. We need some sort of a mapping of timestamp to events. So we can call this the event timestamps map, which is going to have the topic ID and internally the nested map is going to be a sorted map.

So the only way we can do this and make the data structure concurrent is to use a cocurrent, skip list map. At this point, don't worry about the internals of the map. Just focus on what it takes. So it has a key value pair of long to string, which means there is a timestamp which maps to an event diary. Okay. So effectively have topic.

The timestamp to event ID event timestamps is effectively telling us for a topic which` events are after a timestamp. And the reason we are using a concurrent skip list map is because it's like a black box to us. It keeps the events in sorted order, according to the timestamps. And we can easily get events from a particular timestamp. This is expected order login. So using This data structure, we can say that from them event timestamps, get me for a particular topic.

The entry, which is higher than the timestamp which is provided why? Because we don't care about events occurred before 25, we won the event just after 25. So get me the higher entry than that and set that as the new Subscriber index, Let us also account for the first time. And we are populating these maps, but they will be null. So in case they're null we'll put if absent. So we'll initialize a new data structure.

If the value for that topic is absent.

## Wrapper Classes

Type: Video · Length: 19 min 46 s

### Lesson notes

Wrapper classes can make your code more readable and type-safe. We discuss with an example in our application. We also fix some of the existing issues in our code.

### Transcript

All right. Now's the time that we fixed some of the interactions that our event `bus has with its public APIs. So the first one that I can see is whenever we are publishing a topic to an event bus, we are just saying topics, dot get dot add event, but this is not updating any of the other data structures inside this event bus. So let's make a separate method for that. Add event to bus Inside this all relevant data structures related to this event, being added to the bus will be updated. So topics dot get topic dot add event.

Yes, this is one line, but we also have the timestamp of the event being persisted in the event, timestamps map. We also need to create a public method which can poll events. So for all the pull subscribers out there, they can just call this poll method, mentioning the topic and then subscriber ID, which is going to give them the next event that they need. Now the way we assign a polling operation to a particular trend in the event bus is by taking the topic and subscriber ID combination and producing a hash. Why is that? If we use just the topic ID to assign a thread, to take the subscription task what's going to happen is that all the subscribers for this topic will be forced to go through total ordering.

That is not necessary because as we can see two subscribers A and B may subscribe to the same topic, but the order in which they pullout event do not matter to them individually, similarly, we could use the hash of the subscriber ID to assign the thread for the consumers. However, this is also too constraining because A might be subscribed to multiple topics. So that may be topics X, Y, and Z. So when he is pulling from X, it cannot pull from Y till X is complete. That's not really required because there's no causal order in between the topics either. So to ensure maximum concurrency, what we do is we take the combination of topic and subscriber ID.

What this does is that when A is pulling from a topic, let's say X, it gets the events in order that they are posted in topic X, but there is no causal ordering. We are introducing between any of the other topics or any of the other subscribers. So for. Any poll request, we first find the index where we have to pull events from then from this particular topic, we can get that event. So let's see if we can update the get event method to better to help us do this. So.

What we want to do is we want to just ask it to get the event directly, because it's too slow like we mentioned earlier, what we want is, we want to use a map, which is going to give us the event directly using the event ID and over here. And I'm seeing that there's a clear scope for improvement, seeing that all of the maps have string in it. What is String? We know that this is the topic ID, but it's not going to be easy for future coders who are going to come in. So I just force topic ID over here. Okay.

And the way we do this is by writing some sort of a string, wrapper class Let's just define the class, call it topic. It has a name. The name of the topic, is it's ID. And that's, it. Every map has a key off topic to a particular value while we are doing this, we should also change the other keys that we have here, which are primitive string. So.

Ideally let's also call it event ID as a particular object. So instead of this string, we can make it an event ID, which makes the intent of using these objects really clear and also make sure that during compilation, we catch most of the errors. So that needs some fixing. In some places we have to fix the topic. And in some places the event IDs. So this simplifies the polling method because we just need to do a simple get operation now.

And get event is no longer slow. Similarly subscriber ID being parsed is the string is not a great idea. Let's call that an object, make a wrapper project for that and fix some of the code around this. Is this overkill? Maybe, but it also brings a lot of clarity. Now the compiler can help us avoid making mistakes.

The other thing that we can do here is use composite objects. Instead of maps. The reason being that when you have a composite object, it's behavior can be encapsulated easily. And you know, you can test the composite object separately, but in this case, what's going to happen is for the tests that we write, we are willing to be manipulating the map much more closely and not something that we want to do. Instead, if you have a composite object and you unit test that then you're sure that that's working. So in our particular case, for example, buses, once the tests are done and we know what a bus is, we can easily use that code with full confidence and also for the upcoming features.

Okay? So we are all the set for the next public API that we need to make, which is a push method and the push, my third is very clear. It has a subscriber and it has an event that we need to push to them. So the subscriber ideally has given us that IP address or given us some sort of information so that we can route this event, detail to them. That way we can send them a message. You might be wondering why people need to use event buses or messages that if they're going to push the event to the subscriber, Anyway I mean why don't they directly send that as a request to a subscriber and get a response from them.

The reason being that event buses are able to decouple a lot of the logic that you need for publishing and subscribing. So as a publisher, let's say publisher A. Does not need to be aware who are its subscribers. It can just publish to this event, bus and subscribers can then ask for push notifications to them in case A has published a new event. So let's define the subscriber. That's a subscriber ID.

They also have a name, let's say the service name, and they'll have an IP address. And because the subscriber and the publisher are extremely similar, maybe we shouldn't call it subscriber. Let's just call them an entity. So an entity maybe a publisher or a subscriber. You could have publishers who are subscribed for some other events in the same event bus for example, you might have an email service which subscribes to profiles creation events. And then when it has sent a welcome email, it publishes that event to the same event bus so that people are interested in that event can subscribe to it.

Okay. Let's make our retry functional a little better, it can return us a result now, and result will be returned over here within this function. We can now define the retry algorithm in the event bus. So in the retry algorithm we are willing to attend something. I in case we have attempted enough number of times, if you know, the retrial limit has exceeded, then we just print the stack clicks. And what do we attend?

We attemp the piece of code, the function that the subscription asks us to. So that has to be defined in the subscription itself. Let's say subscription dot handler. Okay. This is the handler of the event. Okay.

Let's also fix the add to event bus method, which currently is just updating the data structure of event timestamps and buses. And when is this method going to get called when there is a push event. So whenever you're adding to an event bus, that's the time we should check that amongst our subscribers for this topic. Do we have any push subscribers? So for all of those guys, we need to actually push the event to that subscriber. Let's also just fix some of the code issues that might occur in case an object is empty or because we have to find all these new objects of topic entity ID.

So in a push notification, we are retrying and it incase there is a failure, we are printing the stack trace. Of course this is not a great approach. So let's think what do we need to do here? Well, if the total number of retries have exceeded, then we need these events to be stored for future analysis or diagnosis. The place to store them is the dead letter queue. And the dead letter que behavior is extremely similar to an event bus.

So let's just define an band bus called dead letter queue, whenever the total number of retries are exceeded. We are going to be pushing this event, this failed event into the dead letter queue. So this is a new event, a new type of event, which is a failure event, let's say which going to be taking the event, the time when it failed and the exception.

## Event Bus: Quiz #2

Type: Quiz

Questions and answers: see quizzes.md.

## Coding the tests

Type: Video · Length: 8 min 25 s

### Lesson notes

We start writing the tests here.

### Transcript

All right, so let's start writing tests for the event bus. First one would test the default behavior of this bus, which means that when we subscribed for any events that we are interested in for a particular topic, we should be able to receive these events. So firstly, let's make an event bus. It'll have A periodic retry of five times and every one second, we are passing the dead letter queue as none. We don't have a dead letter queue as of yet. And we also have a timer which we have defined about.

Let's also publish an event to the event bus. So it meant ID one with an event name, empty attributes and a timestamp. So this is like an empty event, which we are publishing to topic one. But right now nobody has subscribed to the topic. So therefore this event is as good as being sent to nothing. Okay?

Because all subscribers are going to join after this. There is no way that this event should be picked up by any of the subscribers. Now I'm going To make a subscriber, event bus dot subscribe, New subscription topic one. So that is subscriber ID one for the subscriber. Let's make it a pull subscriber. And whenever you get an event you want to process it, let's say.

So event is going to be true that's the precondition. At this point, like we said, we shouldn't get any event. So let's poll the event bus for any, even that we are interested in and we should get a null over here. So event bus dot poll Take topic One And here we're going to assert that this event is null. Let's post a new event, which should be picked up by this subscriber. So even ID two, We are going to Publish it to the same topic.

One with event team, again, empty attributes and the timestamp is given by our timer. So this event should not be null firstly, and because its not null Let's also make sure that the IDs are matching so that events get ID should give us the same ID as event ID two. Let's run the test. Okay. We have a null pointer exception, right? So this is going To be a common theme.

I think since a lot of the data structures that we have are maps, many of the keys will have empty values. So we need to populate those first. For example, when we do buses dot, get this can return a null value. So to make sure that there is no null value to make sure that we get a default value, we can do a buses, dot get, or default a new concurrent hash map. So this is telling us that either you have a value already and you return that, or if you don't have value, then default to the value of cocurrent hash map, basically an empty map. So when we do an empty map dot get ID, we are going to get nothing, which is our expected behavior.

If this topic does not exist, But we also have subscriber, indexes, subscriber, indexes are being updated every time we are getting from a topic, but there's another time when we actually need to set the subscriber index. And that is when a new subscription is made. So let's do that. We get subscriber, indexes dot, put subscription, dot get topics. So for this topic, we need to get this index. Okay.

I can see the method just below this, which is set index from timestamp. And why don't we just reuse this method? So whenever a person subscribes to an event, we set the index of the subscriber to the current timestamp. So all we need to do then in the subscribe method, is say, it's setting index from timestamp. This is the topic. This is the subscriber ID.

And this is the current time. As we said, looking at the score, there's quite a few places where we have data structures, which will have either null values or they are not being correctly updated, or there may be some concurrency issues. So that's three things. Firstly, the most easy one is to just check if there are any null values or empty values that we can have and fixing those issues. The second one is to make sure that the internal data structures are being set correctly in the right places, just like we saw now, subscriber indexes is a data structure that we have to update. Not only when we are setting indexes, but also when there is a subscription.

So let's go about doing that. Firstly, let's set the possible empty values on all values that we can get. In this case, event timestamps can go for get or default. If the next entry is not, null then we can set an event ID to be next dot get value. Otherwise they event ID itself is null. So I'll convert that to a ternary operation.

Now in turn, this might also close a null value because if the event ID is null, then when we say subscriber index is dot get topic. The event ID cannot be not null in a concurrent skip plus map. We cannot pass in null values. In which case, we keep a place holder like null event ID or a blank event ID or whatever we like to call it. The issue is that we are still not telling the event bus exactly where we want to subscribe from. For example, if we say subscriber indexes for this topic and this subscriber after three events is at the end, it means that from the fourth event, please subscribe me.

However what's going to happen is this index is always going to be at the right, most of the current event bus, so none of the topics will be picked up by the subscriber, therefore setting index from a timestamp or setting index from an event. ID is not what we are looking for. We are looking to set a real raw index on the event bus. So this is an interaction problem, which we'll fix on phase three. Like we said, taking it step-by-step first, let's get rid of all the null problems. Then let's get rid of the interaction problems.

And finally let's get rid of the concurrency issues And for taking care of null entries, One technique that I find especially useful is just noting down all the internal data structures. So there's the retry algorithm, the dead letter queue. And so on. We are going to go through them step by step and find out where are they being set? And is there a possible of a null value being set there? So the retry algorithm is fine.

The dead letter queue is fine timer is also fine. None of these values are actually having any kind of updates, right? There's the executer, which is also good. The subscriber's data structure is a map, which is being updated only one place. And that is when a new subscription is happening. So in those public API subscribed, we are updating the subscribers map, which makes sense.

And the other place where we are using this map is when we are making push notifications. That also makes sense. So let's get rid of subscribers. We have that sorted subscriber indexes setting their index to a timestamp, or setting their index to an event ID nowhere else. So we might be using the subscriber indexes, in different places, depending on our requirement, but the only two updates happening here in terms of null values, it seems fine. So let's get rid of it.

The only thing we have is event timestamps that is going to be set only when a new event comes in. So add event to bus is the only place where even timestamps needs to be updated. And we are making sure that we are putting a default value of conference plus map in case the entry for that topic is not.

## Conclusion

Type: Video · Length: 12 min 36 s

### Lesson notes

A quick summary of what was done in this chapter and what we have learnt.

### Transcript

And so to summarize our current situation, we have a set of publishers and a set of subscribers who are interacting with our event bus using APIs. And what are the APIs that we want to provide? Well, we have a set of topics where publishers are posting events. So this is important. We want this to be ordered per topic. And whenever the publisher posts an event, we want some sort of an index to be implemented so that the next event goes on the next part of this list.

Like we said, all the events for a particular topic are being processed by a single thread. Now that's pick the APIs one by one. Firstly, we want to be able to get events. So that is from subscribers. If we want to be picked get a particular event. So let say get, event ID X, But X is the event ID.

So we need the mapping to get this index of this event. And this has to be based on every topic, which is this cube and every event. So for a given topic and the given event finding the next should be efficient. So that's the first API for subscribers. The first API for publishers will be publishing, which should ideally be the only API for publishing because you can only publish to the end of an event. And what this does is you can publish an event E what's going to happen is let's say you're publishing a topic T2.

So you've mentioned that your T2, this means that a new event has to be added here. And the corresponding data structures in the event bus have to be updated. So we look at this one by one, but at the moment, this looks quite simple. All we need to do is just add a new event. So that is API one here and API two. At the moment we have two APIs exposed.

Okay, what else would we like all our bus to do? Sometimes you want to find all the events between two timestamps. So from timestamp A, to timestamp T, okay. So what we need then is Get events. Between T1 and T2 So that is the third API we need in this case, our internal data success do not change. The reason being that all we need to do is find an index of the event T1 and find the index of the event T2 and pull out all these events, sequentially from this topic.

Yeah, this is usually used for debugging purposes or auditing purposes, or any other reason why you might want to find events within a given range, but that does not update the indexes that we have in this data structure. So the subscriber index is not going to change There are two remaining APIs and both of them are on the subscriber side. For example, lets say subscriber one goes down and it wants to update the index from which it is pulling. So maybe it was down for three days and its current index is over here. Maybe there's been tons of events after it. So it wants to update its index to the most current event.

Okay? Maybe it's an email sending event really doesn't really care about processing, every event. There's about is processing the latest event, or it could be for some other replay purposes, maybe our event driven architecture and you want to replay all events from this point, whatever, be the case. We are going to have an API, the fourth one for set index from timestamp. Now what this needs to do is find out an event, having a timestamp greater than this timestamp and set our index to that point. So for example, if this is timestamp one, two, three, and four, and we say, second next from timestamp three, then this should be the event that we should pick up next similarly, a fifth API and the last one is set index from event.

Okay? So in our cases we also have different IDs. So let's say even that is a E1, E2, E3, and we say set index form event ID. Well, it's quite simple. All we need to do is find the event which has been passed here, which is all here and then a update our index to the next event. So then when you start picking up events from here, as you can see, all of these operations, all of these APIs are dependent on one thing.

And that is the topic because we have decoupled all the events based on topics. We are able to enforce strict ordering per topic. And they're also able to allow concurrency across topics. This is what makes our data structure efficient in general, while allowing us, causaul ordering, as you can see the ideal data structure here for every topic would be a list because what we are doing is we are apending events to a list, and whenever we are pulling events, we will usually be pulling from the end of the list. However, there also needs to be two additional data structures, which are going to be noting down what is the index of every event so that we can jump to it efficiently. That is API number five and for API number four, we need to be able to efficiently jump to any index from a given timestamp.

So we need one data structure, called as subscriber index, which would give us a mapping for every topic and a subscription. Give me the index that I'm supposed to pull events from. So when a subscriber one says poll an event, so get event is basically poll. It's not going to take much time for this, subscriber index to tell which index are we supposed to pull from so maybe subscriber one is now at this point we start pulling events from here. Okay. Similarly what's really happened is when are the fourth API, which is set index from a timestamp is called, we are going to have a timestamp to index mapping.

So for every topic and timestamp Tell me the corresponding event for that timestamp in the topic. Okay. So what's happening here is that for every event which would be published, we are going to be noting down the timestamp at which it was published and storing that in this map of timestamp indexes. Okay. So later on when a person says, give me all event after a particular timestamp 4 all we need to do is come to this map, see which topic are we lying in what is the timestamp okay. Timestamp 4, give me the event after this.

That'd be right here last one. So that's where we need to head. Similarly, we have an event index which does the exact same thing. Every time an event is published from a publisher. We note down the index at which we are inserting this event. So that is the end of the array.

And if a subscriber says, give me the events from a particular event ID, we do a plus one here and events after it are all picked up by new subscriber. As you can See, we have multiple mappings and we want all of them to be efficiently fetched and also updated. So the only way to do that is to actually to use a map, kind of a data structure or in some cases, sorted arrays also work fine. But in our case we are using a map and what type of map can we use. So how do we make our event bus efficient? So that every operation that we do is fast.

We need to focus on what every operation does internally. So if you're doing an index increment, how much time is that going to take? If you're going to put in your map, how much time is that going to take? And so on, firstly, when are polling an event, we don't need to update event indexes, nor do we need to update event timestamps. Why? Because no new event is being added.

So these indexes are the same as earlier. In fact, these indexes never change because if you have a mapping off an event to an index, it cannot be changed because these events are immutable. Like we said earlier. So the only data structure that is being affected is the subscriber indexes map. And that will have a increment index. Okay.

So if you use a simple map, that is order one. So let's try to use a simple map similarly, whenever we are publishing We are putting for an event, the index number incremented by one that is, order one and for a timestamp index plus one. That is again, order one So till now we are doing well. Get event with time range. Now this is more interesting because what we need to do is we need to go to event timestamps, find an event within a particular time range. So that's is this start time event start time.

And then keep moving forward in the event bus. till we hit an event having a timestamp greater than that mentioned in the range. Okay? So the second operation of moving forward is fine because you are doing a sequential search. However, initially the seek is something that could take a long time for an unordered map for a normal map. This operation is, order one, if you're given a timestamp a start timestamp, then this should be order one.

However, there might be no event with that corresponding timestamp. For example, I have event timestamps three, five, six, and seven. And I ask, please give me all events with a start timestamp, at least four. Then ideally what should happen is that I should pick up these events five six and so on until my end range. However, this is not going to happen. What's going to happen is I'm going to be hitting a null.

And then I won't know where to start. Okay. In a simple map, which gives you order one complexity. So we can't use a simple map. Instead, what we need to do is we need to keep some sort of a sorted data structure sorted by timestamps and the only data structure, which is both sorted a map and concurrent because we need concurrent operations in Java is a sorted, skip list map. Now we wouldn't be getting into the internals of this data structure effectively.

What happens is it gives you an amortized order log and time complexity, which is really fast for us. And this is concurrent. So it's also safe data structure for our use case, which we can end up using here on concurrent skip list time. So that sets one data structure for us. The next one is setting an index after a timestamp. So in this data structure of event timestamps, we get for a given timestamp, the index.

Okay. So what's going to happen here. Is that for a given timestamp, let's say 15, we tried to get the index. Maybe this timestamp does not exist. So it gives us the next timestamp through this skip list map. So maybe index number for, even with timestamp, 14 is 12.

So we pick this and we say that increment this by one. So 12 plus one, all events having an index of 13 or greater have to be picked up now. So the index has been set up to 13, basically. Okay. Similarly set index after an event. Well, this can be a simple map, like we said.

So the map is just going to be storing indexes for every event, index ID E4 as we mentioned earlier, will have an index and whenever a person says, get me that index and then do plus one, it effectively says every event after that is going to be picked up from now on. You have set the index there. Okay. So what are the overall time complexities of the poll operation, We have an order one operation. This is the only thing that is being affected for a publish operation. This is order one, but this is order log N.

And so that is updated again. Or the log N is the time complexity. Here get event with time range, as we said, a C corporation is going to be, order log N for the event timestamps data structure. So this is also order log N overall for set index after timestamp, well we need to get from this data structure, which itself is, order log N. So order log N, okay. I'm just highlighting the things which actually define the time complexity.

And finally, when we want to set the next, after an event, when for a map, it is order one. So effectively we have a data structure whose worst case for some API is order log N. And this is an efficient event bus.

File: assets/Splitwiseclassdiagram-200807-152252.jpeg

## Event Bus: Quiz #3

Type: Quiz

Questions and answers: see quizzes.md.

## LLD Diagram

Type: File

## Event Bus Code Download

Type: File

## Summary - PDF

Type: File
