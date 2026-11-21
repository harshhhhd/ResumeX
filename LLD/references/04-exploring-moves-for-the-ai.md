# 3. Exploring Moves for the AI

## Looking for a Smart AI

Type: Video · Length: 5 min 40 s

### Lesson notes

Learn the Open-Closed Principle (OCP) in software design with this video, as it elaborates on SOLID principles. The OCP advocates for software entities to be open for extension but closed for modification, minimizing alterations to existing code when adding new functionality.

### Transcript

The next principle is the O in solid, which is open closed principle. The full version of this is open for extension but closed for modification. We talked about one of the metrics of good software or one of the goals of good software is to make sure that code is extensible. You see, open closed is an embodiment of that. How does this work? The intent of this principle is to make minimal changes to existing code when adding a new functionality, which means you do not want to break things that were done earlier, nor do you want to go to the same place well tested code and make changes over there.

Because once something is well tested and you're sure that this works perfectly, adding a layer on top of that or a wrap or a adaptor, anything that you like is much easier usually than changing the heart or the code of that code. And let's take an example to understand this better. Let's look at the AI engine that we have. We mentioned that the AI is going to keep changing a lot as it gets smarter. So different kinds of algorithms can be used in this AI engine. Currently we have very simple algorithm that just looks at the first place where you can insert a zero and it does so, okay, based on what your computer symbol is.

This is of course going to change, but where should we make this change? Say, suggest move is one type of function and there is another move that we want, which is called suggest smart move, slightly slower function, but it makes a much better move. So player, computer word, everything is the same, but the algorithm here for making the move is going to change. How does it change? Make an assumption here. Assume that if you pass in the board it makes us smart.

We're not focusing so much on the algorithm. Maybe we can look at that in a minute. But the idea is now the public API of AI engine has two different moves. One is suggest a smart move and the other is just suggest me any move. What do you think will happen to the callers of this object? Do you think they'll quickly move into suggest smart move as a caller of AI engine?

Should I have the responsibility to ask it to suggest the smart move or suggest move? That is the question and the answer is likely no. Most of the callers of AI engine want the smartest possible move that it can make at any given point in time. If you want smartness in terms of game dynamics or the current situation of the game, just gimme a fast move. That should also be encoded in the suggest move function. I mean, why should the client of AI engine think about what kind of algorithm you are using?

So it should always be just one function suggestion. What we did here will not be the best way to do things. Suggest smart move will not work. We have to evaluate the move ourselves. So we have one basic algorithm. This let's say get basic move.

So now we have a suggestion of get basic move. Let's try to code some smartness into this. We say that if the board has less than two moves, then there are too many branches to look at. You look at the game three, it's like, oh, I can make nine moves or I can make eight moves. That's a lot of moves. I won't look deep into the game.

Three, I'll make a simple basic, but if two moves have already been made, it's likely that I could lose on this move or it's possible that I have a winning move just now. So the game tree is much more shallow and there are some winning possibilities now. So the suggestion is going to have more thought put to it. When it comes to seeing if a board has less than two moves, uh, what we are going to pass in is tic-tac board. And every time we see a non null square, we do a count plus, plus initialized to zero at the start. And all we have to do is count less than two.

So if it has less than two moves, now this as you can see is not very good coding because less than two moves is crazily specific. So even better would be something like starting moves and this would be the threshold to pass it. So instead of saying two, I can say, is it less than the threshold? Okay, uh, just rename this to make more sense. Is starting here. I can see Alright, first three moves or first, first four is fine.

Like no one can win in the first 4, 1, 2, 1, 2. That fourth, it's smart move is something that we have to create. Not really sure why this has been called static, but yes, in general you want to put all utility functions at the bottom. Uh, if you see that these utilities are being used by multiple classes, you want to move them into a separate class. Again, single responsibility or isolation of concerns in a utility package, probably we haven't found any yet. So that's something we can do later.

Uh, get smart move is going to go the decision tree or the game tree that we have and it's going to choose the best possible move to me. Now, uh, get smart Move is not going to be super smart. So there's two things to do. One, am I winning? If I can let me make that move. And if I'm not, w then is my opponent going to win in the next move?

