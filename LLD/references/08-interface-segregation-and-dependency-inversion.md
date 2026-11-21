# 7. Interface Segregation and Dependency Inversion

## Having Multiple AI personalities

Type: Video · Length: 11 min 30 s

### Lesson notes

The video discusses coding a Tic-Tac-Toe AI engine, focusing on the optimal move for the game. The AI engine has two components: a fast AI and a smart AI. We outline a strategy for determining the optimal move in Tic-Tac-Toe.

### Transcript

Now let's head to the AI engine that we have and the AI that we have is very basic. There's one fast AI and another one which is the smart ai. You may also have something which is very, very good. Let's call that optimal ai. Let's get capital move fort. This is very easy to calculate or chess you might have get the best move or get the best move depending on an algorithm, depending on outside circumstances.

You see that we're deciding on a particular strategy moves of eye threshold. So for one move we make a smart move and after that we can start many optimal moves. So let's create that function here. You see that smart move is a part of AI engine and optimal move is also a part of that. And now you're seeing a lot of FL statements over here, but let's ignore that and let's just get to the optimal move. Uh, the optimal move for TicTacToe is well known for a three three board.

It's quite obvious what you need to do is initially if you have a winning move, then play it. That seems pretty obvious. Otherwise, if your opponent has a winning move, then you need to block it. These are pretty obvious. This is a knee jerk reaction. You're gonna win or you're gonna lose.

You play at the position where you're gonna win or lose. The next thing is if you have a fork, play the move. So if you can make a move which forces your opponent to lose eventually a fork is basically a place where you have two winning moves. Even if an opponent blocks one of the winning moves, then the other one wins. If you have a fork, then you need to play it. Otherwise, if your opponent has a fork, then block it.

Finally, if the center is available, take it. Otherwise make a move on the corner and otherwise you really don't have any options. Uh, any move is fine. This algorithm, as you see is a rule engine. You can have these rules set up and things will work perfectly fine. However, there are some reasons why I wouldn't like to put it exactly like a rule engine that we did with this function over here, we're passing in a set of rules to get the condition of the game.

While in the AI engine, it doesn't seem right and the reason why it doesn't seem right is because there is a particular sequence in which you have to make these moves. You cannot say that if the con is available, take it and if this condition does not pass, then you see if your opponent has a winning move, there is some sequence or ordering to the processing of these moves. So a simple rule engine will not work. Let's see what we can do around that. Now, coming to the first thing which has to be executed, you see that this code already exists for smart move. We first check if we can make a winning move or not.

You go through the entire board and you check for victorious moves. If you make a move in a cell and you see that the game ends, then make that move. On the other hand, if your opponent can make a move and that ends the game, then you need to block that move. We need these two behaviors in this function, but we also wanna define this as a single rule and this as a single rule. Let's take this piece by piece. Given the board, you need to find a glorious move.

You see that this is gonna directly return a move that is not what you want. Ideally you want just a sell a place where you're supposed to make the move. Suggest move actually needs to suggest a move. But when you're looking for get basic or get smart move, instead you're looking for a place to play because at any point when you're passing in the player who's making this move that is over here, all of these algorithms always take the player player who's making the move and return a move based on that, it's never that the player is flipped. Return move. This is the player which is passed in and get basic move again, this is the player which is passed in internally.

It also ask for player. So instead we should not pass in clear, we should just return the cell. This looks reasonable. We're not passing the player, you're just saying which cell you should make the move on. In general, when you're doing any kind of refactoring like this, you have to be careful whether the method signature is still making sense. Get smart move.

Returning a cell may not make sense. Get cell to play may make sense. You're adding a little bit of action here to make clear why you're calling this function earlier. Get move was making more sense. A direct object was being sent back. But advantage here is that you no longer need to pass in clear for basic moves and also no complex object has to be constructed here.

The very basic bare minimum logic that is sell is being returned by this logic. It may or may not know how to construct a move if move gets complex. So there pros and cons. Sometimes if you pass in the player, this logic becomes smarter and so you really need to do that. Sometimes when the logic is really dumb, you don't wanna pass in the player, it doesn't really matter. So why should you send back a move?

Just the cell where you're gonna make this move. In general, if you don't need some parameter in your function, then don't take it. And if you are returning something which is just taking a parameter from the function and sending it back, then don't take it in the first place. Just return the cell. Okay? There's a compilation error here because that basic move does not require player anymore.

