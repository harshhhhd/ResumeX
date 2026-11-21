# 1. Building a game engine

## What is Low Level Design?

Type: Video · Length: 3 min 24 s

### Lesson notes

The three key factors for evaluating code quality are readability, extensibility, and correctness.

- Readability: The video underscores the significance of writing code that is easily understood by oneself and fellow engineers. Readable code is crucial for debugging, making changes, and collaborating within a team. It is emphasized that unreadable code increases engineering costs and can negatively impact an organization.

- Extensibility: The code should be designed to be easily extended to accommodate changes in requirements over time. The ability to add new features without significant modifications to existing code reflects positively on team culture and the individual engineer.

- Correctness: Ensuring that the code is correct is essential for building a solid reputation as an engineer. Bugs that go unnoticed in production can incur high costs for organizations. Code reliability is likened to a fundamental responsibility across various engineering fields.

### Transcript

Hi everyone. In this section we'll be talking about what low level design is and what makes a design good or bad. So low level design to, to start with is a mixture of designing and coding, and we need some metrics to tell us whether code is good or bad. If you look at the definition that Google gives for programming, uh, they call it coding across time. So if you write a piece of code, it's not just that you want to satisfy all the requirements of the client right now, but you also want to help future engineers satisfy future requirements. So with this in mind, we have three major factors which are essential for calling a piece of code, good or bad.

The first one is readability. How readable is your code? If you write code and if it's understood by you and your fellow engineers, then it's easier to debug. It's easier to change, it's easy to write test cases for it, but if code is not readable, then it is not workable with, and therefore it becomes a black box. In fact, if code is not readable, it's the first thing that gets refactored. If an important part of a system has unreadable code or complex code, it increases the cost of engineering because every change requires significant effort.

So this is an added cost for any organization and even in the interview code readability is essential because if the candidate you're hiring writes readable code, then it's likely that they're a very good engineer and their code will require lesser refactorings, will result in faster reviews and probably will cause lesser ations. The second factor is an extension of this, which is code should be extensible. So when you write code, if the requirements change slightly, then without doing any major refactorings on modifications to the existing code, you should be able to add new features. Again, going back to Google's definition, programming is coding across time. As the organization changes, maybe your requirements change, maybe the engineers change, new people join old people, leave the engineering standards that you have changed. Uh, so you mature as an organization despite all this.

If code continues to exist, it reflects very well on the team culture. And of course it reflects very well on you. You as an engineer have most of your work saved as code. So your code speaks for you 10 years down the line, you may be an engineering manager, but if your code still exists and people are still working with it, there's a very strong reputation that you build. The third factor is code correctness. This is absolutely essential when it comes to building a reputation as an engineer, both long term and short term.

Um, the costs for an organization to fix bugs, which have gone to production and have been noticed by customers is very high. So it reflects very well on the team if there is a lot of reliability. In fact, one of the primary responsibilities of engineers across all fields, it could be a civil engineer, um, mechanical engineer, is reliability. When you write code, it works. It just works and there are backups. Okay?

So, uh, correctness Is the third pillar and it's absolutely essential for you to get that right now. As you work with these factors across the years, you start to build an intuitive sense of whether something is right or wrong. Extensibility of code and readability of code is again something that you have an intuitive sense for, and hopefully through these video lessons, we will start building that sense in us. So let's see what we can do to help us write great code.

## Introduction to Low Level Design Series

Type: Video · Length: 2 min 21 s

### Lesson notes

The series is divided into two parts: Guiding principles and Design patterns.
Guiding principles are rules that software engineers should generally follow, while design patterns serve as blueprints for thinking and problem-solving in software development.
This includes SOLID, and tradeoffs between encapsulation, abstraction, inheritance, composition, etc...
Design patterns are blueprints for thinking. Most of the problems we see on a daily basis, have been solved earlier.
Design patterns help us solve some of these problems efficiently.
Our job is to create a Turn-based game AI engine. The goal is to make the code readable, extensible, and correct!

