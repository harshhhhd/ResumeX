# 10. The Strategy Design Pattern

## Unit Tests and Object Pools

Type: Video · Length: 8 min 33 s

### Lesson notes

We look into different methods for constructing objects.

- Object pools

- Factories

- Static Initialization

### Transcript

Another thing about the factory pattern which helps with these tests is you can take initialization logic and move it entirely into the factory if you are passing in certain freezer as none. Instead, you can create a new function similar to new construc, which will be taking in just one parameter of max time clear and it'll be returning this field as nu. Also, what I can do is because I know that Maxime Tokyo is being passed in, the only parameter for create game being passed in as NAL may not make sense. So, uh, I'll take this to be true, max. Time clear is not new and we can create another function which takes absolutely nothing. There's no period time also taken here.

This is nu this is also Nu So I've encapsulated all the creation logic inside the factory and tomorrow if you want to go and check whether a profile exists or whether um, simultaneous game is not being played, that can be taken care of in the factory itself. The reason I'm not pushing it inside the game is because the game has nothing to do with that. That is business logic. Business logic related to the construction of a game. So it should be outside the game object itself. Uh, however, it doesn't need to be repeated again and again.

Construction logic can be put in one piece. The class for that is called a factory. Let's also write some tests to make sure that the game is actually functioning as we expect it to in not move it. So what I just did is I made a move what the player is. I take this out in a video on the first set so it can also be made available in the current time. You see that this is returning long, so it has a level, but even worse is that these tests are now time dependent.

If you run it in the morning and you run it in the night, will be giving you different outputs. Even if that is not the case. If you're just looking at the difference in the current time least the problem is these test different amounts of time when you run it multiple times. So maybe it'll run in three milliseconds, sometimes maybe it'll run in five milliseconds. It depends on how many process are running in your computer right now. It depends on a lot of factors.

They are also dependent by the way of the device that you're running. If you're running it on a small computer, it's probably gonna take more time. The large computer's probably gonna take less time. So system do current time me or system do nano time is not what you want to do. You don't want to use the systems clock. You want to pass in the time by yourself so that these tests are properly decibel despite having a variable time.

Firstly, you are talking about time SNAP and me as an IT job. So I write that in equal to 5,000. This is not an OP time, this is a timestamp being used for the test. Now with this we notice another problem. Let's go to cell. You see that every person who constructs cell has to go through this new operator.

If you're constructing a cell here, you say, say return new cell. This usually is not a problem, but let's go to cell again and see what it actually contains just to row a call. That's it. Which means that these data members are immutable and the cell itself can be shared across the entire cell. So what does a cell actually mean for us? It doesn't mean the symbol that is on the cell, it just means a position supposition zero comma zero position, zero comm one.

These positions can be shared across the entire service. You don't need to recreate them again and again. This means that some sort of creation logic has to be extracted out. Again, you cannot have too many people creating multiple sets because there is no use for it. They can share the position information amongst each other. Something that happens in Google mod app, they shared timestamps amongst multiple times series because the timestamp value itself can be shared.

12:31 AM can be shared across multiple times. Series. You don't want that to be created multiple times across different time series. So for a cell, you won't be directly able to call the construct. Instead I say public get cell. Now I can have a map of cells or the set of cells in every map.

Someone ask me to get a cell, I check whether it already exists in the created set, and if not, then I construct the cell and I give it back. There are a few problems here. As you can see, a cell is a very light object. Uh, if this is a database connection or something, then I would've decided that, oh, you asked me for a connection, I already have it, take it. But for a cell, for me to check whether the cell exists in a map or not, is going to end up taking a little bit of processing power, especially how are you gonna check it in a set? In a set.

So you need the row and the call to be sure whether it exists in the set or not. So you need two just here. That's the first problem. You can't do that with a simple set. The second problem is the check is too intensive. So instead of set, I can use simple of three plus three.

Um, of course you need a cell reio, and now you see that if the sellers already being created. So if cells are low column not equal to that, then it doesn't cells off low come out column. Otherwise you have initialize. So in any case, you have to send this back, swipe that you, and if it is equal to now, if it has not been initialized, then set the value. This is the basic idea. If you get a request to create a sale, you don't go ahead and create a new one.

You check if it's already created and if it is, you return what already exists. If not, then you create. There are many, many problems with this method. Let's go through them step by step. One of the things is who can call this function? This function belongs to cell.