Suggestion itself is a cell, which means optimal move is just gonna return the cell where you're supposed click. So this solves a problem. You see player is being passed in over here, but it's being used also in the inner functions. So over here, removing player will not make sense. Alright, let's get back to optimum move here. You see that if you have a winning move then you should play it.

That is this part and you have defensive moves that is this part, let's say defense, right? This may or may not be null. Okay? So this is defense and then you have this as offense. Just refactoring this a little bit, the best position to play is over here. Uh, and offense is gonna be very similar to defense but this code will execute.

You see that there are certain similarities in this code. You also see that maybe we can convert these into functions and then pass that directly. But at this point in time that's not our concern. Our major concern is to extract out common pieces of code and have it here in the optimal. So we have and defense, which has been set up now that can be copied over here. Now these two rules of three and four be out by just taking the game of if game info A, if you have a, then you're, if your opponent has a move, becomes info must return.

The best move. Let's see, Fox was being noted down. No it's not. So let's do that. Let's see where this becomes true and still win when it's true is where we break. So this cell of K and is what we're interested, right?

This here, this fork cell initially this is come here, it's being set all the time and for cell is also something we wanna set up. You're noticing that three of these things, which cell is the for whether there's a fork or not and which player has the fork should probably be moved into a single object. So you could have a object called fork which signifies who has a fork on which cell. If the object fork is null, then has fork is as good as false. That is another way of looking at things. What I'm doing here is the game info builder could have a object in itself, but to keep things at this point in time broken down, uh, this is not ideal.

For now it is bearable. It is not asking for refactoring so we'll just let it be. Fox takes a cell and sets up the builder's fox cell and returns this at the same time we have to update game info. You see all that happened when I added Fox Excel was just a single field was added in the build. There was a additional function to set that field and the field is now being passed in to game info. In game info.

All I have to do is add a sixth parameter which is mapped to a field. So what happened is the game info and the game info builder had changes None of the other functions which constructed game info had to go through any other changes. Now that we have the fork cell, which is being passed in get info in optimal move, we check for the for cell, for cell and this is gonna be a better function here. You see in optimal move we were able to extract out these two functions firstly, but even more importantly with game info, an existing object with existing logic, all we had to do was to add a new field to the game info and due to the builder pattern, we didn't have to change all of the code that was being exposed by game info Everywhere else, any person constructing game info did not have to make any changes and we're of course reusing a lot of the code that we already have. So this logic is looking easy to write because we have extracted out the functions. Okay, finally the center is available, take it.

This is gonna be a if four hit symbol in the center, which is one comma, one equal to nu and return new cell one comma one. Of course you're seeing that there are problems here. This is a magic number who told me one is the center. Well because I calculated that index from two. So I took the middle row and the middle column. So that's the center.

This is a terrible way I should say of uh, doing these calculations and writing code. Ideally you wanna have this logic either extracted out into a function and even that function should use some constants to calculate this. We'll see how this starts having real troubles in a minute. Most of you already know what the problems will be around. Hopefully they'll get even more clear once we're going through this and if available, take it. The board has a corner, which means the upper left, upper right lower left and lower right corners have to be looked into.

This is gonna be a bit of a pin. We'll have to do a four I equal to zero I less than four I and passing the four corners over here. That's one method. You can also calculate the corners in the fall loop itself incrementing the row number and the call number according to what corner you wanna go to. But this is basically the logic. So in corners, the new int this is of size four and each of the coordinates can be passed in here.

Comm two comm, alright, this is a D area and what we're doing is if the board symbol at that position is null, then return that set. Right? Okay. This can be converted of course into a field. It can be converted into a constant so that you save space and also avoid initializing this again and again. We can look into that in a minute.

The important thing though is that we have a set of rules and these rules are executed in order. Now looking at this code, you might think that, isn't this just fine? One has to execute before two because the order of instructions forces all the code to run one after another, which is true. The only problem with this kind of code is you have to have either all of this code in one function or you have to break it into multiple functions. I can take, let's say the simple code here and I can construct a separate function over here or complex logic. This doesn't help me much.

