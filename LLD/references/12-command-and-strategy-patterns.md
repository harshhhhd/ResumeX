# 11. Command and Strategy Patterns

## New Feature: Email Notifications

Type: Video · Length: 13 min 2 s

### Transcript

Now let is imagine that you are in a meeting with the product manager. Our game is working fine, but we need the users to feel more engaged. We want 'em to keep coming back. If you win a game, we send you an email. So let's say this is email service and this service can send an email to a user. So let's say there's this user and whoever is a user who's won.

So we know you'll be sent the message. Congratulations on the win. So, uh, send email to the player who has won. Okay? So take human, send the email to the human and here we can send the user, the new user. The user has an id, that's great.

Email service, send email. It takes a user and it takes string message. And here we can assume that though mail is sent you. What we did just now is see at a high level what it would look like to send an email, uh, if there was a human player who won. So if Google engine get state winner equals human symbol, then we do this. So this is one requirement.

The other requirement that we have is that if a user has come back after a long time, let's say after 10 days, and they play a game, they have some sort of activity in the portal, then you want to send them an email. So let's do that. If you create a game, uh, after a long time, then you want to send that player an email, okay? The human did not have any activity human active after. So you pass this in 10 days, then we need to send another email. So I'll just create one email service and use the same thing to send an email here with a different message, which is, we are glad you are back.

Just need to define this method. Active after. So this is the threshold and this is the time unit. And there'll be some logic here which says that this player, this user, uh, shouldn't have been active in the last 10 days. So in fact is active should probably be in the user plus and it'll need a long last active time. So if last active time system, current time, middle minus, this is greater than uh, the threshold when converted to middles.

Now, there are two places where we are sending emails. This is not very difficult. What's the problem? The problem with this is that if you have hundreds of types of emails, you are going to have a complex function here, which you're going to call. So the email service will have many ways to send an email. It's not just going to be gimme a user and gimme a message.

There's going to be times when you need to send a link. There's going to be times when you're going to send images and you might have one generic function, which takes in all types of parameters, which are possible for an email. But even then there's a problem because as and when this function changes, your code across the entire system changes, okay? For one small change in one function, your entire code base almost goes through significant changes, okay? And significant testing also. Instead, what you can do is you can extract out this call, this point of contact with a extremely common service and put that into something called a command.

A command is a specific set of instructions, which when encapsulated can help the email service perform an action, okay? You don't need to call a particular function on it. You just need to say, this is what I need to do. Okay? Let's, let's take an example. So instead of send email, you can have a function called public wide execute.

Okay? And here, all you need to pass in is the command object, something called an email command. Here, there is a user who is the receiver. You have a string message, you have a string link, you have a string template. So there's a email template also, uh, typically you'll have something like, you know, hello first name. It's great to see you are back playing.

So whether it's chess or tic-tac toe or ludo doesn't really matter. So, uh, board game type. Now, the benefit of this is that you can have a template string and you can replace the parameters as in when required here. So in c plus plus or Golang, you are probably familiar with this pattern where you have a string which you can populate in this way. You have d then you can populate in teacher here, right? So you have this template and the set of templates are stored for promotional emails, for uh, verification emails and so on.

So the template type can also tell you, or the template Id can tell you which template you should pick up. And then there is the template itself. So with this email command and this execute function, all I have to do is say send email with the command receiver and message. And this can be a private function for me. What exactly happened? Like what's so great about this, the benefit of this is that I have taken multiple parameters here in this function, which are likely to change.

The type of each of these parameters can change and more and more parameters can get added. Instead, I have converted that into a single object of a command. Okay? This helps any caller just define how they're going to create this command, and the rest is left to this object, this service, okay? So instead of send email, which is now private, I go back to the main function and say, execute this email command. The word command may be a bit alien to you.

You may think that you know, what is, why are they calling it command so much? The point of this is that there is a object which can define exactly what you should do. So that's the place where you are given a command and you need to do something, you need to execute that command. So that's the reason why there's email command here. A better word to this will be send email that you're sending an email with these parameters. Now, there are these parameters here, which we need to define.

As you can see, this function is the reason why we move to a command pattern. We don't want to be passing these parameters one by one in a particular order or you know, as the function changes. So we converted that into an object, and now creating the object itself is going to take us, uh, this kind of parameter passing. That doesn't make sense. You don't wanna pass in the arguments. You instead want to pass them in one by one.

