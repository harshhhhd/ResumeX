# 1. Low Level Design: Payment Tracking App like Splitwise

## Problem Statement

Type: Video · Length: 3 min 39 s

### Lesson notes

This is the problem statement.
We are to design the low level architecture of a payment tracking app. Here are some of it's features:

- Adding expenses

- Editing expenses

- Settling expenses

- Adding group expenses. Settling them in a simplified way.

- Adding comments to expenses

- Track all state change activity using an activity log.

Out of these, we identify the first 4 as core to a payment tracking app. These features will be implemented in the remaining videos of the chapter.

### Transcript

Hey guys, this is GKCS and we will be talking about low-level design now. This is the first video in the low level design series. So we are trying to design an app which, like Splitwise, helps you track your expenses in a group or amongst a set of individuals. And this is a low level design thing, which means that the question would be put forward to you such that you have to decide the requirements and then convert these requirements to code. Now, of course, you are not expected to design Splitwise entirely. That would be insane in just two hours, but there will be some specific points that you are supposed to code out.

So let's see how we can do that. Firstly, let's set the requirements for Splitwise. This is very similar to the high level design videos also. You can add an expense to the application. You can register the expense. 2) is you can edit this expense.

The third thing to note is that in Splitwise, we can actually settle expenses. So this is not exactly editing an expense. Settling expenses are a little different because you keep the older expense record. You don't change it, but you mark as settled. We call that as settling an expense or settle expense. Now, the other thing about Splitwise is that it allows you to register expenses as group expenses.

So there's different groups in Splitwise having their own expenses, and you can settle expenses for groups. In a group, you end up making multiple expenses. So if you go on a trip for five days, you might make multiple expenses and you register those in the app. Add group expense. Edit and settle. A owes B 10 rupees.

B owes C 20 rupees. If these are the only two expenses in the group, then it would be easier if you remove this transitive relationship and you said B pay C 10 rupees, and A can directly pay C 10 rupees. You can also think of a use case where C owes A 10 rupees. In that case, what would happen is this entire relationship should be removed. And B owes C 10 is the result of these three transactions. So we have simplified.

That's what the feature is, simplify expenses. And that's what we are going to be allowing here. So settle in a simplified manner. And if they don't choose, then they can always go the old transitive way. Apart from all this, there's a few other features that Splitwise has, which are not core to the algorithmic problem or the design problem that you have. One is comments, let's say there's a expense registered for 10 rupees.

The other person doesn't agree to it. So they write a comment and then you can edit. So it gives you a lot of transparency. And the final one is an activity log, which is very interesting. Everything in Splitwise is going to be recorded. So if you, if you have any kind of update operation, create operation, that is going to be shown as a log to the relevant users.

You can think, like in high level design, you think about some sort of publisher subscriber model, where the subscribers are people who are interested in this expense and we'll see whether we can get to this. But know that this itself is a one hour task. If you're thinking about coding it out. The core thing though, in this app are the first four features. Expenses, group expenses, simplified expenses. That is the core of this app, and it is best to target these features.

## Defining objects states and behaviors

Type: Video · Length: 10 min 57 s

### Lesson notes

We define the objects in our system with a 'State Based Approach'.
We then find a way to show user balances for a group: summing group expenses per user.
When finding the overall balances in a group, why didn't we use a "group by" clause to sum all the user balances from the expense table?
The number of users in a group is variable. We could try to denormalize the expenses table into two tables of balances and expense_info:
balances:
expense_id
user_id
balance
paid
owes

expense_info:
id
title
desc
imageUrl
group_id

On a 'getGroupExpenses' request for group id=123, we fire the database query:
 'select user_id, sum(balance) from balances where expense_id in (select id from expense where group_id = '123') group by user_id'
This requires a nested query, which could perform poorly.
However, this style of querying will perform very well for finding an individual user's expenses.
Depending on what you are trying to optimize, you may not may not denormalize the tables.

### Transcript

We now need to design the SplitWise app all the way down to code. So there's a behavior driven approach. And the other one is a state based approach. What are the major differences? If you think about the high level design architecture that we do, usually I'm more comfortable starting with requirements. So I think about the APIs, which are going to be here.

I think about which services need to serve those APIs. And then in the service itself, when I draw those microservices, I say that "Hey, this has a database which will contain the state". So that is a behaviour driven approach, where you think about what the user needs to do and how my system needs to behave, to satisfy these requirements. On the other hand, you can think about ER diagrams. You first define what kind of tables you need to keep, you define what kind of indexes you'll need. And based on the query patterns, you come up with the database APIs.

These APS will be called by services. And finally, then you think about the end user. For Low level design, it seems like starting with the table approache is a little easier. The reason being that, because in this kind of a design, you really need to think about the code that you'll be writing. So this is far more specific than the behaviours, but you can choose any approach. In this particular case, I'm using the ER diagram approach.