If that's the case, just block up. Okay? This is much easier than it sounds uh, when it comes to code because what we have right now is the rule engine, which tells us if a game is going to be complete or not. So using that rule engine, we can tell you whether a game would be complete after playing a particular, let me write that on code because talk is cheap. Show me the code, I guess.

## The need for stateless move exploration

Type: Video · Length: 7 min 28 s

### Lesson notes

This video explores the implementation of an AI engine, likely for Tic-Tac-Toe, with a focus on determining strategic moves for the AI player. The core strategy involves checking if the current player can secure a victory and making that move, with a subsequent emphasis on defensive plays to thwart the opponent's win.

### Transcript

The basic idea is if the current player can make the move and win, then that's great. So what we are going to do here is we are going to play a move. So move Or fields like you can just pass in, sell from get cell, but that won't work because the cell in board is a string and the cell in uh, the class of cell is different. So this is not right. Get cell feels like it's going to return your class of cell, but it returns you straight. So let us change that name to get symbol.

This is more accurate. Get the symbol. If it is null, that's fine. No one has marked that cell yet. Now we have I comma J here. Uh, that is the move that we are making for the player.

Now all we have to do is be able to see if the rule engine decides, then this results in victory. You just made a move. If the game is over after you made the move, then you should make it. I mean most likely you have one. You can also check if the game is won or not. But the basic idea is even if you don't win and the game means, that means it's a draw.

So this is optimal and so you return this move here at the same time. If this is not the case, if you are not winning, then what should happen is you should search for defensive moves. These are attacking or victorious moves And then you have the defensive ones. If you inward the symbol and it results in the game, being over that is really bad. It means that your opponent is going to win if they make this move. So therefore you should make the move and instead.

So if player is rather the player symbol is x equals, then set O. Otherwise set an X that is the player symbol. At the same time, the same move is not what you want to return, you want to return it with your symbol. So this functioning as to be passed in without flipping the player. Quite a few improvements that can be made here immediately. One of the things is we just saw player symbol.

If it is equal to x, then set it as O and if it is O, then it'll set it as X. Okay, we are basically flipping the player. Is this the best way to do it? We are creating a new player and we are saying flip the symbol. Ideally what should happen is the player class can define this much better than we can. So if we say player dot flip, This should return as a new object of player with the symbol flip.

Let's see how that will look. Meaning player, where the player symbol, if it equals x returns as O, otherwise you basically have already and you return X. Why is this better? Why did I move this here? Again, single responsibility, you are seeing that the player is much more likely to have the information for player simple and therefore it should do the flipping. Also, people going around creating players is not a great idea.

So if the responsibility of flipping a player has to be put, it is better to put it in the glass of player itself. Okay? So now get smart move basically returns, victorious moves if possible, otherwise it returns defensive moves and if nothing works then it should just return a basic move. Let's see. Now what happens? Let's go back to our game test.

What we have done is we have changed the ai. Uh, let's see if things continue working as before. So everything seems to be working fine. Of course that is incorrect. All of these tests should have failed. What do you think went wrong?

The code changes have all happened here. So we know something is wrong with the AI engine. We also know that earlier when we are just suggesting a basic move, things were going fine. So this probably is not the problem. Uh, we can look at the starting function, that should be fine. It doesn't look odd, right?

So the problem isn't get smart move. Why do you think it is? We are running through the entire board. We get a symbol, we create a move, and then we play the move on the board and then we see if the board is complete. If it's not, then we don't do anything. If it is, then we return the if it is and you return the move, that is bad because you are basically playing the move again and again.

But even worse, if you don't return the move, you have already cleared the move on the board. So you have changed the state of the board while you are checking for a good move, okay? And this is very common when it comes to any kind of artificial intelligence. Uh, when you're looking into the future, you are making steps and those steps might change the current state of the game. So to avoid this, you have two major options, two important ideas. One is the ability to undo a move.

