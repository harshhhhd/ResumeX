# 4. Dont Repeat Yourself

## DRY: Dont Repeat Yourself

Type: Video · Length: 15 min 11 s

### Lesson notes

In this video, explore code refactoring techniques aimed at enhancing readability and adherence to the "Don't Repeat Yourself" (DRY) principle, with a specific focus on the 'getGameState' method within a rule engine.

### Transcript

So now our code is more readable, so this is great, but we still haven't talked about the principle of open closed and we are not going to do that till it comes upon us. Right now there's no burning requirement to fix code. So what we are going to do instead of finding principles and applying it to the code is instead find problems in our code and see if certain principles can come up. You saw this happened with the prototype pattern. A design pattern just popped out of nowhere. Let's now see where the real problem is in our code.

If you ask me, the real problem is in the rule engine, this get state method is just terrible like this. So much that's happening in this single method. If you see the length of this method, it's from line number nine to line number 98, which is roughly 90 lines of code enormous. And if anyone has to do a code review on this or anyone has to refactor this code, it's going to take them a few days. This code was really complex. It would've been total nightmare to add a new feature to this.

So what we are going to do is we are going to refactor this code first and the idea of refactoring this code is going to be, can be reuse certain pieces of logic in parts of this code and convert it into a single piece. So what we are going to do is an actual principle of software engineering comes up, which is don't repeat yourself. The RY also called dry, don't repeat yourself is going to be applied. Over here you see that the entire board is scanned to find row completions and the same logic is applied for column completions. Let's see. These two pieces of code can be put in one place.

So firstly there is the thought of a first character of a row or column and this is happening in columns, this is happening in rows. If a row is found to be complete, the row is broken away from processing stops there. Similarly, if a column is found to be complete, processing stops there. That is interesting. If the first character is not null, then there is a possibility of a column being complete. Otherwise there's an empty cell.

So there's no way that a column or a row can be complete. The first character is the only character which can fill this column at the same time you see in the I and the J, it rate is also going uh, at the same rate and you get the symbol at a particular position. You see if it is equal to the first character. If it is, then the column is complete and you break. Similarly, you come outta the loop and you see if the column is complete then you break again. And finally if the column is complete then you return a new game state where you have one with this first character.

Can we make this simpler? Yes. How about we take this and we place it here? Would this work for us? The answer is yes. Once the column is complete we can just return because after breaking it's going to come to the if you similarly over here instead of breaking and then returning, just return right here.

Now again, look at these two pieces of code call complete and row complete are basically the same variable. If I call this variable of call complete row complete, what's going to happen? Nothing. It's the same variable. If if I send this to true it's totally fine or the computer, this bullion variable is set as false. Also true depending on the first character or the computer, this is just a bull variable.

So instead of row complete, I should call this as one. Okay, so basically as this character one, rather than saying has one, has someone, someone is victorious, little wordy but it exactly explains what's going on. If anyone is victorious, if anyone has one, they have to come in here. Whether it is a row completion or a column completion. Now what are the differences in these two pieces of code? You see this line is the same.

So in fact this entire section of the code is the same. Some pieces are different. One of the things which is different is you go from I to J here, uh, while here you go J to I, your column number and row number are interchanged. Similarly, you have the first character being set as I comma zero. Here you have it zero commi. So that is a shift in terms of where I should be placed.

It should be placed in the column area here and it should be placed in the row area of view. That is the only difference that's there. Everything else is the same. Now what we are going to do is a little bit of magic. So I need you to pay full attention. You saw that everything is very similar between these two pieces of code.

What we are seeing is just two small differences. One, the first C is being initialized in a different way. That's it. Two, this board cell is being iterated in a different way. ij GI first catheter is I zero and zero one. If we knew a way in which we could pass in the right row and column to get simple here and here, then our job would be done.

That is what we want. What we want to do is we want to say depending on whether you're running rows or you're running columns, you want a function or something which gives you dynamically the right row and column. So let's try and do that. Let us say that this is for this first character here is get ghet row I and this is get call I and instead of just taking a function, I'm going to take an object and say I'm going to apply it. Now Java actually has functions that you can treat like objects. So a function that takes an argument of inte J passes a result of inte J would be kero and get all each of these can be initial list.