It does break the original function into smaller piece, which is more readable. But if I have something like complex logic over here, what I've done is I've made this function more nested from get optimal move. I have to jump to complex logic. From complex logic. If things get bad, then I have to get corner and so on. I'm breaking the original massive function, which is very hard to read into smaller functions so that it, they're easier to read and they're easier to change with the problem of maybe multiple parameters have to be passed into this function and it is not as readable as you might think because now this is resulted in nested logic.

Complex logic leads to get corner, and finally that leads to some code. Before that complex logic itself has some code and get up and move because has some code. So that's not so good. Let's see if you can do something better. The idea here is that a rule set is not working out well because a rule set basically means that these set of rules have to be checked. So the set has no order.

While a function, a single function is also not working out well because a function is gonna be too large. Nested functions are also not looking nice because they're making the logic deeply nested. It's difficult to understand. So in this case, if you have object oriented programming language, it's best to see how you can extract out this logic into behaviors of a class.

## Singleton and Null Object Design Pattern

Type: Video · Length: 9 min 4 s

### Lesson notes

The video explains how to create classes using a package structure, focusing on a state manager package. We start by creating an offensive placement class within the state manager package and discussing the implementation of the place method. The offensive placement is part of a strategy design pattern, and We explain the creation of a base class called placement.

### Transcript

Let's see how we can create these classes with this kind of a package structure. I'm going to first create a new package, which is going to say state manager. It sounds like a package which is going to implement some sort of state machine or state design patent, but that's not what it exactly is. State design pattern is going to be similar to this, but you'll see some of the differences come up. Uh, as we implemented. Let's come up with a sensible name for this because the similar naming will be there for the rest of the strategies that you have.

An offensive move is what you're going to try. Then you're going to try defensive move, then you're going to try placing the X or O somewhere. So we could then call this offensive placement and this could extend a class called placement, which is a base class, right? In fact, state manager can now be called placement or placements. A placement is basically a piece of code which tries and place a move for a board. So try and place makes certain sense.

This can be placed and the return type can be nullable. This cell can be nullable. If there is any way in which you can annotate that, you know, this method can return nullable objects, that's quite useful. So one of the things that you can do is you can return optional. This is a specific class in Java which says that I may or may not return a cell. You can check it internally once I return the cell check for its existence.

If it does not exist, then do something. If it exists, then you can do something else. This is my way of saying that cell can be nu Otherwise, what often happens is with a call to this function, uh, you expect that this function is going to return your null null object. Uh, null pointer exceptions are quite common in this. So by the way, place is something that has to be implemented by all of the inheriting classes. So this is optional cell and place is abstract.

Nothing else exists in placement. The only other method that needs to exist in placement is what is the next placement that we need to go to. You can look at the idea of a linguist here if given a placement. So that is this class, let's say offensive placement. Where do I go next? Well, you should go for the defensive placement according to the algorithm.

So let's implement those methods for offensive placement. I'm going to say create a new class called offensive placement and this implements placement again, uh, now coming back to offensive, what we are going to say is the next class should be a defensive placement. So we creating a class of that type. So for a defensive placement, the next function will be, uh, according to our code that's in the AI engine. Uh, it's gonna be hazard fork, so maybe a fork placement. Now you see here that this is going to create quite a few objects, okay?

We don't want this, we want it to be optimized. What we ideally want is just one object of fault placement time that every time when you call offensive placement, this will be the first, the header of all placements, followed by defensive placement, followed by fault placement. Each of these classes should be instantiated only once. Uh, and so in our design pattern right now that we are going through the chain of responsibility, the basic idea is that we need a singleton design. Singleton meaning that this class is instant shake once and once only. You can't have multiple instances of this.

There are certain benefits for this. One is that as you can see, the amount of memory required as much less. So, uh, the other thing is that any kind of state that you have in this class is going to be in one object itself. So you, if multiple threads are accessing this object at one point in time, they're probably going to see more consistent data. Mind you, I'm not saying that updates, concurrent updates are easy to do in a singleton class. It's not necessary.

You might have multiple threads trying to update the same feel in that class, in that object, but yes, you do have the luxury of knowing that there is just one object for this class. So there is no construction of this object happening multiple times. Uh, and every data field of this is just once. So let's see how we can do that. Uh, midway implementing a design pattern, we have to implement another design pattern. This is of course common, uh, in software engineering because unknown solution is basically known as a design pattern, a piece of thinking which has been used again and again extracted out, uh, as a pattern.