So the only person who can call this function is a person who, who is a cell in their hand. How do you roll the cell in your hand? If you can call this function, it's a cycle. Nobody can call this function. Basically, it's impossible because you have a private method for constructing a cell. The only way to access it is if you have a similarity.

So, uh, this won't work. Instead, in Java, there is a keyword called static. Static means that this method belongs to the class. What does this mean? A class, as you have heard, is a blueprint for an object. So you may have thousands of objects, but there is just one blueprint.

The blueprint tells you how to create these objects. If you have one blueprint and you attach a method to that blueprint, how many objects have this method? Just one. There's just one blueprint. One object has this method. If you have any data members that you are assigned to class, if you put it as static, how many objects happiest data members, just one, one person has access to it.

So the benefit of this is that you don't need to create objects even with the blueprint. You can do things. You can call methods which are attached to the blueprint. You can use the data members that are attached to the blueprint instead of the objects themselves. So you don't need to create objects. Uh, if you put static for the class, the blueprint itself is created by the Java virtual machine.

So on initialization, all of these blueprints are created so that you can create objects in. So static doesn't need a constructive either. This is already created. Now you can see that the compiler is complaining, uh, based sensibly. It's saying that if this belongs to the blueprint, then you're seeing things which belong to the objects themselves. This also has to be static.

The blueprint card access members of different objects, they may not be created, so it has to access objects of the blueprint itself. This became a, that is interesting, uh, but that's not what we want. Let's go to the test cases that we are looking at Now. You see it's working. We did all this stuff primarily so that we can save on some memory, and this is a pretty efficient function. If you could get rid of this if condition, that would be even better.

Uh, because you know, every time you're trying to construct a cell, it's going to go through this if condition. So one trick to get rid of this is to actually construct the cells here itself. Because it's a three proxy, three board, it's possible to just do this manually. And if you do this, then you don't need this condition. You can just return the cells because there is only digitization problem. The only problem is it looks horrible.

You have these cells constructed manually tomorrow. If the TIC-TAC award becomes four plus four, you'll have many problems. But this will be probably one of the bigger problems that you'll have. It just looks terrible. However, let's go ahead with this for now and later on, see what are the problems that happen. You ever have a four plus four or nine plus nine TIC-TAC code.

## Setting Timed Test Cases

Type: Video · Length: 5 min 22 s

### Lesson notes

We set timed moves in test cases and check for correctness. An interesting bug pops up!

### Transcript

Okay, so what do we test here now? Uh, we have a game and we are talking about a timeout test. We need to check if the player is set to time. So let's say we make a move here, uh, and then there's a few other moves that are made. Eventually we should see if the game has finished as method should return. So, and one of the players will have won escape either X or O.

Let us make it such that X wins escape XOXO, fourth, second, or and fourth said. So a better way to do this is to call it C zero zero, C zero one, C zero two, and C one zero. Yet winner. Let's get a method which says use the winner. Uh, return the winner. This is a clear, so the winner should be X.

This move takes five seconds. This move takes five seconds in total 20 seconds. So what we should probably see is max time per year should not be 20 seconds. It should be 19 seconds. In fact 10, that will be good with 10. Both years will take up 10 seconds.

So we'll make this 11 seconds. So you have 11 seconds. I have 11 seconds. I pay my first move in five seconds. I have six remaining. You make it in five.

You have six remaining. I now make it in five. I have one remaining. And now you take seven seconds. Eight times seven minutes, seven, you lose the game. Let's run this test and see if we have everything working.

Uh, in a second. We know whether things worked out or not. The test is failing. So many things might have gone wrong. We are not sure exactly what, what we should do is we should look at the game. Yo, you know, what is the state of the game?

So now, instead of just running the test, let me debug it. Okay, let's look at the game. The cells are all nu so that is odd. Let's go to create game. Let's look attic tac board. Okay, this is clear because should add sound S that are key already.

And the weird thing is that the get winner is, uh, an object comparison. So this, this is not true. What I want is the simple. This should be the same. In fact, this should give you the right answer Also, let me run the timer test or it works. How interesting.

I'll straightish what's happening in the move. If it works, then you know, is it logically still making sense? We have max time per move is three seconds and we are spending five. So the player should have lost this test is Incorrect. The pier should have been, oh, let's see. That is the case.