So when you have made a move and you see the aim state is over or not over, doesn't really matter. Before you return, you do an undo here and if things go wrong, doesn't matter, you do an undo anyway. So you're going to undo the move regardless. This is idea number one. Idea number two is to make a copy of the original board, change it, and once the copy has been changed, discard the copy. Okay?

So you make a copy of the board, you make the move. Let's say you make a chess move, you analyze the board and then you throw it in the dustbin. The original board is not changed. The first idea that we talked about is basically you made a move and then you undid that. What do you think are the trade-offs? What are the advantages or disadvantages?

If you bring in the capability to undo moves? The advantage here is that you can make a move and undo it in the same object. So the number of objects that you're creating are very few, basically just one object of board. A single board can be used by the entire AI engine to think about all possible moves in the, in the game, playing with the same pieces. The other advantage of having the ability to undo is that you can look at the history of the game. You can redo and undo moves as many times as you'd like, you know, on a single board.

There is one problem though. If you have a paralyzable process or if you have a concurrent process, the AI engine is concurrent or you know, multiple people are making moves here, what could happen is that while you are undoing a move, somebody else comes and makes some putting the game state in a al situation. So concurrent access or parallel access is difficult to do when you have undo. The other problem is that some undoes are very complex. It's just impossible. Think of, let's say, uh, in some cases, so especially in games like chess or a tic-tac is rather simple.

You just have to empty the square. But there are games where an undo function has a cascading effect on things that happen in chess. If you undo something, maybe the check is no longer valid. So the king gets more news to play and so an undo offer we promotion makes it upon again, right? So, uh, this is quite complex. When it comes to some games in Tacto, it's pretty simple because we are creating a generic AI engine, a generic game playing engine.

We are going to go for the approach of make a copy, make the changes in that copy, and then destroy it. If you want game history, then you can create a new game and run the most sequentially when you have gone through the history. Destroy it. Okay? Undo basically means that you create an entirely fresh in and play all the moves one by one. So you, you can't undo, technically you're just, if you play 30 moves and you rate a fresh copy and play 29, that would be not very efficient, but very simple to implement.

Also, this has the benefit that multiple processes in running concurrently can make changes in their own local copy of the board without affecting the other processes. So there is no undo function that we have. We are just going to create board copy, make them move here, we are going to see if the board copy has a state of completion, and if that is the case, then we are going to tell them similarly over here. So tacto board, board copy equal to board dot.

## Prototype Design Pattern

Type: Video · Length: 13 min 29 s

### Lesson notes

In this video, we delve into the implementation of the prototype design pattern within the framework of a Tic-Tac-Toe game, providing valuable insights into crafting an AI engine capable of both undoing moves and making predictions.

### Transcript

Copy. Where should I define this? Should it be in the board or should it be in the tacto? So the idea is that an AI engine should be able to undo moves or at least make future predictions. So this is a part of board, but this is not something that can be defined in a board. So it is still abstract.

And here comes the idea that if every method in your class is abstract, it's highly likely that mode is actually just an interface. So you're not extending mode, you're implementing with its copy function there. And this brings us to our first design pattern, which is called uh, the prototype design pattern. What's happening here is you are creating a new object based on an original object. So you have a tic tacto board and you do a modification which creates a new object and gives it to you. You saw this also happen in the move when you said move dot flip.

What happened is you went to the move object. You asked it to flip the mooc, but of course it did not change its internal state. It just created a new object with the player flip and gave it to you. This is the prototype design pattern. The, the basic idea here is that the object has the capability to create a fresh object and make the state changes that you are looking for before returning it to you. Prototype is especially useful when you're looking at objects like a calendar, which if you make an update in the calendar, uh, it basically splits it into multiple nces.

You might also have a thread spawning other threads. So prototype is a place where you can have that logic defined inside the object itself, the thread object itself, and as you see here, it's quite useful. The TicTacToe board can create a new object that all of the cells inside it and return. So we doing that. We are going do have a and that's it. You might be looking at this and saying, oh my god, there's an H case here.

