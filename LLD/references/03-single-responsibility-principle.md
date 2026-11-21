# 2. Single Responsibility Principle

## Defining responsibilities of AI and Game classes

Type: Video · Length: 9 min 44 s

### Lesson notes

Explore fundamental software design principles, specifically focusing on the single responsibility principle from SOLID principles. The video practically implements this principle in a game engine's code, addressing challenges with functions handling multiple tasks.

### Transcript

First principle of design is single responsibility. This comes from the acronym of solid. Solid is a well-known acronym when it comes to low-level design or coding. Like I said, most of these design principles have come from various projects where engineers have worked and toiled and repeated the work that they did. Uh, and they realize that certain practices tend to require lesser effort when you are reviewing code or changing it later on. So solid has most of these principles put together nicely in a single acronym s in that the first principle stands for single responsibility.

Meaning that if you have a piece of code doing something, you only wanted to do one thing and do that one thing. Well, if you know about Unix programming, there's a similar concept where you have small composable functions which put together can do many things, but one function does one thing and it does it really well. Let us try to implement that in our code here and see how that works. The game engine right now is doing many things. It is starting a board, in which case it is checking whether it is tic ttac to or not tic ttac and based on that creating a board for us. So there is some construction logic that is over here.

The board is changing, the state of the board is changing, but move is being told to be done through a game engine. So why is this API being exposed on a game engine? That's an interesting question to look into. Even more importantly, the board said cell is being done by the game engine. What should ideally happen is that you should just call a single function of board means why does this make sense and why is this so incorrect? If a move is being made, then the move should probably store the information for which player is making this move.

So that is point number one. Let's get rid of this player that we are passing into the move and let's say move has an idea of which player is making this move. Quite a few things change here. The constructor also changes. You see, we have some problems when it comes to creating a move now because we no longer just need a cell. We also need, who has made this move?

No big deal. You see, when I refactored this code right now, I can just pass in. Who has made this move? Actually, this was made by a human being and this a P got much simpler, right? Let's get rid of this here. You might be seeing two conflicting principles.

One, a board should have moves being made on it. I mean a game, a turn-based game has moves. So board should define a function called move. Unfortunately though a chess move is very different from a tac move and a go move is very different from a chess move. So what exactly is move? What happens?

Does it pick up a piece and move it somewhere? Is a symbol placed over there? Move is an abstract concept. It does some things like change the player turn it passes it to the next player. But if you're playing QAN on this board, a turn base game, then maybe more than two players, right? There may be four players.

So we are seeing that some things are common when a move is played, but it really depends a lot on the game also. So the move depends on the type of board that you're using. However, move is a function which is spanning across all gate. Therefore move should be in board, but it should be an abstract concept and therefore the concept of board also becomes abstract. You don't exactly know what a board is. We see that active board now has to implement move because you can't have a concrete implementation of a abstract class without having concrete implementation of that function.

Let's do that public move. Okay, before we define, let's see if there are any other compilation errors that are coming up here in uh, game engine, new move by the computer. And when it comes to tac to board, we are just saying set the cell, define the move, pass, move player. Simple player is a private object here. So we put in a ghetto, then this works. What did we do?

Did we really change things? Did things get much better? Not really. We have made some simple changes. We have taken some public APIs and tried to make them simple. When we say game engine, it usually means that what makes the game run?

Constructing a game and moving in a game should be part of a game engine. Finding out whether the game is complete or suggesting moves does not look like it is part of the game engine. It looks like there is some intelligence to these two functions. So what we have to do then is we are going to add a separate class here on game manager. Okay? I'm just calling it game manager because to start with most of these classes when it comes to managing state, become game manager.

So the engine makes moves and starts the game. And when it comes to checking if the game is complete or not or if we need to suggest a move that is there in the game manager, like we said, this looks like intelligence. So let's just call it AI peer. And at the same time, now that we think of it, who is responsible for whether a game is complete or is it the AI or is it the board itself? This is a difficult question. If you have a board, should the game engine tell you whether the game is complete or the game engine?

Just make the moves in the game. If the game engine is not responsible for telling you whether a game is complete or should the AI player figure out whether a game is complete or should it just suggest you the best moves? The answer is the game engine and the AI player. Neither know if a game is complete or not. This should be there with a game state manager or some other class which can tell you what are the rules of this game, what moves are legal, what moves are illegal, when has a game ended, who has won? These are some universal truths in the game which are not decided by the ai definitely, but they are not part of making moves or constructing a board either.

So if there is something like a rule engine that we can create that should be storing the information for whether a board is complete or not. So I'm just going to create a new Java class called rule engine. Okay? This is basically the game algorithm or something which tells us that a game is complete or not. It's not going to suggest good moves. This can go on changing.

