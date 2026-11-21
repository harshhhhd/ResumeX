# 5. Open-Closed Principle

## New feature request: Find Forks!

Type: Video · Length: 12 min 9 s

### Lesson notes

In this video, learn the challenges of enhancing code extensibility, using the context of a tic-tac-toe game as an example. Emphasizing the necessity of reporting specific game conditions, such as detecting a fork, the video critiques the current approach of embedding logic into the 'getState' function, which can hinder code readability and testability as complexity grows.

### Transcript

Now we are going to think in the ways that senior engineers think, alright, how do you make this code extensible? This code looks very rigid. Any additional rule to this get state will require code addition to an existing function. Let's say you have a product manager come in, uh, and tell you that for the tic tac token, we are now supposed to return forks or we are now supposed to report whenever there's a fork in the game. Let's take an example of a fork. Let us say this is your board.

So you see that whatever move O makes X is going to win this game. So how could this have happened? Maybe you had this in your previous move, right? X started the game, came here, O followed up, X then played this move O followed up trying to win, but then now X can play this move and now X is going to win the game no matter what. If O tries to block this square, then X plays here. And if O tries to block this square, X explains here.

Let's say this is something that we have to report. Whenever we notice that there's a fork in the game where we notice that one player is going to win no matter what, you have to report this in the game state variable. So this is a challenge. Uh, and the reason why this is a challenge is not just because you have to, you know logically write this code down. This has two problems. One is that if you're going to do the reporting through gain state, that would require an additional fee being stored in gain state.

And when you look at the word gain state, you don't really think about, oh it's also going to report Fox to me, if I can win the game, then it's going to tell me that no, it it talks about something current games state means something right now. So if you add this variable here, it'll probably require a class name change, which is a breaking change for most people. They use games state in a particular way. Everyone who's been using this API might be having the expectation and games state is only going to return them things which are relevant to what's going to happen now. So this is a smaller problem compared to the next one, which is a larger problem. Whenever you are adding any logic to this large function of get state, it's only making it harder and harder to read harder and harder test.

And tomorrow if more logic is added, more intelligence is added to game state, it's continuously going to make this function larger and larger and larger. So this is a more dangerous change. So what should we do? We could ask for this intelligence to be moved into ai, the AI engine, but really this is not something to be moved into the AI also because artificial intelligence can tell you what move to make, but whether something is objectively a fork or not should be there in the rule engine. Game engine just makes moves for you. But the rule engine can tell you yes, this is objectively a fork.

So it is not intelligent, it is just detecting things. Intelligence would be making a move without knowing for sure whether something is true or not. So that will be something like public game info, right? Game state is current Game Info is something which gives you information about all the things that could happen in the game. Maybe statistics also. So get informed for a particular board similar to previously we see if it is a tic-tac board, then we do things otherwise we just report a illegal argument exception and now I need to report forks.

But before I do that I should see what the game state is. Let's define a class also game info, which is basically going to take game state and provide a wrap road. So that would be as thought this reports whether the game has a fork or not. It doesn't tell you which player has the fork. Maybe we should have that also added here. Player who has a fork for a particular kid state.

But this can store variables and also the variables over here. Great, so is over is going to be game state that is over. Winner is going to be game state get winner as fort is going to be the variable passed in to the function and clear is going to be also passed in as a PanAm here. That's a lot of initialization. Let's see if this can get worse and later on we can fix it. But uh, that's game info for us.

We are looking at whether there is a fork or not, uh, and which player actually has this fork. So when we are returning, we are just going to return new game info with this game state and has fork and clear. Now the way to detect fox is going to be pretty easy. We are going to go through all the cells in the board inside. We are just going to make moves in this board for both players. So this will use the prototype pattern that we talked about, dot copy and p dot make a move there and the board is still winning.