Yeah, the test is very interesting. Why, why isn't this being taken into concentration? So I took five seconds in a three second per move game and I still end up being So why is that the case? Uh, let's see this, I have passed in five seconds here. This is spike minus zero, the default value. Uh, it gives me a five second ratio.

Move dot, get your set time taken as five seconds. What happens here? Nothing really just adds time. Here is the game conflict time. Yes, uh, move for time came. We now give config.

Time per move is not equal to now it should enter this area. Current time is equal to times since the last meet. That's this five seconds. End time is max time per move. After this, we come and see if the current time, which is five, is less than the end time, just three. And this is false.

So we then come here and we say the winner is the current player slip. Okay? So player flip gives you, oh, this is what should have happened. So why didn't happen? Let's go to the team test. In fact, right here, we part this when, uh, winner is now year zero.

So this part of the code worked perfectly. After that, we made subsequent moves and despite of winner already being set, we continue making. So that part is wrong. So whenever you're trying to make a move, if the winner is not equal to none, then you don't do it. You, I should say, if the winner is equal to null, then you do something. Otherwise you do nothing.

Now let's run this game test. This is again working okay. In fact, with a single move, it should still work.

## Fixing bugs in Game Logic and Factories

Type: Video · Length: 15 min 45 s

### Lesson notes

We debug over five bugs in 15 minutes!
The game logic has hidden bugs that surface through different test cases. Squashing one leads to another, but the slow progress eventually leads to working code!

### Transcript

Now let's make the tests a little more complex. We have a very basic test here. We checks for timeout for one single minute. Let's also check for game. Let's put this as five or even six. Run this test, it passed.

It should have failed because X took 10 seconds. In total having 11 and O took five plus seven, 12 seconds in total despite having only 11 O should have lost, but that didn't happen. So let's see what is the case here? You might be feeling like this is very deep boic. I mean isn't this something that we can just get? The problem is in the real world when you're writing test cases, this is very similar to how you write it.

You're going to be looking at the correct expected outputs and then you're going to go back to the code and see some options. Once you have fixed the code is the time when you, you can actually think of refactoring code or you can think about should I even pass this code ever again? But before that you can't really do anything because if you are going at improving court and making it more and more, it's a scalable and extensible. Without correctness, the court has no mean it doesn't work for the customer. Also remember that if you write test cases once it lasts forever, those test cases, as long as they're reasonably extensible, can be used by 50 ratios or at least 10 it ratios or the same code. Tests are extremely cheap to run.

Also when compared to you checking things manually or in pro. So coming back over here, the pen is null. If the vendor is null then you go outside, but the panel has already been set. So let's see what happened here in the board. There's no problem in the gig or has been set as a pillar. How is that possible?

Let's open the board. Let's see the sets. Alright, firstly, this is strange. Why is it null all over the place? The board should have been manipulated by now. When you say board move, is this not happening at all?

Let's stop the test. Let's come back here. Let's see. Oh yeah, it's not being called at all. So that is in itself interesting. Here we can see that there's a bug in the code.

What has happened is move for time. Ade is saying you have a particular amount of time you can use per move and at the same time you have a particular amount of time that you can use for gain, but there is no if else that we should have here. This should be regardless if there is a timing per move to this. Otherwise you have to do this anyway. Game time in total cannot be exceeded by DP regardless of whether there's move time also that you cannot exceed. So I'll take this, that it over here.

So now we have a check for overall game time and we have a check for a single news time. You see these two are extremely similar, so let's cover that into function. It's taking current time and in time and checking whether it should make a move or set. So let move. So just a little bit of refactoring and just in line the methods. Let's go here now and again.

Run the test seems to be working fine, but like we said, board dot move is pretty important to make sure that it's actually doing what it's expected to do. So let's run through this again. It's not happening. There is a problem. Possibly board the time. Move, set, move or winner.

Yeah, this has to run. This is what we want and that's not being point. So let's see what's going wrong again, let's set this big point again in debug. Winner has been set to O let's reach on the is a winner set winner has been set to O when X made a. It seems like the very first meet set with that's where the bug is initially. Let's go inside weather is initially null.

We set the time for five seconds for that clear we set. See that this is a time per move in go inside. We should be, it should be called now this that is strange. I'm taking this five times of the six. Why is this feeling? Oh it's because the is in seconds while we have things in millisecond that is just insane.

