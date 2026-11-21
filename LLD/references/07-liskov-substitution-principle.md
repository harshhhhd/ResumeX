# 6. Liskov Substitution Principle

## New feature request: Timers!

Type: Video · Length: 8 min 0 s

### Lesson notes

The video discusses the need to add a timing feature to a game and explores where to store the information related to the game's configuration. It considers options like storing it in the existing classes, such as the board or game state, and highlights the drawbacks of each approach.

### Transcript

Before we start celebrating, let's see if our game is even correct. You know, it's extensible, but is it correct is a very important question. It is. It's the tests are running at least so we can be reasonably sure that things are running fine. This is wonderful. We should pat ourselves in the back.

We should celebrate this and maybe a few days will pass before you get a new interesting requirement. Let's say the product manager comes to you and says, we need a way in which we can time the games. So each player will have a timer, and when that timer ends at the end of each game, they lose the game. So you have three minutes to finish the entire game. If your timer hits zero, then you lose the game. Okay?

This is very common in chess games. It's very common in many online games where you have a one-on-one play and the opponent can end up taking, you know, hours or days or forever. So you want to constrain that, and the way you do this is by making every move time. Either that or you can make the entire game time so you have a pool of 300 seconds, which you can use to play the entire game. Often you'll see players towards the end of the game making moves fast because they have very little time to make and there are variations to this. Let's go for a simple time per game situation.

Where should you store this kind of information? If you want to bring in this capability of making time moves, where do you do it? Now, logically we have all of the game information being stored in gaming info. So should we put it here? Look in this class, it's got is over. Winner has fork player and number of moves.

All of these variables are derivable using a board. So what's happening is gaming info doesn't really contain any information which is unique to it, or you know, it's not the source of truth. The source of truth is the board. So looking at a board, you can derive all of these attributes. Similarly, game State does the same thing. So that's one option.

We can probably store it in these, but maybe not. The second one is the board. I mean, you can derive everything from a board, so why not store it here? The problem with this approach is that a board doesn't really seem like a place where you want to store time because a board tells you the current state of the game and what are the things that are happening in the game through the current state. So is wide to winning or losing is not dependent on time. Is a player having a fork that's again, not dependent on time.

All of that information is in the board. The time just pollutes the board concept. In fact, if the time is infinite, then the board doesn't need to store the time. That gives you idea that conceptually you should have time games and non-time games, and you should have the same board that is playable by both of these objects. So board doesn't seem right. Uh, where else do you put it?

Do you put it in moves? Obviously making a time move doesn't make sense because the requirement is quite complex. You may have entire games with 300 seconds, or you may have three seconds per move, which can go to, let's say 500 or 600 seconds, doesn't really matter. The more moves you make, the more time you get to make the next move. How do you resolve this problem? We know that board is not the right place to put this variable.

Should we put it in move? Doesn't seem right, should we put it in game? Doesn't look perfect. What you want to do is you want to extract out this information into another place. Game info and game state have nothing to do with it. You want to create a separate class, which stores game config or game tag, right?

Is it a time game? Is it an infinite time game? Is it a game where a person gets to make two moves together? Is it a game where a person throws a dice and if it's a even number, then they get to make move? And if it's an odd number, the opponent keeps making moves. So what what happens is you have so many variations here that can come in just by separating out the configuration of a game from the logic of the game.

Does rule engine need to store this? Shouldn't rule engine tell you what are the configurations which are possible? No rule engine tells you what can happen on the board, how you can make those moves, how a coin can be moved from one place to another. Rule engine has nothing to do with the type of game that you're playing. How many moves you can make continu continuously. That is one of the reasons why I've kept rule engine extremely robust and simple.

Uh, it goes through the entire board and tells you how many moves have been made. It doesn't do anything fancy. It doesn't look at who made the move and therefore just check nearby. In fact, let me call it game conflict and interest point. Now comes up game config, like we said, can be various game configs. So should we have an abstract class of game config and then create a separate class called time game, which extends game configuration, would that be better?