### Transcript

Now this series can be broken into two parts. Uh, one is guiding principles and the other one is design patterns. When it comes to guiding principles, you'll see a lot of discussion around solid inheritance, composition encapsulation. And when it comes to design patterns, you'll see multiple design patterns being discussed. Now, when it comes to guiding principles, uh, they are rules which software engineers should follow. More often than not, you can break them, but the thing is, these are data-driven rules.

Uh, across the years, software engineers have built many, many projects, and what's happened is they have generalized some of their learnings into principles, into things that you should do. So when we talk about solid, that's an acronym for five principles. When we talk about inheritance and composition, those ideas are also something which keep cropping up whenever you try to build projects. And so all of these experiences can be considered as data. And those data have certain patterns. The patterns which are the most general, the most useful can be considered as the guiding principles.

The second part is design patterns. These are basically blueprints for thinking. The idea is very simple. If you're building a hospital system, it's very likely that somebody has done it before, right? So not only can you take pieces of code and reuse them, but you can also take the thinking and the conclusions that they came up with and reuse that. So if you're building the attendance system for that hospital, you can take inspiration from the attendance system of a school.

So design patterns are a set of solutions that software engineers can iterate through when they see a new problem. And our job is to create a term-based game, AI engine. This might sound complex and it's being done on purpose. It is a complex project. It will cover most of the design patterns and solid principles. And, you know, the guiding principles that we are talking about.

And the main idea is that given any game, it could be chess, it could be Sudoku, it could be go, it could be chain reaction. Uh, this AI should be able to play that game. So any board game, which is turn based, should be play. So the requirements are a bit hazy, but the idea is pretty simple. You just need to write code that can play a term based game. And we look at three things while doing this.

Readability, extensibility, and correctness. So let's see how we can do this.

## Setting Requirements and Objects

Type: Video · Length: 13 min 4 s

### Lesson notes

In this video, an approach to game AI engine development is demonstrated, navigating without initial design and aligning with turn-based game requirements. The role of well-designed APIs, focusing on functions for game initiation, moves, and completion status, is discussed.

### Transcript

Now what I'm going to do is I'm going to start writing this game AI engine without any kind of design. No class diagram, no thought process put into how do I make something extensible? I'm just going to write code and it is going to look very easy and it is going to be very easy in the short term. In the long term you'll see multiple refactorings come up. Uh, as we learn different concepts and as our requirements change that hopefully will drive in the point of why these design principles or design patterns are helpful. So okay, we have this project term-based game AI engine.

Uh, let's say a product manager came to us and gave us the requirements. The requirements are simple. It's about taking a game and having the ability to play it through ai. So you as an engineer now have to think about what kind of APIs do you want to expose on the backend. One of the APIs that you might think of is to have some sort of public function which allows a user to play the game. So that would be the start function, starting a new game, what it should return is if it's a turn-based game, then probably going to have a board, okay, where you play the game.

What else? You could also have the ability to make a move in this board. You will passing a board here and the person who's making the move will get to passing in that information here. What state change do you want to see? You're seeing that I'm creating objects on the fly. This is something that often happens in interviews.

Hopefully it doesn't happen much at work. Even at work, if a requirement is really small, if there is an expectation that this code is a one-time, right? Then sometimes while thinking people are coding, okay, so this is move, what else could happen? You may have a bullion function so you can get a win or a draw or a lose situation. A bullion is not going to suffice over there. Bull basically says the game is complete or incomplete after completion.

You also want to usually know who has won the game or is this game withdraw? So here what we need is the idea of completion and the idea of what is the state of the game Victory for first player, second player, fifth player that has to be stored here. So a billion data type won't work here. We instead need an object and that object is going to be game result. Each complete basically means that you send a board in and you see the game is complete at this point. So we are seeing some objects have come up.