That's crazy's. Come back here it send this to 8,000 and this is 11,000. You can also set all the values in settings. That's also going to work fine. Now let's try to run this test speed. Finally at the end of the game, let's open the board all little bit Nu and the test feed, it's saying that X should win the gate.

Yes, that is true. X extra win the gate. But one odd thing is that the game moves were not considered. So that is again strange. What does board or move do exactly? It adds something to street, makes a copy of the board and then returns a board.

So if you don't use that move, we go, okay, board that move is not going to do anything. He's going to create a copy and make a move on it. So board has to be set to that. Either you do this or you make move, make changes on the board. So we don't want that. We want to use this prototype pattern to create a copy and then make moves here on a new board.

But for game, that book has to be considered. Board is now able to the new board and now let's run tests. We get an exception. Why is this the case? It's an illegal argument. What's happened is the servers already set when we try to reset it, okay, this happened here in the move.

This see looks fine. This is us creating a new board here. Set move or winner that is over here and game. Yes, you can see the problem here you are setting the move and the winner twice possibly. This logic is getting really complex. What is happening is it's possible that the board is set twice and that the winner is also set twice.

Setting the valid device doesn't matter because it's a item important operation. If you do it multiple times, the same change as made, but setting the board multiple times the same square is not allowed. One of the things that we could do is we can say that if you are setting the board multiple times for the same symbol and that's okay, it doesn't matter to us, but it doesn't seem right. The second problem is that initially you make a move and then you see that you're actually lost. So you're made a move but you lose that is possible. So this codes feels wrong.

I can see the major problem in this code is that we are first checking one condition and saying, okay then go ahead and do this. Then we are checking other condition and say okay, do the same thing. That shouldn't be the case. We should check all conditions together. This condition and this condition are not independent. They are depend on each other.

Let's take this, move it out of the function back into the older function. The refactoring did happen. We we again took back our old code and put it over here. Here this function makes sense. Let's put it on top. It's for overall game time.

This is for a move time. So if you're allowed to meet this need, what are the conditions where you're allowed to make and in config not. These are the places where you're allowed to make a move. What does this mean? It means that if the maximum time per period is not exceeded and the move time per peer is not exceeded, assuming that there is a move time, then clear a move. If there is no move time, then what you do.

So if this is null then you don't need to look into this, right? So if this is equal, equal to null or max time per move is not exceeded, then go ahead and make a, otherwise you'll lose the game. Both the conditions have been moved into a single lift block. You see that we were trying to break things into multiple conditions and then try to reuse code. You don't need to reuse code if you can just put it in one place. The if conditions have to be checked together.

So again, let's run this test. Now it's giving a wrong answer. O shouldn't win, which makes sense. X should actually be in this game at the same time. Let's also go through a debugger and see whether the game state is correct. It's open board, yes, you can see the cells, you can see XPO X and you see that over and make a loop because it took seven seconds.

So O was not allowed to make a move. In fact that is odd. Uh, let me just check. That is what should happen. Weather was initially null so you should come inside then go here. Then you try to make a move, but you see that you've run out of time.

So the weather is set. This is fine. Let's also see if the oil test is working. Yes it is, it's great. Other test where you have each pinup making moves very quickly. So in two seconds, two plus two for x two plus two for O, that's for each.

You still have seven remaining. Now I want X to make a winning move. So still be one comma. One O can mimic another move, which is a down move. It doesn't really matter. So let's say one, two and then x Ps or zero, which is very, so in total X takes two plus two plus two plus two, which is eight seconds.

So it is well within time and this should end up a victory three or X. Okay, even in a time game, you're billing X agency nll pointer exception. So winner has not been set despite X, having a state which should look like a victory. Yes, this should have set excess, a winner. So let's go inside. Firstly, see the bug here.

After every move that we make, we should check if the game has ended and who's going to tell us that. A religion, you have a game and you need some sort of access to a religion now, but either you have that in the game itself, a religion which tells you whether uh, game has ending, which seems to make sense or you have that outside in a calling function. So the game test should then check whether the game has ended or not. That doesn't make much sense. So I'll have the religion right here. The reason it doesn't make much sense is because just imagine any person who's going to be looking at winner is going to be expecting you don't just say a winner when a game is timed out.