And that means you're a really smart developer. If you can see that cells of IG points to cells of IG is actually a copy by reference, you might have an object which has stayed inside it and if you pass in the reference of that object, any manipulation to this cell will lead to a manipulation in the original board, which is a problem basically destroying the purpose of the prototype pattern. You are not creating a new object, you're creating a separate object with the same references. So the state change will be reflected here. But the idea here is that every time you are changing a cell, you are assigning an entirely new value to the set. You're changing the reference to that cell.

Firstly, these are string objects, so they're immutable. There is no way that can change the internal value of these objects. You can only change the reference. The second part is if you're going to change the entire reference of this IG point up, then you don't need to worry about the internal state of link corrupted because you're changing the entire reference. What's going to happen is the old reference is still pointed to by the old object and the new reference is to the new object. So we made a copy of the tactical board, now we are just going to go Back here and you see that these moves are still there, the game test or all of them still pass, so there's still some problem.

So the bug here seems to be that we are making too many moves before we actually start getting smart. So play game to suggest move is saying the threshold of four moves. So if you have less than three moves in the board, it's assumed that you don't need to think too much. So that is a problem. Let's make it equal to three. And so the time for starting to make smart moves is going to kick in at three itself.

Let's see if this is still a problem. So now instead of trying to guess what is going wrong, let me just see what's wrong with suggestion. We talked about the smart move being the problem. I'm going to go ahead and say whenever you're returning a move, just let me know What kind of move are you returning? Basic moves are fine. Smart moves are only played after three moves have been played.

So if you look in the check for win test, the first move is this, then the AI makes a move that makes it two. Then there's this one that's three. The fourth move by the AI should be smart. So only one possibility is here. So let's debunk this. In fact, nothing happened.

It was just super smooth. So what has probably happened then is stress move is just not working as expected. It's, let's see if it ever comes here to smart move or it doesn't. Okay, if it is starting. So here it's less than threshold. So let us, in fact, instead of saying is starting converted to count moves, this is a more generic function.

This is less than four. This can be made a threshold. Uh, supposedly count moves is having the issue. If these symbols are not null, that is the only time when we do a count plus plus. So it is strange that the tic-tac board is not showing that. So I'm just going to take this here and I'm going to run this function.

Result is one, I resume the program, come back here, result is three, which is fine. Well that is less than the threshold. I have made a move and you have made two moves. I'm now going to make a basic leap. So that won't work. In fact, let me change this to three now and see if things are making sense.

So can't move. Now is one changes to three. Let's see, step by step whether things work. So sort of stepping into, I'll just go here. Uh, it goes into get smart move. Now we go to the rule engine, resume the program, and in defensive moves we come up with a defensive move for one comma tool.

Let's see what the board is saying. One comma tool is over here. So that is actually correct. So let's run this entire function and check for row win should return failed state because the game is not over. This is quite odd. So what we can then do here is just see if get state is working fine, let's debunk this.

Again, it's, It's seeing the game is finished, but if we see the board, yes, the board has actually finished. So this would be legal. Uh, there's no o move mentioned here. So I think what has happened is the move suggestion that we are getting is, has the wrong clear making the, if you're talking about basic move, I think it's, it's fine, but the smart move is the one which is going round. So it's clear now. Okay, that's crazy because basically our validation, game validation has come back to haunt us.

If you look at the game engine, you can move. All moves are acceptable, right? So there is no validation before making a well, it is correct or not. So for the tic tac to board, what needs to happen is before you make a move, before you can set a cell, we need to check if setting the cell is possible or not. So if the cell is not already, then do this. Otherwise just throw illegal state exception or illegal argument exception, illegal argument is probably more accurate.

So let's go for check for win. Now let's just run this instead of illegal argument exception, you cannot play the move when I have tried to block it already. Okay? And the same thing is if I run the entire game, every single test now fails. So you see that it's strange, our tests did not fail because we uh, didn't do the checks which were necessary. So our tests were too extensible.

Should I say were not really extensible. They were, they were just incorrect. They were setting the wrong parts of the board and the board was not checking if those parts are already set up. So now tests are as poor as earlier or as rigid as earlier. But the thing which has happened is our game engine has become a little more robust or our bold function, which the tic-TAC award is a little more accurate. If the cell is already set, then don't set it.