For O, despite you having made a move, then there's no way you can win. It's a fault for O. So we create another temporary board, play a move on it for O and if the winner is not equal to O, then we need to break from this loop, right? So if this is not equal then there is no point in traversing this entire video set. A flag always wins. This is initially true here.

New set always wins equal to falls. So the fork did not work out. Along with that you break if always wins is not true. You break your and outside if always width is true, that means you have detected a fork. None of these conditions ever came up. So you can comfortably see that there is a fork, fork x and I think at this point we can break, right?

Because you can find the first fork, the first player with the fork and just return that. So if always winx is true, then you can return true here with the player X. I'll just take that as a copy. I put that into the vehicle, that's it. If it doesn't work out, then there is no fault for any player. This is only being done for X.

Instead we should have it for both player symbols. So I'll just put an outer fall loop for that for right. So for every player X and O we are seeing if making a move makes any difference. So if X makes a move and despite that o always wins, then this should return the fork. Uh, and I think there's a, there's a bug here. Basically we are making a move as a player and then we are traversing the board as the opponent.

What should happen is for all moves made by a particular player, this is fine. There should still be at least one winning move for the opponent. Always win should initially be false, can still win is what we are looking for. We go inside and make this board copy here we make a move as the opponent. So player flip again, the prototype pattern helps us here. And if there is a win or player flip symbol then can still win is true and we should pray.

And if the opponent can still win till the end, then we know that we have discovered a fork. Not for ourselves, not for player, but for player dot flip, right? And you see why I made this mistake because this was a huge piece of code. It's, it's a lot of code that I'm writing here in general that's a red flag Flag. If you have four nested fall loops, it's going to get super complicated very quickly. You either are doing some sort of graph reversal or you are doing some sort of, usually in ola databases there's the expectation that you're going through multiple rows and multiple columns.

So there's basically multi dimensions that you're working with. So in that case you'll see many follow loops. Uh, many follow loops is always a pad band design pattern. It's a cold smell. And what you should be looking for instead is either some sort of graph reversal or maybe I'm not condensed the queries enough, you have to convert them into a 1D or a 2D ari. That's when you can go through the queries, uh, efficiently.

But as you can see, uh, what I've done here is I have a nested fall loop because we are trying to think of a move which is two moves deep. You play a move that's one move deep and then your opponent plays another move that's two loops deep. If I keep doing this then uh, I'll have a very intelligent engine, but a very poorly written engine. Like we said, we are not looking at intelligence here. We are looking for objectively is there a fork present in this game? So instead of improving this code, I would like you to think why we did this.

It was because of a changing requirement. We decided that get state is not the right function to have fork information. So we created a new function and over there we moved the processing for a fork. The game state class is still not changed. So all code which uses this class is still unaffected. That is one great thing about this.

We have created a new class called Game Info. This can be moved into its own class, but the end result was that Getin info made our rule engine quite big and this code is quite ugly. Tomorrow, let's say a new requirement comes in again, we don't just want to see if the game has a fork or not. We want to see how many moves each player has made. That is additional information. Should we change the game info class?

Should we create a new class like we did earlier with gain state? Should it be game info, with moves? And what about the logic for counting the number of moves? Should we create a separate function which wraps this function or should we just add things to this function itself? The answer is moving things to a separate function and wrapping existing functionality or creating a separate class does very little to protect your class from additional logic, right? You are still modifying a lot of things.

You are trying to extend an existing class and providing a wrapper on top of it, but simply a wrapper is not going to cut it anymore. As more and more functionalities get added, this onion becomes thicker and thicker and the inside of it becomes extremely hard to access. It becomes a graveyard where no one wants to go. There's go so there. So eventually what's going to happen is this get state function. No one will have the guts to change it because there's like 50 functions calling this get state function.

You don't want to be in that state. So what you can now do is rethink the way in which you are processing statistics and victory conditions.

## Building a Rule Engine

Type: Video · Length: 8 min 54 s

### Lesson notes