Now those patterns are composable. Sometimes you have a pattern like chain of responsibility requiring single day design pattern to work. So one piece of thinking wrapped around with another piece of thinking makes a more complex solution, a more useful solution. That's what we are doing here. So now we can say defensive placement dot jet get is in my class going to return the only defensive placement object that is possible, the single belt. Okay?

Now as you can see, this is static. Static meaning that does not require an object to be already existing. And here I can create a new defensive placement, right? And if this is converted into a field over here, defensive placement, then I can check If defensive placement is not null, then and only then instantiated. Otherwise just return the object that you already created. Now you see that, oh my god, what if multiple threads are trying to access the same get method at the same time or some other problem?

So usually what you want to do is just use annotations to get your job done. There are many libraries which help you create the singleton class in the right way for Java, for Golang, for Python, for every well-known language. Singleton design pattern is a very common theme. So I wouldn't suggest that you implement the singleton design pattern anywhere by yourself. Even in an interview, you can mention that I usually use libraries to get a singleton design done, or I go to stack off and check things. So can I check it out?

Now if the expectation is that, oh, this is a IQ test or this is some sort of a memory test, then yes, you will probably have to remember how to implement a singleton design pattern. In our case, we are not very concerned. The idea is clear. Only one thread will be calling this get method at one point in time. That's our assumption. And you can also us make this synchronized to get rid of that problem.

Even if multiple threads come in here, then synchronized is going to take a lock on this class and this code will not then important to notice. Again, you don't want to do this yourself. You want some sort of an external library to take care of this possibly during compile time. You want to tell that library that please generate this code for me. So, uh, there are dependence injectors, which do this for you. Dagger and juice are some examples.

So in defensive placement we see that we have this function, okay? What you ideally want to do is that you also need to implement this function every single class which implements placement. So shouldn't we have this mentioned in placement itself, right? Can't this be done? Now there's a problem here. Firstly, they're saying that synchronized is not allowed here because it is an interface.

So you cannot take a lock on this interface. Alright, let's try to get rid of that. Then let's remove synchronized. What else? Static. Static also has a problem.

It says static methods in an interface should have a body. Let's try to give that. We say return not, and let's now go to defensive placement and let's try to remove this. You see, I cannot override that method. Static methods cannot be overrided. The basic problem here is that if you look at placement and defensive placement and the instances which come out of defensive placement, let's put these three things separately.

Then placement and defensive placement are two blueprints, and the instances which come out of it are objects. The objects are well-defined by defensive placement. That much is clear. Defensive placement is a blueprint. The objects are actual instances. What the first blueprint of placement is doing is forcing the second blueprint to define a set of functions, which every instance is going to have.

That is possible, but it is not possible for the first blueprint of placement. To define what methods must be implemented by the second blueprint, what methods must be executed by the second blueprint? The second blueprint itself is a class object. It can have static methods by itself. Uh, all non-static methods go to objects. All static methods go to the class.

You cannot specifically define how to extend static methods using interface. Okay? That capability does not exist in language, right? So let's get rid of this. Let's come back to our original idea of having the get method here. It's not being overridden.

Now you see that I'm copy pasting code directly from defensive placement into offensive placement. Uh, and the reason I'm doing this is because instead of using annotations, instead of using standard compilation time libraries to create a singleton, I mean this is so much easier by just write singleton here, then all this code would be nonsense. It wouldn't exist, right? That could be something I could have done, but because I'm making it explicit now I'm needing to write offensive placement everywhere that we go. This allows this to be a singleton and we don't have annotations. So this code is going to be copied in every single placement class that we have.

## Chain of Responsibility Pattern

Type: Video · Length: 11 min 40 s

### Lesson notes

In this video, we discuss code refactoring to enhance its structure, specifically focusing on placement strategies for a tic-tac-toe game. Learn to identify code duplication and propose creating a Utils class or package to manage common functionality.

### Transcript

What could we do to improve this code? Slightly. You see there's a lot of duplication here, right? So here you can say that, okay, let's not do anything fancy. Let's just create a U utils class right along with min. Or maybe we can create a package here, U utils, add this U tools class over there.