And the pattern for this, like we have used earlier, is a builder pattern. You could also have a factory, but the factories, again, the same problem. You have so many arguments that you're passing in that the ordering of the arguments has to be perfect. And then some of them are going to be null, some are not going to be null, it's not necessary. Just use a builder pattern. Let's call this builder build.

Before we build anything, we just say set the parameters. So user, this is the human user and message. This is the spring message. Alright? Uh, I can see that the packet structure is getting absolutely terrible. So we'll fix that just now.

We'll take all the smart strategies and all sorts of strategies and move them into a new package called strategy. Here we have all the strategy classes, including the base class moved at the same time. You can see that there are command and command builder. So let's move them into their own package. Once and even here in the commands, you actually need a package just to mention that these are the builders and which are the actual objects. So the implementations go here, the builder goes here, take these parameters, pass them in here, okay?

Uh, there's something which will come up in just a minute. We, we get to it, but I can already see that, uh, the number of commands that can be sent to an emailing service is multiple. It's not just about sending an email. Email. Sometimes you want to send the emailing service deferred email. So send it after three hours.

That could be one type of command. Okay? So this is what we have. We have execute, which seems to be working fine. Let's go back to our original problem. We have this message, congratulations on the win to be sent.

So we need concept of a user. This user is equal to user return. This similarly with message. We pass in a message, we return this, but before that, we set the message equal to message and finally build creates the new object. So that's great. Our main method now works.

It doesn't know exactly how the email service is executing an email or let's just say sending an email, but it does know how to create an object so that we can make it send an email. So what is the point of all this? Isn't this really bloating our class? I mean, we had a single function which took two parameters and was able to send an email. Now we have one function, which takes a complex object and needs a builder pattern to even construct the object. So did things get more complex?

No. The benefit of this is that I can extract out this creation logic and move it into a separate place. I have a builder now. So if there's any kind of complex logic that has to come in here when it comes to setting the parameters, I can move that here. So let's say that based on the user, you are going to have a different kind of link. So the Indians get a link for India, the Americans get a link for the us.

Now that logic would either have to be moved into the email service when sending the email, or it would have to be kept in your code in places where you're actually invoking this email not sent, neither place is right? If you have that logic here, then the problem is there's too much business logic for sending emails when it comes to actually playing a game. Okay? So that logic doesn't belong here. Also, that logic is going to get duplicated across multiple services. The same situation comes in different places.

The idea is that you need to send an email, but there is some business logic that you have to look into. You will be stuffing that business logic over here. You don't want the complex logic here in the emailing service because it focuses just on sending an email. It doesn't want to know whether or not it should send an email. What parameters should it populate or not populate? It just wants a template.

Give me the parameters, I'll populate all of them. So this separation of concerns, which is invoking an action, doing the action and explaining how to do the action is the command pattern. How to do the action is there in the command itself, doing the action is done by the email service and invoking the action is done by classes where the event happens. One of the things which has recently happened, which is I think partly because event buses and message queues have become so popular, is that this command is instead called a message or it's called an event. Okay? So you need to do a particular thing.

You are going to be encapsulating all of those parameters into a single object that is usually called an event or a message. Uh, you have a common design pattern called command, query responsibility segregation, CQRS, uh, that again derives its name from this design pattern. So the basic idea there is that you have right operations, right commands, uh, and read operations being separated out. The way that those two systems connect with each other is by passing these messages, Let's set this up. We have receivers able to user, then we need a couple of getto methods. Get receiver and get message.

Okay? That takes care of our compilation error.

## Inheritance vs. Composition

Type: Video · Length: 6 min 35 s

### Transcript

You are sending emails, but some of your users are connected using their cell phone, so you want to send them in-app notifications or SMSs. Now most of the logic that you have for sending notifications for email or SMS is basically the same thing. The only thing that is different is the last mile. When you are going to send an SMS, you have to send a short constraint message. If you want to reuse most of your business logic when it comes to sending a notification, one of the things that you could do is take this send command pattern and make a copy of that. Send email.

Instead you have send SMS. Let's say there is a template, template string. Everything is the same. And similarly, it has a buildup. So the two classes are exact copies. One of the things that you could do is look for composition here, but since send email command is a command and the send SMS command is a command, uh, I'll be having a base class here.