We have to define these objects, these objects encapsulate some idea in there. So a board, we can imagine a board as place where points can move or pieces can move in. In a term based scheme, clear is a user who has participated in this game, right? So let's just try to randomly code so that soon enough we get to see what's wrong with this kind of approach and just create these classes right here in the same final class board. Similarly, I'll have a class for player, class for move and a class for game design. Now let's look at start.

What does start actually do? It assigns you a board on which you can play. The board has to be returned over here. I'm going to create a new board here and I'm going to return it. Move does nothing. It does some actions on the board but doesn't really turn you anything.

So let's keep that as wide and is complete is a game result which takes in board. So a bunch of AFLs conditions will tell you whether a board is complete and who has won this game. To implement this, we need some sort of an example. So let us make the board concrete. Let us now say we have something like a tic-tac toe which extends board tic-tac toe board is a type of board and in that you have nine squares. So a three plus three board.

Let me note that down as in, let me put that in an array. So you have a string and you have these cells. This is a three plus three springboard. Every cell will have either an X or an O that will help us find out the gain result. So, so if the board is an instance of a TicTacToe board, basically that means you have take tic-tac toe. Then we are going to iterate through the dominating conditions for a tic-tac to board.

If all the cells offer a row or a column or a diagonal are filled by the same clear, that is a victory for that clear. At the same time, if you have all the cells filled and none of the conditions before happen, then this is a drop. So let's try to do that four. It I equal to zero I less than three i plus plus For J equal to zero J less than three j plus plus. This will help us iterate through epi cell. Many of you who are seeing engineers are probably already getting a heart attack ET at this.

But like I said, what we are doing is we are trying to really look at what is the core problem of writing bad code. And so even if you're a senior engineer, I would suggest you stay and watch this at maybe two x, but eventually you start seeing patterns which come up and help you even now while you're working today. So what we are doing right now is we are retreating through every cell of this board, zero to three and zero to three. And now what we are going to store is we are going to store a billion row complete. Okay? And this is going to be storing false in case the row is complete with XSS or zeros, it should become true.

So string first character is equal to the first character of this row. Okay? And this board, can we mention somewhere here some algorithm knowledge comes in here. This is probably why there's an expectation for computer students to know about basic algorithms. If the first character is an X, then you only need to search for Xs on this row. There's no way that you're going to have a full column or a full row of Xs if the first character of that row column is a zero, right Xs.

So depending on the first character, we are gonna be checking for the rest of the characters. So if it is an X here, then we are just going to checking for Xs. If it is a O here, we are just gonna be checking for for this. If this is equal to the first character, then everything is fine, otherwise there's a mismatch and therefore this row is not complete. So row complete is going to be false over here, right? In fact then we should send this as true.

The only way to make row complete false is if this else condition occurs. And since it is empty we can just convert this to a single condition here, right? At the same time you see that the zero character is already taken care of. So starting from zero here does not make sense. J equal to zero is already checked. So we should take it from I.

This takes care of all rules. Now for the wonderful columns that we have is the column complete? Well, you take every column from zero to three, uh, and in every column you check for second and third character also after looking at the first character of the column. So this is going to be zero. Here I here j and I here, and if column complete is false, then you don't need to look further. This takes care of columns.

And finally you also have diagonals. So in diagonals there are two types of diagonals. The first one is I equal to J diagonal, which is the line X equal to Y and the other one is I plus J equal to some constant. So that is X plus Y equal to C. Let's note down both of them. First one is from I to Y.

So we don't have a J column here. Let's just call this Diane B And this is the reverse diagonal. Uh, very similar. The first category, zero comma two, the last column, first stroke, and then you have zero plus i and two minus I coming in here. Okay, so if that happens, then the reverse agonal, this gives you the equation of x plus Y is equal to C. Basically in our case x plus Y is equal to two zero plus I does not make sense, so I'll remove that.

So this is great. All we have to check now is if a row is complete, any row or any column is complete or any diagonal is complete or any reverse diagonal is complete. There's basically just 1D and reverse angle. So this is a single canvasing. Now you're seeing that row complete happens to be inside this fall loop. So it's not reachable over here.