If you pass in I, I'm just going to say word dot get state get symbol i comm Z, it won't actually pass any T. This will pass in string because we need the first charact. Similarly get column is just going to say when passing in I you get the symbol at zero comma I what did I do? I define these two functions which dynamically return the symbol and the I throw or the I column. This is exactly the same as what was there earlier but instead of you know directly calling the function, I'm now taking an object and applying I to it. So you're seeing that these two are now starting to look even more similar and it's not just that they're looking similar.

If I can pass in this object to this area then dot apply I is going to gimme the right result, right? So this object is iterator of first character supplier. I can move this here and first character supplier is going to turn into get here. Remind me wondering hey this is something super Java specific. Does it really work for C Sharp? Does it work of Golan Python?

Think about Lambdas here we are not looking at the object of function. The function object is basically allowing us to use Lambdas, okay? Uh, in Golan it's called functional littles in Python also you have Lambdas even object according program languages have support for lambdas now and you're also seeing that there is a local variable that I'm able to pass in to this function. So if I had this function defined outside somewhere, it wouldn't work. In this case, I'm dynamically setting the right iterator on the board after it has been passed into my local function. That's the way to do this.

We have a GTO supplier and a get column supplier. You now see that this part of the two common pieces code has also been set up. What happens to get symbol, you can guess this. Get next row, get next call. I'll lean in these variables uh, soon. But the basic idea is if I pass in I comm J, then I should get icon J here and if I pass in Icon J, then I should get the question now is what's this won't be allowed because this will give us a compile.

Instead you have to have a PI function which is going to take a ajo job and yeah, under the bi function job fact supposedly you can just replace the method disruptions but uh, I won't do that. I'll keep it simple. I'll make it even more explicit that there's a change uh, in the way that we are creating. Okay? So get next row apply, I get next row apply ology. Now let's convert this into a function.

Say game state at the same time you see that if you pass in the right kind of parameters now then things are going to work. So instead of get next row or what's happening here is they're saying hey, why don't you pass in first character? Why don't you pass in someone's victorious and get next row and you know things will work out. So let's see what the ID can come up with. Okay, this is pretty poor because if the ID was slightly smarter, what I said first character supplier is get set call. So why are we doing this?

Why can't we just pass in? That makes it shorter. First character looks odd here someone is victorious also looks odd here. So let us see what's going on here. Someone is victorious is true outside and over here it is you know, passed in as whatever is over here. Someone is victorious is true.

This makes no sense. I just get rid of this. This shouldn't be a parameter, it should be a local function. It's also static, which is weird. The follow this bull variable can be defined here itself. This code is much more readable.

The first character set over here, victory streak is probably much more accurate. The first character not being able to null is the possible streak. And if you know the streak breaks at any point than possible streak is false. Uh, if possible streak is true after the whole row or the whole column has been gone through, then we just return the game straight as it is over with this captor streak. Okay? So that simplifies our function even further.

And you see that the total number of lines of code we have is roughly the same. The single function that we had which had 90 li lines of code has now reduced from line number nine to 90 to 12 to 68. Okay? We have broken into two pieces also. This if you ask me is simpler to read get symbol can be inline and get column can also be inline. Similarly, instead of having this massive bi function, we can inline these two to have more readable code.

Looking at this, you might say that Oh my god, God I find this code much more readable than what you have just done here, right? Because what's happening here is rowing is a game state and you get the game state with all of these complex lambdas and I agree yes, this does look complex. So there's two ways to think of this. One is to say whatever refactoring we did was a mess and we should just revert it. And the second one is to think that hey, we really did simplify the logic a lot, but code is now maybe more extensible. The code is maybe more correct or more testable because you have everything in one place but it's definitely less readable.

So step by step what is wrong with this function? And the answer is these two types of objects are pretty complex. That's one, but it can't be avoided because you need flexibility tools. The second thing is the naming of this function is pretty bad and get game state doesn't tell us anything. So what we should instead say is that is it a victory first character supplier And we just turned into starts with whether the row or the column, it starts with this get next row pretty bad again. So next first character can be called start of the streak and now this code is much more readable.