You also say when the winner has made a winning move also. So uh, the responsibility has to be encapsulated by the class which is offering the better. Here religion will be right here. We can initialize, renew religion. Yeah, here, after every move check its game is over and we said the winner has the move maker. Could this have H cases?

What if the game has already timed out? You have set the winner and now the religion is checking. This doesn't seem right. What has to take precedence is have you run out of time or not? Although in this case I don't see any errors coming up because if you have timed out, then you're not allowed to make a cure. The move will not be played and and if the game is over, then the other player would've set it up beforehand, have come here.

So if there's a lot of edge cases here, you see that you don't want to do this, you can do a little bit of defensive programming and just say that if the winner is not equal to null, which means the time has not run out yet, then check whether the game is over after your move has been played and then set the player. Okay, so let's go here. Winning conditions, set a window, time out, set a window, time out for a particular move also sets a window. This condition should hold true for this type of board also, right, which does not have time out per player. It doesn't. That's a real surprise.

Oh, we have sent the max time really, really large. So instead of this, we have to set back 11 seconds. There's null point to exception because max time per move should be zero. So time per move is null. This all condition should not have even been checked. It's rather the here max time per move is null.

So that is going to create a problem. Possibly game config I per move is equal to null. So this is interesting. I per move has been set to 11 side. So game config has been initialized incorrectly. Let's see's initializing this incorrectly.

It has to be game factory. Yes, this is supposed to be null and if you don't pass it any time, then this should be false. It's not a time. The factory method had some problems and that got caught in the tests. Good stuff. Let's run this again.

Yes, it runs correctly. Just to be sure that this runs perfectly. We have to give it the first test case and now we copy the first test case without having a poor move timer. This test case should say there is no winner because overall there's 11 seconds and you just spent five with a single move. So in fact this should be no, there's gonna be null pointer exception can not win itself, should be this runs fine. So with these tests you are conferring to some extent that you know your code is fine, there aren't going to be any obvious parts that are going to be caught.

How do you write these tests in a way that it's easy to read and easy to later on extend. Also, if your code changes, then your test shouldn't break. One of the things that you could do is you can write utilities to actually get these cells. Instead of writing it this way, maybe you can have a utility which gives you an entire port with certain cells set up. That would be one way to reduce the number of lines of code you're writing over here and also all these boil page jargon. The second thing that you could do Is, is think about the edge cases.

The times when you have like three milliseconds left or one millisecond left, what happens there? Does your code still run? So if you have those cases covered, you have a lot more confidence in your code. We have done one thing which is big red flag, or should I say an anti pattern, which is we try to test two things at the same time. One is the logic of the test and the second is the factory method itself. You saw that there was a bug in factory which got caught in this test.

You might feel like, wow, that's amazing. I'm catching multiple bugs with a single test. But the whole point of unit testing is that you test one single unit, you should first test your factory, whether it is creating these games correctly, setting the right values in the right places, and then you can test whether your game logic is working fine. That would be the right way to take it. In our case, we have taken game and Game factory tested it together. It's not terrible, but it's not a great design pattern.

This would be an.

## Strategy Design Pattern: Implementation and Benefits

Type: Video · Length: 12 min 43 s

### Lesson notes

We refactor our existing code to follow the OPEN-CLOSED principle.
To do this, we take the help of a popular and powerful design pattern: Strategy Design Pattern.

### Transcript

So now let's come to the AI engine again and let's go back to the most egregious piece of code that we have. These FL statements, it's difficult to change this. We have tried earlier, but even now you see that this piece of code is hard to read. There's a lot of conditional statements and whenever there's a huge block of FLS or a switch case, the problem is the developer, every time they're making a change has to go and add a if or else condition. Can we make that better? So we just had the concept of a factory pattern.

Now look at this. The suggestion object is actually being assigned by one of these methods. These methods either takes B, which then is the tic-tac board and it also takes sometimes a clear, can we make this a generic? Can we say that the suggestion, the cell, where we are supposed to play can be gotten from a factory? But you can't do that with functions unless the factory is a turning a function that will be necessarily complex. So instead what you can do is create a factory.

And what this is doing is it's saying that bits send should be plate. So this will be like a suggestion factory of a AI factory, maybe suggested move factory would be one thing. Suggested move factory is also not making much sense because it creates suggested moves. That's not exactly what is happening. Instead, what it is actually doing is finding the best move to plate or telling you, hey, you should use this algorithm to get the best move to play. So in this case, this is the algorithm factory and there's a particular famous word for this which is called strategy.