What we need to do is in case a row complete is false, we can break out of that row. That is the first optimization we can use here. The second thing is row complete can be defined outside or rather declared outside. Uh, every time it is set over here on every new row. Similarly column, complete diagonal, complete and reverse dally complete. If any of these conditions are true, then you're sorted return a game result, which is true.

Now, there are some problems in this code. Let's try to improve them. Firstly, we said that we can optimize it by breaking whenever a line is set to false, right when there's no contagious block of the same symbols. So that has been added over here. Uh, apart from that, these variables may not be initialized. That's because the language doesn't understand that you have to enter the fault loop.

Java language cannot tell whether you need to enter the form loop or not. Setting this to zero and going up to two. It's obvious to us as humans that this code will execute, but Java doesn't need that. Let's help it out here that these values true. Now the language knows that it is going to actually execute and therefore it is initialized. There's another optimization here.

If the entire row had the same character, that means that this condition has completed, the wind condition is set. So if row complete is true, you can break from this view, this a few other optimizations that we can make. Let's do them so that the code is sufficiently optimized and therefore complex for uh, us to be factorally drawn. If row complete then return, you gain result, right? Because the code is the, you don't have to run this code, you know that a row has been complete and therefore the game result is set after this loop. If column complete is true, return the game result similarly for diagonal complete.

You also see that in each of these cases after breaking, you want to know the first character so that you know who has won the game if the game has been won at all. So instead of having the first character as a string being defined inside these fall loops, I'm going to define it over here. The is blank. And uh, when it comes to the game result, you need to know if the game is complete and who has won the game. So in each of these results I have to pass in whether it is over and who's the winner. So let's create a constructor for that.

If we have a true condition here and the first character has to be passed in similarly here, and there is another condition to look at in case the game is over, but nobody has won in case all characters are failed. So count of failed cells is equal to zero iterate over I and J. If this cell is not equal to nine, then we have a count plus plus. And eventually if count of failed cells is equal to equal to nine, then return new game result. No, because the game is over. But at the same time, return no winner, it's none of these conditions are made, then you can return a result of no winner.

But at the same time, the game is also not over. The number of cells are not equal. I, I don't know how you're feeling about this amazing piece of code. In fact this is just for tic-tac to in case you have chess come in, then I don't know how many effects conditions we have to write, but uh, we can, we can say else just return a new game result, which we are not sure of. So let's just give a no winner for now and that's it.

## API and Package Structuring

Type: Video · Length: 9 min 50 s

### Lesson notes

The initial code is criticized for its lack of optimization and excessive duplication. The video emphasizes the vital task of enhancing the code structure and addresses issues such as consolidating all classes in one location, resulting in tight coupling.

### Transcript

You can see how much code I wrote for something as simple as a tic tacto board. Now, in some cases you might be thinking about you could have used a more optimized algorithm, you could have used fewer lines of code. Uh, maybe there are some language improvements that I can do in Java. You can use some libraries or data structures to get this done. But the intent of this is not to tell you about the tips and tricks, but to actually tell you about the fundamentals of writing such poorly written code. Look at this.

The amount of duplication that I have is staggering. I am checking for the first character and completion in every row in a very similar way, in every column in a similar way for diagonals also. So what we are going to do is not going to think about what is the improvement we can do, but we are going to start having a sense for this port can be improved and where are the areas of improvement? Much more than what needs to be done is to understand where can things be improved. That would be a higher level intuitive understanding as an engineer. The second thing to note is that I have put all of my classes, all of my objects in one place.

Which means that if a person has to change this pile, they're going to be quite scared. If they're going to change this board class, they have to make changes in the same pile as me. It's likely that they're going to come over here inside and make changes also at the same time because it's not just because it's close to you in terms of distance of board, but also because there is such tight coupling when we are talking about a game result, we are using new, the keyword new. So how should this object be constructed given its state is known very well by the is complete function, that is also a problem. So the first improvement that we are going to do is we are going to move these classes into separate files. You'll be doing this definitely at work but also in an interview.

