# 9. Test Driven Changes

## State and Strategy Design Pattern

Type: Video · Length: 6 min 42 s

### Lesson notes

The video addresses refactoring an AI engine's decision-making logic with nested if-else conditions for a game. Design patterns, specifically the state machine and strategy pattern approaches, are explored. The state machine approach encounters challenges in defining clear state transitions, defeating the refactoring purpose.

### Transcript

All right. Now we are going to do something quite novel. We are going to be trying to refactor a piece of code which can have multiple design patterns. And the place we are going to do this is suggest move in the AI engine. The reason for this is because you have this big nested effects conditions and it's not as innocent as replacing with the switch condition. The reason for this is because whenever you have any change in your algorithm, anytime you want to update or enhance your game, any optimization, you will need to down to this function and make changes.

So that violates open close principle. You may have multiple conditions coming in here. You may have additional logic being written over here. This function is very hard to test, but it's not very readable and it's not very extensible. Now let's go for a couple of options. The first one is that you can look at these if and else conditions and say that this is basically the state of the universe, which is making us do certain things.

If the current state of the board is such that you have played more than threshold number of moves, then you're in the opening state and based on that, you'd be making an action. Get basic move. If the current state of the board is such that you're in the middle gate, you'd be a slightly smarter move. If you are under time pressure, you make a basic move, a simple move. Otherwise you make an optimal move. So this entire effort block can be thought of as a state machine with transitions from one state to another.

If the transitions can be mapped as these actions and the state itself can be found out by using the old or the player. So these are the arguments which define the state of the current game, and the game would be making moves based on its current state. That's one way of thinking. The other way is to think of each of these moves. Get basic move, get self-declared, get basic move, get optimal, move as strategies in themselves, you are going to be saying there are three types of strategies that I have and I will be making the choice as a programmer on which strategy I should apply. This has a problem.

The strategy pattern is best applied when the input defines what strategy you should apply. So if the input would defy whether you should play a basic or advanced move, then it would make sense to apply some sort of strategy pattern view. The other thing is that each of the strategies are usually isolated. They're not related to each other. You can't move from one strategy to another. While here we seem to be jumping from one state to another, and based on that, we are making, so the interrelation and the lack of clear definition in the input suggests that we should go for state design pattern.

There still is a problem, but uh, let's go ahead with this. Let's say that you go to your engineering manager or your senior tech lead. You talk to them about applying a design pattern and they say, yeah, open source principle is being violated. Let's try the state design pattern. So after adding a nice Jira ticket on refactoring code, we come to this class. State is something we need for a state design pattern.

Implementation class state is going to be extended by multiple classes. One is the opening as we mentioned. First, if condition is that of a opening, we also, and then we have time pressure. You read more than 100 seconds, then you are likely under type pressure and get optimal. So it's a a tiny. Now state is going to be an abstract class, which has to define certain functions.

The rest of the class will be extending state. Also, a state can be defined clearly by passing in a clear and a board. So this would be the internal data members of state. The behavior that a state needs to define is where I should go next. And also as you can see, it needs to suggest A, so either it needs to make a clear move or the suggestion is a cell. So where should I place this?

These are two abstract functions that each state needs to define where I will be heading next. When it comes to placing cell, you can look at opening. The opening says that I should make a basic move based on the current board state. Basic move is defined in the AI engine itself. So let's take that logic and copy it Here. You see there's a compiler here, which is because we aren't used ttac board, right?

Internally, this is using a TAC board B. So it's fine to use TAC board. Yeah, and what do you move to what is the next state for opening? The next state could be anything because you have a log here. So every time you're actually checking your current state, it's not that you're transitioning from one state one, that's the first red flag. Let's see where we are going.

You can't clearly define where the next state is. One thing you could do is you could just copy paste this code, which defines which state you should go to next after making a move. But then you are basically copying all of that offense conditions right here in this next block. The state cannot clearly define where you should go next without looking at the current clear and board conditions. So there aren't any state transitions. The states are dependent on all of the parameters in the universe right now.

