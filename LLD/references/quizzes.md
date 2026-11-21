# Quizzes

Every quiz in the course with its answers. Correct options are marked **(correct)**.

## Payment Tracking: Quiz #1

### Why did we use a heap instead of a balanced binary search tree here?

- The BST has slower insertion time compared to a heap.
- The BST has a slower polling (top-element-retreival) time than a heap. **(correct)**
- The BST needs more memory.
- The heap is the only data structure with polling support.

Why: Worst case time complexity to find largest element in BST is O(log n) whereas it is O(1) in a max heap.

### We continue the process of eliminating the topmost elements in both heaps till one of them is empty. What is the state of the other heap?

- It is also empty, since the sum of balances is zero. **(correct)**
- It may have some elements remaining, which we discard.
- It may have some elements remaining, which will be settled by its original user.
- It can have remaining elements only if it is part of a group.

Why: Two heaps store the amount paid and owed. Since the amount paid = amount owed the other heap should also be 0.

### The product has a new requirement: Every user in a group has a role of 'admin' or 'member'. Users are also expected to quickly view which groups they are part of. What would you do to implement these requests?

- Horizontally partition the group table on group_id.
- Denormalize/Break the groups table into two tables of group_metadata and group_members(group_id,user_id,group_role). **(correct)**
- Add a list of groups to the user object, where this user is an admin. The rest are understood to be 'member' roles.
- Change the list of users in a the group table to a map of users to roles.

Why: Since we want to speed up queries to view groups we can make a separate table to store information about group members and roles. This process of storing redundant data to optimize query processing is called denormalization.

## Payment Tracking: Quiz #2

### What is the benefit of having a read-write lock on the user-balance map?

- The lock can be acquired faster than creating an object.
- The lock doesn't not allow reading stale data. **(correct)**
- The lock avoids creating multiple objects in memory. **(correct)**
- The semantics of locking are better understood as compared to object creation.

Why: A lock blocks the client from accessing the locked object during an update. This prevents data inconsistency and illegal response. If we do not use lock we need to create a new object while updating balances.

### What is the benefit of having the user-balance map as an immutable object?

- It does not block readers from reading data. This is useful when you don't mind some degree of staleness in the data. **(correct)**
- The constructor code of user-balance map will be cached, resulting in faster read times.
- The semantics of object creation are better understood as compared to that of locking.

Why: By creating a new object we won't be needing write lock so users can view data that is consistent but slightly old.

### Inhertiance vs Composition, which of the following are true?

- Inheritance is useful for 'is a' relationships. Composition is useful for 'has a' relationships. **(correct)**
- Inheritance is useful for 'has a' relationships. Composition is useful for 'is a' relationships.
- Both can be used for either.
- Neither inheritance nor composition are used for implementing object relationships.

Why: In 'is a' relationship one class inherits another class. In 'has a' relationship object of one class references object of another class. For example, a fish 'is a' marine animal, and it 'has a' pair of gills.

## Event Bus: Quiz #1

### Which of the following is not an advantage of using a publisher-subscriber model?

- It decouples creators from consumers and allows the parties to operate at different emissions or collection rates.
- Subscribers have to consume at a rate higher than emission rate, to avoid queue overflow. This ensures they keep their systems performant. **(correct)**
- It provides flexible APIs to rate limit and preprocess event notifications.
- Subscribers have causal ordering, at-least once semantics and other engineering guarentees. It avoids them from reinventing the wheel.

Why: We should not depend on the number of requests by the client to make the system performant. We should enforce good behaviour in our systems.

### Which of the following is not a reason for using thread assigned tasks?

- Load balancing between threads **(correct)**
- Concurrency
- Memory savings **(correct)**
- Causal ordering

Why: Thread allows us to execute two or more tasks in parellel (concurrency). If order of topics do not matter then multiple threads can run on multiple topics (causal ordering). Load balancing and memory are related to threads.

### What does causal ordering mean?

- Process tasks in order of their causes
- Order asks by timestamp
- Order tasks as per the thread they are assigned to
- Process tasks in any order as long as for any two processes A and B, if the result of their execution depends on the order of their execution, A and B are executed in order. **(correct)**

Why: If two tasks do not affect each other then they can be processed in any order. But if their results affect each other then they must be processed in order.

### Why did we use threads instead of timestamps?

- Vector clocks cannot be relied upon
- We can simplify our system by assigning causal tasks to different executors. **(correct)**
- Timers require heavy processing
- The Network time protocol is an inefficient protocol.

Why: To order the tasks using timestamps we need to synchronize the clocks or use vector clocks both of which are complicated. By using threads we can run tasks concurrently and also maintain ordering (causal ordering).

## Event Bus: Quiz #2