It makes sense to take these classes and move them to separate files. So I'm taking this board class and I'm just gonna drag and drop it to the source. It is the benefit of using an IDE. You can just drag and drop these game result can be tracked and dropped into the source package. What's happening is new files are being created with the code inside. At the same time my main class is still referring to those classes.

Let's do that for everything here. Uh, I also have my main function here. I have stick board. I just knew it so fine. Okay, we have a main class and all of the classes that it is using put in separate classes. The benefit of what I just did is that conceptually I have moved these classes out of one space.

I can work on them individually, separately and then if there are changes to be made in the main class also, that's fine, but at least move is in a separate file. I can work on it individually, separately. I can change the internal functions of this class, of this file without worrying about what's happening in me mean is not aware of it. Very conceptual. It really didn't have any effect in terms of conflict resolution. It didn't have any effect in terms of anything except the developer being aware of which file is where API APIs are endpoints that other developers can use to interact with your system.

They can change the internal state of the system using these APIs. They can get to know what is the state of the system using these APIs. There is no other way to connect with your system except using APIs. That restricts the amount of interaction that different systems can have with your internal system. So if you allow people to manipulate the ARI that you have, then they can make any change that they like. They can make negative numbers, they can do whatever they like.

But if you rack the ARI in a function, if you say that whenever you're changing the ari, you have to use this change function with an index and the number you're passing in. Now you can add validations. Now you can make sure that your ARI is going to behave the way you want it to behave, not the way that other people want to change. Okay? So that's what the API package is going to do. Some of this might sound like jargon, especially if you're a very young engineer, in which case it's alright, go ahead with the video.

Don't, uh, again, bogged down, don't try to understand every single concept. Some of these are cyclic also, they come back and make sense often viewing this once. So, and of course you can view this video hundreds of times if you like, but hopefully twice or once is enough. So what will be in the API, we talked about this being a set of endpoints that other people can use in this program. What do you think is going to store the APIs? It's quite obviously the main class.

Why? You can start again. You can make moves on a board and you can check for completeness in this C middle class. So main makes no sense because main basic thing is that okay, you know this is going to run first in a computer program. Instead we are just going to call it gaming, right? And uh, we are not going to have any main function here.

We don't need one. And we also need to define what a board is. So we need to import these classes. Let's make these classes public. This is specific to Java. Uh, C Shop also has similar access modifiers, whole language for example has capitals which explain whether a class is public or private.

Let me create a new package now called, called games state. This is going to be storing the board and the moves that are possible on a board. Okay? So let's import that in this class. I'll just screen in this class also, game result should probably be in the game state. It's similar to the other classes.

And now that makes me refactor this package and just call it a game package. Okay? Everything related to game is over here. Uh, player, I put it in a separate package or user. You could put it in the game package. Also, you can say that a player is a part of a game and there is contention here.

Uh, what if want to store profile settings for a player? Uh, what if you want to store statistics for a player? It's not specific to a game, is it? So I will keep it very extensible, but in reality, maybe you want to put player over here and you want to create a separate class called user, which you're going to place over there. So let me do that actually, let me put this in game and if we see statistics or something come up later, we look into that. So we have a package user which is not being used.

That's the red flag. But uh, bear with me then. So now we have imported all of these classes. Tic-TAC to board is a type of board. It's not exactly specific to a game. A board is like a blueprint for other boards like tic-TAC to board, chess board, different types of boards.

So I'm just going to create a separate package here for different types of boards. Move this in. This is what we have. You notice that tic-tac to board extends board, which happens to be in a different package. Now some people think that this is an antipater. Why don't you have them in the same package?

They're so closely related. It isn't an, what you're doing is you are defining this board according to how you want to define it. If it's part of a game, fine. Uh, but if there's a very specific type of board which has we put in a separate folder, you can do that. Okay? So this is fine.