Here an example is very useful. Let's say you go to a restaurant with five friends, so there's total 6 people. And at the end of your meal, two people end up paying the bill. So they've divided amongst themselves by two payers. If you call the users A, B, C, D, E, and F. And let me say A and B paid the bill, which is 600, 600.

So this is the paid amount. How much do people owe? A was 200. B owes 200. And everyone else also owes 200. But they have paid 0.

The balances of these guys are respectively: if you just subtract, you get 400 for A and B, but for the rest of the guys, you get -200. Now looking at this table, imagine if B has actually ordered all the expensive stuff. So they owe actually 400 rupees and C and E didn't order much. So they owe only hundred rupees. This is also possible. And in that case, the balances change.

B now just needs to get 200 back and C and E owe $100. This is a complicated transaction, different people owe different amounts and have paid different amounts. And therefore they have different balances. And after you have the balances, you have to actually suggest all the users where to get their money from. So A is probably going to get it from C, D and E. And F can directly pay B.

What we can see is that expense is an object in itself. It's going to be containing these guys, which is users. So there's a list of users that we need. Then we are thinking about balances. So these are the balances that you have in this expense, and they are closely coupled. So this is not going to be two lists because there's a, there's a direct coupling here.

You can actually keep a map of user to balance in an expense. Apart from the score state, you also need to have some metadata. One is the, let's say the title of the expense. This helps you understand why this expense was made. You can have a timestamp, you can add an image. You can have a set of comments, etc.

This is all metadata. But the core of the expenses, this map, which user owes how much for this expense. Let's dive a little deeper into these two objects. These two are not going to be simple objects, user and balance. The user: there's a user ID. There is the image URL.

You can probably write your own bio, etc. Similarly balance: When you're paying an amount you're not paying in integers, you're actually having something implicit there. And that is the currency of the expense. Balance is taken care of. The user is taken care of. That means this map has been defined well, and this expense object has been defined well.

That means that if you get an API call to add an expense, we can do that. We just need this information to actually persist this in the database. 'addExpenses' is taken care of. 'editExpenses': Very similar. What you do is you have an expense ID. This is something that we didn't take into consideration, but the expense will have an ID.

Also using this ID, you can actually change the map of balances to users. You can change the image. You can change the title and so on. So the metadata can change. The third point of settle expense is something like a boolean flag. Whether this expense is active or not, whether it's going to be counted or not.

So what you can do is: You can actually keep a flag here. Settled, if this is true, you don't take this expense into consideration. When calculating the balances of users settle expense is also fine. You can, this is basically an edit of the expense. You just settle by changing this flag value. Now we come to groups.

Groups are very similar to users in the sense that they have an ID, they have a description, an imageUrl (instead of a bio, they can have a description: "Hey, we went on this trip!"). So you can have a title of the group also. And of course you have the list of users who are actually in this group. The other thing about a group is that you can Mark an expense as part of a group. So do you want to store a list of expenses in a group, or do you want to store "This expense belongs to which group?" over here. So that'll have a group ID.

And over here, your engineering low level design skills, come in. You need to think about what defines a group. An ID, yes. That is part of a group. The image is solely belonging to this group. Description, title.

These are all important. What else defines the group? The user, the list of users. Okay. The list of expenses. Does this define the group?

No, no. The group can be defined apart from the list of expenses. So ideally you don't want this. First of all, there's going to be a lot of expenses in this group and it might populate, I mean, pollute this object. So that's the consideration I have in the back of my head. But even if you think about it in a very object oriented principle, does this belong here?

No, you can have a separate object called group expenses, which is going to have a list of expenses and the group ID. I'm keeping some sort of redundant data because when you look at an expense, you sometimes want to say "Hey, do you belong to any group? And if you do then, which one?" So I'm going to be storing this information. This is not 3rd degree normalised. But in real time production systems, this makes sense. So that actually takes care of adding a group.

We can do that with this object. This is the model, adding a group expense. All you need to do is, in this expense, you mentioned the group ID and it is automatically linked to this group. This ID and this ID are the same. So group expenses is taken care of. Editing.

It will be the same as editing a normal expense. So we actually don't need to mention that here separately. And we finally have "How do you settle in a simplified fashion and non simplified fashion if the user so chooses?" How do you settle? Let's take an example of a trip that A, B and C made. And over there what's happened is there are three expenses which ended up giving a set of balances for every user. So in the first expense, A was left with the balance of +10, B +20, and C with -30.

Now every expense has to sum to zero. That is one constraint. in the system. We can check that in the validation itself. When we are adding an expense. Similarly, the balance 2 is -50, 10, 40 and balance 3 is 90, 0, -90.

