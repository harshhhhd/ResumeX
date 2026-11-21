# 8. Memory and Code Optimizations

## New feature request: Undo Moves with Momento!

Type: Video · Length: 10 min 39 s

### Lesson notes

The video discusses the implementation of a history feature for a game development project. The code is in a presentable state, and the focus is on adding new features. The new feature introduced is the ability to record the history of moves in a game and allow players to undo their moves.
We describe the moment design pattern here.

### Transcript

Now that our code is at a state which is roughly presentable, we can think of adding new features now. So imagine your product manager comes along and says that, you know, along with everything that is here, we also want the capability of every game to record the history of moves. And also we want every player to be able to undo their moves. So maybe your training, or for whatever reason you want to undo certain moves, this capability means that when you make a move on the board, when you click on undo moves should be undone. Meaning the board should return to the previous state which was there before you made the move. In some games like chess, this is hard to do In some games it is nearly impossible to do because there's such a big cascading effect like chain reaction.

A single move results in many, many changes in many, many cells. So over there it's easier to store the entire world state before you made the move rather than trying to undo certain moves. So we'll take that general idea. We have already, you know, uh, tried to do that when we were looking at the prototype pattern for the Dictal board and we said that we can clone a board. Okay, we are going to reuse this copy method, but this time we are going to add an additional capability. The capability is that whenever you're making a move, you are going to copy the board and store the original state in a list, a log of all the moves that you have made and the boards which were corresponding to those moves.

Let's do that and I think it'll be easier to describe then. So every detractor board has a history. This is the history object and you can define history as a class with a list of boards where each entry into the list corresponds to a move which was made on that board. So you may implicitly store the history as per order. Whenever you're trying to go to move number 17, just go to the list item at index 17 or you can make it more explicit. You can also say that this is a map of in inte O to the board.

The benefit of this is that this is much more explicit to mention the move number and the board appears in front of you or that we need a map object. Uh, the best part about this is that the internal implementation of history can change, but it's public APIs or public functions don't need to change. So what are the things that we want to expose? Industry one would be get bored at move or that is in move index and you should be getting back a board. So this is what you get. Return boards dot get movements.

Also, another function which is very common and useful is an UND undo function. So you don't need to pass in any index here, it's implicit. The expectation is that you're going to get the latest move index, you're going to get the board, which is one step away from the current board. So the last index has to be gotten here. In this case, if you have a map, then you need to store the number of moose also, which have happened in this board board start size minus one. This would be at zero based indexing.

If you have the moose stored as per move number 1, 2, 3, instead of move number zero one and two, then you just send board or size and you'll get the uh, latest move with a single end move. Do remember that if the history of the board is being saved, then we are not aware which player has made which move. Okay? If you allow multiple consecutive moves for the player history doesn't know that history is very generic. Uh, it can't tell you which player's move. It is undoing.

It can just tell you that I have undone a move in this board, which for most use cases is enough. So this is the object. Now let's initialize this. You see that for one tacto board, you have one history object. And so whenever we are making a move in this board, we should probably save our history because three dot, and this would be the answer. We are talking about a move where it sets a cell and the cell setting does not create a clone.

So cloning the board as being given to external players, people who are calling this tic-tac board while the history is being expected to be stored by the board itself. So at some point we are wrong. Either the cloning should be done by the board itself or the history should be stored by the person who's creating these clones. If we go to the copy function and see who's calling this function, then we see that quite a few places require a board copy, a defense offense. Every strategy, every placement requires a board copy, right? And, and that's quite wasteful knowing very well that every move should create a board copy.

Uh, there is one benefit of course if you create a board copy externally, it tells that a board may or may not copy by itself. If you need something, if you need the board copy, then you do it yourself. But in our case, the few times that we are creating a board copy is only when we are making a move or we are trying to store history. So what we are going to do now is we come to the move function and we say that you must copy the board using this copy function. So this will be a TAC board and then we are setting the cell on this board. At the same time we'll be returning this board.