If it is not set, then send the new symbol to it. With all of our tests failing, what do you think we should do? There's two approaches. One is to try to, uh, change the test as per the new logic, but that is really poor because what's going to happen is as your logic keeps on changing, your tests will keep on failing. The second thing is to enforce the logic that you have in your AI engine by clearly defining what news you're going to make. What do I mean by that?

If player one makes the first move, uh, and zero comma zero and player two is forced to make the first move at one comma zero, then you're sure that things are not going to break. On the other hand, if you ask the AI to make moves, it might make moves randomly as it improves. So to make sure that your game engine is working here, if you see most of it is around the game engine, it's not checking for intelligence of the ai, it's checking for correctness of gameplay, robust column bins. None of these tell you that the AI is smart. So what we can do is we can just get rid of the AI for these tests because that is not being checked. And wherever there is some sort of AI that is expected to suggest a move, we can instead hardcode them in the test itself.

Row and column, I can call these second players, row second players column. Here you are already seeing a anti-pattern when it comes to coding, uh, I have named it sro. What does SRO mean? Who knows? S call. What does S call mean?

It's the second player. I know it, but can you read this and say S call, is it second player? Is it something else? Who knows? Instead of doing it this way, let's name the variables correctly. Moves can turn into first player moves and this can be second player.

Now, S one s call, uh, are are not that big a deal because looking at this, you go like, what is s call? What are you initializing it to? Oh, second player moves. Alright, that's fine. It's a local variable. It's just two lines away from it's initialization.

So it starts to be much more readable than audio. Playing a game is no longer a simple thing. You also need to define your opponent's moves. So our tests have all broken, but suddenly they have become much more extensible. So now instead of this, I'm just going to make it wherever possible. I'm, I'm just going to have the second player moves come here.

So zeros comma zero won't be allowed. I will have to go to zero comma one. Uh, and then I go for zero comma zero, and then I'll go for zero comma two, very first cell that is not occupied already. Zero comma one here, zero comma two here and after that one comma one because one comma zero is already occupied. Check for dwin. Let's see.

That works. No, zero comma one is what I need. Zero comma two and one comma zero. Check for the reverse diagonal, zero comma 0 0 1 1 comma zero. Let's also see if we can win as second player. Sometimes zero comma two is over here and this should result in victory for the second player.

Okay, let's run these tests. Setting the cell is a problem, seems like it has already been set. So check for column win will not allow this. Oh, that's because we are, there's a problem here. Benefit of an ID is that you can just see what is going on. Set cell.

Again, it's not, this is strange. Second, and this can be called first layer H First is x, second is zero. What I could do at this point is to just print out along with the illegal argument exception, the board print, this board may also print the spell the rewind column. And this way I can clearly say what has gone wrong. Uh, sometimes you can also do this by just passing an parameter, illegal argument, the exception. So if this is not null, then send the symbol.

That's just wrong. If it is null, then you should sign the symbol. If it's not, then there's an illegal argument exception. So I can keep this S-O-P-L-N and the same time I can do this, but this should work now. Okay? Almost all the tests passed except for the second player win.

Uh, the second player win is trying to see if, uh, if things work, zero comma zero, zero comma one, zero comma two. Here we have a out of bounds index exception because next does not exist for three moves. That is actually quite strange. Next, should be incremental at this point that so the pointer goes ahead by one. Every time a complete move is made by both players. Okay, so now tests are again passing.

You see that our tests have become much more reliable now because they're no longer dependent on the artificial intelligence of the, the game ai. So now our tests are passing, but we are much more confident of our tests now than we were earlier. Earlier also, our tests were passing, but we knew that small changes in the algorithm are going to break the tests. Now, the tests are not only accurate, but they are more extensible. Because we are forcing moves, we have made it much more constrained. We have actually made our tests more dependable.

Even with the change in the algorithm, the AI algorithm, we can trust that our tests are working fine and therefore the gained engine is correct.