Now you see that a good thing happen. Board one dot cells is no longer available. Java will not allow you to do this. And the reason for this is because it's in a separate package. So we just said that you can take an ari, literally cells is an ARI and you can make changes or you can create an interface through which you can make changes to that Ari. And as an engineer, what you want to do is you want to keep your code extensible.

You want to keep your code safe also, yes, later talk. But most importantly, you want to make sure that your code behaves according to how you want it to behave. Not according to how people who uh, use it want it to behave by clearly defining some rules for every interaction through APIs. You want to restrict access to the data structures that you have. And that's exactly what happened just because of these changes in in packet structure. So I wanna get the cell at i comm zero.

Uh, I said cells, then I try to access that. That didn't work. So what I'm going to do is I'm going to say get and disposition. A small change for a class, a giant change for the project. I wonder if making these kind of statements in a full request is going to work out. It'll probably take the rest of the team.

So should be careful you back. Cheesy statements, right? So we have this.

## Parent vs. Base class functions

Type: Video · Length: 4 min 8 s

### Lesson notes

This video discusses the decision-making process involved in defining the "get cell" function during the code refactoring of a tic-tac-toe game AI engine. The primary focus is on optimizing the code for better performance.

### Transcript

And we need to define get cell. Where should we create it? Should we create it in the tic-tac board or should we create it in the board? The base class we can create it anywhere would be one way of reasoning. But that's not the right way of reasoning. Conceptually, tic-tac boards have cells.

Yes, but do all boards have cells? That is a question. Do chess boards have cells? Yes. Do checkers have cells? Does a GoBoard have cells?

Answer may be yes or I don't know. Or no. If the answer is no or if the answer is, I don't know. It's safer to make the assumption that all boards do not have sets. Some boards have sets at the same time. If you know you have a very clear understanding of what the requirements are and things are not going to change for the next few years, it makes no sense to not take advantage of The requirement of cells will be there in every board and therefore this space object will have cells.

But you're seeing the, the thought process behind this. If boards can exist without cells, then we should not put cells in boards. We should put them in the specific board. That's what we are going to do. So when we say get me a cell, I'm going to return in cell and this rule and call. So that's great.

We can get a cell and this is now working is complete, is ready for a tic-tac to game. Let's also see if we can make moves. Vote for us. Seems to be always tic-tac toe. But so if you have a tic-tac to instance, we are interested, otherwise just throw an exception. Let's also do that over here.

Uh, if you wanna start again of tic-tac, we can return you tic-tac mode. Otherwise it's a illegal a So let's say you pass in a string of the game that you want start. And if the type is tic-tac, then we return you tic-tac board. Okay, so start is taken care of and how do we register to move on this board or dot set cell? Instead of getting a cell, we are going to set the cell according to the clear symbol and the move cell. So we had to define these functions.

Let's first define the inner functions, then go to the outer function. A symbol is going to be a string. You can turn X or you can return to. But that would be a field which can be initialized, uh, in the constructive Excel should return your cell. That is class cell which has row and column. Again, initialized with a constructor.

This will be a field which can be set in the structor view, right? So let's now set up this function, which takes a symbol for a cell and sets it up. Let me change the ordering so that I know exactly which cell am I setting first, right? With what symbol. And you see that I send board dot set cell instead. I should have it in the tic-tac board.

'cause uh, like we said, we are not sure if all boards have cells. We are not sure if the cell is a pipe string always. It could be a chess board where there is a complex piece in that cell and so on. So tic-tac to board will have this function, take a cell, take a symbol, and now you're seeing that, uh, cell is part of move. So that's a problem. Again, let's move it into its own file and port it.

So here we can say cells or cell row, cell com. Equal loop, simple. But because this is in a separate file, we can't just directly access this. We need to have a getter function here. Okay? So that solves making moves starting a board and whether a board is complete or not.

## Setting the main method