Alright, so move is going to be returning tight board. The reason this is useful is because whenever you're making a move, you get back the board on which you made the move. What is also fine, the expectation there would be that the move is made inside the board that you have while here you are getting a affected board. We are doing this because we notice that in every case of us making a move, we want to copy the entire board and then we want to make a move. Let's go to the base function and say that if you make a move, then you have to return a board in history, you have to add this board first. That's over here, words dot board.

Uh, and at the same time you just get board dot size plus one. Okay, so you added a new board for this move number. Initially, when the number of boards is zero, uh, there is no previous move plate. So this is move number one. And if you undo, then all we have to do is check if boards got size, if it is empty. So then you return a null board or you can also throw an exception here.

Illegal state exception. Okay, let's go back to add. You're able to add history here. You copy the board, you set the cell and you return. So let's see who all are making move. This board copy can actually be now directly set this way.

Okay? Uh, this is cleaner, right? You see that one line of code got lost, but more importantly now the implementation details are hidden. It's kept in move. So it is a side effect which is happening. Yes, it's going to require more memory.

Yes, it might, you know, increase the latency of the function, but all of that stuff is going to happen anyway. All we were doing is exposing implementation details. In every instance of move this was happening, we are now putting it in a single line. You see, I can get rid of all of this stuff if I just see where copy is being made. That's it. Copy is just being called here.

So, you know, exposing this as a public function doesn't really add that much value. This could be a private method also, but you know, there might be some cases where you just want to create clones of this board. So I just keep it public for now. The best part about this is, you know, it's just been called in one place in the class itself. It cleans up our code. We now have moves and our additional feature that we required for storing history of the game is being taken care of over here.

Now every game has history which can be accessed by this object at any point. If you wanna say that, get me the board at a particular move, that will happen at any point if you want to undo or add moves that can also happen. Uh, you see that if you jump to a board at let's say you know, you're at move number 30 and you jump to a move number 15. After that, when you're making more moves, you'll have a incorrect board size because that 30 moves 13 one will be shown as the new move from 15 instead of 16. You can go to 31. So what we need to do then is to get rid of all additional boards, uh, after 15.

So a map is fine. In most cases a map will work out, but we see that this is going to probably work out better as a list. So let's again change the internal implementation. Best part about this is that nothing changes outside the external functions still work. So get, move at index is going to be this. Also, we should get rid of all moves, which are after the given move index.

So I less than equal to start size plus plus, alright? This could in fact create a issue. This is a bug. Uh, if I remove the I element, which is let's say the 16th element, uh, and next time I try to remove the 17th element, basically the 17th element has shifted into the 16th place. Whenever you remove an element from a list, all elements after shift, one place before it. So to fix that, uh, I can take this index, which is the starting index, do a minus here.

Effectively what's happening is the same number of elements will still be passed. And here, instead of doing a remove, i, I can do both dot size minus one. Okay? Effectively, what I did is keep removing the last element for these many iterations. Now, if we are undoing, all we have to do is just get the board size and at the same time we have to remove, do this. And if we are adding, we just have to add the board at the end of the list.

Pretty simple stuff. Pretty easy to think of. Uh, we change the internal implementation of history with no changes outside. So that's good. This in fact is a design pattern known as the memento design pattern. The idea being that you keep a list of objects, a history of objects, uh, for every update made to that object.

The reason for this is usually undoing moves or in a text editor if you need to undo something. When you go back and see in history how this object used to look like, that's when you want to store this. At the same time you see that this moment of design pattern is useful. Yes, we have a new feature, but for every single move we are storing the entire game state, which is quite expensive. A board is going to have cells, the board is going to have its own set of moves. So that is like really, really heavy.

Okay? So a board storing another board, which has its own history, object and so on is, is quite heavy. You might think, well, it's not that heavy because you know, you're just storing references to those objects, that's fine, but you're still storing a lot of references and all of the state that can come up with the board. Tomorrow we might have many more things coming up with the cell.