Uh, the logic for this is complete does not change. I'm just going to take this function and add it to the, okay, so now whenever we want to make any changes in the board, we come to the game engine. So for one game there is one board. That's the expectation. Whenever there is some artificial diligence or smartness that we need to implement, we come to the IP and whenever there is some state that we want to see or some sort of rules that we wanna see whether the board has completed or not, that is over here. Okay?

So game result is the name of the class that we said we should call it Game state. And the same time this function is get state or given board. The only thing which has changed now is our main class, uh, game engine no longer has this, this is rule engine. Now AI engine will suggest moves. Let's just rename this to AI engine. And so now what has happened is we have some decent function names to do what we are doing.

Suggest move by an AI engine. Makes sense. A game engine starting the game and moving in the game makes sense. And at the same time, a rule engine giving you the state of the game currently is still quite shady, right? But whether a game is complete or not coming from the rule engine is much better than anything else that we had coded earlier. I could also call this a game state manager, but then it would take away uh, the fact that this actually looks into what is completion and what is allowed in the game.

So rule engine is fine. I think we will probably need to change the functions over here. The naming over here. So this is good. It seems correct. What we can do now is go to the main function and test our code manually or something, which would be much better and will give us large returns as we go ahead is to write automated tests.

Unit tests in this case is going to work fine. The main reason being that our system isn't interacting with other systems as of now. There's no mocking of interactions that we have to do or any expectations that we can have with external systems. We have a monolith and so you know exactly how the system is going to behave. Also, our system right now is not too large. We don't have to do any kind of black box testing.

Unit testing is fine. One of the drawbacks of unit testing is as your code changes significantly, uh, it's possible that your unit tests will also change because the algorithms or the flow of the code changes. But having said that, even then the returns of unit tests are usually higher than not writing unit tests and actually manually testing every time for fast paced changing code.

## Unit Tests

Type: Video · Length: 5 min 52 s

### Lesson notes

In this video, a comprehensive guide on writing effective tests for a Java application using JUnit is presented, aiming to enhance understanding of software development practices across programming languages.

### Transcript

I am going to be writing some tests. Now I've just gone ahead and added this dependency of J Unit here. In case you are a Java fan, this is usually simple to set up for all languages. All languages have testing support, whether it's called Ang C Sharp by anything because without testing you, I'm never really sure are I'm creating a new class, which is going to be having the tests. The way you name the class for a test is also a little important, especially for production level projects. You want to name the class followed by a suffix of test.

So if you are testing the game engine, when you wanna say game engine test. However, recently what's happened is there's a lot of focus on behavioral driven tests or behavioral driven design, and therefore the testing is also around behavioral testing. So if you have a API call that is being tested, then what you want to do is you want to name a suite of tests or a series of tests based on those API calls. Uh, let's try to implement that here. You see game engine, rule engine and AI engine are not really what is being tested. You are looking at whether you can make moves and whether you can get the right moves with suggestions through this test.

So I'm going to call this gameplay test. We are going to take some inspiration from our main method here. Now I've just initialized this over here. You can also have a before function, which is going to run for every test. So public wide setup, the engines themselves can be defined over here in the test. So what happens here is that repeatedly you initialize these engines, but you don't have to define them in every test you have that code, that common code moved into a single setup.

Now what's happening here is that this is a user based test. This is not a very good idea where I have to enter values. So instead of me entering values, I'm going to call this check for the roadway and instead of scanner next in, we're just going to be passing in a real move of next and all move of next. Next is initially zero. Okay? This is an index that's going to tell me what move I'm making every time This while loop runs.

Next is going to get incremented and row move and column move can be Aries. To simplify things, I'll just call it moves and this will be a 2D RA or a row that is one comma zero, one comma one, and one comma two. And when those moves are made, then I should get a game result over here. So instead of printing the board, what I should instead do is check whether the winner is human player, if human has one, which is assert that the game is over and at the same time assert that the winner is equal to X. So instead of doing a system outdoor printer, I'm now asking the computer to check whether things are fine. So I don't need to print anything here.

You to print this either. All of this is computer checks. At the same time I can look at column victory. In fact, before we do this, let's just see if the test is running. It's always good to check one by one. If things are working okay, there's an outbounds index exception.

That is good because otherwise we would've written more code and fallen into trouble. We have the index here messed up. Should be one. Yes, this seems to be working. That's great. Let's also check for column A.

Column victory basically means that we have column zero, comm zero, zero comm one, one comm zero, and two comma zero. Hey, this should also work. Yes, it does. We have written two functions here. There is tremendous similarity between this part and this part. In fact, there are identical.