That is a red flag. The reason I'm saying this is because usually in a state machine you have a clear set of actions that you can make, and those actions pretty take you to the next state. Here, that is not the case here. You have technically an infinite number of states, the number of board positions and clear. So that's one problem. The other problem that we said is that the transition is not smooth.

The transition is not clear. This logic, if moved here, is going to tell you where you should transition to, and that defeats the purpose of any kind of refactoring because instead of one place having the logic, you now have four states having the same logic of how to transition. So red flag here, but let's say that you know, we don't need the next state. We are implementing the design pattern, state design pattern, but we don't know which state we should go to next. We just know where to place the cell. So the algorithm of what to do is define clearly here.

If you do this, what is the benefit? Our original problem of this nested FLS condition is not going to go away. So the state design pattern is inserted for our refactoring and therefore we shouldn't even try to do this. Now, going back, for all of the investment that we made on creating a class for state transition, yeah, how could we save opportunity, save time, same effort by just looking at the old piece of code. The big red flag over here is that the state transitions are not dependent on the state itself. So if you have five states here, then you basically have 20 transitions, five into four from any one state, you can go to any other state.

In fact, I would say it is five into five because from the opening, you can stay in the opening itself. That's a lot of relations between all the states. Usually in a state transition diagram, you have a clear definition from one place to another. It may not be linear, but there's a clear graph. There is some benefit. If you have a very dense graph, if you have a total mesh of the graph, then it suggests that a state transition pattern is not going to help us.

You.

## Writing Tests for Timed Games

Type: Video · Length: 5 min 5 s

### Lesson notes

The video discusses the improvement of a code segment related to a game object. We point out that the current code is difficult to understand because it lacks a constructor and has many data members. They emphasize that the "game" class is not being used, and suggest creating a test for it.

### Transcript

This decided, let's move to the next piece of code, which is game. And the reason why this is painful to look at is it has a lot of data members but no constructor. And the reason for that again is because game is not being used anywhere. It's a public class. It's likely to be used in the server when you're creating the concept of a game. But for our purpose what we have do is we create a test around the game object.

So it's obvious that there is a use for this class in test test, public test. Here let's create a game object. What shall we test inside the game itself? One of the things we can see is it making moves is correct, making moves, system making sense and a move for a timed game is also to be big. Now what should we test inside this game? There's a single public method, which is me and what should we test In this meet there's a single public function in move, so that's the only function we can test.

What it says is make this move at this timestamp. Internally, what happens is that the tiling of a player is updated if the game config says that it's a time game. Otherwise you just make the, if you make a time move, then you go to this function. Inside this function you are checking if there is a certain amount of time you get per move. So three seconds per move, that would be 3, 2, 1, make a move right now and then later on you get another 3, 2, 1 and make a move. Right Now if that is not the case, then you come to the LS condition and if the move was made in time, then make the move.

Otherwise the winner is the other player here. If you have that three to one second, if you have a particular amount of time in which you have to make a move per move, then also you do the same thing. So move made in time contains a logic to this and it's an overloaded function of time taken since last move or the current clear spike. Not very intuitive with Frank with you, this kind of code is confusing. It looks like the same thing. You have to check the type of argument being passed to understand what is happening internally.

So one of the things we can do is immediately improve this. If in confi says that there is time per move, then what is internally happening is this function is being called with this parameter. Otherwise this function is being called with clear dot get time used in millis parameter. So let me try to extract that. Yes. Now we have both of them as inch.

In one case we have max time per move and in one case we have max time per clear. So I'll just extract this also. So this would be end and you can see that internally the ID was smart enough to call this function. I'll just inline that. Yes. Now both the cases have the same function being called and so this piece of logic is the say.

All we have to do is pass this differently. So if this condition is correct, then it pass this variable. Otherwise pass this variable. I'm just using eternally operator. We could improve on this also. And you can say time taken since last move is what you're passing here.

I think the ID has messed up somewhere our feeling that not done the right thing because time per rule is not what we need. We need to power is being passed it. We'll fix that in a minute max time go move. This has to be written done in time. This is what we are going to be passing in. Also, we have in in time, which is either max time per move or max time per.