## Proxy and Flyweight Design Pattern

Type: Video · Length: 10 min 20 s

### Lesson notes

In this video, we discuss the need to optimize memory consumption in software applications. The main suggestion is to use memory optimizations, particularly focusing on not storing the entire board in memory.

### Transcript

So the first need O of the hour is to actually make history, consume lesser memory than it currently does. What do we do for that? Here comes some memory optimizations. The first one is that you don't actually need to store the entire board. The board is going to be quite expensive to store. Instead, you can store a representation of the board.

This is called a proxy. A proxy is something which can be used and feels like the original object. But the moment you try to use any of the advanced methods over here, like let's say auto travers or or move immediately, you have to create an object for it. The idea is you don't want to keep large objects in memory. You want to keep proxies of those objects. Let's a board proxy.

And with a board proxy you have all the methods of board implemented. However, the object that you store in memory is much, much smaller in size. What would be a sensible board proxy? Let's define that. Can have a class board proxy. This is just a single string representation and this could extend the board, right?

So let's just implement the methods here. If you try to implement a move, we try to make a move on this board proxy, then it should construct an object and return you the object and then make a move on. And similarly for copy, so you can have a board reference which is initially null, but at any point of time, if you try to do any of these methods, then what happens is this board theory has to be set. So set board is going to be called here and then you have a board move. If board is not, then and only then do this. You see that this is very similar to the singleton pattern, but it's also slightly different.

Singleton pattern basically says that there should just be one object of a particular type of class. But the proxy is something that says that creating this object is quite happy. Storing it in memory is happy. I'm going to keep a representation of this object and I'm going to pretend like this is the same object that you had earlier. It has everything about a board. You can make moves on it, you can, you know, copy the board.

But the moment you try to do something on it, uh, is when the board class is constructed. This is the definition of lazy loading. You do not create an instance of a board unless required. That's the idea of a proxy design pattern. Now you see that I don't necessarily need to implement a proxy design pattern here. I could have a simple representation and the moment you want to make moves or you know you want to make a copy of the board, I could not support those methods.

Also, I could just say that no, I'm not implementing board. It's a board proxy which just has a string representation. Whenever you want to make a move, you construct the board using this representation, using this board proxy. So one thing that I could do In the tic-TAC board is to define a constructor with And this would define how I can take a board proxy, a string representation and construct a tic-tac board. This would in fact be even cleaner than the proxy design pattern that we are talking about. Depending on our use case, we can choose ido.

The benefit of the proxy design pattern is that you can treat this proxy just like you would treat a board. You can make copies of it, you can make moves on it. The calling functions don't need to know whether the board is instantiated or not. This is just lazy loading, right? That's great. But the drawback is that if you want to source light representations of that object, then you can't do that with a board proxy.

It might go ahead and create an entire object. And you also have to implement those methods that we were going to do earlier. And usually this is pretty ugly. When you're setting a board, you have to go ahead and instantiate a board. So board could be new tacto board, and then you pass in the board proxy over here. So the representation, common use cases for proxies are when you're creating a database connection or you're creating some sort of a heavy object, uh, and you don't want to create it till the last moment.

That's when proxies make sense in our case, because our intent is to reduce memory usage as much as possible. It would be better if we use a small spring representation and return board proxy eight. If anyone wants to construct a board, go ahead create a construct for this. You know, there's new board proxy, we pass a board, we can create a constructor. And here you have some logic for actually creating the representation. Representation equal to board dot two string.

So this is great. Uh, you see that our method signature is no longer as clean as we did earlier. We are returning boards now. We are returning board proxies and, uh, any person calling this has to be aware how to convert a bo board proxy into a board. But that's fine. Our intent here is to reduce memory usage as much as possible.

So this is perfect.