This is going to define the user and the message. And similarly, there will be a base builder. So send builder. This is going to take a user and a message. So what I'm doing is I'm extracting out the common parts of even builders, right? This is possible.

You don't have to have very loaded large objects. When it comes to the builder pattern. Uh, you can have a base builder object also and the rest of the builders will extend from the send builder. So here you have user and the object that it is returning is send. And so send email command doesn't need to have this. It can just extend this same time.

This can be made public in the send object itself, okay? We have refactored quite a bit. So let me give you a summary. One of the things is we have these two services of email and SMS. They're identical. They send an SMS or an email based on which class you're calling.

Of course, an email service requires an email command. Uh, SMS service requires an SMS command to execute. An SMS command may have some additional parameters or lesser parameters, but as long as you can define the command correctly and you can call this method sent, your job is done. Now the problem workers, the problem is that when you go to the main function and you wanna send an SMS or you wanna send an email, let's say you wanna send both, right? Both services are interested. MS service, I'll just create the object here.

SMS requires a SMS command buildup. And similarly over here you'll have SMS service requiring an SMS command buildup, right? This should be working, but it's not. And the reason for this is quite subtle. You have a notification command being provided and the required type is emailed. In SMS service, you have the notification command being provided and the required type is SMS.

Now go back to the solid principles that we talked about, especially the L li scope substitution. What does that say? It says that if there is an object, right, which is extending another object, or if it is extending an interface, it needs to implement all of the behaviors of the parent. It cannot say null pointer own exception or unsupported operation exception. That would be a violation of that principle. Here we have a base object of notification builder and we have child objects which are returning specific commands.

SMS is returning SMS command. Email is returning email should be returning email command, but that's not working for us because we are ending up with a generic notification command being sent back in the build operation, which is here. It's abstract. So here we have a real problem. You are using a base class to get rid of a lot of the code duplication, but it's not working because it's returning you A base object. A base builder is going to return your base object.

That's not going to work for you. One thing you can do is you can type cast you, okay? You can just say, I know what I'm going to get. So that's email command and my job is done. So a SMS command, you could do this, it's not good because you are doing type casting in the middle of code. If I change this to SMS command builder, nothing, no compilation error, who knows?

Well this will work or not. So there is no guarantee in the compiler itself that this code will work. So typecasting is not what you want to do. What else can you do? You could also possibly go to this method and say, I will be returning you the object type that you want. So instead of notification command being built, it'll say email command.

But instead of build, it'll be build email, right? And here you can define how you're going to build that email. You can also define how to build SMSs. And coming back to the main function, you can say send, instead of build, you're going to have build email. This would also work, but this is absolutely terrible code because uh, every time you are adding a new way of notifying users, you are going to have to come over here and add a function. So that's not what you want to do.

What can you do? The email service and the SMS service needs specific commands. They need the email command or the SMS command, right? The base class is not substituted. You cannot have a notification command here that won't work. You need the SM s mark.

So the person calling the send method is clearly aware of what type of class should come here. Okay? So this build method is not going to work for us. Whatever you do, how much ever code quality you try to improve, the idea that.build will give us the right class and be generic is not going to work. You cannot have a generic class, which is giving you specific objects. So then we fall back to the idea of do we need a generic class?

Do we need inheritance? And what's the other option for inheritance composition? Let's try that.

## The Publisher Subscriber Model

Type: Video · Length: 14 min 20 s

### Transcript

You have notification command and you have SMS command. Instead of extending notification command, let's say you have notification details. This exists in both SMS and email command. This is notification details and instead of super, what you're going to have is details equal to new notification details. User message, right? The link of inhabitance has now been broken.

Uh, to abstract out common logic and state we have instead made a class which is common across all commands in notification details. Similarly, notification builder doesn't need to be something that everybody has to extend. So you are not an abstract class. You are going to be used for composition. I'm not going to have a build method in you. So let's get rid of this.

Uh, it's not an abstract class. It's going to give you a very specific notification detail. When you build it, that's going to be return. New notification details, user message, right? And SMS builder does not extend this. Instead you are going to have a composition, right?

So that is notification builder here and here you have notification builder build. So this is interesting. You have composition of common state and behaviors in the commands and also composition of common state and behaviors in the command builders also. Okay? So you can always extract out common logic more often than not, right? If you can't, then yeah, maybe you'll have to just duplicate the code.