Learn the best Python tic-tac-toe game implementation strategies with this video. Delve into a powerful refactoring approach as We transform the "getState" function into a dynamic rule engine.

### Transcript

Now look at get state in a different way after this. If condition, what is really happening? You are checking for something, you're checking for a open, you're checking for something. Again, you're checking if there's a column width, if there's a diagonal width, if there's a reverse al width. These methods can be run in parallel. These methods can be run concurrently.

It's basically you checking for something with a single traverse. So is it possible for us to take these functions and put them somewhere else to separate them out? Yes it is. We just did that. I mean we created this traverse function because it was one operation and auto traverse is basically calling traverse internally many times. So what is traverse then the core function doing?

It's checking. If a condition is being met, what is that called? What is this thing? An operation where a set of things has happened or one particular condition is met called The answer is a rule traverse checks for if a rule is met and a set of rules is basically checked by a rule engine. That's the reason why you call this a rule engine. So what does that mean in this context?

These are rules that you can go over one by one. You can pass in these rules, you can add rules here. You can remove rules. Let's say reverse diagonal is no longer allowed. You just remove that here. The way I did this is by modifying the get state function.

But what if you don't want to do that? How can you add and delete rules from get state without changing the get state function? The answer is that you have to pass in those set of rules beforehand. All you have to define the rules somewhere. Take your time to understand this. What I did is I'm looking at get state, which is effectively a rule engine, it's checking for rules one by one.

If I list those rules out explicitly, that will be better than putting the rules inside the function. Because tomorrow if I add rules then I add it to the function. If I have the rules in the list, then I can just add to the list without changing the function at all. And the function is just checking if this condition is being met, it doesn't know what the condition is right now get stayed has the logic for the conditions. If I can extract out the conditions, extract out that logic, then get stayed, becomes a pure function. It no longer depends on addition or removal of rules.

You might think that what's the difference? Let's see. Uh, what happens if we do that? Soro win is a rule column win is a rule. Taman as a rule and robust taman win is a rule. We are getting game states.

We don't want game states. We want conditions of yes or no. So let's take each of these and mark them for what they are rules. So in total we have five rules. This is a single rule. If none of them match, then we just return game status.

False. So I think can get rid of this to make it explicit, I'll define a class rule and what this does is it takes a board and tells you whether some condition is met or not. Not so there is a bullion condition met and there is a board that is fasting to this. Now the condition met depends on some logic. So that would be ideally defined by passing a board and you get a bullion variable tell you whether a condition is met or not. So the constructor has this, you cannot create a rule otherwise what get state does is it takes a board sees if it is tic tacto and if it is tick tacto then it needs to know a list of rules.

The rule engine needs to have this somewhere. So a map is what we want, right? You see that string is not a very good idea when it comes to this, but for now assume that you know the class name is what we are using as a key to get a list of rules for tic-tac. Then that means that we get a rule map. Do get board class get in. This gives you the set of rules for tic-tac for every rule R in rules.

If R condition is met or is bold return the gain state with this is you see that we don't know who is the winner yet, but this can be found out in a minute. The rule would probably tell us that put a placeholder for now X and to actually set the rules, all I have to do is during initialization of rule engine I have to just set up the rules here. So rule map dot get new analyst and rule map dot get that class. Now add to that list a new rule without a traverses. This is the general idea. You can simplify to some extent here where we are passing in the board.

So this is going to happen twice. That's two functions here and there's two more rules for single traverse. Something like traverses apply. And finally there's going to be something like count cells and each of these rules, I'm just keeping five alive for now. Write a function which takes a board and returns game state, that's exactly what we want, right? With uh, auto traverses.

So this is going to be repeating itself. What this does is it takes a board but that'll help us make these auto traverses using this function. This is just a a rule and in fact what we can do is we can say that this rule is of type tic tacto board by using genio he extends old at the same time. This is what we have. Now when you say there's a rule of some type, you have to say it is of type tacto and we are seeing that this is returning game state. So because that is necessary information for us to know who is the winner, we can do two things.