Take some of the code here, just copy this code, paste it here. You see that this part won't work. If you have defensive placement clearly defined here, then the class here can't use it. So let's get rid of that. This makes it generic enough. Now if you pass it an object, oh, and if it is null, then and only then do something.

So, or is defensive placement and then return. So you can make this placement also. But uh, if you want a truly generic object being passed in you, then you can have any object. Uh, and this needs to be constructed so you probably need a supplier. In fact, this is equally al a bug has been found while we are coding interesting u tools dot get is what we are looking for. Instead of calling it get, we'll call it singleton or get if null.

This is slightly more clear in terms of language. Now we can say defensive placement is get if null of U tools. This should be a static which takes this object defensive placement and also takes a supply. See we are getting a compilation error here because this is returning as a type object and we are trying to force that into defensive placement. So we could again do this. Okay, all this for some clean code.

Apart from this, I think we got rid of our synchronized keyword here, which is something important. This is what we have slightly cleaner code. Uh, there's also another problem. We can still create defensive placements from outside by calling the constructor. So the way to get rid of that is to just say this method is private. No one can call it only people inside this class can call it, oh guess who's calling it?

Just the singleton method. Alright, so this now can be again, copy pasted, like I said, slightly better code. Of course, look at this ugly piece of code magic slightly better. Finally, offensive placement sets this Private constructors also have to be created offensive placement too. Now we have singletons everywhere and you see this is no longer going to work. In fact, new fault placement is just illegal.

So this forces us to use the singleton method that we have dot get. Okay, that's a good sign. We are just not allowed to now use Any kind of method that we want. Uh, for placement. We'll go for the next angle in our case that is this function which is center placer. Uh, and finally we'll have a corner placer.

So let's note those things down. Now you see that there's a lot of boilerplate code going on with these two glasses. One of the things that could come to your mind is why don't I just take a lot of this code and put it in some sort of a base placement, right? Something which has a basic implementation of placement, which is this singleton. We could try that and it won't work. The reason being that you need specific types of placements.

You need to pass in exactly what you're going to create. So inheritance in this case is going to be as good as a usual function. That's it. You still have to define a private constructor. You still have to define a field here and you still have to define a get for that field. You can try it yourself and uh, let me know the results unlikely to be much better than what we have already.

Okay? So let's, let's create a center placement and call placement. Now the rest of the things are rather easy. All we have to do is go to the AI engine. First thing we are going to do is we are just going to see what is an offensive move. Uh, and play that, okay?

That will be the cell that would be returned here. So this logic, uh, has to be removed or copied initially just to make things easy. Go to offensive placement and set this here instead of a null, we can have return best in what really is the offense. So if you have a for a player and a board, this is the logic that we have. We also need a rule engine, which for a placer is fine in a rule engine makes a lot of sense for you to be able to place the right. Uh, we also need a player here.

So what I'm going to do is I'm just going to go to place in placement. I'm going to say that you have a board and you have a player and all of our placements are basically for the tic-tac board. So we can assume that this board is a tic-tac board. You see this makes it a very concrete assignment. We don't want to do this. Usually you want to use some sort of dependency inversion.

The basic idea being that if you use a board here, then tomorrow you are also able to make offensive moves such as, but the logic is tightly coupled with the kind of board that you're playing. This entire logic of conduct placement, defensive placement is tightly coupled with the tic-tac board. So in this case, any kind of generalization is just going to be in fact giving incorrect expectations to the person calling the CPI. If you see that it only works for a tic-tac to board, it's much easier for the players or or the person who's writing the code To understand where this is at. Okay? Okay, so that's the board.

Uh, let's go back to placement and say that you know, you are a tic tacto board placement analyzer. So we go to offensive placement. This returns what kind of cell we should play. So it's optional dot knowable. Here we go. And a rule engine, this is interesting.

We agreed that a rule engine should be a part of every placement. So why don't we just put it here in the interface so that takes care of this class. The rest of the classes still have a bit of a problem or placement is going to return some sort of logic for fork. So going back to the AI engine again, uh, copy pasting this code here is going to make sense Best here and we done best here. Okay, so two classes are fine. What about defensive placement?

Let's go back to the AI engine. Let's see. Defense copy that in defense placement in place you return is nullable defense player and the board and this is tick back board without layer. Okay, what about the center placement? This is reveal. Let's just go to center placement here.