So a time game would be a type of game config and untimed game, or let's just say leisure game would also extend game config. Would this be the right approach? It's a configuration, right? I mean, at the end of the day, leisure game is just a type of configuration. This is a really bad approach. The reason being that game, when you say a game, it looks like the state of the game game config looks like the way in which the game was constructed.

I wouldn't go for this even implements, which would just convert this entire interface. Abstract class is one type of class. Instead, you can make it an interface and force all of the methods to be abstract that won't work. The reason being that conceptually and games are not game confis. It's that simple, right? Time games have a configuration of a time game config where the configuration specifies that each move has some time or each game has some time.

So this is not an interface, it's a single class personally and leisure game does not implement this. It has a field called game configure. So does time game. So you don't extend this. You have a game configuration in a time game. Now is this unique to time game?

Is it unique to leisure game? No. All games have configurations. All games have configurations means that that suggests that there is a higher level of abstraction just called game, which needs a game configuration. And then these two classes can extend this high level of abstraction, which is game simply put a game configuration may be timed or not timed. So if this is false, it's not timed.

If it is timed, it's true. This class tells you how this game will behave. And so the whole concept of time game and leisure game is no longer necessary. This is really important. The point I'm making here is that often we create classes without actually knowing why we are doing it. And if that comes to you seriously consider either deleting the classes that you're considering creating or just trying to condense them all into a single place using composition.

And the reason I'm emphasizing on this is because very often you'll see inheritance being used the wrong way. I mean, our instinct is to use inheritance. If something has to be done, just extend the class. Take all of those nice behaviors and state and add something to it. It's like wrapping the existing code with another onion layer. This is natural.

Many cases it's great, but as you see, if you go on inheriting a class, what ends up happening is just like we said earlier, the core class is still scary. No one wants to make changes to the core class because everything is going to break a much cleaner approach. In many places, especially when you're making changes around configuration, or if you notice that a class is going to have changing behaviors based on the state that it has, it's probably better to go for composition. A composition is basically you are storing some state and then you can define the behaviors based on those states. If you have inheritance, then what's going to happen is you are gonna define a lot of classes, which inherently have some states, and then those classes will define behaviors. So for example, you saw here that I was having a time game and a leisure game, and basically the time game was implicitly storing the information that this game is going to have a timer.

This game is going to have different configurations based on that timer. And a leisure game was similar. When I extracted out that configuration information into a config and moved it into a single higher class of game, suddenly the logic became clear. The time game and the leisure game, their behaviors can now be encapsulated in the game itself.

## Encapsulating responsibilities in objects

Type: Video · Length: 10 min 7 s

### Lesson notes

The video discusses the implementation of a game system, focusing on moves and time management. We introduce the concept of a game where players make moves, and if a move is made within a specified time, the game continues.

### Transcript

Let's see what happens. You have a game where you can make a move, right? And you get back another game. Basically, when you make a move as a player and you pass in a timestamp, I can see it game config, it's time. And if it is, then I'm going to see if timestamp is a move made in time. We pass this here, the game has information of how much time has elapsed.

Looking at this timestamp, it can tell whether a move was made in time or not. So that would be a private section and if this has happened, then you make a move. So for that you need the board. You see a game has a board now, which makes total sense. One game should have one board and you can make a move here. If the move is not made in time, then you can declare a winner.

So you can have a string winner here or you can have a separate variable called timed out, right that this person has timed out. Depends on us, let's keep it simple in the start. Winner is equal to the player. Move made this move their opponent. So move dot get clear dot flip. Let's just have a winner here.

And otherwise if the game is not timed, then all you do is just make a board dot. You return the game. You could also have a wide over here, which is totally fine. You basically just change the state of the game and you don't want to get the game back. It kind of depends on the API that you want to expose. So how do we store the time information?

Now do we store it in the game? Yes we could, in which case every player's time would be stored individually. We can store that in a map or we could store it in a separate object also where you have player one timer, player two timer. How about if you have five players? If you have 10 players. So each player's timer would need to be stored individually in a variable that would be pretty bad.