Now all we have to do is just pass this as a second function. Now the IT condition doesn't, this is what we have because it's a single line function. Probably makes sense to just extract this also just in line, you see we took a lot of lines of code and just collapsed it entirely. The reason I was able to do this is because I noticed that both the behaviors inside the F condition were very similar and what we did is we extracted out the parts which are being compared the current time and the end time and moved it into a single line. So if the game configuration says that there is a time per move, then you take the time taken since the last move. Otherwise you take the total time that the player has taken and you compare it with the maximum time per move or you compare it to the maximum time per clear.

If we have gone through this logic earlier, that's why I'm just skimming over it. Uh, a easier way to read it would be that if this condition is satisfied, if you are a move waste timer, then set current time to this and then time to this, otherwise set current time to this and end back to this and to show that there is no way that you can't initialize this. You can then add a final. So at the end of this current time and time will be initialized depending on who you ask. One method may be more readable than the other. If you ask me if its conditions are more readable than turn operators.

The problem with turn operators is you have everything in a single line. It's the line really long. You have to keep things in your mind hanging in your mind. When you are going through a turn operator here, it's much clear that you have a single condition and all of these things happen. Otherwise, you have all of these things happen in eternally. You have to recreate that condition.

Multiple types as you did with car.

## Factory Design Pattern

Type: Video · Length: 9 min 14 s

### Lesson notes

In this video, we discuss the challenges of constructing game objects with multiple parameters and propose a solution using a "Game Creator" class. We explain that the Game Creator class encapsulates the complex logic involved in creating game objects, allowing developers to use a simpler interface for creating games.

### Transcript

Coming back to the game object. What is it that we really want to test? We want to test if the number of seconds are being added to the player correctly or not. That is one thing. We also want to test whether a person can win or lose a game based on a time off. Let's start with the simplest thing, sort of default test.

We call it time or test. Now the game, we have a game config. We uh, that's called game confio. This is not public. So instead what I lose, I'll call it set config. Now, game config itself has a type of move and type.

So we need set for this or we need a constructive for this. What I'll do is I'll just add a constructive with both of these parameters. So here we now need to pass time per move. It's called that three. Uh, and it is time. What else?

Game has aboard? Game has last move time in middle and all of this stuff. So what we could do is instead of having setter methods, let's just create a constructive and coming back to the game test, we now don't need this set. Instead get past this in the function itself. That's one argument. Then we have a board.

So you ttac to board, then you have a new CLE with the symbol of X. This would be a winner or a loser. In fact, it'll make it null because we don't want to set up winner right now. Last move time in middle release is system do current time. In middle release max time per player can be one 20 seconds. That's two minutes and max time per move can be three seconds in test is telling us.

Then game expects in over your last move on release. So instead of current system time, we can pass in the second elapsed. Yeah, in second elapsed it's equal to zero. So the timestamp now is okay. Later on if you want to pass the last move time in release, we can pass it in. There's three, four, whatever we like.

Now look at this construction of a game object. It's got six lines of code. Even if you condense it into a single line of code, the problem doesn't go away because you have six parameters that you're asking for. Creating one game object, six parameters means that a prober who's writing this game object has to think of exactly how the game object is being constructed. Every single detail you have to pass in whether the player has already won the game or not. You have to look at how many seconds have elapsed.

You have to look at how much time you are allowing one player to take. If some of these are related to the construction of the object, because yes, when you're creating a game object, you need certain parameters to be passed, but some of them are actually implicit. So it's not the words best constructive, I agree with you. However, sometimes you want to pass a a winner and check if the winner has been set correctly. So what's happening here is that we are seeing that constructing a single game object is taking the developer time to understand all of the parameters that can be passed it tomorrow. If you want a different kind of timeout test, let's say timeout test for clear over here, you want have time per, you'll just have null past it.

Being that the game is time, but uh, there is no specific time to move. Then again, I had to construct the entire object. I had to create everything I had to pass in every parameter. As a developer, this doesn't look so bad in testing because okay, yeah, I'm testing the code, but in production when you're creating objects, it could be as bad as this in the code. You need to define new game. New game config, new tac board.