Instead of returning optional empty, we'll say the center cell is initially maybe not available, but if it is, then take the center. As we said, this is a dictator board with the player for placement. Has the next attempt as center placement dot get. And similarly center placement has corner replacement dot get, uh, and corner replacement has null. In fact, this could be wild condition as long as the placement.next is not null. Keep doing something.

So file conduct placement is the place where we come to. Uh, and this is off nullable function here in the AI engine. This logic has to be copied, converted into return. A cell place corner just needs a tic-tac board and you can then try to place a move in the corner. Okay, this might seem tedious. It might also seem that, hey, I just created like hundreds of classes to do one thing.

But the benefit of this is that you can now go to the AI engine And instead of saying get optimal move with all of this complex logic, right? The things that we talked about. Number one, number two, number three, number four, number five, number six, all of this code in one class tomorrow. If number seven comes in, number eight comes in. Instead of having it here, you can have them as blocks of placements followed one after another, telling exactly where to go. Next, we need to start with a placement equal to new or rather because we have a singleton so forth placement.

And while placement.next is not null. Set placement for the placement.next, but before you do that placement.place for this board and this player, the best possible move. Now if this is not null is present, then do something with the result. So this would be the cell place dot get. This has to be retarded, okay? You can of course make this much cleaner in just return if present and all of this code that we had earlier is removed in the end, if you have run out of any place to place, then return.

Now that's also okay. But all of the code that we had earlier and all the context and all the things that we had in one place is removed. You see the disadvantage of this is that you can't clearly see the flow in one go. You have to go through the first placement and then see what's next, right? In fact, we went for fork placement over the desks. That's incorrect.

Uh, offensive placement is what you want. So you go here, then you go for what's next, which is here defensive. Then you go for what's next, which is your fork. Uh, then next is center. And then finally you say corner. And now you see null.

This is a rabbit hole. This took a long time because it was a chain of code that you followed. Everything was placed together. Now we just broke into pieces. The benefit of this breaking into pieces was one lesson modification. So tomorrow, if a new placement algorithm comes in, which you have to somehow incorporate, that requires a new class to be created and that class has to be placed in the right place, uh, the structure becomes very explicit.

Unlike a linguist where you can just place it at position one or two or three here, you know exactly what is being placed one after another in the core itself. Defensive placement tells you exactly what is going to run after it. It's not going to tell you some generic placement. It's gonna tell you fault placement. Okay? Unlike the rule engine we had earlier, which was a set of rules, one can run after another, uh, and we don't know exactly which rule is going to run after which one.

Without seeing the order of insertion here it is explicit. That's the only benefit. It's a big benefit. And this is called the chain of responsibility principle, uh, which we have implemented using singleton classes.

## Interface Segregation Principle

Type: Video · Length: 4 min 19 s

### Lesson notes

The video explores interface segregation in software engineering. We addressed issues in the "board" class, which became overly extensible with a generic method called "getSymbol."

### Transcript

One thing that I want to mention here, which is quite important, is the idea of board saying Get simple. Okay. We saw that there was a problem with this. Uh, when we tried to put get simple in the base class of board, we could have done this. We could have said, uh, string get simple and this would've made our life much easier. Output would've been much cleaner had we been allowed to do this.

But we then mentioned that if you say get symbol for our board, then every single board that implements this base class has to now define what get symbol is this board class, if it has a I and an in J, the coordinates looks fine because we just have one implementing class. But tomorrow there may be new classes. So we decided not to do this. But it's not a very sophisticated argument. I mean, you can always make the argument that, oh, there's going to be classes which may or may not have cells, hexagonal boards, uh, in which case we can't make this work. But there is a lot of logic which can be put together and yet we are not doing it because in future things may go wrong.

So it has the sign of an over-engineered class. It has the sign of something which is in, uh, paranoia almost. We have not implemented because we want to keep our classes super extensible. It's not very good software engineering. What we could instead do is say public interface board. You just allow copies and you'll just allow moves.

And at the same time, a board firstly could be kept in boards. So let's refactor that. Uh, and, and a new class or interface which says board with cells or cell board. Now this extends board, but it has its own function or spring get cell in T. In J. So what has happened is board is defining two methods and it's sub interface defines one method of get cell.