So maybe you want a array of timers for each player. If you do that, then you'll need to have some sort of an index. Even if you store it in a map, you need to find the key for a clear and that will give you the time remaining for that clear. This seems odd, right? What should we do? The answer is right in front of us.

Clear? Clear as a concept is clear symbol, but it also has user id. It that would be a straight, but I'm just storing the user. A user is God of send and if they're playing a game against Hannan, they will lose. But uh, more importantly, when they are playing, they have a user Id go and might have ID 1, 2, 3. Han may have ID 2, 5, 6.

Their symbols can change depending on what game they're playing, but the user Id never changes. The other thing is depending on the game that they're playing, the player that they are for that game, you can store their times private in time used in release. This is something we can, it's create a class user. The user just has a string ID and now if we go back to the game, the player has the information for how much time they have spent. So when you make a move, I need to update all that player that time taken. Okay?

This is for one entire key. The amount of time that they take time used in middle release plus equal to time in middle release is what we have set. Time taken is going to be timestamp. In middle release if you like, you can look at the last move timestamp. So that will be the game. So you can have private in last move time release and this will help you tell what is the difference, how much time will it take since the last move to play this current move.

Looking at the current move, sometimes you can't tell if the move is made in time. You have to look at the total time taken by that player. So this is much more accurate function now seems to make sense. Player dot get time used. In least this should be less than total time per player. This is a field, the game configuration stores how much time one person can use as max time per layer and that has to always be less than the total amount of time that a player has ended up using.

This time is being calculated by seeing the difference between the last move and now and it's being sent in in every move. This way of coding has made our timed class much more flexible. We are now able to play games where there are timings and where there are no timings, you can pass zero here if it's a leisure game. But in general you don't want the client to go through all that. You just want to keep things simple and you wanna say okay, whether it's a time game or not, just send me the timestamp, I will decide whether it matters or not. So then there's no breaking change on the client side.

You don't expect the clients to now send you extra information. You just say and the information which makes sense overall. Similarly, because you're sending just a generic timestamp, you can configure a game such that each move is given three seconds or each move is given five seconds. So that is per move time and if the game config demands it, then you can add that logic here. If game config dot and per move is not equal to null, then you can do something. Otherwise it's assumed that the time is for the entire game and you can look at it in a different way.

Eight, you have no made in time changes. You could, instead of passing in the player, you're basically passing in this data that's not that down here and taking sinces last move and at the same time you can, you can create a separate field here, max time per move, which has to be greater than the time taken. So now you can allow both types of games. In fact you can allow multiple types of games. You can allow many variations of a time game. You can allow a non-time game also.

You're seeing that a lot of if conditions are coming in and as things get more and more complex, it would start making sense to move this into a rule engine. But the rule engine will not be as simple as earlier where you had a condition where even if one of the rules matches, then you would just return a result. With this, you have a game which can be time in various ways and not timed. Also the logic is flexible. There's a single function of move which calculates all of the metadata around the game while the board is still totally untouched. The best part about this is that the board really has no idea that time games came in to the world.

It just knows that if a move is played then something can happen and game state game info, everything is still the same. We just added a new functionality by adding a separate class which uses board and other classes which will come in tomorrow if they do can use board as an object instead of trying to extend it and become really complex. There is of course this problem of uc three nested if conditions. So this code is quite ugly. If you wanna see even uglier code, then you can go to the rule engine and have a look at the condition for fox in general nested for loops or nested if conditions are places where bugs can creep it. When it comes to game, the way to fix this would be just like we did for religion.

You can convert this into a religion. If the game is timed, then do something. If the game is not timed, do something else. A set of rules that are being passed in to move. This is a little more complex than what we did earlier because earlier all the rules were pretty much for the same condition. You had the same board where different sets of rules were being applied.