Now in last seconds it's, it's bad to read. So what can we do here? Can we make the game construction or the object construction gear simpler? And the answer is no. We can't really make it simpler because someone has to define these parameters. But we could extract these pieces of logic and move it somewhere else to a more related themes.

So constructing a game will no longer be a part of the tests or a part of any class which is requiring a game. These games will instead be created by a specialized class, which just does one thing and one thing. Well that is creating games. Let's do that. Let's call this game creator. And what this does is it takes the common ways in which games are created and exposes them as cultures.

You can think of these as APIs. An easy way to create a game is going to be defined over here. So probably game is what you want. Create game and what are the parameters that are being passed it. I don't want them to eternally if it uses a game config or not. I just wanted to tell you the maximum time that you can have per loop.

So game max time for no is the game timed or not? I think this can be made obvious. If max time per move is not set on max time per pier is not set, then the game is obviously not time again, coming back to the game creator, max, time per move, max time per clear. You also have a board. So do you want to define the board here? Do you want to pass it in as a function or do you want the game created to create the board for you?

So this depends. Initially when you are creating a game object, you expect the board is already going to exist. So please create it for me will be the expectation from the client. The client can create the board and give it to you, but you're just going to create the game wrapping on top of that board and give it back to them. So why don't you create the board yourself? It's your responsibility to create the board as a function which is creating an entire team.

So we are not going to take a board, we are just going to take in configuration parameters here. So this is not gonna be taken in. What about this? What is this clear winner? Well we talked about a starting board or a starting state. So this is null.

We are not going to pass that second elapsed. Initially the number of seconds elapsed to zero and these two parameters already passed it. So basically what we have is with just two parameters, what happens internally return new ga, new gate config max type, popular max type popular not equal to zero. In fact max popular has to be an job because it can be null. I also pass this job so you it's not null. Then you have a board.

So a new tic-tac board. Depending on how many sorts of games we have, the game creator can actually fix this. It can also take this in as a parameter. So type up board and do something. And based on that you'll create board. Next comes who's the winner?

Well, initially we don't know. So I'm passing in null. Last link time in Milli, that's zero. Max time popular player is past in here. Max time per move is passed in here. And that's what we have.

We notice that max time per year can be an in detail, uh, which could draw out quite exception here. So let's come to the method and let's in fact change the types here. So these are another objects now. Great. So this allows us to create a key. We could also create a different kind of kit where you have an existing TikTok board.

So instead of creating a new board, you're going to be having this board, why did I do this? Why did I create a new function which is allowing you to massen max time per move, max time per player and a board. Well, because in some places you might need to analyze your old deal or in some places you might want to start with a given position. So starting with a given position is with a starting board community call, a starting board where you're clearing, you define that there is no winner. The move is starting right now and then you have a max type workflow and per move. So what we have done is we have taken the logic of instantiation logic of creating objects and move it into a separate class called Game Creator.

Now our tests don't need to remember all this complex logic and even better, of course our code does not need to remember this. So if you have a single game creator time, like and we can use that to create a game. So here max time is going be three per move. It per player is going be one 20. That's it. That's a very short piece of code.

And here we have Game Creator dot we in null D one. So we don't need this variable. This object of game creator is basically by the factory. So sometimes there's a very clear naming of Game Factory two, A factory takes complex object creations and converts them into simple object creations. You can pass in simple parameters into an API. And this object Game factory is going to create a complex object for you without you ever knowing about how it was created.

So the best bit about this is that multiple classes can reuse this factory code can ask the factory, you create the object. For me, I just have these few parameters. Take it, create it for me, give it back to me, return the game. It's a little different from builder because in builder you had many parameters. You had a complex object which is being created, but there is no in initialization logic, which was forcing you to extract out the code into a single place. Builder is easy.

You can just directly set these parameters one by one. What you're doing here is that you app a variable lower parameters. That's what happens in builder. In factory. You have complex initialization logic, which means what you should pass in here is not very clear. Maybe before you pass something and you have to create a tic-tac to board yourself.

So that part of complex logic is Moved into a factory and in a builder it's a single life. That's the difference between factory and pil. And the reason we chose factory here is because it's not about setting many parameters. It's about creating the object in a sensible way, but still encapsulating it in a single piece.