This factory will tell us what algorithm we should apply to get the best move, create that class, let's go back to the engine. It's going to be holding these moves, get optimal, move, get cell to play. So these three methods have to be moved. So let's just cut this and put this over here. For now we are just having the methods. Eventually we need a object to be returned 'cause that's a factory and it's made return an object.

You can't return a function, you can't technically return a function, but that's a function object. So why not wrap it around with the concept that you have. The offense is not being called by anybody, neither is defense. This suggests that these three methods, including the get basic mode, has to be moved into the factory. You have these functions which require a rule engine. The rule engine get state is the game state.

Do you need a rule engine here? No, you don't need to see. Now the AI doesn't have a room engine. That's quite interesting. I don't know if that'll actually end up working, but let's see. Strand factory is going to be returning a strategy.

It should really be returning a set, it should be returning you something which plays the optimal move when coined upon, we have this logic over here which can be cut out and said in suggestion, based on a strategy, get optimal. Okay? And here you're going to pass in the board and the player stuff that you're using anyway. And in strategy what we'll have is we'll say strategy factory. Here we have a strategy that we need to create dot get strategy. This can return us something called the, so we need to create a class for strategy.

Uh, that will be returned over here. Let's do that. Let's first create a class so that our life is a little easier. And one of the things that I prefer doing is just creating the class before doing anything else. The package structure can be fixed later on. When you are raising a portal request or when you're doing an operation, that's and when you can do it initially you just want to get the code right And later on the structuring can be taken care of.

Get strategy is a method that we need. We need to create this here we had the logic which we copy pasted that's over here. IT strategy is actually taking a couple of parameters. That's what it can do. It can take the code and the player and then the strategy can play optimal mode based on which player is making it. And current board state, this is something that we need here.

Tacto board B and Leo. Uh, as you can see, the AI engine is actually not using. I can extract this into the place where it's needed and also there is a cell suggestion. Instead, what should happen is should have a strategy that I will be returning. So return what this means, go back to AI engine. It's saying that what we are providing is board.

So this is something that we can give. So suggest move has become much simpler. It's actually gotten rid of almost everything here, which is crazy. Threshold is something that we give back. But you see that massive number of lines have been cut through and it's become an extremely simple function. The AI engine has become super simple because what we are now doing is we are saying that we have multiple strategies that we can play with and the one that we want to try is based on the current mode state and who's making the move.

That's all the AI engine is doing. You might have this feeling that you know we are running from one place to another. We create a class and we make it complex and the moment it's too complex, we take that logic and put it somewhere else and just outsource the problem into a new class. And that's the way that our code is getting more plot and the old last year is getting bigger and bigger. But the other way to think of it is that when you see complexity and when you see that a lot of general capabilities have to come into a class, there has to be an extraction of logic. There has to be a movement from complex large class to smaller understandable classes.

So that is the reason why the code base is getting bigger and bigger and that is the reason why your higher level classes are getting more and more capable. It's getting more and more extensible. While the low level classes here we are using the strategy pattern initially the factory pattern and then we are using the strategy pattern is helping us make our older classes the more generic, the more powerful classes. Now more simple, let's go to get strategy. We have this strategy that has to be returned so it's no longer the exact move that we need to play. It is going to give us a strategy which will tell us how to make them.

The important thing here is that AI engine doesn't know what the strategy is. How you're going to make the move has no idea. It just calls the function get optimal and it expects a result. The strategy factory may also not have any idea what this get optimal move is as we will see. So let's put the threshold uh, as three here and you see all the assignments have gone on. So yet basic move has to be returning a strategy.

So does get cell to play and so does get optimal move. So the naming all the functions is wrong. So this can be called get basic strategy. Why am I doing this? Because once you get the basic strategy here, okay, there will be a class for the basic strategy. When you ask it to clear move, it makes down moves, it makes simple moves again fast get cell to play is returning a strategy here and get optimal move again should be returning strategy.

Now let's see what the problem is. Get cell to play is returning best, which is a cell. What we need to do is return new strategy such that we can call this function abstract, get optimal move. This becomes an abstract plus. Now I can define get optimal move here and uh, that can be this get optimal move for some reason is using a board going to make it a tic-tac board instead. So it's easier because the strategy action is dependent on the bot.