## The Labyrinth: Five Level Deep For-Loops!

Type: Video · Length: 10 min 23 s

### Lesson notes

The video critiques a rule engine's code, addressing durability issues and its unclear nature. It highlights shortcomings in a tic-tac-toe game's fault-checking section, suggesting improvements like interface segregation and better symbol representation.

### Transcript

Okay, before we go any further, let's deal with the elephant in the room. This durability piece of code that we have in rule engine, which tells you the information of for a board specifically this code, which is by four loop. Steve tells you whether there is a fault in the given position or not. Most importantly though, uh, just looking at this piece of code, there's no way that this is going to pass a quote review in your company. If this quote review is passing, then there is a need to look into the standards of engineering. And the other thing is, maybe this is a one-time piece of quote that you're writing or whatever, but this is just not acceptable.

Even if you're going to work with this quote for a couple of months, it's going to cost you a lot. The most obvious place where this is going wrong is players in a tic-tac to board game. You are well aware of what player symbols can be there. X and O is being hard putted over here. So for that, you could go here to the cell class and say that it also has a symbol. So string symbol, okay, the problem with adding a symbol to any cell is that this class now is maybe not usable for chest because those are not symbols.

Those have complex pieces. Again, chain reaction may have an ink over here, how many walls exist here and for which player in that set. You see for different boards we have different capabilities you might think of using interface segregation over here. Also the I in the solid, but it's not really applicable for a class, we will have to use inheritance here. And an inheritance, you'll probably have a tic-tac to board cell or a symbol cell seems too complex. Composition makes much more sense here than an inheritance in my opinion.

You know a cell has a symbol, a cell is a symbol, makes lesser sense than has a sim. But we won't go here. It's not a need. So we are not going to look into it. We are going to be defining symbols that are possible in a tic-tac board right here, right in a public static meaning for the entire class, final meaning there's no changes. A string array of symbols X and O.

In fact, this can be converted into an en so cleaner ang symbol and this can be inner class so that you can only access it from detectable. Here you'll have just two symbols, XO, and they have string values to them. It's going to be defined in a constructor that it's spring symbol or you know, symbol, symbol makes less sense. So I'll just call it markup. It's a marker of X or A O and then this can be initialized. You see that A class or in is static.

So I can, I can do this. I don't need to explicitly say that X and O is what we have. Now let's go back to our nightmarish function here. Instead of an index going from zero to two, we have for Emory symbol existing in Ttac board. That's weird. Oh, I put it in history, sorry for that.

It should be in the tic-TAC report which results in the rule engine saying symbols values. And for each symbol we get the marker. It's still a fall loop, but at least it's a four each Instead of a in I from zero to two, what do we do inside? How do we make the four fall loops reduced? One of the things that we talked about was to actually just create functions and try to bring this into lesser nested stuff. The logic will still be equally nested because if you break it into functions, then in every fall loop, uh, so from I equal to zero to three and J to zero to three, you'll be executing some function.

So it's not going to actually improve the logic, it's just going to be slightly easier to read. Instead, what we can do is reuse some of the code that we wrote when coming up with placements, right? We talked about a defensive placement and offensive placement. What are we doing for a, for the basic idea here is even if I try to save the game by making a defensive move, you will make an offensive move and wait and to confirm that, let's see when has fork is true? So inside this loop we have to change our logic outside. We are just checking for fox.

Can a person make a move anywhere on the board such that they get a fork? Now there's some weird things going on here and I think this is basically totally incorrect code. Now that I look at it with a fresh mind. What we are doing here is we are saying there are some coordinates ING and then we are making a move directly. We are not even checking if the move is possible or not if the cell is occupied. Okay, so this is interesting yet info is taking a board.

Instead I could say board with cell. Firstly that helps because uh, I'm now doing things that I'm capable of. I can't find Fox for general boards. I can find Fox for boards having cells. The second thing is if I pass in these parameters and I see that the symbol that is null, then and only then do I process. Otherwise I should just skip.