Let's also look at the logic of this code. You're effectively starting from a point i going up till the end, whether it is row or column, you're basically traversing from zero to one to two. You see what is the first column or row in that? Okay, so meaning that one of the the column or the row is equal to zero here, why are we doing this? Why? Why do we have a start?

If start is not equal to null then do this. This optimization of finding the starting character is making this board much more complex than it should be. What is truly happening here is that we are taking the starting character, we are then seeing whether there is a possible streak with the start character and then we are doing the same thing for the rest of the characters in this row or column or diagonal or whatever. Because of a small optimization, we are seeing a lot of code complexity. How do we avoid this? Let us see if we can make the code a little less complex with this minor optimization being removed.

So start is starts with apply I while next actually tells you that if chase starts from zero then the first character will also be included in this all loop. Take your time to understand this. You are starting with a particular character and then you're going inside and you're doing this tiny optimization of hey skip that one character that I had because I have already picked it up. Skip J being equal to zero. Now I'm saying don't skip J being equal to zero. Take it, accept it, nothing changes.

This will still work. The start character now becomes redundant. So let me get rid of this and what about possible streak is a streak possible at all? The streak is now always possible. It's not just when star character is not. Now this also becomes true and so if true basically can be removed Now what do we we have the star should be equal to the next character, which means that every character should be equal to the preceding character.

That's what it's, which means that every character should be the same. Here you have next do applied I icon zero, that's all J was basically the first character of the row of the column and then we iterate over the row of the column. Next does the exact same thing. It might look very fancy with this single idea that the same iterator can be used for is victory. We have made the code much simpler and is possible streak then basically because this there is one piece, uh, which is still a problem and that is next of IJ should not mean that. So briefly let me try to describe what's happened and after that we look at the design pattern solves this in a much better way.

What I'm trying to do here is look at whether a particular condition is victorious. So to do that I have gone over an INAJ column loop. You might be thinking that's crazy. How can you say INJ? Like what exactly are you doing? I'm doing a traverse.

A traverse which says that when given two indexes which row and column should I go to, it's not necessary that I is the row and chase the call. You could have INJ telling you the column and row. Also we are looking at a possible streak that is line number 71 with these two iterators. When you apply INJ to a formula, you get the cell that you're looking for, whether going along a row or a column doesn't matter, but you get the cell that you're looking for. And if it is null, there is no way that you can have a possible streak, right? Because there is uh, an empty cell in the streak that you're looking at.

So possible streak initially is true. If there is a null streak, there's no way that you know the it's possible. So you just break after setting it to false. And also if the first character of the column are the first character of the rule, there's not equal to all the characters of the column or all the characters of the rope, then possible streak is false. It is impossible to have a streak and you break. So these are the two failing conditions.

Otherwise, if this didn't happen, then you, you have a full streak actually. Uh, and therefore you return New Game State through Nextdoor Apply I, so the first character is being returned. What I did is I got rid of that starting character function that we needed.

## Iterator Design Pattern

Type: Video · Length: 7 min 22 s

### Lesson notes

In this video, learn the intricacies of a specific method for the utilization of an iterator as a more efficient alternative. A thorough explanation is provided on Java iterators, highlighting their implementation of 'hasNext' and 'next' methods for seamless traversal of elements.

### Transcript

Now this is complex. Maybe you've understood it in just one go. Maybe it took you a few times to understand it, but this is still very complex and it's not just the naming that we have, it's just that there's a lot of ING that's going on here. So instead of using such a complex method, we are going to be using an iterator. And iterator in Java is basically an iterator of elements. If you say cell, let's say this is iterating more cells, then what kind of function do I need to implement?

I need to implement has next and I implement need to implement Next. If these two are implemented, our job is done. As you can see, this interface has next and next you also have removed, but you don't need to support the operation. There's a default of unsupported exception and also for each remaining, which is not necessary in this case. So we just care about whether there is a next place to go to that would take care of this fall loop condition and what is the next that we are going to go to? That is the next line.

So instead of this BI function, if I just had this a ator, then my job would be done because all I would now need to do is say for a particular board factor board, pass me an iterator. The board dot get symbol will go for a cell cell will be iterator.next, that's it, zen dot get row cell dot get all. That's all I have to do. At the same time, I have to implement that logic here, which is this can be converted row. This is converted to column and for the first character you will need a separate. The reason for this is because you cannot really pass in a zero, uh, into the trade.