### Why do we use wrappers instead of raw datatypes?

- Wrappers require less memory than raw datatypes.
- Wrappers can simplify compiler operations, reducing compile and deploy time.
- Wrappers provide type safety. **(correct)**
- Wrappers can make code more readable. **(correct)**

Why: Wrappers don't reduce compile or deploy time, nor are they memory efficient when compared to raw datatypes. They make the code more readable and make it easy to refactor code.

### What makes requests casually ordered in our event bus?

- KeyedExecutor **(correct)**
- ConcurrentHashMap
- Public APIs
- Event datatypes

Why: KeyedExecutor class accepts hash of the tasks and assigns them to the threads from a threadpool.

### What would be a good way to refactor the event bus?

- A complex object of event timestamp to Event ID.
- Create a complex object of all the wrappers.
- All maps with topic as key condensed to a single map of topic to complex object. **(correct)**

Why: By making a wrapper class of "Topic" for topic ID we can catch most errors during compilation.

### What does timeout mean in the retry algorithm?

- After the specified time, the bus will timeout the event.
- Wait for the specified time before retry. **(correct)**
- The timer in the event bus will timeout after the specified interval.
- A timeout event will be sent to the bus after the specified interval.

Why: Timeout is the amount of time thread has to wait before retrying. We achieve this by putting the threads to sleep. However there is maximum number of retries after which the event is sent to dead letter queue.

## Event Bus: Quiz #3

### What methods must be tested before signing off code?

- Public APIs **(correct)**
- Private methods
- Methods with network calls
- Methods with library calls

Why: API endpoints that are exposed to public should be tested before shipping the code.

### Concurrent code usually faces the following issues:

- Concurrent code execution needs multiple threads, which may not be supported by the OS.
- Operations could cause the compiler to crash.
- The OS threads may write to application memory, resulting in inconsistent state.
- Process completion and invocation may not be in the same order. **(correct)**

Why: Running concurrent code can lead to race conditions (tasks are not processed in orders) which leads to unpredictable outcomes.

### "Logging is not a substitute for testing". What does this statement imply?

- Logs cannot pinpoint root failure causes, unlike tests.
- Logging code profusely is not a viable alternative to testing an application thoroughly. **(correct)**
- Certain objects cannot be logged without testing them first.
- Logs are insufficient for testing an application end to end.

Why: Writing tests allow us to find errors in the code early on. Logging events helps us to understand complex systems and diagnose problems later on.

## Quiz 1

### What are the possible drawbacks of trying to rate limit a distributed service with 100% accuracy?

- A rate limiter with 100% accuracy would complicate reasoning about request paths inside the system.
- A rate limiter with 100% accuracy would be slow due to synchronizations between services and the rate limiter. **(correct)**
- A rate limiter with 100% accuracy would make the system consume large amounts of memory.
- We cannot create a rate limiter with 100% accuracy since that would be a single point of failure. **(correct)**

Why: Rate limiting with 100% accuracy requires updating request statistics data synchronously. This will lead to a bottleneck which is both slowing down our services and is a single point of failure.

### Writing clients in multiple languages is tedious and prone to error. What would you do to make the rate limiter easily usable by other teams?

- and expecting the project to be a success in the public domain is a risk (it may also not be wise for a company to open source its core projects).
- Make the API as simple as possible with well defined errors documentation and support so external teams can easily use it. **(correct)**
- Suggest a code generation tool like Github CoPilot or ChatGPT to build API connectors using their preferred programming language.
- Use a framework like Thrift to autogenerate code with type safety. **(correct)**
- Make the Service APIs open source so the developer community can contribute to creating clients in different languages.

Why: AI code generators tend to make mistakes when writing code which may be costly in production. Thrift is a well defined framework for API code generation. Simplfying APIs with clear behaviors helps onboard clients quickly. Open source projects do not have hard deadlines enforceable by your team

### When exactly does a callback get triggered?

- Immediately after it is called.
- Its execution cannot be determined since it is equivalent to the halting problem.
- After an event is passed to the callback manager.
- When a future completes whether successful or having failed. **(correct)**

Why: A callback is triggered when its corresponding future object completes or is aborted. You may think of a callback function as a try/catch block in Java that is computed asynchronously.

### What would be a problem of over engineering the rate limiter?

- It will be ill equipped to handle future requirements.
- The rate limiter will not be extensible to future modifications.
- The rate limiter may become cluttered with features that are not needed. **(correct)**
- The rate limiter may face performance issues since it offers many features.

Why: Over-engineering means designing and building for features that are unlikely to come up (premature optimizations for extensibility or performance). The major drawback of over-engineering is wasted developer effort and large test times.

### Why do we split the models and requests into different packages?