This is for all boards which have cells. Okay? TAC to board has cells. So this is tel code. Now things get interesting because cell board actually implements, not get cell, but get symbol. We can now go here and we don't need to necessarily define that rule is of a particular type.

We can get read of this generic here. Okay, it's just a cell board that's going to be returned. That's all you have to do. Let's see the six related problems to this. It's just compilation errors. We get rid of generics in all the rules and let's get rid of this and things are working fine.

Now you see, that's crazy because our code got a lot simpler. We got rid of all of our Gen Ds issues that we had, which was making the code complex to read. And also it was really not leveraging the power of a cell board. The cells that are there in the board, which can return symbols. That power is not being leveraged by creating a separate interface Just for boards which have cells, cell board, we were able to make our code much easier to read. And this is called interface segregation.

We couldn't use the concept of a board because that means something. We instead abstracted out some part of the cells into a separate interface that's called a cell. This is interface segregation. The idea here is that some responsibilities are to be extended by some types of classes, and generic responsibilities are to be extended by all types of classes. So cell board is an interface applicable to TicTacToe, applicable to chess, applicable to pseudo pool, applicable to many boards. But the board is such a generic interface that it is applicable to all boards, even hexagonal ones, even circular ones works.

That's the power of segregating your interfaces according to different capabilities. It keeps your code clean. It also makes certain things very explicit. Your rules now are not for generic boards. They don't work for circular boards. They only work for cell notes.

If I, if I do this, then it doesn't work because get simple. What do you mean by get simple? You could also re name this to a cell rule or rule for boards with cells, but for now, we'll just keep it here. Simple to read. The idea being that we were able to leverage a lot of the common code because we were able to segregate into interfaces.

## Dependency Inversion Principle

Type: Video · Length: 2 min 57 s

### Lesson notes

The video explains the Dependency Inversion Principle (D) as the final component of SOLID principles. It emphasizes the importance of avoiding strong dependencies on concrete classes and instead inverting dependencies by relying on higher-level abstractions.

### Transcript

And the final principle of solid, which is d is also right here. Okay? Uh, in fact, if you look at s and o of solid, those are principles. Those are things that you strive for. Single responsibility, something that you strive for consistently. Open, close principle, open for extension.

Close for modification is something you strive for extensively, extensively and continuously. But LI and D are basically put together a set of three small rules whenever you're doing any kind of inheritance. The idea of l, i and D are pretty much the same. Make sure that your inheritance makes sense. Any kind of inheritance of classes make sense. L says that if you have subclasses, then they should implement all the methods that the upper classes say.

So that is the list of substitution. You can substitute without breaking the behavior, uh, of your existing code because they implement all the methods that have been defined. I is interface segregation. You can reuse some components, but make sure you don't force them into the original class of board. Create a new interface of cell board and provide the functions which cell boards need in a separate interface. So you have segregated.

By the way, this is also something very useful for splitting microservices. If you have a large microservice, uh, and you want to break the service into multiple pieces, interface, segregation, ships, and finally you have dependency inversion. Okay? Dependency inversion is probably the easiest to understand amongst all these. Uh, the idea is that you do not want to put concrete classes here. Like I could pass in ttac or board and things will work, work fine or rule.

But if you pass in generic classes like cell board, then all boards having cells can actually implement this. This is the basic idea here, is that you want to reuse code as much as possible. Keep code as flexible as you possibly can, which is the extensibility principle. And you do that with dependency inversion. You don't have a strict strong dependency on a subclass. You invert the dependency by having the dependency on a higher class.

In fact, the person who came up with this dependency version to said that the way in which you implement o open closed is dependency version. So this is a technique of implementing o open closed principle. So that enumerates all the solid principles which are there. S stands for single responsibility. Very important that you have one class doing one thing and doing it well. Seems like a concept which has been picked up from decades of software engineering.

Unix implemented quite well. Uh, open close is something which keeps your classes as extensible as they possibly can without requiring consistent changes to existing code, which are, you know, scary because you, you have modifications, your unit tests might break, things could go wrong, and also classes get bloated. So you try to keep things as extensible as possible. No changes. LI and D are all around inheritance together. If implemented well, they are a great set of rules to make sure that your code is amazingly easy to read, extend, and of course, with tests you can also be sure that the code is correct.