Here you have different game configurations for which different types of rules would be applied. So the if condition and the inner parts will turn into rules themselves. If else conditions will become a little more complex. But you can add more and more logic to this without changing the class. Inherently you see a problem with the concept of a rule engine. One of the things is it's really hard to send the ordering of a rule engine.

In general, rule engines don't seem to have any kind of ordering a list of rules. You can run any one that you like, but if some rules are dependent on other rules, you actually have a rule hierarchy. Check these rules on top. These are higher priority rules. If they are not met, then you go down. If a game is banged and you have not lost the game already, then do something otherwise do something else.

So ordering rules is a little tricky. If the rule list that you have is highly dependent on the order of the rules that you have, it's not a very good design path. People can change it, they can put it in a sec, in which case the ordering is lost and all of your code could fail. So what you want to do then is either make the rules mutually exclusive, all of them can run in parallel and they will still give you the same result. You have to either configure the rules in that way or you can avoid even going for a rule engine because if you avoid that then you know you are enforcing ordering and things should go fine. Remember that if there is some concurrency here and uh, there is some shared state here, then There is a possibility of bugs coming in.

So if you can of course separate out dependencies between these lines of code, you can go ahead and do that. It'll cost you in terms of refactoring, it'll cost you in terms of understandability of the code. Sometimes a nice straight order is better sometimes for readability. In some cases it is better to have a set of rules like we saw in uh, a rule engine. Here we make the conscious decision not to go for a rule engine. Instead we are going to keep this defense condition and if things get super complex, we are going to extract these into functions and the methods can be hopped from one to another to understand the logic.

If a game is time, so pass for time gain would be a function. If it is time per move, do it in some other way. It's not, then do it in some other way. Extracting into functions could be one way in which we reduce the complexity of this fold. As an example, uh, I could take this and say move for time. Yeah, that's just a single if condition, it fail.

And when I go for move for time gain logically I know that I'm inside this area. So I just have to think about time games. Now, if it is per move timing, I go here. Otherwise I go here. So the code is slightly more simplified.

## Extracting Nested Objects

Type: Video · Length: 12 min 31 s

### Lesson notes

We introduce the concept of encapsulation by creating a custom object to handle certain functionalities, leading to cleaner and more modular code. We also discuss the refactoring of code related to a rule engine: maintaining clarity and extensibility in the code.

### Transcript

We're now gonna go for the next problem and the next problem is sometimes hard to find. So I'll tell you my technique of finding these problems. When you look at a piece of code, usually there is some payoff when you solve a problem. That's one part and the second part is how much effort will it take for you to actually solve that problem? Both of these are estimates in entrepreneurship, if you are trying to solve a particular problem, let's say increase sales by three X is the payoff and the difficulty of the problem is you need to convince a lot of colleges to purchase your product so you can make a rough estimate that the effort required for this will be two weeks and there is a payoff. If you divide payoff by the amount of time, then you get a rough priority.

The higher the number, the higher the priority of this task. So when you're coding, you'll see lots of improvements to be done and if you try to do all of them, of course it's just gonna waste your time. What you really need to look at is what is the payoff of this and what is the potential time it'll take me. With that in mind, let's look at how ugly we find certain pieces of code and how difficult it'll be to solve. So here, it's right in front of us. When you see very deep nesting like this, it's usually a very big red flag because this kind of extremely nested object is very hard to access.

The second thing is there is deep meaning which is being nested here. So the meaning can be extracted out into an object itself. If I say a list of rules of type tic-tac board, what do I really mean? I mean that these rules are relevant for a tic-tac board. If I call this rule set, that's probably better and I can define the type tic-tac board or I can do one better. You can see what that is for.

Now, let's keep it simple. Let's say there's a rule set in the same package and you can define the type here. This is a list of rules of five. Those are the rules list and that's it. So P extends forward. In fact, that's all you need over here.