Type: Video · Length: 3 min 22 s

### Lesson notes

This video walks you through creating a class named "Main" and building a game engine for playing tic-tac-toe. It features a loop where the user and computer alternate making moves until the game engine detects a complete board.

### Transcript

Let's also now create a class called Mean, which is basically where we be playing this game. Let's create a game engine. Let's say game engine start and we want take back. So this is going to give us a, now we need to make some moves here on the board. Let's take user based input here. Make a move on this board for on it with the on move here.

And then we make a move as the computer. So this stuff is going to happen in a loop. We need a while loop here, uh, till the game engine decides that this board is complete. We will continue making these moves. Get some ghetto methods here. For that is over.

While the game is not over, we continue doing this. We should probably give the user a prompt of, make your move here. We are going to make our move as the computer. The computer move should be suggested to us by some AI suggest move on a given mode to the computer. But we need the computer as a player with the symbol of X and the opponent as a player with the symbol O. In fact, because we are taking the first move from the opponent, this has to be X.

And this will be, we create this new opponent move by finding out which cell the opponent has moved in. That is cell to column. These have to be passed in as user input. The computer move is going to come from as a suggestion. So let's see what artificial intelligence we can put in here. Uh, before we do that, let's set up the inputs that we can take just and finally suggest move is going to be any move which is playable.

So we are just going to run through the entire board. If it is a tic tac board, I can take the first cell, which is equal to now, and I can return new move with the cell icon. J Okay, this is still loaded, wouldn't be too much. But yes, you're seeing that computer is not being used, the player is not being used primarily because we don't have much a partition diligence here. It's just take the first empty square and just return that. And if no empty cell exists, then we have to say illegal state.

Except coming back to Maine. Once this move is made, you have to again, check if the game is complete. If it isn't, then let the computer make A move, right? Because if, if the game is over, then the game is over. It doesn't make sense to continue new play. Finally, we're going to be printing out the game result.

Alright, so this is now ready. Before we critique it, before we say these are things that can be improved, let us see if it is even correct. Let us see if at a basic level it is functioning.

## Debugging the code

Type: Video · Length: 9 min 33 s

### Lesson notes

This video explores coding issues in a Tic-Tac-Toe game. The initial code faces null pointer exceptions, and optimizing to identify a winning condition based on the first character encounters challenges. These issues are addressed by checking for null values and ensuring accurate conditions for row and column completion.

### Transcript

So let's run this method and let's try to play x and os today. Okay, there are some problems already. You see that? Uh, the first problem is that you can get null pointer exceptions. So the optimization that we try to do to get the first character in a row won't work exactly because if you look at null, null basically says that if the first character of the row is null or the column is filled, the first character of the column is null. Same with the gon, same with the dagal.

So if you get null, there is no point of even going into this fall loop. What we have to do is we have to see if first character is null, we just skip the entire column. But it could create a problem because the row complete is set to two. So if the first character of the row is null, the row is not complete at the same time. This piece of code has to be skipped. If you do this naively row concrete will be true.

We'll skip this entire function and then we'll get this as true. So we can't do that. So what we could do instead is take first character and see if that equals to the board character. What I'm doing here is if you call a dot equals on first character, it's going to throw null pointer exception. If I flip it now, first character, as long as this is not null, I'm now going to get a null pointer exception. Why is this important?

I can check for first character being null here itself. I don't need to come inside this four function. If first character equals to the other characters, that's fine. If any of the remaining characters is null, this is going to be false and therefore we are going to come inside here and we are going to mark the row complete as false. That is correct. All I have to do is check if first character is null or not.

So row complete is true only if first character is not null and I go into this poll loop only if first character is not null. You see what I did here? I made the code correct, but I had no concern for readability and extensibility. The code now will work, but it's more complicated than ever. Let's continue doing this and see where we land up. Uh, we see that row complete.