But usually there are ways. If it's not inheritance, then you can go for composition. And the way that we decide that it's not going to work out with inheritance is because the same function obviously cannot return you different object types and you need different object types to call this same method. That user is not defined, that's feedback. Uh, create user User, alright? Is over here.

Similarly message on this and assign this to be a new object. Okay? And finally build this would actually be, so that now works. It's perfect because the email command builder is exposing the functions in the notification builder. Okay? Uh, nobody else knows about notification builder.

You don't even know that there is a builder which helps you create notification details. But that's there. It's being used by other classes which are composing it, okay? And during build, you build the notification first and then build the larger object. Like we said, email is specific where you can have link also, but the same can't be signed about SMS. Yeah, it fails 'cause link doesn't work here.

There's no method, okay? So your compiler is telling you whether the code written is correct or wrong. That is amazing because when you're sending an email now you know that the format that you have sent the email in is exactly what the email service is expecting. And you have also extracted out a lot of the common logic that you had when it comes to building commands through composition instead of inheritance. So all of our compilers are gone. We are sure that our service is going to run.

Now there is one change that will make your code far more extensible. Looking at it here we can see that there is an event which should be triggered to the email service. That's the event here. And there is an event which should be triggered to the SMS service that's over here. Alright? The same thing is happening here.

An event is being triggered to the email service and at the same time, it's also being triggered to the SMS service. This means that when a particular event is occurring, there are multiple parties who are interested in this event. There are any number of parties who want to know about this event. Send it to email, send it to SMS tomorrow if there's an in-app notification, then we'll be basically copy pasting a lot of this food. So you don't want to do that. What you want to do is you want to separate out the production of these events and the consumption of these events over here.

Email services consuming the events while our gameplay is invoking these events multiple times. So instead what we are going to do is say notifications add, assume that there's a queue of notifications, which you can send to, right? Any kind of a list where you can send these events, events add, okay? So we remove this, we remove this and in fact we don't have email command builder. We use a generic notification event and do the same thing over here. The benefit of this is that if you have an in-app notification that you need to send, you don't need to do anything in the invocation side.

I mean I sent an event to the queue. Whoever is interested in this event can go ahead and subscribe to it. If 10 other systems come tomorrow and say that I'm interested in winning events, the code which is actually sending the event of a win doesn't care. It has no idea who's consuming these events. Okay? So we have isolated that problem of calling the person who needs to consume this event from this class.

But before we can do that, firstly what we need to do is we need to have a list of say events, new a list. And here we can have a package which is going to define all the events. So one of the things is activity event and the other one can be win event. We're going to have a base class here, which is just going to be event making it abstract so that it's easier to understand. Normally you make classes abstract when you don't want people to just create the class itself. It makes a lot of sense if you haven't defined enough methods in the event or you just don't know the concept of a abstract class, like you want to create an animal.

I have no idea what you mean by animal. I can tell you this specific species of an animal can have an in sensation, but there's no such thing as animal, right? So there's no such thing as event. But there is such a thing as win event and there is such a thing as activity event. Event. This is a new activity event.

This is a new win event. And all of this logic, right? All of this stuff of us making a builder is gone. You have to just tell me the user, the human user who's part of this event. That's even better because the logic of what kind of message should I send is no longer in this function. So let me create the constructors.

You can extract out this part, you can create a common construc, but that's not the point. Like that doesn't really matter. Major point is that going back to the main function, our code became much simpler. If a person has made some sort of an activity after 10 days, say there's an activity event, whoever is interested in it, please go and read this event. Okay? How do they read this event?

They need a way to know that a new event has been added to this. So one way would be that I make this object public and I can go to email service and say while drew, if main.events.is empty rather is not empty, then do something then process the event else red dot sleep for a thousand milliseconds. So you see that this is roughly some polling logic that we have that in the main class. Whenever you have some events which are ready to be consumed, then go ahead and do something otherwise sleep for one second and again try again. So this is not a good idea. The reason for this is you are having the logic of consumption polluting the class, which is doing the consumption.

It's on when should you consume an event is one thing. And what should you do with the event is another thing. When should you consume the event is here, keep pulling every one second. What should you do? The event is over here. If you can extract out this, your class becomes simpler because whether you are pulling or pushing from the queue, whether the main function is calling this method that is a push or whether you are pulling events from the queue, doesn't matter to this function, okay?