Now here instead of new list, we're just gonna pass in new rule set and this method of can be added here. Now these compilers go away and the type of rule that of, so instead I'll make it type three that solves the compiler's problem here when we're getting the state of the game, you should be able to iterate over these rules. So the rule map is of type rule set, rule set should implementable of rule of because you iterate each rule outside. So let's implement those methods. Now you see that the rule engine has stopped having compilers. So all we needed to do was move this into a custom object and you see why a custom object will add more value.

It brings in clarity and make certain things more obvious. Here you can add a rule. So to this rule list, let us add add rule. At the same time, we always know that this is gonna be not null, so I just initialize it right here. You can also initialize it using a constructor in it. What you can return is the listed rate, okay?

This keeps the implementation of this encapsulated in an object. The more I can change this into a set, all I have to do is make changes here, the hashtag and set it, my job is done, nothing happened. This class is having a single responsibility. It's encapsulating everything inside it, it's own data structures. External classes have no idea what's happening inside. There's a four H over here in that I can just return rule list four H action and split also, which returns rule.

We don't need to know what this is so I can just to make things clear, if I make this a map of string and rules tomorrow for some reason I need to find a rule using an id. All I have to do is just change this into a type map and now I can put and get a it of the values and still things will be fine. Everything that is happening is within this class. So that's how we're keeping our code as extensible and easily modifiable as possible. Let's go to the rule engine. Now the rule engine is now defining a rule set and the rule set is saying tic-tac board.

This is of course wrong because you might have different rule sets for chess for anything, but I'm being forced to pass in a rule set oft board so that I don't have compilation issues. If I remove this, then the problem is this new rule has no idea what kind of board is being passed. I can't get the symbol of the board get symbol is something is being implemented by board, not the board itself and in general, the rules that may not be extensible to rules that you apply to chess where you might have black and white sweats, different things could happen. We wanna keep our rules relevant to the game, but at the same time, we also want them to be generally enough that they can be extended by multiple games. So what kind of problem is coming up here? The problem is we have strong coupling between this map object and this class.

So how do we get rid of this problem? We're defining the type of a rule because we wanna get the rules of that specific type of board. This means that if a board can define the rules that are relevant to itself, we're gonna get rid of this generic type requirement. Take your time to understand this. The basic idea is that an external object is defining its own type so that certain types of rules can be defined here in the rule engine. If the tic-tac board can take up the problem of explicitly mentioning its rules, then we don't need to have this generic type and now let show you what I mean exactly.

Let it say rule set does not define a generic type. This is removed a set of rules, get rid of this at the same time, let's get rid of this. All we have is a function which takes a board. We're not looking at anything which is extending board. We're not mentioning that as a generic type. We're just saying it's a board, whether it's a TAC board or whatever will be defined in the function itself when you're setting up the rule.

So we got rid of a lot of the gen, which gets rid of some of the nested look and feel of the board that we have, right? This is looking cleaner. Now of course you're seeing that there are problems by removing the generics that we had earlier, we can't define the type of board that is being passed in. So these functions will give us compilers, get simple. Let's start getting rid of the generics here. How do we say that You need to be able to get a simple, one of the ways is to typecast this knowing that if this is then gen board is not gonna be passed in.

This is gonna be a tic-tac board. So one way is this, as you can see, this will make the code ugly and it's also a bad idea. You are typecasting on the fly with no guarantees in the object itself. Structurally, there's nothing stopping you from passing in a chess board. Here you are now going to look at the flow of the program and check whether things are still working fine. So let's get rid of this.

What else can we do? These rules have to be defined somewhere. Why don't we define them in the tic-TAC board itself? Why don't we take this map and ask the tacto board class to get its rules? These can be pushed in to this map. So map TAC comma T rules and now if I define this function, which returns a rule set in the TAC itself, what's happening here is that a board is defining the rules that are required for us to get it state.

This again is a compiler. This can be removed. Come back to this point. We have these rules and instead of a complex map, we're just adding it directly here, which makes sense. The outer traverse or the traverse function oft board should not be here, be in the board itself. So I can have that added here.