You need one by one, the first characters of each column or each row. The logic comes from this. If you have two fall loops, then you need one fall loop just for the first characters and one fall loop for the inner iterations. This J can in fact, we turn into it has next. This is a, and this can be passed in here with first rule first four. First first cell is going to be on the first character.

Now this is more wordy than what we had earlier, a BI function, but this is in fact much more readable than the previous BI function that we had. The BI function was passing an I and a G, and so you had to think about what is next. This clearly says what is the first character? How do you get the next first character for a particular or column? The comparisons are much simpler. So we have come back to square one when it comes to a single iterator, the iterator, because it cannot store state, it just tells you how to iterate over something is much worse than the bi function here.

The reason being that the bi function is actually telling us which row and column to get for any ING. While the iterator needs to know what is the first character, the first character needs to be compared with the rest of the row or the column that we're going for. So a bi function by definition can take two variables at the same time. And ator can take only one variable. It can tell you what is next. It can tell you whether there is a next, if there are two variables and there can be two ous.

So the bi function is more suited here for this kind of a iteration or this kind of a traverse. If you think about the board as a set of nodes and from each node you can jump to the next node in different ways. It'll be much more sensible to use a BI function. So that is what we will be uh, doing here. The idea of the iterator is extremely similar to what we already had. You need a first symbol, you need a way to get the row and the column, the next row and the column and the data can be defined in that way.

We are just going for a bi function, which is shorter, easier to understand and therefore better to work with in our particular use case. Alright? What we're going to is find a streak if there is such a streak. Then return to with the character over here, this function just got much simpler and so from 90 lines of code, you're gone to 80 lines of code with a lot more effort. There is one thing though, our code is a lot more rigid. Now if you have some sort of, you know, zigzag it ratio, then this bi function will just fail.

Or rather the BI function, uh, needs that kind of logic here. When you pass in the I energy, then you need to define how is that exact pattern going to work. Let's do the same thing for the diagonal that we have. Uh, and let's see if we can get some gains there. Also, the diagonal we see is the, these two are basically mirror images. You have if diagonal is complete, and again, we can instead of calling it dag complete or something and that we are first way to just rename it is streak and reverse dag complete is just a, now the only differences is the first character here and the way in which you are checking what's next.

So we know how to do this. All we have to do is pour a particular eye, get the simple at ii, this would be a function which takes an in detail and returns a string. That's F1. That's basically the diagonal function. We have a reverse diagonal function, which takes i comm two minus I. We have ag apply zero cure tag apply Zero makes this extremely similar.

And ag Apply, I these two functions are now the exact same thing in a diagonal streak. That is what we are trying to do here. First, character doesn't need to be tasked in here. Don't need a static thing either. First character is simply D or apply to you. The final piece of the puzzle, we just take the game state.

We just take the reverse diagonal, pass it here. If the reverse diagonal is not null, then return it and this entire piece can be cut out. Let's pass this in. Finally, I'm doing exactly what I did with fine streak. Get rid of the first character comparisons because that makes things complex. Just pass it in directly here, uh, and check whether every character that you have in this STA is not equal to none possible.

Streak is something that we are going to keep and that's it. You have a shorter function, basically the inside of this function as being pushed into this. Please.

## DRY: Extracting Common Pieces

Type: Video · Length: 6 min 55 s

### Lesson notes

The video discusses a practical approach to software development, emphasizing the limitations of overly structured and theoretical methods. We suggest that actively working on code, even locally without committing changes, is a more effective way to improve software.

### Transcript

So at this point, if you have stayed along, you're probably wondering, is this how development seriously should be done? Isn't that a nice structured approach to things? There is a structured approach, but the problem with any kind of a structured approach to improving software is that it is too academic or too theoretical. This is much more practical. In reality, you will see problems and then you'll try to fix the problems and then along the way you might come up with some ideas and along the way you might also see that, oh, there are some design principles or design patterns that I can implement here. There is another approach that you can take, which is just looking at the software and thinking about it for a while, which is also fine.