Type that here. And you see now what's happened is there is a return get basic strategy. It's no longer returning a cell, right? So that is going to be a problem but ignore it for now we have get cell to play. We also have this problem here. Same solution of defining the strategy here, which returns this best move can be picked up.

Again over here you have to see thing being done. A couple of problems, uh, get optimal move Instead I should say get optimal. Track fi g get sell to play. What is this doing? It's making a move based on one offense and one defense block. So I should say get smart strategy.

We don't pass in any parameters. None of these need a parameter. I just realized that these functions are not using the input variables. If the only problem now that we have is get basic strategy. And what you can do here is dot get optimal in the board, the peer. What we have done is now he say that there are different kinds of strategies which are possible.

There's a basic one, there's a smart one and there's an optimal one. The one that you want to play is dependent on the situation. You can get the one that you should play with by passing in through a factory method. Okay? And once you have the strategy that you should use, all you have to do is say get optimal move. And you get to play the best move.

This has simplified your quote here, fact. So single line, get the best strategy and then you get the best move off that strategy. Optimal move is expecting a tactical board. Again, this is still a daily code. All we have done is we have taken a daily code and moved it into another class. Instead of having something like get basic strategy or something, I'm going to name these classes.

I'm going to actually say that new Java class basic strategy. I'm going to copy the spelling of this so that it's easy for me. Add this also new Java class optimal strategy. And finally smart thread. Each of these extends strategy. So that's the method here.

You, you notice that I actually first made the compiler work in a sense when everything was working, that's when I started creating these classes. The problem without doing that, if you just go ahead and try to, you know, create these classes a bit too much in the air, the problem with that is you could go wrong. You don't wanna do that. You don't want to be in a situation that creating these strategy classes becomes impossible. So once it is proven in concept, then you actually do it. You extract these out into different classes.

So get optimal, move what basic is here, rid of this get optimal, move for smart is here, get rid of that and get optimal move for the optimal strategy is over here. Get rid of that. We are having some issues of offense and defense that can be extracted out into smart. This is the only strategy that's actually using it. You see the benefit of this is that I'm able to extract out the functions to where they belong. Optimal strategy doesn't need offense and defense, it doesn't need to be coupled with it.

So I've extracted that class out. Neither does basic strategy, okay? So smart strategy has a need for offense and defense function. This strategy class is going to return a strategy. So this is going to be new basic strategy. That's good.

New smart strategy, new basic new wonderful. We have a simple factory which just does one thing and that's create classes based on the current situation of the port and which player is making the move. This strategy is used by the AI engine to make the optimal move. Neither the factory nor the AI engine knows how this move is being made. It just knows that the optimal move has been defined inside a strategy class. And tomorrow, if you want to change your strategy, you want, you have some condition which you want to create a different kind of strategy, all you have to do is come to the factory class, add that over here and create a separate class for a strategy.

Define that over there. Your job is done. Even now, this is ugly. There's a bunch of statements. Have we really improved anything? Yes we have because this is now extracted into a factory.

This is now in a place of creation. Earlier it was there in the AI engine, which had no business to know how the moves are being made. It only wanted the best move. Now you can define when a particular strategy will be picked, what kind of moves that strategy is going to make everything in separate places. And so the AI engine is more extensible because you can add different types of thinking and different types of actions. Okay?

The smart strategy needs a rule engine. That's what it gets. And here you see that get optimal move is actually calling the basic strategy optimal move. So we can say new this, we could extract it into a field. We could also say that, look, this is a function that we should go and put over there. So it depends on the situation.

At this point in time, I'm going to keep it explicit. I'm just going to create a new basic strategy or I really want to, you know, extract out the problem. Stop creating classes multiple times. It's going to create this once and the job is done. But this is the strategy pattern. The benefit of this is that you have extracted out a lot of the statements that you had, uh, which is making your code open for modification and uh, closed for extension.

So, uh, it was violating the open close principle. Now you have taken the part of choosing an action based on the current state and extracted it into a factory. The factory tells you what kind of move you should make. And when you call get optim move, you actually make that best move. Even now, this is not follow the open close principle, the strategy factory, but the AI engineers. And so that is one step better.

Like I said, it feels like you have extracted out the problem and given it to somebody else, but at least the problem is in a place which is more relevant to a factory rather than a place where you actually make the best move.