And here again, you have two choices. One is to force typecasting say that this is a tic-tac board. Definitely there's no other way. And the other thing is to again, fall back to generics when you define exactly that this rule is of type tic-tac board and therefore this board is gonna be of TIC if you choose to typecast. The problem with that is to more, if a new board is added, let's say chess is added or goal is added, then there is no support for the rule set to automatically define the type of board that you're passing in. This board is of type ttac board here.

It's gonna be of type chess in chess boards, but every time we have to typecast, that is gonna be quite ugly. It's not the most readable code in the world. Definitely typecasting is not an option which leaves generics as the only option that we have when we're passing in this parameter. Before we do this, there is another solution that is possible, which is just to create a method get symbol. Board. Board now has get symbol.

This can be converted to takes away the in the project. And in fact, if you run this also, this should be fine rule engine. We get a null point or exception on this line. Is it because the rules are nu or the rule map is nu, this class? Definitely the rules shouldn't be nu we're returning. Nu.

That's a mistake. Let's see now. Yeah, working fine. This looks really nice. It has a big problem though. The problem is we have a function here in board which says get symbol and return string.

Just imagine if the same function is forced to be passed into chess, what should you return? A string or a piece Could be a pawn. It could be a could be anything. You might think. Think, oh, a string is very generic. I can pass in K for K, I can pass in small K for night and so on.

I can uniquely identify any symbol in any set, but that's not the point. The point is can you think of all the use cases or edge cases and implementations which could come up for board? The answer is no. We are very careful about adding a cell into a board. Why should we add this function of simple? It's possible that tomorrow you add a game which is hexagonal in nature.

So I and J are no longer enough. You probably need to have a more complex coordinate system. You might have a 3D game where the board is in 3D. The whole concept of being able to get a symbol given two coordinates may not make sense there. For that, you could add a new function, which would say it's a 3D board, you have IJ and the Z coordinate represented by K, and this is where things go terribly wrong. What's happening here is that I'm adding functions to a base class based on its implementations.

The board is being forced to implement, get symbol or at least define get symbol. Despite not all boards having a definition for get symbol. Chess may not have a get symbol state, A hexagonal board may not have a get symbol state, but it'll be forced because the overall board has get, so there's a principle called LISC of substitution principle. This is the L in solid, which basically says you should not have subclasses, which do not extend all the behaviors of the parent class. And in our case we may have subclasses which do not extend the behavior of the parent interface board. Okay, so this would violate this list of substitution principle.

We get rid of this, come back to the original problem of get symbol throwing as a compile letter and here we define the gen. For this, every rule is gonna define TAC board and this will cause the rule object to respect this type just like we did. We're basically reporting part of our code. We try to get rid of this gen so that our code is easier to read. We see that there are tradeoffs suggest that we should go with the original approach so we fall back at any point in time. If you're writing code and you realize that the changes you're making are gonna be more costly than the original implementation, you can always fall back.

We made this decision because of the list of substitution principle, but one of the benefits that came about in changing this code is that we now have a rule set which a TAC board can return. Let's try to run the tests as a competitor. If we're trying to apply this condition to a tic-TAC board, so there's no problem here and the condition itself is generic because the rule here is generic. We have to pass in a specific type here, which board, and this is an unchecked assignment, but you can be sure if it's a rule map with the key tic-tac board. You're gonna get these rules here. That is a safe condition to apply.

The benefit of this was that we got rid of a complex, deeply nested object rule map, which was a list of rule of generic type. We moved it into a rule set. Here you can see that we need to pass some generics here. We're gonna be sending back is now, there is still a problem with this function. You are doing some sort of typecasting firstly and then hoping that the typecast works out. You have a rule of a specific type being passed in here, so these two are not related structurally, they're just related logically to each other.

You know that there's a typecast happening here. Therefore, you are able to define the type of board for this rule tomorrow. If this function is abstracted out and somewhere else, then this code may break or somebody else might try to use this part of the then this, this some coupling here to get rid of strong coupling. We.