So there is no reason for us not to move this into a single function. Let's do that. Let's call it login in row column and next. Okay, that's, that's interesting. So we can take these two parts and just replace it pretty quickly. Okay?

That makes check for roen and check for column and very small. Uh, all we do is play the game according to the moves that have been defined and based on that we'll get a result. Uh, we can check for diagonals also this way. Yeah, zero comma zero one comma one and two comma two. This will be zero comma two, one comma one and two comma zero. This would be the reverse diagonal win.

Let's see if all tests are running. Wonderful. Let's also write two more tests. This will be hard to do if we were doing it manually. Basically play nine moves, right? That's one test that we want to check.

And the other test that we want to check is can the computer win sometimes? So the first move that we are going to play is on the second row, second column, and then we are just going to go to the third row and make it in the first column. So the computer should win at this point. And so the winner should be, oh, let's see if that is true. That is true. Let's also try to put XiO and see if things are actually working as expected.

Yes, that's correct. The computer won by making moves straight up. That is five tests. We can run these tests, the whole test suite and see that all five of these tests pass.

## Benefits of Single Responsibility Principle

Type: Video · Length: 5 min 0 s

### Lesson notes

This video explores aspects of test quality, focusing on readability and extensibility within a Java application. The discussion delves into reflections on the tests, highlighting their readability while underscoring concerns about limited extensibility when the underlying code changes.

### Transcript

Now take a minute and think about the quality of these tests. Are they good? Are they bad? What do you think? Think about the goals of good software readable. These tests are reasonably well written so they, they can be read by a person and understood.

I don't mean to say that they're perfect, of course, but if a person goes through a test says that, you know, you are starting a board of tic tacto type, then you have these moves, different coordinates, then you're playing the game based on these moves and you're checking if the game is over, then there's a winner. Uh, it's not terrible. You can read this and understand. So in terms of readability, this code is fine. What about extensibility? Are these tests extensible when your code changes?

Will these tests still stand the test of time? And the answer is a resounding no. The problem with these tests is that they're highly dependent on the algorithm that is mentioned in the AI engine. If the AI engine algorithm changes, you may not be allowed to make this move. For example, you say that I want to place x and zero comma zero. That's fine.

What if the AI makes the next move their move at one comma zero? Now you come over here and you say that I want to make a move at one comma zero. That's an illegal move. This test will immediately fail. There are some other problems. Check for computer win or second player win is highly dependent on how the computer plays you made moves, which were not optimal.

But that doesn't mean that the computer is also going to play optimal moves based on this strategy. So what has happened here is that we have moves being played as XX dash and x dash dash. These are the three moves for the human. And meanwhile, the computer can make these three moves, 0, 0, 0. But if the computer is smart after you make the first move, when you have this state, the computer should ideally make this move taking the center. So a smarter AI tomorrow with changes in the code may not be able to win this game in one go.

If, let's say you make a move here with X and the computer makes an O here and you, you block the double O diagonal move that's being made. At this point, the computer has not won. So asserting for a winner is incorrect. Asserting for the game being over is also incorrect. So this set of moves may not be possible based on how smart your computer is. These tests are not extensible, so this is bad code that is actually quite surprising.

However, this test will function for us for a while till we actually write our own game. ai. What we are going to focus on is writing the game engine in a way that it is extensible. It is readable, and it is correct. Only after we have mastered the game engine and the rule engine are we actually going to move to the AI engine. So we we'll be able to reuse these tests sufficiently, but eventually we have to change them.

I have bought this up primarily because there's this idea that when you write tests and they're working, life is good. No, if the tests are poorly written, they'll have to be written again very soon. So to conclude on a single responsibility principle, one class contains all relevant information for itself to function. And at the same time, it does not take irrelevant or extra functionalities. Inside the game. Engine does only one thing, which is run the game.

The rule engine does only one thing, which is tell you whether something is legal or something is possible for a game. What is the game state happens to be something that the rule engine can answer very bad. The AI engine is there to play the game, not to tell you whether some move is possible or not. That is the part of the rule engine. It's also not there to manipulate the game. It's just there to suggestions.

We look at separating classes into different packages. This is not the single responsibility principle, but it explains why you can isolate concerns. And so you see that single responsibility alone is not sufficient when it comes to making code readable, extensible, and uh, correct. But it is a very important part. The benefits we got from this were that we were able to reduce the ways in which the data that our system was holding can be changed by exposing some public APIs in every object. Uh, by separating out these objects, we did a isolation of concerns.

But second part that happened is every object now has a well-defined way of entry. So in each entry point, you can do validations. It is totally responsible for the data that it source.