It just knows that it is invoked, that's all. So we remove that logic here and instead create a class called event bust, right? Which is basically in our main function. You saw that there was something like a queue. So we remove this, go to the event bus, take this list of events. Here you have one function called publish, another one called subscribe.

In publish, you can basically publish an event events at event, you can subscribe to types of events. So event type and that would require a map of who is subscribed to what event type. So I'm subscribed to SMS events or I'm subscribed to sending events. I'm subscribed to analytical events that different types of events which you can subscribe to. So for every event type, you need a list of subscribers to keep things simple. Of course I can just keep a list of subscribers.

Initiative. If there's no event type, you can just subscribe. And if you say subscribe, then I'm going to add you to a list of subscribers. So list of subscribers here, subscribers, ad person, and a subscriber can be a function, which is basically like a callback. The idea of a callback is if something happens, call this function of mine, here's the handle to the function. Just send the event here.

I as a subscriber will be able to listen to it. Okay? So basically the function is going to be returning void. Okay? Let's do a little bit of package restructuring here. Subscriber can be a public plus coming back to the main method, we have an event bus and to this we can publish events.

So this is publish, publish, but initially there are people who want to subscribe to the event, right? Email service and SMS service. So EventBus, subscribe, send event. And similarly you have EventBus subscribe, new subscriber, there's an SMS service which wants to send events every time the event has been sent here. You cannot pass this event directly to an email service. It needs an email command.

Okay? So event two, email is one thing we can do. And event two SMS is something we can do too, but this will load up our event class. So a slightly better approach will be to move that into the respective classes. So, so new email command builder dot event build. And the same thing for SMS command builder event build.

And we can have a event method here, but here you can notice something odd. We have the builder taking a single object as a parameter and then saying do build. Okay? If you ever see this with a builder pattern, this is a strong anti-patent because the builder is supposed to take multiple parameters. A and B, it can be constructed in multiple ways. Both of those tests fail here.

It's taking a single parameter and there's only one way that it can create this command object, whether email, command or MS command. So in this case, we decide to get rid of the builder objects, they're no longer necessary. And instead we pass in this event object straight to the email command constructor and SMS command constructor constructing the objects in a very simple way, it's easy to read also and unnecessary code is removed. Also, you see in this SMS service, we are saying command get details, get receiver. And similarly, command do get details, get message. Just look at the nested calls we are making as a client of command object.

Do you know that they will have details inside where the receiver will be there? No. So the person calling this object should directly be able to say command dot, get receiver and command dot get message. They should know that there is an object called details. So we can encapsulate that in the command object itself. We can get rid of this nested call and do a dot get message.

So in future, if a developer joins our organization, they don't need to look inside the command object, they can just say command dot and get receivable come up. Their life is a little easier. In general, you want to remove the nested calls that are unexpected. Okay? So let's fix the constructor of the email command and the same thing can be copied for SMS command. Later we pass in an event to populate details, we need a way to extract the user and message from this event.

Also link. So let's go to the event object and make those changes, right? We can have get a functions here, which are being called. If you don't have a link, just pass in null, okay? That's what we are assuming here. And so there is a parametal link, which is string.

Since we have decided that event is going to be the class we are passing in, it's no longer abstract. Instead we can pass in that information, whether it's a win or activity event as a string. So we call it type. Okay? So our constructor is now updated and here in the main function we can pass in the parameters, get user congratulations. This is the link and this is the type.

The major benefit of this is that a new subscriber can be added to the event bus with a single line of code. Okay? And you don't even need to add it here. You can have a separate class which manages the event bus. So all of this configuration can be moved out because we have main function. That's the reason why we are doing it here.

But otherwise it can be moved out into a separate class with just managers configurations, like who is it subscribed to, which event would require just a single line. So this is called the publisher subscriber, or more conventionally it's called the observer pattern, where you have a set of observers or a set of subscribers who are interested in certain commands or events. When those commands are published, the person who's publishing them has no idea who has subscribed to them. Okay? At this point, when, if you just look at this piece of the code, where the game is actually being played, you have no idea who all have subscribed to this event bus. You are just publishing your event, you don't know who have subscribed to it.

And the benefit of this is that you can completely separate out the invocation logic from your business classes.