There are many methodologies for this. You can take a rubber duck and talk to it about, you know, why is your software not working? Uh, what could happen? What would be the pros and cons? This is a very famous way of doing things, but in my personal experience, the best way to improve software is to get into it and actually change it. When you change things, it's not necessary that all of your teammates are seeing the changes, it's just that you are making the changes locally, understanding how this code works.

And even if you don't commit the changes, you'll at least see some improvements. So coming back to the problem now we have finding streaks with INGA treaters and we also have finding a diagonal streak. And now you see there is almost an entire code overlap between find diagonal streak and find streak. I goes from zero to three, I goes from zero to three here or rather J here. Possible streak is marked as true here. If there is a possible streak, you're breaking, you're returning, otherwise you're returning.

Now this part is basically what is inside this folder. It's just happening three times, but it's not very easy to just pick up and change because you're seeing these function calls of nextdot apply have two variables in them while the diagonal has just one variable in it. Okay, so we are taking a very mathematical or coding based approach. We are not really looking at it at a high level like oh, let's think about the traversal. Instead, we are looking at common things which are happening in the code and trying to extract that out into one thing. This, as you saw, has the problem of making the code too rigid.

If the expectations from this code change dramatically tomorrow, then it's likely to break this code. We talked about a zigzag way of moving. Uh, if that happens here, then find diagnose streak and find streak are going to find it difficult to move in that pattern. Now let's look at this fine diagnose streak again and let's see if we can just replace, uh, a large part of this score and this score into one single function. Diagonal apply. This takes a single variable.

Next apply is two variables. Diagonal apply here is setting it to zero, the parameter to zero. While here you have I comma zero. So that's interesting. And finally here you return tagal apply zero. Here you return.

Next apply I zero. We see that 0 0 0 0 is common over here and I is common over here because it's the enough fond loop. While J is common over here because that is the enough fond loop here we see that if we rename this variable to J, the only variable that is changing in the function that has been passed is J, right? I is constant for this inner folder. J is changing and you have zero here in J, here you have zero in J, which means that if I can extract out this constant I within this, then I can reuse this piece of code. Let's see how we can do that.

Let's say there is a function that we have to pass. So I just call this function traverse. This is the inner loop traverse that we have to do. And this is such that if you pass in the variable J, then it says next dot apply I comm. Okay, you see that it says that I should be final. We take care of that in a minute.

But the important thing is that the traverse is taken care of. Now all I have to do is say traverse apply J um, and this is TraverseLT apply zero. Okay? What I did is I saw that the constant in this inside fall loop is I, so I have converted that into Lambda and now this piece of code is identical to this piece of code. So if I just take this function and say traverse, you see that they're identical. Now this fine diagonal streak is a single line function.

So I'll just inline the method and you see that these return types are quite ugly. This whole operation has resulted in fewer lines of code from 90 lines. We have now moved to something like 70, much lesser than 70 actually, but the problem still remains that the code is not readable. Earlier the code was much more readable, much longer, much harder to change. Now small changes will make massive changes all over the place. So we have done something like in machine learning over fitting where, uh, our code is very rigid.

If there is any change to the way of traverse, it'll be difficult. Let us now see if we can make our code at least readable, if not extensible. Let's call it outer traverse here. Similarly, these null variables are polluting our code. So instead of having this, I'll just follow game state is what we're returning. That's our false game state and nobody has one.

So this would be the default game state. If things go well, then we are just going to mark the result as this, and in the end we are going to return the result. And the same thing can be done over here. If traverse are not equal to null, this part is impossible. We always have, uh, not null being returned from traverse. So this line has to now become traverse, thought is over, then we can return traverse, otherwise we return the result.

Other thing that we can do here to simplify the code is result is equal to traverse. This makes the code look cleaner. We can break and this point, and finally outer traversal is never going to be null. Instead we're going to say, and if it is, then return Ruben. Similarly, for these pieces of code, at this point we can see that we have reduced the number of lines of code in 60 lines of code. We are now able to do the same thing that 90 lines were able to do earlier, but that is not a very good measure of how effective your code is.

Uh, like we said, seeing how readable, how extensible and how correct your code is, is the most important thing. So correctness can just be measured by running our test and then we can look at the design. Uh, in terms of correctness of code, everything is perfectly fine.