So B actually hasn't been part of this particular expense. What is the total sum that is owed by every user? You just need to sum these balances, assuming that they are of the same currency. You're keeping it simple. Now for the first user: 50 rupees in total. Over here, you have +30, and over here, you should have -80.

And you can confirm from that here you have --120, and then +40, which is -80. So these are the total balances that every user has in this group. So what we need to do is we need to sum all the balances that a user has. So every time a person says, getGroupBalances in which they pass a group ID. What happens is in memory, you're going to pull out all the expenses, all objects that belong to this group in an SQL query, you would say "select * from the expense table where the group ID is this". You pull those out, you get these balances.

In memory, you're going to be taking all balances with respect to a user, summing them up and getting their total balances. Then we need to return this in the API. A map of the user to their balance. And for the final point of actually suggesting payments like A and B should take 50 and 30 rupees respectively from C. GetPaymentGraph for a particular group ID is what we need to return for the group. And the same thing will happen for an expense.

Even in an expense, you basically have a graph that A pays B, B pays C, so on and so forth. The way you're going to get that is by taking the final balance. And just telling that A is at +10, you need to take 10 rupees from C and B again, at +20. You need to take 20 rupees from C, so that needs to happen somehow. And we need to calculate that. Let's see how that'll happen.

## Simplified Balances algorithm

Type: Video · Length: 5 min 35 s

### Lesson notes

We discusse the problem of settling balances between six users and designing a payment graph to minimize the number of transactions.

The approach involves taking the largest positive and negative balances and eliminating them by making a transaction between them.

The data structure used is a heap, and the greedy approach is not optimal but has some advantages. We also show that a simple approach may not always be the best solution with an example.

### Resources

