# 2. Machine Coding a Cache

## Machine Coding Round Intro

Type: File

## #1: Caching: Engineering requirements

Type: Video · Length: 5 min 24 s

### Lesson notes

We define the engineering requirements of the cache, using the CRUD model.

### Resources

Cache Write Policies: [https://en.wikipedia.org/wiki/Cache_(computing)#Writing_policies](<https://en.wikipedia.org/wiki/Cache_(computing)#Writing_policies>)
Code Link: [https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache](https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache)

### Transcript

This is the first chapter, which is going to be looking at an engineering product, which is a cache. A cache is something which stores a part of your database in memory so that you can quickly access it. We can fall back to the same principles of what are the features that you want over here. So what are the behaviours that you want in this cache? You want to be able to access data, which is basically make get queries to this. You also want to be able to update data, which is basically write, or post queries if you're thinking in terms of APIs.

And then you want to able to evict data. While talking about these features, I can clearly see that these are data manipulation or data read operations. As engineers, you talk about a particular model for any data structure, which is called the CRUD model. C stands for create. R stands for read. U stands for update.

And D stands for delete. When are the times that we need to delete from this cache? Sometimes a cache entry might be expired. So maybe this entry came five days ago. There's been no update on that entry. It's possible that the data entry for this key has changed.

You want to take it out of the cache after a certain point of time. It could be that you have too much data in the cache. Maybe you have five GB of Ram. You are full. You're full with all the entries and a new entry has to be pushed in. So where do you push it in?

It's effectively picking out the least useful entry and bringing in the most useful entry. These are the two scenarios when you'll be deleting entries. What about updates? In terms of update, you have write policies and you can have a look at the description, but I'll just give you a general idea of what our policies are. There's two types of write policies write-back and write-through. If you have a distributed Cache, which means basically you have multiple machines, let's say there's two caches over here.

And they talk to the same database. So let's say this person updates the entry for key value A. So this value has changed, but the same key value of A was being held over here. If the client queries this, it gives you a value letter, say P and the old value was Q. A has the value of Q over here. If a client queries this it's going to get stale data.

This is bad. In the write-back policy, what happens is: let's say the client makes a change A now becomes X. This is the value of A that you have in the cache, which is X. You should send it to the database, but you want to hold on to that because what did the client is making many, many updates. A becomes X. Then it becomes Y.

Then it becomes Z. So you want to avoid all those queries, hammering your database. And that's the reason why you're holding onto that value. You want to keep these entries in memory and then flush them to disk from time to time. What could happen is that you have your information in the cache (in memory). And suddenly there is a power loss.

Or data corruption. In that case, of course, you lose that data forever because the only copy you had was on memory and it didn't go to persistent storage. So that's a problem. That's a problem with write-back. It's more efficient in general because you're making lesser writes to the database. You are doing bulk writes, or you're holding onto the writes.

So this is more efficient, but it is also more risky. While the 'write-through', as the name suggests, is: you go to the cache, you update it, and you make a synchronous call. So basically when the client sends an update to the cache, let's say A now is Z. The cache looks at this entry, marks it as Z and synchronously updates the database. So all other caches can either be notified, or at least they will be able to see the new entry in this database. When they, when the pull this.

On the other hand for write-back you would not have seen this. Let's say this was X. In memory it would make it Z but it will not push this entry here. So any new entries in the new cache would not be able to get the new value of Z. It would still be X. So those are two policies.

They are kind of trade offs between, do you want more efficiency and less consistency? Or do you want more consistency and a little less efficiency I personally like write-through, but it completely depends on the situation. This is a little easier to implement. This is a little harder to debug, but sometimes you have no other choice. Performance is important too. Now what about the read operations?

What guarantees can you give on that? One of the guarantees that you can give is that your cache is always consistent. It's always going to have the latest data out there in the database. The way to do that would be that whenever there's an update to any of the caches, force that to the database and the database sends a notification to the rest of the caches, having the same entry, that "Hey, there's an update!". In this video, what we are going to try to do is we are going to give them a policy of 'read your own writes'.

## #2: Read your writes

Type: Video · Length: 4 min 14 s

### Lesson notes

An in depth explanation of ordering and read/write guarantees.

### Resources

[https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache](https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache)

### Transcript

So, this is what we have. The first operation that the client is making is a write operation. A is now being updated to 'Z'. Right now, A is going to X in the cache. And so is it in the database. Like A equal to X.

You get a write operation here in the cache, you sent a request to the database saying that "Hey, please convert A to Z". But before you could get an acknowledgment- So at this point, you'll have A equal to Z in the cache. You got a read operation from the same client. So that is the second operation on the client. And the read operation is quick to do. So you send it back from the cache equal to X.

And this is weird for the client. Why? Because they said change the value of A to Z. Okay. What's the value of A? X!

It can happen. If you don't take care of it. And in fact, in some cases, it's perfectly fine. For example, if you say that, please add a user in the user list of 30 people, and then you ask how many users are there. And if we get a 30, maybe that's okay with you. It depends on the application.

But we wouldn't be giving them a 'read your own writes'. We are going to hold all other requests that you have. Read operations and write operations till your write is complete. That is the only way you'll be able to read your own writes, your own operations, your own changes. So when the read operation comes here, you get blocked. Till we get A equal to Z from the database.

We get this acknowledgement. Now we are sure that yes, this write operation is done. The subsequent operation is then picked up, which is a read operation, which had been blocked. And now you send a response for this. You send that back to the client saying that A is equal to Z. The client's world is still making sense.

Everything is consistent in their view of things. So let's take. This scenario: read B, read B, and then you get a write B. So do we need to block on this call? The third call, till the write is completed? No.

You don't because, over here, there is no write operation on B that you're waiting on from the database. So you assume that the value of B has not changed and you just send back whatever value you have for B here. Let's say B is equal to Y over here. So you just send that back. B is happy. There's quite a few edge cases over here.

What if the write operation of B executes before the read operation. Will B be seeing a different value? So for example, B is equal to Y. B was asked to be converted to Z. At this point. Let's say the write operation was super fast.

This is a really fast database call. And for some reason, this read operation was slow. The task scheduler gave it a really late response. So in that case you said "read B". You didn't make any change. And yet you saw B has changed to Z.

So that is also weird. There are multiple guarantees that you can give in the system. What we are saying is you're going to "read your own writes". Which means that if there is a write operation, you're definitely going to see it changed in your response. But there is no other guarantee that we are giving. Why am I going for this one so much?

Because this will take care of most of the ordering guarantees that you have in Caches. This will actually expose a lot of the internal stuff that we need to know about. And the other thing is that this is also one of the most commonly used scenarios when it comes to caching or an engineering product. What you want is, once a client has sent you a request, you want that change to be adapted before sending them a response. "Read your own writes". What about create?

Should be pretty easy. I mentioned the replacement algorithms that we have. These are the core issues we have in our system. Whenever we are building our cache, these are the core requirements for any data structure that we have to build.

## #3: Defining the core requirements

Type: Video · Length: 2 min 12 s

### Resources

Cache replacement policies of LRU and LFU: [https://en.wikipedia.org/wiki/Cache_replacement_policies](https://en.wikipedia.org/wiki/Cache_replacement_policies)
Distributed Caching Video: [https://www.youtube.com/watch?v=U3RkDLtS7uY](https://www.youtube.com/watch?v=U3RkDLtS7uY)
Code Link: [https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache](https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache)
Pre-Fetching in Cache: [https://en.wikipedia.org/wiki/Cache_prefetching](https://en.wikipedia.org/wiki/Cache_prefetching)

### Transcript

Let's also just number these things. The 1st one is read your own writes. The 2nd one is that you have multiple write policies. The third one is that you have an expiry time. Fourth one is multiple replacement algorithms. The common ones are LRU and LFU.

The links are in the description. If you want to what these are. And the sixth one we have talked about. In rate limiting, which is request collapsing. What happens is if you have multiple entries for the same key in the cache, then you don't make multiple calls to the database. You condense them all into one call, and make that query to the database.

And the result is sent back to all the clients which have been asking. For the same entry. The final two things which developers like to have in a cache is hot loading. And event logging. Hot loading is form of prefetching. Instead of the client.

Telling you that, "Hey, get me this entry" and then you reacting to that, prefetch records when the system is starting up. So that it has faster response times, which is good for the cache. And finally you have event logging. Anytime there's a load, or on an evict, or a replacement. Any event, especially in the CRUD model. Then you note that event, you create an object which is of that type, and then you send it to a log.

You can either just write it in a log or you can send it on a message queue to a downstream system. Let's say an analytics engine which is looking at how well your cache is performing. So it's useful for metrics, it's useful for debugging, it's useful for many things. It's just a log, which requires entries that you will be making on every event. These are the eight requirements that we have. All of them are.

As you can see, very engineering focused. If you have a long interview, which is two and a half hours, then it makes sense to tackle all of them. But if it's a short interview, then it would be best that if you attack these problems, the core problems of the cache. We will be talking about all of them because we are assuming that it's a machine coding round. Machine coding is something in which you're actually expected to not just develop the whole cache, but also write test cases for it and have some sort of working code. Let's see.

## #4: Asynchronous processing: Keeping threads available

Type: Video · Length: 5 min 16 s

### Resources

Cache replacement policies of LRU and LFU: [https://en.wikipedia.org/wiki/Cache_replacement_policies](https://en.wikipedia.org/wiki/Cache_replacement_policies) Distributed Caching Video: [https://www.youtube.com/watch?v=U3RkDLtS7uY](https://www.youtube.com/watch?v=U3RkDLtS7uY)
Future In Java: [https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/Future.html](https://docs.oracle.com/javase/7/docs/api/java/util/concurrent/Future.html)
[https://www.digitalocean.com/community/tutorials/java-callable-future-example](https://www.digitalocean.com/community/tutorials/java-callable-future-example)
A brief overview of Head of Line Blocking: [https://en.wikipedia.org/wiki/Head-of-line_blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking)

### Transcript

Apart from this, you might have your engineers expecting extra features, which is completely. Normal, in any caching system. One of the core things, over there is asynchronous calls. Out of all the requirements that we have, these two are the most complex. So let's focus on this a little more. Firstly, let's talk about asynchronous results.

So if you have a client and it sends a request, which is get the key A onto your cache, what happens is this request has to be read. There are two sockets on the cache and on the client, data is written onto the socket and someone has to, I mean, there's a socket over here also, right? Data is actually put over here. You have to read this binary data from the cache. So the person who's reading it is a thread in this cache. So then multiple threads are in the cache, which are reading multiple sockets because multiple people are making requests.

When you're reading this data. The program, or the piece of code, which reads this data has a limited number of threads. In your process. You are not going to give it as many threads as you like because every thread requires some memory and some processing time. So you wouldn't give it, let's say 10,000 threads. You're going to give it 10 threads, 20 threads, whatever would be the case for reading these sockets.

What happens is, if you don't give an asynchronous response to this, the thread which just read this data asked you that. "Can you give me a result?". Before you say, wait for 10 minutes. So one thread is blocked on this socket. It's not doing anything. So it's not reading any other socket, because you said, wait for wait for this result.

Soon enough. 20 Threads will have their results blocked on the database. Let's say the database is in a different country. It's going to take you some milliseconds to get that data out. That's a problem. Because now when the client is sending requests, the cache is just not reading them.

So the client is also kind of blocked on you. It doesn't know what's happened. Instead if you unblock this thread saying that, okay, I got your request. Then the client can- at least this thread is open and you can read different requests. Another problem with this is something called head of line blocking. So let's say the first 10 requests that the client sent are already slow.

Let's say that they're all in the US server and your cache is in India. So all of them are really slow, but the newer entries or the newer get calls, are all Indian calls. But of course your threads are blocked on the old calls. So they're not even able to read this. Because they're not able to read this they're not able to fire database queries to the Indian box, which could have quickly relieved the pressure from the cache on these entries. So they are waiting on you for the US calls to complete, which are going to take time.

The user experience is bad here. Your data is, you know, your database for India is just not being utilized to its maximum efficiency. And overall the performance of the system is 'not so good'. That's the reason we want asynchronous results. So that you can let this thread read multiple calls from various clients. And in the backend, this stuff is going on.

What do we need to do for asynchronous results is use a programming abstraction. It's called a 'Future' in Java. Basically, this is a container. A container of what? A container of results. How does it do it?

It's a memory address, which initially is blank. So when you say that: "I will get to the result for A", it's blank. What you're going to do is you're telling the programming language that when this result is ready, please fill it over here. Okay. That might take 10 seconds. That might take 20 seconds.

Whatever would be the time after the result is ready from the database, fill it over here. This future with somehow, magically, get to know that this result is now filled and return it to the client. Of course, internally, there's no magic happening. It's likely that you're going to get either. Push requests from over here that "Hey, this data has been filled", and the future is notified. This entry, which is pointing to this address, somehow gets to know that this data is filled.

Either it's a push notification or it is periodically polling that, okay, is it still zero? Is it still blank? If it's blank, then I'm not done yet. But the moment it's not blank. You take this result and give it back to the client. Usually there's two boxes here.

One is the result and one is an exception. So in case. There's data, I'm going to say that, okay, there's an exception. There's some mistake that has. Happened. And the future.

Here is going to get completed either on a fill of the data or a fill the exception. So this is a programming abstraction that we have. We don't want to be doing all this stuff manually. And we don't even want to know whether it's a pull, a push that is actually filling this data. We just want the data eventually in the future. So we use this programming language abstraction to actually get something asynchronously and return to the client.

## #5: View Consistency through thread assignment

Type: Video · Length: 6 min 13 s

### Lesson notes

Working on the thread Assignment to improve the Consistency

### Resources

[https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache](https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache)

### Transcript

The harder problem is 'read your own writes'. And this is a kind of 'view consistency'. There's two ways in which you can enforce a particular view of the data. One is that you lock the data. In which case no one can update it. You acquire a lock, which means that you go to a particular address in memory.

And you say that I have acquired this lock. Nobody else can pick it up now. Conceptually, you can think of it that way: that you go to a particular place and you change the state of that place. Maybe it was blue. You made it red. When a person comes over there, they see that it is red.

Oh no, I can't do anything. Till you come back and make it blue, no one can do anything to that data. Because you own it. So locks give you temporary ownership for that data. Of course, what could happen is: you take that data, make that color red and then die. That's a weird place because when the newer processes come in, that data is never changing back to blue.

It's never going to be safe to read that data because you are dead. So there's multiple ways of locking and there's multiple policies you can have. You can have an expiration time on the lock. You can make sure that, definitely before dying, the last act you're going to do is make it back to blue. We look at that in the code. It's a little easier to explain over there.

Lock is the first way that you can actually enforce view consistency. And the second one is ordering. And we're going to use something called threads for this. You need to have a little deep understanding of how operating systems work. Let's talk about that. In your operating system, you have processes.

The operating system says that here is a process, let's say the cache process. And it has been assigned two threads: thread-1 and thread-2. Now let us say that there's multiple requests from the client. One of them is get(A) and one of them is write(A). The value of 'Z'. And currently the value of a is X.

So let me say, this is the first operation and this is the second operation. So you should be able to see 'Z' coming back to this. But like we said, it may or may not be necessarily unless we enforce it. So how does ordering through threads help us in a cash process? In this process, what we will do is we will force all operations on Key A to fall onto this thread. And how do we do that?

You have done this earlier: Hashing. When you hash A, every time it gives you the same value. So if this is thread-1 and you hash it and it gives you the value of 1, then it's going to fall here all the time. If it gives you the value of 2, basically the hash value might be 1, 2, 3 or so, but you mod with the total number of threads that you have. So you do a mod 2, and this gives you 1. So in that case, if this is thread-1, thread-2, then it will fall on 2.

But to simplify things, I'll just take this as this index zero, you have thread-1, the get operation for A and the right operation of A both fall over here. One by one. So if you get the write operation first, then on this thread, you have first write to Z. Current value of A, like we said, is X. And then you get read operation, which is read the value of A. Does this solve our problem?

Yes. Why, why is that the case? You had the same ordering in the process. This was operation 1. This was operation 2. You got it in the cash process.

Why is assigning it to a particular thread, suddenly solving your problem. You still have the same ordering from here on to a thread. So we need some operating system concept over here. The thing is a thread is not concurrent. I mean, a thread is a set of instructions, which have to be executed one at a time. You can't have concurrency within a thread.

Let's look into that, in terms of how these threads will be working. You have already assigned all the requests for a particular key to a particular thread. This is using the task scheduler, which is going to be hashing the key and then moding it with the number of threads to get you the thread which will be executing your task. Imagine that you have 4 threads and each of them have tasks to execute. Every task is a bunch of instructions. It's like a tiny piece of code or program that has to be executed by that thread.

And they stack on top of each other because they are going to be executed sequentially. The operating system on top of which you're running your application has a thread scheduler. So what this scheduler does is it takes the processor time and breaks it into pieces. So, for example, if you have 50 seconds, you can break it into five pieces of 10 seconds each. Every slot is going to be having work done by one single thread. The useful thing about this is that you're not going to be starving out all the other threads while one thread completes its execution.

For example, if you're waiting on a network call that might take some time, this is called concurrency where you slide in other tasks and complete small portions of them in the slots allotted for now, just focus on the first thread, the blue one, which has write and read. So this has to be executed sequentially. And we see that we have three slots given to us by the operating system. In these three slots, thread-1 is going to execute write A first and then read A. So the result will be Z. And just to highlight on the importance of assigning all the keys to a single thread, imagine that you have, instead of one core, you have two cores.

And as long as key A is being assigned to thread-1, you're fine. Everything is running sequentially. And the results are making sense. A is equal to 'Z' will be the final result. But if there is no coupling between the thread and the key, then what could happen is that key A has a write operation, assigned to thread-1. And read operation assigned to thread-2.

And you can see here then the read operation could complete first in core 2. Giving you a result of A equal to X, even though you sent the write operation before. So that would be breaking the condition of read your own rights. That's not what we want to happen. And that's why both the conditions of data locality and sequential execution are necessary.

## Code #1: Code skeleton for 'Get' and 'Set'

Type: Video · Length: 16 min 59 s

### Resources

Generics: [https://docs.oracle.com/javase/tutorial/java/generics/why.html](https://docs.oracle.com/javase/tutorial/java/generics/why.html)
Code Link: [https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache](https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache)

### Transcript

A lot of this is code semantics. And honestly it would be much better if you download the code right now and just go to the next section, download the code and sit down with it beside you while you're watching this video. What's going to happen is I'm going to be going through the thought process of a software engineer. Who's writing down the code for the first time. There will be mistakes. These mistakes can happen at both work and interviews.

We'll try to overcome them. We'll try to be changing the code as we think through all the requirements. And let's see how that goes. So as always, let's start with the most important bit, which is the cache class. And what are the two methods that it needs to expose? There's a get and a set method.

So the public method of get, and this will have a key. So there's a string key that you can pass in. I'm going to be returning a future object. Here's the thing where you can start using something called generics. This is also the case in mostly strongly type languages. I think C++ also has it, you mention a type over here.

This type of value has to be forced into the kind of future that you're returning. Have a look at generics. I have a few links in the description. What it's saying is that if this cache contains values of type integer, then the future will be of type integer. If it is string, then similarly the value is going to take that type. And since we are doing this, our key can also be technically anything.

So our caches offer Key, Value. The type mentioned here has to be passed into this, get method, to get a future of this type of value. That's all we are doing. Similarly, I need a future to be returned for set. I need a key and a value in this cache. I could return the value, but instead it will be better if I return nothing.

So what does this mean? It means that I'm giving you a container, which is going to complete only after this method has completed. Okay. So I'm returning you nothing, except the acknowledgement that this method has finished execution. Why do I need this future? Well, because I'm going to be making an asynchronous call and when the asynchronous call finishes this future completes.

Remember that what you are going to get, actually this future object is a placeholder. So you're going to be returning immediately over here itself. And the void class is a wrapper around this void. The wrapper around integer, float, probably you've seen that. But this is the wrapper around the nothing. So you can't actually create any class of void, there is a private construct over here.

The first thing that comes to my mind when I'm thinking about a cache is what is the underlying data structure? So the cache cannot actually have data by itself. It's a small mirror image. It's like a condensed image of a database usually. So I need a data source. So I'll be using that data source.

And this will also be of the same type. So it'll have keys and values, which will force the data source to also return of the same type for a given key. And I can actually create a class here itself. What does this do? It just loads values, and also persists. In this case, I'm just returning null, because this is like a dummy method.

Usually your interviewer doesn't really care so much about a data source, but to avoid compilation errors, this is the reason why I just wrote those two wrapper methods. So whenever you say, get me this, I'm going to be seeing "Do I actually have it in the cache?". What do I mean by "Do I actually have it in the cache?". I need some sort of a data structure, which is going to be holding these values. Which I'm going to pull from the data source. I need a map or something.

A map of key and value. So this is my underlying map for the cache. It's probably the most common way of implementing a cache. What happens is you have a hash map and because we are going to be having many methods accessing this, I'm going to be using a concurrent hash map. It should help me eventually. I can pre-optimise.

The map is going to be checking: If I already have this value, then get it from the cache. And if not, then you need to load the value. So this is where the DataSource.get() comes in. And in fact, get, it needs to have a key value. This is returning as a future for now. Let's say we directly return this and the map is containing a key.

So if it already contains, then I return map.get() this key. So it's actually better than returning a future. You don't need a container over here. But because we need, a strongly typed language needs this future object, to be returned. So we'll wrap it with the future. I'll just say CompletableFuture.completedFuture.

Give me this type of future. Our get method is not done but the simple bit is done. The general idea is done. What about the set method? Well, if the map contains our key, that means this is an updation. And if it doesn't contain the key, then this is a replacement.

Or if the cache size is not filled up (this is when, in the start, your cache is reasonably large, and you haven't pulled in that many entries). So you can directly load. What we need is some sort of a loading method onto the cache. During updation, do we need to load anything? Nope. We don't because we have the most current value which has been sent by the client.

That is assumption. I'm making an assumption here that let's say that in a distributed system, you are currently having the cache A. This is the code that is running and you have a cache B, which has done the same code. Then I'm not going to be taking care of cases where the request for setting a key reached A before B. That's not what we are looking into. We are assuming that there is some sort of horizontal partitioning done beforehand.

I mean, we have done horizontal partitioning on the threads, so it doesn't make sense not to do it on the caches themselves. We are assuming that all requests for a particular key fall on one cache. And then it's our responsibility to make all the requests for that key fall on a single thread so that the ordering is also there. And do we need to persist in the database? Well, it depends. We are talking about the write-through or the write-back algorithm.

So when we said write-through, we need to persist it immediately. Eviction algorithm. Actually, this is not a class. It's an enum. It's like string constants. That's what the names are.

If the current cache is of type write-through, how do I know that I need to actually add a field over here? Eviction algorithm for this cache. I'll take a constructor parameter. And I will also take the DataSource as an argument. So I'm marking these variables as final so that they cannot be changed. I have an eviction algorithm, which is going to be deciding what's going to happen in the set method.

So if that equals write-through, then I persist immediately. I wait on that future. And then I add to the map. Here's something interesting. Persist is returning us a future. And a future does not give us easy methods to compose functions on top of it.

So "if it is done, then do this" later. It's returning a boolean, it's telling you, "am I done? Yes/No". It's not telling you "If you're done, here's a function that you can run". That's what you want. It's called a callback in Java.

It used to be called a call back. Now you're able to compose those functions on top of each other. So I'm going to be using more convenient class here called a CompletableFuture that the data sources is returning. Sometimes convenience makes your code much cleaner and much more easy to read. Then accept, meaning: then do this. And what do we want to do?

We want to actually add this value to the map. And what if it is not successful? Exceptionally could be something that I do, but usually I use a method called when complete. Let's keep it at this. If your future fails, you are going to be having an exception in the future itself. We talked about the future object having two pieces.

One is the result. And one is the exception. So you won't have an exception thrown here. You'll have an exception inside this container. Once it is completed, once the thing has failed, if it does. If it is write-through, please push it to the map after having posted it into the database.

Otherwise, if it's not write-through, then go right ahead and put it on the map. When a person says I am on write-back, when this cache is on write-back, when do we actually persist the data? Because at some point in time, we need to persist the data. Otherwise it will be lost. There's two options here. One is to wait for a particular period of time and then push it into the database.

Either the record is expired or there is a replacement, okay? Those are the two times when you want to persist records, which haven't been persisted yet. But instead of doing that, instead of making it so much more difficult by keeping accounting for which records have been persisted and which ones haven't been, what I'm going to do is I'm going to be making an asynchronous call to the database saying that "Hey, you should persist this key when you can, but I'm not waiting on this". There was no return as such. I can return right here. So we'll see how we're doing that.

CompletableFuture.completedFuture(null). And what happens here? How are these two different? The write-through is saying that first you persist and if and only if it is successful, go ahead and push this value into the map. That is a single operation, which waits on something. While over here, you first persist it into the map, that makes sure that your cache is up to date.

And then you ask the data source to process this record. So in the set method, we just return the result potentially before the process method has completed. So there is a chance of data loss, but it is more efficient now. This is when there is a key in the map already. Otherwise, what we need to do is we need to do a replacement or a direct load. So the easy method is, if your map size is less than threshold, this is going to be something like constant.

I'm going to be taking an integer because really there's no way that you're going to be exceeding integer for the cache. Like you, you can't have more than 4 billion records in your cache. Highly unlikely. So threshold size, let us say is- in fact, this should probably be static. So if they are more than 500 entries in your cache, I'll start replacing instead of directly loading. But as long as that's not the case, I'm fine.

So I don't need to do anything over here. So I can just convert the condition to this. If it is equal to or greater than. Now, I need to do a replacement. So direct load is very easy. Another thing to notice is that even after a direct load, I actually need to set that value in cache.

And depending on the write-through, or the write-back algorithm, I'll need to do this anyways. Contains-map condition is not helping. I can instead say, like this is common. I can take this outside. Because it's common to both the methods. And instead of a 'if else', there's just a single if condition, if the map does not contain this key, and if the map size is greater than equal to threshold size, so that's a single replacement operation that needs to be done.

And after that we need to persist to the database. So what are the two replacement algorithms that we know of? There's LRU and LFU. LRU is least recently used and LFU is least frequently used. Again, there needs to be something which is telling me that this cache is either LRU or LFU. This is the eviction algorithm.

In fact, what we had till now is the persistence algorithm. Because the write-back of the write-through is telling you, how do you persist to the database. So the persistence is fine. I'm going to be adding constructor parameter for that. And over here, you're figuring out which record to kick out based on one particular parameter. How do I find out if a record is the least recently used?

I need some sort of an access timestamp and I need it for every key value pair that I have. But I have a feeling that this is not going to work. And the reason I have this feeling is because the more LLD questions you end up doing, the more you realise a particular pattern in these questions. So let me just elaborate on this. You have two requirements. One is to kick out entries based on the recency of the last access.

The second is to kick out entries on the frequency of the last access. And these are two different parameters, okay. They have no relation with each other. So when you have a record, which is being accessed less frequently, you need some sort of an index. So I'll just note that down. There's a class of, let's say record and it has value.

So this is going to be persisted in the cache. So key, record will be persisted here. And now I also have another field which is long timestamp, and I'll also need another field because I need for frequency (I'll need the access count). Now this is where things get complicated. If you're going to be kicking out records on the basis of the accessTimestamp, things are fine. Because what you can do is you can use a tree map.

A tree map is a sorted collection in Java. So I'll need a key here and I'll use a record of type value. And I'm good because whenever I need to remove entries, I just say, get me the first entry. And I'm going to be assuming that these records are comparable. That's the only way you can sort things. So when you need a comparable, you can extend this interface comparable of type record.

And I'm good because this tree map is now sorted according to the way that I have mentioned. This tree map is going to be sorted according to the access timestamp. The important thing is thinking about expiries. When you need to expire records, it's based on the access timestamp. In LRU things are fine. Least recently used is based on timestamp.

Things are fine, but in LFU, which is the least frequently used, we are in trouble. Why? Because there is a particular parameter, which is telling us, get me all records older than X. And there is another field which is access count. And that tells us that when you need to replace a record, get me all records having access count less than Y. Now there's multiple parameters on which you need to evict records.

And when there are multiple parameters, a simple tree map is not going to be doing the job. So that is the caveat in this cache. It's a complicated algorithm. And that is the reason why this use case came in. Had we not had expired times, things are perfectly fine. Had we not had LFU, things are perfectly fine.

But when you add more and more features to your cache, that's the time when making it performant becomes a real challenge. And we are going to be looking into how do we make it, despite all the challenges, performant enough. So let's see how that happens.

## Code #2: Setting up fast evictions

Type: Video · Length: 13 min 26 s

### Resources

[https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache](https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache)

### Transcript

The first thing I'm going to do is just add this eviction time. So that's a parameter. And again, I'm going to be using an integer expiry time in seconds. And this is a constructor parameter. So things are fine. Based on this expiration time, I actually need to make some decisions.

If you have the key, but if it is expired. GetAccessTimestamp &lt; currentTimestamp (System.CurrentTimeMillis) - expiryTime. If this is the case, meaning that our current time - maximum amount of time that we can keep before expiry, is still greater than the last time it was accessed, then we need to actually kick this record out of our cache. And it's a stale record. We can't have this. So we need to do a DataSource.get() again.

Otherwise things are fine. Otherwise we can just get the entry from them. Instead of complicating the logic here, I can make it simpler. If else condition. This will need to be in Millis because we have current timestamp in millis. Now what I have is, if my map only contains the key and it is not expired, please go ahead and return what the map contains.

Otherwise, go and pick up from the data source, the current value, and I also need to persist this in the cache. So I'll say, after this is done, There is the setter method that I actually want to compose. So have the value with me, and I want to set this value in the cache. This requires some coding experience. So what's happening here is that the data source is giving me a particular value. And what am I doing with it?

I'm setting it in the cache first because I did not have the value. So I had to set it in the cache and then return it to the client(The person who's calling this). So I'm saying set it in the cache once you're done, then apply. What? Apply nothing. What does this mean?

Don't do anything. Just give me the value over here. I'm waiting for all of these results, these futures to complete. Before I take the value, which I had gotten here itself, just after this statement had completed, I could have returned directly. But I couldn't really because I need to also set it in the cache. So I waited for that to happen.

And then I say, give me the value. The value record has to be converted to valueRecord.GetValue(). There's still some compilation errors. I need a type of record, and you're giving me type value. This is easy to solve. And this is of course, for example purposes.

So I remove the treeMap. So to meet both of our requirements of expiry and eviction, we need two data structures. The first one is going to be a queue based on the creation timestamp of these records. So I have a private final list, let's say of records. And this list is going to be sorted in terms of creation timestamps. The creation timestamp of what?

The creation timestamp of this record. Not necessarily of this entry in the database. But when did we actually load this value into cache? That is what we are interested in. So in fact, the access time is not what we are looking for over here. We are looking for something called load time.

So this is when the record has been loaded onto the cache's expiry queue. For this timestamp, I have these set of records. Then I need all of the records for the lowest timestamp in this expiry queue. I have the new, concurrent tree map is what I need, but there is no such thing. So I'll just go for the concurrent skip list map. The general idea is clear.

I mean, you want a concurrent data structure, which is going to give you log(N) times. Similarly, we need something for the priority. So I'll just call this data structure: Priority Queue. And similar to this, the priority queue will be initialised in the constructor itself. There's something quite interesting going on over here. The expiryQueue is always based on this long value, but the priority Queue is actually based on these parameters, the access timestamp or the access count, depending on LRU or LFU.

So I don't want these two parameters to be part of this object. I want them to be immutable and I want them to be separate so that I can actually pass that as the key in this priorityQueue. So let's do that. I'll just take this and make a class. Call it access details. And then over here, we have an object of access details.

And what about load time? Is load time a part of access details? No. The reason being that I actually am going to be storing the load time in this expiry queue, not in this priority queue over here. So I have access details over here and in this you pass a comparator. So I say the first object and the second object that I have are going to be compared in this way, you take the first object and you see the access timestamp.

And if that is less than the access timestamp of second object, then, well, I can return this, right? But only if I am having the LRU eviction algorithm. Otherwise, all I need to do is return the access count. One important thing to remember in such cases is, especially in comparators, what if there's a tie? If there's a tie here, that is fine. Both of those two objects are equal and you can take anybody random.

But usually in LFU, what happens is if the least frequently used objects are the same, then what you end up doing is you take the object, which was least recently used. So it's basically LFU, but LRU for ties. That means that this thing, which is older, If the two objects have the same access count, so this is equal to zero or rather if these two are equal, then send me whichever object is lower to be kicked out and otherwise just send me the object, which is having lesser frequency. So least frequently used. Whenever you're doing a get, you're also updating the access time and you're also updating the access frequency. So in this record, these two values have to be updated.

That's interesting. How do we do that? Well, you're getting this value and over here, you're actually returning it. So there's two things here. Firstly, when you're setting it in the cache, you can be updating it. And when you're getting it from the cache again, you can be updating it.

So in both cases, you have to end up updating the access count and the access time, instead of returning directly, I'm going to be taking the result, which is. A future object. Assign result either this or this. And finally I say result.accept which returns me nothing. So that is technically what I want. One of the problems with this is I have the value with me over here.

When I say get value, record.getValue I was returning the, but what I really need is the record to have it's access details updated. The result has to be of type record. The set method, returns void, which makes sense. The public API should return void, but I need the record which has been set once this operation completes. One of the options is to actually change the API to a record of value, but that doesn't make sense to me. Changing public APIs does not make sense to me.

This is really good. This is what should be there. And clearly get and set are not nicely falling into our. Original CRUD model. So I need to think about something. Maybe I can break the operations into four simple operations and the get inside will be composing those four operations of CRUD.

I want to actually separate this out. I want to make a function out of this. I'll make this addToCache. This might seem trivial, but it's going to help us because addToCache returns a record of type value. Which is what we are looking for in the get function. So that would be after putting map.get.

This is adding to our cache. So the public API won't be called by this function we'll instead say, addToCache. And addToCache requires a key and a record value. That is strange. I don't need the record value. Actually.

I just need the value. I need to set these data structures accordingly. So the expiry queue needs this entry put in the right place. And the priority queue also needs that. Record.getAccessDetails.getTimestamp(). That takes care of this.

And the other one is record.getAccessDetails. Based on whether it's LRU or LFU, it's going to be changing the way in which it sorts the data structure internally. So we are going to just pass an access details over here. In case this is empty, we are going to have a null pointer exception, right? The first time the expiryQueue is not going to have any records for, or rather it's not going to have any key with this timestamp. So we need to take care of that.

expiryQueue.PutIfAbsent for this key. If it is absent, then do me a favour and add in this ArrayList. Because we have concurrency issues, I'll just make sure that it's a CopyOnWriteList. Similarly, for our priority queue, the access details key. We need to make sure that there already exists a list before you actually enter. So putIfAbsent is going to only enter if that key is empty for this map.

And finally, what you want to do is you want to return this result. Also, like we mentioned, we need to update the access details. Over here, the access details, I can just make this a common object. SetAccessCount, whatever was the access count, just increment it. Plus one. And similarly you want to update the access timestamp to the current timestamp.

So System.currentTimeMillis is what we need. And when you're setting the current access timestamp what's going to happen is the priority queue is going to be correctly updated. That's the access details and the expiring queue is going to be updated based on the current timestamp. Okay. This is a mistake here. The thing is that I want the record to expire regardless of how frequently it is being queried, because the record is going to get stale based on its load time.

Not on the access time. This is unnecessary. We can just get rid of this. We just need to update the priority queue. We need to somehow set an expiry time when we are loading onto the cache. So the addToCache, actually the expiry time here should be just set for addToCache.

So can I directly set it over here? Okay. I need the access details here. System.currentTimeMillis is what needs to be updated. If you're going to be reading the clock over here and the clock over here, there might be a difference because the time is passing by. So you want the same time to that.

That will be current time over here, set as a variable in that you are going to be adding a record and things seem good.

## Code #3: Thread Assignment and updating GET + SET

Type: Video · Length: 12 min 59 s

### Resources

[https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache](https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache)

### Transcript

The data structures we are internally using a priority queue and expiry queue. But when are we removing entries? Because there's going to be a lot of garbage. What's going to happen is if you're accessing a record, let's say X at timestamp five, then you're going to have a key value for five and record. But 10 seconds later, if you access the record again, that will be 15 and record. So there's going to be a lot of pollution.

I want the 5 and record to be removed. When is that going to happen? What I'll do is: if the map contains the entry, then I should check if it is already expired or not. And based on that, I'll need to do some decisions. So the simplification here will have to be opened up. And now the map does not contain an entry.

Over there, you just go ahead and addToCache. That's simple. Otherwise, is this record expired? If it is not, then we are going here. If it is, then I actually need to kick out that record from the expiry queue. This is the record.

GetLoadTime is going to be giving you the time that this record was actually inserted. We should have an entry for that, and we need to kick that out, remove that entry. And similarly, I need to do the same for the priority queue, getAccessDetails. And then we removed the record. One of the things we have to do even now is to send all the requests for a particular key to the same thread. So we haven't taken care of that.

Let's do that. We'll have ExecutorService and we'll have a SingleThreadedExecuter. And this pool will actually be an array of the size that we need. So this is how we'll assign it. Now the get method needs to use this ThreadPool based on the key. I'll just take this entire function and convert that to get in assigned thread.

GetInAssignedThread is going to be running in a particular thread. So how do we take care of that? Well, CompletableFuture.supplyAsync. I'm going to be giving it a ThreadPool and a task to finish. So I have a supplier and I'm going to be now saying, run this on the thread pool based on the key. So this is where hashcode mod thread size has to be taken into consideration.

This is a very important line. Do this task in this particular thread. This is for the ordering. So the same has to be done for set. Now we have get and set running on particular threads based on the key that they have. One of the things that we need to do is update the entries that we have in the expiry queue and priority queue.

Whenever there is a set function called, if the key already exists in the cache (the map contains that key) then we need to clean the cache because there's a new set operation happening. So this is as good as changing the insertion time and everything else. It's like a new record. So we need to kick these entries out, map.remove this key. We also need to remove from the expiry queue this key. Remove operation is going to be giving us the record that we need to fix.

And again, we come back to this point. Now we are sure that the map actually does not contain the key because you have kicked it out right here. So I need to get rid of this. Only if the map size is greater than the threshold size, do we need to see whether we have an LRU or LFU policy. In fact, this is also the case whenever you're doing a get, because even in a get, when you're doing addToCache, like how do you addToCache? You might need a replacement algorithm.

When you're adding to cache. If someone says get, and you pull that entry from the database, then you just can't addToCache without checking for the size of the cache. So this is a far more generic operation. In fact, this should be done anytime there is an addToCache. Before addToCache. This bit has to be done here.

And that takes care of most of the checks that have to be done in these methods. Persistence algorithm seems fine. Over here, we have expiry being updated, but why not priorities? Whenever we are adding to our cache, shouldn't we be updating the priorities also. So in a get that is fine, that is forcibly being updated. So there's two places where things are fine in the third one and the fourth one, we are not updating priorities, which is not what I want.

When I'm seeing set in the cache I want the priorities, not just expiries, to be updated. So I think what I'll do is: in the get method, things are fine, but I can have a little bit of duplication here, which makes sense. Technically, the priority has changed. The number of times you've accessed this record has changed. Now we are updating both the priority and the expiry on all instances of addToCache being called. So both expiries and priority is being updated.

The only thing to fix is right here. If you have an overflow of the cache. And I don't think we need to check what is the eviction algorithm. In fact, the eviction algorithm should not be seen in the cache. It should be completely generic. So I don't even want this eviction algorithm as a field.

I just want to define my priority queue. And that's it. So over here, when there is an overflow, I want my priority queue to decide which entry to kick out. PriorityQueue.Poll() the first entry. Even before this, I should be polling the expiry queue because the only time I want to remove entries is if I don't have expired records. So before the priority queue, I should check the expiry queue.

Yeah. Poll first entry. If this is null, if the expired record is null, then I have a problem. I keep removing expired records, keep kicking stuff out. This is not a final variable. All I'm doing is I'm taking expired records and kicking them out of the queue.

And I also need to remove this entry from the priority queue. So remove for this object, this expired record. Get access details should do the job here. And I can't just do that because it's going to give me a list of all records, which have expired. So I'm going to remove all of the entries in this. So expired record dot get value.

So that is expired records. And I need to remove all records in that. So for every record in the expiry records, please remove all records in the priority queue for that. And there is another thing. I have the expired records here, supposedly, but what is the guarantee that this entry has actually expired? Because it may be that this queue is going to be storing all the entries in ascending order in terms of their load times, but maybe the first load time itself is not expired.

Right? So if the expired record is not null and the expiredRecord.get key, that is the timestamp, is less than the current timestamp - expiryTime. Okay, we've done this about, so what we are doing is we are just checking: If the record has actually expired every time we are adding to the cache, what we are doing is we are seeing if it has exceeded a threshold size. Before that we are doing something called lazy evictions. So till the cache is full, don't care about expired records. This is not going to affect our get method.

Whenever a person is trying to get a record, if it is already expired, that's fine. Because every time we are actually pulling from the map, we are going to be seeing if it is already expired or not. And that's a good thing. So we are safe on both counts. Finally, we are forced: If this is not the case, then we are forced to check. If the map size is still greater than equal to the threshold size, despite removing all possible expired records we still have a map which is full.

It's going to overflow. We are going to be going to the priority queue saying "Get me the first entry". We are going to be saying that those are the records that are low priority over here. If I remove all the records, it's overkill. I just need to remove one record, right? So I can pick any actually.

So the get value.stream.any is fine. So this is going to give me an optional record. There has to be one record. I mean, that's a guarantee because the priority queue definitely has a record. That's the reason why we have gone to a threshold size, right? And I can say map.remove this record.

This is saying that the map is taking in a type of record. So what's the issue here? 'Remove' removes on a key. So I shouldn't actually use a record. I should be having the key to remove from this map. So that is a small problem.

But one of the things about the priority queue is that: do I really need to store the records in the priority queue? Or do I need to store the keys in the priority queue? I think I can store keys. Like, am I actually using the record anywhere else? So when I say get, add a record, remove a record, get access details. No, these are all removes.

So it seems to me that I can just store a list of keys, right. And let's just see if this works. I haven't ever done a get on the value that the priority queue is giving me except right now with the find any. So that's the place where I actually need to check. And finally, we need to update the expiry queue by kicking out the entry for this timestamp. Okay.

So there's a few things over here. First of all, this is a low priority record. It's a low priority key. So that is kicked out of the map. I need the timestamp for that. So removed record is over here.

I need the insertion time for that. So removedRecord.getLoadTime. But I don't want to kick out all entries in that, do I? No. Potentially I will be kicking out all entries having the same timestamp. So I just want that record.

So, get that and remove this record. Okay. That's number one. And number two is in the priority queue. I have done the poll first entry, which is not a good idea. I want to get the first entry.

In the first entry I'm going to be, amongst the values, kicking out this key. Low priority key is going to be removed from that.

## Code #4: Hot loading and Request Collapsing

Type: Video · Length: 9 min 28 s

### Resources

[https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache](https://github.com/coding-parrot/Low-Level-Design/tree/master/distributed-cache)

### Transcript

So now most of the requirements are taken care of. There was one thing that we talked about, which is hot loading. And another thing was request collapsing. Let's target hot loading first because that's quite easy. Let's say that the creator of the cache knows that certain entries should be loaded onto the cache immediately. So we have a list of keys, which we would like to load into the cache immediately.

And what we need to do is we actually need to go and pull from the database, these entries. So for every key in the list of keys that we have, I'm going to be using the data source to get all the values for each key, and then I'm going to be persisting it in the map. So I'll directly, actually addToCache will be better because it takes care of everything internally. It takes care of the expiry queue, the priority queue, all data structure handling is going to be taken care of here itself. And I just pass in the key with the value. This is hot loading.

The other feature, which is really important is request collapsing. Like we said, we don't want to be making multiple network calls for a single key. For request collapsing we can use the same data structure of a Future. Let's say 3 clients make a request for an object A. The value of this object is going to be the same in the database. We are expecting that when the three requests come in, the value does not change.

All three read operations should give you the same result, but what's going to happen is that when your cache gets this request, the first request it's going to search in the cache, not find the result and make a database query. When B's read operation comes in, it says the same thing. Search the cache, not find the result, make a database query. And so instead of making just one database query, you're going to be making three. This isn't great because it's going to be making multiple IO calls, which is going to be choking up your bandwidth and also going to be taking time for every request to complete. So instead, what we do is return a reference for a future to all three callers.

And once the future completes, all three callers will get the result. At the same time, we just made a single IO call and served multiple requests. This is called request collapsing. I'm going to be making a single future, which is going to be querying the database once. And by doing this, I'm avoiding making multiple API calls. Let's see what are the things that change.

The record that we have now is no longer a direct value. It's actually a record future. And then this can be assigned to result. You simply return these two values. And then finally you say that thenCompose during the function.Identity. Record.getLoadTime.

So the record is no longer, as we said, a record. It's a record future. Set method also looks fine. We have the removed record's load time. The thing about this is that the map threshold size is greater. And the record that we have removed must have definitely been completed.

Because if it wasn't completed, then why did we just remove it from the cache? So do we need to check for all the entries which have actually completed in this cache? That's a good question. In the expiry queue. If we have found a record, which has expired, right? That means that that future has definitely completed by now, the record was pushed into the map, and that is the only time when the expiry queue will have entries.

That's the time this actually works. addToCache doesn't need to check this. We are sure to get a load tank. So I'm just going to say, toCompleteableFuture and join. So this is definitely going to give us a value, which is not empty. The reason being that this future is definitely completed.

This is actually weird. It's not making much sense. Maybe we can fix this. addToCache is saying that you have a key and a value. That's the only time you come to me and I'm going to be pushing into this map, a completable future of that. So why would you push in a completable future once the record has been completed?

So this part is not making sense. Instead of doing this, we should be expecting the addToCache method to get this. So the result, future as a parameter. So addTocache waits for that to complete, and then we need to update its expiry time and all this stuff. So I'm not going to be taking a key and a value. I'm going to be actually taking key and a completable future.

And I just need the value. I don't need the entire record. The record will be created here. The value will be either pulled out of the database or is already there in the set method. So this is fine. In the value future, once the value has been figured out, thenApply.

I have the value in my hand, and that's when I create this record. The map needs to add this future immediately. So this will be running in parallel while the map takes the container and puts it over here. So value future is over here. And this can return me the record that I have right here. AddToCache is now returning type of CompletableFuture of record value.

The reason I'm doing this, as we said is because whenever you're adding to a cache, you're actually saying "Please add a place holder for that value". When this function is complete, that placeholder is actually going to have a value. Before that it's going to have something like a waiting flag. So conceptually, that is what it is. And there are certain compilation errors here. Let's see if we can fix them one by one.

We said, data source, get this key and then add it to the cache. So addToCache is taking a CompletableFuture of type VALUE. Get is actually giving us that CompletableFuture of type value. So let's get rid of all of this stuff and just say, this is what you need to do. It cleans up the code a lot. You just need to pass in, addToCache.

Similarly, here we can just get rid of this. So as you've seen, the code is getting simpler, which is a good indicator that the refactoring you did was useful. I can just pass in CompletableFuture of value. This is good because the persistence algorithm is write-back. For write-through there is a tricky bit. We want this to complete first and then add a CompletableFuture of type value here.

So we can do that directly. Or we can tell that cache that" Hey, addToCache. First, you persist.". That is a task you need to do, right? We can pass in any general task to addToCache flow. Once you have completed this task of persistence, then return us a value.

thenAccept here with nothingness being returned. At this point, our cache is reasonably advanced. We have two public APIs of get and set and the CRUD operations which are happening internally are taken care of. We have multiple eviction algorithms like LRU and LFU. That's a big deal because you are also giving them some sort of expiration time for every cache entry and to make it efficient. What you did is you used multiple data structures in the same object in the cache evict entries quickly, whether it is on expiration time, or it is on frequency of usage, you also have multiple fetch algorithms like write-back and write-through.

You're returning futures, which is making this asynchronous. You have request collapsing. And the only remaining requirement of event loading is rather simple. So I have that in the final code, but if you have any doubts, do let me know. All we need to do is just go to the get and set. Methods and check: "Where are the events going to get triggered?" So if you're taking an element out that is an eviction, and when you're loading an element in that's when you have alerts.

So addToCache, as you can expect, is going to have a load entry. And whenever it needs to kick out stuff, because the threshold size is exceeded, you're going to be putting that event. You're going to be logging that event over here. Let's head to testing now because all of the core and non-core requirements have been taken care of. There might also be some bugs in the code existing. So let's see how we can fix that.

## Sequence Diagram

Type: File

File: assets/eventbus.pdf

## Thread assignment

Type: File

## Threads on multiple cores

Type: File