So let's do that. If this cell is empty, then and only then do we process a DD. Alright? Now this player variable is common across, so I'll just put it up both dot move. Yes, that's the move that we want to make. Uh, and we want to see if we are going to get a fork now or not.

What we are going to return is this cell the fork move. So instead of returning any for cell, we should just return cell it, okay? That's the place where you can make a fork. So this variable is useless. Also this inner fall loop is very confusing. I'm just straight up deleting it and can still win is not some sort of variable we are going to keep.

We are just going to manually see if we can make the move that is going to ensure a win for us. So if you make a move at cell ig, what needs to happen? Firstly we need to make sure that our opponent is forced to make a defensive. Then we need to ensure that we steer win. And these are two things that we need to do, do. So let's see, defensive placement.

This is a singleton of thrust, so get placement dot and if you can place a defensive move in this tic-TAC board that is over here. After that we want to check if there is an offensive placement also. So let's switch, call this offense, let's call this defense and this will be defense. Defensive placement get is not giving us what we need. So you see that this method signature of get is actually very poor because when you're returning something, you should be as definitive as you possibly can be. If you are returning a generic placement, it's not taking advantage of the exact type of object you're returning.

The basic idea is that you want to return subclasses definitive classes, uh, and you want to work with accept higher level interfaces. So when your code says give me something, it should expect a generic class as much as possible. However, when you're returning something, you should return something as specific as possible. Here you're returning placement, but it would be much better if you just return defensive placement. The reason being that if someone is expecting a placement and you return defensive placement, things work. But if someone is expecting a placement and you change it tomorrow to offensive placement, it'll still work.

So this works now and what should happen is we should just replicate this point in all of the placement classes, right? So now let's do offense place be for this player and remove the condition so that it's a little easier to read. The basic idea here is that if you can make a defensive move, this will be not none. And after that, if you can make an offensive move, this will be not none, okay? We have to make that move. Of course this is going to be an optional cell and if it exists then we try to make offensive placement, right?

Similarly we get offensive cell. If the offensive cell is existing, then we return something and for cell is basically going to be new cell it. Now you see there's still some compilation errors. One of them is that when you're making a board move, you're getting back a board but you actually expect a cell board. So this can be fixed. If we explicitly say that this cell board is of type T, why are we doing this?

Why? Why don't we just have a board here? This takes care of this compilation error. But the idea is that if you know that a tic-tac to board is in your hand, you can make it much more specific. You can again avoid a lot of the compilation error which are going to come up by explicitly stating that you have a tic-tac to board in your hand. So now at no point will I be using this board.

I'll be explicitly saying this is what I'm using a tic-tac board over here Again, I can use a tic-tac board. You see that the principle of returning subclass of the lowest possible level in a hierarchy of classes, uh, is being done here, which helps me avoid any compilation error. Here. Again, going back to board, there's no problem after making a move I check if there's a defensive move, which is possible. If it is, then firstly we have to make the move. The B is going to be equal to this new move defensive cell dot yet and this will be player flip, right?

And this will happen on the old board B move. So this board effectively had a move played on it and then we check if we are still going to win this game. If we are, then we know that we have a fork for our player which will return, but this looks much better than earlier. Uh, this is three follow loops. Nested follow loops pretty bad even now to be frank with you. Uh, and there's a if condition, but this is added for correctness.

So this is unavoidable. Uh, these three follow loops are absolutely affordable. What you could do is you can also use the concept of streams in Java to pass in a clear inner stream. The other thing you can do is you can take this entire traverse, this call loop traverse and convert it into a single function. Okay? So find four for player and then you have a find four power player as a separate private method.

For now, we are just going to keep it like this. We keep it in a situation which will most likely fail a code review because optimizing it is not very clear to us. Instead, we will focus on some other piece of code, which is quite ugly needs improvement. And that is in the AI engine.