Subset Sum Problem: [https://en.wikipedia.org/wiki/Subset_sum_problem](https://en.wikipedia.org/wiki/Subset_sum_problem)

### Transcript

So we have six users with us: A, B, C, D, E, and F. They have their balances, their final balances calculated by taking all expenses in a group that has been summed up to get these numbers. We're trying to design a payment graph. So the graph has six nodes. Six people exist here. Every edge is actually a call for money.

So A takes 90 rupees from E. That makes one edge in the graph. You want to minimise the number of edges. You want to minimise the number of transactions. So that life is simple. E, after paying 90 rupees, will have 10 rupees in the balance.

Where do they send it? Do they send it to D or do they send it to F because both of them have positive balances. Getting back to the origin scenario, where we have these six nodes, six people, and we need to settle their balances, which basically means that we need to draw edges from one node to another. And in total, we need to minimise the number of edges that we have in this graph to do that. We need a strategy. And initially let's go for a simple one.

Let's take the edge that we had from A to E and keep that. So we take 90 rupees from E and reduce E's balance to -10. While A is actually removed from this graph. Now, similarly, now we're going to take the largest positive balance and the largest negative balance, and we are going to be eliminating them using each other. So right now we have B at -70 and D at 80, we take 70 rupees from B, reduce B to 10, and D is removed from this graph. So at every point, what we are doing is we are doing one node.

And the two nodes that we're choosing to make this edge to make this transaction are the two largest in their respective sites. Both people who owed the most and people who need to get back the most. We follow the same strategy where C and F are now the largest two nodes in positive and negative side, F takes 40 from C, and both nodes are removed now. So this is a lucky instance where two nodes are equal. And similarly, after that, we are going to take the final two nodes D and E, and we can get rid of them in a single transaction. What we are seeing here is that initially we need to take these two pools of positive numbers and negative numbers, and then eliminate them one by one, by taking the largest two from each side.

So the data structure, which allows us to do this is a heap. Every time the top most element is going to be pulled out of the heaps. Whichever node survives (if there is any such node) is again pushed into the heap. So it will take its proper position. In Java the data structure which internally uses a heap is a priority queue. And that's what we'll be using later.

And this greedy approach is a sensible way to try to reduce the number of edges. It's not optimal though. So I'll just take an example. Let's take 80, 20, 20, 20, 20. You can have some other number, which is slightly larger: 25. And I'll just match that over here.

So you're seeing that this is equal to this, right? So that is four transactions and these two could cancel each other out. So that will be five transactions. That would be the minimum number of transactions required to satisfy these constraints. But the algorithm that we talked about is going to take 25 and cancel it out with 80. It's going to take the two biggest and then cancel them.

So you have 55 and 25 remaining in positive, and you have the four twenties remaining here. Result of transaction 2 is going to be 55 is going to be converted to 35 because you're going to take the two biggest again. And this is 35, 25, three 20 is remaining on this side. Transaction number three is going to bring this down to 15. You have two twenties here. Transaction four is going to bring this, the largest sum is now 25.

It's going to cancel out. So you're 5 and 15. You have just one 20 here. Transaction five, again, fights the largest two. You have 5 and 5 here. And transaction six is going to be the end of all this.

So the approach that we took is not optimal. The other small modification you can do is you can see that if two numbers are equal to each other in the two different sets, then you just cancel them altogether. Okay. That will be a single edge, but that is also not guaranteed to work because all you need to do is you need to convert this to a 23 and you have 1, 1 here. And again, you have the same issue. 23 is going to cancel out with these guys.

And the rest of their twenties and 1, 1 are going to be canceled over here. This could have been done in total in 7 transactions, but instead, we are going to take, if you work it out, it's going to take 8 transactions. Despite it not being optimal, this approach has some advantages. The first one being that it is simple to code, simple to think of. Also, the other thing about it is it is quite fast. Sorting numbers is quite easy.

On the other hand, if you're going to try to find pure blocks of numbers, which are satisfying each other, that's like a knapsack problem. Maybe through research, you can figure out a way which is optimal, but in an interview setting, it doesn't make much sense. So you coming up with a sensible algorithm is fine. If you're interested. In finding out how do we solve this problem exactly, like the right number of transactions, the minimum number of transactions, you can have a look at the subset sum problem. So you'll be doing this for every element.

You can read that in the description below, but over here, just for simplicity, we are going for a simple algorithm.

## Payment Tracking: Quiz #1

Type: Quiz

Questions and answers: see quizzes.md.

## APIs and coding requirements

Type: Video · Length: 5 min 32 s

### Transcript

The final thing to do before we get into coding is to notice the API is that you need. If there's any API, which is expensive, you can store it in a cache and return the response quickly. There are some data considerations like inconsistency, and when you need to evict from a cache, all that we have to take care of. But usually you're not asked to implement the cache also, when you are designing an entire system. The third thing is after you have this data being stored in memory, is there any possibility of concurrency? Finally, we go for testing.

We'll get into more detail over here when we come to this bit. But first let's attack the APIs. What are the APIs? We have getUser, getGroup, getExpense. These are simple APIs, which you don't need to code because if you are being asked an LLD question, the expectation is that these are extremely simple CRUD APIs. You're not expected to code extremely simple bits.

You are expected to code the algorithmically complex bits or things which have some nuance to them like concurrency or caching. So what do you need to cache in the system? You'll be more interested in caching things which are being accessed by many people, because you want to return those responses quickly. Data which is relevant to groups. GetGroupExpenses is an API that needs to be cached. Then getGroupPaymentGraph is another API, which needs to be cached.

So there's two APIs that we will be caching. Whenever you're updating a group expense, it could be that somebody has asked for a get group payment graph and somebody is updating the group at the same time. Is it possible that we show them inconsistent data? Let's assume that this is the map of users to balances that we have. So this is one expense A owes 10 rupees and B needs to get back 10 rupees. When you say edit expense, what do you need to do is you need to update these two balances.

If you try to do this one by one or even worse, if you tried to do this simultaneously, then what could happen is that a and B get the update operations. Let's say B's, update, operation executes first. And it changes its balance to five. But before his update can finish, you get a read operation. And this reads A's value as 10 and B's value as 5. So this is an inconsistent state.

If you see the sum of the two values is not 0. So the response will be an illegal or a meaningless response. To avoid this, we can do two things. One is take a lock on the object in which case, when you're writing, you'll take a write lock. And whenever a person is coming into read, they can't read the object till the right operation has finished. So we look into this in the later videos, but it's slightly easier approach is to treat A and B these two references pointing to 10, as a single object.

Now, whenever the person says update the user balance, instead of updating them one by one, we changed that to a create operation in which a new map, having A and B with balances -5 and +5 are created. Once this object has been created, we can make our reference point to this new object. Now, the benefit of this is that in case, in between, if you get a read operation, while this new object was being created, you still get sensible data. You get stale data. Maybe you get old data, which is 10 and 10. So actually it should have been 5 and 5, but that is better than getting a 10 and a five, which does not make sense in our application.

So immutable objects are giving us something called eventual consistency, which means that eventually you will get the data, which is the most current data. So one good way to tackle concurrency is to actually make objects, immutable. The group expenses and group payment graph need to have immutable objects inside them to make sure that they can be cached. And, at worst, we give them expired data. The API will return an old stale value, but it will not return an inconsistent value. So concurrency is taken care of caching is decided on these two APIs.

The API is we have decided will be these. The main two APIs are what we will be coding. And finally the testing bit. The testing bit will be unit testing. And we will be testing whether out payment graph is created correctly. But even to get to this bit, you'll need to write down all the objects, all the code that is required for getting a group payment graph.

So that includes the expense object, you need to code that you need to code the group object. You need to code the user object, everything. By the time you get here, by the time the code reaches here, all other previous requirements need to be taken care of. If you have a short interview, let's say one hour long, then by the time you come to this entire process, by the time you set everything up on the board and explain this to the interviewer, it's going to take you at least 35 minutes. And they're expecting you to take your time to figure things out. It's not going to be a well-prepared speech by you.

You're going to think on the spot. So that's not going to be easy. It's going to take you around 35 minutes, according to me. The remaining 25 minutes in the interview needs to be spent first on the critical problems that is this thing, and to get here, of course, you will be defining the objects and their behaviours.

Code: assets/code/splitwise-code/

## Payment Tracking: Quiz #2

Type: Quiz

Questions and answers: see quizzes.md.

## Low Level Design

Type: Video · Length: 3 min 24 s

### Transcript

The final step before we start writing code is to think about the architecture of our system. This is similar to the high level design that we have done. We have three classes, group service, expense service, and user service. So each of them will have their own tables. I have drawn them as databases, but they are individual tables, which will be storing information relevant to those services. You're not expected to code all this out.

So you can just mock this. In our code when we'll be calling this method, which is the get group payment graph. We actually query the group service, and we need to pass two parameters here, the group ID and the user ID. The group ID, of course, because you want to know which payments are relevant to that particular group and the user ID to authenticate that the person who is making this call actually belongs to the group. So if I make a call to a group I don't belong to, I'll be rejected once the call reaches the group service. It pulls from its own database tables information relevant to this group and checks whether I belong to this group.

If I do, it goes to the expense service and makes the call of getGroupExpenses. Expense service pulls out all data relevant to this group from its own database. And returns that. Like we said, we can take all of these expenses and then convert them to individual balances per user. We just need to sum all the balances per expense in the group. Finally, the group service calls the get payment graph method in the expense service.

So even for individual expenses, you can get the payment graph for that expense. The result of this is returned to the caller. So this is the step by step process we have. First, we define the objects. When you're writing code, they are looking for you to define the objects and the behaviours really well in any system. The reason being that once you have defined the objects clearly, you have represented the problem clearly, it's easier to solve.

Make sure that they are named well. Second would be composition. So if you have a complex object, you don't want to be setting like 50 fields over there. You want to be breaking it into smaller objects and then composing this large object with that. So we talked about an expense being a composition of user balance and its metadata. So you want to see an object being broken down to small objects, each of which are complex in themselves, but the overall complexity is reduced when you abstract them out to objects.

If you have any sort of inheritance, then be very careful. Usually in a LLD system design interview, of course you can have inheritance, but inheritance should be directly from interfaces in an LLD interview. If there is inheritance from a class, you are taking some behaviours from this class and some behaviours from this class...It is possible, but it is rare. So be a little careful, but I'll just note that down. Interfaces which define contracts in your code. These three things take care of most of the problems that you have while defining objects.

And object defining is the major chunk of your interview. It's the most important bit. The next thing would be the algorithm. In our case, the main algorithm is, of course, how do you create a payment graph? So that is the second most important thing. And finally, it comes test cases.

Once your algorithm is written, you are actually going to be writing some test cases to make sure that it runs correctly. Define objects. Write the algorithm. And then write test cases. Let's see how we can do that!

## Coding: Building the service skeleton and defining objects

Type: Video · Length: 10 min 22 s

### Lesson notes

Point to note:

Using a BigDecimal instead of a double value would be preferred in a financial application. The double may have precision errors.

### Transcript

Okay, let's start coding now. So in a group service, what are the things you need? You need to call the API of expense service sometimes. Either you need the payment graph or you need to find all expenses relevant to this group. So I need a reference for expense service here, and I'll just add that to the constructor. Now, the main things you can do here, quite a few people actually talk about the objects or the wrappers that they'll be writing.

But I had suggest you go for the main problem. The main algorithm is to get a payment graph and getting the group payment graph takes care of both algorithms, both summation of all group expenses, plus the payment graph. So go for that first. In case you run out of time, this is the best method to go for. So a public function in the service, which returns a payment graph with the method, having group ID and user ID. Let's work backwards on what are the things we need for the final payment graph.

Firstly, we need to sum up all the balances in the group or user. That way we can build the graph. So we'll need that. And to sum up all the balances in a group, we need the expenses in the group. We need to add all expenses, belonging to this group from the expense service. So you take the list of expenses, which is group expenses from the expense service.

It will need to expose a method for this. Then I'm going to be converting all of these expenses to a single expense, which is the result expense. So I'll sum all the group expenses. Now, what I need to do is I need to return the payment graph. So the expense service will expose a method called get payment graph and for a single expense, it will return you the graph that you need to satisfy that expense. There's another method that we talked about, which is pretty important for a group service.

And that is to get all expenses in a group, basically the condensed form of all expenses. So these are lines 9 and 10, which will need to be copy pasted over here. This method is not using user ID. The reason for that is because I need to add that authentication that this group actually contains the user ID. And if it doesn't, I can throw an illegal access exception. Now let me just improve the packaging over here, let me add these two services to the service package.

And also I'll start defining all my models now. The good thing about this is, because I attacked the problem head on, I know what are the models that I need. So the object, the first object, like we said is expense. It has a map of user to balance. And then I also need to add some metadata, like the image URL of this expense, the description, the title. Under the model class is the user.

I don't need to make this a complex object actually, because in the function that we are writing all the functions that we are writing, we just need the user ID, but still it's good to keep this. Now you have balance.. Balance is of course going to have a currency, which is implicit and explicitly the amount I think for simplicity, I'll just go for USD currencies in this. You need to build a model for payment graph. What is this going to be? So we said that a payment graph is the balance owed from one user to another.

What is the amount that one user needs to pay to another? So that is a user to user plus amount mapping. This can be a map of map. Every user has a mapping of how much they need to pay every other user. I have to put this object of balance there because that is telling me the currency and the amount, but the word balance doesn't sound correct. It sounds like it's a part of a transaction.

This is more like the raw amount. So I think I'll just rename this class from balance to amount. The payment graph has a graph inside it now. This object has a nested map. And I always find this weird, not just in production level code, even in an interview, when you start doing nesting of maps, this suggests that there is a composite object over here. We are using simple objects.

Like you can have a 2D array or 3D array. Usually that begs for some sort of simplification. Maybe there is another object which is using this. Yeah, expense is also using a map of user to balance. User to amount. What is this map of user to amount equal to?

I am just going to call this balance map. What I'm doing is I'm simplifying this object. It's an object that I understand. So it's a wrapper over that. So an expense has a balance map and this payment graph has a map of users to balance maps. What this means is that every user has a map of how much they need to pay other users.

So it does simplify it to some extent, maybe you guys can name it better, but I'll just go ahead with this balance map. And I'll just refactor the rest of the classes. This method needs some sort of authentication, for that, I need a group. What I'll do is I'll assume that there is a cache I have, which is being regularly updated through the database. I need a database connection actually. But like I said, we can mock this bit.

This is an in memory cache. Usually you'll have a remote cache or global cache like Redis. But in our case, I'm just using a in-memory map of group ID to group. The group has, like we said, a name, it has a description and it will need a list of users that belong to this group. Interestingly, do you want to keep a list of users or do you want to keep a list of user IDs? This is something that I have faced in my life in production.

If you keep complex objects where they don't belong, you populate the cache unnecessarily. So I had strongly suggest that you keep just the list of strings, the list of user IDs in your cache. And that way the object is less bloated. So that's good. We come back to the group service and get the group for this group ID. And we check whether the user list contains this user ID.

I need the users, this getter method. The expense service needs to expose this method. So there's get group expenses. It's going to give us a list. I'll just keep it blank for now. Import payment graph.

sumExpenses is a method that we need to have. This method of getBalance actually needs the user ID also. Because we need to copy paste the lines from 21 to 25 over here, let's do that. Let's return the expense that we need from here and over here, we can just use that method to get the group balances. Publicly, anybody can call the get balances or the get group payment graph method. The get group payment method is actually internally calling the getBalances method.

So sumExpenses method add up all the expenses in this group per user. For every expense in group expenses, I get the user balances for this expense. And then internally, this requires another call to getBalances. So this is going to give me every entry in the balance, which is going to be a user to amount mapping for that expense. And I need to sum this to the respective user. The balance.getKey() is going to give me the user.

balance.getValue() is going to give me the amount. Okay. So now how do I add this particular amount to the result balance amount for the same user. I need to get the amount that already exists in the result. And if it doesn't exist, I return zero. So this is going to give me the current user balance.

So the result balance is now getOrDefault for this user. If it doesn't exist, then return me NIL, which is basically $0. Then I'm going to be putting the current result. Plus the amount I just got. So I'll expose a method over here, new amount. This is like an immutable object.

You can't make updates on it. The new amount has the same currency. Let's put this for that particular user. What is the resultBalances actually? A new map. So this is a balance map.

Technically you're not getting an expense. It makes more logical sense also. You're not going to get an expense if you sum up all the expenses in the group. You're going to get a set of balances. That's what we have: a balance map. In this expense service I need to have all expenses for a group.

So for every group ID, I need a list of expenses. You can also assume this to be the database itself. The reason being that I'm going to be pulling out data from here. I could have a database wrapper and I could have a database connection and everything like that. But of course it's better to start off with something simple, like a map or something. And then later on while you're testing, if it's very bad looking, then you can go ahead and change the code.

Both these methods are completely blank. Get group expenses needs to be fleshed out. The groupExpenses.get(groupId) should take care of that. That's a list of expenses and getPaymentGraph. You need to write your algorithm over here. So this is the big guy.

## Coding: Algorithm

Type: Video · Length: 4 min 9 s

### Transcript

So, this is expected to be a little complicated. Let's go backwards again. You need a payment in half in the end, so I'll just try to create a new payment graph. This needs a map, a user to balance map. I have been passed this parameter of group balances. So from that, I will take all positive values, put it in one heap, like we said, in one set and take all the negative values and put it in the other set.

So let's do that. Priority Queue is what we have in Java for something which internally uses a heap. It's going to be containing how much does this user owe. So that is a user to amount mapping. Okay. So let's go ahead with that.

Priority queue, and this priority queue is ordered in the descending order for positive balances. If you're not sure, just have a look at what the compare method defines in the comparator. You'll always be able to see what you need to return. So this is in descending order and because I need this to be in descending order, I'll just pass a negative over there. Little Java specific, but even in C++ or Python, you have lambdas. So you can extend that idea here.

So now I have these two heaps. What I do with them. Firstly, I need to populate them, of course. So I'll just go and take all the group balances. Whichever ones are positive, I need to put in the positive amounts. Whichever ones are negative, I put in the negative amounts.

Now comes the algorithmic bit. While there are balances existing in both of the heaps, I'll be pulling out the maximum value from both of them. The topmost elements from both of them. And eliminating them. While they're both not empty, positive amounts and negative amounts. I eliminate by polling the heaps.

Now coming back to the main bit of elimination, we take the largest positive value by polling the positive mounts and the largest negative value by polling the negative amounts. If the largest positive value is less than the largest negative value, this means that I will have a positive value remaining. In my hand, once the elimination is done. What I need is the minimum of the two values. That is the amount to be transferred, right? So if one person has 80 rupees to give and another person has 90 rupees to take, then you can only give 80 rupees.

The other way around is also the same. You can only transact the minimum amount amongst these two large values. So I take that. That is the amount I need to transfer. Make variables for this. This is what I need to put in to the result map.

This graph will have for this user. I'll put if absent, I'll put our default value over there, but otherwise I will get, and then push in this record. So basically if A needs to get 10 rupees from B, then in the map, we'll have an entry of A, which we'll have an internal map, having an entry of B with 10. I can just negate the negative amount to get its original value. Now, after this transaction, there is some amount remaining, possibly. That is positive - negative.

If positive is greater, that means that it's still more money to take. What I need is the current user who just made a transaction, which is the largest positive. I need the key, which is the user. And I also need the remaining amount to be put in here. And if this is less than zero, it's vice-versa. In the negative amounts, I need the largest negative user and I need to pass in this remaining amount.

This looks like a complete class. What it's doing is it's taking two priority queues. That is declarations. The other declarations also sensible. And after that, we just have the algorithm of elimination.

## Coding: Test cases

Type: Video · Length: 6 min 5 s

### Resources

Heap Data structure overview: [https://www.geeksforgeeks.org/heap-data-structure/](https://www.geeksforgeeks.org/heap-data-structure/)
Priority Queue in Java: [https://www.geeksforgeeks.org/priority-queue-class-in-java/](https://www.geeksforgeeks.org/priority-queue-class-in-java/)

### Transcript

We are done with the two major parts of the LLD question. The final bit is the testing bit, which starts with the group payment graph test. Let's take a group service. I'll need to initialise a new service for expense and groups, groups. I can just add a new group with the group ID 123, and a user list. In the expense service, I need a hash map of the expenses.

So these are the group expenses that I need. For this group 123, I'm going to be taking a list of expenses and in the expenses itself, I can add three expenses. So even in the real interview, it's great to keep glancing at the whiteboard from time to time. To, first of all, understand the design that you decided on is what you're actually coding, so that can help. The other thing is the examples keep you grounded. So you know, that that example has to work.

If your code is not matching that, then there's a problem. Let's reuse this example. The balance map has a user to amount mapping. Now, like I said, the balance map actually should contain just the user ID because it has nothing to do with the complex user object. It doesn't have anything to do with the imageURL. Balance map has a string to amount mapping now.

The string is the user ID. This is easy for me to test also because I can just pass in the string value instead of creating a complex user object. Reusing the example, A owes, in the first expense in the balance. He has a balance of 10, B = 20 and C = -30. And let's just do this for the second and third expense. A owes 50, gets 10 and 40 respectively from B and C and the third balance B does not exist.

A actually paid 90 to C. So like we said, the results should be 50, 30, -80. Let's see if that is the case. +90, +10, -90. Okay. That's not correct.

The last values are the ones that it has taken up. Let me take it step by step. So firstly, I want to find out all the expenses of this group. And I want to print that out. So expense service dot get group expenses. 123.

Let's see if this makes sense. 10, 20, -30. This is correct. The expense service giving us balances is fine. What I need to do is I need to check the summation method. Okay...

Yeah, there's a problem here. The "add(Amount)" actually needs to add this amount. Running the test. This works: you have 50, 30 and -80. So the first method of the group service works fine now. So this is great.

Let's shorten this test a bit. Let me try to reuse some of the population methods that I used for this particular test. And in fact, let me outside some assert statements instead of sout. Balance map is going to be having A with an overall balance of 50. So now let's go for the other tests that we are going to do, which is the payment graph test. This is the most important test that we have.

Copy paste the code that we already have. Let's see if we can reuse some of the methods over there. The only way I can reuse populating methods is if I actually add this CRUD API of adding an expense. Because I'm continuously adding expenses to the expense service and passing that as a single map in the constructor, that's not going to be very flexible. So let me add this create method of expense, "addExpense". If the group ID is null, then don't do anything.

If it is not null, then add it to the relevant group, a list of expenses for that relevant group. So now I can use this method of add expense. So this example is actually going to tell us whether we can create payment graphs the right way. We are going to be getting the balances from the "getGroupPaymentGraph". A needs to get $90 from E. D needs to get $70 from B.

F gets 40 from C. And D gets 10 from E. Let's just run this. It seems to be running fine. That's pretty good. A gets 90 from E.

That is correct. D gets 70 from B. That is also correct. D gets 10 From E. That is also correct. Yeah, that is also correct.

And finally we have F gets 40 from C. This was a third transaction actually. Transaction of D getting 10 from E is the fourth transaction. So we don't have the ordering, but we don't even care, because we just need the graph. We don't need the ordering of the edges. Looking fine.

Both of our tests worked. You can write more edge cases for tests over here, but the major tests, the happy paths work. Depending on the time you have in your interview, you can refactor this code and make it slightly better, but it should be fine.

File: assets/threadexecutiononmultiplecores-201021-164202.png

## Conclusion and Tips

Type: Video · Length: 3 min 2 s

### Transcript

So this takes care of the Low Level design of a payment tracking app. We first decided on the requirements of the system, we then identified one part of the system, which is algorithmically complex. So it requires some thinking to solve. Once we had solved that we decided on a step by step approach to code out the solution, this involved building a diagram, which is going to give us a rough architecture of our system. So we identified three pieces, three components in our system. One is the group service, which is going to be taking care of groups.

Then there's the user service, which we haven't coded out because it's quite simple. And the other service, which is not so simple, which is the expense service, has the main algorithm inside it. There's also a few tips I'd like to give you for Low Level design interviews. Firstly, don't be too quick to jump into coding, make sure that you clarify the requirements correctly. Make sure you understand what the interviewer is expecting you to code out. What algorithm are they stressing on more.

If it is. Concurrency that they are stressing on then, that is what we should focus on. Have a discussion for 25 to 30 minutes, just to understand the problems and then flesh out solutions for those problems. The second tip. Is to attack the main problem. First for example, we could have started here also with the user class and thought about how to register users and how do we authenticate users for calling every API.

But if we do that, we are moving away from the main problem and we're going to get less time to solve the thing that is being evaluated. Another side of this. Is when people start coding out a lot of the models. Model classes: balance is being coded out first. They have to actually think of what are the states required and what are the behaviours of each of these classes beforehand. Instead when you attack the main problem, you know, what are the behaviours that you need?

And therefore you are going to code that out. And once you define the behaviours, you actually going to be coding or the states also in those classes, because you need those States for the behaviours to take shape. The third and final tip is around coding. So if you're able to use your own machine or your own IDE, then get really comfortable with your machine, the shortcuts that your IDE provides, because that can speed up your coding time, tremendously. Also formatting is actually really important. A lot of people don't mention it.

People say that I don't care about formatting. They do because there's a human tendency to actually look at good clean code. Understand the shortcuts for code generation and formatting in your IDE. If instead, they are going to give you a separate machine for coding, or if you have to code online, then figure out which platform is it. According to the platform, if you can get some shortcuts to indent the code or even generate some code, that will be great. And if not, then you have to always fall back on typing fast.

That requires a lot of practice. If you have any doubts or suggestions on this, you can always go on the right top corner of your screen that has the discussions button over there. Until next time, then see you!

File: assets/Taskschedulerforthreads-201021-164202.png

## FAQs

Type: File

## Code Link and Diagrams

Type: File

## Code Download

Type: File

File: assets/splitwise-payments-simplified.pdf

## Summary - PDF

Type: File