- We do not want classes with different clearances in the same package because doing so will lead to secuirity risks.
- Classes are split into different packages to avoid a single point of failure in case code is partially compiled.
- We split different classes into relevant packages and force them to interact using intermediate bridging packages to isolate concerns.
- We use standard coding patterns which split different types of dode objects into different packages to ease developer onboarding. **(correct)**
- We split classes into different packages and then use customised compression algorithms on each of them to optimise code builds.

Why: Developer onboarding is a large cost for companies and a big part of it is walking through existing code. We simplify onboarding problems by setting coding standards and package structures .

## The Big Exam

### We can ensure data consistency for concurrent reads and writes by

- Taking read locks while updating data
- Hashing the read and write requests
- Making the data(objects) immutable **(correct)**
- None of the options

Why: Creating a new object with the updated data and returning it's reference ensure that objects are updated concurrently. Also, we can take an EXCLUSIVE lock on the object before updating it. A read lock will be insufficient, since it allows readers to read data while it is being updated.

### Which of the following statement(s) is/are true

- Using locks for data consistency is more memory efficient than immutable objects
- Making objects immutable reduces contention during updates
- A heap finds it's largest value faster than a binary search tree
- All of the above **(correct)**

Why: By using lock we don’t need to make a new object so it is memory efficient. When making the objects immutable we make a copy of object until the update operation is completed. So latency is less. Finding the maximum element in BST can have complexity of O(number of elements) (BST can be unbalances). But in heap it is O(1)

### One disadvantage of using locks for implementing read your own write policy in cache is ___

- Memory requirement is very high
- Data might be locked for indefinite time **(correct)**
- It makes the data inconsistent
- All of the above

Why: If the client that sets the lock dies then the data cannot be accessed by other users for indefinite amount of time. Even with timeouts, there may also be circular dependency on locks, leading to a deadlock.

### What are the disadvantages of using Write-Back Policy?

- It is less efficient compared to write through policy
- There is a chance of data loss **(correct)**
- Users may get stale data **(correct)**
- It can only be used in in-memory cache

Why: Write-Back policy we keep the values in the cache and then flush all the values to the database at once, so it is more efficient. The updated value is stored in the cache but before the cache can flush it to database, if there is power loss, that data is lost.

### Hot loading is when we ___

- Condense all requests into one request, make a data query and duplicate the response to clients.
- Add logs whenever there is an event like read, write etc.
- restart the server when there is a failure
- prefetch the data and store it in the cache **(correct)**

Why: We pre fetch the data (when the system is starting up) and store it in the cache before they are actually needed, to avoid a read miss. Low read misses translate to fast response times.

### We implement asynchronous processing in caches because

- It prevents thread blocking **(correct)**
- It prevents data corruption
- It prevents head of line blocking **(correct)**
- None of the options

Why: In synchronus processing client blocks the socket (and the thread) until it gets the response. If all the requests sent by client require block calls, then there are no sockets left for the newer requests to be read. The newer requests have to wait, which increases average response time. This is called head of line blocking.

### We ensure each event is processed exactly once in an event bus by

- Hashing the event ID and using the hash value to assign it to a thread
- Pushing the event only once in the event bus
- Pushing the event in an idempotent event bus with an unique ID until we get acknowledgement. **(correct)**
- None of the options

Why: If we push the event only once and the subscriber fails then the event is not processed. So in this case event is processes at most once. To process it exactly once we push the event at least once with an unique ID. If the event bus receives an event ID that was already published then it will accept it and send acknowledgment but it will not process the event again.

### Which of the following statement(s) is/are true

- On failing to process an event, we push it to dead letter queue
- Exponential backoff algorithm gives time for recipient services to recover from overload
- We only retry a request if the exception is an Retryable exception
- All statements are true **(correct)**

Why: Dead letter queue has all events that were not processed, we can pull events from the dead letter queue and diagnose those events later. In exponential backoff, instead of retrying after waiting for a fixed amount of time, we increase the waiting time between retries after each retry failure. This gives the service some breathing time. If the exception is not of type Retryable exception then no matter how many retries we do it will always fail.

### What are the advantage(s) of using threads for ordering compared to timestamps

- In timestamp based approach if the clocks of components are different then it can mess up ordering **(correct)**
- It leads to frequent data loss.
- Maintaining ordering in timestamp based approach is more complex compared to thread based approach **(correct)**
- There are no advantages

Why: Some components might be faster/slower than others and it can mess up the ordering. Check the example at https://get.interviewready.io/blog/eventbus . In timestamp based approach we can only have strict ordering, but in thread based approach we can assign events (that are to be processed in order) to the same thread. This way we can process the required events in order. Vector clocks can be used for event based ordering, but are conceptually complex.