Is this first character not equal to none? If first character is not equal to none, then you come inside here. I guarantee you any person reading this code even seven days later is going to happen. You should okay, understanding what's written but unfortunately many production level systems are written this way. So let's do the same thing and see what are the problems with this. Let's copy this part.

Um, we said that both charact find column complete is what we bothered about. We need to flip the equals first character is not nu uh, also comes in here, stops it here, okay? This should solve the problem and just like we do when it comes to fixing a bug, let's say a hot fix, uh, let's see if this works. So the game result is true, the game is over, the winner is not. So again, there is some sort of bug here. What has happened is the while loop ran and it was decided that the game actually happens to be over.

You see that make your move was never printed out. So we know that it never entered this while loop. Let's see, for the ace complete function. So I've set up debug points for every place where we can return a result typical of how we might set up logs or for local tests, we can set up debug points and you see that dag complete is actually running as true. So why is that the case? It turns out that dag complete is marking as true over here and when the first character is null, this character is null.

It says if the character is not null, then go inside. So every time this if loop is going to be skipped, this if condition and basically you're going to a die complete equal to true for entire blank diagonal. So earlier what was happening is we were setting this outside the inner fall loop. Now we have only one fall loop, but we are setting this inside fall loop. So this is just plain wrong. I'm going to change it here.

I'm going to make it first character getting initialized outside in motion here. And the same time we are going to say die complete is equal to first character, not equal to Right now. I think if we go to main then you'll see there's a return of false game result as no winner yet. Okay, so let's run this function. It's asking us to make a move. Wonderful.

How about one or zero and zero? Ask me to make a move again. Uh, but I can't see the board. So let me actually print the board on every move. We also call us human instead of opponents. And same time I'm printing the board.

Finally, when everything is set, then I say this is the game result and this is the board. This should not print the board very nicely. So I'll have to set up the two stringing function for this board that's over here. Alright, now that, that's, that's done. Let's make our move zero. Okay, so we made our move here, uh, looks interesting because the computer made a random move.

Let's try to go down. So that would be one. Go on zero. We see that the computer has made a stupid move not try to block us. Let's take full advantage of this and nothing happened. Uh, the computer didn't realize that the board is actually finished.

The game is over. Uh, so the column function didn't really work. What is going on here? We are the first character, which is on Estro I column. And then we are doing a GI here. This would be correct because zero comma zero is going to come here.

Uh, if the first character is not nu that is true, we go down. So we should see row number one, column zero. Uh, I think we have missed one condition here when this is proved to be uh, true, what we should do is we should break if row complete and here we'll have if call complete. Now again, let's try to run this function. Uh, 0 0 1 cause zero. Now comes the interesting part.

Let's see if this works. Moment of truth to comma zero. Yes, the game result is that we won Autumn victory three. All the characters of the first column are of the same type X. Uh, let's also try this for diagonal actually so that we are a little more comfortable. Uh, zero comma zero.

Now let's try one comma one. Describe two comma two and the game is over. Let's also try it for the reverse diagonal where we have zero comma two. Okay, one comma one and two comm zero. That also ends the key. Let's try it for a column.

Let's try zero comma one, one comma one and two comma one. It also ends the game. Finally, let us try one comma zero, two comma zero or rather one comma one and one hour or two. This also ends the game before the other move could be made. So at this point we are reasonably comfortable to play tic-tac toe, right? It took us, uh, more than an hour to try to come up with this game, which is not embarrassing for even experienced engineers.

The reason I say this is because very often without you even realizing this, the same situation will happen in your company or will happen on pro or the young engineer will come up and do this. So how do you set standards and understand that code correctness is one important factor when you're engineering something, but our choice engineers is not just to make sure that something is working, but that it continues to work. Anyone can take a spoon and put it on the edge of a glass and see that it is working. That is not what the engineer wants to do. Your job is to put cell tape around the spoon and the glass to make sure that even with changes coming up, the spoon will not fall. The system will not collapse.

People will not suffer for the systems that we are made. So with that in mind, let us now look at design principles.