One is to just say game state is necessary. Return a game state. One of them is to just say we don't need the symbol, we just know whether there's a winner or or a loser. And every time basically you are playing, you know that the winner can only be the player who's made the move. So in that sense, we can remove this. Who's the winner player?

Or you can say no, I want to return the game state. I want to know in a general condition whether a person has won or not. Uh, let's keep it at that. Let us say that. Uh, we return game state. So rulex returns game state in terms of rules.

This is all we have. So that's what we have in terms of auto traverses. And in terms of inner traverses, all we have to do is traverse line. Let's put this back and see how it works. Roen is fine, column wind is fine. Diagonal wind basically traverses in this way.

So we just have to pass traverse here for a pole. Reverse diagonal leads to a traverse in a different way. And for count moves we can, we can cut and paste this function, okay? Now what we have is if any of the conditions is met, if the game is over, then all we have to do is return this game still else we have to go to the next two, right? And if none of the conditions are met, then we just return false with no winner. The important thing here is that we have dramatically changed the logic, the processing that we have in the rule engine.

So what this did is it turned a rule engine into a set of rules. When you get to the state of a game, each rule runs once we look at the rule completion is the game over because of this rule? And if it is, then we return the game state. Okay, this makes the rule engine extensible. If you want to make changes tomorrow, you can just add more rules here. If you want to change a particular rule, you don't need to go to get state, you just need to make a change.

Here you see that this is more like a configuration than logic, which is hard coded or you know, tightly coupled with get state. You can also extract these rules out, put them in a configuration file. You can put them in the database. There is some question as to how you can take this logic and put it into a configuration file. There are files which actually give you a way to encode logic to some extent. There are ways that you can encode logic in a database also, but the simple act of just taking code and putting it into a list as a set of rules has already given you tremendous flexibility.

## Builder Design Pattern

Type: Video · Length: 6 min 55 s

### Lesson notes

The video discusses the refactoring of a rule engine and focuses on addressing issues with tight coupling in a game info class. We highlight the challenges of adding parameters to constructors and propose a solution using the builder pattern.

### Transcript

So at this point I think rule engine is sufficiently refactored. There are still some major problems with it, but uh, let's leave it for now. Let us focus instead on the next biggest problem, which is game info. We spoke about how adding wrappers around objects like game state using game info eventually leads to a massive, you know, onion, uh, where the deepest layer is very hard to get to and is very scary to change. So often with this pattern, what comes up is the problem of very tight coupling between these inner classes and outer classes. Technically, game in info just cares about is over and winner, but if game state changes, if for some reason this inner class changes, you will also see game info change that's not so nice.

That's, that's a bit of a problem. So let's change the constructor here. The bullion is over and strength better. Now this is nicer. Uh, the parameters should not have dependent on game state and they don't anymore. They just depend on primitives.

So it looks better, it feels independent from game state. But now what happens is every time you're constructing this class, you're ending up passing a lot of parameters. It is possible that game info does not have a player. So this is null to make life easy for developers, you might create a separate constructor which says if you don't pass player, then I don't set it. This can be used by this function. You may also have a new requirement that says tell me a number of moves as an integer for a given game.

So gimme that gaming info. So if I added one number of moves parameter, I would have to double the number of instructors I have as long as I want to provide them the functionality of still using the old constructors. Uh, the basic idea here is game info has all of the variables that you possibly can set, but with number of moves it's no longer complete. So I can create a new constructor which says in number of moves I can attach the field to this for all old code, which does not pass a number of moves. I don't pass that in the constructor. So this is non breaking code that's great backward compatible and this is also backward compatible.

Eventually you will see some people saying, I don't have a clear who I can pass, but I want to pass the number of moves. So please gimme a convenient constructor for that. So for them you will end up creating another constructor. You see what's happening here, you initially had two constructors, you added a new field to the class and that ended up doubling the number of constructors you have. The reason for that is you may or may not have the number of moves being passed in during class construction. So if you have a class where all of the variables don't need to be set during construction, then you have basically a highly configurable class with a lot of parameters which may be null or zero or having some placeholder value like your number moves maybe initially is always going to be one.

If you don't pass it, I set it as one. When you see this kind of thing happening, as your construction lodging becomes more and more configurable, your code for Constructors becomes more and more bloated. So there is a design pattern which saves us from this. You want the client to have the flexibility to set variables that they want to set and not set variables that they don't need to set. If the class is highly configurable, then maybe a few variables that you want to set and many that you don't want to set. How do you do this?

Let's get rid of all of these constructors and instead create a class which gives us a capability to set the variables that we need to set. So this would build a game info object. So big game info builder. You can see that this is going to be the builder pattern and each variable here we'll have a one to one mapping over here. Now we can provide public functions which create this game info. Okay?

What I mean by that, bullion is over sets is over, right? And just copying for every variable of winner is going to be bullion winner as fork. As fork. In fact, winner is a string. So I'll just pass that here. Player is work here and number of moves define here.

Okay? I've written a lot of code over here and I better have a good reason because to get rid of a few constructors added a new class and a ton of variables along with a ton of functions to set them. How does this help us? Uh, and why I do it this way? Well, a builder is something which will help us build a game info class. We already said that every time you're setting a variable, here you are getting back the game info builder, meaning that if I have to construct this game info object instead of earlier where I used to pass a new, I can just say new game info builder that will need a public class here.

Game state is over, has to be set first. So is over, pass in this variable. Next winner pass in this variable. Next, what's happening here is I'm just getting back the the same game info builder so I can continuously go on setting variables and get the same builder back. That is helping me for this truth. And player, player has not been set.

So I go back here, player, player flip. That's what we need. Number of moves does not exist. Like we said, it's not something which is compulsory. So we don't set it. And finally, what do we need?

We need to return the result, right? We need to return this gaming info. But what you're going to get is game info buildup. So you should say drop build and this will work. So I'm going to create a function here which is going to return new game info. Having all the parameters that we have set earlier is over winner as fork player and number of minutes.

How is this much better than what we did earlier? Earlier we saw that if we had one additional field to the class of game info, we would need to double the number of constructors or at least increase the number of constructors dramatically to stop avoiding from our old code breaking and also give convenience to our clients who are creating these Classes. Classes. Now we just need to add a single function in the buildup. All old code works perfectly fine. New code just needs to say number of moves possible.

The number of moves and your job is done build will change and that additional function will be added. So construction logic has been extracted out from creation logic, I mean where you need to create things. Nothing breaks. So here again you see game info needs three variables. I pass in game info builder I say is over gets this winner, gets this and has fork gets this and in fact has fork is false. We were setting this, initializing this to false because we were looking for a placeholder.

We don't need this anymore. We can get rid of this. Like port gets cleaner and we just do build. And now you see that this construction is so much simpler to read is over is set, winner is set because those things matter. Nothing has matters has fork true matters because it's not the default value. So this has cleaned up our code.

## Summary: Open-Closed Principle

Type: Video · Length: 0 min 49 s

### Lesson notes

The video introduces the concept of the open-closed principle, specifically focusing on being open for extension but closed for modification. The open-closed principle suggests that you can add more rules or functionality to a system without modifying its internal code.

### Transcript

This is an example for open closed principle, open for extension. You can add more rules, but close for modification. You can't really change the internal code for these files. The idea of this is similar to the onion that we were talking about, that you can wrap around existing logic to increase functionality, but this is better because you are not just wrapping existing classes and existing code and making things more complex and more nested. You're instead extracting out logic which is separate from the core functioning of the class. So the core functioning becomes tighter and tighter and it becomes extremely closed for modification, but it's easier to pass in the right parameters to these kind of functions and get them to do what you want.

That's.
