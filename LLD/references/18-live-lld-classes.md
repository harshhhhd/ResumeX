# Live LLD classes

## Machine Coding: Chess

Type: Video · Length: 84 min 12 s

### Lesson notes

Gaurav explains what a low-level design round looks like and what interviewers judge: code quality, extensibility and testability rather than scale. He then designs Chess by drawing first, with pieces, the board, valid moves, captures and check, and ends with audience questions.

### Transcript

Hey folks, I think we are Live on YouTube and on LinkedIn and on Twitter. Welcome to this live stream, which is going to be talking about lower design. And this is just to clarify. This is system design low-level design. A lot of you have might have heard of you know, system Design Round where you have some sort of coding to be done or some sort of planning of how the code is going to be written. So that's what a lular design means.

In fact throughout this live stream. We will be taking an example to understand what your design rounds are like. and hopefully, you know By the end of this session, this is the agenda. We know what Lowell design rounds are like a system design dollar InDesign countries like and also we know some of the common things that we should or shouldn't do in such a run. okay, so the intent I mean the the target audience for this is as the one to maybe sd3 okay, and Software Engineers only if you are product manager or a technical program manager or you know, someone who's not in the in the engineering space this round is not very relevant to you. Okay, so let's wait for the first.

Three minutes for questions to come in. I will just share this link with you. This is the slider link. If you have any questions, please post it here. And I will answer them to the best of my abilities do not ask questions on the chat. You can ask questions on the chat here but I may not be reading them.

Right I'm reading the slider link. The benefit of slido is that if you have any questions and somebody else also has the same questions they can support it. So it comes up on top. I can take polls over there. I can make it far more interactive through slider. So please go to the link and start using that.

Good day from Nigeria. Hi. Hi good dating YouTube shubham need a discount coupon for course. Okay. I will give you a good discount coupon. Should I give you?

okay, I'll give you a really good one, which Probably should but yeah, okay. I know broadcast this. But I'll share this with you. Yeah, that's this can't open which is going to give you the best discount out there. just because your life these are the benefits by the way, those of you are thinking what discount is this? This is the interview ready website.

You can go to this website called get interview ready and there's a system design course there so you can actually use this coupon code for that. The system design course with higher design low level design fundamentals of system design and then, you know, we have zoom classes also. Once every two weeks approximately. Good from Germany. Hey Raja, good day. And I just want a million dollars such as okay.

that's reasonable good morning gaurav from us in gothami. Thank you. Good morning. So I'm super happy that you're you're tuned in from all around the world. Thank you for this any resource for lower design using c++, I'm not sure if there is a resource for system design using C++. There is one website which is quite nice and I'll share it with you.

It's refactoring Guru. I actually found the design patterns being used here quite. nice so for Louisville design, I think if you're looking for prerequisites to understand how some code will be written in an interview refactoring Guru is quite good. I don't know who has written this the author. I think that will be something in the about of the contact us, but he's actually quite good. Or she's quite good.

This is in rupees or dollars. Go to me. So in rupees I can show you what the price is. It is three triple 9 but if you use the discount coupon then yeah. There's like 25% off. for the student 25 discount coupon code you can also if you are purchasing from the US then that is $60, which roughly comes out to be 4,000 rupees main reason that it's likely higher is because an international transfer has a little bit of Delta.

So that's that's basically added on top of the price. But yeah, the the discount coupon will give you the same percentage of So $60 will turn into I think. 25% off that will be I think 45. Okay, refactoring Guru pretty good resource. Every time I learn something new over here. I really like your videos on system design.

And thank you. Keep it going. Thank you LinkedIn user. I can't I can't see you here on stream yard, but thank you for that. Thank you jks for the resource. I am looking into it.

Okay, perfect. Alternation for those of you are wondering factoring gurus actually pretty good resource that I would suggest. Okay, we can start now. I just go to the slider link to see if there's any interesting question. Let me actually share this with you. the screen with you so it's going to be shared.

Okay. What we are going to do is for the first seven minutes. I will take questions. Okay. So the top questions, please feel free to Upward them. After that.

What I'll do is I'll take an example of design and we try to solve it. So most of your questions will be answered that way. okay, so let me also open the admin slide link so that I can you know answer and then Mark them has done. The most quoted question is can I Do Led questions in C++ as I have zero knowledge about Java. Yes. Absolutely.

C++ is an object oriented language you can use C++ for your LED interviews. How are you going to get a resource for C++. I don't know. but if you if you are familiar with C++ and you see the Java. Examples then also, I think you will be able to answer them. Most of the principles in Louisville design are basically language agnostic so You have design patterns, which is language atmosphic you have certain principles and object oriented programming which are true across languages.

So, you know threads. If you if you're creating an object in many different ways, then maybe you have a factory. If you have a complex object creation. Maybe you're going for a builder pattern. if you have An object which or if you have something that has to be seen by a lot of objects and then picked up by the right objects, maybe the visitor pattern will help you here publish a subscribers on the way. so that's how you go about solving these kinds of problems.

So that's that's one. Do you ever write code in production in a similar manner in which you write code in a LED interview? Ah LED interviews of interview, right? So you have like 45 minutes or one and a half hours in production. You have a lot more time to think through things. You also write test cases, which you don't write an LED interview.

Like you do but you write very basic test cases. And you're basically trying to impress the interviewer instead of writing code, which will work. Okay. Yeah. Okay machine coding is the same as low level design. Actually, they're slightly different machine coding is a lot more real life.

I will say machine coding is more about one engineering problem that you're trying to solve. That's the reason why it's so close to real life because if someone says do the lower design of zomato It's a joke. It's just a toy problem. No, I say it actually doesn't mean anything like your older designers no matter what you mean by that but if you say design a cache or design an event bus or design a load balancer, okay? you you will at least come up with something which makes some sense like a load balancer has certain algorithms like consistent hashing or you might have a round robin algorithm. I have this link over here, which I have used myself for.

lower design, so just go through this link. This is you I'll just show it over here. You can head to get GitHub dot interview.com interview. Ready low level Design This is a public Repository. It has four examples of machine coding. Okay rate limiter service orchestrator.

This is kind of like a load balancer also event bus and cash. Okay, I'll take an example. Let's say I go to service orchestrator. I go to the code. now you see that certain algorithms you this is the main file I think. Then models also like you have a node you have requests you have services.

And then you have algorithms like consistent hashing weight around crop in. So on. So it's a useful level. I would definitely recommend you to go through this if you're looking at machine Cooling. Yeah. Okay, Most Wanted question is is Led about creating schema diagrams of the database on writing.

Oops based class models working code or discussing apis classes and the database in general. I tell you the intent of a lower design around the intent of a low level Design Round is to test you on your coding skills to some extent and also to test you on your software. Design skills. Okay, not on your distributed systems design skills that is high level design where you you know you think about how are different components or different Services going to interact with each other? That is at a higher level. so you are you're basically using multiple services and you're thinking of functional requirements and everything here in a low level design noun you're being tested for is this person hands on with coding?

Does this person think about common engineering criteria like, you know throughput latency? Testability, let's say, you know if the code is written badly and it can't be tested. That's bad. Is the code extensible scale is not something that we are looking too much into a lower design number you're looking at code maintenance and code quality. Okay, so Keeping that in mind. What are the things that you would like to keep in a low level design now database schema?

No. Class models most likely yes, because that helps you design the objects and the classes and the interactions well. So keep that in mind you're looking for a person who can write good code. Similar to how they would do in the real world. So they were designed the classes. They would they would write the code and this code, you know would survive a full request.

You can take it like that that the ideal interview lnd interview will be A place where you write code and it will survive a pull request. It will be accepted basic. Ally, okay How to start with LED from scratch I'm an iOS Dev with five years of experience and I want to transition to backend development. Okay. so You know, you're a iOS debt with five years of experience. in your current job when you write code and you You ask it to be merged in the report if there is.

oversight if there is if there is somebody who's reviewing the code and telling you whether it is of good quality or bad quality. That's a good place to start. Okay, why am I saying that because there are certain engineering principles that you learn? In any language as iOS Dev as a C++ Dev as a python depth, you know naming is one thing like and then you very basic things naming. If you have the same code being written multiply a multiple places. Maybe you want to put it in one function and get it called by multiple people.

So I'm just telling you the basics are also important I get are usually caught in full requests. Low level design if you're looking for, you know a good theoretical knowledge then maybe design patterns is someplace you can start. again refactoring Guru is a good place to To start with for that again point you to that. link here There's a refactoring guru. Yeah. What is this?

Is this going to make your good low level design or is this going to make you a good software engineer? No? But it will give you the theoretical knowledge which is like 20% of what you need to become a good software engineer you need this. Otherwise you can Discover it yourself, but it's much better to just learn the theory when you have a chance. Okay. That's that's how I would suggest you start off from scratch.

And then you see that these patterns are being applied in your current job or being applied in any project that you're working on or in. You know the interview questions which are coming up. So then you start applying them. lularing system design it comes under system architecture design is it comes under the system architecture design? No, no, I won't say so low design is actually completely different from high level design in my opinion. Higher design is about how do you take different components of a system and make them work together your primary focused on the interactions of these systems while low level design is much more focused on the code that you write making sure that the code is maintainable.

I quality readable is basically what I'm saying. And then how are these classes going to talk to each other? How are you going to write code which is easy to understand Okay, that's the basic idea. So they're different. Jalaram sutherr is asking LED is to choose the right technology stack or it's architecture design without thinking of Technologies. It's not about choosing the right technology stack.

And you can write the code in any language that you like. Yeah. Jishnu is asking how do I practice things like load balancing scaling? I'm learning these things theoretically and it will be really helpful if I can practice these Hands-On. Okay, one of the things you can do is you can create your own website. It won't cost you much.

In fact, I think it will cost you 99 rupees if you go to good ID and choose some. like Obviously, you don't want systems design.com right? It's going to be pretty expensive go for some other website a website and then try to started try to see what are the things that you need like you'll be surprised. By the number of things and the quality of things that you learn when you just have a website that you need a DNS. So that's taken care of. Okay, then let's say you go to AWS and you say that please ask that DNS to point over here.

so that that is also interesting. Yeah, I would suggest start with your own website. If you're looking to just start learning about load balancing about scaling you won't learn here, but you learn a lot of the infrastructure principles that are there when it comes to any any website or any startup. that itself will help you scaling is all like unless you're working at a company where there's a lot of data. It's all theoretical and even if I may say so in the In the sought after product based companies many times. The rule is not about scale.

The many times the rule is about just getting things done. Okay. Is it actually possible to write the okay, so somebody else got put it for? And we have oh, I already exceed the time. Okay, I'll just take this last question. For five year experience guy how much system design required for man.

This is not a very good question. Is it actually possible to write the entire code with good class design taking care of all solid principles patterns. Do TC matter and led interviews. Okay. No you it is possible I guess, but I personally can't do it. So maybe I'm projecting but The intent of the interviews to find out whether this person is good enough when it comes to software architecture and when it comes to you know, when this person joins the team they're not going to write code which is horrible.

They're going to write code which is okay. They have the right principles when it they're thinking through the problem. So that's what we are trying to find out. Okay. Yeah, just do I find this is the slider link and I can share it with you here. Please feel free to post your questions here.

Okay. How to know whether interview is expecting LED or sld. Not based your time and their time by assuming things. In fact, you will feel the interview because you assumed. So is it actually possible to write the entire code with good class? Yeah, I've already answered this.

Is there any website or application platform to practice LED problems practice? No. But at interview ready there is it is a website which will teach you especially machine coding arms. If I go to course. Yeah, low design is right here. Okay.

So this is a this is one sample of a lower design problem. You can have a look at that over here. Student 25 is not working our very interesting. Okay, let me just check whether we have disabled to. Shouldn't have no. Let me just check.

So sorry for that. Sending you on a while. Who's Chase? Okay. This will be the last question by the way. Let me try or I'll give you the other coupon, which is working really well.

It's just for you guys. Again. This is true. This should work. So, where am I? Welcome 25.

Okay, so that takes care of this is where three changing convention. What no that makes no sense. I am having issues starting with microservices. Please guide me just go through this free resources that I have here, right? In this you have some parts where we talk about microservices in detail. Moles to microservices how to migrate also but before that we have it in the basics chapter.

One let's versus microservices. So working this. Okay, let's start with the example. I've been keeping guys on hold for a while. Okay. Now the example that we are going to take Is that of Chess engine?

So it's a your designer chess. App. Okay low level design. So what this means is I'm not looking at scale. I'm not looking at how are you going to send the chess object Through the Wire I'm basically looking at Make an app which can play chess. You see the difference between high level design and low level design high level design would be something like this.

You know over here the Highlight design of Chess is already there. requirements of a chess website you would have How do you handle so many connections at scale when it comes such as website? Would you choose consistent hashing? Or would you use sharding then? There's like if a box goes down then how are you going to handle that hunting hurt? So many connections are being broken at the same time.

What kind of connection will you use? This this request batching. I think there's some tricks that have been applied here and then there's capacity planning API contracts stuff that you need to do in a high level design. for chess okay, that would be I will Design I'm talking about the low level design. Okay, the lower level design is basically. I need to write an app which can play chess.

very different from what is out there? Okay. Any comments on that any? Any thoughts any doubts? Okay, if you have none then let's just jump to the code, right? This is a bad idea.

Jumping to the code. Just like that is a really bad idea. So don't do that. whenever there's a low level design problem, right I often see this happening people open their code editor and they start Coding or they start writing down the requirements like this that okay fine. First requirement is I'm going to have a pond and then, you know, the pieces should be able to move don't do that. Let's not dump in that.

I would suggest you start thinking and for thinking drawing is a good. Okay, so let's go through this what happens? What are the pieces that are there in chess? You have a pawn. You have a queen. You have a king.

You have a knight. What else do you have? You have a rook? You have a bishop. I think that's it. Okay, so these are the objects that we have.

What are the behaviors that these objects have? Upon can move forward. It can also capture. diagonally forward it cannot move backwards. Okay, so so there's something like move for a pawn. And has certain behaviors when it comes to moving.

So it probably moves to a destination square and the validation is which Square am I at can I move to the square? Okay, so the other thing that it can use it can capture. What else? There's something special about upon one is a it can make a double move. So this happens only once upon can make a double move on the first Square on its starting Square. Okay, double move does not mean it moves twice.

It just moves ahead by two squares. Okay, what else now you some of you who have never played chess might go. In fact, let me take a poll for that. How many of you have played chess? How many of you know the rules such as or are confident about the rules of chess? Okay.

Yes, I know. Okay, I just launched this. again guys, if you don't have the slider link and You know, here's the slider link. I would strongly suggest that you participate because it's going to help you. Just eight people are voted till now what's going on? Okay, 18 people are voted.

A hundred and twenty of us watching on just YouTube. So please go to the slider link and let me know because otherwise depending on your response. I'll be I'll be teaching based on that. Okay, 80% of us out of the 40 who are voted. Know about the rules such as so I'll assume you all know the rules of chess. okay, I mean, I'll assume that most of you know, the rules of Chess if you don't nothing to worry about this is not to test your Chest knowledge this problem is to test your software architecture knowledge, right?

So just here at what I have to say. And if you if you miss on something just wait for a minute probably get here in the next minute. So upon can move upon can capture upon can double move it can also do something called in person. on pole French I can't speak French. So my accent is also fake French accent is also horrible opossum. You also have something very special called promotion.

So upon if it reaches the last Square the last rank of the chess board the opponent's rank, then it gets promoted to a bishop or a night or a look or a queen depending on what the player wants it to be promoted. Okay. This is good. Which is what it can do. similarly can a bishop move? Yes, it can it moves diagonally.

Upon can also move so we are starting to see common behaviors. Important to note common behaviors not exactly same behaviors. Like you can move. but the bishop moves in a different way the pawn moves in a different way like a dog barks in a different way. and a different kind of dog will bark in a very different way. okay, so making sound is something that I do along with chimpanzees, but hopefully I sound different.

That's the idea. We do the same thing or rather we We do the same action, but in a very different way and the result is also very different. Okay, so can a bishop capture? Yes it can. Can I do a double move? No, it can't.

Can it do opposite no. Can it do a promotion? No? So there are certain behaviors which are specific to the pawn. And certain behaviors which are common with all of these pieces. In fact the night can also move.

and capture but it doesn't do a double move. It doesn't do 1% It doesn't do promotion. Okay, pretty important to look at this way. The root can also do the same two thing. is so there are certain common behaviors. And there are certain special behaviors.

a rook Is interesting we'll get to that in a minute Queen can also do the same thing. Queen can move and capture. There's nothing else that she can do. She can just move or capture a piece which is to some extent just a function of moving you can move into an enemy opponent square and the enemy opponent is removed. Okay. Finally the king.

A king can move a king can capture what else can it do? A king can also Castle. Okay. And that's it. That's pretty much it. Yeah, the king can castle looking can't do anything else.

Yeah. I missed one thing that all of these pieces can do and that is called check. They can check the king. but if you do that You can make the argument that it's just a part of move. so on can move a cap maybe that move is a capture. I'm just getting rid of this and maybe that move results in a check to the opponent scheme.

Okay. Pretty simple standard stuff that's happening till now. This is the special move. This is the special. This is a special move. And this is a these two are also special moves.

It doesn't make sense still now. Do I have your motor confidence? Please answer on the slider link if there are any doubts. then you can just put it on the Q&amp;A and if you see a doubt, which you think Is is something that you also have please support it? Okay, 12 people hundred percent make total sense. Perfect.

Yeah, okay. Someone is saying that no, it's not making sense. You can post your question in the Q&amp;A, please. Yeah, please post your questions in the Q&amp;A which part didn't make sense. What do you have a doubt on? Okay.

Okay, so Now what do we do then? What we have done is we have taken one Behavior, which is move common to all pieces. And extracted that and we have taken some special behaviors and extracted that. Even now though the move Behavior will be different. In Pawn will be different in Bishop will be different and look will be different in night. We'll be different in Queen will be different in King.

That's a problem. because like we said a move can result in capture a move should not result in check to the to your own key. Okay, it can check. any meeting right and there's also something like is this a valid move? So for different pieces you have different types of validatives. Okay.

Great, so also taking one step back. You can move to a particular Square sure. You can do a double. These are all setting these are all doing actions. there's another kind of method that you want to expose in these pieces and that would be get all. possible moves why is this important?

Because it's going to tell you the set of valid moves that you can make from this piece. Like I said, you should be able to play chess. with this app So you're making an app which can play chess for that. You need to be able to know what moves our valid. And the logic for that can be put in valid move. And get all possible moves will give you the set of moves that you can click.

It's going to give you a list of moves. Okay. So we are seeing that in one move. There's quite a few things which are common. And check enemy King. I like this neatly because when you write things neatly.

The other person understands better. So remember that in an interview? You're not trying to explain it to yourself. You're actually trying to explain it. to you're trying to explain it to the interviewer. So let's write it.

Neatly. Okay, what are the things which are common capture is common. You can capture things. That's a common thing. You can you should not result. This should not result in a check for your own king and you can check that making these are three things which can which are allowed.

Okay. valid move changes for every single piece This also makes sense. Okay, so when you're moving away if you're moving away and it's going to result in a check that won't be allowed. That won't be a validity. If you are going to capture another piece, then that peaceful way that piece will be removed. Okay.

And you can check the enemy King also, so if your move results in a check for the enemy King, that should be noted. Okay, whether it is a valid move or not. It depends on the kind of piece that you're using. Alright, some of you might be thinking I'm going slow. But once we start writing the code you get scared. Okay.

So the way I would suggest you to go ahead in the lower design interviews. You have some things noted down. Keep them. On the side. Just keep them in your line of sight so that you can refer to them when you want. Okay, especially when you're writing code, this is helpful.

So what's the first thing that we need to do? We need to Define classes for the different types of objects. That's Is public class chess you have a class for Pawn? notice that I don't force fully, you know do inheritance that there is a piece the piece has a behavior move. The piece has a behavior XYZ. I'm seeing if it naturally comes up.

If it doesn't come up, there's no problem. Okay, so Class Pawn class? King a queen In a real interview, this will be much easier for you because you know, you'll be having it in a different screen. Stuff silos are put it in the different screen and I'll just refer to it. So that life is easy for me and I save your time. king queen night We have a bishop.

We have a look. I think that's it. Three types of pieces here and the pawn the king and the queen, okay. Great. What did we say? We said that you know, all of these pieces have something in common, which is move and get all possible moves.

So Inheritance. No That's not jump there. Let's actually Define the things which are uncommon so a king can Castle. Why might not dumping I may not jumping to you know inheritance kind of. Approach the problem with inheritance or composition is that once you make a commitment? You can be wrong.

And once you are wrong, you have to backtrack a bit. So it's best to do this on the Whiteboard think it through on the Whiteboard before you jump into code. So that's what we will do. Okay, certain things cannot be avoided though. So the king can Castle the logic for this is complex and therefore. Highly unlikely to be asked in a low level design interview.

Okay, they are not looking like I said at your production deployability skills. They are looking at your problem solving skills, and they're looking at how good Are you at breaking down software problems into? real software Okay, so fine. You can Castle the the pawn has certain things that it can do. It can can do a my favorite thing is on the song. And you can you can also do this thing.

up a double move. Yeah promotion. Now some of you might be thinking why don't I keep a Boolean that whether it has moved or something. So that the double move can be avoided if the pawn is already moved. Don't need to keep that looking at the current position of the pawn. You can make that decision.

It's in the starting Square. It's obviously not move. It can move back. Right? So I'm doing a move for upon is kind of impossible in the game. You can't come back to the same square as upon.

So, okay. These are two things which are standing out. Now, let's talk about moving. so Two approaches. One of them is to use a piece. And then make everything extend this piece or I say Pawn has a piece inside it.

Okay, so inheritance versus composition. Let's try to see what fits better. through the board Now look at this. you have You have a couple of methods which internally have certain behaviors. which have to be extended or which which have to Which have to be present in all the pieces. right of Chess so When you're talking about inheritance.

What we'll be talking about is Pawn is a piece. Rook is a piece. And if a peace can move a rook can also move if a piece can move a king can also move that's one way to think of things. The other one which is composition and I'll just write this down. So it's easier to remember. inheritance is basically telling you Rook is a peace Okay.

So all the behaviors of a piece. Are extended by a rook and upon is also. a piece Composition is slightly different. It says upon. Has a piece or has? Has something which gives it the characteristics which allows it to move?

okay, which allows it to capture which allows it to check an enemy King, so Has a relation. slightly different and animal has teeth. Okay. An animal is a biter. different Why is this? How does this matter like why does this matter at all?

Because the way you think is the way in which you speak and the way you speak. To the computer is the way in which you write code. Okay, so if you speak in a particular way to a computer and tomorrow. The reality changes and you have to speak in a particular way to change your code to match that reality. Then it's important that you use precise language and you use the right form the right model of thinking. Okay.

It does seem like we are splitting here. but moving forward it helps a lot and the more you practice with these kind of software engineering principles. the faster you'll be you know at solving these kind of problems and also the better you'll be at interviews and also as a software engineer. okay, so in my personal opinion I think a rook is a piece. Okay much more than a rook has a capability to move. Okay, a rook has legs like yeah, you can think of it that way also sure auk has a sword by which it goes and stabs other people kills people.

Okay, I'm not thinking like that a piece. Can capture a piece can check the enemy King a piece can move in a way such that it results in a check for their making so it can't actually so it has a bunch of valid moves. It takes care of that and it can move to one place. So that's how I'm thinking. So now that I've taught this through on this whiteboard that things are easier to see I can jump to the code again. if you're seeing what I'm doing, I'm I'm not staying with the code and Writing code and thinking at the same time.

I'm thinking and then I'm writing code. So even now I started at 720. It's just been 25 minutes and we're already written down the classes at a high level. And we have decided on inheritance. So last piece Okay. Would this be an interface would this be an abstract class?

Because it has multiple abstract methods. I'll just interface and I'll say it can. move right you can also. Get all possible. So that's now we are seeing certain behaviors are common inside a move also. if you capture then you do a certain kind of thing if you If you check the king then there's a certain.

Alarm that has to be fired. So maybe I'll make it a abstract class. So I'll take some of the some of the behaviors and make them common. Make this an abstract method. Okay, some of us in the comments are saying peace has a pawn. Peace does not have a pawn.

like my skeleton does not have me I have my skeleton so I would put it like I can use my skill. I can use it for having a structure for moving around for walking about it. Yeah. Okay. quite move I can I can capture pieces right? So let's say that is a position from where I'm making a move so position start.

And I'm going to opposition so position. It was a class called position. I'm going to be. I'm going to be moving from a position to a position. So, okay. if is valid Okay.

I'm just checking in the movies valued. if This is a valid move. So I'm going to be passing. Every piece should have a type. I think what type of piece are you? That's actually crazy.

No, then there's no point of inheritance. So is valid should say what type of Peace am I? and then if I'm upon then then I'm allowed to move only one square forward and if required I can move two squares forward also if I'm in the starting position, so Is valid start? from our end if this is true Then I am allowed to make them so. instead of saying start I should have a current position also, so position current position so from the start position to destination you're also seeing that I'm able to type really fast. Not because I am very good typing skills.

It's basically this idea I'm using. So in an interview if you get the opportunity to use an IT do use it it helps. Okay is valid current position? Yeah, if this is valid then do make the move so I'll change my current position. through the destination What have I done have just abstracted this valid position is valid method. Okay.

And then I make the move. Yeah, that's that's pretty much it if the enemy King is in check. That's why I need to see. In fact is valid is also something which is quite interesting. because there are certain things which make a move totally invalid if current King in check and then return false else return Again, I took a common Behavior, which is if your current thing is, in fact, then it's you're not allowed to move. from your start position to this end position.

Okay, so it's current king in check. This has to be a this can be a proper method, right? What we need to pass in here. It's connecting in check is basically if I move to the end position and I go out to the start position. Do I get a check? okay, so what I can do is I can say You know.

There is a there's a concept of a board. And this is a temporary board. This is the chess board. Okay, in fact yeah now in this temporary board I want to Make them. Right, so you make the move and good the end position. Once this is done processing and say if the current thing is in check.

What I did is instead of checking whether the queen will be in check. I made the move and now I'm seeing if the king is in check if the king is in check then this is not a valid move. Please go back. So it's a temporary board that I made and for that I need a class. board okay, and then you can make move in a board, so You can make a move in the sense. You can take a piece.

And you can move it to our destination. So Over here. I just need to say yeah. Is valid move is? Is what we need. I'm simplifying more and more.

I'm actually taking away the the parts which are common and I'm just You know abstracting out the parts which are uncommon. So it's valid is different for everybody else. Okay. if this resulted in a check for the current King, I would not allow it again coming back to the board all possible moves No, this is not It capture. Okay, is it a capture? That's another thing.

So just go there. if the destination Add something already there. So if maybe board so how to actually find the current board there needs to be some sort of a pointer I'm keeping a pointed to the current board in the piece itself From a piece I can tell that it belongs to this board. Give me the board. It will be a one reference thing. So if current board Dot in this destination position So it's going to give me a piece if this is not null.

To tell me a piece. And it returns null usually if there is a piece then it's going to return me something over there. So maybe I can have a map. of position two piece pieces And now all it needs to do is it just need to say this is not get. Yeah. also make move is then going to take pieces.

Remove it from its current position. So and add it to the next position so What pieces? put a piece destination I'm going to put in this piece over here. Most of you might have dropped off by now because you know, this is intense coding going on here. But those of you are who are still there and who are like interested in the old design interviews. This is what's happening.

what's happening is we are taking a high level diagram of what we will be working on we then decided on What parts of these classes can be you know, put together can be made common what parts are exceptional even in the common parts? What are the things which are which can be defined in a common way like capturing this checks those kind of things then we decided on inheritance versus composition. And finally, we are actually writing the code. So a lot of the code is coming out smoothly because we are, you know taking a principle-based approach. So okay pieces this this is good you're able to make moves now in the board. We now can go back and see whether the destination is not null and also, you know and this thing and be called.

Destination. Peace In fact, you can't capture your own peace. So maybe is valid should have that so this thing over here. Is valid is also going to be seeing? if your end position is going to capture your own piece, so the destination piece exists And the destination piece dot get color. It's the same as your color.

And please it's false. You can't capture on this. That's what I'm doing with you. Okay, so get color is. a property increase this is going to be let's say you can make a email out of it actually. You can set color also.

I think Brothers going to be final so let's not go there class. Hello. This is white. A black I'm not going for. You know. there wouldn't chess pieces which are which are dark blue or rather dark brown and light brown so White a Black Ops.

So this is this is what we have. I think I'll also say equals here. Okay. Now King is in check. The thing is if the king is in check then just return false. How do I check if the king is in check?

Right now it is return false. This is going to be a complex piece of logic. So it's best to clarify with your interviewer and Almost sure that this will not be something that will ask you to code but if they do then you're basically looking at whether the king can be captured by this piece. or can be captured by a piece that You know, you you moved out of the way somebody else can capture your thing. That's what you're looking at. current king in check I can change this.

I can say king in check and I can mention which color. of the king am I talking about so in that comma color this will help me because I might check a thing also over here thing in check. the current Finally, if you're checking the other king then you need to update that also. It's going to be very similar to this. You basically need to tell the other opponent that you are in check and therefore you can make only a set of news. is valid also needs to check whether your king is in check already actually because If your king is in check.

Then you can only block the check. That's all that's all you can do with this piece or or capture the piece which is checking. Okay. All right. so At a high level. This is what we have.

I just zoom out to give you a good idea of what we have done here. But we have done is let me just see if this is actually even compiling. Destination piece. Okay. I was actually coding while I just lost Focus here. So If the destination piece is not null and the destination piece not get color.

is not equal to color then this is a capture. What's the like what are some of the lessons that we can pick out of this? At a high level. We have all the classes that we need. to build a chess engine, okay. We also have abstracted out as much as we possibly can the logic that is common to all of these classes which is moving or getting all possibilities.

Even after doing that we have found some common things that we can use. In moving also like just checking if the move is valid. And so on. and so at this point I think It is it is sufficient to explain to the interviewer that for a chest design. This is what I'll be doing. This is how I'll be approaching the problem and I think you'll be fine.

with this okay, this is good enough for an interview if you want to see how how this actually happens like a real chess engine. I'll just show you. my own code I have a I've written a chess engine actually. I'll just share it with you all the this is not relevant to interviews. So you might find it useless. But if you want to know how a real chess engine works with test cases and everything and it actually works.

Okay, it actually pays yes, and it will most likely meet you so it beats me I think so. It has a good chance do we do? Okay. This is how a real chess engine would be like. It takes care of every single possible move and the way I did. This is by testing it.

But coming back to the real world where you know, this is more of an interview problem. What you want to do? In a low-level design interviews you want to note down? What are the classes of components that you'll have in this system Then you want to know what are the behaviors of those classes? Right. It's not always going to be that you'll see a lot of common behaviors.

You just have to note the behaviors of these classes. Then you want to find a particular strategy a particular way in which you want to, you know, write the code. So in this case, the major question was why are you are you going to use inheritance or are you going to use composition but that's not always the case like like in low level design or split wise the major question is how are you going to implement the algorithm of split wise in an efficient manner Okay, so this is this is chess. Again, going back to lower design. Yeah. So how do you simplify the balancing algorithm?

Okay, so it was more of our algorithm based up question here. and that the one that we saw chess that is more of a software based question Okay here also you need to show your software skills, but then you need to show it even more you're breaking components. awesome capital and on Ada. Yes. I'm very sorry with names. I'm sorry for that.

You're one of my Inspirations about system design. Good luck, and thanks for sharing your knowledge. Thank you. have done Superb it's great to. Talk to you. If King is in check, there is a possibility for the piece to move if it prevents the check.

It's a nice profile picture. By the way. If King is in check, this is a possibility for the piece to move. If it prevents the check. Yes. Yes, absolutely.

So if your king is in check, I'm not stopping that if you see the code. I'm actually not stopping that I'm seeing that if you move and your king is in check, that's an illegal. Okay in the board. Over here. What I'm doing is I'm saying that okay, you want to move to this end position? Let's take the current board.

Let's make the move first and then see if you're in check. If you're in check if your current King is in check. Then this is not illegal. Okay. Yeah, this is This is what we have. This is great.

Let me again go back to the audience Q&amp;A. I'll take a couple of questions before we end this live stream. What do you use for sketching designing? This is mouse not possible like yeah, of course, it's not possible with the mouse. I use a Microsoft whiteboard for drawing. I think I just showed you my background, which is also very nice.

I use Microsoft whiteboard. And I use this stylus over here. So the hardware I have is back home. and the stylus draws really well and the software I have is Microsoft whiteboard. Okay, if you have any questions guys, this is your chance to a good chance to post questions. also if you're looking for An interesting discount, I think welcome 25 is what we have going on at interview ready.

to learn system design since most of YouTube's LED explanations in Java Plus spring would any good source? to start learning Java Plus spring boot I don't know. Actually, there must be some Channel which handles this. Yeah. But even if you go C++ or you know python I think most of these things can be guessed like it's language agnostic right? I didn't use any data structure which is specific to Java except maybe a hash map but a hash map is then so many languages.

Okay machine coding rounds expect good object oriented design as well how to learn I have spoken about this refactoring. Guru is one of the websites that I would suggest before it I will share the link in the description again. So let me just see that works. Every factoring is working. Perfect machine coding rounds is good. Can you refer any books to learn lower level design?

I don't know of any books to learn design. I mean I can tell you for design patterns but low level design not yet. No. Always have been a function program any tips for lld. I think everyone expects object oriented programming principles. You can educate the interviewer also, you can tell them that you know in functional programming.

This is what we do. We are I'm cutting the function you it's going to be interesting because the interview usually is very open to new technical approaches to the same problem and it's just a different conceptual way of thinking it's not like the interviewer cannot understand. The more you explain the better it will be. What is generally expected to be asked in our sd2 interview for mobile development? for hld rounds detailed answer just go to interview ready. You have a high level design around then.

Yeah interview ready handles that super. Well, you have a machine coding design around super well again interview ready if you are fundamentals are not strong we have five detailed chapters on interview ready. And then we have a huge section also of all the YouTube videos put their ad free and with quiz and with somebody's PDF downloadable summaries. It's a no-brainer go for interview. If you're talking about mobile engineering only right you are going to design an Android app don't go for interview ready. If you're talking about high level design low level design or fundamentals.

I have built the course for that. So that is the perfect place to be. What is your you on golang and energy instead of Java or other groups language golang is all fine. There are quite a few Concepts in golang also that you can bring in. Sure. What about not very good at like in golang you have the concept of?

I think you have. Channels. Yeah, that's pretty cool. Channels is something which is pretty big that you can explain to the interview. Again, it's quite useful if you understand a language deeply Okay, what if I'm not very good at chess myself and I drop only if you are not very good at chess that is totally fine. You can ask the interviewer that hey, you know, there's certain rules that I don't understand or if I if you don't understand just about just change the question.

Because some of this is specific to chess. If you're drawing poorly, there is nobody to blame except ourselves, right because it's like my handwriting is bad or I speak too fast, or I don't. I say anything I want like the problem is you're explaining something to the person in front, which is also true in team discussions. So it's important that you give them the time that they deserve and the the respect that it is like I'm doing right now. I'm giving you my time. I can rush through and say yeah, I always is easy don't do that right in an interviewer also deserves your respect draw nicely.

Redraw, if required trust me five seconds more is not going to hurt you in the long run. Okay, I just got 200 rupees from years Gupta. Thank you so much for that. This is amazing. If one object is composed of another object. IE board has a list of cells.

Okay, then inside the board glass. If we want to call method of cell class. Can I call it directly or do we need to have an interface in between? So it depends on where you're calling the class from? I'll give you an example. And in fact, let's just show that in code.

Someone else has also commented the same thing shouldn't the board be a bunch of cells. So where is the board? Yeah, here's the board. Right? I have taken it as a map of pieces. instead, let's say I have this an eight cross eight Matrix of cells you can find a cell.

And this is this is the place where you should probably be using a Singleton. Pattern because you don't want to recreate the board multiple times. So I mean, yeah, you're gonna have only one code so that just taking care of. the question is you have a bunch of cells. And let's say you want to call. One of these cells so should we have a public?

function saying access cell Okay, from what I understood of the question. you want to access cell and you probably want to pass in index and I'm I'm just Showing the concept right? So there's a in well and I can say the X a row in call and peace. Yeah, I want to set the piece there. So. Now one of the things I can do is I can say okay.

Here's an public method where set piece is this way. so cells so all equal to it's actually, this is so I can I can let's just assume that you can set a piece for a set. And this is one way to do things. There's a public method where I'm passing in the row and the column and the piece. the other way to do it is to give up public method. get set and here you pass in just the row and the column.

And you return this. You return yourself. the person calling this method and then said the piece themselves. Okay. Which one is better? It depends on what kind of contract do you want to expose and what makes your code easier to understand also but primarily on what kind of contract do you want to expose should a board allow?

The cells inside it to be manipulated by outside parties. In my personal opinion no. Is there any time that you want a cell from a board to go out? And then be manipulated in any way it likes to be no. So anything that happens inside the board inside those cells is the responsibility of the board. So I would have this function publicly exposed which would allow you to set a piece.

But it would go through the board at any point if I need validations, I'll add validations here. I will not allow them to take a cell and do what they want. I'm not allow them to set a piece of a set themselves. So I would suggest method number one. Okay meet up. That's a good question.

Thank you. While Bishop's more and white cells and black memberships on black cells how to handle that in the structure you demonstrated. You just need to see a starting position, right? You're never going to your current position will tell you the color of the cell. So actually that's one thing that we can have in. so we can have black or white So if you're starting position is something and mathematically you see that it is meeting the diagonal of this bishop.

You don't need to worry about color. The color will be taken care of by itself. So in 12 no I have. Have a color. And 10 years experience still before design interviews. I find difficult to pass DS and algo how to improve on that.

You have to practice. Yeah. Best way to do it is to practice. Okay, this is the question which we answered if one object is composed of another like demonstrated over here. Board has a list of cells. If you want to call a method in the cell class, can we call it directly?

I would not suggest that. Or do we need to have an interface in between I would suggest a method in between? Yes. Okay, do we have to know this as a fresher or cpdsa is enough? You don't need to know this actually you do. Yeah, simply put yeah.

As a fresher. Yeah Noble design is a thing. You should. Can you kindly explain castle and Ambassador? These are chess rules. You don't really need to know about it.

But yeah, if you want to you can read up about it. Why is both not a matrix? I just changed it now. But what I was trying to do is I was not trying to look too deep into the state and the behaviors of things which didn't matter much I was looking at. At a high level breaking down the classes and components if you go deep into it. Yes, absolutely unique to do that.

In fact, like I said, GitHub Is the actual chess engine so you whatever you see here will be very accurate. Let's say pieces, right or game game as a board. So you see a board is much more complicated than you would think initially. I have also used optimizations like this over zobrist hash. Yeah, whatever. There's player pieces the pieces this moves there's guards.

Which pieces guarding which piece? Okay, all of this is required. If you really want to make it efficient. I want a real test engine, but it's not practical if you are looking at a interview based. You know solution to the question. Yeah, okay.

This is this pretty good. Okay. Is any boiler played skeleton to start any LD like creating I'm working on that. Is there any work on Integrity to publish lectures regarding design patterns 12 to 13. We are working on lular design, you know questions. So stay tuned.

That's amazing that you ask that question and help me promote it you haven't talked about board. Yeah, maybe earlier we hadn't. Yeah, this is 40 minutes ago. Lesson chess is stuff. Please take live classes daily. No, that's not possible.

But if you want regular Zoom classes like Twice a month we have that identity you can sign up. Difference between your YouTube system design and a paid one. What benefit does it? So the YouTube system design videos are excellent. Okay, in terms of content quality, you'll not see any difference or much difference. Little difference will be there.

Yeah, obviously it's paid so I have you know, the editing effort and all that is even higher than usual but In terms of quality. There's not that big a difference. What is the major differences you have supplementary things also going with it? You have quiz you have. Two times in a month Zoom classes, which is life so you can ask your doubt so there. and this goes in a little more depth.

Like the course contents they're in a little more depth because you can afford to go in a little more depth. It's a You are not bound by the YouTube algorithm. I don't need to teach you or explain to you every time what a Gateway is over here. I'm expecting you're going in sequence. And you're basically come here to study. You don't have an ad over here on the right.

Or you don't have a random video there to catch our attention. So this is the place where you study so if you have like Three months or it won't take you that long to study this basically two weeks. You should be able to finish this easily. Okay, but yeah, if you have two weeks for your interview for your system design interview. This is the place you want to come and study. On YouTube also, it's it's good.

But if you can afford to save some time of yourself, why not? That's the difference. I'm going to take this clip and put it out there and put it in the ad like this is the difference between YouTube videos and it really We need to walk through the interviewer before the design pattern that. You don't need to. It's a technical term the design pattern so they should know about it if they don't then. You can explain it.

They might also pretend to be done or they might generally not know. So yeah, then you can explain. If you are struck. Identifying different entities in led to be what are the aspects of a candidate is accessed and if you have spoken about this initially so you can head back to the video. I'll timestamp those parts. That will help you can be Implement LED practices in reactant node.js.

If yes, is it similar to Java? Look, I have written. I've seen some code in node.js. Yes. It is possible for this kind of led to be taken care of you in a node.js. Okay, your primarily looking at how are you going to write the code in a way which is easy to read and easy to make it.

Let's move here. Thanks for the live. What would be the thought process of Designing the system efficiently one of the things that you can say is am I creating too many objects when it comes to lower design. Am I creating too many objects? Are these going to be Network calls? What's it like Those are the efficiency.

Considerations we have in the lower level design interview. Thanks for the discount. I have a interview next. Okay, Gotham. Yeah, that's suspicious cuffs coming. Thanks for the discount.

I have an interview next week first time after 15 years facing any interview. Oh my God. Okay, that's interesting. That is only refactoring existing app with new requirement. Okay. Okay.

That's interesting do mention if you if this is relevant that the test cases that you will be writing before you refactor an app because Practically speaking. That's what happens. you first write some test cases you make sure that your new code is going to not break the old expectations. So one tip there and the other tip that you can take is whenever you're refactoring you want to go for the dirtiest piece of code that you have and you don't want to jump into the code you want to actually design it you want to draw it and then do it. Okay, so I'm always wearing the same interview t-shirt blouse. Here also very easy My Blood now.

Okay. Thanks for the discount guys. If you're looking for the discount, I'll just leave you with this. It's welcome 25. Yeah. And we use an ID of our choice during the LED interview.

Yeah, just ask the interview like in companies like Google and all they say no. No, you have to use a dock you have to use Google Talks. Everyone has their own thing. It's all right. It's okay. Okay, I'll take this last question.

I'm getting server when I log in with Gmail to purchase Oh my God. Okay, I'll look into this. Thank you for that Anonymous server error when you're using. When you logging in Gmail? If someone else surprised that that'll be super powerful. I'll just test that.

To purchase right? So I need a Gmail account where I'm not purchased. I guess that good stuff Which tool is better for system design? Okay, let me just see there is any other question which is what is the coupon code? Can you say once more? Yes.

It is welcome 25. If you're joining interview ready today, welcome, you know, the next class is on. Fourth off September 9 pm. That's basically the exclusive class at interview ready. I'll catch you there, and also we often have live streams. So if you are more into YouTube I can catch you here also.

Yeah, so pop if you're looking for a system design interviews interview ready is the place and if you're looking for low-level design interviews, this video is a good introduction. If you're looking for machine coding interviews or more intense lower design interviews interview ready has those videos. I'll see you next time and all the best. Have a great weekend coming up. To you. Bye.

## Google Question: Logger, Part 1

Type: Video · Length: 46 min 15 s

### Lesson notes

A Google interview question: build a logger that prints process logs in start order even though the processes finish at different times. Gaurav compares a TreeMap with a heap or priority queue, codes the start and end methods, and discusses why waiting on earlier processes holds memory.

### Transcript

So let's let's talk about this question. Firstly you need to implement a log class which has three functions inside it one is the start which takes a process ID. So this is an event. Okay, and this method over here is something that's called a listener. So every time there is a start event on a process. This function will be called okay with its start time.

So in fact in our case, the start time will be calculated by us. We are just going to do a system dot current time release. And similarly there's an end time with a process ID. So this process has ended this process has started. These are the two events that we have and what else we have something called a pole function. This pole actually looks at the earliest completed process.

And then prints that out. So that's the reason why this is a log all it does is it just prints things out but this is effectively and aggregator and we'll see why. When you say the earliest completed process, okay, it will actually wait for the process which is the earliest process in this system. So I have three processes process ID 1 2 and 3. And they are starting the start times at 12 8 and 7. Okay.

So this logo is going to be taking the very first process which has started and waiting for it to finish till it finishes the pole method will block. Okay, that's important the pole method needs to block and till the process finishes. It's going to be just you know, returning null possibly not printing anything. That is another thing but when it finishes when the end method on processity 3 is called and it's say let's set to 19. Then the pole method should print. process ID 3 Started at 7 and ended at 19.

Okay. That's what needs to happen. If you call pole again, then the second earliest process like this is the second oldest process, which is process ID 2 Which started at eight and ended at 12 that will be printed out and finally if you call the pole method again, then I'm going to be printing out process ID 1. Started at 12 and ended at 15. Okay. So these are the three functions you have two of them are just listeners event listeners and one of them is an actual function in which you need to output something.

Okay that is wide over here. But because that is the reason why this is a log so you will be printing to the output stream. Is this point clear? Yes. Okay, so if you have any doubts, of course, you can keep posting them in the comments in the live stream chat. and let's think about how do we solve this first?

So in a lower design interview, by the way, this happens to be a question, which was asked in the Google interview, so it's not It's not going to be extremely difficult, but it's not going to be too easy either. When you come up with a solution over here, you'll probably see that there's a lot more you can do with the same question. Okay, that's one of the Specialties of usually Google interview questions that they have Simple Solutions. But you can always make them more complex with a little you know, tweaking around in the question. So firstly we are going to be defining something called a process. So this is the process class.

And what does it have? It has an ID. It has a start and an end time. So I say string ID. And you know, this is not going to change so I'll just set to final. and I also have a start time which is not going to change.

And then I have an end time which is actually going to be sent to me. So this is going to be a long. The both of them are going to be long basically. Alright, and I can initialize these two in the Constructor every time the process is like created when you call a start. Method I'll be registering a process. Okay, so this is a string ID.

And what else do I need? I need the start time. So the start time is going to be in fact I can just Take the start time also as a parameter. final Long start time so there'll be a timer which is going to be giving me this. and the reason I'm actually taking start time as a parameter is because You know later on when we'll be trying to test this function. It will make life easier.

We can do some dependency injection there. Okay, this Dot. ID equal to ID perfect. So we have a process now and what we are going to try to do is we need a some sort of a data structure which is going to be allowing this kind of thing like, you know. Being able to tell you what is the earliest event? And then checking if that event has ended if it has ended then we print it out to the log.

Otherwise. We don't need to accept hold these events in memory. Okay. so Okay, satyendra Kumar has an interesting, you know suggestion that start time can be system dot current time release. But the reason I'm not doing that is because I can actually pass this in and later on through dependency Direction. I can actually set a different kind of time up.

So during tests. I don't need to depend on the system time. I can actually Define my own timer which would be a mock and that will work well and we'll see how that works. But so I've defined the process and now let's see how we can implement this log client. Interestingly most interview places will not allow you to use your own IDE. So, you know all this fast typing that I am doing is not going to be possible there.

But the general idea is the same, of course. So I'll just call this logo. implementation and extends actually implements the log client and over here I can just Override these three methods of start and and pull. Okay. Now let's think about what do we need to actually store processes in our logger? Because till they have ended we need to store them somewhere in memory.

right, so One of the things we can do is to have a mapping between the ID of the process and it's starting in times. Okay, okay. There's actually multiple things we can do firstly. You can use a linked list. Okay, but that's not a great idea because when you use a link list, every time a person says start this event you can add. To the linked list quickly, but every time someone says end an event you'll have to do a linear search on the list for the processes.

So I'll just in fact do the I mean, I'll make the data structure so list of processes This is what? Logger implementation is holding till they are completed right you need to hold this. so processes and in a real interview, you don't need to prove all these things. You can just tell them that hey the list will not work. But in our case, I'm just trying to make it a little more clear. so I'm going to be.

Taking this and setting that as an arraylist. Great. Now when a person says start this process, what I need to do is I need to go to the processes and I say add this process. I'm sorry. I actually need to add a new process. So.

New process and what do I need to pass here the process ID? And the start time so over here, the interesting thing comes in. I need a timer so private. final timer now this is weird like initially. In fact thinking that into the future is not natural in a in a low level design interview or any interview because you are under so much pressure. You can't, you know plan everything out.

Well, so I'll just keep this a system dot current time release. Okay, and okay. So adding a process is simple enough when a process ends. We need to be able to somehow tell that the pole the pole method needs to know that this process is you know done so I just get the process. Ah, yes, and here we see the problem, of course. So when you want to get a process with a particular process ID, you can Loop in the for Loop for all processes, but that is going to be slow that is going to be an order n operation and an interview you are not, you know, not even in real life.

Do you want to do order and operations when you can skip them? so one very natural thing about this is to just go for a map a map of what You have a key of process ID and for that you need a process so you just go for a string. to process mapping Okay. And no longer that a list. So I'll just go for a hash map. And over here, I don't just put the new process.

I actually say that process ID needs to be put in. Okay, so now I can do a simple get process ID. You know. I need to set this end time. so n time Is private so I'll just put a getter method over there. I'm sorry.

I need a sector method so. This is not going to be true for all languages, but most of you program in Java, so it's fine. And over here I have system Dot. current time release If your programming golang or python, you don't need to you know, set any guitar setting methods usually. Okay. So you have Pole?

And this is the big method. So what do I need here? Well, you need to find the process. Which has the smallest start time which has started the earliest, right? so that is Difficult to do in a map, especially when I have initialized it as a hash map because the hashmap has no ordering. now some of you might be thinking that I need a map with ordering like assorted map in C++ and in Java you have a treemap.

so when you have a dream app, what's going to end up happening is you are going to have login operations for everything, which is you want to make an update or search basically is login and also deletion updation. All those things are login. So we can think of a dream map. Okay, and let's say you go ahead with this. This thing over here. And you tell the tree map that okay processes dot remove.

this process ID if it has n time so If this process ID. Has an end time then you need to remove it. Now, which process ID the very smallest one like the first one so it has a you know method for that first entry. Dot get value dot get n time. If this is not equal to minus 1, so this is basically a null value. then you print this statement so they have given you the the format.

Process ID and so on so forth. So I'll just do that. This is the value that you have. So interestingly, you know. How is this map going to be implemented like all of us know that order one? is the time required for a hashmap to store stuff and remove stuff and delete stuff and all that but This map is actually giving you some sort of ordering also and it's a map.

So a lot of people assume that it's going to be order one. That's not the case. It gives you login time updates deletions searches everything. So basically there's a AVL tree or no. I'm the red black tree inside this tree map. Yeah.

So the red black tree has login operations speed and when you say if the end time is minus 1 is not equal to minus 1 then you just go ahead and print so process Dot Let's set some other get a methods. Get ID. Plus plus dot get start time. And finally, the end time also will be printed out. Okay. Also interestingly you might be seeing that, you know, this is taking a lot of time and stuff in an interview.

You can tell it even more. It's it's even more clear that every line that you're writing seems to be taking too much time. So if you can like in Google it's not possible because they give your Google talk in which to write. So formatting is hard. But if you have any other ID that has been told to you maybe hackerang's ideas or something have a look whether you can format the lines easily because although the interview will say that they don't care about formatting. They do human beings.

They are going to like clean code a lot more and clean as a lot to do with presentation instead of just, you know, structuring of the code also, So processes dot remove you're going to be removing this process. Okay, and this seems easy Once you have removed the process you're done, right? Okay, I'll just be taking doubts from you guys for the next two minutes this solution is wrong, by the way. It's not going to work for various reasons, but let's see. What kind of doubts you guys have? Oh, yeah, before the live chat started yuvraj was someone who asked whether this is useful for freshers?

Now that I'm coding it. I know it's not it's it's really, you know, it is actually this bit is algorithmic. So it is very useful for freshers. But later on what will happen is that we look into the Design of this code very deeply in that case. It won't be useful till now and also for the next 10 15 minutes. This is going to be very useful for your very first job interview also because I am not done any rocket science.

I've just used a tree map for God sake Okay. Okay, so when coach says I think we can use a heap here. Yes, that is true. You can but that also won't work alone and we'll see why. Okay, if you use a heap first of all, just a heap. Let's say the problem is how do you get this process side quickly that's going to be an order and operation in the Heap.

You can't search any Heap efficiently. You can only pull out the maximum. Okay, so your pole function will be really fast order one. Your start function will be fast again Auto login because a heap actually keep it files itself required and you end operation is going to be very slow. So that's the game we have here. We have three operations and you want all of them to be less than login.

Right, and so you can't use a heap you can't use. A lot of the data success. We've been thinking about we can't use a simple hashmap. We have seen that we can't use it simple list. So a hash map. The problem is the pole becomes slow a list.

The problem is the end method becomes slow Heap has the same problem. What can we do? Okay be all right sorted map. Yeah, that's that's what we're using. What we need to do in our case is to use a complicated data structure in the sense that you can't have a single data structure, which is going to do your job. Okay, so we are seeing that there's good stuff here.

In a map when you say start and end its order one for a map. But the poll becomes really slow ordering. So can we take some of the good stuff from a map and some of the good stuff from a dream app? Merge them together. And reduce the overall time complexity of all three functions. Yeah, sort of Kumar has a really good Insight.

Of course this Stream app is not sorted on anything. So the process method like the process class is not comparable. You can't compare two processes till you have defined. How is the tree map going to store these processes, right? Oh, in fact, it has a string. So it's going to be sorted on this process IDs not on the start times.

And that is not what we want. So first entry is going to give you the smallest process ID. Which is not necessarily the you know, the oldest process as we saw here three is the oldest one is the youngest. Okay, that is a good catch and we'll get to that also, but firstly what we need to do is we can't actually use any of these data structures alone. A tree map has the issue that you can't sort on. On start times and get good.

end and start Functions right if I saw this if I sort this function, in fact, I'll do that in front of you. So it makes sense. So this is saying comparator of string so I don't want that because I wanted sorted on the start times. So instead I need to actually store the long the process IDs instead of the process IDs. I need to store the start times. I don't know why I sound so confused.

But in the real interview, actually I didn't make any mistakes and I cleared it. Yeah, okay. Okay. Yeah, of course. The process ID is not what I want here. So I I can't have that.

I need another data structure. Is going to be a map. And this is going to be processes. while I'll change this to Q because that is what it is I can pull from this queue and I can add to this queue right based on the start times. So my dream map is no longer the set of process I have it is a q in which one by one processes will be removed. How is this going to be initialized?

Well, I'm going to be saying that. dig the start times of both these processes, so that is start time one. and start time to and all I need to do is say that you need to compare the two start times and then you're good. Okay. What is the problem here? Oh, of course.

I haven't actually said this at the queue. Yeah. So now the treemap is correctly, you know initialized I need the processes to be also initialized. So this dot processes is new hashmap. Perfection Agarwal actually has the right answer. He's saying use a heap plus map in my case.

I'm using a tree map plus map because that logically, you know, that's the conclusion we come to but a heat plus map is enough. Because like you can see it's a queue, right? So priority queue in Java is implemented using a heap you can also use that over here and just using this because it's a little more convenient. So the start method says that you have processes you push this ID and then you say that you know, this is what you have here. So this doesn't change. What is the problem here you need the required type?

as long okay. I messed it up. Yeah, this is actually. The processes yes. What is what is wrong in this? Oh, this is string.

Thank God. Okay. So the start now needs to also. notify the queue that there is a New entry so I'll just add that. System dot current time release these two have to be the same. So I'll say the time now is this in both these cases and the queue I need to actually insert this.

now comma this process over here. Okay. Now again going to the end method all you need to do is you need to actually tell the queue that there's a end time in this process now. so interestingly if you don't do this, if you don't tell the queue that there's a new end time then the old start time remains. Right, but the queue has not been updated. So every time you try to pull from the queue.

You're going to be seeing that the queue does not have an end time the the task in the queue the process in the queue does not have an end time. Okay, now what can we do about this? I'll float the question in the chat. guys when I'm starting a process when I'm getting the event of a start, I'm actually publishing that to the To the map and to the queue, but when the process is ending I am publishing that to the map. Do I need to publish that to the queue? food for thought we'll just wait for a minute till we get an answer.

The question is simple. Do I need this line of code? Does the Q need to know that there has been update there has been an update in the process? Okay. Two answers till now. Yes, and no.

Okay. Most people are oh wow. There's a 50% of yes and no going on. Okay. So let's try not to publish it and see what happens. Okay.

Pole says that I need to go to the queue. Take the very first entry. This is sorted on the smallest timestamp. I get the value if the end time is set then I need to print this and remove it from the queue. Alright, so I need to actually remove it from here. From processes.

I also remove it from the queue. so Q Dot Pole first entry will do the job. Okay. and if it is If it is not set, then all I need to do is I just need to hold these processes in memory. Okay, and let's try to see how this works. so in fact, what I'll do is I'll just create a new class.

What I can destitute. Because you're unlikely to get a testing class. Okay, this is weird. I forgot to add class. Wow. Look at that.

Oh much better. Is declared already? Okay, that's okay. Sometimes I really think whether I know how to code in Java or not. And what we need is we need a logo so log client. implementation Is over here?

and we have logo Okay. So now what I'll be doing is I'll be sending some. You know, what did they say? Processes in this yeah, they're calling it processes in some cases. They're called tasks to so that's another interesting thing. But yeah.

I send process ID one then I'll send. Process ID 3 then I send processary to but before that. process ID one has ended and then process ID 2 also ends. And finally process ID. 3 ends Okay. And is this according to the order that we have?

I'll just copy this stuff In fact, it's not so three has to start first. But yeah in our case what should happen at the end of it is one. Should be printed out first. Then two should be printed out. Yeah. Yeah two should be no three should be printed on next.

And then two should be printed out. Okay, and what I'm going to do is I'm going to be actually trying to pull the logger. every time okay. so Okay, and finally, I'll just pull the logger again. So this is a very poor way of testing but this is just two also clarify, you know, what goes on and in fact in the pole method. If there is nothing.

Then I will be printing out. else No completed tasks. in q Okay. Now let's run this. What engine has a good? You know, he's made a good observation.

We need them to wait so that will happen soon enough, but this is just to make sure that things are working fine. It's oh God. Okay, there's a null pointer exception in some other class. Okay. That is not what I want. I want the implementation.

Over here. Oh, okay. So while practicing for this like you can tell how original this interview is just to make sure that you know, I don't mess up in this live stream. I have already coded this class out earlier. so by mistake, I actually said that as the implementation Okay, shubham Agarwal has a question. Can we use a mutex in pole method to not waste cogs?

I don't know what cags is and only release that mutex. Once the youngest process is complete. Okay. Well a mutex like what you're going to take the lock on the whole class. If you take a class lock on the whole glass. It's as good as a single thread.

Thing so that is going to be a little bit of a problem, but you can tell your interview that if you want. You know. All guarantees that you can have during concurrency then yeah go for a single threaded or a global lock basically. On the other hand if you want to order it casually we'll see how we can do that. I don't really know 15 minutes are remaining. So this could be like part one of this because the first 15 minutes we lost but yeah, what's the problem here?

Okay, we have a null pointer exception now that is better but process one started and ended at zero. Okay, and we can see that the problem of not actually updating. The queue is clear here. Okay. And then process three started and ended that is good, but then you end up having a null pointer exception. At line number 110 which is over here.

Oh, okay. In fact, it's not even waiting. It's not even waiting for the class to be ready. So I made a mistake here. I haven't actually told them that the end time has to be initialized to minus one. So that's a bug.

let's just run this again. British Gupta is asking me to remove the process which ends first not the one that starts first. Correct me if I'm wrong. Well, you need to actually remove the process which Starts first so effectively what you're doing is multiple processes and the events are being sent to you. You are ordering them. according to the start times and your printing them only when they are completed.

So if a process has started 10 hours ago and another processes started one hour ago. And you know, the one hour ago process has ended it's a short process. You're still not going to print it in your log because you're waiting for the first process the previous process to end. So the or the printing is going to sequentially and is waiting for each process to complete while the other processes are in queue in line. They'll be held in memory. Till the previous ones are printed out and then their turn will come in the poll.

Okay, so over here we are seeing that there is You know, no tasks had ended in the first two poles, which makes sense. Then we ended task one. That is correct then. Two other polls, nothing had ended. you know, there was a the next two poles like okay three. Yeah.

This is line. Number three line number four is nothing and ended. 2 okay, no completed tasks in queue for end of 2 because 3 has not completed three started before two and that's the reason why despite, you know. a process being ready To be printed we didn't print it because this was in line. So I'll just actually no complete tasks in queue and also tell you the Q Dot first entry okay, and don't get value dot get ID. So now this is going to tell you.

The first entry in the queue and that will be clear. What if this is null? Oh, yeah, what if this is not so In fact, I can just print out the queue size and that will be good enough. Okay. Now a lot of I mean I had asked this question that in the end event. Do I need to update the queue?

And the reason I didn't do that is because the update is happening on the object. The queue has a reference to that object, which also is I mean the the map also has a reference to the same object. So it is updating it and the queues automatically getting updated. Okay, so we don't need to change that. Okay, and finally like what are the number of tasks in the queue initially? There is one then there is two then this task ended so you kicked it out of the queue.

over here So when this process ended you should have kicked it out the Q and the number of tasks should have been one that is viewed. Okay, and after that, of course you added a task. So I'll just say start here. So the start has happened and you're put into but none of the tasks are ready. Then you ended to the You know the queue did not evict it. It said that no complete tasks in queue.

And then finally when you are done with three, you kick that out and then again you kick this out. And now finally the size should be zero. So, let's see if that happens. Okay, shubham Agarwal again. If we take a lock mutex in pole method the thread calling the pole method Will Not Waste CPU Cycles checking the top of the Heap tree map. It'll be notified when the youngest process is done.

Okay, if you take a lock or a mutex in the pole method. Okay. I'm just going to think about a synchronized thing the thread calling the pole method will not be a CPU Cycles. Yes, that is interesting. But you have to take into consideration that. If there is serious concurrency, someone might be updating this someone might be updating this.

And the pole method is also updating the same data structures. So there is a possibility that concurrency might screw this solution completely and in fact it it will in the current implementation, of course, it's It's not going to be a problem. But later on you see that if concurrencies allowed. That's a real problem. Okay. Another the null pointer exception how very interesting but you're seeing that two has also been evicted from the queue.

okay, we need to actually check if if there are any entries in the queue so if Otherwise, we'll have another Point exception. He was empty. Okay, so this will work. Of course. I'll just make it a little clearer. Okay queue is empty and then through null pointer exception.

Why? Oh, I will do. Oh, I didn't return of course. So this is fine. I mean, we don't need to go through this bit. But okay, so guys.

This is a very like this solution has actually not touched on the key points of this problem. Okay, the key point of this problem, by the way, what happened is once the solution was presented. you need to think about two things in any LD question and hopefully in the next one I'll be able to like do it more, you know in a structured process, but firstly You think about what is the solution to your problem? Okay, in some cases like over here. There's an algorithmic solution. It's not straightforward.

You don't just go ahead and talk about the classes and the objects and you know the state no, you're going to be actually designing a solution which will have. Order login time for all three processes start and and pull so that is going to take you some time you are going to do that on a pen and a paper. Once you're sure of that you go ahead with the code. But even when you're coding you need to be aware that the interviewer is expecting you to talk about concurrency eventually, okay, and they're going to be expecting you to talk about how do we test this class? so in part two, I will be talking about concurrency, which is the most important thing in this lower level design question actually or I would say like it's maybe Maybe 60% has been taken care of Honestly by just solving the algorithmic problem you have, you know done your job, but now what about concurrency? And what about the test cases that you can throw at this problem?

Okay, and if you have like a lower design question. They're probably not going to be asking you both together unless it's a two-hour interview. They're going to be focusing either a on your test cases and your You know your your ability to handle concurrency or be they're going to be testing you on your algorithms. So but whatever be the case you need to be able to at least mention the kind of problems that your solution has. I got the mickly or Engineering wise okay, that is the gist of this. I'll take this as part one because we are just out of time.

But guys, if you have any questions for the next three minutes, I'll be taking questions and let me know, you know, if you have any doubts on this on what we have built currently. Okay, Amrit. M is asking do you really get to code in a LD or is it just writing on the paper the objects and relationships? You do get to code so initially you have either paper or you know, you have a board where you draw and you give a high level understanding of how you'll be solving the problem. But I think LD interviews are one of the toughest interviews out there mainly because it's very objective. If you look at like it brings a lot of objectivity to such a subjective design question where your code is expected to compile and one happy path is expected of you like because you're writing test cases right?

If you are given two hours in your interview in some cases machine coding down. It's like there's two hours. So they expect you to have working code at the end of it you need to design and have a little bit of working code. and of course, it's very similar to a high level design slash algorithm interview where you are solving a problem and you're trying to You know find a solution. And code it but over here your design also has to be good. So this is much more of a mixture of all three than anything else like lower design question for me is a mixture of algorithms engineering and hld so that's the reason why I find this to be the hardest and that's the reason why in my course right now.

It's taking so much time to come up with good solutions to LED problems. Yeah and explaining them. It takes a lot of time. It takes honestly takes a lot of you know, the code itself takes so much time and then you're edit out things and then explain them on on paper, but of course, you know that that has to be done, but hopefully I'll have a Set of videos out which are going to be explaining this so much better. The live session is to just give you a glimpse of what happens in a real interview when you ask to code things live. So yeah, that's the idea.

Zia Khan is asking. Where was this last Google? Yes, that is where it was asked. I mean in the Google interview rather. Okay. Anupam is asking please it read the complexities now of these three methods the start time has a complexity of log n because the Q is you're putting something in the queue.

This is a tree map a tree map has a complexity of login because comparator over here. It's not hashing. It's actually comparison operation. So there's going to be a binding search over here in the map. It's a BST for all purposes. The end method has a time of order one because you're not updating the queue.

You're just updating the reference in the hash map and the pole method has a Time complexity of log n because the Q your affecting the entry from the queue over here. And you're removing from processes that is order one. So this is the total time complexity. login order One login So when coach is asking for the code to be put on GitHub. Yes that is going to happen. Guys if I can if I can be honest like this part of the interview.

Is what a fashion needs to know about this is the bare minimum that is expected of everyone that you are able to solve a small algorithmic problem. after this like in part two It's focused on SD tools sd3s. Okay where you're expected to? have a good concurrency managing. Class. Okay, so we'll get to that next time.

And thank you all for tuning in apologies for the first 15 minutes. We had some technical issues. I'll make sure that it doesn't happen again, or if it does happen then I mean, I'll make sure that you know, we are well set for that. Thank you for Having a look at this code. I'll be posting everything in GitHub. See you then.

Bye.

## Logger, Part 2: Concurrency and Locking

Type: Video · Length: 77 min 0 s

### Lesson notes

Continues the logger by making it thread safe. It covers futures for each task, synchronized methods and locks, why locking the whole object limits parallelism, using a concurrent hashmap and an executor service, and testing with many tasks.

### Transcript

Alright guys, we are live. Hey everyone. This is a Sunday night nine eight pm. And what we are going to do is solve a Google lld question. so this question had its part one explained in the in the first part and I'll be putting a link in the description below for that so that you get some context but I'll just explain the question for people who are watching this the first time. Just a you know, quick checks is everything fine is the audio fine as the video fine.

I think it is. I think it should be so. I just wait for one response, which would tell me that everything is fine. By the way guys if you're watching this. You know not live if you're watching this offline, then you can skip to the 10th minute. Yeah, because I'll be giving a recap of what's going on till now from last week.

So I'll be doing a recap of the question for the first five minutes and you know, we'll be waiting for everyone to come on board and then we can take questions for five minutes and then I'll move ahead with the solution. Okay, that's a lot of yeses. I'm so sorry. Every time I ask you the same question. Everyone goes like yeah, it's working fine. Yeah, okay.

so what we are going to solve today is this question as you can see, there's a log client that we have to implement. This was asked in one of the Google interviews. This was I think a phone screen but it's a low level design question. What we are going to try to do is we are trying to implement three methods one is the start method which gives you process ID and in and end method which gives you the same process ID. So, you know, you have a process with starts and ends and what you need to do is you need to log this. So once the process has ended you log the process that hey this process started at this time and ended at this time.

That's what he want to do. But there is a sort of a pool mechanism over here, which is the pole. So the third method that you see here. is Pole I made it return string. You can make it return white by, you know, printing over there itself. But what this does is it prints that line.

process ID one started at let's say timestamp 7 and ended at times time 19. Okay, that's what you need to do. As you can see start has a timestamp and N does not have a timestamp. You can add a timestamp that's not a real issue though. The core of this problem is that you need to implement this log client in a way that allows you to. Pull messages quickly.

Okay, I do all three operations quickly basically and you'll see why this is a challenge. If you have a look at the video in the description the the start and end can be made efficient. But what ends up happening then is that the pole becomes slightly inefficient if you're using something like a like a hash map start and end is fast, but how do you pull which is the earliest process which is completed. That's what we need to do. So if user hashmap that doesn't work, if you use a simple list, then the pole is fast because the earliest processes at the head the start is fast again, you just add but the end is slow because you need to search when did this process end? So that's a linear scan.

And again, that's that's a slow. process and so we tried various data structures and finally what we did is we kind of got to an augmented data structure or let's say composite data structure where we have In the in the previous video we had decided on a map Plus pre-map. Okay, so this can be a priority queue also, that's fine. But what you're doing is the map is containing the key value pair of process ID to the process so you can update it once the end comes in. So start and end is fast because of the map. And the the pole operation is fast because of this free map remap is nothing, but you can imagine it to be a balanced by me search tree login operations.

Okay. So what this does is it? according to the timestamp as you can see the keys over here according to timestamp sorts the processes and then gives you the earliest process whenever you go for a poll operation. So this happens to be login? And insertion and you know updates which is end. Happens to be order one.

So these two are pretty fast the last method is login. Of course, you can look at the code and you know figure out what's going on. But what we are going to try to do now is we are going to be trying to make this. Concurrency supportive like you can actually have multiple methods. Calling pole start and pole and you also want to test whether this works or not. So we are going to be doing testing but even before that we're going to try to provide concurrency support so that you know, you test the concurrency also later on.

Okay, that is what we're going to do today the first four minutes. I think there's some questions on the chat. I'll just have a look at them. Like I said four minutes later. We start if you want a code. Link then it's in the description.

So you can just go ahead over there and it's the same code that I'll be modifying over here. Okay. Okay, Devin. Sharma is saying this can be done. Why event Loop? and event Loop I'm not sure what you mean by that but the the way that we'll be solving.

This is interesting. There's going to be a polling mechanism and pushing mechanism also. So yeah, you're right actually events. We are going to treat every logline as an event. And there is going to be a loop which is going to be constantly checking whether the event has ended or started but all that will be abstracted out by the language itself. So we're going to be using Futures which is something which is similar to Promises in JavaScript, if you use JavaScript, both of these are objects containers where a guy comes and places something and when it's placed it notifies all subscribers that hey this thing is done.

Okay, so that's the when you notify other people. That's a push mechanism you're pushing the notification when other people come in ask you. Hey, is this container field? That's a pool mechanism. Even Loop is just a q. I'm sorry, I wasn't aware of event Loops possibly because is it a JavaScript thing maybe?

Yeah. Look at me drinking water on the protein shake ridiculous. Three minutes guys. Do you have any questions that? we can get to Manish the party. Yeah.

Well we did discuss in this in the first video, but people would look for context. Okay, Raja. Jaswal has an interesting. Observation JavaScript is single thread. That's the reason why I went Loop is required. Okay.

Yeah JavaScript, I think python also has that issue that creating. Multiple threads is not too easy in Java will be having a look at how it's done. It's actually even easier in golang if you use golang but not many people use that. So if you use channels or if you use a in our particular case channels come out review well, but you can use a weird group you can use, you know, you can always fall back to mutex and stuff but occurrencies really well handled in golang. Unfortunately. You can't just throw around a tree map in golang.

Yeah, so I'm not sure but I don't think there is a sorted map in Google Lang unless you Use a you know Online Library, which is hard to do in an interview. Okay, I think most of it is about the languages that we can use guys one more minute for any question. That you might have before we start. Nikhilish is asking for which position will lldb asked in an interview. Usually senior software Engineers asked LED questions, but if an sd2 is asked an LED question, the expectation is that at least they'll come up with the requirements of the code that they need to write the behaviors of the objects that they're defining and based on this behaviors. You need to contain state.

So there algorithm. Parts will be good, but they're not necessarily that they'll be like, you know. very good at concurrency and you know writing test cases deep thought into that anyway in an interview. It's very hard to figure out test cases edge cases. But yeah, if you have a long time if you have two and a half hours, then they expect you to actually code something which works with some decent coding quality. And so sscs are mostly tested on this but sd2 is also tested if you're a fresher.

It's highly unlikely that you'll be asked anything more than the part one of this video. So if you're a fresher, you don't need to watch this is not compulsory. Okay? Origin is asking when the process be garbage collected. I think so that is dependent on the language Java and golang have their own garbage collectors. Let's head to the question then, okay.

Because it's 9 10 perfect. Okay, so previously what we did is we made a implementation of this logger where we said that you can start you can end and you can pull and all of these methods have good time complexities. However, there's a problem. We mentioned that the pole method should actually block. In case you know, there's nothing to pull in case the queue is empty in case there's no log line that hasn't been consumed you want the pole method to block till a logline comes in? This is where the concept of Futures come in.

Okay, so you might want to return a future. But instead what you can do is you can just hold. the request In your memory, tell your responses ready and then send back the response. So that's what we have to do here. So in pole if the queue is empty earlier is returning null. I can't do this.

I have to actually wait so there has to be some sort of a waiting mechanism here. Okay, similarly if over here no tasks completed in queue. You know if there are no tasks which have been completed over here. I'm just checking the queues empty then I need to wait if the tasks are not completed yet then again. I need to wait here. Okay, and I can get rid of this else condition.

Okay, that is one thing that we'll be trying to do in this. session the other thing is Start and end and pull can be called concurrently. So all three methods can be called by anybody. Right, and they might be running in parallel. So if that happens, what are the possible issues? so firstly you see that this map processes.

Is a hash map? So if multiple people are trying to put over here with the same process ID and get the same process ID. What's going to happen? in the good case the start method completes first put works, you know process ID one is pushed into the hashmap and then end completes in which case process ID one is successfully retrieved and you set the end time samp. And finally over here you remove the process ID. Okay.

but if Things are running concurrently in parallel possibly. what could happen is this method executes first for process ID 1 in that case the get method over here is going to explode. Because there is no process with process ID 1 because the start method has been not executed, right? so that would create a null pointer exception and our end method would fail resulting in the end method never being acknowledged and the start method will create a memory leak because in the start method because this is going to work out fine you would be able to put but in memory that object is going to stay forever. So what can you do about this? two options one is better than an interview one is most likely in real life.

If you get an end notification before I start notification you can actually store it in memory. And wait for the start notification to come when both of them have come into your system. That's the time when you You know, that's the time when you settle this process so when the pole method comes in next for this. Process you can then return that. Okay. however to make things simple We are going to assume.

And is not a ridiculous assumption. We are going to assume that. Start always is called before end. It's important to notice that I'm not saying start will end before the end method, you know, but when the API requests comes to my system. The start API request will reach before the end API request after that. It is my responsibility to make sure that they come in order.

Okay, so there is still something remaining I need to make sure that the start runs before end, but I'm expecting the client to make sure that start reaches me before end. This is the reason why it's asked to ssc's probably because it's a little difficult to you know, separate out the server and client so clearly but yeah, that's the requirement. The other thing with pole is what if this process does not exist. It could happen that end occurs before Pole. So if it does not exist, we need to wait. That we have already taken care of.

Okay, so concurrency is taking care of. If we do these things. What else? tests So tests, we look into it will be the standard way in which we are going to be writing test cases for any application. We are going to be looking at some scenarios and making sure it works. Okay for concurrency though, you require some sort of additional test cases you need to think through and sometimes building.

The test cases itself is a problem dependency injection could be a problem. We'll look into that. Okay, so the first 15 minutes are up guys. These are the requirements that we have. This is what we're going to do in this video. Okay.

So firstly what I want to do is I want this method to block. whenever weight is required, so I'm going to be waiting for what when there's a pull method. I'm waiting for what I'm waiting for. And update and end request so I need to wait for this. Talker. How do I do that?

so wait for and which is over here. Okay, that's what I need to do. off first process ID. This is what we're doing. Okay. So every time poll is called I might be able to pull out a request or I might need to wait.

And wait for how long? Till end is called so over here. What is happening is? I'm going to be using a push architecture Pole is Basically pull architecture, but internally, I'm going to be using a push architecture to notify the pole method that hey this is done. This request is sorted. Okay, so I'll just code that out.

It will be a little simpler then the talk so. Let's go here. I have a bunch of containers which is a list. of Futures so there is a implementation of a future which is a completable future. so futures and this is a list. What is this list contain?

Well, every time you call the pole method a future will be added to this list when the end method comes for that. You know process it will be kicked out of the list and we'll be sent as a response to the end user. That's what we have. Ashwini Patel is asking. Can you repeat your memory leaks scenario? You can just skip back to the to the timestamp the memory leak is basically when I forgot I forgot what it is.

Yeah, of course when the end method fails and the start method still goes through. That's the time when this process and this queue is going to put this process ID, but it's never going to be kicked out. Right? So it's a forever process. And in fact, it's worse than just a memory leak your pole method is now going to complete. because the end Methodist field that's the problem we have.

And we discussed two approaches to get rid of it. Okay coming back to the Futures that we have. These Futures will be updated by. The end method. Yes, that's right. I'm talking to myself now.

That's the first sign of so Futures dot add I need to add a completable future. But in fact it's going to be updated. It's not going to be added to so it who's going to be, you know adding containers which are going to be fulfilled. That's the poll method every time you call the pole method. You create a future object, which is going to be fulfilled by the end method so it should be over here. So if the queue is empty then I need to wait for it to end.

Right? So Futures dot add completely future. and this is the result. That we need to return. Okay. So what we have here we have.

in the end return result dot get Again, this might throw an exception. Which would be sad. So get with the timestamp is going to avoid doing that. I'm going to set a timestamp of Three seconds. Okay. This is your depends on the API.

But of course, this is what I have. And I'll also surrounded with tri-catch. And in the catch, I'll just throw. A new runtime exception because this should never happen. Okay. And if nothing absolutely nothing is the case then I'll throw another exception.

Great, so now we're done. with returning result What is the possible issue you? Okay, we are returning. A computable future of string. That's what we need. Okay, and over here, we have an unreachable statement.

That's good. Right. So wait for the first process ID. Okay. Now how do we do that? so I'm going to be adding to the result over here or I'm going to be actually taking care of that right here.

Yeah, if the Q is not empty. and if the process in time is not equal to minus 1 which means the process no process has ended the first process has not ended and the queue is not empty so over here, of course, they can get runtime exception. So I'll just Get rid of that. The Q is not empty and the queues first entry. Has a non-negative end time. Okay guys still this point is everything clear.

What I've done till now is just look at if this queue is empty if it is empty then I'm going to be Adding a future to the you know to the containers and over here. We see how we can complete that future later. So basically till now we have put the container. How do we populate the container for the future we see in end? method and of course if the first entry is not yet completed then. You wait for it to end.

Okay, so that requires another future ad so this is the else condition. And I'll be true to my word. I won't add comments to my code. I'll keep itself documenting. Okay. In Manchester Sharma is asking can be communicate with concrete processes or are we doing so?

rather than test cases We will be communicating with concrete processes. That's the whole idea behind. You know having something which is going to be waiting on a future and right now what I'm doing is I'm just making the method blocking so that if a person makes a request then the response takes time instead of just returning null. Okay, that's one of the requirements that we had. And that's being fulfilled over here now. Sairat, Santosh sawant is asking his computer a sort of callback mechanism.

Yes. If you know about listenable futures or callables, that's that's a callback mechanism that was there earlier over here in Futures. It's functional programming. You can actually compose them. On top of each other. So the result actually you can just write that down.

It's nicer. Okay, Kunal Mahajan is saying can you explain what computer is? It's a container. It's a future object. If you use JavaScript you can think about Promises and the equality in Python. I'm not too sure because I actually haven't used Futures ever in Python, but I'm sure there is a data structure they have for that too.

So maybe a little bit of searching will help. Okay, Akshay, Jain seems to have interesting question since we have many threads accessing these methods parallely. Can we do the following make processes map as concrete map make the methods of synchronized? Okay. The first is a good suggestion. The second one is.

Probably not going to help much and we'll see why but have a look at if I make it concurrent hashmap. It does avoid most of the troubles that we have earlier, but that's still issues. Okay, because a concurrent hash map doesn't stop this being a concurrent. Sorry a composite data structure using two data structures. So within this hash map you're safe. The the method calls are going to be synchronized.

But outside what's going to happen. You don't know right this Stream app might be being updated before the concrete hashmap sometimes after it. So that's the problem. Look at Futures needs to be initialized. in the Constructor and for guys who are looking for a concurrent data structure for lists copy on and write arraylist is what you're looking for if you're using Java. Okay guys one more minute for questions.

Then we head to the code again. The poll method has been updated. That's what we have done. All we are doing is we are adding features. This is the result and finally we are trying to get this out. So when this result will be completed by this end method.

The pole method will return a response. Okay. This is a blocking method by the way this get The reason it is blocking for us is because we wanted that way. Usually it's better to just return the future container itself. So the client who's actually calling this method has a container and they don't need to be blocked on it. Once they know that they have the container they can look into it anytime they like so that gives the client mode control.

But sometimes you may not want to do that sometimes I mean if you're going to send it over an API, you don't want the client to have a container because you know, who's going to fill the container over the API? Yeah. Okay, somebody haran is asking 66 and 73 are the contradicting. so Q pole first entry and okay, I don't know what you mean by that but pulling the first entry is only allowed if you're going to be you know if the Q has some information and the end of that is done. Okay. Okay, let's move forward.

So coming to the end method, what is this need to do? If the process that you just updated happens to be the first in the queue. Then you need to let go you need to fill the container of a future and send it out. Okay. so if Q DOT first entry dot get value Dot to the first entry if this has the same start time. So the start time is of course the same if this has the same ID as your process then we need to do something.

What do we need to do we need to? Remove from the Futures so remove. okay, and this future has to be completed. So this is going to be containing the result. We need to add. We need to complete this.

Okay, and this is of course the case if Futures is not empty. What do you what do you feel this with? Well you you actually need to put this process into it. So. You need to actually print out the log line. Now the log line is being printed over here.

So what we need to do is we need to say that give me the first entry in the in the queue print the log line and then do all this stuff. So this is common. Right? And what we are going to do is we are going to just Convert this to a method which says? pull now and over here you can. pass to poll now This thing okay.

and this is of type string. So okay. So if Pole now returns of a typing then you can actually complete the future with that type, but because it is wide and I don't really need to return the result in the in the container itself. I just need to tell the container that it's done and because I've printed it out, right so I'm going to be returning nothing which is void. and over here you have result of that type. Of string is of type pole.

Okay, it's again come back. Let's say a poll now is of right. string Okay. Yeah. That was to see beyond the screen statement is the log statement. Okay, and I'm just going to return this.

Okay, so pull now expects that the queue is not going to be empty. And the first entry is not going to be minus one. So, in fact, I can just add that over here. otherwise it returns Okay. Now we have okay, in fact, you know if this is going to turn into if Pole now is null. I think I think that was simple.

Just do the check on every method before calling Paul now. That way then pull now doesn't need to worry about. Whether you have the first entry or not. Okay. Guys, if you have any doubts, you can let me know in the comments. I'm getting back.

The poll now in end also has to be the same. So the result. Can come over here in the pool now and you remove this. In fact, you're also going to be completing the result so result dot complete. with another and that is it. Oh well result is of type what let's have a look at Futures again.

Oh, this doesn't have a type. So I'll just make it void. So this should work. What's happening here is that Just give me a minute guys. I'm reading the questions in the tab. What happens in the future gets timed out in the pull method if the future gets timed out in the poll method your API request fails.

In which case it's okay. I mean there has to be a timeout. in every API over here in your poll method you are adding a future and you're you know, waiting for it to complete in the end method you're seeing if the updated process ID is the first in the queue if it is then you pull now. And then you remove the first future in the result and you complete it saying that now it's done. Okay, and finally, of course you have some issue here. Oh, yeah, there's no there's no return type.

It's white. Oh the return type of string. So that's another issue. This will also work. So basically what will happen is either your get will pass or fail if you get passes nothing happens you return null. Okay, and otherwise you just go ahead so I could change the method ID of this too wide but I'm keeping it string because most of the times when you're thinking about testing you want the string object in your hands and you want to test that object.

So that's the reason I kept it has string but For simplification app now just return null and I'm printing it on the spot. Okay. Now we are done with this. We are done with blocking and push mechanisms. Which leads us to the most important part of this interview concurrency? So what if multiple people are calling these Methods at the same time?

Now if you think over it a lot you see that this composite data structure is very hard to make you know. It's very hard to allow concurrent calls to this composite data structure without messing something up because pole this method is not on one particular index or on one particular process. It's on the entire data structure. It's on the head of the queue. Okay, and because it's a composite data structure. It's on the head of the queue.

That's not the only object. You need to take a lock on you need to go to the map and lock that reference. So it's much harder than just taking a simple lock. Okay on that. on that single object So the only way that I found to make this work is if you take the pole method and you actually use a lock. so there's a Lock on the whole object, by the way, okay on you know, pretty much this entire logger client.

So I'm just going to use this lock. you so I can use a well known lock which is reentrant lock. You can reuse this lock multiple times. And over here in the pole method I first. Take the lock. Then I try to do this stuff and if things go bad.

Then I'm going to be saying finally just release the lock. Okay. so what this is doing effectively is Locking this whole method. So only one process at a time can access this whole method why because to actually access the polar method you need this exclusive block. Once you take that lock you can enter this method and you can you know, make the pole request. If you are blocked on this future, then everyone is blocked on you.

This is like a head of line blocking. But that is the requirement that we have, you know, you need a blocking call. Otherwise, you have returned a computer to the Future and you would have been fine. So instead we are going to be returning a Blocking. I mean it's going to be blocking API. This is not the only method which requires a lock though.

There's one other method if you if you look at the crowd model here. create you can create as many as you like you can you know set the starting timestamp you can add objects. That's not a problem. The problem is when you're trying to update. or when you're trying to delete so read is also again fine, but the pole method is both delete and read because you're pulling Okay, pull now of course what it does it removes. So there's a delete and read happening at the same time effectively.

It's a delete operation. So this operation will require you to have a lock that is okay this one other method, which is an update which requires you to have a lock. And what is the method which is which is helping us update? This you know this data structure that is the end method. Okay, so I need to actually take a look on this. You might be thinking that what the hell what's the point of you know, if you're going to take a lock on all of them.

So I what happens if you take a lock on every method is effectively you are going to run this on a single thread. Which means more concurrency which means it defeats the purpose of saying concurrent data structure because confident data structure means that multiple threads can do things to it. If if you have locks over every method then just one method can do something like one one thread can do something. So it defeats the purpose, but we'll see what happens in this method start which is create and we will see how we can paralyze that. so end finally, of course you try to not unlock okay, so we have two methods which are synchronous which which and more than synchronized actually. If you are calling the pole method if someone is running the pole method, you cannot run the end method at the same time.

Why because you are taking a lock on this. thing so once you have the lock this guy can't move forward. And once end is running pull can't move forward. So only one execution of pole or end is running at the same time. Okay. This is highly restrictive your restricted a data structure a lot because only one operation is happening at a given point in time.

The only operation which can happen in parallel over here is the start operation. Okay, and why am I okay with that because the processes I mean adding a process or adding a process to the Q or the what is the second three map here adding it to the queue or the map is fine. You can do it all the time. That's okay with me. Okay. So do you guys have any questions on this?

I'm sure it has been confusing. I'm trying to go slow so that it's a little more understandable but this is hard for most of us. Okay. Ganeshanbag has a very good. Observation it is like producer consumer problem with locks. Yes.

It is quite similar. Thing about a producer and consumer like if you think about a queue where you're just adding elements and removing elements. Is that there's no updates to it. This is a little more complex than a producer and consumer because over there you just need to you know. Make sure that not many people are accessing the same element at the end. Over here this access is happening everywhere.

because this updates let's say end method. Ritesh Kumar Singh has a question. I think I would rest this earlier but no freshers are not ask this. Usually I mean to this level absolutely no. Are you Market is saying why are we using Futures? If you are taking a look that's a good question.

The main reason being that Futures give us an abstraction over. The container basically when the container is going to get filled you need a notification. Right. I can use a thread also I can say thread.ed. Which is giving an indicator to the thread cellular that hey, I'm not very important. If you have anything else to do you go ahead and do it.

So multiple threads if they're running if someone says thread dot yield it means that that's the spelling here is why e i l d I think No, that's not spelling. Yeah thread.yield. So what this does is it says that I'm not very important if you have some other thing to run go ahead and do it. So that's when you're waiting. on something but when you have a future the push notification is handled by itself when I'm going to complete this this line when this line is going to run. This line is going to execute automatically.

So 82 and 64 are linked. through this abstraction Okay, ayogen. I was asked a similar problem in baiju and jio, okay. guys, I'm taking questions for two more minutes, then we like and head back to You know fixing this code because it does have one mistake. yes, Sanjay has has the thing right what a multiple threads access the start method doesn't cause concurrency problem. The data structures used actually no.

that's not Exactly accurate that's not the real problem as such so because the data structures we are using our concrete and because you're just appending to those data structures. This is a safe operation. I have used a concurrent hash map. Yes, and the dream map is not concurrent. So I just quickly change it before you see concurrent. Skip this map.

Yes. This does the job doesn't it? You could also go ahead and use a I don't need to actually compare with. Having this competitor, but yeah. So what's the issue here? Okay.

So a concurrent skip list map is going to work but simple priority. I mean, I mean the blocking queue. Is also fine. Okay, a blocking priority you will work but I am going to use the concurrent skip list map because that is very similar to the tree map. We used earlier. If you don't know about Skip list, you can have a look at an MIT lecture.

Basically, the retrieval time is expected to be log in. Doesn't tautic retrieval time amortized is login. So for us Mortals, it's equal to a map a tree. Okay guys final question then we'll head to. A very interesting problem here. Okay, there's some issue with the lock.

The lockfield maybe final and I also actually push this. to the Constructor Zia Khan is asking you cleared the Google interview, right? Yeah. Okay. Ranjan Palmer is this question and such detailed information? London has a very good question.

Is this detail expected? No. Not unless you have two and a half hours. Okay, but you are expected to actually think over all these things. So if you know the original way to solve these problems, then you can talk about how you can approach them. And even in the one hour interview, there's an expectation that you will be at least talking about certain mechanisms by which you can handle con currency and certain mechanisms by which you can test this code.

What are the things that you'll be looking for in the test cases? Because when you're writing test cases in a concurrent situation, it's it's not as straightforward. As you know calling methods you have to actually schedule them or plan them in the right way. I think this call is going to go like 1.5 hours, but it should be interesting. Okay guys the next concept for that. I need a help of a diagram because there's only so much.

Talk does so yeah. Okay. now what do you see in front of you is a task scheduler. What is this do well, in fact, let me just get back to the code before I jump in there. What we need to do. What is the problem over here?

The problem is the start method is called before the end method that is guaranteed by the client. But we need to make sure that we execute the start method complete the start method before the end method is called why is that assume process ID one comes in? And concurrently the end method is also called for process ID one. Now there is no guarantee which method will finish first. Right, if you have multiple processors, then they might be running in parallel also and even if it is concurrent does not guarantee that you know, the the operating system is going to be running this method entirely. Okay, so what could happen?

Is you the start method is called? And before you put into processes. The end method is called and you do a get here. Okay, you might be looking at this lock and being like Oh, that's not possible. You know, there's a lock so only one guy can do it, but you just need one guy to screw it up like over here. You just need one method to get the lock go here and do a get.

Line number 61 while there the same process ID is calling the start method. Okay. So example process ID one comes in. Okay process ID one runs this line. and then at this point plus side 1 comes in it gets the lock. It goes here.

And then it does a pull. So over here this method is going to throw your null pointer exceptions same problems will occur as earlier. So you need to make you need to ensure that because the start method is being called first. You're going to be able to execute this first also, okay, I'll just read the doubts that you know people have because a lot of people who are watching offline might also have the same drugs. Okay, how could? I'm sorry, where's the?

Okay, there's an interesting doubt. Maybe it'll come up again. Let's get back again. So this is the problem. Of course, you know, you might get an all pointed exception even now. I need to ensure that start.

Despite being called first, I mean is executed first. So what I do, I basically need ordering. And whenever there's ordering which is required. You have a few options you can use data structures which are ordered. You know going to be executed in order fashion, or you can use this concept of threads. so getting to this one thing that you need to know about threads is threads cannot be broken into smaller pieces.

You can have one process. A process which is running a log client. And the lockline can have multiple threads running the same piece of code. Okay, so one process can have multiple threads. If you think of it in real life. Imagine you stay in a society in a colony where you have a bunch of resources.

Okay. So the the process is a place where a lot of resources are put out there memory IO. disk, all these things are common so you can go over there and you can use them parking space for example, but you know if you have pool parking, but If you think about your home your room those resources are private to you. So those are thread specific resources. Now in our case, we have quite a few things which are pool resources. So this data structure this map might be being used by multiple threads.

this skeptless map multiple threads this list multiple threads and this lock multiple threads. The lock is okay because it's designed to be used by multiple threads. Everything else is a little scary. Okay. So what also what that also means is that once a thread is being executed. You can't jump from one instruction to another in a thread while parallel sets of threads can be running for a single process a single thread is going to run sequentially.

Okay, and we're going to be using this concept because the thread is going to be non. Sequentially we can order threads. To run sequentially so that the start method when that thread of start method comes in. We force the end method to come after it. If both threads are running in parallel, we'll get screwed. So I'm going to be forcing the start method to run on the same thread as the end method will.

In this case, what happens is? I just show you the diagram. In fact, I didn't make a Diagon for this but you can see over here that multiple tasks if you see the red guys. multiple tasks are executing sequentially the reason for that is each task is being executed in a thread. Threads cannot be done concurrently. They have to be run.

I mean a single thread cannot be on concurrently multiple threads of course can be done concurrently, but I am forcing them to run sequentially. Okay, that's what I wanted to do. I don't know how much sense that made. I'll probably write a small blog post on this because this is one of the key Core Concepts. In fact, if you have a look at the system design course that I have made which is on lld that is going to be talking about this in detail and it's going to explain it in a much better edited fashion. So that should be easy.

In any case that's the way in which we are going to order these executions. Ganeshanbag has a much better analogy than I could come up with flats are threads. You know, those resources are the same corridors are for processes. That's perfect. You know, it's that is common. So and if multiple people are going in the corridor you never know which is you know, it's a shared resource so you don't know what's happening to the code also.

Okay, so I want the start of a task. To run on the same thread as the end of a task. How do I do that? So I need to actually assign a thread the same thread for the same task ID. That's what I need. And when you need to map something to a particular place multiple times to the same place.

What's the data structure which comes to your mind? Oh hashmap, hashmap. Yeah, that's a good answer you got it's a hash map because the hash of an ID is going to be repeatedly the same. Value? Okay. So a concurrent hashmap is basically going to be mapping to the same value for the same task ID.

It's going to fall in the same bucket, and we're going to use this concept of hashing to actually create. something called an executive service so Don't get I mean scared by the by the big name. basically, you can imagine this to be a threat because what I'm doing here is This dot executive service. I call it task scheduler. is equal to Now I have 10 threads. Okay, but I'm going to be hashing all the task IDs to these threads and they're going to fall on the same thread all the time.

If it's the same task ID. It falls on the same thing. That is the guarantee. I need I can make it a single thread also. Then it will always fall in the same one, but that defeats the purpose of concurrency. Okay, so I need multiple threads and then I need of 4i.

task scheduler I is equal to so these are all convenience methods you have in Java a single thread executor is going to be created here. This is a single thread. All tasks in it are going to executed in the same thread. This allows you to order things. Now, how do I make sure that the same one falls in the same place hashing? So what am I going to do?

I'm going to say hey start timestamp if you were one then. task scheduler take the process ID. hash it mod it with this size of the task scheduler. and then execute this runnable Okay, how many of you guys got what's going on? Okay, I'll just take questions for the next two minutes. In fact basically by by doing this on the start and the end method.

In fact, I'll just do this here. So this will run on the same thread. Perfect. So that two concepts here one was the lock. The lock is rather simple because you are blocking anybody else from accessing the same resources while you're working so the pole and the end method cannot run together. So that's why we blocked it all out with locks.

Then once we have you know, once we have guarded that code the only scope for concurrency occurs in start but even there we need some sort of ordering. So what we end up doing is we use. This trick where if you assign tasks to the same thread they run sequentially. And that's what we needed. We needed to ordering off start and end so because the tasks run sequentially we are able to use the concept of hashing to assign the same process to the same thread. And Run start and end sequentially.

Okay, this diagram is going to make things so much simpler. Have a look at this. This is the task scheduler it takes. a key you can hash it moderate with the size or task scheduler and depending on the hash. Value you got depending on the value you got after modding you assign it to a particular thread. Okay.

In fact, this is the more accurate diagram. And that's what we have. Himanshu Sharma is asking please explain hashcode mod length. That's a good question. You can actually go to the consistent hashing video. I made on this which talks about this in a lot more detail.

The reason you moderate with length is because you don't want to You know you want to assign it to a particular thread over here, as you can see one two, three four and up to n minus 1 you have these many threads you want to assign it to one of them. So you just mod it and because the hash function is uniformly random you expect the mod of it by size also to be uniformly random. Thank you money. Bhushan. You know supposedly my system design course. I mean, I got an email today which made me very happy.

Yeah. okay, guys, two more minutes and then we head to actually testing this code out because right now we're kind of done with this code. Okay, nitish. No, it's rishipal says other 10 threads within each process with the task scheduler. No. The task scheduler itself has only 10 threads.

The process is having the task scheduler, right? Of course the code that we have here. If you see the code over here. Again, let's go back here. The task scheduler is in your process, right? Of course.

So your process has the task scheduler the task scheduler in turn has 10 threads. In total which are being assigned. processes based on the process ID based on the hash of the process ID Okay. Sabarish mulidharan is asking can you defrace how the thread does start and then end well because I have a look in the task scheduler. You're going to be getting the start method first. Okay, because that is a guarantee from the client.

You will get the start method called first before end for the same process ID. Now it will reach your task scheduler. That is the very first line of code you have in both the methods. Once it reaches there, it's going to be executed on a particular thread depending on the process ID. So take process one. Let's say the hash is also one.

So modern is going to give you one go to thread one. That's a green box over there. One of the red items is going to be start. That's the first time. Same thing happens with end for processity one. It gets assigned to the same thread the green box at the top and a new.

I mean a task is at the the red thing is actually not a task It's The End method. So these are methods instead of tasks. I should call the methods. So the second method will run only after the first method and that is the guarantee we wanted. Right, so that's what we have. As your Kumar.

Yes, that is true starting and running on the same. thread okay, guys, let's head to tests I will be a little quick about this because the code is available on GitHub and this is rather interesting. The first bit is easy. What you need to do is you need to I mean you're you're starting three processes. And then you are trying to end two processes three and two, but because these started after one, you know, this has a timestamp one. I can't despite Two Poles.

I'm not going to be having any result. Okay, so these two should block. right and finally when I end process ID 1 and Pole when I end processary one actually one and two will be released Because Two Poles have been done here. So at this point I can just prove to you do a thread dot sleep. Of a thousand milliseconds, so you'll see a lag here. And or 10 seconds and after 10 seconds, the final pole will be done in which case the third log line will print.

Okay. So let's just do that. Let's run this method. Oh by the way disclaimer log client implementation is different from the code that we just saw that's to make sure that there aren't any hiccups in this demo, you know, it's not as live as it seems the other code has been heavily tested lockline implementation is also of course available on GitHub so you can check that out when you want. Okay process ID 1 and 2 have already you know completed now. I have put a 10 second delay.

And then the final Port should come as we expect. Perfect. So this works. Ideally, of course you don't want to be looking at the output and saying that yeah this works. Well, this is awesome. But we have little Choice here because we don't really have little choice.

We can always return a string and then, you know compare that but I have kept it simple so that this is a more visual way of seeing things. Okay. Now this test is the most difficult one and a little more interesting. What we need to do is we need to test for concurrency over here. We were testing for blocking. All right, so this is This is the blocking test.

This is for concurrency. What we are going to do is we are going to create. A log which is going to have 10 threads. So that is the size of the executive service. Now I will be running multiple. commands because I've captured a 5000 so there's 5000 commands which can be run at parallel at most because I have 5000 threads in this executed.

And what are those commands going to be like they're going to be pole they're going to be end and they're going to be start. So these are three types of commands I have. What is I I is the process ID for me. Okay. So here you have task ID. This is again the task so this is the three types of commands that we have in the logo Okay, and based on these commands, I'm going to be actually executing the test.

What's all this? This is all set up. I mean till this point. It's all set up code. I'll just minimize this. Yeah, so that's a little more clear.

Why so much setup required because this is a concurrency test and then many edge cases that we need to look into. Okay. I cannot allow a process to. And before it starts, so I am the client now. Right me being the client requires me to take some responsibility. And that's the reason why this setup makes sure that a start process.

Call is never made after an end process call. That's one thing the other thing is. it is my responsibility to make sure that Let us take an example here. Actually that will make things simpler. process ID 2 ends at 9 and starts at 5. process ID 1 ends at I'm in stocks at 4 and ends at 12.

Okay. But what if you get this notification later? Yeah your start method if you have a look at your start method. over here When is this method going to be called? There needs to be a guarantee that this start is called, you know, if you head back to the example here. two starts at five and ends at 9, but that means that One the start method of one should be, you know called before the end of 2 because if you don't do that and you do a poll operation, so let's take the example much better to start.

now you get 2 and 9 And before one can come in you get pulled what's going to happen. You're going to print a long line. Okay, and I don't want that. That's not expected. But if I force in this setup want to come before that, so if before you know your end one has to come so before two ends once starts at 4. Now this forces that a pole is going to block.

Okay, and only after one ends. at 12 will you get This block being released. Okay, so that's just an explanation of the code. Of course. You can look into it yourself and get a much better understanding. So this is all set up finally become here.

which is the commands we are randomly polling at any point in time because we have a push architecture. This is going to work you can pull at any time you want and you're going to get a notification that this task has completed when it is completed. okay, that's one of the good things we have about this system. a pole might look You know pole might look like a synchronized method to you. It isn't multiple poles can block. That's a good thing multiple poles can block on the same.

You know. The same log. Yeah. Okay, and the other thing is that if it's not pole then if it is a start then you start you call the start method. Otherwise, you can asynchronously run the end method. Okay, and let's see what happens.

I am going to use. 1000 tasks all of them should be printed out synchronously if you don't Do this. I mean if you don't do all this stuff that you had earlier using a log using a lock or using a executor service for the threads. This is going to come out of order. Okay, and let's then just run this. Yeah, look at that task 0 1 2 3.

The reason for that is because I have kept the the stock method I mean the the timestamp of these tasks equal to the task ID plus 1 But if if you wanted inverted I can do that right now. All I need to do is I can say that your start is later. So instead of task ID minus one I can say oh, you know. What is the what is the size over here? minus that so this should also work. Let's see.

I haven't actually tested this that's the reason why you shouldn't be doing a lot of Experimenting in you know test cases life. Yeah, so it's printing inverted as you can see the top task is 999 and of course if you go all the way down. Then you know it's all in order. I just increase this so that it's a little more visibility. Okay, perfect. So this code works and this is a very difficult.

thing to do, I mean What is the purpose of this video? That's something that we need to clarify? The purpose of this video is to show you running code. on complex lower design questions in an interview you are not expected to have absolutely perfect code, but you're expected to actually consider these problems. at senior positions Okay, that's the reason why we are actually come to concurrency. We have come to blocking we have come to test cases.

Which will be asked in an interview. May not be as strict. As of course. We have kept the level over here. You want to keep the level very high over here. This is like almost like you're trying to code, you know for a real system.

So that's the intent of this. Okay. Guys, you have any questions we will be taking the next four minutes of questions before the stream ends. okay, I'm still on guys in case you're in case you guys have any questions, I'll just put my camera on to show that I'm still alive. Do let me know if you have any questions in the comments later on if you know they pop up because there's a lot of process and there might be a lot of things that you come across while you actually implementing this. So yeah.

Two more minutes or three more minutes actually. Among Malhotra is saying will you be making a course on concurrency in multi-threading 2? Yes. So the course I have on system design is on high level design right now the codes for the low level design are ready. One of them is remaining which will be probably designing split wise or something like that. It's going to be a difficult problem to solve when it comes to low level design.

So I will be putting that up in the course and I'll be explaining these Concepts in a you know, far more easily consumable way because just before your interview don't want to spend a lot of time understanding these Concepts and in depth also, so that's one of the benefits of the You know purchasing the course. Yeah. Okay sabaresh. Mulidharan says thank you. Thank you. Okay, one more minute kavish will get to your question, too.

I mean summing up things. So I think I'll take that in the last minute. So there's just one moment then of questions. Zia Khan, this is for sd2, right? Yeah SD to sd3 probably. I mean if you're going for this kind of interviewing expertise, it may not even be I mean, it's really hard to get this right in an interview.

So but consider these things is completely normal. For for senior Engineers, you expect them to consider that this might happen. And come up with some solutions some standard ways of avoiding problems. Among Malhotra USD courses great. Please make in depth course on concurrency as it's rare to find. Yes.

That is true. That's the reason why I'm actually tackling this head on I have all the codes ready. So that is super interesting. Naga Pawan, what about the next session? The next session will probably be on testing in production so that it'll again go back to this software Engineers 101 if you're recently joined you should have a look at that. I'll be talking about.

How do you test in the real world? And how do you like once you've deployed the production? What do you do with the apis and stuff? That'll be the last video of the live series, I think. And then we can you know head back to edited videos. It's it's taking a lot of time to edit videos because I have some on the course also running in parallels.

It's quite exciting. Oh, okay. right guys, Ashwini Patel, you can always send me a Actually for everybody if you have any doubts or suggestions, you can email me and gkcs address scalability dot Tech. Or of course, you can just leave a comment below and I'll be looking into it. summarizing this entire session What we did today is we took a solid problem of the Google LD question, and we tried to think about Concepts like concurrency blocking and testing. Because these are required for senior rules and also you need them in real life.

I mean I'm going on saying senior role senior rules at the end of the day, even if you're SD one your expected to do this. In at work, I mean and as D1 is not going to be told. Oh, yeah for you concurrency doesn't work. You need it in a production environment. Of course, you need it. So you need to know about these things eventually for an interview though.

You can get away with it. That's how I should put it across because as the ones also this is super important. Okay, if you want to progress in your career. the other thing is Concurrencies requires mainly two things one is exclusivity that is through locks and one is ordering that is through either, you know processes or complicated data structures or by using threads sequentially assigning the same thing to the same thread. sequential ordering job done Okay. Guys, thank you so much for tuning in.

This is a very Advanced concept and I did not expect 163 people to be online at the end. Thank you so much for listening and making this a wonderful session. If you have any doubts or comments, you can leave them below. You can always check out the links for for the help and I'll see you in the next video. Bye.

## April 2023: Orchestration Service Design

Type: Video · Length: 63 min 17 s

### Lesson notes

Works through a low-level design question for an orchestration service that receives a request with a series of dependencies and calls dependent downstream services. It covers validation, a decoder, a service registry table and a calling service, then locking for concurrent reads and writes.

### Transcript

here here are some other thing maybe. Oh. Bye I use the interview ready link now because it's easily. Okay. I have used another one. Probably one fine.

Yeah, what's up? Oh we have. Joining us. Netaji welcome again amonguru. We do. Sorry.

Uma yesterday again we met Gondola as your surname. Yes now and yes. Okay. Yes. in fact, I just shared my screen for a second because this is a useful thing. I don't know how many of you have used it.

I share my screen. So if you just go to your account. Right and you if you never want to miss a zoom class just go to zoom classes and click sign in Google. That's it. It'll integrate your Google calendar. I've already done that with another account which I use both of these for testing so I better not integrate these two but You can you can integrate your Google calendar and then you get notifications you you know, if the email goes in spam or whatever.

You don't need to run. Plus we are looking at a V2 actually. If you have integrated your Google calendar, then we don't need to send a reminder most likely but still will send or the recording and everything. I say also that means that if you go to your lower level design. like classes we have just started with the adding the live classes here. So three of them already here.

I mean all the light classes that we're taking until data here this one also up there. And there are timestamps in case you want to jump to different. Points of the live class. I think it's there for most of the videos. Yeah. Okay.

By the way, what's the tech stack behind interview ready? It's very smooth and Light. But I'll let the engineers know this. Yes, this is really so the what we use for the backend is golang and we have some Lambda functions also, but it's primarily a golang server ec2 instance and then we have postgres. Oh, it's it's once it's one monolith like yeah. Nice.

It's not just one monolith. It's also single server here. That then somebody is manually going to go and in fact, it has happened. We turn it on. And on the front end everything is UJS. So it's a single language.

Initially moving to different languages based on developer preference. And now recently we have taken all those many repos or Lander functions and putting it all in the main repo volume. But you are using something to like just a CDN and S3. Yes. That's right. And is a everything is hosted on AWS.

So cloudfront is the CDN solution S3 is the solution that we have for file storage. This is safe right to share. Yes. and I can show you basically this is the place where we have all of our pipes here In SC you have this concept of buckets, which are basically like folders. and you can store images here in case you want to configure your DNS that is around 53. You mentioned CDN that is cloud front.

Yeah, that is backed by this S3 bucket like for example. our website is Is hosted on this bucket here? our database store solution you're using it's RDS, but it's actually Okay, nice. Place ours is Arora, but arora's. A little on the expensive side. We are looking to migrate to a simple post-based instance posted on ec2 and that will so recently we have been looking at how we can reduce costs on AWS.

Which is important for a startup? Unlike drawing these diagrams that we do in our system design. These these boxes actually cost us money. So there's always that. Yeah, yes. It's a single instance.

Automotive is is that much already and and that instance? Like is there that much load on the application? No, our the application load is 2% So, what's the catch? The catch is we use a lot of memory. So the in memory caches that we have are. I mean, I think that the entries are evicted at the right time.

but the cost of posting a medium instance is low compared to the developer time that it will take for us to trace and Hunt through all the memory that we use. So it's cheaper just continue using that instance and let developers work on certain features. For example recently. We launched a couple of features you have course progress here. You can set a Target. So based on number of days that you have to study so you can set hours that way and you can see how many quizzes you have passed and field for example, if I go to low level design If I want to set the target.

Let's say I have oh I have just 43 minutes. Oh, yeah. I have almost finished this course. Go for Behavior. Or low level design. Let's set the target.

Let's say I can study one hour a day. That's great. This will be stored in our backend. and you get a reminder but on Google Calendar also, this is a totally UI thing. It has nothing to do with our backend integration you can set A four-hour slot. This is four hours, right?

We got a bug here. Okay, this is good. We just got about this is a four hour slot, which we have booked from current time to the next four hours. And till what time for the next seven days? Okay, that's also about okay. I'll get this looked into.

It's always good to do a demo on Friday. But like yeah, anyway, it's really it's a really nice back and I would like it's it's really neatly designed. I was checking or I was inspecting every call ever that is made from the client and it looks really nice. I'll definitely let safwat Imran is one of the backend Engineers tossip is also back in nature. And so is Awash Mitra. I'll let them know.

They have done a really good job. They don't believe that when they do their own good reviews, but yes, I'll let them know. Okay, I haven't seen what's in the code. I can see the API. So, okay. Yes.

Okay, I'm using I don't do you want to go ahead sorry for keeping all of us waiting, but I think most of us have come now. Sure, I don't go ahead. so you should actually yes, if you and just go through also, I'll stop sharing. Sorry for that. If you can give me the host types. one See that?

Yes, you are now though. the iPad one actually you go. Oh, you are the most I can't actually make you the host now. I can reclaim the hostess. Yeah, you can drink. Okay.

Yes. I think there is a slider link. Yes. I'm looking. Like I said that on chat. There is a question, which is already mentioned.

Okay. Book some somethings to make this even smoother. You have any questions you can ask them directly on the zoom chat, or you can post them on the slider link, which I've just shared on the chat. If you like a particular question, you can output it. That way we can take the questions in order. That is one question.

on on a low level design. Yes. On this okay. So and opening that in which we have in the slider. And I can see a little Link in that. We are given we have to design it all orchestration service.

Okay, consisting of a combination of data structure Concepts and multi-creating. Probably the hardest round in the process, okay. if probably first of all if there's A head also approx description of the problem statement. You'll receive a series of dependencies and as input your orchestrator must be able to process our request received from the client and generate a response. There may be several Downstream Services interdependent on each other. All processes are CPU intensor.

was not able to solve the question completely was you define on the necessary classes and or get ready? Okay good. So I'm just first reading the question and just writing down or whatever. I can see basically we have to design our office Station Service what else we are given we are giving a series of inputs. I don't I do you have the same link. I mean the one on the chat.

I think it's like you said, it's D2 March something. Oh, yeah that okay. I'm sorry. Oh, yes, you're right LED down to is illustration service so sorry. Okay. Yeah, everyone is on the same page by the way, right?

Everyone is seeing the same. Well question. Right. If you can give me a conversion or something. Okay. Okay, so let's start so we are giving a series of inputs and we must be able to process a request from the client.

So request would come in. and and we would be able to generate the response and there may be several dancing. So this is interdependent on each. all the personal super interesting Okay. So probably, you know, like you always do we can start with the use case diagram? Okay.

So let's talk about the actors force of the first actor which I can think of here is the system problem. Would be able to you know decide to Route the request to. By the way there is there something else also that we have to discuss about this question. everyone no one. Where do you repeat the question again? Sorry, is this something is also that you guys would like to discuss about this problem or add-on to this problem?

so that probably we are able to move to the good use case diagram and probably closer and there is like if we really nice if we have like a real example on what that input was and what medium it was transferred through like for example that input and payload transfer to ACP and then like it would just visualize the context more. Yeah. you can't think it was but see either side control in one of the comments the post author has mentioned the question with an example. Investigative last but one coming. Okay special service. I one example which comes up which is there on the high design section is a calling application.

So for example um every call in a imagine you're designing Reliance. Jio the platform like it's not just that. Your end users can send you calls. It's also that attack and send you calls that different. Network providers for calling and what you need to do is you need to manage this state of so a call is placed it is then picked up it is then, you know, it can be a conference call. So multiple people can then you can stop the call and you can charge a user.

So this is a orchestration service where what happens is when you get a call request you go and ask one person. How much should I charge this person? Then you ask which proxy should I use to Route this call? Then you ask how much should I? How should I keep this call on? There might be a profile service.

Also. Is this call even legal? You have to Pakistan? Not allowed does this call need to be recorded is this person out, you know potential. I mean you have a warrant for this person. So there's quite a few things which happen that would be a real world example, but yeah, do we want to go there or do we want to Know this example and then convert it into a general orchestration service.

So service a service B service C. But just imagine that Services a profile service which gives you a profile you first check whether that's your user or not. Then you go to billing service and say how much should I charge this person? Then you go to an optimization and say what route should I use and so on? Is this making sense case as orchestration service? maybe an easier example is just Amazon with the manner you place an order you need to go and check the inventory you need to then see if this pin code is serviceable and so on so multiple services are being hit and they give you a response and finally you you take the Consolidated response and give it to the But we made that way to place an order.

Everyone does this make sense? Is this yes, okay. Okay, so should we for now? You just keep it generic with that's okay. Let's just use service one service two service three, but it works for calls. Also, it works for any kind of State Management.

system Right, so I believe whenever a call would come to a system. There would be some sort of validation. I'm pretty sure okay. So one of the things which would be there would be validation engine. Now this validation could be on the basis of it if this user is valid or not if this user is authentic or not if he wants to request. so Can you?

Yeah, so if you so first validation and just using it or not second this question could be if the parameters under which he wants to make a request. So let me take an example. Let's take an example of a broken website. Okay, and you want to play some by order on some sort of stops? Okay. Now what happens is of course, the validator would say if you have the relevant funds in your account or not.

So this could be second validation. If you're selling something for example on the broking website only if you are relevant stocks, which you want to sell in your account or not. So this could be told validation. So there could be different validation engines. So or what you can say is there could be different services that checks and then routes the request accordingly so posters a request would come and there would be validation in it. second thing that I can think of.

So based on the type of request Possible we might have to decode the request also, so there should be decoded. And on the basis of the request and after we decode the request we need to Route it to the relevant service. This is what I can think of. If I'm going some other direction you guys can also chime in. Is what I'm thinking of doing. everyone Here this there is a lot of background noise.

I find here you actually if they're saying something. Uma who won common glotto didn't Abhishek. Oh good so far. Okay, so maybe there could be some sort of decoder also on the basis of which we might be routing it to the certain service. Okay? So second should which I think should be decoder.

Heard what I can think of is. Okay. Default, so let's think of the overall flow. A request games. It is validated. If it's not validated, maybe an appropriate response or some sort of exception can be raised second first.

It's validated now second thing on the basis of parameters. It should be routed to the right service. So so there should be some sort of in memory. Sort of that. If this parameter is there we need to Route it to S1 is to this sort of service in this parameter is then we can route it to some other services term. There should be some sort of table which I believe Which should be there?

Okay, so this is second which I am able to think. third is You so it's mentioned the problem statement also that email receiver a series of dependencies have input. Okay? And we should be able to generate a response and return that response. It's mentioned the question actually. There may be several Downstream services that are interdependent also on each other so just could be some sort of dependencies also.

Okay, so this should be third that there is some sort of dependencies and since there could be many so I believe we can have an array sort of thing for now all going forward we can think of what should be the appropriate data sections because it's mentioned consisting of combination of data structure conception and multicreading. So before going ahead. I would like to discuss about if you guys have heard of. That problem in data structures, which we that we have to come up with an order where each and everything is dependent on something other have you gone with that problem? Can't remember. Let me just checking find that problem.

That wasn't lead for. and in that we used to use specs actually Let me just find it fail. Is like probabilistic data structure where it normally with liquify you and this would meet this question far more easier. Trust me when I say this. Just give me one second. It's some.

Interesting. Yeah, topological support. Yes. Yes, great and submission and you guys know our topological support. Yeah, it's a graph thing. Obviously.

Yes. Yes. So our topological what topological son does is it gives us an order for example, if something depends on some other depends if so one service depends on some other services? for example, if a wants B and C to complete first C wants B to complete first then what should be the order? Are you planning to add some more humility topics related course? Yes.

I let me come back to that later on. So what should be appropriate order so appropriate order of servicing should be they'll see then it does this make sense. Everyone if you can give a thumbs up. Anything? Yeah. Okay.

So this is one that to we get this order from topological sort if you're not if you if anyone is unfamiliar with topological sort, you can go ahead and learn that algorithm. It's a basic algorithm, right? So now if you look at the problem once again, what does it say? That you'll receive a series of dependencies as input your orchestrator must be able to process that request received from the client and Generator response. And there may be several down film services in their dependent on each other. Right which means that there should be particular order in which those Services should be called.

Does this make sense or am I doing wrong? Somewhere if you feel or we can have a discussion around it. It makes sense. It makes sense. Rich means no next come back to the problem, which means first of all the sun talking about what all this system would be composed of first of all, we talked about validation engine then we talked about decoder now next. What should we do?

We should be able to on the basis of these dependencies that we have. We should be able to come up with a list of or maybe a series of services. That should be called in that order. Does this make sense? This is what I'm thinking. This should be the third.

Thing it makes sense. You mean like in like a microservices context tried to plus? Yes. Yes. Yes. That's what I'm thinking just from reading the question.

Okay. I mean I'm making out. Okay, so this is this is third. This is third now whenever we call any service for example B. C e in this order. We are calling the services.

Okay. We've got a response from me what the response from here what the response from it? This could be a scenario where he wants the response that came from B. So right now yeah, they're not being much context about it. So what I'm imagining is so the final response after I go over this complete order would be my response that I might have to I'm generalizing it. So it depends on service what they want.

Does this make sense? Yes, yeah. Okay good. So I think now we can move and we can talk about each and everything one by one. So this is the next talk about the sequence of operations that would happen and then we can move on to the class bag. so first is call came.

So this is client. Now what would happen in this call First for the validation engine would be called. If this request is not validated basically anyway, this request is not genuine. So we'll return any sort of exception. Or maybe we can notify also the other person Second Step which we would do if this is validated now, this is true, then we will decode the request. Decode the request.

What will we get will get a list of Salvation on the basis of the parameters that comes out of the decoder? Okay. So list of parameters. Then on the basis of that list of params will all our algorithm will call our elbow. And this would return us no way or the order in which will all our dependencies. Okay, so this will return our first order of calling our services and finally What we'll do is we'll return the response.

Okay. From high level does the sequence of operations make sense to everyone? Of course, we'll go into depth of each and everything and I am also thinking along the way. so from high if You guys want to chime in something which we are missing? Or we want to add something. putting lesson Everything is clear so far.

Okay. Thanks so much almond you need budgie key are interested in Abhishek. Darshan show if you can give thumbs up or if you can to say yes or no, if you have any questions, please ask. Okay, cool. I'll take it as a yes. Okay.

So now on the basis of this, let's move on to the class diagrams and okay. so first Let's name our first system. Okay, what are things will it have? Okay, and what or what all things will be composed of? So if we see first of all, this should be some sort of validator or validation engine, right? So for so now the validation could be separate entity all together, right?

We'll discuss what would be there in validation engine but this system would be composed of validation engine now focus on my words. This should be composed of now. Why am I talking about composition? If my system is not there can validation engine exists if my system is not there yes or no. No, right if right no. If the engine would have its existence without my system existing then there would have been a aggregation relationship between two.

Okay now since validation engine cannot exist if my system is not there. So that's why there's a composition relationship between does this make sense? This is the difference between aggregation and composition. Does this make sense to everyone? Okay, and any questions anyone? Okay, couple of character asking what is the problem?

We are trying to solve over the joint five minute late. Okay Abhishek. Oh, so this is let me share the link in the chat. Okay. So yeah, I was focusing on my iPad. I'm really sorry.

So this is the problem that came in the sliding. Abhishek Verma and we are discussing the LED problem in this actually. Okay. Cool. So validation engine should be there. Okay.

Second thing is again a decoder. Okay. So a decoder camera, so a decoder let's talk about will there be a decoder service or should we make decoder as a separate entity altogether? What do you think? Okay decoder as a service right as a service great. So decoder should be a service.

This algorithm should also be a service I think. Right. So both of them should be service systems will have a validation injury or it could also have a list of validators also. Okay, so this is one second request. Request detail will always be there. like the request should be there, right?

So what do you think? What all should be there in a request? Request will have some sort of parameter. Let's give it some better data. Maybe it's a small description for description doesn't make sense. But a small description that could be some sort of thing.

Are you what it would be there? Right. So you are a that can again be of type strength or different parameters would be there in that request or headers are there so we can have a list of headers. We can have list of this anything if I'm missing a few wasting we should activate respite request object. anything if you guys can think So so what's that second property description and what and you and you are? Yes, what's in what's in the list?

Like what type is it? So just like we can discuss upon this type actually because in headers generally what we see is Jason parameters are there right? So this could be anything we can have a separate object or we can have it in the form of a map where e value there could be there so we can discuss about it with our interviews, but from the top from the high level. This should be good that it would be having some sort of parameters right now. Right, so that's why I'm having a list. This could be anything and we can have a discussion around it.

Okay. I believe this should be pretty much it. Of course, there's body also, but we'll see later on right now. We are just building the class back. Okay, so I believe this should be pretty much it with the request object. Finally, we want to return the response object to the client.

So response would have something other. Okay. Let's say we want to return a cost of something right. So responsibility would be a teacher you can have a generic also, but for Simplicity, I'm thinking to keep just one thing in the response, but the response would be any so let's say costly returning which could be of type and teacher And does this make sense? Yes, if you are, yeah. Okay, great.

So going forward we might generalize it going forward after maybe 15 or 20 minutes. But right now we are just dispatching and this is the way we discuss with the interviewer also during the questions because while making the class diagram we have most of them this questions along that's why Great. So I think that pretty much done with the basic are details. We are left with validation of which will make let's first go and make a decode service and this. algorithm Okay. so decoder decode service Okay, what what are methods can we think of in a decode Service First is decode right?

What will it get? What would be the parameters that I can think of? I can think of that. Okay request would come request would come right. So a request object would always come. What should we return time?

So in the sequence, what are we getting? a list of parameters we are getting right so return type would be list of you can have list of string here. Those could be objects also for Simplicity. We are having spring here, but those would be object also. So again just for now you're having its thing here. Does this make sense everyone?

Decode service, everyone. Yes, yeah. Okay, so I think we have pretty much done with it decode service. Now this decode method can have and all another methods also, okay. There we can't hear you Aaron. Yeah.

Can you guys hear me now? Yes, sorry. My mom told you maybe some settings of my headphone might have changed. Sorry. so decode Services clear now, let's have album service also, or maybe that we take the list of parameters and Give us the order of calling our services, okay? So what should we call this service as in?

can't think of a good name right now, but will be algo service This is a very badening fun think of anything, but for now, but let's work with this. Okay. So what should be the first method that we can think of first method should be? Get the order right order of execution of services, right? So get order. Oh.

You see you soon. And what will we get will get the list of parameters that we bought from the depot service, right? So this is what we get. list of string and this should be patterns And what would be the return type? So return type would be again the order of execution, right? So or list of service Maybe?

This should be the return times. So I think should we meet some sort of service also. then should we make some sort of service? Yes. I think we should have a service Duty also in that case because that should be good. Does this album service make sense till now?

Yeah, another service would return the responses make the concepts in the previously in the sequence. I know what all is that from algo service, we get the order of calling. So for example, b a c after that we call each and every service in this order and probably whatever the response we get from the final service will return that is what I thought. Okay, got it. Because algo Services we talked about topological sort. Also if you remember that, okay, the question that our service could be interdependent on each other, which means that service B is waiting for service a to complete.

And then only service we would be running. Yes, that would be something some sort of parameters or some sort of responses. That might come from service say that should be fed into service. We only then service we would run. It could be I take a small example in this case. for example 0 the again everyone has seen zerodha or any broken website, okay.

Now what you do is you place an order? Now when you're placed an order, what do you think? This broken site should be doing first of all, it should be checking if you are a valid user or not. This is one thing. Then what would it do? It would check if you suppose yourself placing a buy order you want to buy some stocks and this value of that stock is 200 rupees.

You're buying one stop. So first thing that it would validate if you are a genuine user or not second, what would it do it check if you're relevant functions in your account or not, right? If I am not valid why would it go on? visible process right Hello. Does this make sense here? I think you ask the question, right?

Here I got it. Yeah, so From this album service, we get the list of service and probably after that. So much. It would be let's a call in service maybe or service orchestration. Whatever the name would be. Calling service.

What will the service do the service will take a request and probably return a response, right? So response would be the return type. Get response would be the method name. What will we get we get a request object. And this would return response and what would happen? Calling service would all of them in order of execution that we discussed here.

Does this make sense everyone now? I think we are towards the end of the class diagram just the class time. Doesn't make sense. If everyone if you can show me a thumbs up if you can discuss. Okay, okay parents of your abstracting the thing that the algo service right what it does internally. We are not showcasing here.

Right? How does it resolve the dependencies and then sort the right order like eight minutes on BB dependency? So that is abstracted out, right? so actually One of the algorithms which we discussed that what what would this function or this method would be doing this topological sorting on the basis of this parameters, right? This is what it this is what I but there could be other algorithms also, right, for example, of course why we make all of these service interfaces, you know why we make all these interfaces everyone knows or what is the reason let me tell the reason everyone. First of all why we have all these service interfaces number one.

For example, I'll take a small example to explain for example notification service if any notification Services there they want to notify, right. How many notifications service can be that there could be email notifications service SMS notification service very easy examples two very easy examples now if they both want to be notification service, they would be having a method of notifying now. They would be implementing that in their own way. Probably SMS service would be using phone number and email service would be using email but What method they're calling that usually notify so first is when you want to implement the same methods in many different ways. That's when we make interface. This is one first season is clear to everyone.

Here. Yeah second reason is if you want to make virgins for example today calling services this tomorrow. You want to make origin of calling service? So in that case also, what would you want calling service to have all the time? This is get response function. So that's why we need interfaces.

Of services first and then we probably make implementation classes for all the services. Does this also make sense everyone. I hope Kiran your question of abstracting out methods is clear if yeah, everyone everyone is this year? Okay, I'll take it as a yes cool then. So well, you're pretty much done with the class diagram also now it would be good if we coded right? I can't quote it here.

device one like I would want to know should be coded now like because there are so many unknowns here and Sherry like consider to mention any of the concurrency issues that might have child. Let's talk about concurrencies. Yes. Let's talk about that. Plus I would like to ask from you guys till now you have seen this. Class diagram any place where you can think of where concurrency issue might first, let's become questions and then we'll go into the depth of each and every situation that you guys come up with.

anyone What was you went to actors are trying to operate on the same data can currently without any locking mechanism. For example. Okay. so first thing so like we discussed about this table that this dependency stable. Which would return us the list of services, okay? Which are validation sorry which are decoder is doing right decoder what decoder is doing decoder is using the parameters and returning us the list of services, okay?

Then this list of services is going to the album service to fetch the correct order. Now imagine imagine. Sorry to interrupt a way. We are getting this data. Are we storing indeed DB are storing in any objective? We will have to store this we will have to store this.

So this should be stored in a database. This should be but that is application coding for the perspective of low level design. We do not attach database. So what we do is we store it in application, right? So this list could be stored in the what do you say? we can store it in the we can store it in the calling service.

Maybe wherein where when we will call decoder we can send that. map of dependencies to the calling or to the decoder service. Does this make sense? Yes, yes, or you can also think of storing this map of dependency that decoder service but why am I storing it here is probably some other services can also use it right would be a situation. So that's why part of storing it in the following service. Okay.

so where were we found concurrency issues now Imagine One concurrency shoe which human talked about now. Imagine. There's a call that Updates this map that Updates this map for example. Let's say 182 parameters are there then call S1. S4 S5? Two and four parameters are there then ball S2 and S3.

Now, let's say oh there's one call. That wants to update this list. Okay, and there's other call? That is reading this list. First is updating. And the other one is reading.

This is just one of the concurrency issues. What do you guys think? Yes or no? Yes. Yes. So first one is reading and second one is updating, right?

Yes. First one. Yeah. Yeah because like you Sorry. It's sorry one. I think you your voice group in between.

Oh, yeah. So like what I want to say is that it is because we don't know actually, what's what's finishing first. Like it might be a resources reading but the second didn't finish actually writing and this is synchronized. Yes. Yes. So this is this is one concurrency, which we will have to handle okay.

So how you can handle this? You can probably take a look. Okay. So when you are updating it, you can take a right lock over it so that nobody enters and read it you can take the right job or you can have probably have a discussion around this with your interview. This one such way of taking a lock does this make sense? There's one concurrency issue.

Which we just yeah, one more question. Go ahead if suppose like my system is distributed, okay? So this data is mapper is available in all systems. Let's cancel that scenario or maybe in DB how to hand because I'm asking DB from multiple Services, right? Let's I'm asking from 100 services. So how we can handle this in the situation read and update?

Just first of all we can have this in the global also. Okay Global database would be there where when when we have this so only one instance is there. And different different services are trying to reach out to this. So when this service has taken on right lock over it none of the other service would be able to access it. They would be waiting for this service to complete their call. And then only this fall would be able to read this thread would be able to read this.

Does this make sense? Yes, but it impacts performance right here. If you apply Lots sorry, it impacts performance. Right if you apply logs because of multiple other services waiting to upgrade rocks. Yes, yes, but but that's only case because when update is there we will have to synchronize it. Okay.

Got it. Yeah. Yes, someone please. So so right now we're talking about the context of of services right? We're not talking about something that is sharing the same like process place in an operating system. Like it's not one service that is operating on some resources that it should it should fix the synchronization issue.

So it won't encounter any of those concurrency issues. We're talking about service on service to service. Whatever right? So we're talking about this order we're talking about this. So if you want to change this table of so suppose. There's a point that we want to change this or these Services.

Let's say I want to remove S5 and I want to add S6. This is what we are talking about updating this table. Yeah, so the so the S the S stands for like the service what I what I just want to know is that so if if we have services and we're afraid that the services might cause the concurrency issues then doesn't it make sense to know actually what kind of services are responsible for what kind of operations and how will they affect the other services? Okay. So now I think I got your question. Okay, so first is So what this S1 is 2 stands for?

Okay, so it is mentioned in the question that there would be Downstream Services interdependent on each other. Okay. So these are all the services that would be called by the calling service if these parameters are there. This is one how does this parameters come these parameters come from the decoder that when decoder decode said, okay. Second so service information would be present in this service that okay S6. So what we talked about topological sort, why do we have that topological sort it considers each and every service and that's when it come up comes up with the order that okay.

This is the order of execution. So every information would be there. Does this make sense? Yeah. So this one such concurrency issue? What other can we think of?

anywhere where we are updating And reading at some place or updating. On currency issue would be there and we will have to handle it. So in overall in this complete place, this is the only place where we are. Making a change to the database. I think we can have another very considerable concurrency issues. So let's suppose that one of those s's we needed to scale it and by that I mean horizontal scaling right the and and let's suppose then that that got canceled and we had this need of of actually having more instances that are serving the load on that service.

So that that means they'll be multiple actors that are actually writing probably to a service and some currency issues might happen. So this one has to do with writing to one service. Yes, but that is again really this table only, you know, because if this service scales out which means we might have to change something in this table, right? Yeah, yeah, so that's what I talked about whenever this reading and writing for writing and writing. at some place and database or some object then only we might experience concurrency issues. That's what I mean.

So if any of the service scales out, which means we might have to change the stable. right Yeah. Yeah. It's like it changes actually the question too and everything. Yes. So this is the conference issue which I can think of.

Guys, please Simon if you guys have any questions, you know. So are we here with everything if you have any other questions? Yeah, will we talk about the the locking mechanism or a synchronization mechanism on a low level like just for example how we wrote this function signature, so first of all generally from my experience me and God of except so we talked about this generally in a low level design interview. Locking synchronization multi-threading Concepts concurrency Concepts and never talked about this is one I can see in this interview. It's been talked about okay generally most of the time it's never talked about that's not in this that is out of school. Second generally in a LED generally a LED interviews of about 1 hour.

Okay, if it's more than one hour then it's a machine coding round and there we have to handle everything concurrency multi-threading all these issues. So that goes into the scope of machine coding around not the LED on okay here also, this guy has put it under LED wrong, but this is machine coding now. Okay, this is Third in the course since we are updating the course. So all these new chapters that are coming or that would be uploaded. They in that we have in-depth handled multi-threading issues also, so so you want something which I missed about your question doesn't answer your question. No, like it doesn't but but like for example, I actually have encountered a multiple interviews that I had.

Where I needed to cover basically how I'm going to handle some concurrency issues that might happen especially on the on the backend side. I know that wasn't like a very big deal, but since we like since most of the people now are on the cloud and everyone wants to reduce cost and whatever and all that. So the need for the concurrency relevant topics is is just gaining more popularity. That's Yes, you're right. So that's why all the updated courses covering each and every concurrency issue also. so Okay, so there was I think one more question that came from Abhishek.

Are there are you planning to add some more LED topics? So appreciate and everyone there first of all, we have updated the course. The updated one has not been uploaded but it will be uploaded soon as and when we get the new lectures, okay being edited. Those are under anything Point number one in that in the new chapters and updated chapters, which we have. We have covered in depth on currency multiplicating issues. This one second.

We have implemented the mean function also, so you'll see the runnable pool. Third. You would be given the repo link also so that you can load it in your repository and you can play around with the code. That would be a working for which will build in the session. Okay. This is three four the order of the new course, which we are making which would be good all of you guys first.

Okay would be. Personal intro then we go to the use case diagram then we build the clock last diagram. Then we have built the sequence diagram then at 5th. We are coding then six we have talked about optimizations also and few errors that might have occurred seventh then the implement the mean function to see each and every function or method in real. Okay in action. This is one second in the course fundamentals chapters are added.

So right now there are five fundamental chapters that are coming which will be covering design patterns actually, so There's a chapter which has been recorded on Singleton design pattern strategy design pattern Factory design pattern State design pattern decorated design pattern using very small applications. Okay, again, we would be in all these chapters and there are more that are coming up so build a design pattern is recording right now is under recording all of the things which I've talked about previously are in the editing phase. So editor is editing so that team is taking a bit time. In each and every fundamental we have talked about the problem statement. Then we talk about the design pattern in depth and then we record the problem which we discussed previously Okay, so There are eight new chapters eight eight new chapters that are coming on Abhishek. All of them are have been shot properly, but they are with the recorder editing inside.

Does this answer Abhishek is here. No, okay any other question if you guys have? About course about any topic which you want to understand. Because I think you're done with the question which we have. Alright, they said mangesh. Yeah, whatever.

We had talked about like say concurrency, which is a good topic. But what I can suggest over here, they say we can go instead of locking and doing the code for that. We can use the concurrency API same map concurrency, whatever the collection framework which is given by the Java 8 features so that also we can use for the concurrency which will be the framework. We handle it. And so that will be also reduce our code definitely a mangesh. But what we thought was that this can but again, this is this comes on the framework side.

Okay, which will be providing many things already to us. We wanted to go on much more basic level. That's why we talked we coded in Java. We didn't use any framework we could have used Sprint framework also, which we are going to use in the machine holding. You know when we are going to make machine coding chapters going forward, but for in the scope of low level Design This is what we generally have. Yeah agree.

Okay. Yeah, that's what we thought but most of the companies like you said umam said those guys are naming the interview as led but what they are doing is machine coding only. Okay. Yeah, got it. So I I think we are pretty much towards the end. If you guys can read today's Zoom session, that would be really great.

This would or if you have any feedbacks, which you can work up on. me and gaurav about room sessions about this session which then overall flu if there's something which is not clear to you guys about the setup that we have if voice is not clear on anything that you guys if you can rate overall. before we leave I don't one side one thing from I said actually a whatever we had thought about like that is good to the low level design. Okay, and whatever we have saying talking about the object-oriented right? But yeah, but what we are talking about like say even driven architectures or they say even thought process I mean to say not going for architecture or low level design when we are doing this one. We'll just have a discussion about the end of the session for the that five minutes how we can read is rethink about when we are thinking about the event driven.

Okay. Okay, so this is what we can especially I I am into the event driven architecture. Okay, if we can people think about whatever they have doing the class diagram and and if we can make again the rethink about the event driven and US synchronous, we how we can handle it. So at the end of session, I'm not sure. Sure. I will take care of this from the next time and I'll have a conversation with water this.

Thank you. Thank you. Yeah, thanks. Thanks everyone. Thanks for joining. I hope this was a great session for you guys also.

I hope you gained a lot of knowledge all your questions are clear. Have a great day. Have a great week coming ahead. Good night. Thank you, and thanks a lot. Thanks so much.

Yeah, like

## April 2023: Calendar Event Scheduling

Type: Video · Length: 74 min 56 s

### Lesson notes

Designs a Google Calendar style app: booking events, notifications and client-generated event IDs that can clash between users. It covers normalizing the many-to-many users and events data, recurring events as blueprints with instances, and a cron expression with binary search to jump to a date.

### Transcript

Hey folks. Nishik, Japanese easily. What is Japanese easily stand for? Siddhant day. Oh, that's okay. Good morning order.

Good morning. Good morning nishik. Nishik, sorry. ah You okay? It's a morning for you. So great.

so Sunday morning. We have all gathered together to know more about Friday Saturday. Oh, yeah, yesterday was kind of like a holiday it sorry. I thought that today must be a Sunday. Amandeep you also with us awesome. We are oh, by the way before we just start off.

Let me share this link in case you had any questions or you see the same questions come up here. This is the Slidell link that we usually take questions in but any any questions before we go for the slider ones nishay. Khamandi Sudan. How do you liking the course? We are adding more material to it. And also there are some.

I think quality issues in terms of audio. Those are being fixed towards the end to lessons are. You know, we found that there they're not up to the mark. That's the reason why basically LEDs only with us all the folks who have purchased it only we have access to it. And on top of that we are currently it's in the editing process, but more content is being added for fundamentals of design patterns. and solid principles and I think Google Calendar is also on the way that's been there for a while we are to we should parts of it.

But ha I asked you a question and then I only started answer so. Instead. Let me ask you. How's your day going? Mistake in fact, we were going to answer some of going sure. Yeah, it's the start of the study.

I woke up for today. Food why yeah. suddenly my sleep broke up today. Oh God, what's going on? Because I'm proud issue or something or you just I don't know. All right, no issues.

Then then it's fine as long as it sort of production. It's just If she's also it's okay audition the energy. Name Amy take that I mean fully massage. That it is a good day because you have one more day. Actually, there's some problem. I think this is from last time LD question from round two.

Let me just see. one Any question that you have in mind? Otherwise, we can have a look at this if it's worth it we pick it up. What is this Barbies are orchestration services? This is a very original problem. Or we took this last time.

Okay, so this is not dead so then slider let's you know ignore slider. Instead of whatever we have we can directly talk to each other or if you want to, you know, do tasting or personally message Zoom is always there. Let me open the Whiteboard. Is this something? On your mind that you would like to discuss or should I pick up a topic? which I think most of the folks who have the lowers and course want to talk about MSI one it's a nice name again.

God of Kulkarni hey, good morning. Good morning, sir. ready going any of us in college currently? Yeah last year last semester. This is your last name is still. Yeah, you're doing a Masters or your no?

No, that's just just Beat It. Oh, okay. Okay, that's nice. Is a you don't need to respond to this but displacement season already done. Yeah, yeah. I'm interning with an IT consultancy company political concerning company and I'm working as a data engineer.

Well, okay do data Engineers need low level design and no. No, I I want to permit to the field over to the backend back. And yes. But that is interesting that it was it was by chance. I got the I got the offer from from the founders itself. He I lay it was for the political consultancy rule, but I asked for ask them for the technical rule so they offered me this.

Okay, it's been around six to seven months. I'm interning there. Awesome, and this is a startup is it? Yeah, it's a startup. interesting fine, so guys because we we don't have a topic in mind. I think one of the things we can talk about is Google Calendar.

Okay, and it'll be interesting to talk about this because it actually has some design patterns which are really mentioned or they're even you know, thought of Okay, Google Calendar just to give you a rough idea. Maybe you already had a calendar event for this meet if for example I had a calendar event integrated from interview ready. Short digression if you go to your profile right now. And you say you know in Zoom classes. I now want to miss another Zoom class. You can integrative Google Calendar.

It takes only calendar permission. And at any time you can remove the talent access also in your Google apps. But the best thing about this is you don't miss any session you don't depend on the email which might go into spam all you know, you might forget it. So this is slightly better. You can always refuse and you know or not come for the class, but at least you'll get a reminder. okay, what we are going to try to do is we're going to look at the booking side.

Okay offer. Google calendar event. So again to show you how it looks like you're all familiar, but you have a booking on a particular day a particular time. This booking can be made recurring so I can go over here and say that you know, I want to make this a recurring event monthly on the third Saturday. It has a starter in time that is obvious. But what else is that?

folks can RSVP to it It has a description. It has certain metadata. Let's keep it at that right location. Should I get a notification or not? So notification is one thing. Let's note it down one by one book and event.

the event has notifications set up some metadata around it. Okay, if you have the capability to other CP You have the concept of recurring events. Once again, I'll just push this up so that my hand writing in which and start an end time is pretty obvious anything else that you can see in the calendar which Would be interesting that is the concept of notifications. Okay public private even Public or private event? Okay. Pretty explain this plus what is the public kind of private eventually?

Yeah from public even is an event where you put in a calendar, right? So people can see what event is that? But if you put a private event, whatever you name it though, people will see every other people see Okay. Okay, so there are some okay. So everyone can see your public events, but private events are just for you. So maybe just stand up is I don't know what to call a stand up.

It's like partly public. Partly private. Okay. Also with that comes sharing a calendar. Permissions I think in general this is around permissions. Okay.

Anything else that we have we can delete events. We can create event notes meeting. No taking notes, okay. where in this is the notes here so I'm not taking notes on if you create a event you create a event and you will have the option to have notes. That's good. Let me create an if you're not organizer here.

but if you add you add someone okay, let me and my wife and now now you save now you save the event you will have that option. Now you have the meeting you don't have you don't I think your plan. Okay, so maybe for yeah, that's actually really good. That's a really interesting. Point, you know you for a for a Premium plan. What are the things you get so you might have subscriptions?

right or plans like Google meet will let you record if you are on the Premium plan. Yeah, so, okay and you might have SSO you might have various other things if you can invite people to an event. So I think other CP will cover that but let's just note that down invite. users Okay, most important I think. show calendar events for a d range so I want to see all calendar events from for this week. So start time and time is given now show me all the events which have some sort of intersection or totally live within this range.

Okay, these are roughly the things which will make a Google Calendar. or any calendar app of which we see booking an event is quite important Okay, without that our app won't make won't have any sense notifications. I'm going to not pick up this time because Let us assume this is safe. Sending an email or sending a SMS is let us assume. There's a difference service, which does that metadata again. This doesn't matter much we can assume that the client.

Either takes a material and does something with it or if there are some specific things to be done. Like for example, I had a Google meet link. Okay. It seems like just a link just some text. So we let that go. RSVP let's see if we can pick this up.

Okay, because this is basically let me show you the challenge with artistry. Let's say I decline. and I then clicks it. This and following events all the events or just this. So that's the challenge. What you're effectively doing is you are doing an update.

on the Google Calendar Okay start. You can also. Change the metadata. From us I can make it India would make sense. But let's click on save it says this in following event. So updates can be recurring updates.

So this part is kind of here. Events and creating recording events is nothing you can delete recording events. Also, you can delete from a particular point also, so this will be the major challenge. Public and private events again. We are not looking into that because it is mainly got to do with permissions. I read a paper recently.

With Google uses for permission management authorization and authentication. It's called actually authorization only which is Zanzibar. Okay do check it out. So pretty useful paper. Zanzibar actually mean, I don't know but right. Why did Google name this?

Zanzibar please. Don't ask me. I'll just share this with you on the chat. Do any of you read white papers? They are actually quite nice Or does it take too long? not I'm only was that you Or mine was that you yeah you read back papers.

You know. It is useful. It is very dry, though. I also preferred reading logs on recently. I got to know that oh these guys actually give a lot of detail here. So Zanzibar is one you can check this out.

Okay, but let us assume that that is taken care of notes. I'm not sure exactly what happens here. Is it like you know, is it like metadata man? It's like, you know meeting notes user can like put notes. It's not summary you can type notes. And is it shared like a Google Talk is here.

I can share my screen and show it to you. sure, let us assume Bank weekly heat is like a Google doc, which is basically like a Metadata to that calendar event. It is linked. It is a Google doc only and okay. Okay, then perfect. Then ticket.

Let us assume that notes is very similar to like a location. You can set up a Google meet just like that. There's a link to notes. Okay. Okay, that's good plans. Again.

This is more on subscriptions we Won't be looking into this because it's not core to a Google Calendar thing. If you have free plan for everybody it is still fine. Google Calendar will still work SSO. Again. This is around authentication. So we are not going to look into this for now invite users to an event.

This is part of just creating an event so This comes here. You get up show calendar events for a date range. This is again important. Okay, so we have just looking at maybe one two. three four requirements four major requirements of which some of them are trivial, you know creating an event should be Easy as long as you know how to create recurring or normal events. And then getting the number of events.

Also, if you have figured out how to show recurring events should be easy. okay, so our major problem which is recurring events. Let's let's see how we can do that till now is everything making sense guys. I'll be on the same page. Okay. Okay, so the first thing we have to note is what are the We know the features all of these features are roughly around Services.

Okay, and there is only one service that I'm looking at right now, which is the booking service. You might think of actors also in some cases actors make sense. Like I want to book a calendar event. I want to do something else, but here I'm looking at it from the server side. There's a booking service. And then a set of apis that we must expose.

to meet these functionalities so firstly let's look at the API that we need for booking an event. So that is create. event and then you can have the details that you need for the event. So do you send the ID or should the backend system generate an ID and give it back to you? What would be this could be a interesting interview question also, what do you think should be send an ID of the event? Could be a random event random number from the system so that it does not cool.

Like it can be a primary ID for identifying. Okay, but who would you like to generate this? ID. Would you like the server to generate it or would you like the client to generate it? The server that the Collision is very less. Okay.

Anyone who thinks we should generate it using the client? There's some benefits and some drawbacks of both one is if you have the server generated, usually it makes sense because if us. If event is created then only then is it assigned an ID. Another thing is the client doesn't need to remember, you know, that this event has this ID it becomes it becomes simple to some extent. It doesn't need to see that, you know, are there any clashes between ideas you created an ID? Let's say one two, three and somebody else and the same time created the same ID 123 both of you are trying to clash with the same event.

So what if this overrides right? What if it says get? So there are some problems here if the client creates an event, there's some benefits also of the client creating an event if it says create ID one two, three event, and then it again, you know, I didn't get acknowledgment. So it says create one two, three again. The server knows that the same event has already been created. So I don't need to recreate it.

Okay, so there is a sense of identity here. If the client is sending events. By itself, the idea is by itself. If the client is not sending they went IDs you might have duplication of the same event. Because it has start time and end time is not unique enough metadata is not unique enough. Nothing is unique except IDs.

Okay. So what would you choose? for Google Calendar Would you be okay with duplicate events being created or would you be okay with? Yeah, what religious would you go for a server side event, which basically means that there will be no duplicates created. But how would you avoid Clash? Things are client.

So that I create the same idea. So if that happens do we override? the event because exactly because of that because the problem let's say I created a meeting and invited to people and somebody else created a meeting and give the same ID. So my meeting will be overwritten by that. right So my meeting will be deleted and that meeting you created. you could update you could also say that I already have This event the one that you're trying to create I already have it is just send it 200 okay or two or four no content.

There is one problem one fundamental and I think okay. Let's let's talk about this. Yeah, this would be a problem, right? The same ID was independently created by two clients. How likely is this I think one thing can be can create its uniqueness and let's say by and do let's say if user gives an ID. I in the system.

I store ID underscore the email that will be and that we know we can always check for duplication using that. Okay. So you are attaching user ID to this and then saying that you know, this is another random. A unique team. So whenever I send it to the server the server says that yeah sure because for this user this key is going to be unique. Yeah, let us.

Okay now, I'll push it a little more which will stop making sense very soon, which is what if there is a clash of this event and another user event that the same user at created. So on Friday you created an event one two, three and on Saturday also. The same event got created one two, three the same idea on the client. Let's just say that the chance of this is really low. Yeah, because that was a smart idea by the way Bank you added user ID along with that you could have added timestamp also, thank you. Yeah, which kind of finishes of the problem Yeah, oh timestamp of creating this request.

Okay, you have a look at snowflake. if you guys get the time snowflake is a an ID generator, so please actually a company but they have a they have a ID generator, but it's a blog post or a white paper. I'm not really sure. This must be it. Yeah. Simple Wikipedia link.

I read it from here makes a lot of sense. I've read a Blog also from Twitter, I think. The idea is pretty simple. Just like Mike said start assigning attributes to the IDS so that there is no chance of conflict. So what they do is they and machine IDs they add the Unix time. So here is the machine idea right Unix time is also there and then they have something else also, okay.

Last 12 it's the code to also. It's not written in stone that you have to use this but machine ID and timestamp is very useful because if two IDs have the same timestamp at least they are differentiated by machine. So you can you know machine IDs randomly assigned. So anyone will come on top, but that's okay. Same timestamp. You are you're just making sure that there's no Collision.

But in times then there is one problem, right? How will you know that let's say I'm updating the event how will you know that this event exists from before from the ID? If you're updating the event, let's say I'm yeah, let's say I created the event on Friday and the timestamp was a fighting and I'm getting a rental Monday. The timestamp has changed. How would I know that existing event already exists when you created the event on Friday the timestamp of Friday local time. It was sent in the I and so when you're making it okay to that same event that same event.

Yeah. so A little bit of a digression but we are we are now back. We know that little bit around IDs. Should you go for sorry we were creating an event. and so the likelihood of two calendar events having the same IDs zero now you are going to create unique IDs every time. Okay, that's great.

Okay create event is just this you have a bunch of parameters start time in time metadata and an idea you can create this on the server also. There's no problem. You will have duplicate events then. Okay, this is one part. What else? Notifications metadata, we don't look into that RSVP is just update.

So the idea of a recurring event is possible here. Okay show calendar events for a date range. So showing calendar events will have I'm sorry. I need to get rid of this part. Yeah. Get events.

for a dating so start time And anytime apologies for the handwriting my friend is slipping a little bit. But if you have any doubts, let me know get events start time and time. It's that simple and API for a particular user. So let's add the user also. We can also assume that all of these apis take a user who is the user who's doing the action? Because you want to authenticate and authorize them.

Okay. What else are we missing any API? But from recurring events invite users to an event that is part of booking only. Update an event, okay. Take an event you can add users. Or creating an event also would have the set of users yourself.

Okay. Anything about an event can be updated the name the description anything? The only thing is that the ID is going to remain the same. Anything else that we can see here? We are assuming that the Reckoning type of event is mentioned by creating an event and if you are going to update a record event, that is also going to be visible through ID. Okay, just three simple apis.

I've been agreement here or do you see any other apis also? Is everyone on the same page here? Awesome, okay. Anyone having any doubt? any questions Fine. Okay, so we can create events get events and update events.

None of these are possible. If you are not thinking about how are you going to handle recording events also because you can go ahead and create a simple event. You can get simple events. And update simple events. Those are trivial, right? All you're doing is you have a database I'll just Show you what that will mean.

It's an ID Okay, and this will be the event data. And you will have a start time and end time. so start and end and if I say create an event, this is going to be a single entry. In this table, if I say get me all the events from a start time to an end time. All you have to do is go to the First Column of start time right you can have index on top of it and you can say get me all the events starting in this range. So I have given you a range of start time.

and end time here you're going to get all the events which have in between relation of start and in. And then you're just going to return that to the client right for this user start in an events. Get me those. Is it making sense guys? There's one challenge here, but is it making sense till now? okay one the small challenge here is that hey, you know God of created the event but mayank was invited Avinash was invited right so how do you Take the users who have been invited, but who I'm not created.

So you need some sort of participant information here. Okay. Why am I going for this? Why didn't I just store the number of participants here? You have basically multiple options one is store the participants for each event in the event table. Another one is you can have a user table which says that which all events.

Are they joining? one column of events and finally, you have a third option which I want to hear from you what that is, so What would make more sense? option money to use that which user ID related to event ID Okay. so would that be option one two or three? or third one, okay. Why would you go for that?

Would you then so from this table? You can easily pitch which users per user which events even to or for an event which were the users. Okay, yeah. you can but I mean so it to clarify my accusing that I want to find out. Which users belong to a particular event, so why shouldn't we go for this? I don't even need to do some sort of inner join or anything.

I can just say that for this event. All of these are the parts. They'll not get their data. You'll not get their data, but you you need that. So let's look at the access pattern here. We are saying that get events for a particular user.

Which which are the which are the participants in that event to know you want you just don't want the number you want. Let's say the email ID or something like that. Okay. Okay. You want to email IDs of these users? So what if I store the user IDs or what if I store the user email IDs?

Yeah, I think you're on the right track. Anyone else also wants to try what's what's wrong with storing. Participant information or in the table, but it's not wrong as such. Okay. Shaman is saying normalization or duplicacy. Okay.

Normalization is a problem. Yeah, but or duplication yes, I agree. Why would the normalized views or duplicate C via problem? Firstly where is the duplication right for one event? You have all the parts Sprints who belong to that? Event, so there is no duplication.

It is not normalized. Correct. Normalize meaning that one column or rather one rule should have only one entry. for a particular column Okay, here we are storing and array of users. Why would normalization help us here? Take a minute think this through this might help.

We have a situation where multiple users can join the same event. And multiple events can be joined by one user. So basically an M cross n relationship. Okay. one disadvantage of actually storing Data like this or like this? Vinash got off my s***.

I'm calling out names now. But thanks for every user. You don't every user doesn't join the meeting. So you have a lot of columns empty. Every user does not join the meeting. So you have a lot of columns empty lot of rows empty.

Sorry the road a lot of those empty where here in the first option. Second one second. One second one. Okay, they don't join the Right, but they belong to them they belong I mean they should see them and if they say he, you know, give me the events from this timestamp to this timestamp, then we should be able to give it to them. Okay, here's an interesting thing if you have think of it like a graph. In a graph you have a user and you have any Bank?

And you have like many many events. And you have many many users. These users are linked to events the same user might be part of multiple events the same event might be having multiple users. Okay. What would be the best way to represent this graph is a question depending on what are the access patterns that you have? So, how are you going to use this graph?

I want to find out. All the events that a person that a user goes to but sometimes I also want all the users who are for a particular event. So that both types of queries here. I can store. If there was only one type of query option to then it would make sense to store all events here. In the user table, I'll tell you why it may not make total sense also, but yeah it it would be a valid argument.

if the only type of query I would make is get me all the participants for a event then storing it here would make sense. But because I have both types of queries firstly. so I have a complex or sis patterns But I just say two-way access packets here. Both sides of the relationship. I have this, you know access that is needed. The second thing is there may be some information to be stored in the relation itself.

When did the person join them? Are they saying yes to the event? Is there some information that is to be stored in the relation itself? Is this making sense? So if I have this table, then I can store. that user 123 joined event 456 at timestamp Monday The other person on Monday 10 they were very punctual the other person joined the stand up at 10 or 5.

If I really want to store this I can store it but it won't make sense for me to store it in the events table nor in in participants in this column. It is a thing that is particular to a relation. Okay, I can also have a full I can have a state over here join. You know Skip meeting. All that stuff can be stored here. So.

if there is any relation information to store then I can go purpose. This is two way. access pattern and finally, what else is that? If you're going to store a lot of data in one column. Effectively storing like multiple rows in a single row, right? The problem is a you might be storing irrelevant data.

50 years ago. I was part of an event or not even 50 years like Two months ago. I was part of an event. Do I need it in my user table column? No. I don't need it.

So that is a problem irrelevant data might be stored and it just makes the table bloated. It makes it pretty big. You don't always need participant information when you are asking for a user table a person wants to make a profile update, right? They want to change their profile picture. Let's say so they want to change the url of the profile picture. Now.

You took a lock on the road. Everybody who's waiting for, you know, making a change to the event will now wait on that user till they have made a profile picture change. Is this making sense guys? You might have contention in data. You might have multiple problems if you keep. unnecessary data in the same place Okay, so we went for option number three, which was you know a nice denormalized view.

Of user ID and event ID now, you can tell who all are the parts spends also for an event great job done. Not really. We now have a way to create update and get simple events not recurring months. Simple events. Let's start times and times clearly defined you can connect with all the users who belong to that event, you know you so let me let me take the let me take the exact query get events for a particular user start time and time. I'm going to come to the event table.

I'm going to say that give me all the events. For this user right? So the query will be something like select event ID from participants this is the table number three, okay. inner join What is the name should we name it event? So I'll just on event.id equal to party This is called give it an earliest p. dot event ID okay what this has done right now is the same event ID will be sent back where this is the important clause.

P dot user ID equal to whatever input you give whichever user is actually making this query. so user okay, and of course you can have some more also and event dot timestamp start time greater than You give an input in the API of start time and time we will start. and event Dot start time. less than the input and roughly this will be the query. We're all on the same page guys. This is for a simple event.

No recurrence nothing. This is how you will be modeling the DB and the queries. But you should be able to get all events that. belong to a particular user Okay, great. So. Let's now go for the complex one, which is Reckoning events.

Can you think of the problems with the recurring event before we go to a solution? What would be the possible issues? You have an event. Now there is a concept of recurring event though you have let's say event ID one. This is on a Friday. At 9:00 am.

You want to recording event? Let's say daily recording. the different types of recording monthly and so on. If you want daily, then this will be two. Saturday 9:00 am At same time the time is kept the same. What are the problems how do you make this possible?

Let's start with this simple ones. Let's go for how can you even handle how much Gap you should keep. Monthly daily yearly. Twice or maybe first Friday of every month. Like we have the zoom class. I clearly tell Google Calendar have it on the third Saturday of every month you can see here.

This is the third Saturday first 850. So how does Google Calendar do this? What can it use? for this time Delta calculator the core part of computer science Anyone worked on a recurring job? Non-job Channel. Yeah, perfect.

so prawn jobs would work Specifically here, what will you say you call it a chronic expression Maybe? Two days later every day every five minutes like that. You can set things up. Google can make it more, you know finite it can say that I'll only allow To mention the day Sunday Saturday Monday daily, maybe monthly and so on so subset of The Chronic Expressions. I'll allow That's fine. So you can store it as a chronic special.

Okay, we have found a way to. Express the Delta between two recurring events Now, how would you store this? this six of us and let us say that we are in a team. We are designing Google Calendar. How do we do this? We get a requirement that you know people need recording events.

They can't think every time K over. Let me create another event to stand up happens every day. This is too tedious. But sometimes somebody Skips a stand up some stand-up is canceled right some holiday came up. So how do you allow a person to create an event which is acting this is the engineering requirement we get. How do we go about doing this what kind of data structure will use for this?

That sits only on week this so this is Thursday. Any ideas Mike Ashman? Okay, hashmah. So how what would you store in the hash mark as a key? And I think he will be the meeting ID and value will be let's say Map of where list of which days or something like that? Okay, so key will be the event ID which event ID this one or this one or this one?

Okay. When you mentioned would be like a like a list. Okay, this is another interesting. idea But it will not store but let's say I don't want to do a first third Friday that would. something of so on Friday you want to cancel it? Yeah, okay, it popped out in the list.

It could be popped out of the list. Okay? English yes hosting link list for searching Link, I mean this is a sting like list for this. I think yeah, we are just looking at English. Is it possible? Okay, I'll give you another problem.

Because life is too easy. If I say daily. Yeah on a weekday daily. I want this when am I going to stop? I'm going to stop. Yeah, and you're in okay.

Why you're in if I want to see? One yeah. Okay. Yeah. Okay. I actually get your point.

That's a good point man. You're saying that if I hit the API and I say that you know. On 2020 seven, what are the days that I'll be busy? Then? Google will be like, let's see if you survive that long. They'll be more like, you know, my API goes up to 2024 now on one year Max.

Yeah, so that would be a reasonable limitation to have. how long do you want to book the calendar, but I can show you this bet I have with a friend of mine that I will because I'm a I have set up a Google Calendar reminder for 50 years later. We said that you are I told him his health choices are not good. So I said I'll live longer and I'll be fitter 50 years later when we meet. I'll tell you who's the king. So Google has actually stored that event.

Okay. So there's a problem. It seems like Google does not care about. the timestamp when I mean, it doesn't give you a you know, you can store only up to this time a limited. Yeah, there's no upper limit. So the whole point of if that happens then you know storing these recording events is just not an option.

It's infinite. Or it is so large that it will be infeasible to store that much in memory. So all sorts of data structures, which are storing the events may not work instead. These data structures have to start storing something else. What could that be? Linked to the original level.

Yeah, that's a good idea. Okay lead to the original event. Okay. Okay. So there's this event. Yeah.

but if I say that let's say I go five years in the future. I press the right button on Google Calendar a lot and I say that get me the events from this data this day. There are some recording events, which will pop in here. Should pop in here. How do I get these events? What about changing the states in?

After the daily job is done. which state changing the like the event IDM might be the same but country do changing the state like it's Friday event. Huh? So next event is on Monday. Same we are updating the same event on and on. So let's say there is a event on just to class understand the shake your using that let's say there's a event on Thursday.

I said Friday being Friday. Okay. Okay, and then Monday if I say that updated change the description from Monday onwards we are having a new beginning. Is that the question? Oh, I'm sorry. I probably didn't understand.

Could you describe that again? Even I don't understand what I'm saying. That's I think I think it's a doubly linked list. Okay, doubling list. Okay, what would that W English content? Actually, it could work.

Yeah. Okay. So why I'm saying a WWE because let's say you create a recurring event, right? And then if you want to update that event you both get the option update this event update this and following events update all events. Yeah. So then the direction is buy Direction you want to go this direction something you want to put this direction so still events so events which are already finished.

Yeah this all events. Huh? Okay, A W English the problem again becomes that you know if you have had some past events. Which are one year ago? Do you want to make updates to all of them? Maybe you had 300 such events?

Because happening every day every day. You going to the gym, let's say you set up as a reminder. So everyday used to go to the gym. Now. You said many update Kar do Mera location change. Okay.

I'm now in Hyderabad. So what happens now you go and make 300 updates on the back. you could but can there be something a little more efficient? think in terms of Uh, what is the relation between a class and an object? Let's look at an event and then instance of an event in the same way. If you look at this.

first Thursday 9am the details of the event are not very important, but the blueprint is quite important. what we are seeing is here's the blueprint on the first instance This is a metadata, which is not going to change. This is the timestamp. And there is a unique ID that we can assign to this blueprint. Okay. The first time is going to be on Thursday.

And there is no end time. That's all I did. Okay. I did not put a link list point to your saying the Friday could be here any. When five years later I say give me the events which are from our timestamp start to end. I'm going to be looking at recording events.

Which extend into infinity or at least five years from now? And I'm going to be picking up. I'm going to be basically generating the events in the server. And returning them as a response. Okay generating them how because I'm going to see that. Oh, there's a daily event.

Which stretches to Infinity? So in this time range, when are those daily events occurring? Figure that out or figure out the first daily event which occurs and the others you can generate by using a difference right The Chronic expression. I'll take the example. This was Thursday right starting from let's say So today's Saturday, right? Let's say it's starting from Saturday.

So it went on five years later again. It should be happening daily. So I say what is the Delta between two events one day? Okay. I got that. What is the first event that is occurring in this date range?

We have to find that out somehow. Okay, if you are able to find that out is it is it true that we can generate the events and return it to the client from the server? But won't you see when you see a calendar? They are recurring events. Are they not actually events or they are just a placeholder. if they were actually events, then you would need a tremendous amount of memory and time for any small update that you would make would result in.

of hundreds of updates not only hundreds of updates. If you say, you know, you want to add a few more users. Then all of those events would have individual all of those users being added to them. That would require thousands of the participant table. Yeah, but when you have recurring events, you can go to any of the day and just you have the meat link. You can and that yeah that instant.

Absolutely you do you have the meetings being generated automatically. Yeah. but there's a problem like If you say give me the meeting link for a recurring event, does it change? For every like any event. Maybe not. I think the same thing it may not even generated too far in the future.

right So, why are we going for this? Why? Why aren't we just you know, like you said Mike it makes life easy. If you can just create them. It's the problem. Is that only events to create.

And it might take logs on events that other people are trying to update. It's it's going to cost you a lot memory processing everything. So having a blueprint will be easier. The the events then become instances of this blueprint. There's still a challenge because but we'll get to that in a minute. Shaman is saying trees because root will be the parent event.

even in a tree the problem is you have to store that. And whenever you're making any update, you still have to make the updates to those events. If I say from today onwards, you know instead of having a Google meet link. I'll add a zoom calendar link. hundreds of events to get updated send a notification to all these folks. Will I send a hundred notifications?

So just one notifications saying that you know, this entire recurrence has been updated. one Okay, so great. We have this in mind. Which means? At a high level. I'm not writing the code for this but at a high level we should be able to create events.

And we should be able to get events, but there is one big challenge which is still the meaning. How do you update a recurring event? Creating a recurring event ticket, you know, I create a blueprint. Which does my job anytime a person says get me they went from timestamp to timestamp. I'm going to recreate those event instances for that. date range So this part?

Is let's say you have to still write the code for this but it is understood. What about update event. How do you update everything? let's say you have an event here which says it starts on a Thursday. and 9 am And you know you have some description. And you have a set of users also that you're inviting.

Now you change this slightly you say? Make it 10 am from Tomorrow onwards. Everyone is sleepy. Like resume class, you know, what if we make it 10 am then the same thing will happen right? Somehow Google needs to know that this has changed from Friday. This recording event has changed and moving forward.

It's always going to be 108. If you make a change to the blueprint, then the original events all change. So maybe that is not. allowed what do you need to do? You can't store all events because this might be Infinity long. So you probably are going to be storing a blueprint.

We are nearly there. We are. Very close. What would you do to make another? Create another play. Yes, well, that's correct.

You can create another blueprint. So you have a blueprint here which has some sort of there was a start time for every blueprint. We now realize that then maybe end also to everybody. So you can end it here. This would be the last event you can. You know if there's an end time.

Then you set it over here. This kills the blueprint. Now if you do a get events for some date range in future, then this blueprint will no longer work. You can now create a new blueprint which says it starts on Friday. And it goes on till Infinity. So if you do a get events in future you get these recording events.

That's the basic idea every time there's an update. You create a new blueprint and you update the existing blueprint. One interesting thing is if it's happening monthly. And you're seeing weekly so you do a get events for a particular week. And maybe it's happening on the first of every week. You did a great event for second to fifth.

You should not see any event in there. This this has more to do with how do you generate the events? Logically, you have to see the start time. And then, you know, let's talk about that in a minute. But is this part making sense? Just ignore this part get events.

Is this part making sense that you have to split it into two blueprints? Okay, awesome. If you split it into two blueprints, you can update the description. You can update users you can update time. Everything is possible. Okay, sometimes you know there is just one day when I want to say let's have it at 10 in you know, Friday here.

We should all the team should meet together at 10 am every other day. I wanted a nine year. So you're going like this. This was also 9mm. You came along and you said just this event, please just change this. What will you do here?

There is a blueprint which is generating events. got all of you know all of the events for this recurrence, but I want only one update in that. records to to explain this with an example I come here. Which is just update this event, right if I go over here. and I say Dev stand up I want to change this event and I do something let's say now. Look at this.

It says just this event. Design following events. We have cracked we create a new blueprint. What about this? Again, we are pretty close. This actually is pretty simple.

Anything of what's going to happen if there is an update? for a single instance learning the blueprint and then getting that yeah. Take this blueprint. Make it end here. Start a new blueprint from here the same blueprint the Clone. And you hit the nail on the head clone is exactly the word we are looking at.

It start a new blueprint from here. Only the start time changed and this one is the updated event. So will you store what will you store? instead of blueprint with a single limit start time and time will be here. It so three blueprints got created one was a clone of the original and one was a new. blueprint the design pattern that you're looking for.

to make this happen It's called prototype. It's a creational design pattern. This any with the chapter is coming in the low level design course, it'll be edited and animated but prototype is basically the design pattern which will help you create a clone efficiently. You're also seeing that when there's an update. Usually you don't send everything. You don't say that you know, this is the use of this is the Metadata, you just send the things that need to be updated and those get added so you might think of a builder also there.

So to create the pressure blueprint. Builder something that you I'm just mentioning the design patterns will be talking about them in the lesson also, and on top of that, of course, you can go and read about them yourself. So it's always good to have multiple sources. Okay, so is this part making sense? We can now update events. Update recurring events also.

Any drawback you see here any problem? This is one final piece to the puzzle. I said that let's go five years in the future and let us say from second to fifth of April 2024. I want to find Reckoning events. Okay, and this is I have a recording event which is not daily but monthly. But let me let me make it more interesting.

Let us say from second to 9th I have this event. And there is a weekly event that I have. Okay, which is occurring on the first April? 8th April and plus 7. What do we get 15 people? I have asked for second to 9th April.

How do we generate these events on the fly to get them on the client? Is this making sense guys? Basically, I went into the future one year I hit the right button on Google Calendar a lot. Then I came to this week second to ninth April. I then said. Tell me all the events that I have here.

So the server should go and pick up which event from from these three. wait one eight one, so The eighth event should be picked up. How does the server do that? Efficiently? There might be hundreds of events go through if I linearly start generating an event still 2024 that will be a lot of events that have to create again. This is not very efficient.

So in terms of efficiency what we're going to do here, how do you go to 80 April in one go or you know quickly? You're currently on eighth. April 15th April how do you get to 8 April quickly? If you do a day, this is not a daily event. It's a weekly event. So maybe from 15th year jumping one by one.

Seven Days Seven Days Seven Days 365 by 7 is going to be 52 iterations. If I push it to the Future, it'll be hundreds of it wishes. Can you reduce that? If you buy any research, yeah binary search would help. You have a crown expression currently. Maybe it's not satisfying it 15 day April.

You see the next point that you can go to. And then a binary search. Are you talking about exponential jumping? Is that also Bank what you're talking about? Here so in the we know the such space like yeah, you know the search space then we can we can shorten our search space By by the query that user has done. right, so you are at this starting point.

And you have to get to this. range Which is the query range query starting point again? Now you can jump at a rate of seven. All you can start jumping at 7 14 28 and so on till you Either overshoot or hit the query range. Once you're in the query range, you know that, you know, you have to you have to just give the events from here go backwards and go forwards. again, I'm leaving a lot of this to I'm not looking at the implementation here.

But once you're here, what we did is we talked about. binary search or exponential but you went ahead. at a rate of two four eight sixteen the reason I'm being this up again is because in low level design some sort of algorithm also helps especially for a little bit on the senior position. You have to make certain things efficient. You could store it in a hash map. Right all the calendar events.

We didn't choose that we went for a blueprint because that's more efficient. You could go linearly, but we didn't do that we did by research because that's more efficient. So overall this would be how you would Find the events that are needed for a particular range. Is this making sense guys? I I know I breathe through it very quickly, but overall is it making sense? Yeah.

Okay, okay. They shake my aunt have said yes. Okay, great. Anyone with any doubt siddhant Suraj any doubts any questions? I joined a little late. So I'm like still trying to catch up.

Okay. Okay, you get the recording of this session which could help? You know, maybe some things are out of context, or maybe we have already touched on that little earlier. So Siddhant what about you? Is it making sense? Hunt is He's too embarrassed to tell me.

Directly that you know, what were you talking about? What events? Unable to unmute it's clear for me. Okay, great. Great. Awesome guys any any questions that you have that we should pick up right now.

Like I said, it will be added to the to the video lessons also with probably better editing but the core concept of Google Calendar is not storing the events or thinking about you know how you're going to get participants here. The the core problem is the records. If you can describe that and if you can break that. Into something like, you know, the relationship between objects and classes that really helps. You thought of a blueprint so that is one level higher. Also, when you're you know coming up with trade-offs, there are certain design trade-offs that we made here.

We went for option number three, all of us agreed that option number three is the best but being able to iterate or articulate why you're going for that is again going to help. Then there are some API design decisions that we might end up making here. The API design is very flimsy. I did not dive into it, but there are ways in which you can describe. Why is this parameter needed? What exactly am I intending to do with either passing an idea or not passing an ID?

Is a metadata or the start time and time, you know, how are you going to send that? These are considerations that you want to look into? that you want to You know deep dive into. and finally, of course, if you know certain design patterns it helps the logic is Hard to get but if you are able to break down the problem and then certain parts of logic become obvious. So if you already know about the relationships between the objects and classes and you're able to extend that if you're able to use certain design patterns to make your life easier. Go ahead do it.

That was a lot of you know Gan over here, but it actually helps if you try to do it without design patterns you will. Take a lot longer and you'll make many more mistakes than you would with design patterns. Because I have tried it. So I know it without design patterns it gets messed up. Okay. Okay, folks.

Let's then catch up next time. It was awesome speaking to you about. A rather complex problem of Google Calendar, and it's good to have you all, you know here discussing and you came up with some points that I didn't think of. So, thank you for that. Thanks. Again.

Thanks nishik. Thanks man. God of And Suraj you all were very participative. So, thank you. Have a great day. Take care.

Bye. You right. Thank you. you awesome

## May 2023: Stock Trading App like Zerodha

Type: Video · Length: 159 min 46 s

### Lesson notes

Designs a stock trading app like Zerodha, after a request to code in class. It covers the class diagram with users, orders, order types, stocks and portfolio, where prices come from, the Observer pattern for status updates, and then translating the design into code.

### Transcript

Hello. Can you hear me? Yes, I'm actually here here's. Okay, let me test my headphone. Also, just one more minute. Sure.

They now can you hear me? Yes with the help of headphone also you thank you. so did you post in here for questions? No, I'm pasting the slider link here and you can please or you can tell me your questions here except or you can put it in the chat or maybe in the slide. Yes. Page look hey Adam.

How's your day going? you hey. Today's I think Labor Day. Yeah. Yes. Because you hello we have.

We have seen each other earlier. It's great to see. Okay, I don't will be. You know handling the the talk I'll probably need to drop off I'm with family today. My six month old son who's now you need some help. So all the best folks and have a great one.

See you bye-bye. And what can you please give me the whole strings? Yes. I think I have have a the two profile pictures one that you are very yeah fine. Awesome. Awesome.

Okay folks. See you. Bye. Okay, he need GK. oh you Will wait for two more one more minute now. We'll take till seven.

And then probably we can start. Pay cash. I think we all we should start and people will join more. It's 7pm. Guys, I'm sharing a slider link here in the chat. Yeah, if you want to have any question right now also you can tell me straight away up front.

here gosh Hello. Hi sunny. Hey. Yeah, right. I think we should start now. Good.

I've pasted a slider link. Nobody has posted any questions there so we can probably we can have it here only if you guys have any questions or we can This one question that actually came to us which said that we haven't quoted in a live Zoom session so they wanted us to code. So this is one question which has come to us. Hey nilish, if you guys have any questions possible, we can discuss that. anyone here is the sliding. Whatever questions you have, please post there are probably ask right away.

Or what should we discussed today? Any agenda in your head or we should think of any system and Design it. Just I have one links are being can do a logger system like a lady for. Okay. Okay. So actually Locker is a chapter that is coming really soon.

Okay, you can wait for that also, because it's already recorded and it's shot like edited also, so we are going to upload it soon cool. Probably we said that Okay. So can we take any system? Then and design it all the first movie and design it. Yeah, anyone. System that you know messed your son.

But they noted anything like the moisture are the seat that engineering. I can't hear on my life. you Okay, so I myself is taking anything probably we can design. So let's pick few options Instagram is one option. We can design Instagram or we can design zero now. So you know that is very hot these days.

I think it has been asked quite a few places you can design, you know, or if you have any other suggestion in your head we can discuss that. so I think you Okay, everyone up 40. And basically it will cover all the stock or the real time application crypto applications. Also Point dcx Finance. Zerodha is the grow is there and what all up stocks is there. So I think we can take that.

Okay, cool. I think we have got but I had request small request just like yeah. Hey man. Yeah, listen. So after we designed the class diagram, can we take like 10 minutes to also see how we can translate into code and yeah, well interview what will be us will be asked to run the yeah. Yeah.

So I think you are the one who raised this query previously, right? Yeah. So today in the beginning I mentioned I think you joined a bit later. So I said that today will be coding for sure because we got this query. I didn't know who raised this. But yeah, thank you for calling me we could today so it might be a bit long session, but we'll surely could it okay.

Good, so I think we should start now and wherever you guys would have doubts. You can very easily ask or raise. I'll share my screen. We should start discussing with the use case diagram, but probably share my iPad just give me the setting to make iPad The Host. Sorry for that. Okay.

Yeah, I think I'm the host not. Yes, I hope you guys are able to see it now. Yes. Okay, cool, so we'll start from very Basics, okay And everyone can join in chime in whatever the thing and we'll take small feature will not mean we might not you know, take it from end to end. But yeah, we pick the main functionalities of 0. Okay.

This is what I am thinking. Okay, let's start with. What what would be the one main actor the first actor which I just pops in my mind after hearing. The question is user and second would be zero the server. Like these two are popping in my head just after listening the question, okay? So probably we can have first to use it.

Okay. So as far as I have seen stock market applications real-time applications first is that we have our own wish list like watchlist, which we see where and we are able to see all those stock prices. You can say it watch list or whichever stocks, you know you have on the screen their prices are changing, right? So this is one that okay their prices are changing. So we can reduce stock prices. This is one.

This should be one like we can do stock prices, right everyone agree with this. That a user can view stock prices. Yes. Yeah, this is the main thing one of the main thing right second which you know straight away pops without much thinking that okay. We can place orders, right? so we can place order now order.

Could you buy type or cell type? It could be any but of course it's ordered and order could be of type Market also and limit also and there are few more order types. Okay, which I have used just market and limit order like men have not placed any other order types, so probably let's go with market and limit But there are a few more. I know there are few more types of orders. I don't know that so maybe we can skip those. But we can go ahead with this.

Okay this two. third is every user has a portfolio, right? Wherein is able to see all the stocks which he has purchased, right? So a user has a portfolio. And the user can also search for the search for the stock. Yeah search for the stock, right?

Yeah. Yes. It is also there. so search stop but that will cover get covered in stock prices, right? Oh actually again this could be taken into ways. I feel first this like I don't know who he was I was seeing in the iPad.

So I don't know who said searching stocks. So this could be two ways. So as far as I have seen, you know, there's a functionality. There's a search bar on the top wherein you type this stock name, and then this talk comes up and then you selected and sickness seeing the stock prices. So whatever stocks are there in your list. In front of you you are able to see all those prices or maybe probably click on them and then see more information about that stock.

So just what you can add to the wishlist. Yes. Yes. So this can be taken into or three ways, depending on how you have your conversation with the interviewer, right? What is what is you think of per user? Okay, stop prices there tasting order is there.

Portfolio is that searching of stocks and profile? Sorry user profile user profile is also something. Yeah, we should mention it. But I think this would not be poor to zerodha. I personally feel why because Mutual mutual funds and all. Mutual funds that is I think in coins app, right?

I'm good. Yes. Yeah that is also we can have mutual funds also, but again mutual funds can also be treated like stocks only. So I think that can be covered in stocks. But yeah. Mutual funds we can have this should be pretty much right.

I can't think of anything more. Okay. So let's go to this second only yes and packing of from the basically Alliance perspective tracking for irregularities the user history like for like every person like You need to see past orders. Yeah, I passed orders and all those. so track pause orders and your definitely This is also one of the thing. Yes.

a good one Okay user like using authentication like the kyc is required. And yeah, that is also required but I think that would be too much. Yeah for now. Yeah, we might not be able to put this much also actually I'm thinking but let's see you so I don't want yeah. So let's say this comes in interview and we list like like a use interviewer will tell us or we will only ask that what you want. Okay.

Yes. So let's take it to us. Okay. Supposedly you are my interview and I'm the interview. Let's play like this. Okay.

Now you give me the question here designs of fun. So now we have come up with all these use cases and you also know interviewer also know that this can't be coded in one hour. It's a one R exercise generally. So what will happen we might list on all the use cases. We list on all the use cases whichever could be with discussion with the interval. But of course the interviewer has to pick up new features from this that okay.

I want to see how do you manage placing orders? How do you manage stock prices? And how do you manage portfolio build these three features for me build class diagram because this could be too late or somebody else could say build such functionality for me stock prices for me and portfolio fun. This would be understood. So basically we will proceed first that we will list on all the requirements and then have interviewed that yeah, like because they want to he himself will say honestly from my experience from whatever I have seen himself will say he okay. Let's cut it down to three or four features build.

Let's take these four features and we'll talk about this. We'll build the class diagram and you know, we'll go and hold it. Okay, because generally this activity of low level design is for one hour if it extends more than one hour then that thing goes to machine coding around. Okay, so that is machine code is not design. Okay. So this is once let's go for in zero the servers.

Okay, as far just after listening about zero the server whatever your first of the functionality or the use cases which comes to my head is first is authenticating which the one of the guys said that okay, you know that would be authenticating or would be you know, taking some sort of documentation and authenticating the user or anything. It will maintain the list of users in its database, right? So it will basically in simple words users list it will have. Make sense to everyone. Yes. Yeah.

Second thing I feel is there should be notifications that would be sent by zero the server like whenever I place a order. I receive a notification when my order is succeeded. I receive a notification thing that you know, your order has been fully executed and if my order is failed. So then also I receive a notification if I place a buy order and it has failed so it might be fail because of insufficient balance by generally get a notification saying in sufficient balance and if I generally place a sell order which has failed, I generally receive that okay, you do not have the desired stocks in your account. This is from my experience. So notifications could be other that.

It sends notifications. right since notifications Okay, third thing. It actually executes the order. We can place the order but see the Execute order now beat Market order beat limit order. From what I feel is Market order there would be some sort of apis exposed by stockmore Stock Exchange. Like there will be three entities first would be Stock Exchange.

And this could be an sc or BSE. Right, then there would be broker Brokers are zero that which we are building. And there would be user so there would be three entities right now. We're not constructing this but we are thinking about this flow. Right? So what I personally think is that erase your BSE might have exposed some apis which you know would be using to you know, Place orders, but that is more of a conversation from my high level perspective that how it would be happening right not from a low level perspective.

so but definitely interior can have that discussion also, right? So one is executed executes the order so, you know, the server would be executing the order. We'll see. How will Execute order but yeah it executes right now. I just barely useless. What else do you guys think?

You know, that would be doing what is dating? We executioners one. So one person said searching stocks. So it would be enabling search for us also, right? What do you guys think? Like it would be maintaining something?

Right? So we when we type something the results come right so it would so it enables searching. It would be maintaining some stock list and it would be updating prices also, so this is also one of the same. enables talk searching in every stock search by and sell. All right, whatever like it comes in searching right? We'll see everything.

We'll cover everything in searching, right? update price Okay. I also think one more thing. Okay think of the user Journey user came you selected a stop or you searched for a stop. So okay. This functionality is used now you place the order right?

So what would be happening when you would be placing order? 0 would definitely be validating you right if you're a valid user or not second. If you have placed a buy order don't you think zero would be checking if you have the relevant funds in your account or not? What do you think so validation would obligation validation? No validation could be of any different types, right? I can think of just these two validation where it would be authenticating you and would be checking relevant funds and whatever so validation, so there would be a validation engine for sure.

So validation would be other. Okay. So now you have placed the order. It got executed. So execution was also done and your portfolio is updated after that. Right?

So portfolio oblation is also done by 0. right portfolio updation great. So I think this should be proper workfully management. Basically, we can see right Property Management. Yeah, definitely portfolio management updation. Yeah a management would be better word.

You're right. Thank you. Management would be much better word. Yeah, so portfolio management. I think this should be pretty much it if you guys can think of any other and also also one more thing. They also mean it's a for example for mutual funds and all they maintain that what is the what are the fun manager?

And what is the fun details experience ratio what every stock that's talk better stop at I so that should come in the stock information. Right? So we have right. So instead of stock price we can have like stock information. That should be data to the stock, right? You can keep that everything in stock class only.

Hmm, right because that is not as well. Yeah understand every find also, yeah for fund. Also, this is metadata, right we can keep it that and also that Tracking of the past history of each stock and how it is performing for three across three years five years 10 years per music fund as well. Those things, okay. So just asking just having a conference because I don't know. I think this this don't you think this is also meter data to the stock only.

like yes, like stock price. Um, like I want to know from your guy because this is a completely new topic right? I think that zero won't be maintaining that there should be some place where that price it would be fetching it from This what I am thinking. You know, like every platform has their own recommendations in system and in general, right? Like they basically recommend like we get recommendation mails from basically grow or the right that these are the top things that living in the market and all these things. So okay, they them analyzed in themselves the their systems right that the house talk is performing and all those things so they should have information to basically, okay, so probably any sort of Analytics could be there or such recommendation system could be there.

Yeah, that is more regarding hld yes, and even right now definitely could be there. It would be there. I'm pretty sure it will be there. You're right. It makes complete sense. But yeah, this could be good.

I think yeah. So now what we should do is like a legit interview we should Probably pick the feature which we should discuss today from intern. What do you guys think? This would be to be? Okay. So should we go with stock prices first?

Because this is very like close to core to zero the yeah stock price. We should go ahead with placing the market order and limit order. Right. We should I think go with portfolio also, like user has a portfolio. We should definitely go with searching the stocks. I feel this is also very cool.

Tracking the past orders is something which can be maintained in the DB. I feel so this can be left on. What about what about basically the main core of the system. That is the payments basically the because they had they have different pain methods and Yes, so what payments I feel was definitely there would be amazing. See for zero only it will set and when I say Execute order, I mean everything like from taking the payment from persons wallet to the broker or no to The Exchange Stock Exchange and taking the stocks from Stock Exchange to updation of portfolio. I mean every like what would happen.

Let's think of two things consider it a buy order. So now what's the work of a broker broker will take money from you? So this is user. This is broker. And this is exchange. Okay, you place a buy order.

Let's see the sequence of operations. So you place the buy order what will broker do. It will first validate you. So validation would be there. Okay, then what will happen supposedly? Yes games from the validation.

So it's a buy order. So what will it do? It will deduct funds. It will deduct funds. Okay, and then I don't know how this conversation would be happening between broker and Stock Exchange. I think this would be very Cool to broker and exchange thing like it could be happening via some apis also websocket also and it's more of what do you say it's more of actually think but as far as I know there's a websocket between broker and exchange which are enables us which enables calling or regularly communication between, you know, exchange to broker.

Or maybe from broker to user I don't I think there should be a websocket reading user and broker. This is what I think. You guys can also chime in. I don't think so because We don't require here the socket basically the whole socket is is the use case like the we require when we need to have persistent connection. They don't need consistent connection at all. Like we only need the time like the main critical connection when we are buying something or things like that because all the strong information in stock prices can be is up like it's not depending on socket connection with the user, right?

I think we should communication here. Oh, we should I probably feel why because supposedly I have a certain watch list. Why do you need to send me all the prices of the stocks? And now I change the watch watch list. Now I change the watch list. I have a different bunch of stocks.

I think we can check this. We should check this on. Let's check this on. Well, I'll be consuming Market really crypto Market really, you know. crypto version Yeah, let's check it. This would be really fun and then probably you can head back here.

Should we see he is a socket bundle again. Nice Isis. Yeah, I think this should be pretty good. Okay, I'll give laptop with the host trials. Okay. But again, I feel watchlist can be supported without processing connection because when your persistent condition then it limits the heart where it was everywhere is the limit of 6% easily connections at a time.

Actually, what I feel is let's just take because I could be wrong else and you could be right and we should have a discussion around it. Okay, I have opened was exit. Let's see if there's a websocket. Yes, there is a websocket of History. See we have streaming here. And let's see all the messages.

So yes, if you see this data coming this stream of message coming, right? Let's see each and one of the strings you can see there's three more server side events, you know, yes. Yes, so this is not I think bi-directional it is unidirectional. This is this could be yes. Yes. So this could be unit Direction.

What if I change from right if I see Bitcoin is opening what if I change any of the coins? Let's change. Okay. Let's see what happens. Okay, so unsubscribe event for Bitcoin if I see. For Bitcoin and I click on TRX.

So some sort of some sort of. event for subscribers going right And then stream of data is coming. from you know server or whatever. Like I think it's coming from server only was erect server for this particular point is coming. right So, I think it's pretty good. This could be a good discussion.

You probably let's let's head back to our design. Okay. I give. So early just a small question. And so how much time should we spend on the requirement discussion for proceeding the class diagram? Yes.

So right now since we are having a good healthy discussion and there's no time limit. So we'll just give me one for my mom. Hello. Yes, so sorry. So generally what happens is in listing down the requirements take five to seven minutes. Seven 10 minutes are also fine.

Generally in that time just list on all the requirements quickly along while you are having discussion with your interviewer and after that you can pick. You know points on which you guys would want to have conversation and take it forward. Does that answer your question? You did there. Hello. Here.

Okay. So I think we should go with these four four or five things for the user and probably similar things. You can pick from 0 though, so Wherein we can always use our list also. We can leave recommendation analytics for now. We can Execute Order updation of prices should also be directly. Enable stock searching should also be there validation should also their portfolio management sure.

They should be too much don't you? I don't think we would be able to do but let's see where it goes. Let's see all of it and we might code a few but actually class diagram for all of it. Okay. Okay. Good.

So let's start here. Let's start. So let's build some basic entities. First of all, what do you think? There should be stock for sure, right? Stock classes always be there, right?

so let's write down stop. Okay price would be something which should be should always be there. So I'm keeping we can have we should have price in doubles, but let's keep it an integer for simply City, but it should be double so. We should have and of course, they should be English metadata inside it. Probably we can have string description also. okay and company name like oh, yes, I think in common description you can have this endless all the material that could be unless I feel right Hmm and this is not you mean thing is mean thing which we want to point.

It upon is updation of prices, right? So that's why I'm taking price and and let's description could be there and let's meter data could be there. Okay second second, which is very cool. To zero of course user is always there, right? So they would always be user. Okay.

So again, all the metadata could be there but let's keep it email and password which is mean for each and every user. We can keep email and of course. We should have. passwords Okay. Okay, what else do you think user is composed of what else do you think? I think user will always have total investment total investment.

What for your portfolio for you right make sense. So and okay now there could be two things to ponder from what should be the relation between a user and a portfolio Okay, let's think of this way. If user is there then only one portfolio is there every user will have one portfolio Okay, as a right now can portfolio exist without a user. No, right. If a user is there then only portfolio can exist and there will always be one single portfolio for each and every user does this make sense? Yes, yes, so and portfolio would have multiple things also right stock their stock prices.

So I think we should Miss portfolio as a separate entity all together because this will hopefully is going to be bit complex. Right? So I would always on it's a good practice to have a separate entity for any complex object, right? Source we should have portfolio Okay is the relationship doesn't make sense also here because why we need is a relationship. There is no like commonality the common feature that we need to inherate from user to portfolio right? Here is a separating they retract each so I thought so according to me user is composed of port.

so, right So there should be composition relationship between our user and a portfolio. It has a relationship has a has a has a will have has a but user is composed of so, we'll see composition as the world. Right if portfolio would have existence without user also, then there would have been an aggregation relationship. Okay, but portfolio can't have that's why we have a composition relationships. Yeah. Okay.

What what else do you think should be there? So we have this one. What do you say? Portfolio is there. No, you user can have watchlist as well, right? Oh, yeah, watch this also something which would always be there.

So Are watch lists, so probably how can we have watched? We can have it in the form of list. Also, we can let's have a list of stuff. Watch lists and other person facilities other personalities. any Okay, I see, you know like a pan number or not. Oh, yeah, that should be better right.

Should we also have order history? Like? Oh, yeah. I I think I think they should be very cool to a user. So what what generally I have seen is that I'm able to see my active orders. If you know this order is, you know, generally when I place a limit order I'm able to see all my active orders right that Disorder, so I think they should be specifically.

active orders Right and what should be the data type for this? Like how should we store it? I think we can store it in a map. Why because I can place multiple orders for a particular stock? right Or maybe probably we can have it in the form of list also because this would always be limited, right? So we can have it in the form of list also.

And we should also go ahead with. Order as a because order I feel good is going to be complex object. So we should have order as a separate entity. right This should be pretty much all you have any other suggestions? something which map of stock about option But yeah, that can be really good optional. We're gonna go ahead with any actually.

Because I don't think there would be much conversation about how you going to store it. But yeah map would also again depends but on what are you having your conversation on we can have it as a map also. And we can have it in the form of. And one thing so should like in for detour these these things in in LED interview. Should we make separate this object for this as well? Because this look this will communicate more the first time read it right instead of this using directly map or something like that.

I didn't get your question actually. So for example this map map of stock order can be replaced with a class, right? Yes. Yes, and yes activator history and Screen stock and then the lottery. Yes. So this is what I mean actually by complex object if you guys see here if anybody didn't get what I mean by complex, so this is a complex object now, right and there would be updations to this like if you place a new order so there would be New Edition to active orders, right?

So we should have a separate entity for active orders. This makes complete sense to have separate entity or separate Duty for active orders. Okay. This is a complex object. So yeah, we sure. definitely I think this should be pretty much.

for a user Okay, great think user is also done. What else do you think should be there? I think order should be there because we have talked about order here. So or we should discuss about order order would be a separate entity all together. so order Okay straight away when I think of order. What do you think is that?

A stock is always there in order stock is always there right either bought or sold, right? so stock should always be there. Right second ID. So user ID user ID something which you'd always be there orders will always be placed by our user right? So it's own idea as well. Right?

Yeah idea also ideas should be this thing. ID will also depress. Yes status. definitely status User ID user or if you have a database then user ID makes sense, but since we're discussing about Led where we do not have a database attached so we should have a user object. Yeah. right Yes, and definitely we should have a status or maybe probably we can in better words.

We can see State or the status and I think autistic would be separate, you know all together. or the state Why because it should it would be in three states for now. I feel here. progress and successful and then the price like how much how much price it was of definitely. Yeah. So this is all the state.

Price would be in teacher. Then we can have creation date. Creation rate should also be there you definitely it should but that is metadata. We can skip it quantity will always be there if I have bought any stock how many what you know, how much quantity do I want to have and if I sold any stock how much quantity right? So I don't just one question. So are we presuming that one order will consist only one stock at a time or multiple stuff?

Yeah, one stuff right because he got one order generally consists of one stock right as far as I've seen, you know, we can't add up we can't do one more stock, right? Okay. Is there any tag probably I'm asking seriously. I'm not used zero that's but it is a separate order set place. Okay. Okay dollars.

We separate orders. We don't have our yeah say I have used it. So I know that the single order for you know single stuff. We can't have multiple orders for that Single Stop also, but there's no such basket all the time. We can have like order types by yourself Yeah, there should be all the time. Also.

Yes order type and then there should be Market order also limit order also, this is also all the time. so Well, definitely we can have it in the form of Boolean. Also if it's a buy order or a cell order and so would you know more Boolean would be a better choice when we order type. So yes, this will get really good discussion. Let's go over it. First of all, we took order States straight away as income.

Why because we know there were three types of order security. Now generally, when do we take things? Okay. Now you see all the type of buy and sell. Now this could be now there are only two option either by or either sell. Okay.

And there would not be any third category. So now we can have a Boolean also for this right that if this is a buy order or not. Second type of order is on the basis of timing right here. If it's a market order or limit order or I've seen gtt is also that's also some different type of orders. So what I feel is here we can have you know, Again, but since in this question, we are just taking this Market order and limit order so we can have this as a Boolean variable also. Does this make sense?

Yes. Yes, okay. so Boolean is by order and next is Boolean is limit order Okay. We can have in order type in them as well. Now by your yes order type enum, like we just discussed it should be there. So like which side order Market order is a limit order is there then GTs are there.

I don't know and there are multiple audites as far as I have seen it. I'm not used it. So I don't have much context about it. But yeah, there are multiple so enum would make actually look sense actually since but in this question since we are taking just two Market order and limit order that's why I took this as a Boolean but you know makes complete sense. In fact, we should have you know. prototype order type order type and let's Market limit right now just we have these two.

That's our market and limit. Make sense, right so around this can be corresponded to the state parallel right that we was discussing Q classes back. Yes multiple States. Market limit and this yeah and more States. Okay. Yes.

Absolutely right. Now. What I'm thinking here is You're absolute right we discussed in one side that I and this counts thing right now. In this definitely should be there. It should be there, but we don't have much context in the question. As in when we'll go more into this question.

We'll talk about it. Okay, probably in the next 10 minutes sure. Great. I think we're pretty much done with order also, right? I think this should be the things that should be the order. What should be the next thing.

I think portfolio is something which should be there which because we have seen that user has a portfolio. So we have to build this class, right? So let's build portfolio. All right, so portfolios Okay. Great. Now what do you think would be there as in when somebody talks about portfolio the thing that strikes my mind is talking for all the stocks, which I have there in my account would be there.

What do you think? It would be getting invested. Yes money invested and right. What is the games one day return Xiao and all those things great. All of that should be there should be there. Oh, no, hopefully could be pretty long.

Let's cut it down to probably mean things. right But yeah, good. I'm could you seem like you're doing stock trading instead of software engineering. Are you? In that knowledge, man. calculator hmm.

Okay. So like you said amount is what you said, right? But what were the terms that I don't even know the terms? Yeah, okay. Let's go over to Basics. So all the stocks would be there, right whichever stocks I have in my account.

So before where did it go? Yeah. okay, so all the stocks that I have in my account, so I think I supposedly I'm having Infosys, okay. let's So what all things should be there in my portfolio regarding Infosys? I think how much quantity do I have? I think this should always be there.

but sorry What's the current price and what price I mean gains or loss whatever it is. So I think this is average price right because I'm able to see the average price. So average price would be there for each and every stock that I have in my portfolio that what price did I buy for average price of what they buy it for right? Because from my experience if I bought two stocks today at hundred and two stocks tomorrow at 1:50. So I generally see four stocks and average price at 125. Generally.

Just what I've seen from my experience. This is this. Yeah, so I think average price should do that. For each and every stock, right? These two things would be there. So don't you think this is a complex object like in a portfolio, we would be having list of stocks and this info origin every stock which makes it a complex object.

right So do you think we should make it a separate entity Yeah by that's why. so probably we can have portfolio stock as the new entity that will store just this information that okay this portfolio stock belongs to this portfolio and This quantity and this price we bought it for. right Okay. So probably we can have map. of talk and portfolio stock right well in portfolio stock we would be having information. about the stock of this portfolio This is what I am thinking could be wrong.

Please sign it. Why we need map we can have those part of every project every that object only right for police truck. Stop why we need map here. Yeah. Okay. So what's right my mind was that if you know has to change my portfolio like you place some order you place a buy order for Infosys.

Let's say to again, so I want to I will have to change this portfolio stock right because two more stock need to be added. So quantity needs to be changed and average price, which was previously 125 also needs to be changed. Right, so if it would have been in the form of list. All the portfolio stock if it would have been in the form of listening port for you. That would take a order of end time complexity. But if you have math we would take order of one time complexity.

I thought of it this way, but What what do they suggestion shlok? Netaji Samir? Sujit Nilesh? Cornala, everyone my young I can't take everyone's name even. jagadish not something right? Listen.

Yeah. So let's go ahead with nap then. Okay, and and this is the actual portfolio. So let's name it portfolio. Okay. What else should be there?

I think portfolio will always belong to a user right so user ID should be there, right? So we can have string. user ID second thing even if sector diversification with sector your stocks are Okay, sector diversification is also there so you don't know secretary Direction here suppose you have some index the different funds and different stocks. They will still show that in financial sector. You have this much money invested to offer total amount. Okay.

So this is probably suggestion or recommendation engine, right that is doing this. No, no, actually when you buy a stock which sector is belongs to like let's say I buy a software Infosys. It's it sector store. Okay. So let's have different stocks for like five stocks different sectors. So it will show me which sector diversification of my stock.

In which sectors have bought the stock? Okay. Okay, so probably that could be different entity altogether. Like the sector dynastication that's a mandatory for a stock price like within the stock info we will be anyway, I mean within the yeah. Before we will be having like the second. Yes, even I think that we should be having this in them as a metadata in stock, right?

Yes. Yes indication. We can use as a reporting tool, right? Yeah, this could be a part of diversification. Yeah, we can have it but that's not something which you took in the use case diagram. I think we should skip it.

But if you guys want we can take that as also. Okay. you can skip it the additional information that you Good. So I think this should be pretty much sit in the money to money respect invested protein money invested in total money gained out of I think I think that should all be calculation. That is also I think calculation base why because it will be very very much. He's like give you very because it will be we can have for each and every object addition.

We can have internal logic in the portfolio only that update them this map to this thing so that we can give instant information to the user like really one thing. Okay, so in money invested and When they begin current money or whatever. Good, but yeah, I think this should this is basically calculation how when the stock price would be changing. So this current money would be changing invested money doesn't change. It only changes when you place order and it's executed full. Current money something which keeps on changing on the basis of the stock price, right?

So this is something which has changed so there should be logic. Okay, I think this should be pretty much it for portfolio. Okay. What is what is what else did? I think notification is also something which zerodha was making right? So notification as a detour should always be born, right?

notification and the basic thing that each and every notification has I feel is descriptions. Now again, it can have I feel it can have action buttons. Also you can have heading also and that I should keep the metadata if you but yeah if anything you can you guys can think of? note about notification Type question notification warning or info something like that? Okay, so probably type that is also I feel a metadata and that could be added. So yeah, probably notification type could be another email which we can build and keep it here.

But again, that's a meter data you can have it. Okay, I think this should be pretty much it because to whom do I have to send the notification that you know that has to figure out from the user info and we already have that and user? All these things we have it in the user. I think if interviewer wants to focus more on action button so you can have action button for sure you can have links in that action buttons. But yeah. Okay.

Oh basic entities. Do you guys think we should have anymore? Okay, we have discussed about order we have discussed about stock. We have autism. To move all of it is, you know the server right or but 0 to the server would be service actually. So that would be service.

Not the detail. We're talking about the detail right now. right That would be some video the stock is recommending stock. Stock video we have always already made right? Here it is then. Yeah pretty much done with the details.

Yes, right. I think we should move to the services. Right. So then I think we should have a stock type right in the stock entity. Um type. Yeah a dividend or Equity Fund small cap mid cap those kind of like we could have an enum in stock price.

Definitely we should have but again metadata or that is matter. Okay? Yeah metadata, right you can have it. So yeah. Okay, great. Let's talk about services.

I don't just one second. So when we make the class diagram, so do we have to share the screen and show it to the interviewer that this is the class diagram like no. No just we have to make it for our own. Yes. So we have to make it for our own but all of this what we discussed right now, all of this has to be discussed with them. Why because going forward he said he would say that okay.

Why do you think user should have a portfolio? I don't think user should then you can answer in that. Okay, you portfolio cannot exist if user is not there. So there's a composition relationship. That's why I feel you or user should have a portfolio. So all of it.

All of it is discussion and this is for your benefit. Right? So you'll see when we write the code now. I would see it here and I would quickly type it. Okay. Okay, good.

So let's I'm sorry. Okay, so first is First Service, which probably always think of services and display. Okay, if somebody comes with a system and you've seen that system think of this flow what will happen when you use that app? Okay. First of all, I will go inside the app with the registration, right and we have user so there should be some sort of user service because we've seen that zero would be making some sort of list. It would be doing some sort of registration.

It would be doing some sort of authentication there would be some sort of validation. So there should be user service, right? Is yeah. So always now your interview might not go into the depth of it, but when you discuss it with them when you tell them that okay user service will be there and every logic regarding user would be present in user service. I think you would gain a few points, right? User service would be there.

Okay, what do you think? So user service would definitely be having let's stop users. Right? It would be having list of users. All these users are there with zerodha, right? by service So, okay.

Management Service So one thing is right now we do not have a database. Okay, because there's no level design. If you would have database then there should be a call between database and the service right since we do not have database. That's why somewhere the list of user has to be maintained, right? so it has to be maintained in user service only because SRP think of single responsibility to principle everything related to user should be there in this service only. Every change that has to happen with the user would be done by user service.

right, so if a new user has registered Where will you store that user will store this in this list, right? Women make sense. Should you yes, yes. Okay. Okay, so what should be the first method? Like we discuss create user or user registration or whatever.

so you can have created sorry. We need to create a credit operation create. Yeah. Yeah create user. Yeah every credit operation. Yeah, right, right.

So probably we can skip this because this clearly really simple and you can have credit. make sense Okay, good. So credit operation could be there. Okay. What do you guys think? Every user has a wallet, right?

Right from which you're deducting money or adding money. Okay, so when you generally take out money from your wallet, this is generated what I have seen. Supposedly I have 5000 rupees in my wallet and you try to take out 6000 rupees. So you get a notification saying right that we are drawing more than you have some sort of like this, right? So what do you guys think? This should be handed by user service, right?

So adding money. We're drawing money. from wallet because it's users wallet, right? Whatever we should have then we should have and user of field as a right like the current money involved. It already deals something like that. So in user yeah, there should be how much money does he have in the car.

There should be there should be but just discussing that. Okay, like I'm also thinking on the way right and thinking also thinking on the foot. So yeah, but yes all the current operation would be there that money Edition that money reduction is also one of the crowd operations for the money field in the user, right? So this is definitely there. Okay second service, which I feel would definitely be there should be the stock service. What do you guys think?

Young by stock will stop No, no not by stock. That should be order service in my opinion. Okay. Oh, this service should be that updates the price. Yeah, don't you think now from where is that price coming? How is that price coming to us?

Like we saw on the screen, right? That is more of a HD topic. But from the low level design perspective there would always be method or there would always be a stock service. That will enable us to get the price of the stock that will enable change the price of the stock. See the prices of the stock. and probably enable search also because you know searching is also a functionality, right?

Producing right just having water. Okay, so get stock price. What will we get in the argument? Would you guys think what will be good? We should get a stock right that okay. I want price of this stock.

Okay, it is and yeah stock ID something right? So Okay, so it's not nice because now the new price would be coming now. This could be Where any means why any actually discussion can be there? But yeah, so the second of the stock price would also be there. And again really get a stop. Okay.

third thing I think addition of stock should also be there some let's say today. I my company went IPO. So there's a new edition, right? So its price would also change so any new edition of stock into the database. So there should be ad Stoppers. What do you think?

So will this stock service be maintained by 0 that like I mean addition of new stocks Etc like You I personally think yes, why. Because okay. Huh? Okay, just discussing. Okay. Let's see the overall flow.

There is stock exchange. Then there is broker and then there is user. Okay now user is viewing stock prices where On 0 right and how our prices coming to zerodha? Prices would be coming from Stock Exchange. to 0 so 0 would be maintaining right? Okay.

Yeah, because I think I'm you even zero to have no. Right not on the stock exchange. Right. Yes, but you guys what do you think right? I mean, yes said this okay. I mean, yeah, it's if you look into the zero that like we see history as well right like Graphical whatever so that they must be storing information somewhere.

Yeah metadata. That is Method it again. That should be in the stock and there could be any less metadata. But mean concern is the price current price that changing price, right? Okay. Great.

There could be in this material data, honestly. So yeah, and stop I feel should also be there. Does this make sense? Actually, please timing? Adding of a stock into my database that okay. This talk is also comment.

I want prices of this top. Also now if some companies went IPO right Yeah. Yeah, so add stop should also be there. And again, this could be a complete new stores. So we should have stocks somewhere. We should store it somewhere.

So again database would be there. But since it is low level so we should have a map of probably or list of stock or probably map of stock because map would give information in order of one. We can have stock ID. Or that should be string, right? so string commas talk and this can be stopless. Right, this can be stockings.

Okay. What else you think should be there in the stock service? What else do you think? When this should be pretty much it right the stock service. Should we move it? Yes, okay.

We have Talk service here. Okay. Now I think the main service comes which should be order service. Okay. order service okay, so now what do you guys think for order service? Let's create order and get order status cancel order.

cancel So I think straight away think of it enough flow diagram basis, okay. I registered. Okay, so my registration is done via the service now. I'm able to see all the information about a stock wire stock service. Now generally what happens I click on any of the stock. I select the quantity.

Then I place a buy order or a sell order. So here I got let this what do you think shouldn't there be two methods? Factory pattern where we can use Factory why didn't you know basically we can have a common interface and we can have common sitter methods in that and we can have different type of water breaks up because there is one more type of order is reading was right because someone wants to redeem his money like basically sell only so we cannot do different services and if you want to have said different set of editations we can add there as well because this this thing can be handled the independently. So I was I would I'm thinking like having an interface and two different Services intimidate that even I am thinking on these lines, but don't you think by would have a different validation engine and selling would have a different validation engine because it's relations will be different but the methods the the main method like basically the service body will remain same and we have basically Basically in interface what we can add like let's imagine if we name that as a order service. we can have our method method as Okay from here I can think of placing order should be a method. And this definitely right on we are talking about interfaces.

All this should be interface and probably what we can do is we can have separate by order service and separates cell order service. Why because method name would be the same. Placing an order canceling also on canceling order also. But method of execution of by order and sell order would be completely different but methods should be the same. What do you guys think? Everyone really?

Yeah. Sure. Okay. Let's think of it in this way. Okay, right now we are having order service see okay now order isn't two types buying and selling. Make sense Buy has a different logic altogether.

In by what do you think? What what you would be doing? First of all, you would be checking funds. second you would be removing funds and then you would be updating. portfolio for cells what would you be doing? check stop positions that suppose you want to sell 10 Infosys stock, but you have only five right?

So what do you guys think checking of stocks would be there? then removal of stocks from your account would be there for addition, of course for you. And then updating. wallet would be there for selling right? And all of it is a part of place order. Like when I'm validation as well because validations also, but yeah.

place an order and buy can handle it differently cell can handle it differently. So don't you see a strategy here? family and family of algorithms two different algorithms You decide on the runtime? Where do you want to? buy or sell strategy button same method but different ways of execution. Yes strategy button.

What do you guys think everyone? Yes, does this make sense? Everyone if everyone is clear we can work but I really feel this should be understood by everyone. Everything means but different execution. Yes, and Right and that is on the runtime is? You place an order?

And on the runtime it's decided. Either it wants to go on the buy or the sell side, right? So yes, I'm just remembering that letter. Okay. Placing an order. What will I get in place order?

Okay, I think I would be getting all the things that should be there in order probably talk ID. We can have a detour separated order request something like that. So if if you go on that way, it's not good. I feel then there could be endless video there would be responsibility. Also there could be request PTO also and that Should not be again. It should be discussed the interview, but generally as we can see we can say just do that song.

Yes, we should say it. In fact, we should say because now the if you see it here. Again, we didn't discuss about the return type because it was very obvious that this should be worried. But let's say you want to return something instead of void. This is some complex object. Okay, then there's a response Duty also, right?

So which should be discussed and that's a really good design which should be discussed. And of course there would be brownie points for that. That okay a person knows this also. Right, but yeah. So stock ID should be there. Okay quantity.

I feel would always be there. In fact all the things that are present in the order. Don't you think it would be there like stock ID would be there user ID would be that I who is making this order? If this is a market order then I don't think price would be there. I think price would be set by 0. And if it's a limit order then it's set by us.

What do you guys think? Okay, I think this is not care about this. Okay, huh. So from my opinion just thinking okay right away. From my experience in when I'm placing a market order. A market order means that whatever is the price.

I thought I just want to buy it or sell it, right? In a limit order. I generally set a price that okay by Infosys stock when prices hundred rupees or sell Infosys stock when it's 90 rupees right in limit order. I set the price from the front end but in Market order. Price is not set by nirake. Right.

Yeah. Yeah, right. So I think price I think that place order would again be of two types. Placing a market order and placing a limit order because limit order execution would be different and Market order execution would be different. Market order would be executed right away limit. All the limit orders would be maintained by the somewhere because what I feel is that okay if you're pleased hundred rupees order.

for by for Infosys and ankur has placed. at 120 rupees Infosys and Kiran might have finished. 100 rupees for referral so multiple limit orders and all of them might not be executed right away because price might not have met and whenever the price meets. These orders get executed, right? So limit orders are being executed completely differently. What do you guys think?

to conduction Yeah, it is too much. Yeah, I think we should keep it simple. Okay. Yeah, I think we should keep it simple. Let's work with Place orders, we'll get a quantity. Let's take price also.

okay, and of course, we have it differently for buy and we have a different for sale. So happy birthday as a parameter. Sorry. User a user object itself as a parameter. Yeah user. Users at all.

Yeah quantity and ease by your we have a Boolean, right? So if it is true, then it's by your federal and instead of stock ID can should be passed completely stock because let's say use interviewer can ask us right, like for example of during the placing of water you want to update metadata off the stocks as well should be past complete stop video and complete usernity. So that meditator for all of the install can be updated instead of only ID. Yeah sure. We should pass complete stuff. You should.

Okay, now that we can have discussion about it. What I think is I'm good when you said that we should pass complete stop. on front end on front end from what I feel user info would be there. but I don't think stop info would be there. I think stock ID would be there but price is something which is variable. Which fronting might not send but user info something which printed cancer.

What do you guys think? Who are you the stock already contains surprise, right? So if I'm selling it at current market price, so the stock would have with the price in Nations. Yeah makes sense make sense makes sense. So please order would be there. Okay, great.

Oh what? Is looking would be there. Place Market order would be there and this would Execute the order also, right we can handle execution also in this method only. Okay, and our cancel order? Cancel order. Yeah, we can have cancel order.

Also we should have is that cancel out of also? Order and in here we can have order ID. Or probably the complete order. And also another method for getting the order status. Basically getting the order status because in high level when also we can think that so basically when he plays the order some people might basically ask like basically see on the so it is kind of polling only so we can have a we can have a better get the order status. Yes, he can so you can have get order status Okay, great.

Don't you guys think we should have a validation engine? Yes, we should have. Yeah. Hey, so and I think we haven't talked about validation engine. We should talk about validation. order value stations engine should be there.

Not writing the complete. Meditation World. Okay, so I think this should be pretty much right. Would you guys think of any other thing that we might be missing? And this should be good we can go ahead with this. right Should we go?

Okay. This should be order service. They should be notifications service. Also, I feel motivation service would also be there. Should we skip notification service because I think that is going to be pretty simple side notification method would be there which would receive as also. I'm just thinking that Basically, this product stock prices are very basically.

flickering right they don't stay at one place for long time and let's say what happens right like due to do internal due to internal internal some issues the order that user place got failed. Okay now to improve the user is user experience should be there should be somebody tries also, right like the rate rise then in that case. What should be the large our logic that was the order fails. I'm just thinking about exception handling in second like this. Let's say order fails. So should we should we should we give only the like failed status to the customer or basically retry on our own?

No, I didn't really they will be given the more make more sense. Right? Not the retry. I think yeah, because generally from what I have seen from my experience of 0 if order is filled like I do not have funds in my account. So I received that notification by my own although I can place the order again and that process completely would be happening again that validation would be happening and you know, but generally, you know, that doesn't retry right. This is not money.

So I think a lot yeah makes sense it right anybody having any other experience about this? because I don't think the retries would make sensor. And as far as I've seen in zero that he tries are not there. We have to make a new order. Good, I think we should go ahead. Okay notification service again, I feel is going to be pretty simple send notification method would be there so we can skip it.

Will write directly the code. If any other service, can you guys think of I really? In notification service notification. What will we will be sending send notification method would be there, right? notification service like when to decide what notification you sent like what what we're gonna notification that will be sending in which scenarios I think whenever so I think in the place order method. If the order is executed successfully or if it has failed this all please order method would be making call to the service.

and it would be passing description and User that. Okay send notification to this user with this description. Now notification service can handle all the logic for spending the notification Then I use Observer pattern like in the interview, okay? Yeah. Oh sure. What pattern?

Okay, let's talk about Observer pattern for now. Observer pattern is something so it's a when you want to publish something. And there are observers who want to observe this, right? now like there's an observing the status of the order different notifications and No, I don't think so. Okay. Wait, we should see what Observer pattern is, okay.

Observer and observable obser very is observing the observative based on that executing actions. So it can be like to get order status. So there the notification system would be observing the order status and based on the order status. It would be okay executing your conductions. If order status is completed then notification of a status canceled another notification. Okay, wait.

Wait, no. No. Okay. I think you make a good point here. But let's see it and get okay, let's build it. Okay.

This is all the service. Okay. now you are seeing that. This is all this service. And this is notification service. Okay, and it is.

observing Order service, whenever a state of an order changes. Whenever the soak to home to notify. Observer I want to notify right all The Observers Now who is the Observer for order service? Observer is that one single user? Who has placed this order? right Does this make sense right now?

Can also observe you like different types of notification one is email and yeah that you're going to discussion notification. Definitely. That's why I said no that's still notification will have the logic of sending the notification now that notification could be SMS and that notification would be even or there could be more also so we get that would that logic would be there and send notification method? Respectively, but if you see it here, why can't we have Observer design pattern is observeral design pattern is used there. The number of observers changes number one on the runtime, okay. Here for order service.

We have only one single Observer and that too. It is already set statically when the order is being made. Right. We have not changing the Observer for this like we are not updating. The user ID. We are not adding any more user IDs and we are not removing user ID.

So publisher is order service, but the subscriber is one and that is always the same. Oh always a fixed one. That's why I think you Observer pattern should not be used not required. Yeah, but I don't in let's say in e-commerce, right? So there is order service and there is nothing right. So based on the status of delivery order order service can execute different things.

Let's say I'm seeing the status of delivery is like Status of delivery shipped right based on that order service can send a notification and stability degrees complete reason that order service can send a notification and let's order Services complete status is complete. Then the voice can be generated. Right? So based on that different actions can be good. So now now this is different point men who said this point Yeah, man decide. Yeah, man.

Now this are different things this are here. We can help Observer design pattern now see what's the difference is, okay? I don't remember who was talking about Observer design pattern for order here for notification here. But here we can have this Observer design pattern now hear me outcome fully. for orders service order service could be publisher. and subscribers could be notification service invoice service and other one could be.

No other one could be let's say these two other you okay used to service would be there and publisher wouldn't be ordered. Oh, no publisher would be order service and whenever the order status is changed. on the basis of it some action would happen and Yeah, Observer design pattern mix complete sensor. But why didn't make sense previously was just in the case of notification when you want to send notification to a user your notifications service can be one of the subscribers to order service same ways invoice service can be one of the subscribers to order service. but again, users would if we think of that sending notification to a user and this should be the What do you say? This should be the publisher subscriber.

I don't think there it makes sense. But I think there it makes compute sense. But even as I have a question, hmm, so yeah, I think mine was a man told Observer. No based on status change we could do some actions like post processing or something like Being let's say there is some user action which triggers in order received status, for example, so my status is order received. For example, I was just think I'm not sure if it's possible. Let's say there's an IPO which is going next week.

So I just place an order right away today that I want to buy it or something. I'm not sure if it's allowed in the other. But with the order is received but it is not actually bought. So within order receive no, I'm still waiting the order or IPO to come live, right? Otherwise, I can't purchase it. So within so I just thinking those lines So within the status then there could be some statuses or something like I mean a weightless period or something and post actually we cover frame I could go to the like order in progress or something if there's talk is about then I could be completed or something.

So that way is observable pattern applicable in this kind of scenario within a state is right. There is Upstate is this for example, like step stage one, two, three four examples. So is it applicable here in such case? Okay, I think this should be applicable wait. Okay. I I think this should be asking people well post-processing.

Should be applicable. Okay, and when something you thinking it's a kind of chain of responsibility as well. Right? So let's say I purchase the order then there's an email or something. So based on the email like I met by I might be buying some something else for example, so that is a chain of events. Right?

So what is the difference between observable and chain of responsibility event? I mean it is important Okay, so I have not used chain of responsibility index so I might not be able to tell your chain of responsibility right away, but I've used an observer. Okay. So for Observer I can tell you that okay? First of all what happens you can think of it in the form of I think a small example and analogy would be same and you would get it fully. So I'm a newspaper and you have and you see my newspaper every day.

So I every day publishing newspaper and all my subscribers get that newspaper. Okay. Every day so you can think of it in this way. Okay, now tomorrow going forward you said that I don't want to read this newspaper anymore. So on the runtime. You unsubscribed?

Okay. Tomorrow going forward. Mike said I want to subscribe to this newspaper. So on the right subscriber, is that so what happens if you see if you are doing it the traditional way right now forget about Observer design mind. Okay, so I mean this paper publisher. I know who my subscribers are.

Okay, so why users are? I have a list of user and I know who my users are. Okay. This is a newspaper publisher. publisher class okay list of users and good we have it here. Now.

What do you think? Would be the flaws in. Let's talk about the flaws. Okay, okay. wait I think I had made some sort of document. On this let me just fetch start document quickly.

Hmm. Wait, I open my document somewhere. Okay. Okay. First one is from what I can see. Oh, okay.

Let's think of it on this way. Tomorrow going forward. Mike said that I want to subscribe to this newspaper. I will have a new thing. I will have to add user in this. I will have to add a new user.

tomorrow apart from a user Let's say different entity a magazine publisher came and said that I want to subscribe to this newspaper publisher. So you will have to update this newspaper publisher. how so list of magazine publisher and you will have all sort of magazine publishers. Again, tomorrow a different country came in and said that I want to subscribe to this musical foundation. So get you modify this class. Does this make sense?

Oh my no, I think no it doesn't make sense you. Okay think of it in this way. other station is the newspaper and magazine about different there could be publisher and then he could already like you might win. Okay this weather stations. Okay, then there is forecast display. There is statistics.

engine And let's say there is some sort of. This is future for forecast. Let's say currently display. Okay. Now when the station has its data changing all the time and all of this all of these three wants to know what's the status of weather station right now, right? So what will I have to do?

Whenever my weather changes, so if I have weather station here. Think of a traditional class don't think of Observer design pattern you have because we have heard of it think of a traditional class. What will we have we'll have displays. Will have statistics. Okay, these two engines would be there and let's say we would have a method change temperature. new temperature would be there in the arguments whenever I would update my temperature.

I will have to call some sort of update method on this display same ways on the statistic engine. Does this make sense? Yeah, now tomorrow current display someone who said that I also want to know and I want to just display the current condition on my screen. So you will have to add button. Display here. And along with you change temperature when you are making anything call to these two update methods.

You might have to make call to one more method. current displaced dot update Does this make sense now? Yeah, correct. Okay. Now did we change this class wherein in solid principle if we talk about solid principles and we talk about open close principle. We said that we want to make classes that are open for extension and close for modification, but we clearly modified it.

Clearly modified it. So we are violating. What is the principles does this make sense? Yes second don't think it is difficult to test how Now when you made changes to the methods, so you might have to make or replicate or Mark few more things and this might so there were two three functions or two three methods that were running fine, whatever running absolutely fine. And you had your test cases written which were working fine. Now you made changes to this method So it could be possible that other methods also, you might have to change which are running fine.

But now there's a possibility that other methods can change. Why because you change the data members right now. We're in data members who are having temperature pressure. Okay, let's say humidity. You added one more. Wind you added one more video.

Can it? Change or can it have affect on other methods? Yes or no? Yeah, yes absolute sense. Second problem. Testing is a big issue third problem.

Scalable do you think this design is still scalable? Because tomorrow the right now there are three displays so we can have we can write. Three statements current display dot update this display dot update statistics engine dot it update and we can have 10 more. But how many can we have? So is it scalable? What do you guys think?

No. Absolute no four. No. Yeah. Or does it can be maintain this code? No, we can't maintain this sport anymore.

So. it is difficult to maintain also so for all these problems and there's one more this very tight coupling also by the way guys how See this. All these three whether station needs to know that all of these are my subscribers. I have to call update methods on these when do weather station needs to know this. I don't think so. So there's tight coupling also.

Yeah, make sense. so because of all these reasons What should be done? So they have seen one principle that there ever the things are variable encapsulated. There's a basic fundamental principle wherever the things are variable and what's the variable here? What's the variable here all these? Link all these are subscribers are variable here.

These subscribers are variable. And there's a basic principle whenever wherever you see that things are variable in calculated. So now what do we have to do? We should have a list of Observers And we should have some sort of a mechanism that. We have a list of observers here. And now, you know the compute flow that we will make up our Loop and you know things would go.

Does this make sense? Yes. Now one more thing here now, you know that this will have a list of Observers. Okay, and you will have method to add Observer and remove Observer you will have all of it. if I tomorrow anybody can be a subscriber for this service. For me to be a subscriber or for any.

Okay, let's remove this clutter a little bit so that I can write here. Okay. for me to be Observer to this weather station. What do I have to do? I have to be of the same time. Right, because otherwise again there would be very tight coupling because weather station will have to know that okay, we have to call this method for this display other method for statistics engine and blind.

So we maintain a Observer. interface Where we have a method update? And the pass all the things that have changed. And every Observer every Observer whosoever comes in will have to implement this class or implement this interface. Sorry not class in does this make sense now? Yes, you can answer say that.

This is the pattern interface because different observers will have different types of attributes with yes, which will not call which will have problems. Yes, so Everyone is clear about this now Observer design pattern is clear to everyone. why do we have Observer design pattern and How does this help what problems does it solve everyone? Yes, yeah. Okay, so I think we have gone a bit far. from our previous class diagram but yes, the student would be discussions.

Says so we have order service and we have notifications service and notifications service. We should where would we? In notification service, we have said notification methods wherein will pass description. and the user and probably email notification and SMS notification can extend this. Implement sorry implement this and handle the same notification in in its own way. Because in SMS service, we will need the phone number and in notifications email service.

You would need the email address of the user. So this user object has all the info about the user so they probably can handle the send notification method in their own way. Does this make sense? Yes, what? Okay. So I think the pretty much done notification service also.

So are we done with all the services or do you think we have missed any service? We have user service in place. We have stock service in case we have ordered Services. We have notification service in place. I think we are pretty much done with the classroom. And payments that complete payment like we can delegate some things to definitely should be there payments or something which should be there, but I think enterment service should be there, but we didn't take payments as the core for this.

Right uncle but it would be there. Yeah, like delegates something from quarters. You definitely good. It would be there for sure. Right. Well, then we can move to the code then.

right Should we move to the code now? It's my safe here. Okay good. So I'll stop sharing my iPad now and I'll share my screen so I might have to do a little bit of setup. Please forgive me for this. I'm next I have to make the host back.

Okay, that's right. There's only one host. Okay. You know, I can't clean this. So I think I have to make it from here only. Stop share.

WE Post okay, I think and the host back now. you I think you guys are able to see the screen now. Yes. Yeah. no, I think I open my class diagram in front of me so that I can cook you make the objects and everything. I have it.

Okay. So, yeah, so now we have or made the class diagram everyone. Okay, we made the class diagram. We have had endless discussion with our interview and interview all so now agrees. So we'll quickly right so generally in an interview, let me first be very clearly in an interview from what I have seen this chat. Book Jack more consultious so generally in an interview from what I've seen is they just asked for methods just write the methods tell the return type tell or talk about the arguments and then add them they'll ask your complete flow that okay.

Tell me in what flow which method would be called. Generally this happens. If they ask you to implement any of the methods generally they won't but implementation is mostly part of machine coding wrong where you're asked to you know, Implement everything and that round is approximately to us two and a half hours three times in low level designer us that we can just write the APS and later. We'll talk about the flow that okay in which flow the methods would call. But they can ask you about one or two methods to implement. Okay, for example, how will you handle order place order method?

They can ask about that? Okay. So yeah. They will not run the method right just write below. No because time is not there. Okay, they will never ask you never that's why they ask the flu and that is what this is called low level design interview.

In machine coding you might be asked to run also. but in low level design it's not it's never us. So the new chapters which are coming up. Okay, there are a few new chapters which are coming up, right? In that we have made complete chapter. We have wrote down every method pulley from intern and we have run it at the end also, so you would be seeing those new chapters really soon.

But yeah. In the new chapters coming up we have implemented each and every method and we have run it also so you would be seeing in the main method that okay. Everything is coming. Okay. So let's build a new package. Not demo, let's build videos.

So But main method is not us we have made main method in the chapters coming forward just for that everyone can get clarity. But yeah. Well what happened, you know? if this is and then we have services. And we have enums. Okay, great.

So, let's go with the details so we will have stock detail also. so talk we have. Karen if canon in thing you want to ask? Sorry, I press it by mistake. Oh, no reason always. Okay, amazing.

Well, you can just click downloads at the bottom or maybe at the top you would be seeing a toolbar where you can click clear and click on cross it would. Okay, cool. Thank you. Okay, so we have user detail also. the have portfolio detail so for you or then we have order video and notification review order and notification Okay. So let's quickly write down things that we have for user we had.

private and password so I don't can ask a small question. So I know lot of interviews the also sometimes has to make the apis, right? So like when they tell us to make the apis, so this will be the similar flow like we just write the classes and then tell you this this is the API which will be called when this class is it? Yes, so if you okay so quickly meet one flow and then probably I can answer after that the will actually okay. Sure. I'll take care of this question.

If I forget please remind me, okay. So basically, I'm just writing down everything that. I need in the class diagram. Okay, so and I know this is going to take some time. list of Watch list. Now again.

If you see here having just one list of watch list here again, you can have a discussion with their intervals. They say you should have multiple watch list because in zero that we generally have multiple watch list so you can have the map. Okay again, since this is a complex object list of stuff so you can have a different object altogether. Why because you might add few more stocks into this watch list. You might remove stocks from this watch less. Okay, so a different entity for watches makes absolute sense.

Okay. And last one is active order with went ahead with a map. But again, that is also a complex object. So always make a different entity for this but I don't think Talent would allow anyone in an interview to have you know. discussion would okay, then we can have Getters and setups for all of them. Yeah.

so probably Okay, same way as it's goofer. stock also some just let's go to buy writing the main main parts. I'm not writing description and stuff will it is going to take time. So just the writing the price. Okay, and it's quickly make better answer. here again for portfolio we have map of map of stock comma portfolio stock now we again we forgot to be portfolio stock.

So let's quickly make it. over let's quickly. Otherwise, we'll keep on seeing the spread mark. portfolio stock okay, so we have quantity Where am I typing? quantity and we have the average price of which ideally we should have it in double but for Simplicity, let's just go ahead with integer. Okay, we have portfolio stock.

And money invested also should be there. problem S. Yes in money in this big You should also be proud and sing this there would be current money also, so let's quickly have it doesn't set us for them. Let's go ahead with. Order class now. To order and just seeing it in my iPad and writing down whatever we discussed.

Okay? So this is where class diagram is helping. you talk Well, we have stopped we have user. we have price we have quantity. we have is by order and then we have order type as the email and Order State also. So I think we should make those emails first.

Otherwise, we'll start seeing the red mark. all those state in order State we have Ideal, we should have it all in capitals. Yeah. we have order State here and we have ordered title and we have Market. And we have limited. Okay.

Let's go ahead back to order here. So we have quantity. And we have ordered tie. tie and then we have all the order date of great. Let's quickly have greater and settings for all of them. Okay, fine we have.

Same this one notification. We have just the description. So let's skip it for now. Okay pretty simple to implement. Okay, great. Let's move to Services now.

So so in interfaces which quickly make interfaces. so use and we have to make it interface same as we had stock service. So this We have okay, I'm just writing it down. So sorry. If you have any questions, please ask. Yeah, I forgot if you have any questions, yeah.

No questions. Everyone, I'm really sorry. I forgot. I just went with the flow. So I don't just just one thing. So the video objects really just models and the services will just the microservices we build an app, right?

So, okay, so Everything that is fixed would be detail. If you see what is you data transfer object? Okay. So here whatever so a stock would have these five things. Let's say okay and everything belonging to a stock is present in a stock whatever changes generally if you would have seen architectures all the calls to the database are made by the service. right all the API calls So if you see the overall, so what happens from front end the Call Comes it comes to the controller.

So call came to the control now. There is no logic inside a controller controller will redirect it to the right method except for side file. Is there so redirected to the facade file and then every logic is there so everything logically is happening there then it would go to the service. Where's any dude are these changes you have to make service will do it now beat updating something in the database with adding something or be removing something or whatever. So everything really regarding that would happen in the service. Dtos play a part where if we want to pass information in the form of detail we have to do this.

Details are data templates. Just data transfer objects. Yeah. Make sense everyone. Okay, anybody having any other question? First so the let's say we call an API would call the service right?

They come to service will have the business logic and data. It will just have that data template which you want to fetch and interact the database. So here you can have this discussion with the interview. Let me tell you supposedly you are the interview and you ask me now. I will lower. So right now low level design we generally don't make the controllers but controller would be there.

Okay database would also be there but all of it is a part of machine coding Rock. Okay, so here how would you talk about the overall? So let's say she's interviewer said that okay. Tell me the throw of actions. About this order. Like how would it happen?

So first what would you say all would come to the order service? Wherein the method which we have is place order would happen What would place order do is it will First full create an order then it would ask the validation into validated validation engine would return with the response. We already have validation in case so you can show him that okay this method of validation engine would be called. Then it will validation engine would return me the response. So on the basis of response if it's true or false basical validation will be Indian. What would it say that?

Okay. It's validated or it's not validated, right? So on the basis of the response from the validation engine either I would call the execute method of my order service that execute this order or I would say that we call the notification server that okay notify him that this order has been failed due to this reason and we have method of send notification in the notification service. Okay. This is for the failure for the success now execute. Execute Order method in order Services executing it.

What will execute method do execute method would deduct for buy service execute method would deduct the funds from the user. account and update the portfolio like it will make the call to the stock exchange. All of it is a conversation about Stock Exchange so we can skip it, right. Then it would update the portfolio of the user. Right after that. A success notification would be sent so a notification service would again be called and send notification method would be one.

So this would be the overall flow. Does this make sense? Thank you. So they usually interact with the service and service really in turn interact with the DT objects. They will use Duty objects. You get your objects now.

Yeah, which is GPU objects are now okay. You can say that a user. Why are we storing everything in the user debut? Why do we have everything here? This is too much right intensive. Yes it is because it is low level design.

That's why it is low level design. Because in low level design they want to see how do you handle the code? How do you talk about scalability? How do you talk about maintainability? How do you use the design patterns? Do you know what problems with come if you go by this way?

Oh, how do you use composition delegation to extend the behavior. We're not to use interfaces where to use abstract classes. Now she can clearly ask you that. Okay, why are you making interfaces and why not work with abstract class? This could be very well a question. I asked any of you.

Any of you and we can have a good discussion overhead. But I don't depend on the like coding Paradigm that you python you don't have interfaces. Oh, yeah, definitely. Yeah, most of it depends are Yes multiply but here in Java, why do we have interfaces? Why can't we have? this or do I see that's a classes and And if anybody can answer.

I think my diamond problem because and there's a diamond problem where you cannot multiple multiple implementing inheritical multiple inheritance need possible. That's why you have interfaces. You can Implement multiples. Okay. Java is a diamond problem where you can not multiply inherit from a single people a single class cannot and multiple classes. What what he means is in when we have abstract classes.

So if we have implementation they can extend only once up one abstraction but Not more than one but we can inherit multiple this what you mean. So in in Java, let's say we let's say a class wants to inherit from multiple classes, right? That's not possible because in Java you can only in it from one plus multiple and it's not multiple inheritance is allowed multiple extension is not okay. Write everyone. Multiple implementations are allowed multiple extensions are not allowed, right? That's right.

Yeah. Yeah, you said it right? Okay you what exactly? What I know is multiple enhance is not possible in Java, but that's why interfaces are used to implement multiple new multiple interest Implement multiple implements is allowed multiple. Extensions is not allowed. Yeah.

That's what I'm telling multiple inheritance is not learned you can if that's why you use multiple implements. Do again you're saying of those it? Okay. I think I'm not able to articulate but I think I got your point about this. Okay, so you cannot extend the multiple classes, but that's why you multiple interfaces. Yes.

No, no actually. That's why I'm drinking. We cannot inherit from multiple classes. That's why abstract. That's why interfaces are a better option than abstract classes in Java. mmm, I would not say this would apparently and For we can use abstract classes to define the common consulating.

It can be work as a base classes for those extension. Yeah, we have only the like we have a contract between classes. So yeah into we have to use the abstract class when we have to Define up common functionality for the case. So actually right English now and this is the right reason guys. So use abstract classes where we have common functionality. so supposedly Supposedly I'll give explain this to you with the help of an example this class slabs for you.

Absolutely, right. So for all those who have not understood just giving explaining it to you with the help of an example. Car, okay now every car has a engine, right? And starting in let's say every cards even start the same day. Just imagine I know it would be different but just imagine every cars engine would start in the same way. But every car would have different color.

Okay. So abstract making car as abstract class would make absolute sense. Why because start engine is common in every car so we can have one method in the upset class bar and everyone can extend it. Okay since here we do not have any common functionality. That's very good with interfaces. Everyone here with us.

Yeah. Everyone. Okay. Great. man Okay. So I'll get back just last question.

So let's say we extend this and let's say in the pile if I quoted in Python, so python doesn't have a interface something like that, right so I can tell you just again implementing abstract class here, but actually the concept is of Interest. They're actually I have not done too much in Python. So I don't think I would be the right to answer it probably if anyone knows more about it can answer all python. anyone here if they have any experience inviting make in that case, what I can do is please give me that question and written. I'll share my phone number with you just send me a WhatsApp or whatever or maybe you can have it you can write in the slideo link and I don't think yeah. Yeah, and I'll remember this.

I'll get your answer and probably in the next session I can answer you if that is okay. Question because I don't want to give you the wrong answer honestly. Okay. attention So let's go ahead stock service we have then third is the order service. and last one we have is notification purpose Okay, and we can have all the methods that we make here that we need. So sorry, nothing interface all the cred operation.

Sorry. We had all the credit operating so just writing it but we can write all the product operations. Okay. Then we have stock service wearing. We had getting the price so void. Okay price.

And this would this will not be void actually since we want to get the price of this would be in right get privately get we get a stop. Okay, this would be one second was at Price avoid. Text price. and we had talk and the price so we have this method and third method would be ad stock yeah. Okay, stop. Okay, great.

We have stock service in case now let's say let's go with order signs. interface so we have avoid links order you will get stock. You'll get quantity. Will get price and will get you one. Okay, same ways cancel orders avoid. Yes, so order order and get out.

The status would be the subject or the Status or return type would be order status. Or the states money get order. So let's name it. Get out of state only. Will get order. Okay, we have order service all same place.

Next go with. notifications on this why? and motivation and I think we will get in description so in this description and we were getting user also. Okay. Okay, we are done with the interfaces also now. Any questions?

Hello. Anyone, no, no. Okay. Save this now there would be implementations for all these interfaces. So for example note we have two different notification Services SMS and on this one email. Okay, so we can have implementations for you know SMS notification service Okay.

We make are notifications service. Okay. Now if you see this will have to implement the method that we have in. Notification service same way as you can make all the implementation classes for all of them. Okay, this is the way. a link are you okay with all of it?

Like video you wanted us to go, right? Yeah. I think that's good. I think that wasn't in confusion. They keep do we have to implement it. We have to show other houses.

That was my computer. I think no. No, we do not have to show the output but going for like the new chapters, which we have made they all have full implementations full implementations. Okay, as well as you run it also the main method is also there and we have run it all so so you won't find any difficulty and understanding in the coming chapters. Okay, but but in low level Design This is not us this is never asked if you see right now, so it's nice 16 we started at seven. Church to our 16 minutes already Okay.

So and this will take this much time. So that's a I think should we skip all the implementations like it's redundant work. Yeah, or should we go I think that's that's everyone if that is fine. Yeah again, okay, okay. So now we have reached in here. Okay.

Oh, thank you so much for being here. I have one. So since now you have you're here. I'll explain you one more question that is more free. Very frequently asked and you guys will be able to make it. So please bear one more minute you just adding because it would add much value to humans.

Okay? You can very easily ask me a question or interviewer can very easily and most of you might know the answer. Why do we have interfaces also? Like why do we want to make interfaces? Leave about why are we not having extra classes? And why are we having interface instead of abstract class?

My question is why aren't we having interfaces? Anybody if you can answer. those coupling dependency inversions Absolutely. so For all this if anybody don't know, okay, I'm explaining it in depth my flag slack for me, okay. Tomorrow Nilesh said that yeah. Send notification service.

No, just don't say notification rage owner. if our method like hell Yeah different three cases. Sorry implement. I'm deletion different ikc Implement for example order service put it that would get better example. Order Service as a method of place order. Now you said there's a working 2 in it.

Previously, we were not validating any on if we were not validating anyone now. I want to validate order also, so they would be different implementation of place order. Okay wherein he would be validating and then we would be executing. So if I want to have version 2 of order service only. so we want to follow the same Norms that we Had previously so we want a different implementation of the same thing. And if I want to make it a order service, I will have to make it Implement on order interface order service interface.

That is why for versioning. We have interface and interface are very much beneficial. Does this make sense to everyone if you have any questions, please? everyone netaji slope Nilesh Kiran corn dollar Good. Right. Okay, cool, then any other questions if you guys have peace?

I have one question, but this regarding that Observer pattern yes Christian not specific to this current design, but considered a city like system as people make an order. And we'll get our status right means something maybe we are monitoring change in somewhere else you getting status. So in this case, we are using observe pattern and how these distributed system how we are observing from a particular service, you might Just I'm not that much clear about that. Okay, maybe my like the order service contains hundred nodes. Okay hundred nodes. Okay, and in each node that are service logic running and I need to know about these status of the dark.

Maybe some delivered better pick and then nearby me. So I need to show these all the purpose together right how my artist service know about that particular information. Here Order service right. Now. We have everything regarding order if I talk about just a low level design. Yeah, okay this design which I made so again same analogy could be made here.

Also, he how do I know the order which are meeting zeroda, right? Why because order in order? We are having that data member order state. If it's in progress if it's failed or if it's executed successfully. So when you create a order when you place order initial state is always in progress. Now any change in the order state is made by order service.

So if you want to ask for the state, we have a method in order service get order state. If you would have noticed so that service is going to get you the status or the state of that order. Okay. It's on our listening. I try to fetching the data to give you information about the charter something. Sorry can please come on.

It's try to keep on fetching that status of the order or something else. You mean like bowling? Okay. Can you please I generally to understand the question so if suppose if I want to show the hard data to user we should keep on to check that auto status are any how exactly why why do we want to do that? Okay, let's think clearly again. Right now I've set the order status.

Okay. Okay. Why do I want to pull I would want to pull? Okay, pulling where do we have to do polling where Observer design pattern. First of all comes as a replacement to polling. Hello.

Yeah, here you. Can hear okay. So yeah, so if you want so again so for checking the stock prices, okay, here you hear your interviewer can say that? Okay. Can you pull like how are the stock price getting updated so you can very well say that might be 0 to the server might be pulling. The price again and again is the status changing on a regular basis.

No. Status is changing only once. When it's created its certain progress state. So it can remain in progress State and when will the order status means it will change? in swinging it will change when a rider starts riding right when the you know restaurant gives the packet to the rider that at that point the status changes. So who would make that change the service would make that change?

And why do we have to pull? We can you know. We can. We can send an event. SSR event server sending you can send the server sending you. very good polling would be very expensive if you Yeah, okay, once the status change in that case we directly send because notification because that's it.

Yeah, yeah. Anybody if if anybody would like to China, please? Thank polling. Okay sensitive because there too many subscribers then you have to handle request separately and that that yeah overloads the server if you have and so observable subscriber patterns and then in that you just observerskin that's get the status update when this publisher is publishing when definitely in clear. Netaji is like yeah. I'm clear with.

Thank you. Anybody else have any other questions? So sorry, I don't think we are very overtime. But the API when you told we can discuss it plus. Yeah at least and so if my interview tells me that can you tell me which are the apis? Right exposed looks like yes.

Yes. So for one API, which clearly should be exposed this. place by order Okay, what will it get it will get order details in the arguments Maybe? Query parents. Let's say just taking an example. Okay, you can have this discussion there that which API should be exposed one is stationed by placing sell order these two locations should be exposed.

make sense my yeah, okay third. user when a user enters a H app, you would have seen that there is you write your password and then you are allowed to enter so there would be some sort of token. That would be sent right so login would be something which would should be exposed. make sense yeah, okay login should be the third one fourth one username user details user details of getting portfolio airport for you because when you click on portfolio You are able to see your portfolio, right? So get portfolio something. which is shown to you to get portfolio argument again argument would be user and a validation would be happening and you know response would be coming.

Get stock information. Right. Can you click on a particular stock you're able to see all the metadata that that stock has this is also one of the APA that should. Okay. So getting there watch list, so you're able to see the stock price right of five stocks that you have in your watch list. So getting your watch list would be there.

Okay, these five six API should wait for so this question will be like asked after the coding or it will be before the coding. It depends that I did. There's no ideal way in an interview honestly. Yeah depends on the internet whenever you want to if you saw after we make the design they cannot speak. What are the apis water? Yeah.

Yeah. Can this is do you want to expose the ap of execution of order? Clearly no why because why would 0 that tell me which stock exchange appear to have to call? Why would you tell? No, right. So I don't think that if they should be exposed.

So they can very well last year. Okay, any other questions anyone? Okay, I take it as a no then. Okay cool. Then I think this was a really long session but I hope this would have been helpful. This would have added very value to this.

If you have any questions still if you have any questions, you guys can you know have ocean panel or ping me on LinkedIn wherever this is. I'm all the time available. Okay, I might respond you a bit later. But please you can have it. If you can give us good feedback. Please give us good feedbacks.

It would be really great. If you can post that feedback on any of the channel That might increase our sales or you maybe you can refer us somewhere. But yeah. Thank you so much. Thanks for being this big. Thank you.

Just out of curiosity then when it makes session. You have certain sessions are on the first Monday of everyone and third Saturday of every month. Third Saturday and first Monday and third side this is fixed. Okay. So today was the first Monday of this month. It happened and third Saturday.

So when third started every month, this is the plan like we have been going in this matter count outside of Zoom class schedule. Sorry, all the accounts that are Zoom class schedule like so so, okay. I'll share it with the investment if you if anybody don't know, okay, I show you. So this is the new UI link. I'll share the screen. This is screen number two.

So actually I have three screens are so please don't find it. I see here because this is my monitor and like this is my main camera and there are two screens. So, okay. So this is where so if you go into quantity learning here inside the zoom classes, you would be seeing all this room classes that are going to happen in the future like right now yesterday Behavioral. Conversation that had we had beautiful session. So in the next class, we'll be updating it very soon here.

And but generally this is the plan. That third Saturday and post Monday of every month for Led. Okay, good. Thanks, and thanks a lot. Thank you Lord, my my good night.

## June 2023: Live Score Updates, Polling and WebSockets

Type: Video · Length: 106 min 3 s

### Lesson notes

An open Q&A class. It covers interview rounds, standardizing code across a company, and a counter with many readers and writers. The main design is pushing live cricket scores to users: short and long polling, WebSockets, connection limits on one machine and scaling out.

### Transcript

Hey folks. Good evening. How's the day going? Oh, there's quite a few of us. Thank you all for joining. There's a lot of autopilots out there.

Uh, let me turn on my camera. Give me a second. Wonderful. Good evening. So, whiteboard behind me, which is always good. Am I audible?

Firstly, like, uh, basically if you can just on chat, let me know. Yes, Bo, you are audible. Oh, hello. So that's perfect. Okay, PA uh, good evening. Let me share my screen and see what the slide of questions are like today.

Okay. At the same time, uh, I know most of you know this, but I'll still do this. Let me share my screen here. Yes. In case this is your first Zoom class, or you haven't done this because you came here a long time back, one of the things that we have now in the system design simplified is just go to your account, uh, go to Zoom classes, and then you can integrate your Google calendar. So this is the link, and the best thing about this is you never need to miss another Zoom class.

Okay. I've integrated, that's the reason why I can just join it directly, or I can see the event details. Question, uh, initial Slido link. It's right here. You can click on this, or of course you can. Yes.

Uh, or it's also there in the, uh, event details. But you are right, this is easier. So in case you're not able to make it to a class, or if you want to ask something beforehand because you want some time around it, then you can use the side link to just ask the question. We look into it. Oh, great. I think the slide link is wrong, right?

Collaborators, share link participants. The admin link is something we should share. This is the right slide link. Okay. Let's see. Q and a.

Let's also see recent ones. Okay, everything is two weeks ago. If you have any questions, you can post them here. If you see a question, which you also want to ask, you can always like it. This is something you can do offline or online. Everything is fine while the class is going on.

You can ask your questions directly on Zoom chat. That's easy. Uh, in case you have doubts which you want to personally ask, when we take a pause, feel free to ask right directly. So, awesome. Okay. The top-rated question right now is how do you approach this question?

Let's have a look at this. Okay. Google a phone screen at the same time. Uh, let's wait for one minute before we start at seven five. There's quite a few of us. Many of us are Daniel Ashish Anon.

That's, that's always a good name. Han Panang pr. PR has autopilot here. So what does Autopilot do? Does it take minutes of the meeting or something automatically, or does it record the meeting or something? It'll kind of like create, uh, notes out of meeting.

Like, it'll take Snapshot on the same, like, uh, in case you don't want to jot down whatever, uh, uh, you are discussing. So it'll do the thing for you. You can just concentrate on the meeting basically. And how does it do it? It's got some AI in it, or it's Just Yes. Yes.

Yeah. It is doing kind of image processing and, uh, like speech, uh, processing. Oh, okay. Intense. Good stuff. Okay.

This is something new or it's been there forever. It's been there for like quite some time actually. Interesting. Uh, is asking a question. I'm working as a product developer now. My whole set of work revolves around React and a little bit of last, which is Python.

Your course revolves around Java, back backend. How can I get most of it? And I am really enthusiastic on implementing system design, right? React, react a little bit of flus. Uh, when you say react, um, without, do you mean react on the front end or It must be react on the front end, right? You don't mean no j front end.

Okay. Uh, front end. Okay. I can, I can maybe talk a little bit about that and a little bit of flasks, uh, by, so you're a product developer, which means that you get product requirements from a product manager, or is it correctly from customers, or is it the B2B business? Hi, can you hear me? Can you hear me?

Yes. Yes. What of this has been my most important doubt since three months I have joined. Okay. I always started learning from my B Tech as a dsa, and I'm always enthusiastic in being a, uh, system desk and architect. And I even, like, this was my most important thing after dsa, but how I landed up in a situation, what happened, like, I got into a complete through Hackathon.

It's a very good company. So I got there, and I am the only developer over there as of now. The, the team is of advanced analytics. The company name is ABB as C Brown Bovary. It's a very big product based company. Okay?

The thing is that as a product, I get requests, uh, by the advanced analytics team, uh, machine learning, data scientist saying that what they have done, and I have to show on the screen as a developer, and most of my work is revolving around React only most of it, but I still got Python plus work as a backend, uh, to just, uh, do some post requests, get requests, uh, sometimes, but not most of it as a Java spring or people do around who learn, uh, uh, spring and all for backend now, where I get most of the time confused that I, I bought this course without any doubt. Like I, I know that I have to learn first. I will take up the course and I will find out, find out the way what I have to, now the thing is that I'm little bit into the stuck at that point. 90% of the time I'm implementing React in my life 10% of the time when like, it's, it's like 15 days in a month after 15 days, then it's like we have to do the deployment on, then we have to call the server and just build everything and we connect. It's just like rare of the year, like in two, two or three times in a month. I'm using class can.

Mm-hmm. But so now just I want Yeah, no, just, uh, sorry, cut in between, uh, you mentioned you're a product developer. Uh, you are the only developer do you usually build, when you said most of your work is don't react, is it like you build a lot of dashboards? Yeah, lot of dashboards, lots of table, lot of graphs, everything. Lot of map, but like a whole new website. Everything.

Like every 15 days we do implementation, what they do. I'm like, I'm more onto that, but it's, as of now, it's not like I'm not liking you. But like, to be very honest, react has a very structured and a very composed way of learning. Like if I'm working on a site, if the company buys a site, then you are mostly working on what they are requirement your experiment. Uh, like you can't exp experiment more what they need as a design. Like you want this dashboard.

Like the, the side I'm also building is like, it's an internal side of a company. Yes. So I can't do much of that. Okay. I want, let's experiment this, let's experiment. I can't also experiment color coding also.

Yeah. Everything is just decided. So, um, okay, bean, this is an interesting question. Look, this is something that we also face at interview Ready, uh, because it is a startup, I guess you're working at, even if it is not a startup, at least Not startup not a let, let it say, for example, it's, it's bigger than Phillips right now. Okay. It's, it's huge.

But the dev side of it is very, uh, like you can have startups with very mature tech sites, and you can have, yeah. Very mature companies with very, you know, uh, let's say, uh, agile, should I say, uh, yeah. Tech sites. So you in a company which, um, is more focused on getting things done on the tech side than looking at the very long-term vision of how the tech is going to evolve and how it'll work out. Yeah. Also, probably don't want to invest too much right now on the, uh, let's say long-term.

And it makes sense, right? Because, uh, you know, what is the exact gain as a business to do something. So if you're building dashboards, and if you're building, uh, ways in which people can identify metrics, see anomalies, maybe find, then they are more interested in visualizing the data you are going to be. Yeah. They're, they're more, they're more interested thinking this, we want you build this work is they're like, they're more than 99% of work is on machine learning, advanced analytics. Yeah.

Then 90 working on ai. The only part I'm doing just, uh, getting that graphs and all that, they're building Jupyter and all onto the screen by my react code and all Be, then I will, uh, be, maybe I'll give you some advice which maybe others may not agree with. Uh, guys, if you're senior engineers or you know, if you've been in this situation, please chip in. But my advice will be, it is possible that your company requires a person who's able to code reasonably well. Um, and who's able to do things quickly. So if you are finding most of the things like, uh, you know, repetitive or something, yeah, yeah.

You can automate a part of it or you can, uh, if you can't automate a part of it, you have to realize that maybe your growth in this company will not be as much as let's say now at or as much as it'll be. Not to be very honest, let's Be clear. It'll be not Be. Yeah. Sorry guys. This is Hey, Garash.

Yeah. Hi. Hey. Just welcome back. So, no, I was there. I was listening to the discussion.

Yes. So, uh, you know, this kinda monotonous situation occurs, you know, once you have as your, uh, you know, vertical, and then people are, uh, I mean, your seniors are who and solely dependent on one person. So you know, it'll become one at a certain, uh, point, and you have to go for automation. But, um, automation also, you know, when you start doing automation, you'll have various viewpoints, and then you have to accommodate all, uh, and which may not be possible every time. And, uh, given an explanation to others also, you know, uh, you'll feel that why isn't anybody understanding? You know, that kinda situation will be a little frustrating.

But I've been in that situation and, uh, yeah, maybe you are, have your job. Yeah. Yeah. Would you suggest that, you know, maybe, uh, I, I, I don't want to sound negative, but would you suggest that, uh, going, if you are feeling like you're mastered area, or if you're feeling like this is not super interesting, one of the things you could do is motivate yourself by saying that, look, I care about the product instead of my learning in, in, uh, in these next few months. Or another thing which you could do if, to be frank with you, uh, is you could look for a switch. The reason I'm saying this is because I have met with people, not necessarily engineers, but I met product managers, data analysts, machine learning folks who were hired, and once you know, their growth in a startup depends on what the startup is focusing.

So your growth, maybe, you know, it might get ca very quickly. So, uh, yeah, you might eventually need to switch. Even if you automate everything, then your day will, it won't be like, your management will say, wow, you automated 80% of your tasks. Let me do a lot more. It might be like, I just need that much. Exactly.

I don't need, yeah. In which case, I think if you're looking for growth, uh, then looking around is also not a bad idea. I'll be frank with you also during layoffs, right? Many of these friends of mine who were very effective, who were able to automate a lot of their tasks in these startups and which were not focusing, like health startup was not focusing on tech that much. So some of my friends there, the first people to get laid off were them, because, you know, I just need this much. You are already automated this much out of three engineers, I need one more, one person to stay.

So that could be a thing. Plus they're looking at, uh, you know, for them, they in-house talent, which is grown for them is things for long term. So for them, the healthcare startup is more concerned about. Sales teams is more concerned about how do we get the right legal, uh, people and grow them in house while tech is like, you know, replaceable for them. While for a Google, it's different, or for any tech company, it is more like, okay, I'll build this person in-house because the tech is long term, but it's a slightly maybe, you know, biased opinion. So just take it with a pinch of salt.

Actually, that's the reality. Um, sorry to pitch. You know, we try so hard to, you know, automate everything, and then at the end, you know, you are the first person to be replaced. So, you know. Yeah, no, the, it is true everywhere. By the way, if a charter account is extremely capable and competent, and you're not really the core person in my business, then first thing I think of is you can get rid this cost.

Or, uh, data analyst, they're made all the dashboards. Now what? Now we don't, we don't really need more, so thank you, but what do we do? Uh, right? So it becomes a bit of a challenge. It is a problem.

Okay. Starting off on that very positive note. Uh, thank you. Thank you very much. Yes, yes. All the best.

And, uh, you look great with your path. You choose, uh, shed some light on off campus. Pick tech companies for two plus years experience SD one rule. Uh, if it is off campus, Mike, I think what they look at, uh, these days often is firstly the resume. Resume is something which shortlisted, uh, various parameters of that. GitHub is probably the best way to try to make a name for yourself.

Uh, at this point in time, I'm not very sure if two plus years experience, there's some other ways. Also, of course, if you're from a very reputed college or if you're from a, uh, peer company or a well reputed company, then you get a lot of offers. So for example, uh, if you're from Amazon, then most companies look at that as a, you know, as a company, which high engineering standards, or if you're from a peer company, like for example, if you're working in, yeah, what would be a peer company? Nutanix. What does Nutanix do, by the way? Or let me persuade HubSpot.

You're working at HubSpot. Storage. Storage, okay. So, uh, but I, an example, which I actually understand, sorry, uh, Salesforce and HubSpot. Yeah. They might be, you know, offering similar solutions so they know each other.

Basically, when recruiters look for people, they often look for people who are in the same space or what they know. So, uh, that would be the, as you may think, if you're talking specifically about interviews, then, uh, two plus years experience, SD one role. I think you can also apply for SD two at two plus years as a lateral. They may say no, SD one is what we can offer at this point in time, which is also okay. Uh, at, at that point then, uh, they're going to ask you mostly data structures, algorithms, questions. Many companies will also ask you some system design questions.

Okay. That'll be part of the bar raiser or hiring round or a specific system. Design round is also possible. That is the overall, uh, you know, interview process. So three data structures and algorithms. Questions.

One system designed down, which is possibly going to be replaced by another data structures and algorithms down, and one hiring manager down, which is a behavioral interview round. Thank you so much. Yeah. Yeah. Uh, just to clarify, uh, this is the, that I'm talking about five rounds is what most companies work with. Some companies take lesser rounds.

Three rounds is also fine. Any company which takes more than five rounds, you have to seriously consider, uh, that, you know, that's a lot investment on your side. Also, scheduling everything. Most, uh, can afford only five. Okay. Uh, there's a question.

I'm working as a SD two at a rmg startup. Okay? Mobile gaming is remote mobile ga, uh, startup. Previous, you were working at Amazon. Just got the, this is a direct message so you guys won't be able to read it. I'm anonymizing it mentally while reading it.

Just got the course yesterday. Major for refresher concepts. Look forward to cracking some OGs, early stage startups. That's great ish. You can also post, um, on our Discord channel. I'll share the link of discord, by the way, in case you guys are not there.

Let me post it on chat. Early stage startups, googs, okay, that's wonderful. Uh, this should help you become a engineer better in the long term. Most of the concepts explained here are good theory. Some practical concepts are explained in the live classes, uh, and your experience, and, you know, you speaking with multiple engineers and you doing these things is going to help you evolve, right? Practice is a very important component for system design.

We are working on that. Very exciting things are coming up from our side, uh, in that aspect of practical system design. But the theory is also important because if someone is talking to you in a particular language, like doctors talk to each other as renal problems or this problem, like, uh, while if they're talking to a layman, then you have to use a different language maybe. So, uh, as an engineer, you make a lot of your, you know, explanations, concise, specific terms mean specific things. That kind of theory can be explained very well here. Consistency, casual consistency.

You're talking about the cap theorem. You're talking about design, tradeoffs, latency, throughput. Many of the terms are explained here. In fact, you can just, you know, uh, the latest chapter, which is added, I think last this Friday, so four or five days ago, uh, is here in fundamentals systems design until trade-offs. If you haven't gone through this, please have a look. If you liked it, hit the like button.

If you don't like it, hit the downward. And if you can give us some comments, that will be amazing. Like, you know, if you see any scope for improvement or suggestions, so latency versus accuracy, consistency versus availability. This is the most popular one. Cap theorem touched on that. Yeah.

Yeah. So this will help you all the best fourth year student. How should I start? Oh my God, a little early here. I'm taking this course because I have, oh God. Okay.

Can you please review my resume? Resume? I'll review your resume. Resume and I'll connect with you separately. For fourth year students, this is quite early. Uh, if I was trying to just sell you everything that I could under the planet, I would say, oh, yeah, you have started early.

You have an advantage, but it's quite early for you. So I would say first, go through these resources, which are free resources. Okay? Uh, you'll also find them on YouTube here. They're better structured and obviously they're quiz and everything, so it's a little better. Once you've gone through this.

Once you've made your fundamentals and basic strong, then go for this section. This is mainly for SD one and above, right? Uh, if you're in college and undergraduate, I would, I think this point will be what you're looking for, unless you're an intern already. Even then, if you're an intern, if you're an intern somewhere, go through this, the basics in this order up to WhatsApp, uh, design or Tinder design, uh, then you can start with the fundamentals. Yeah, maybe you can have separate career calls for career counseling. Uh, an that's a good idea.

Uh, although, yeah, everything comes, comes together kind of over here now. Okay. Let's start. Any questions around system design? Guys? I think we saw quite a few questions come up.

Okay. Let me go through the recent ones. You think Scala is used across different companies? I'm working on Scala, my current company, but I don't see it being used much outside. It is not used very often. Uh, if you look at the percentage of companies which are using Scala, that should not be a problem, because I guess either you are working, are you working in a bank ion?

Then I would start guessing which bank it is, because I've heard friends who are working on Scala, you know, working in a bank, uh, it shouldn't be a problem. Scala has syntax, which is similar to Java. It's, it is a functional programming language though, so it, it behave, the way you write code there is quite different. Uh, you have very, the concept of pure functions and a lot of calculation is what usually, uh, makes people go for scholar. That's why I was wondering if you're working in a bank, because very often they're doing calculations and they want objects to be mutable because they don't want concurrency issues, uh, for various reasons. The second, I'll share the slide a link, so it shouldn't be a problem.

Okay, great. Uh, I was working on Java for about three years, uh, in the start of my career, and then I switched to Golan in around one week. It's not at hard. The if statement, the four statement, everything is the same. Can we implement a counter in MySQL DB that 10 K readers and writers do that counter per second, 10 K readers and writers at the same time? So are they 10 K or 10 K writers or both are the same?

Like, is it Right heavy read heavy, or is it equal? Okay. So, uh, who has asked this question? Either you can post on Zoom or we can, you know, if you give us a little more details, because I'm concerned, why are the 10 K readers and writers to counter in my sql? Why can't you cash some of that in memory and, you know, have most of the accounting being done in memory and flushing to disc from time to time or flushing sending to my sql? Yeah, if, okay, I need a little more details here.

Maybe, uh, yeah, here, like we can use something like a combination of Bit Cask and a Bloom filter. Uh, Yeah, my concern is they're looking for a counter. Okay. Okay. Okay. Yeah.

Like, there is this, I don't want to give solutions without doing the problem, but there is an algorithm called Hyper Log Log, which can tell you distinct elements, not, this is not necessarily a counter counter with 10 K readers and writers, uh, is interesting. Let's just take this, right. You have one divided by 10 K, which is 10 days to the power five. And in terms of nanoseconds, you have these many, so this is four, these many nanoseconds. So these many microseconds, 10 microseconds, that's a bit too fast. Okay.

Yeah. A little more details will help us here. How monorepo concept work in microservices, how different teams manage the standardizations and different technologies. Okay. We could get into this, but I would suggest you have a look at, I'm noted this down on a LinkedIn post. Yes.

This paper will explain it better than I can. Uh, I have also made a very small LinkedIn post. This is an old newspaper or a rather magazine article, which explains why they went for a monorepo and how exactly they store it. Not many technical details are here. Okay. But, uh, you could also go through Microsoft Monorepo, right?

I'll just share this link firstly on chat. To answer your question, at a very high level, uh, how do teams manage their standardizations and different technologies? Firstly, is anyone here working with a monorepo? Is everyone working with microservices? We work with a monolithic architecture. It's not a monorepo.

It's literally a single repo. You work with a monorepo? Yeah, it's a monorepo, uh, microservices. Okay. So when we are talking about standardizations, uh, okay. Normally when you have standardizations across a company, uh, for example, you know, you may expose to APIs in a particular way, or you might say that when I'm writing tests, I'll write tests in a particular way, so that even if a person is switching teams, it'll be easy for them.

Uh, who do you think is going to push these standardizations? Yeah, so there, there's a separate team. Like, um, normally in there is devex, uh, team that they call themselves, and, uh, they are responsible for like talks and having polls. So yeah, recently we had a, we had a talk on, uh, pack testing. So should we have a PAC testing or should we have something else? So, so like, basically it's kind of on that.

I, I'm also new to all this, but yeah, that, that's how it is being done. The standardization part, I think makes a lot of sense. Developer experience is what you're saying? Usually senior engineers take up this kind of, uh, decision making. For example, I need to move all the microservices in my company to Golan. That will come from some people who are quite senior in engineering, uh, field, and, uh, when they make a decision, the whole organization can follow that.

They may make a standardization. That unit test coverage has to be at least 60% across the organization. So now who's making that decision? It's somebody who's usually quite senior, uh, or product requirements usually don't push engineering requirements at this level. Different technologies, usually they try to standardize the technologies as much as possible, right? Uh, because maintaining these technologies also costs.

So yeah. How do different teams manage the things? Usually it is manually done. It is enforced. Sometimes you can enforce it like in a pull request. Also that don't merge with main, the pull example of this, or always have a feature branch with a Jira ticket.

So you can't even open a feature branch unless you have a Jira ticket link to it. That would be one way of standardization. This is, again, all of this is either what to do with best practices or what the senior engineers in that company say that would be standardizations and different technologies. Again, a decision has to be made with that particular team. A small team, you may make many decisions by yourself. You may add libraries, external libraries and everything.

That is fine. That is, that's your decision. But the larger decisions on test coverage or what logging, uh, factory should you use, all of that will be taken care of by, uh, the senior management. Interesting questions. Very, very practical questions. When should we use Rabbit MQ and Kafka?

Okay. Have a look at this video that I just released. Pull versus push Architectures. Okay. Uh, and this part, I think this will explain to you, when do we go for, say again, a message queue or an event bus. Event bus is slightly different.

You can have a look at that. Also, it's in the basics chapter. Oh, no, sorry. It's a full chapter in itself. The message queue. You can go through this chapter and go through this.

The basic idea is when do you go for a message queue? When you want to separate concerns of distribution, message distribution, uh, from the service into another component. So the benefit is if you are a, if you have a service and somebody else wants a message from you, or multiple people want a message from you, then with the message queue, you can scale that message queue independently. You also take away, uh, the logic for sending those messages to your subscribers. So all of that is taken away. People can register to the message queue.

You can enter information to the message queue. Multiple people can reuse this kind of code. So that's the time when you go for Rabbit MQ or Kafka. You go for a message queue when you want to separate our concerns, that could be one. Sometimes just the scale is too much. So you want a custom solution, which can be used across the organization.

Again, if you go for a tool, like a message queue, interesting question. Can you please help in understanding how we can create a system like Quick Bus? Okay. This is something we can look into, right? Uh, that's a interesting question. Yeah.

So I'll just go through the Zoom chats before we go for that. Yes. Uh, I'm asked a question in implementing account in my db, basically I was asked a question, how to implement a realtime inventory. Uh, I gave the answer that we can MySQL db, but the wasn't happy. This is not possible with the MySQL db. If you're going for 10 K counts.

I think one of the things that you can think of is how you count them in memory. Okay? Realtime inventory is a full-fledged system. We can pick that. Also, do we mean, so a structure by Mono, okay, interesting. Pr think that's, that's an interesting article.

Thanks for sharing that. Okay, let's, uh, have a poll, right? The poll is around basically, do we want to create an inventory management system or do we want to create a quick buzz system? Okay, real time notifications. I think because management, let's call it zep to do quite well. Uh, alright, yes, this is it.

Please vote. I share the link again on chat. Two votes in. I can, can see where the interest is. Okay, votes. Let's go to 20.

And then While, while the vote is happening, if it is not too much trouble, uh, I posted, uh, uh, uh, you know, link to recently what, uh, you shared, uh, uh, uh, basically a video that you shared. Once again, it is, uh, this One in the chat. Is it? Yeah. Uh, in the Slido. In the Slido.

Okay. Uh, can't see it. Where is it? You press enter, I guess, or is this No, No. Uh, it was there. I don't know what happened.

Maybe it's not consistent. Is there consistency slide? How to approach such question? Uh, is this the one, uh, how Tinder, like systems? No, No, it's gone. Yeah.

Or did I, uh, remove it very slightly because I was scared of the question? What could it be? Okay, Maybe you are in the No, no, It, it's not there anymore. Yeah, it's this one. Let me just copy this and paste it here. And public certificate available to everyone.

P infrastructure. Then if everyone gets certificate, can any person send request authentication, public certificate available? So in pk, uh, everyone has the public certificate and private has, uh, private certificate with the, uh, server or the sender. So in that case, if anyone gets the, uh, public certificate, then he or she can send the request over server and we can dec the payroll. But my question is, in that case, how the, uh, the authentication happens, how we ensure that leg, leg user is sending the request? Oh, no.

With the public certificate, they, uh, just encrypt with the public certificate. Then there is, it's not authentication, just fancy. Uh, what they need to do is they need to encrypt with their private certificate, uh, so that when they send you a message with their public certificate, you can identify or ensure that this message came from this person. That would be one way if you want to, uh, one of the things that often happens, this is something we did with AHA also, is when the person gives up, okay, not details. Uh, when somebody was sending message, we were first encrypting with their public key, and then, or rather with our public key. Now, nobody can read the message.

If you read, uh, encrypted with the public key, it's gone, right? To decrypt it, you need my private key, which nobody has. So the message cannot be read. Then you encrypt it with their public, uh, with their private key. I'll just draw a diagram, like easier, okay? I think the poll is also ready.

We just get to that after this. So this is a person who's sending your request. This could be anything. It could be any client, it could be a physical device. Also, I mean to say a biometric device. This is your server.

So you have private and public key here, and you have private and public key here. Now, your public key is exposed to the whole universe. This person's public key is also let us assume exposed. Uh, so what happens if they want to send a message? They first take our public key. So now this message is encrypted.

No one can read the content of this message without our private key, which assume that nobody else has. Then they take their private key and they encrypt the message, the result. Okay? What do you think will happen? The, uh, what will happen is when I get this message here, I'm going to use your public key to decrypt it, one. So I'll get gibberish.

Then I'll use my private key to decrypt the second layer, so I'll get the real message. So two things have happened. One is it is encrypted because nobody could read this message, and I'm sure that it's come from you. Is this making sense? So, uh, guru is the thing which you would showcase is the mutual ssl, correct? We are authenticating both the way, Yes.

And, uh, so two a SSL kinda, No, no, uh, ssl, uh, you mean, uh, symmetric, Not as symmetric. Uh, there are, uh, we are authenticating both sender and receiver. We are both authentic. Ring both the sides, correct? So, yes, yes. So this is, you won't Be able to read my message without Yes, that's correct.

Okay. And in a one way SSL how it's happened. So we here, I understood gi how it's happened, but in As Symmetric, as symmetric, uh, encryption is happening. Like, uh, yes. And then there's symmetric, uh, symmetric keys that both keys are the same, and then that's how, yeah. So, So in symmetric encryption, one of the algorithms you can look at is diffy helmann.

It's the easiest to understand, Yes, sir. To exchange the symmetric key over the pk. So you can now imagine that, uh, if somebody has a symmetric key, that that's basically the other party, only there's two parties there have the symmetric key is, is this making sense? There's no such thing as public or private here. Okay? Uh, there is one problem though.

What, what if you know, while you're doing the key exchange for that, you can see RSA r a helps you do the key exchange, and then you can do this most of the time. Yeah. Yeah. Uh, yes, I understood that we are encrypting our security key with the private key and sending it to the endpoint, and we are decrypting web public key, and, but, uh, uh, if our public certificate is exposed publicly, so we can download from the browser, never we can use that, correct? Yes. So anyone can send a request to our, uh, server.

Anyone can send, Um, anyone can send the request to the server. Yes. If they send with your public key encrypted, then there's nothing does. Anybody can send that, but usually they don't. Usually they have some sort of key, which is secret, either their private key, which is secret only to them, or symmetric keys, which you have already agreed upon. Yeah.

Without it, it is as good as sending, it's nothing otherwise, okay? If they send, uh, if they want to authenticate themselves, then they can take the message, interpret with their private key and give it to you, okay? That, that is a one way to authenticate themselves, but only a raw message with your public key encryption is not going to add any value. If they know who they're sending this message to, they can, you know, uh, they can just replay the attack for you. Okay? Yep.

Yeah. Understood. Yeah, that's, thank you. Awesome. Okay, let's look at, uh, all results design, low level design of event handler with given events, and it'll notify other jobs. Okay?

We can look into maybe some other time, uh, let me here before I make up, oh my God, there's 20, uh, you know, votes and, and zep at 50%. You don't me. Look at this. I, I, I voted for zep, I think, so it became 52%. Yeah. So 50 50, okay, I, I did the tiebreaker.

Zeppo is what we are going for, or inventory management. Uh, Anon. Anon. I hope you have your question ready, right? I asked the question, implementing a counter. We need, could you speak, uh, on the, on the mic and tell us what the question is?

Then we'll, you know, deep dive into that. But if you are a little right, then we can do either one of the two things. We can either guess what the requirements are or you can post them on the chat. Can you hear me? Or we can go for quick. Sure.

I think you have some responses from, okay, 50 50. Okay. Should we go for first answer? Okay, bus is now leading at 52%. Alright, let's go for quick bus then. Uh, okay.

E, q and a system like Quick Bus. Okay? Have all of us use Quick Bus? Do you know that what it does in case you happen? Then it shares live scores. Okay, someone hits a six, then you get a nice, uh, animation or scorecard.

Uh, everything around cricket, every ball that is played, uh, is, uh, that news is broadcast to the world. So you can think of a stock market with only one, um, stock, or if there are multiple matches going on, then also Big Bus will take care of that, okay? Um, and it'll show you the score. Like that's the only thing it does. So it looks like a pretty simple app. Okay?

Uh, let's get into it. Okay? Now, if you are applying for a SD one or a SD two role, it is likely that they'll say, Hey, design Quick bus or Design Zep two. But usually as you get a little more senior, you are asked to design a specific component of the system and look at specific requirements of that system. So let us, uh, look at that, if that's okay. I mean, are most of us okay with that?

Should we look at a specific part of Quick Bus? Let's not look at the profile, service, the, you know, session service and all that. Let's just focus on one thing, and that is how do we send notifications to people in real time? One part, which is everything else is fine, you can do a lot of stuff, but people are connected to the cell phones, people are connected to their desktops, and what they really want to do is they want to get real time notifications from our server if something is done. So, and also, of course, some of them may making a request to you that give me the score. Is this, uh, simple?

It looks pretty simple, right? It's just a single box. I'm not looking at the gateway. I'm not looking at anything else. I'm looking at a monolith for now, uh, which is giving us scores. So what do we need to store in our database?

What would the data schema look like? You would have a match id. Okay. Uh, what else? Yeah, yeah, yeah. Team ID or a country id.

Okay. Team id. Okay, so we are going Relational. I mean, let's first just note down the data members, then we'll decide on what database to use. Sure, sure. So what else?

What else do we need to know? Yeah, prade. Yeah, so apart from this travel, like, uh, we'll be having one more table, uh, like where we'll be maintaining, uh, like the type of match, uh, that is being played. Then we'll be having one, uh, uh, commence table, like where will be, uh, having commence by ball id, let's say 19.1. Uh, that's over like one, one over and one ball. Okay.

So, okay. So that will be kind of comment id. Okay. Okay. So initially, Yeah, yeah. Sorry, go on.

Yeah, so initially, like as we see like, uh, as we have observed like, uh, in the creek bus, like generally whenever like four, four runs, uh, has been happened or like someone has hit a six, like, that appears immediately. Okay? Right. So, uh, the way I have observed is like, uh, there's some kind of, uh, UI given to the admin, whoever is accessing it. Uh, let's say some, uh, commentators or some other member is there to, uh, audit that. So they'll be, uh, clicking that and that appears immediately.

Then someone will be adding the comment later on, like, uh, uh, or they might be editing that, uh, comment based on the over, or based on the ball. Like, uh, that's what I observed, like, uh, so we can have something like comment, uh, comment. Id then comment. Okay. Okay. So we can either have some initial comment, uh, then, uh, some description where the commentator will be, uh, typing it in or some, uh, not committer.

Basically commenter will be saying maybe some other person will be typing that in. Okay. So you, you may malam, you might have an admin who edits comments. Yes. Yes. Uh, initially you have a set of placeholder comments, like that's a massive four, or, yes, that is it, it across the ground.

Yeah, something like that. So then you have a bunch of templates, placeholders, maybe you, you know, the comment is auto generated. Now with the systems check coming up with ai, probably they try to make it as auto generated, but it's very cheap to have one person Yes. For thousands of users who's editing and making it. Very interesting, exciting. Uh, you are, you're saying that the scores appear immediately?

Uh, yeah. So scores and maybe initial comment appears immediately. This part? Yes. Then you want an edit feature that possibly are, we Can, we can have one initial comment, then we can have, uh, some description like, uh, that the person can add it in, like, uh, as I've observed, like the later comments, uh, will be appearing sometimes later. It might even take, uh, like 30 min, uh, 30 seconds to one, two minutes also.

Okay. So if you observe, So no AI is there like, as I have observed, Most likely, yes. Yeah. So, uh, after they edit the comment, you want this also to be a notify. I mean, uh, the notification take should take care of the update also. Yes.

So we can have some kind of sort pulling, like I'm thinking of in this design from the device end. Like we can have some sort. Yeah. Let's, let's just note down the, uh, things that are happening here in terms of the behavior of the system specific to notifications. Like you said, these are some great requirements. Thanks for bringing this up.

You as scores appear immediately, you have a comment. You then have the admin who is setting up a human comment, uh, what they think they might find something pretty funny also. Yeah. Uh, start time match type. I, I think, uh, okay, this, this is interesting. We're looking at match metadata also.

Yeah, yeah. One question, uh, do will players also have their, um, identity in another table? Do The players teams have, We are going very deep. We don't want to dive that deep. So one of the things that, uh, is unsure here is if we are looking at teams, then do we note all the teams that all the match, all the team players for every match that we are covering, it makes sense to do that. Mm-hmm.

However, does the notification system care about it? So for example, you have a team, let's say the Indian cricket team, and then you have players belonging to this team. Okay? So they have a team. It, so this player, uh, plays for India. They also play for Chennai, super kings.

So the same person, You see a hotspot, they're right. Yeah. Uh, now what could end up happening is, uh, for every match, I, I don't know if it is very related to the notification system. The reason being that, uh, Yeah, Yeah, it seems like, yeah, it seems like somebody's manually going to be, uh, adding this stuff. Like this player a four gets assigned to this player for this match. Got it, got it.

I missed that notification that we are just looking at the notification sorting. Yeah, no, uh, it's a good question though. Like, if you are building a system for a company and they ask you that, you know, we have a player hitting a six and or even in football personality or goal or getting a foul or getting a red card. So give me a system so that my administrator can very quickly in seconds, because this is basically my business in seconds, be able to note down a problem or, or note down an event in the game and, uh, put that into the system as quickly as possible. Cause messy hit a goal by the time you type it. That is also latency.

That is probably one of the larger latencies in your whole system. So you want the system to be super fast. You want the person to be trained with muscle memory and all that. That is also a type of problem here, a business problem, uh, in our case, like you said, yeah, we can, we can look into more on the notification side where we are expecting that the notification is already built by the admin, and now they just want it to be broadcast. Okay. So the question now comes, should we broadcast to all users or should we broadcast to a set of users?

Uh, I think the users who are interested in this game have already either kept the tab open or have it your api. So what would you like to do? There are two types of users, one who want to get the request because they have a tab open with the match, and the other is people who are hitting your api. Yeah. Prade, your, any, any Parts. Yes.

Rab. So, uh, as in India, if you'll see like, uh, we don't have good connect internet connectivity everywhere, right? In remote connection still. So if we like, uh, sending lots of, uh, uh, responses to the clients, so it'll be, uh, like overkill for the server, right? So instead, like what we can do is like, uh, from the device and request should be coming in kind of a start calling manner. Okay.

Uh, so based on the internet, connected devices will be like start pulling to the server and we'll be, uh, getting the responses. Interesting. Okay. Yeah, you're right. Many parts of India don't have very good internet connectivity, and so it makes sense that pulling may help pulling also, uh, may take away some of the problems around a thundering hood, right? Everyone needs a push notification, may not have that kind of hardware or bandwidth.

Okay. Okay. But if someone is connected to you and, uh, has a tab open, uh, ideally as a user experience, what would you say is the best user experience? You're sitting in front of the match, you have book a cabin, you paid them 30, 40 lacks, or maybe you, you just took a math seat and somebody sitting the admin sitting and typing. Is that what happened? Probably they'll have a cabin over there.

Uh, and then there, you know, sending those notifications in real time. Uh, now do you want the notification to be sent to these users, these active users, immediately through push or you want it pull is also okay, this is, Yeah, for those, uh, for those who has the tab open, uh, push is good for those who haven't pulled is the fail. Okay, so, Right. It seems like that, yeah. Seems like that, yes. So just like say where, uh, we are using pull or push.

So we'll use for, for the, uh, web website for those who can, uh, right. Say, uh, instead of pulling and, uh, pushing the messages, which will be the number of users are going to be, um, they wanted to in a real time. And, uh, so if we can go for the web socket, so that will be, uh, what I can think, uh, more better for the push pull Web sockets. Okay. Is one idea. I think someone web Socket is for two.

So web sock is for two-way communication. Do we need two-way communication? Yeah, that's a Very good point. I don't need here in this case, basically. So it would be overkill for this system. Yeah.

Long polling is one, one option, not short polling, I would say. Okay. Long polling polling, short polling, okay. Uh, all of them are largely dependent on, okay. Uh, so, uh, can someone tell the difference between short polling and long polling? Uh, basically short polling means, uh, will be, uh, requesting to server every, uh, like very frequently.

Okay. I'll be requesting to server, uh, okay. The latest information and long pulling will be like, uh, uh, for like long duration. After long duration will be making pause, uh, to the server to get the information. So in this case, uh, it is not suitable as we want the latest, uh, uh, mass score, right? So long pulling is not suitable in our case.

Okay. I, I, I'm not very sure, but I think long polling basically means that if you have a system here and you send a request, the server will not respond to you till they have an event to share. So for example, if you said, Yeah, it is just connection, time to live is ma is greater, right? That's what it is about. Yeah. Right.

So if you say TTL is like, let's say an hour or something, uh, then you are holding onto the connection and the server says, okay, I, I'll tell you, I'll tell you, I'll tell you. And then an event comes, let's say a ball is played, the server gives you a response and you say, wow, that's great. Immediately you send another request saying that, do you have anything new? So the long polling, uh, means that if the client, the client basically gets events by sending messages, and the moment they get a event update, they send another new message. So they're never leaving you. They're with you.

Uh, polling or short polling I think is, uh, as you described, PR is exactly right. You poll at regular intervals. If you get a response, very good. If you don't get a response, then it's, I mean, if you get the response that, you know, no updates, sir. So if you want to send the previous score or the previous ball and the server says, no new ball has been played, that's okay. The new ball has been played, then it can give you the latest score also along with it.

So could you tell me the, like what would you go for long polling or short polling now? Short pulling? I think I would, yeah, long calling would be better because, Uh, if we go for short polling, it would mean that we will have to create connection multiple times, which is bad. So long polling is, is would be the way to go, because then the connection lives and, uh, yeah, we are not creating multiple connections, right? No, No, because even in short polling, you can say time to live is high, so the connection does not die. You can send request and response to there.

For example, in a STP request, you can say that, you know, time to live is so and so, uh, if the other server cares, if it, which they usually do, then they'll try to keep your connection idea. Okay, I thought that is the way to like, uh, the time to live defines if it is short polling or long pulling, is it not? No, the time to live is more to do with, you know, how long should we keep the connection, right? Uh, long polling and short polling are more on the behavior side of how you are. Uh, I mean, if the server supports long polling, then yeah, then you know, there's a particular API which is going to behave that way. Okay?

And short polling is the usual way in which APIs behave. You send a request, they give you a real time, immediate response, or as soon as they possibly can. So I, I have one question regarding this, uh, short polling. So if we're, uh, calling the server multiple times, and in that case we have configured throttling and all stuffs. So in that case, uh, does request reject at server? Yeah.

How in that Case it could, the server could say too much load or the server, even if it caches. Yeah, that's a lot of requests. So the, uh, the benefit of polling or short polling is that it, the, the benefit is you are done. Like you, you make a poll and you know, you get a response. Uh, in systems like this, which have regular updates, you are probably looking for long polling mode. The communication back and forth is also lesser, firstly, and yeah, the communication is lesser.

Basically, you're sending lesser messages, you are getting the responses that you want. So that, I would probably go for long polling here. Okay. Uh, now there is another very interesting possible solution, web sockets, and someone said, why do you want two-way communication? Sure. Uh, Laura, can I explain?

I have a big idea so that I can explain the people as well why I'm suggesting the web socket. Web sockets, okay. Yeah. Uh, why I'm suggesting web sockets, when the go started, the story telling, they say, uh, he has a mobile computer, whatever the device is, and subscribers. So especially when you go using the subscriber, uh, this word. So I just thought about like, say we, I can use the mapping for who wanted to subscribe.

The, uh, wanted to subscribe the message for the, uh, for whatever the notification. So that's what I suggested. The, uh, web socket. Uh, so then when I, I will be, uh, in my mind it came like, say, mapping, um, services will be there. So the mapping services who wanted to, who are already subscribed, the messages. So we'll, uh, make the, uh, like, uh, with the help of consistent and consistent hashing and uh, uh, load balancing.

And then we, we use the, uh, web socket and we can, we can have the send a notification on the immediate basis so that who are online people, so they can directly get the, um, messaging in a very quick manner. Uh, first point and second point, who do wanted to come down from to the online? So they will be started, uh, making, uh, which node, uh, which hashing node we wanted to put that subscriber. And, uh, very, uh, uh, re re, uh, say less, uh, rescheduling the, uh, that particular users into the mode, pushing into the load, and will provide the survey notification service to the, uh, uh, to the, uh, who are coming, uh, after the, uh, like, say, coming into the online so we can find it out there. Re re uh, reschedule of the, uh, re rebalancing of the queues then. So let's Take this piece by piece, right?

Um, I'm sorry to you in between, but let's take this piece by piece. Uh, I, I think you have some very interesting concepts. Uh, the reason why you're choosing web sockets. Yeah. I think some of it may not be, uh, under the scope of web sockets as such. For example, uh, the mapping of subscribers to what motivat notifications they should get, uh, can be done without web sockets.

Also web sockets, uh, from what I understand is if you are looking for a way to communicate between the server and the client in a peer to peer fashion, right? There is no client, there is just peers. So you can send me a message, I can send you a message. This is beneficial if you are looking, uh, at a scenario where this person may want to send a message at any point in time. So for example, in chat systems, I want to send a message to the server that, that is okay, but the server wants to send a message to me at any point in time. That is weird, right?

Usually you make a request on your network, uh, if you open, you see requests are being sent all from the browser. The browser, getting a message from the server is weird. It can get a response to a previous request, but it getting a message out of the blue is here. Unless it's a peer to peer system, you can't send messages from server to client. Why is this a big deal? If you look at tp, you have a client server.

The reason it's a client server protocol is the client knows where to send the message to. The server only knows where to respond to. He doesn't really know who to connect to. Out of the blue, everybody knows where the server is, the Facebook server is, the Facebook server doesn't know where everybody is. Is that making sense at, at a high level? Uh, yes.

Okay. So we are looking at this primarily because it is a peer-to-peer protocol. Htp, uh, or client server protocol may not work for us. So we are looking at peer-to-peer, and I think some people also have this thing of real time, right? It's a, in real time you can send messages because it is a peer-to-peer protocol. In real time, you can send messages.

Okay. I, yeah. You mentioned something about consistent hashing. It's, I think you're talking about the caching of people, or are you sharding people? Uh, sharding the Subscribers. Yes.

Correct. Ok. Okay. That also can be done. Uh, but if you're just looking at the communication side, then let's look at this side, the web socket. So internally, what you're doing is maybe you are charting users according to the match that they're watching, or maybe according to India or some other country.

Makes sense? That's a, that's a good idea. Okay. But, uh, yeah. So what could we go wrong with web sockets? Why shouldn't, or why should we go for it?

You have a hand raised. I think Fazel also picked up this point. Yeah. Yeah. I, I, I don't want to talk about wave sockets, but I was, uh, I want to talk about this, uh, around this short and long polling, like, uh, I was thinking, uh, around trade offs using long polling. So basically in long polling, uh, will not be, uh, asking every time this server, right?

Like, we'll be waiting, uh, once we have the response from the server. So let's say we have like, uh, in India, uh, let's say we have like, uh, hyper users are watching simultaneously, so everyone opens the connections like, uh, TCP connections. Then, uh, there'll be so much load to the server, right? Yeah. Yeah. So it'll be impossible to manage those many TCP connections.

So instead, like, uh, only for the active, uh, tabs, we can go ahead and go for, uh, like short polling, like whenever, uh, it's required. So like long polling will be like killing the server, basically. But then this case, There's one point Pradeep, which is like, if we have short polling, that would mean that network calls. Mm-hmm. So it would also be a problem? No, Uh, let's say we are just doing read person, right?

We can, uh, cater some, uh, ready servers, right? Okay. Okay. Let's, uh, let's look into this, right? You have a, I think one concern that we have not yet really got to yet is, hey, you have a limited number of connections that you can have open at any point of time. So what's the difference between long polling and short polling here?

So, um, in short polling, it didn't work out. Get out of my way. Connection destroyed. Yeah. You can say time to live, I don't care. Uh, could be one of the attitudes we have.

What about long polling? What if we destroy the connection? What should the client do? Uh, reconnect basically, right? Yeah. The, the handshake happen, which how Yeah, but how will the client know, like, I need to reconnect, like, this guy killed my connection.

Yeah. Small button, which will just say, you know, something like Small button. Yes. That, that always works. Uh, big red button or small, but, uh, yeah. So the server could say, you know, sorry.

Bye. That could help the client know, oh, my connection just got lost. When do you think the server is going to do this? Uh, it has a limited number of connections. How do you think the server will decide that? Which connection should I keep?

Assuming number of connections is a problem, assuming that, yeah, sure. Which connections should I keep and which should I kick out? I think that will give you an idea of whether you should Yeah, we, we, we can get that. Uh, we can, yeah, we can have that like, uh, browser active, you know, whichever browser is active, we can get that information right from the client. Oh, if we want to get that information, that means it's a two, it is a two-way communication, right? Then web sockets.

Okay. Yeah. I mean, which is active. Active can also be through polling. You can, you can tell that every time when you say that, please gimme the information. That's as good as saying I'm active.

Are you talking about something is in the background. Okay. Okay. Yeah, yeah, yeah. We can do it like that as well. Like we can make the client ask us every three seconds maybe.

Yeah, something like that. Okay. Okay. But, uh, can you tell me caching policy or a policy for not caching also replacement or eviction? So cash is used, uh, replacement policy is very often. What kind of replacement policy would you use here to get rid of connections?

Who would you get rid of first? Uh, any answer on that? Uh, like, uh, we'll be having on server side, we'll be having like three tl, uh, for every connection. Okay. So like in any server, we, we are having like, uh, a limited resource, right? Yeah.

So I'm thinking of some kind of, uh, jigsaw pattern over here. So let's say at some point, uh, like, uh, let's say for a specific node, we have, uh, uh, a hundred thousand connections at the moment. Ok. Assuming like it's, uh, uh, uh, no, it's an instance with, uh, like, uh, huge, uh, specific essence, like Yeah, Of course, of course. So, okay. So we'll be following kind of jigsaw pattern.

Let's say, uh, uh, we are gathering around, uh, 10,000 connection or a hundred thousand, uh, connections, uh, per second. Then, uh, per second, or let's say for 10 seconds, we are capturing, uh, to that many connection. Then, uh, when, uh, it is going part that we'll be dropping all of them at the moment. Okay? Okay. So you'll drop all connections.

Yeah. Given like, uh, as we have browsers, right? It'll be, uh, casting the last data in the, uh, in the user sent, so users could be able to view the last data. So the match, It's, it's as good as just restarting the server. Like, get rid of all my memory, let's start fresh. Okay.

Kind jigsaw pattern. Like, Okay, okay, interesting. So, you know, you need hundred K. Sometime you're like, uh, I don't know who's alive, who's dead. If you're interested, make a connection. Again, I'm just dropping everything.

Okay. So that's, that's option one, which is drop all connections. Can you notice any drawback here? What do you think your users are going to think? I made a connection. Yeah.

And suddenly it's like, oh, Okay, so What do you think your DevOps guy is going to think when they see this massive spike and the whole thundering or everyone is like mirror connection, mirror connection. Uh, so they'll Be a little, a little angry From, from a user, user perspective. Like, uh, uh, I observed like in also like, will not be getting the status immediately. Yeah. If you watching the TV and in the mobile or laptop wherever, right? So, uh, you might observe that, uh, in the TV someone has hit the six, but still it has not appeared in the app, even though you have good connection, good internet connection, right?

Ok, Let's, let's put It this way. So doesn't we guarantee, Let's put it this way. Let's say you're on a zoom call right now, okay? And I say connections are too many. Let's just get rid of everything, and then let's start afresh. Anybody who's interested in the zoom class, the, let's say some other person also is having some zoom class.

Some other person is having a zoom class. People are interested, will any may connect, but in terms of user experience, what will happen is you will get upset. You will feel like, dude, uh, I made a connection. Now I had to again, reestablish the connection. It's also going to give you a big memory spike. Okay?

So, and of course, a lot of, immediately, a lot of connections are coming in along with the connections. You might be doing some background tasks also for a connection. Maybe you store something, maybe you consider that to be a special event. So it is, it feels like a thundering hurt to me. So drop all connections is a possibility, but I would say let us keep that, uh, aside. Let us in Instead, think of a cache, right?

In a cache, if you have too much or uh, too little memory, what do you do? You replace, so let's come back to a replacement. What kind of replacement algorithm will you use? I'll give you a big hint. Also. It starts with L and ends with a U.

So what could come here? Okay, yeah. I'd like to add on the, on my previous points, actually. Like, uh, given our system, we are showing only scores, right? It's not a streaming platform or, uh, or kind of this video meeting platform, right? Mm-hmm.

We just, so only text. So yes, we have this browser on where, whether it's in desktop or mobile, okay? It doesn't matter, right? Yeah. We'll not be refreshing it every time. Like user may refresh, then like the request will be going directly to server, right?

Yeah. So, uh, in our case, like it'll be a still, uh, tab, right? Yeah. So the score will be coming in due to the start pulling, uh, from our device. Yes. Or let's say we are sending from, uh, the server.

So the store is coming in because you're able to make a connection with the server, and the server is probably going to use a policy, which is good for people who are not necessarily loyal, but people are interested in this match. This is a more of a business decision or more of a practical decision based on, uh, user behavior. You are probably going for least recently used, which means this person checked for the score, keep the connection alive after some time. Eventually they'll be thrown out of the queue. If they don't ask for a score, not the queue, the connection tool and connections will keep getting freed up, or at least if you have to replace a new connection, if a new user comes in, you look at the least recently used connection, you get rid of it and give it to this person. Is this making sense?

Yeah, but we were Also discussing, uh, yeah, but we were also discussing, uh, uh, two type of a strategy, right? Push and pull. Yeah. So first, when we have this clear that we are looking to, we have a limited number of connections, and we are now, let us talk about long polling and short polling and decide which one should we go for. So in long polling, what would happen if we epic the connection, they would retry or they should not retry. Now we are talking about client behavior, and in short polling, there's no such thing as don't retry.

They just keep trying in long polling. Also, they will retry, but when will they retry? How do they know that the connection has broken? Either you say no or they retry after a certain time Interval. Yeah. Is this making sense?

After five minutes, if I don't give you an update, get scared and send a message anyway, okay? Okay. By the way, in five minutes, if a user does not see any changes, they're probably going to hit the refresh button again and again, they browser, they're going to refresh it, right? Okay, so which one should we choose? Uh, the answer is nothing new came out of this, you know, eviction policy or the behavior. So long polling still looks better.

Anyone here, would anyone, whether the AI is here? I i, if I put my hand up, many times it shows the hand is up. Like my hand is up. Yeah. Firstly, is this making sense overall why we are not going for short polling? Short polling doesn't seem to have any benefits in this case over long polling.

That's the reason why we are polling is a possibility. But if we have to go for polling, then we'll go for long polling. Uh, okay, if, if everyone is on the same page, then coming back to web sockets, it's real time, it's peer to peer. Now, let us ask the question, should we go for web sockets? But this cash may also cause problem related to fraud sale. Our cash is limited and there comes a higher scale, and we keep on removing and adding users in the cash, okay?

Ish. Uh, so we have to ask ourselves, what is alternative, right? If you, it's not, uh, a cache. This is not a cache, this is the number of connections that your system can make. It's not a cache in the traditional sense. If you get a high scale and you are hardware is not able to handle it, then you are probably going to scale out.

Is that making sense? Otherwise, you, you say, okay, you have only two options. One is poor user experience or spend more money. Those are only two options you have. Eventually, you have to scale out, assuming that your business is making a lot of money because you are getting so many requests you can, and you're, you know, sharing ads and everything. I, I will assume that you're going to scale out.

That would be the way to go. Okay, awesome. So, uh, coming back again to web sockets, I'll tell you, I think fa you touched on this, uh, little bit. Two-way communication is what you don't necessarily need. You don't need peer to peer, you need the server telling you what has come. So does anyone know of any technology in terms of, you know, server sending things, sending events, ssc Yeah, net Netflix, Netflix videos that, that comes to us.

It's ssc, right? Ssc Netflix video. Okay. I'm, I'm, no, I mean, like, I'm thinking that it's streaming, right? So it's continuously server is sending something, right? Can we think of it like that?

Yes. Yeah, you could think of it like that. Yeah. I mean, if you, if you think of, uh, every shot or a few seconds as a, but that, that is a little different. It's like, uh, you get from a CDN and you prefer, Okay, it's, it's some cdn. Yeah, it's not, it's, yeah, it's not from server itself.

Yeah. Yeah. These guys are not doing the cdn. I think, uh, part important point, uh, which was You don't have a cdn, it's a text-based thing. So even the images that they have, they're probably just going to give you a CD URL to hit. So based on I'm an Indian, uh, they'll show me, I don't know.

And if I'm a Sri Lankan, then they may show me some ad for Sri Lanka, so they'll put me in cohorts and all that for that. You can have a look at this video on, this is one of the recent videos, right? If you're looking for that live, yeah. Live video streaming, uh, virtual advertising. This is something you can look into. At the same time, most of this discussion is covered in push architectures, uh, and also network protocols.

So you can have a look over there also, but we are just deep dive because, you know, we should know end to end what's going on. So web sockets is not something that we would, uh, ideally like to go for. Here you have something called server side events, okay? Or other server sent events, I think, let me check that. Yes, server sent events. Okay, pretty simple to implement because underlying it is htp.

How does this benefit? Well, server and events have a clear idea that, uh, the server is going to be sending you an event back. Okay? So it's not as heavy as a web socket connection. You are not expecting peer-to-peer communication. Uh, keep alive is also easier to implement over there, all that stuff.

Sse are basically a long lived connection where servers sent notifications. That's it. Nothing more, right? Yeah, yeah. It is just for this corpus, I think You can think of it very similar to long polling, but in long polling, you make a request every time. Here it's more like, you know, the server can keep sending emails.

Oh, okay. Okay. The bandwidth requirement is also a little less. Okay? So there is just one request, and then servers keep sending responses right at whenever it gets one. Yeah.

So if in htp, if you have a very large response, like a massive response, then you can say that, oh, I'm going to break it into pieces and send it to you. Now, just think of it as a clever way of, I send you some update a little later, I'll send you another update. And so it is looking like I'm taking one response and breaking it into pieces. In reality, what I'm doing is I'm sending you updates. Got it, got it. Ok.

Have a look at sentiment. They are, uh, they're useful in some cases like this, right? So we have this, we have a match, okay? We are able to send events to these people. Is this what you want? Uh, do you want to push notifications as soon as possible?

Yes, absolutely. Your Useful as an app is basically how many people you can push notifications too. At no point do you want pull. Sometimes you have to do it because you don't have a choice, but a cricket broadcasting app is never going to say pull events from out of choice. It's only going to do it out of force. Is that making sense, guys?

Uh, the business requirement is very much for push, push, push. So you'll do your level best to push as many notifications as you possibly can. If you can push it to all the active users, then you try and active users also, and so on. So if we challenge our ourself a bit and we say that we have hit our limit of pushing, like because of like throttling anything, something hard or something, uh, then what is, like, what's next for us? Well, if you hit the limit for pushing, uh, then there are only two things you can, one is scale out, so, but then you hit your business limit also. So the next thing is pull.

So now problems will start. Of course, if you have a limit of the number of connections and people are all active, what happens to a cash where there are a lot of users who are active and you know, you're getting an entry in another user comes in and you have to this entry before it's time. Okay? So that sort of problem will start, okay? Okay. Yeah.

The, the problem is here, memory versus latency. Yeah, it, it'll be race condition for, for getting the connection and nobody will eventually get the connection because yeah, something like that, right? Uh, raise conditions. It's called thrashing. Okay? Okay.

Thrashing is the exact, um, how do we decide? Yeah, you can have a look. The new chapter is actually pretty interesting in that way, many of the design tradeoffs can be, so thrashing would mean that you have, you're doing little work, but you're doing a lot of background work. So create a connection, give them a response. Very good. New user came in, said, create a connection for me.

Oh, I've run outta connections. Delete this connection. Now replace it. Then the old user comes back, says, where's my connection? We say, oh, we, we deleted it. Okay, remove this new connection, add a response for it.

You see, I'm basically not able to do my job properly. I'm creating and deleting connections all the time. So scaling out is the only option here. Like, yeah, yeah. Hopefully you are making more money. Hopefully you, you're not a company which is living on investment money.

Uh, you have a profit model and the more users you have, the more money you are making, the more you can scale out. Sure. Right? Yeah. Or you can go for a c investment also and then, you know, buy some more service. I, I know, I know.

I, aye, Aye, that's always an option. Any questions, guys? On this? Red is pop sub. Okay. Yeah.

That's, that's also something you can do. You can, at the end of the day, the, uh, the connections there also are limited, but it can take a lot. Also, how many connections do you think, uh, single machine can hold? Yeah, that depends on so many factors, right? Like, yeah, Let's the size of the, the connection, let's, I mean the theoretical limit, Okay, so, um, so there, so there's a limit on, on file descriptors in Linux, right? Okay.

So that is one limit. Um, okay, I Limit is, what is that, 64,000, I guess, Yeah, some 64,000. So two raised to power something. Yeah. So that is one limit. Another is like jhi, like, I mean, it's, it's unlikely that we go to that.

What will happen before that, and there will be, we will have a less heap and it'll crash even before that, before we go to that limit. So Before we go there, uh, do you think we can have more connections than 65, 60 4,000? Um, this is, this is the limit of file descriptor. And, and from there, logically I'm saying that we cannot have more connection. Okay? Okay, because So what does the file descriptor map, does it map to a port?

Yeah. Okay. Okay. So e every connection will come, uh, and it'll map to whatever port we have exposed our application, right? Two. Okay.

Yes. Uh, maybe, uh, So let's say, uh, like, uh, a port, like a client running, uh, requesting from a code of 3, 4 56 will request to our server at 80, let's say, or 4 43 if it is a CTPs. And that becomes like, and with that there, there will be a file descriptor created in in the next, and that's one file descriptor. And there will be, Let's, let's look at this port, right? Local host, 80, 80. How many people do you think can connect to this app?

Uh, given Like, there is no limit, because anyone can connect, because, uh, like from that standpoint, because everyone is unique, right? Yeah. Multiple messages can hit the same. So you can listen right to that and multiple people can connect to that port. So maybe this is not the, uh, limit, roughly, you're right. Heat memory is what you're looking at, how you can store.

Of course, there's also a lot of auxiliary data structures that you might want to keep, but you can, if you optimize enough, store a million connections in a box, yeah, it's, it's like, uh, a professional bodybuilder, not, not very easy, but not unheard of. Okay? So why, why I say that file descriptor is a limit is because, uh, there was one time, uh, I got to a point where, uh, we were hitting our limit for file descriptor for different thing, for a different thing, okay? And then, um, and then I got to know that every connection creates a file descriptor. So, so when I connect these two separate things together, I say that there is a limit to a connection based on the number of file descriptor that we can have. That's how I say, I don't know.

I mean, it's logical. Okay. Okay. Have a look at, uh, this thing, I don't know if I mentioned it in the interview already, lessons, but very simple query. Uh, how many connections? Have a look at the stack or two answer for this.

Hmm. Okay. I don't think this was the answer I was looking at, but yeah. Single box even here agrees. Okay. So I have worked in a system where, yes, this was a case where we had not 1 million connections, but we have hundreds of thousands of connections in a single box.

So, and this is like years back. I'm talking about six years ago. So, but then million is like much harder. I'm sure this guy, I'm not sure what language also he was using and, uh, how much optimization he might have done, but yeah, it's possible, definitely possible we're using, But, but you understand what I'm saying, right? Uh, I'm saying that there is a limit, there is a limit of create, create creation of file descriptor, right? There is a Limit, but that limit has nothing to do with connections.

Every connection, having a file descriptor, you'll have to look into that. Every connection does not have a file descriptor, right? You can share, uh, amongst connections. So that is one thing, okay? Yeah, You could of course do it per connection, but that's going to get you kicked, right? Uh, what you, and what is the definition of a connection?

Also, you can have a look at that. So TCP connection is, uh, is much lighter. So like if you, if you think of a connection as a file descriptor, then of course you have a limit of 65,000, but TCP connections don't have their own, like, you have a place to write to, but it's not a file descriptor. When you want it, you get it. That's, that's the way to think of it. Okay.

Okay. Yeah, I think that will be interesting to know, but yeah, I was, I was logically connecting these two dots. Yes, yes, of course. That makes sense. Uh, the reason I'm digging into it is because there's a, a lot of, a lot of us believe in the same thing. Alright?

I, I don't know if I was able to do justice because it's a bit involved, but okay. Also was I, I don't know if I was able to do justice to these network protocols. Uh, but I hope now if someone asks you that, which one should you go on? You'll have a rough idea of, you know, uh, what would be ideal depending on the scenario. Yeah. PR you have your hand.

Yeah. Sorry, I, Speaking on, yeah, I just have one thing. Uh, Sure, sure. Go ahead. Go ahead. Yeah, sure.

Yeah. So, uh, I was thinking, uh, in terms of like utilizing resources, like, uh, like we should as a engineer, like we should use as less resources as possible, right? We should, uh, bring more, uh, revenues to the company. Yeah. Cost savings. Yeah, sure.

Yeah. So just as now you saw in stack of ide, like we have stack, uh, two instance, like, which is giving us around like 1 million connections, right? Yeah. So I was thinking of, uh, combining this sort, pulling and that jigsaw pattern, uh, yeah. In this scenario, ok, so let's say whatever the requests that are coming in, let's say 1 million requests are coming in every second. Mm-hmm.

Okay. And let's say we are capturing, uh, uh, those requests in like four or five seconds, okay? And we put other requests in the queue. Okay? Then let's say every five seconds we are dropping those many requests. Then we are accepting new connections again, just like that.

We keep on going. We, we don't, Why are you, why would you go for dropping connections? I, I'm not getting that point. Like, dropping connections is not good. Yes, as, uh, like we have this thought pulling in place, we are continuously asking to the server. So That is what is happening here is I think you are looking at the solution and then you're thinking of how do we make this work here?

Which is fine if you have a existing solution, if you need to refactor, then you have to look at the cost of refactoring or the cost of implementing this new solution. I need to test it and everything. If you're looking at it from a clean slate, then dropping connections in general is not something that the product would like to have. It could bring in pressure, uh, you know, and even short bursts, stop dropping. If you don't need it, you don't need to do it. You don't need to drop any connections.

You can keep those connections alive. You know, you are going to spend the same amount of money in thehe of instance, whether it is keeping the connection or dropping it. So what you want to do is you want it always loaded as much as you possibly can, and then you want to get rid of the people who are not of the highest priority. That would be okay, I would suggest. Yeah, if you, if you look at it from that angle, then the problem changes. Otherwise, it, uh, if you are looking at it from the problem of, um, how do we manage so many connections, then of course many solutions can come in.

Specific to this requirement, though, I would, uh, yeah. Specific to this requirement, I, I don't think dropping connections will be fine. It, uh, we, uh, when we were trying a calling application where people would call, similar to Zoom, again, the same problem is if you drop a connection immediately, client says, create another one. So it's just a thundering her. In fact, we had such a big problem that I can show you this, uh, have a look at this chapter, Clark. Yes.

Yeah. Connection related to ING Hurts. This could help, you know, uh, highlight the problem of when you restart a server, even though you have some code change, even if you have changed your algorithm or, you know, improved on something or your database schema as a change or something or the other, you just want to do a feature add. But when you deploy, you break all these connections and everybody's like, okay, okay, okay, please add me. So what you want do is yeah, then you want to separate out connections with, uh, the, the connection metadata with the, with the actual connection gateways. So this chapter is actually quite interesting.

I think it'll mm-hmm. It'll add value. Sure. I, I'll take a look. Yeah. Awesome.

Awesome. Folks, I think this was quite interesting. I, uh, PR extra. Thanks for all the awesome questions. Uh, Abhi, Joti, Priyanka, uh, Pratik, rhi, spu, thank you for staying back. Uh, Nhan, you're also here.

Okay. Uh, thanks for, uh, staying back and thank you for, you know, this amazing discussion. I think it was really, uh, interesting for me to again, look back into these network protocols in depth and also how we can maintain these connections for our app, which has to give updates in real time. That's the biggest challenge, right? Uh, we didn't get into how the admin can type things quickly because, but that also is an interesting challenge actually. Okay.

How you can give them a dashboard, which is very fast. Yes. Uh, alright. Thanks for coming guys, and I'll see you in the next class. See you. Bye-bye.

Bye Akha. Thanks. Thank you. Thank you. Bye.

## July 2023: Twitter Design with Trending

Type: Video · Length: 81 min 52 s

### Lesson notes

A mock interview that designs Twitter at low level. It covers users, tweets, comments and reactions as a common commentable abstraction, a timeline service and avoiding a crash from fan-out to followers, then a trending list shared by everyone and an abstract class for shared behavior.

### Transcript

Hi, how are you? I'm fine. Seven. Yeah. Hey, Aaron. Good morning.

Hi. I'm sorry. Good evening. Hi, good evening. I've woken up too many times today. Uh, one second.

I just is also with us. Hey, how's going? College. College. Okay. Awesome.

All the best. And, uh, thank you. You know, if you have any things that we can do for you in this class, let us know. Yeah, you are. The stage is yours. Thank you.

You Kumar. Let's, let's go ahead. Awesome. Hey, Kumar. Hey, tha uh, we're sharing this slide link. Hey, Karen, if you have any questions, always can post it here.

We'll wait for a few more minutes for people to join. Okay. Hey, Akash. Hey. Hi, Shivan. Hi Karen.

Guys, we are sharing a link here. If you guys have any doubts, please posted it here. Can you guys hear if you can give a yes or a no? It's, yeah, for a minute. Okay. Okay.

I think, uh, we should start now. Hey, everyone. Uh, I'm sharing a slide link here with you guys. If you guys have any questions, uh, you can post it here. We'll start picking the lock. Or if not, we can pick up any system and then we can properly below level, or you can tell it directly.

Also, if you have any questions, I can't see any question as such on the slide. Okay. Uh, what should we pick today then? Do you have anything in your mind? Can you hear me? Yeah.

Just thinking about, yeah. Um, by, we have uploaded, uh, strategy design pattern. Anybody, did anyone get the chance to view that? You can probably share your feedbacks reviews. Uh, where have you uploaded that? On YouTube?

No, no, no. Uh, on the paid force. Oh, wait, I'll show you. Wait, I'll show you. Uh, I'll share my screen with you. Okay.

So under, uh, under the design patterns, uh, so proper strategy design pattern has been uploaded. It's a video lesson. Alright. Yeah. I've just finished that book. Uh, by, or design patterns head for design, design patterns.

So, okay. Yeah. I look forward to it. Sure. Okay. Thank you.

Do provide us with any feedback or if you have any questions you can ask. Definitely. Hey, Karen, can you ask a question? No, sorry. You raise your hand. Kiran.

Sorry, I was, uh, relogging. I was, uh, I slider on mobile. I Was outside. Oh. Oh, okay. No problem.

No problem. Okay, so what should we pick as today's topic? If you guys have anything, your mind guys, is everyone tired today? Monday Blues Monday. Blue Monday, yeah. Thanks for anything.

We can have a discussion also about market also. Any discussion if you guys want to add Hello? How can we enter into stock market investing? Sorry, can you hear me? Yeah, can you hear me? Yeah, check.

So you were saying something? Yeah, I was asking how do, do you have any idea about stock market investing and about stuff? Oh, okay. Uh, I, I invested in Microsoft, Nvidia, personally, Google also. Oh, nice. Yeah, all of them are at good returns.

Like So what platform do you use for uh, doing this? I, I use Vested and Id money is also there. Personally. I, yeah, personally I like wasted. Yeah. Should we pick any topic?

Should we pick? Uh, let's say, uh, do you guys want to pick any platform which we should, uh, low level design today? Well, should it pick Zuma? Uh, It's Zoom matter or Twitter? Zuma or Twitter. Yeah, Twitter I would suggest, yeah, Twitter.

Cause uh, because the new, uh, changes, it'll be really interesting to know about. Also, there, there was also a recent news that, uh, mark Zuckerberg is planning to launch a Twitter com competitor. Is he? Oh, Uh, yeah, yeah, yeah. That's all over. Even Musk can, uh, Zuckerberg are planning to fight in that, uh, COUM in Europe.

Okay. Yeah. Probably news to me as Right. But yeah, I think it would be good to go back Twitter. Yeah, sure. Let's start.

Okay. I'm sharing my iPad screen for now, where we'll list down everything. Okay. Yeah, yeah. Okay. Okay.

So let's start with, uh, short lifting the requirements that we have. Um, first is like everyone knows a user can do it, right? So two, it is there. Uh, then we have reactions also onto it, right? So reactions is one. The next is a person comments also on it to eat.

So comment on to eat is there, as well as comment on comment is also there, right? Yeah. So comment on tweet slash comment, like, we'll both, I'll handle both. The reaction is also on both tweet and a comment, right? This is there. Then what else do we have?

Do we have, uh, followers and we are following, right? Hello? Yeah. Yeah, yeah. So we can follow someone following. Also we have, so we have followings.

Okay. Next is, um, everyone has his own time where we see all the posts, uh, that the people whom we are following posts, right? So timeline is also there. Yeah, there is also explore section. Yeah. Okay.

Explore section. Yeah. And trending explore section. Yeah. Trending as well. Okay, great.

What else should we pick? What else is that thread? That is comment, right? Comments, thread now. Oh, comment. Yeah.

So yeah, that we have comment on and the comment. So comment on a comment side only. Mm-hmm. Yeah. Yeah. This is pretty good for now for a user, I feel we'll not be able to many also, but yeah.

Okay. Uh, what do you think about the system? Because system is also there. So if you consider system, okay, yeah. So first, first is sending notifications. So system do send notifications, right?

If somebody has tweeted, and of course I am his follower, so I do get a notification to check, right? So is it subscriber model or is it a hybrid model? Okay. Uh, so, uh, it should be, uh, publisher, subscriber. As of now, I'm like this, but could change as well. So we'll go over the design and then we'll decide.

Okay? Okay. Yeah. Uh, second is it enables searching also, right? So when I am searching somebody, uh, so it gives me, uh, you know, suggestions and so it enables searching, right? So searching is another functionality that system enables.

What's the third one? What else can we think of searching? Is there notifications? Is there, I think I personally can't think of if you guys can think of anything else. Okay, uh, let's go with this then. Uh, cool.

Okay. So I think we're pretty much done with the class. Oh, use case diagram, so to say, right? We should start with the class diagram. So first, just by looking at it first is tweet, right? The first one should be tweet, let's build it up.

And second actor, so to say, is user. Of course. So user would also be there, right? So what should we start with? Tell, tell me what should we begin with guys, please? Okay.

Uh, let's do one thing here. Last thing. There was a demand offer interview, sort of, uh, you know, session, right? You wanted us to play an, so let's say I am, uh, like I am the interviewee. I'm a student who's giving interview to you guys. Okay?

So behave like an interviewer. Question me at whichever place you like, right? Shortlist things for me, right? Help me with that. Ask your questions and let's see how I answer all your questions. How I, how you guys want to change that direction.

And it would be a good fun. Let's try. Okay. Okay. Is everyone okay with this Ash Slope? Tire is already responded.

Yeah. Shivan, Samir, and Kumar, right? Okay. Let's start with this. Probably you can unmute all of yourself also if you want to, right? Let's have a good discussion.

Okay, good. Uh, so Ill beginning with, uh, user so to say, but I Yeah, Please. So I had some issue with the mobile, so yeah, so there I two things I was thinking, uh, know. So there's a retweet, uh, functionality and then probably, uh, uh, ask for a poll to all my followers, right? Okay. So there were two, uh, functionalities.

I think, uh, we start in the member requirement. Sure, I'll add that re to it. A person can re to it. Yeah. Okay. And another one is Pulling.

Yes. Yeah. Okay. Okay. I put it. Okay.

So, uh, as of now, I would want this generally happen. We are too many requirements in an interview. So I would want you guys to tell me which four to five requirements or let six requirements you would want me to timeline. Creation of timeline. Timeline. Follow someone is basic.

Yeah. Okay. Follow someone. Follow and following is one and the same thing. So we'll pick that up as well. Tell me one more.

Trending sections. Yeah. Okay, good. Uh, we'll go with this for system, if you would like me to pick in both the requirements, one requirement, whatever. Okay, let's go with both, okay? Right now time is seven 16.

Okay, let's keep this interview for one hour. We'll not stop the session there, but let's see where we go, where we end up. Okay. In one type. Okay, guys? Okay.

Yeah, Yeah, sure. Okay, good. That's alright. So I'm starting with the user, user or I think profile would be a better option because a user might have different many profiles, right? So I'll begin with profile. Profile would be a better naming.

Yeah, a profile would have a name, so to say, right? Which could be string. Okay? Second is a profile would always know which tweets he has made, right? So I think I should keep it as a list of tweet, of course would have so many different things. Uh, so I am making tweet as a separate entity altogether.

Okay, so tweet. Okay. Now, uh, personally I've seen this question. This is a complex object list of tweet, right? So it is recommended to make a separate entity for this. Also.

Why? Uh, because you might have to add some to it, remove some tweet, right? So it is always beneficial to have this, like, it's not that complex as an object also, but, so depending on your use case, you can decide if you want to keep it inside this class or if you want to have a separate entity altogether. So, yeah. Okay. Third is, uh, a profile would be following many different profiles, right?

So list of, again, profile only. And these would be followings. Again, there would be so many people or profiles who would be following me as well. So I believe it should be list of profile and that would be followers. Okay? What's next?

I think followings are there, followers are done. Okay? If I'm a celebrity or not, because I would get a blue tick, right? So I think I should keep it as a bull. Bullion is seller. Uh, this is next.

Every user has this timeline, right? Every profile has its timeline, own timeline and timeline. As of now, if you would be pretty complex. So I am making a separate entity for a timeline as well. Okay? Uh, this should be profile as of now.

Of course there could be other metadata as as well, which is picture and uh, description, but we are ignoring that for now. Okay? So let's go with this profile. If there would be something else as well. We'll add it. Does this look fine everyone?

Any questions? Hey, name is the username, right? The Yeah, yeah. Username or whatever. Like some sort of unique id, right? The password would be we are abstracting password and other things.

No. Or, or, Yeah. Yeah, yeah. Good. Great. I, uh, you said that one user has a many profile.

How can you relate this one? I'm not getting actually, So actually what happens is you post, like, I didn't say one user can have many profiles. Actually uhhuh, I said that I personally can make multiple profiles, right? Like multiple IDs. That is, But for the system, it's a one request or one profile, even though if you're a single user, but for profiles has a multiple Correct. That way you want.

We wanted to say, Actually, I, I said that profile would be better naming, yeah. Oh, okay. Yeah. Instead of user. Yeah, because actually we deal with profiles. Now we call profile.

Over there a profile can have a name, a profile has a password, right? Oh, okay. Okay. Got it. Got it, got it. We could say user also, but in actual sense, user is making multiple profiles as well.

Right? Which he knows of every ID and password he knows of. So that's why I thought profile would be a better naming. Ok. Ok. Got it.

Cool. Let's go for tweet then. Uh, what is a tweet? Have has a description, string description second, A tweet would always be created at a particular time, right? So let's have it in local date time, which is created at third, which I can think of is a tweet will always have some reactions over it. So we can again, have that as a list of reactions.

Reactions. Now I am thinking of making a reaction as a separate entity altogether. Uh, but what's a reaction? Reaction is particular area profile who is giving something, right? So we can store directly profiles also, but uh, I think there could be some other things as well. So I'm extracting it out.

I'll make a different entity altogether. Okay. Then the next is there are multiple comments on uh, to, right, so list of comments. Okay, I think this should be good. I personally think tool class should be this, Erin. And so the description, no, generally it's uh, limited to one 40 characters, right?

So, okay. Can we make the limitation on the variable declaration itself or later on add some other validation messages on the, I think we should add some validation mm-hmm. On, on it, right? And that validation system. Okay. So I think system should be there, would validation.

Okay. Got it. Okay. Yeah, but not with the tweet, I feel. Sure. Okay.

And any tweet? Can I have audio image video? Yeah. Yeah, that, so that's what we can probably have different, uh, class altogether for this. We have, I was trying to keep it simple because uh, that's not really the core of the problem, that's why. But yeah, we can have that as well.

So instead of screen, we can have probably, uh, you know, two type as in email and it could be image, uh, text and uh, audio. So this could be there, but order to keep it simple. Yeah, sure. Okay. So I think please is also done from my side. I, if there would be anything else I would add going forward.

Uh, okay, so two things. If you see here, reaction and comments, right? So we want to have that. And of course timeline is also something which we have not read. So let's go for comment. Let's begin with for me.

Ok. First and first comment is having a description, right? Uh, again, it's the same as that. We have a post as well. I give you one second. I think my father's calling.

Gimme one sec. Yeah, so sorry, I'm back. Yeah, so comments, comment, of course will have description. Let's keep it simple, plain string description, uh, seconds. Of course it will have created at time, like at what time it's created, right? Local date, time created act.

Okay. Third thing, comment will have reaction on it, right? So we can have a list of the reactions. Reactions next. A comment can have multiple comments on it as well. That's what makes it a thread.

So list of comment, comments. Okay? I think this should be good for comments. No. Okay. Any questions?

Anyone? Guys, any questions? Okay, cool. I'll take it as well. No. Okay, next is the reactions.

Okay, so can you just zoom a bit and then show the, um, class, like I was just thinking the profile would have. So the comments is a, uh, independent entity. Is it Aaron? Um, yeah, as a user, right? Uh, I, if I want to know, uh, if one of my follower what all comments he has made, uh, so I have to go to his profile and then from prof, from his profile, I can get all the comments or is the relationship I was thinking, Ok, ok. Yeah, yeah, yeah.

So Tweet has a list of comment, right? Yeah, Yeah. Tweet has a list of comment and comment would always be created by a profile, right? So I think profile should also be there. Uh, got yeah. Second.

Uh, as of now, as far as like, can we see the comments that we have made? Like all the comments, can we see them For a particular tweet? I think yeah, but not For a particular tweet. Yes. Yeah. So that tweet has comments.

That's right. Yeah, it has less mm-hmm. But a particular a profile, how many comments he has made overall that we can't, right? I think so. Yeah. Yeah.

Okay. Then there is reactions. So reaction is always made by a particular profile, sorry, profile. If there are multiple different types of reactions, let's say thumb up, like we have it in Facebook, of course we can have uh, enum reaction type email. We can have that. Otherwise profile, then this should be good.

Like, I don't think there's just anything else for a reaction, right? Yeah. Great. Okay. So seeing something here, a tweet is having a list of reactions, and a comment is also having a list of reactions, same ways, comment, uh, tweet is also having a list of comments. And comment is also having a list of comments.

So now if you see what's the relation here, what all things are commentable, yeah, what are things are commentable, a tweet is commentable, and a comment is also commentable. Like we can add comments on tweet and comment both. Same goes for reactions. If you see we have reactions on both. So tomorrow going forward, there's one more entity that comes in that is res that again has same sort of things we would be duplicating lot of stuff, right? So rather if we take these two things out, please pay attention here if I make some interface, okay, likable or reaction here.

I think two weeks only have likes, right? Likable. Or we can have it abstract class. Also it as an abstract class also. So what all methods will we have? We'll have data and set right of both.

So get likes or get reactions. Let's snippet the reaction. I think that would be a better name because get likes and I think I don't set like would be there set likes as not, and whosoever wants to have reactions on them. So tweet is here. Who wants to have reactions on them? Same ways, points is there, who wants to have reactions on them?

They would've to implement this interface. We can have this as an abstract class. Also. I think that would be much better if we have it as an abstract class. Why? Because we can have data member also this reaction.

So we can get rid of this here. Same way you can get rid of this here. And we have list of reactions. Reactions. And both tweet and comment will extend this. Does this make sense here?

Yep. Everyone, uh, like it's a very important concept, uh, so to say, which we have already taken in the upcoming video, social media, that, yeah. Okay. Same ways commentable. Okay? First of all, we would have list of comments.

Comments. And the second one, what should be the member function? Member function should be add comment. If I want to add comment to something so that I can add comment to this. Uh, second could be get comments. If any service want to get the list and they want to change the list, they can.

So I think get comments should be good. Remove comment. The remove comment can also be there. Yeah, delete comment should also be there. Get comment, comment and delete comments. But I think, um, service can do that on its own when they have got comments.

Yes. Right? Mm-hmm. Yeah. So I don't think extra method is required. So both of them now, so what did we do?

We extracted, we first of all reduce the complexity. Second. Now we have reduced duplication also at a lot of cases wherein if you see get, oh, get reactions, oh, sorry. Get likes that we have here. We will be having this method in both to it also and comments. Also doing the same method, doing the same parts, whatever we wanna do, but at two places.

So now we have it only at one place. Same commentable. Makes sense everyone? Yeah. Yep. Okay, let's move.

Next is, okay, uh, can we see, uh, follow requests that we have? Uh, like if I have not accepted them, like I've not used to it, that's why I'm asking. Do we see follow requests if somebody has tried, like is there sort of follow requests or can we follow everyone? Do we have private or public profile? Yeah. Hello?

We can, Sorry, It depends on the profile. Like if the profile is celebrated profile and it'll be maybe, Mm-hmm. Okay. Okay. I think we should leave that, so to say as of now, because, uh, if we want to, then I think follow requests would be another, uh, you know, class or entity that would be there. Mm-hmm.

Yeah. And profile would be having a list of follow requests. Finding follow requests, right? So I think we should leave it, but if you guys want, we can incorporate that as well in this design. Next is timeline, right? So timeline is like we decided in the beginning would be a separate entity altogether, right?

What will timeline have? Timeline will have a list of tweets, right? So a list of tweet tweets. I think this should be it for timeline. Any questions as of now? No.

Okay, good. I think we are good with, uh, the basic details. Let's move to services now. Okay, so the first service should be, uh, user service or profile. Service that helps build profile, right? What will that, uh, service do?

Uh, basically will get user name and password from start. Uh, whatever authentication do I want to do, I will do that and I'll create the profile and I'll store it, right? So one would be profile service, and the thing that it would have is create profile. What will I get? Uh, I can get a username, password. I think that should be good, right?

And if I howsoever, I want to handle, if I want to have any sort of authentication, I can have that inside this method or we can have a separate method as well for that. Make sense? Yeah. Yep. Yeah. Okay.

Uh, where will it store? Uh, I think we can store it here. Only in the profile, service only. So list of profiles. Profiles, okay. Same as if somebody wants to delete profiles.

So delete profile would also be there. And what will we get? We'll get a profile here. Okay, good. I personally can't think of anything else. If you guys have any questions, please ask.

Okay, we'll take it as a note. Take in profile, service is done. What's next? Next should be service to each, right? Service first methods like you saw is create, right? Create, create.

What will we get? We'll get, let's say description, Uh, and of course profile. Who wants to create it next? What? Let's see what all there is there in profile or in a tweet. Of course, created at time would be set by me.

So I would not get that from fronting. I would set it right? Mm-hmm. I myself would set it. So yeah. Good, good.

I think that should be good. Okay. Now I have created a tweet. What's the responsibility of tweet service? Okay, let's say you guys are following me and I created a tweet. So don't you want to see that tweet in your timeline?

You would want to see that, right? Yes. Yep. And how would you be able to see, there will be some first notification. Notification would be filed by the system. This is one.

What other thing that would happen? Other thing is to our timeline service should get to know that okay, this person has done something and I need to update your timeline. Okay. Like, right, like making a new, right. Okay. Yeah.

So there should be something. Now what else can you think of? Let's say I have followers, then if I follow something and I add everything to those, uh, follows, my system would crash two tweets just in a second, my system would crash, right? Correct. Right. So I have to do something, I have to optimize this like creation of tweet is done, but need to handle it.

I know most of my profiles, like as a system, I know most of my profiles have decent followers, let's say in the range of thousand. And there are very less celebrities who have, you know, huge range of followers. So why can't we have two things here? Like, we'll have to think of some method, right? To create timeline. So why can't we have two things?

First is push and second is pull. Now what's that? We'll discuss that in timeline, but I hope you would've got an idea of why we are doing this, right? Yeah. Everyone yes or no? Like, yes, yes.

Yep. Shivan Akash. If you guys can show thumb up or if there is any question, because I think we are moving, heading to one of the main concepts, right? That's why I'm asking. Okay, good. Understood.

Okay, let's move ahead. So will some of interaction with service, right? Let's see, how will it help? But, so of course two services incomplete here. We'll see. But let's move to other service.

Now, What's next? Comment, service. Okay. Okay. So on whom do we wanna comment? Like we can comment on post or also we can comment on comment also.

So we'll have comment on comment, what will we get? Her comment and other thing would be profile. And third one would be descriptions. Okay? Second method would be comment on to Same things. But instead of comment, we would have to rest.

Both arguments will be same. Does this make sense? Yes. Everyone Okay? Yep. Okay.

Is there any issue here? I can see a issue here. One, what's the issue? We will do the same thing in both the methods, but do we want different things here, right? If you remember, we made this here, here, commentable here, right? Both of them are extending commentable, right?

And we have already exposed this method. Comment, get comments, right? So why do we want have these two methods instead of passing this separate comment and to it, what if we from front and we pass commentable because they both are extending commentable. And, and instead of these two methods, we're left with only one method. Because in this also what will we do? We'll create a comment.

So it'll be like new comment and what will you do? We'll add it inside. Uh, this either we'll add it inside this list, right? We are getting this list via this methods. Get comments because this is also abstracted out. So duplication has reduced and we have made things simpler, right?

What do you guys think? Yes. Yes. Right? So comments, services, done, done, Okay? Same days I think reaction service would be there wherein we would've reaction and comment and reaction and post.

But um, we already have extracted out and made reaction. So instead of passing these two things, we are left with just one method reaction, right? So now we can have a better naming for this also, wherein we were having comment on comment and comment on post. We can just have a method comment name, right? What do you guys think? Yeah.

Works Okay, works for reaction service. Now we can have, of course there would be two methods. Yeah. One would be add reaction, and another would be remove reaction. Because if we double tap, we do it right? We remove that reaction.

So in add reaction mode, we get, we'll get, uh, the reaction able. That would be to our comments. So reaction able. And the other thing would be profile. Like who is doing it? Same way for remove, uh, reaction able would be the, uh, what would the arguments.

Arguments I think would just be the profile. What do you guys think? I am removing it. Okay. On, on reaction or on a comment or whatever. So of course there would be reaction and profile, But do we need to mention the reaction over here?

Of course, on of course, if I want to remove a life from a, so I would want that to, right? But, uh, the reaction will be stored under my profile. So No reaction pass. The reaction is told in to it and comment separately. By the way, here we have it. See, that's why we updated it out, Right?

Mm-hmm. So profile, like whose reaction do we want to remove? This is number one. And from there, from there. Does that make sense? Everyone?

Guys, any questions till now? Or if you want to change, want me to change any direction, please? You guys are not questioning, uh, I'm not audible. Yeah, I am. So what was the user reaction? Can you please repeat once again?

Of course. Okay, let's look at other way. We do not have reaction. Imagine. Okay, then what would reaction service to, oh, sorry. What would like service to or reaction service.

Reaction service should have the responsibility of adding reactions, the comments, adding reactions to the post, right? Same is if I want to remove a reaction on comment and tweet, that would also be there. That would also be handled by reaction service. Does that make sense? Yeah. Yeah.

Okay. So remove reaction on comment, same is remove reaction on two eight. Same argument would be there like, but here it would be comment and profile. Here it would be two, eight and profile. Okay? Then there would be add reactions on comment and add reaction on tweet same two.

Now senior tomorrow, there's another type reels coming, and that also has reactions on it. So there will be two methods that would be added again, right? Second thing, what are we doing in both the methods? If you see in these two methods, we are adding a reaction. And previously we were having a list of reaction here. And same way list of reaction here.

What would these two methods do? Add reaction and comment and add reaction to it. What would these two do? First of all, it'll create a reaction. This is number one. So no reaction, and it would pass in the profile.

This is worse. Then it would fetch the list of reactions from comment or from to eat and add it to that list. Does this make sense, sunny? Yes. Yes. So these two lines of code duplicated for these two methods, okay?

Not only this, there would be get reactions method in both tweet Anna, because getters and set are there, right? Yes. And we are getting the list of tweets. So get to it's method would be there as well in here as well in comment as well, right? Yeah. So many duplicate, so much duplication.

Mm-hmm. Abstract it up. Commentable. If anybody wants them to have comments on them, they'll have to explain this. Now, there's only one method. Yeah.

And we are left with, instead of these two methods, we're left with just one method, and what will we get as an argument? Yeah. Irrespective of tweet or comment will get commentable. Why? Because for adding a comment, we want to add it on a commentable, not a tweet or a like, so not a tweet or a comment. Make sense?

Okay. Yeah. So for separate, for comment and reaction, we are creating an abstract for those close. Yeah. Okay? Yeah.

Thank you. Okay. So we're done with reaction service also. Now let's move to the main service that we have, which is a timeline service, and then we'll move on to the trending part. Okay? Timeline is very important.

So here we have timeline service, okay? Now, timeline service has the responsibility of creating that timeline, right? Consider one thing here we have, there are, there would be two ways a timeline would be created. First, we first is if I am following some celebrities, and second is I am following some normal people who have normal, uh, like followers. Uh, right? So if I'm a normal, if you are a normal person, and I'm following you, so of course it should be push mechanism.

Why? Because there are limited followers. So I as a system can go and push it to each and every one's time line, right? Does it make sense? Yes or no, guys? Yes.

Yes. Yeah. So first should be add two timelines. Okay? What will we get? We'll get, uh, to eat.

And second is, I would get followers, right? Because if I am tweeting something, I want my followers to get that tweet. So I would want the list of profile, and that would be followers. Of course, this, uh, seems like he hired Kitna kit. So we can do that. Do this parallelly, right?

Parallel. But yeah, this is how it would happen. Okay? This makes sense. Now, I opened my Twitter, okay? So I would see my timeline, so my timeline would be created, right?

But as of now, how much is my timeline created? My timeline has also force that non-celebrity, uh, followers, followings have done, right? I have that, but of course, if I'm following some cell also, I want that and I would want to pull it, right? So other methods should be, and this would only be called when I open my Twitter account, right? Otherwise my system would crash. So pull cell tweets, okay?

What all should be the arguments? First should be all the syns, whom I'm whom am I, whom I am following, right? So that list can be easily abstract. Uh, that list can be easily found out, right? Because in profile, I already have, uh, this list of followings, right? And from this we can easily abstract out.

We can easily take out like by either by iterating or we can have two separate lists also, right? So we have it here. Where did we go? Al? So, so celeb list. So we have got celeb list.

Second. What? Okay, which one post do I want? Fetch? Tell me which all posts new posts new post, right? But which are the new posts?

How do I find out which are the new posts? Uh, timestamp. Timestamp is fine. Every post has a timestamp. But I would've opened my Twitter account yesterday also. So I would've seen some, uh, pro profile, uh, seen some tweets already.

So I want to see celeb tweet that have been tweeted only between yesterday and today, or just right now. Yes. Yes. Yeah, yeah, yeah. So don't you think I should know, or the system should know what was my last, like, when did I last check my profile? Yeah, that should be right.

Mm-hmm. Okay. And that can easily be stored inside my profile. Last scene, Local date, time, last scene. Now look at this. Everyone, every profile has a list of days, right?

So timelines, service. Where did I go? Okay, yeah. So here it is. Timeline service. Oh, here it's, sorry.

So timeline service, would the list of two weeks for celebrity like methods. Now let's say this is the list, okay? These many tools are there, right? How would I find out now that what all two weeks are there between this time range? First is the bruteforce approach by directly iterating over the list. But there could be a number of posts, right?

There could be 1 million posts also I can make, which would not be feasible. We should optimize it. How can we optimize it? Think of it, anyone? So all these tweets are set, right? Yeah.

All the twos are set two weeks. But I want to see two weeks between yesterday and just now We have the last seen times stamp. Yeah. So we Can use that Yeah. As our starting pointer. Yeah, but how would I find that starting point in this list?

Because this is a big list. Like there could be 10 lab posts as well. So should I irate on this list fully? And then, and for how many users will I do? Because there are n number of people who might be pulling. So order of n and like order of N, supposedly this list is N.

So order of N in two, how many people do we have? Uh, let's say again, order of Ns, right? This would be pretty bad. Too much time. Yeah. Yeah.

Okay. If you see all of this list is sorted by timestamp, right? For the last, yes. So last scene, we have the last team. So I want to get all the tweets from the last scene. So can I do binary search over it?

What do I think if I find out the, so that would be log of thing. Log. So this would be log in and is this feasible now? Yes. This is feasible now, right? Perfect.

Yes or no? Yes. Perfect. Perfect. Makes sense? Yes.

Yes. Great. So Her, but the tweets were, uh, sorted is are they the list of Yeah, All of them. Like I'm, I'm not making any change to the, you know, I'm, what am I doing? Like when a tweet has been made? So tweets service, uh, is just sketching the list of to it and adding it to the end, right?

And that's how we see it. I am seeing my wall, so I see it in that fashion. Yeah. Most recent first, right? Yeah. So it is like either I would see old desk first, or I would see newest first.

Mm-hmm. So any which way it's sort sorted. Sorted. Okay. So order of login. So we are pretty much done with the two service also now.

Yeah. Right? Both the, okay, great. So we're done with two weeks. Uh, tagline, service also. Sorry.

Any questions? Still now, if you have please us, we are by the way, close, like it's 8:00 PM and 16 minutes to the interview is left. Okay, I'll take it as a moment. Next is explore, uh, part right? Training part you want? Yes.

Yeah. So let's see. Trending service. So the responsibility of this service would be to, uh, uh, to short trending to each, to every user, right? That's what it does, right? To every profile, right?

Okay. When does, uh, tweet concentrate? First question is this, whenever a certain tweet, like what's the criteria? There would be some criteria, right? Like Most amount of Retreats or, right? Yeah.

Most number of, uh, let's go with, let's pick like one, one for now, but we'll generalize it, okay? Okay. When it crosses a number of certain number of lights, right? That's when it comes on trending. And this trending list is shared by everyone. Like everyone is able to see this trending list, yes or no?

Yes. Yes. Yes. Okay. And second, if I've already seen some post in trending and right now or after some time, also it's on number one. So in my trending list, it'll be at number one only, right?

Correct. Till the time somebody else surpasses it. So list of two each, it'll be maintaining list, right? That would be shared by everyone. There is one. Now there are different conditions, right?

Condition is, let's say it surpasses thousand likes a tweet surpassed thousand likes. So don't you think this responsibility should be given to the, the reaction service? Because it is adding reaction on earth reaction able, right? It is adding reaction on reaction. And it can easily tell that, okay, barrier crossed, I have to call the trending service and ask them to add it. What do you guys think?

Can you explain it again? So, okay, so as of now, first criteria that you've thought of is, if I surpassed certain number of likes, right? Who is adding likes? Like there could be this thing also that there could be, uh, training service that could be running in parallel and checking each and every tweet, okay? If it has surpassed these likes or not surpassed this number or not, this is one approach that it can do. But there's one more approach.

That approach is if reaction service is adding, like sir, right? Add reaction on, uh, comment, let's say. So it, the method would be add reaction, right? Add reaction, and it would be reaction able. Okay, what will it do? It'll be of course patching.

Get likes here, it'll be calling method. Get likes of this reaction able, yes or no? Yes. Yep. Yeah. So of course it can find out how many likes are there by doing dot length, yes.

And tool. Do you think the reaction service can ask trending service to manage this? Now if let's say count is there, if count is greater than thousands, don't you think I should call reaction service? Oh, sorry, not trending, service trending. This can also be done, right? One way to think yes or no.

Yeah, Makes sense. Makes sense. Everyone. Slow parents, Samir? Yeah. Yeah.

Okay. Second is, uh, what was the second condition like for, uh, this training? It's considered a second service or second condition. So the way to generalize this is whatever conditions are there, those conditions would be on certain service, right? Either there could be a CR job running and always checking if any of the post has met any of this condition or not. Or we give the responsibility to that service itself to tell the training service that this could be one of the training as of now.

So can you please check, right? Mm-hmm. Yeah. So trending would be created that, uh, that way trending would be created, right? This trending list, yes or no? Yeah.

Okay. So we are done with trending service also. Yeah. I personally think we are done with all the requirements that we shortlisted in the beginning. If we are left with any, please ask. I think we're done.

We are almost done. Any questions? Samir? Karen? Okay. I will take it as a note.

Cool. Then I think we're pretty much done here. I think, Uh, I have one question, like Yeah, please. How did you find out? Like these see the, like for example, uh, the list of reaction and a list of then how did you pinpoint it that it can be combined into a, So I did it in Front. I did it in front of you.

Yeah. So Like basically, Uh, right, right. I tell you that's how I explained it to that guy. I think he has dropped off. Uh, basically, uh, I made the reaction service and I saw four methods over there doing the same thing. Correct.

Doing the same thing. So if there is duplication, why not extract it out? Okay. So Always It's, uh, we met duplication. It is better to make Yeah. Check the thing out.

Yeah. Maybe make a separate thing for, yeah, that's how I did. So, so, uh, can take this example as a factory pattern Factory, how Like, uh, we are using some properties from that and making use of it in the class child class. Okay. Wait, what's a factory pattern? Let's see.

And then we'll decide, okay. In a factory, basically we want to separate out different functionality. Okay? Let's say I want to create a pizza, okay? And there are different types of pizza, margarita, pizza and farmer's pizza. Okay?

Both of them have a different way of creating the base and different way of baking, right? Same base, different way of creating the base for farmers and different temperature of baking. Okay? I'm doing the same thing at multiple places in my cold base, right? Tomorrow I made a change at the baking temperature from 180 to 200 for my margarita pizza. I'll have to go at 10 different place and change that.

Great. Why not doing the same piece of food. I want to make a margarita pizza. So creation of base and, uh, crea, uh, baking, temp, uh, baking these two steps. I just kept it at one place. Same way for farmers because there was a different type of pizza, farmer pizza, right?

Instead of having it at 10 different places, I bought it at one place, created a factory. Give the instance of factory to that person who wants to get pizza. So the responsibility of creation is vanished from this side. Second, he needs not to know what all things do we have to do for creation of pizza. He would have to duplicate those two lines. Preparation of this and baking at 10 different places.

I just bought it at one place, right? Yeah. Duplication is also reduced. Complexity is also reduced, right? That is factory here. If you see, is there anything similar here?

No. Two different visa. Were there, is there two different things doing different things like having a difference in the way of creation? No. Both of them are storing likes. So I just separated it out and created, uh, put it in a separate entity.

Factory is not there. Make sense Sam? Yeah. So, uh, what can we say? Like, this would be like proper use of Yeah. Apps.

No, this is not any pattern. Like it's not important to have pattern. Yeah. It's like we just made use of abstract class. Mm-hmm. What is, why do we have abstract classes?

We have abstract classes. So there are two things, inheritance and abstract classes. Okay? Where do we inherit? First of all, if you remember we had, uh, we made Commentable as an inherit uh, interface. Sorry, right.

We had an interface, but interface cannot have data members. And if you remember comment and uh, to, it was having a data member common as well, right? Which was list of likes and list of comments. So I shifted from interface who are abstract class because both, neither we can create an object of interface, nor we can create an object of abstract class. But we can have, uh, implementation of methods inside an abstract class, right? Yeah.

Previously, uh, it'll do it and like they were having same implementation for get likes method, right? So again, if they both have to override it, they would be doing the same thing, like the return, uh, this dot, like, so return the dot. Like, so it's better to make a abstract class so that we can have a common definition also at one place, right? Yeah. Yeah. Second data member also, right?

Yeah. Okay. Any other questions? No, I'm done. Thank you so much. I don't think there's any other question.

If there is, please ask or if we, we can finish this session today. It was great session. Thank you so much for joining. If you guys have any feedbacks, if you guys want something from us in the next session, please do tell me, uh, here itself, like any topic or any short interview session or whatever, or any feedbacks that we should continue doing this, uh, activity that we are doing. Any sort of, yeah, It was really fun. We can continue like this session, No session would continue.

Like the interview, that sort of thing that yeah, the Interview. I was really good. Like were doing it in a particular time question, like we didn't ask you much questions. Yeah. Cause we know much about, Uh, ta uh, you are a student as, right? Yeah.

Okay. Which college are you in? I'm in D two De Technical University. Oh, you are from D two? I am also from D two. Yeah.

Really? Yeah, I password from D two only. Uh, which year? Uh, 2020 password. Oh, okay. And you're in which year?

I'm in, I'm in second. I, Oh, nice, nice. It would be great if you would like to comment or if you would like to sync with me offline also, if you want to ask anything, I'll update you. Yeah, sure. So go. I'm from like, I from Delhi.

Yeah, I'm from Delhi, indeed. Oh. So yeah, I'd love to meet you on weekend if your Yeah, surely that would also be great. Yeah, There's some questions I would like, I think you can answer it cause Of course. Of course. Course.

Any other d are you feeling left out? No. By guys also in college or you are professional, working professionals. Working professional. Um, where are you working if you don't mind asking that? Hi.

Um, I'll message you. Okay, no problem. No problem. Good. Uh, great. Uh, thanks a lot everyone.

Thank you. Have a nice good.

## Oct 2023: Pub/Sub Message Queue Design

Type: Video · Length: 87 min 43 s

### Lesson notes

Designs a publish subscribe message queue at low level. It covers topics and subscribers, a pointer per subscriber, acknowledgements and retries, push versus pull and back pressure, then implements the queue API with an abstraction over the topic data structure and discusses how to learn LLD and HLD.

### Transcript

Uh, is this you or is it your autopilot? Unless, unless you guys have, you know, the same surname, is it a bot or say, Hey, good. Uh, evening we met, I think last, just yesterday actually. That's, that's interesting. We have two autopilot. So, so I was just thinking autopilot must be something like autopilot.

It must be recording the, uh, video, I think unless Ash and per share. Hey, pr. Good evening. So what I'll do now is I just open the Slido link and let's see what kind of questions are there. Uh, if we like, we can pick up those questions or we can also, uh, if you have a question right now, I can take that also. So let's just wait for four more minutes or people join, and meanwhile I'll just, uh, share the link, have a discussion earlier, message queue.

Okay, we can start first. Just share my, are you hear me? Yes. Awesome. Awesome. So if you have any, uh, questions, you can of course post them on the chat.

Otherwise, uh, you can, you know, you can directly talk. Also, just unmute yourself. Um, if I see these questions amongst them, there is one question which is asked, which is a question. Okay. Um, approve the recordings class. Yes, sure.

We keep doing that. Sometimes there's a small delay, but we have that also sorted. There's one question on l l D of message queue, uh, and the other one is basically, should I do L l D and H or first H, D and then l l d. So I would suggest if you can do them parallelly, go ahead. Right? There's no such thing as completing something fully and then going to the next thing.

But having said that usually helps to start with the basics of lower design, right? The, if you're looking at the basic of how to code, how to, what are some good coding practices, uh, design patterns, you can see it at a high level, right? Some of them are really important, are not that important, but if you start with low level design, the basics, it'll help you. So, solid principles, um, design patterns that can help you in the start. If you're an experienced engineer, you're looking for more, uh, deeper design patterns. By that I mean concurrency, maybe.

How do you, you know, uh, concurrency is mainly the, the thing, but also how you handle exceptions. How do you chain an exception to the next, um, action that you wanna do. So if you have, if you're familiar with Java or go, then what happens is you can actually change futures, uh, and then go What you can do, you can say that if, uh, if something fails, right? If there is an error, then do this. And that itself can be, uh, anything called the go key word or go function. So these are some patterns that you should know as senior engineers.

Having said that, uh, before you know those deep patterns, you should probably study the simple patterns. And so short answer L and d basics first, then h, l d basics. Then you can offer deeper l l d concepts, and then deeper high level design concepts. Also straightforward question, and I think, uh, an okay answer, okay? If, if, uh, the person who's asked this question, if you're here, then you, and if you want to give more, uh, details, we can take that also once you're here. Good evening, uh, Shar, good evening, right?

I think some of us are here. Some, some of our autopilot's also here, so that's good. Meanwhile, right now the top question is message queue. Okay? So if you have some other question, you can let me know. Otherwise, we'll go ahead with l and d of a message queue.

Any other questions, guys? If you're actively interviewing or if you are dealing with the problem, which is sufficiently general, that we can pick it up and you can post it on, on chat or just unmute yourself and, you know, share it with us. We can pick that also. Okay? Um, are you comfortable with this question? Then?

I will just, I need a couple of thumbs up and we'll go. Okay, perfect. Saying message Q is good. Okay, that's a, that's as good as a thumbs up for me. Uh, sit. Yeah.

Okay, I got another thumbs up from side. Awesome. Fine. Then we go ahead with the message queue, low design, uh, and what we do with message queue, because it's an engineering product, right? It's not, it's not like low design of zero or low design of Twitter. So there isn't that many interactions and, uh, a bunch of APIs that you need to expose based on how customers will be using this.

Your customers for a message queue are going to be engineers. Yeah. If you assume that you join a startup or a company which is building message cues, like let's say Apache, and they say that, you know, Kafka is what we are, we are, uh, offering to engineers, then your customers are engineers. So we will not go for a use case diagram here or a class diagram. We are going to be focusing on, um, the engineering product of this, which is the APIs that a queue will expose. Okay?

So let's take it that way. In general, if you get a question, which is an engineering product, like message queue or load balancer or rate limiter or service orchestrator, something which engineers mainly deal with, you're not very concerned about how are people going to use this product. You can straight jump to the APIs and then break down the classes as per how the APIs are coming out. So let's do that iq. I'm going to code with Java. One of the benefits of Java, especially in an interview, is that you can, it's, it's an object oriented language, but you can code in any image that you like.

Okay? As long as you're using the principles of that language, usually the code turns out looking quite nice. Uh, the other thing is, if there are certain patterns that the language, uh, provides, for example, go line provides channels primarily for concurrency. Java provides pretty good exception support. Um, c plus has its own benefits. Uh, I think most of them are around type safety.

So if you apply those principles, then you can say the bonus points on the, the code looks very professional. So let's see if we can incorporate some of Java's strengths while, uh, while solving this problem. Fine. We have a message queue with the main class. I, I don't really need main, I need the queue itself. Okay?

And what kind of APIs are we gonna expose here? So one is we can push to a queue, right? Uh, what do you want to push to a queue? This is interesting. Any object, an event, an element, what would it be? Any guesses, guys?

Okay. Okay. Message two is zero and Excel also interesting. I was asked l of a job portal recently. Okay, a job portal like LinkedIn or is it similar to event bus machine coding that we have on system? Yes, it should be pretty similar.

If you're looking at lower design, uh, and they have asked you message you, it's going to be quite similar, specifically machine coding. What ends up happening is you are sometimes expected to write some test cases or it makes sense for senior s Lola design. The concepts of the, the problems that they try to tackle are usually, um, on the more foundational level, right? That how do you do push, how do you do pull? So yeah, machine coding is a little more code intensive, more implementation sizing that listener insert to queue, okay? You can have a listener in the queue, okay?

So who's going to have this listener? Are they going to be subscribers? Then I want to listen to these kind of events, consumers, okay, so subscribers or consumers who want to register for certain types of events. Now, when we see certain types of events, there are two ways to do this. One is that the queue filters things by itself, or let's say the three ways to do it. One is the queue filters out that you wanted to listen to this kind of event.

Here's the event. Two is that the person who is trying to consume the event, they get all the events and they decide whether they want to, you know, uh, do anything with this event. And there's a third option. What is the third option? It's quite popular. Think of Kafka.

If you don't know the of Kafka, then, uh, think about the fact that you won't be interested in every event, right? There might be certain types of events that you're interested in. Where would you send those events? A pool API is what Paris is saying. Okay? Uh, that is polling.

Possibly, possibly insert the q add Q push, which is also something that I've written out here. But again, come back to this problem. You want to register for certain types of events. What do you mean by certain types of events? How would you do this at scale with certain simplicity or clear q Yeah, that is correct. You can flush, you can get rid of elements.

Maybe this is a pretty risky thing. Maybe you can't do this with an a p i. Maybe you want to restart the machine or flush say, okay, so let, let's talk about this also how we flush events. Clear q Okay, so yeah, okay. That, that approach to this also, depending on what you mean by flash topics, absolutely, that's correct. Yes, that's correct.

So if you have topics, then you can send events to certain topics. You can say that all profile events go to this topic. It doesn't even matter if it's services, sending it. A profile has been validated, can come from some email service while, uh, the profile, uh, has just been created can come from a profile service. If it's a third party, then once you get a response from a third party, you can create an event and say that a profile has been created. So in that sense, pro, uh, the topics help you send events in parallel, yes, but more importantly, uh, separate out events.

Yeah. So certain types of events can be subscribed to by just certain subscribing to certain types of topics, okay? Uh, the job. Now, message to data structure, yes, you need a, you need a data structure. The data structure will be defined by the kind of APIs that it's exposing. So let's, let's look at flush.

Flush. I think you, it could be two things. One is remove all events, and the other is gimme all events. This is pretty scary. Remove all events. Uh, I think it could be an admin thing that you wanna flush the queue, you wanna delete all events.

It's pretty risky. So how would you do it? In reality? Would, would you literally delete events or would you do something else? Clear vector. Okay, that be risky, or what would happen to the database?

Do you have anything backing this up, this message to you? Or is it all in memory? Soft deletes Paris. Yes, that's exactly what you want. So how do you implement soft deletes here? Keyword is this.

Who are the people who are thinking of a delete? Publishers don't read, right? Subscribers or consumers read. Buy some blank. Oh, okay, yes. Yeah, that's it.

That sounds like a right. So blank. What is another option? Which is looking to do, but what we should have a problem. Black box. Black box.

The other thing that might come to your mind, I'm not sure if this would come by your actual team discussion, is why don't I take a pointer and say that depending on the subscriber, this person has consumed 10 events. Let me for this subscriber, move the pointer ahead by one. It's as good as the event. Yeah, but then you would lose some information, which would be that this subscriber never got the event. So if, if you restarted, or later on if you're diagnosing the problem, then you would say, oh, this person got its up to 11, and the subscriber would say that I didn't get the 11th event. So that is something which you may or may not decide, uh, to do.

So you can, you can increment pointer for that subscriber also, right? Otherwise you can keep a flag for that subscriber saying that this event has been deleted for them. They don't want it. Which one would you prefer? It depends on the situation. If you want to delete events for, if you want to delete the event for all subscribers, then a flag is pretty good.

Because anytime a person tries to consume that event, you look at the flag and say, oh, this event has actually been deleted. I won't give it to you. But if it is for one subscriber who's trying to delete an event, incrementing seems good. Sufficient? Yeah, both of them are soft. So, okay, so let's not go for deletes.

I think this is, this is going to be a little difficult and also a rare case, you can always delete on the client. You can say, I don't want to do this manually implementing offset. That can also be done. The subscriber can say that, gimme events, give all the events, and I'll just delete some on my side. So now the second thing is, give me all events, right? Uh, till now I have gotten three events after three, whatever other, just gimme.

So what are we talking about when we are doing polling? There's one which is polling one event one by one. What else can you do? You can do it for push also, instead of pushing one, one event. So let's say there's like a hundred events here and you have to send those hundred events to this subscriber, you're going to send an event, get an acknowledgement, send an event, get an acknowledgement, instead, what can you do? So that pass side, Actually I didn't, uh, get the question correctly.

Uh, could you please come again? Yeah, Sorry about that. Mm-hmm. So if you, if you have events, event id, 1, 2, 3, 4 is my, uh, screen visible actually. Yep, yep, it is. Yeah.

So assume that you have these five events, uh, and a person has consumed up till this point, right? So they're at number three. Mm-hmm. Now they need three, four, and five. You know that they need three, four, and five. They come and say poll.

So what if, and this is a common use case for us to consider. What if they want all three events together? The reason I'm say is because, yeah, three acknowledgement. I got three. Gimme the next one, say four acknowledgement again, gimme the next one. Five.

Are we, are we, are we talking about the batch read? Yeah. I mean, from what does the polling? Yeah, the, so firstly, let's, let's, that's perfectly right. Uh, batch polling and pushing is also something that we wanted do. Okay?

Uh, I'm sorry, who, who, uh, was asking that? What does polling do? Uh, HAI. Yeah. Okay, so now we are way to have a polling. Uh, what it does is it takes one event from the queue.

It's the opposite of push. So, uh, add to queue is you adding an event. Polling means gimme an event, which I missed. So you done an event, and so polling normally, uh, you, you tell your subscriber ID or you, you say that this is a subscriber object. Let's say go is a subscriber, or instead of go, there'll be a service which is a subscriber. Assume that it is an analytics service.

Alex says, I have got events till 35. Or, or they won't even say that. They'll say, I'm the analytics guy, gimme the next event. So your message queue that says the analytics person had taken all events up to event number 30. So that means that after the event, number 30, whichever event is there in that topic, go and give that event to the analytics engine. So you get a single event that is polling means analytics is asking, and in a response, you're giving back event.

Okay? Push is where you as a message, you take the effort. All of these, uh, actually this, this is not an api. This is more like an action of the queue itself. Push basically means I will send an event to a subscriber as a message to you. So you don't need to ask me, I'll give you the event.

Whenever new event comes, I'll give it to you. This would be a payment event. But the i, the person to show enrolled status in post, or, you know, the moment the payment is done, make the order, uh, complete. Because if I don't do that quickly, if I don't push payment by myself to the client, the client will have maybe a poor experience. All would make sense if there is something that will take some time to complete. So, uh, an example of this is that, let's say what would be a good example for this?

Let's say you submitted some code to the some website, right? Um, that code takes 10 seconds to complete at most. So every one second you pull the server saying, is it done? Is it done? And when it is done, they say yes before it is done. They keep saying, waiting, waiting.

And if we, you get waiting, then you pull again. So polling is basically what the client asks for something and pushing is whether client doesn't ask for anything, but proactively the, the sender pushes and event to the client. You can think of that. Is that making sense? Yes, Carol. Got it.

Okay. Awesome. So we have batch pull and batch push. We have lush. Okay? Amongst these practically in a 45 minute interview, we can take maybe three or four things at most, right?

The important thing is you should be able to, um, explain your thought process to the interviewer. Yeah, and the other thing is a p i designs are important, uh, and the trade offs are important. So let's go for the core problems, okay? One would be adding to queue without you little too much. Now, batch poll and batch push can be covered as a wrapper or a benefit, uh, over the simple push or poll. Okay?

Um, if you have batch poll, which means gimme the next set seven events, you give it seven events, you get a acknowledgement of three, then there is some complexity, but four have to again, be pushed. Okay? Am I making sense? If you have events, 1, 2, 3, 4, 5, 6, okay? You batch push this and you get a response from the service that you pushed, you get 3, 5, 6. What does this mean?

It means that one and two and four were not received or they failed. So these events passed and these events, is this making sense? This, this would, this is how a batch a p I would probably work. There's a lot of hand babying I'm doing over here because this is going to be complex in itself. Having said that, uh, it's not something that we'll be able to do in 45 minutes. So for now, I think, let's keep this aside.

Similarly with flush. So deleting events, this is not that important. You may not even give this as a feature. You can't flush events. You have a problem, don't at the event, or you have another, another problem as a client, don't trust their way. Yeah.

Uh, push and pull. Okay. Uh, listener, what do you mean by listener? Listener means that you want to register, right? So register the subscriber. That is also quite important.

We need this. What else do you want to push? Message queue. Do you want to pull message queue or do you want both publisher pushing the message queue? Okay, that is interesting. Let me remove this because these, when you are going take the message sheet, do you want to, do you want clients to, or subscribers to ask for the message, or do you want the messages to go to them?

And then what, what is the benefit? What are the tradeoffs? I think we would, uh, take care of it, uh, in the registration part only, right? I mean, uh, am I, if I as a subscriber is registering, then I should tell the queue that if I'm a point based or a push based, I mean what exactly do I want? Okay. Okay.

And so you have this type of and push. Mm-hmm. Yeah. Sorry, go. No, no, no, please. Okay, so you have the subscriber who says that I'm a or push kind of person also, you probably say a topic, you register for a particular topic.

Okay? So this, this makes this a p i, simple. Uh, so then you are going to allow both pull and push. Do you see any drawbacks with this? If you allow both pull and push? Yep.

I think Q would not be able to implement it. Uh, I mean, being a subscriber, Q would maybe pull or, uh, I mean it would allow the subscriber to maybe pull or it just pushes it to subscribers. I mean, both, uh, can't be done at the same time. The issue is, so for example, there are, uh, pros and cons, both if you implement both, you get both pros and both cons. Uh, if you implement, let's say a pull based mechanism, okay? Then one of the problems with pull is that you have to hold onto the event for a while.

You can't just push the event to all known subscribers. If they fail to get the event, then you just kick it out of your queue. That won't happen. Correct? Pull, pull means that you have to wait for the clients to ask for it. And how long do you wait?

You wait for a few days. It's possible, but basically the memory requirement that you have for lagging subscribers is such, okay? If you, if you have push, then the problem with push is that you have to broadcast to a lot of subscribers quickly, reasonably quickly. You, you might batch things, but still you have to do that. So these are the two drawbacks. The pros here is obviously you, you have a configurable, uh, registration.

If I want certain topics to be put, certain topics to be pushed, I can do that. The complexity of the goes up, uh, it can cater to more clients, more people will be happy with you. The problem is you'll need in general, more memory and more bandwidth both to give this kind of thing. So what I'm saying is it's not impossible to implement both. Uh, but there is a trade off. Yeah.

Okay. Any other thoughts on this? If you have a pull push thing per topic, any, any problems that you can see? Any benefits after all, you know, the only, the only point of the entire question is to just see what kind of tradeoffs you can see here. Yeah. Otherwise we can just go for, right.

Or, or the many message views out there. So then are these two APIs even relevant In, in case of pushing also? Yeah. I mean, if, if, uh, our subscriber or consumer, uh, dies, right? So do we, do I as a queue would wait for that message to again, push and push and push until that subscriber acknowledges it? Yeah.

Yeah. That's, that's basically where I was going to. Perfect. So what do you do? Let's say the service is down, all the services taken out, but it forgot to register itself. If the register is mm-hmm.

Something we can do, but for now, let us ignore it. Assume that registration happens only once. What do you do with these events? You can't keep it hanging around in memory forever. Uh, but you have to do something. So we can retry, like you said, we retry how many times or maybe we can, Yeah, maybe we can have exponential retry and then even after some retries, if, uh, the consumer doesn't acknowledge, then we can just, uh, put that message or something in, uh, D L Q.

Yeah, yeah, maybe. Yeah, that's perfectly correct. So you, you have exponential. So first you try one second later, then you try, uh, maybe five seconds later, then you try half a minute later. Then you try, how much is this? Two minutes later?

Uh, and then you try two minutes later, then you try two minutes later and then you say, okay, that's enough. I've tried enough. Now I just D L q meaning dead letter queue, which means this is like a message to itself. It just stores all fail messages. Okay? And you, the dead letter queue, the only thing you do with the dead letter queue is you, you log these messages or you, you might want to do some analytics as to what happened, what went wrong.

So you could have a queue or you can just stop these messages. Either this or log In any case, you're not going to process. This is usually only useful for debugging or auditing that, yeah, I had got your request, but didn't do anything with it. Couldn't do anything with it. Okay? So I, again, this is something that we can do exponential.

We try, we can, can code this and let's see if we can, but it's not, it's not the core problem, right? It's good, it's good to know about. And that's perfect. Actually, Han, was that you who said that? Yeah, yeah. Got it.

Okay. Yeah, that's, that's a really good point. You can have exponential back off, uh, I mean, uh, retries and then a dead letter queue. So, okay, let's ignore this part. It's a pretty important part though. Any other points that you can see?

I just removed the push a p i because there is no such thing as a push a p i, there's only pull push happens from the event bus itself. So we can ignore that. So we have these three APIs. Anything that you notice, which, uh, event bus maybe does, maybe you've done it at work. So go one is there can be a trade off for the push organism, like, uh, like queue is pushing to consumers. That is specific rate, but, uh, my consumers are not able to process those at that rate.

So in that case, we can go with the polling mechanism. That is interesting. Okay. So what you're, there's a technical term for, uh, for this, it's, I think it's called back pressure. The idea here is that if you, yeah, if, if you, if you're making, let's say 50, you're signing 50 events and the, the receiver can only process 40 events, let's say both up per second, then what happens is there's 10 events in the buffer. Then you sign 50 plus 10, 60, and this guy can only process 40.

And then you save, uh, 20 at remaining. So 20 plus 50, which is 70. And now the pressure on the other, uh, service, which is actually taking the events keeps it larger and larger. So typically what happens is that service is able to process less events than usual, or maybe a little more than usual, but it's just not able to process so many events and eventually it starts collapsing. So back pressure is a way of saying that I can't process more than these many events. I have failed an event.

I have failed 10 events right in the last second. So what our queue will then do is say, okay, out of 50, then fail this time, I'll send only 40 next time, and if it continues failing, I'll send only 30. So in this way, take away some of the pressure from the system, the downstream system, it can be done. Uh, the benefit of this is that the QS of the problem, right? A QA is basically the whole point of a queue is a distribution mechanism. I manage distribution myself.

So if you are telling me you can't process the events, it's okay, I'll persist it. I'll keep it later. You can ask me later and I'll give you the events. So that is a, that's a good feature. Yeah. Back pressure is a feature we can Typically, it's not that back pressure keep, I just say, I will send you, um, you know, you can, you can pull them later.

Back pressure is more around, I will fail the events and later on in a, you can either take them or, uh, I'll hold the events and you can, if it's a pull mechanism, then you pull. But if it is push, there is, there is back pressure only up to the point of retry. The, uh, the mechanism does not change. So back pressure with push means retrial later. The pull means that that's okay. The pull back pressure doesn't shoot, doesn't make much sense because you asked for the event and then you failed.

It's not a problem, I think. Yeah, yeah, Yeah. I think in case of pull, uh, consumer will like, uh, keep on pulling, uh, as per their, like as per the, Exactly, exactly. So there's only one which is push, and in push you can later. So, uh, if the queue knows very well that the benefit of back pressure here is that at least the queue won't try, the queue will not for a particular subscriber. Yeah.

Okay. This is something we can try to implement. This is also interesting. Any other things that you know about? Uh, yeah. Um, you, uh, so basically you asked if, uh, message queue, I mean, it's responsibilities, right?

Apart from, uh, pushing the message, but hence, does a message queue do, I mean, is is that the question? No, No. I, I was saying that, uh, in terms of back pressure, Okay, Yeah. Push or pull or, I mean, how do you, how would you go ahead? And I think partly I was talking about when would you implement it? Yeah.

But your bottom interesting points, let write that down. Uh, I call it, what should I call it? Uh, which B messages? Yeah. And distribution. Mm-hmm.

So the rate of distribution, where should this event go to? Uh, all of that is managed by this. So you are able to isolate concerns. The, the client who's going to send this event doesn't care how many people are subscribing to it. It just adds it to click, and the person who's subscribed to it doesn't know where it came from. They just consume the event.

Okay. Before we start coding, one final question. Do you see any drawbacks of using a message queue in itself? Are there there any drawbacks of using a message u apart from the things that we talked about? Fundamentally, is there a problem with isolating concerns or affecting out where event is coming from or going of failure? Okay, interesting.

Yeah, tell me, is It about security concerns Or security, Or is it about the asynchronous processing that I, I mean, latency can be huge, right? You accept messages, but, but there is no guarantee that, uh, uh, that message would process or not, right? Okay. Okay. Yeah, sure. Okay.

No guarantee of inform for my to work. So security, I, I think you're saying that if I an event, anybody can read it, That's not, not exactly, but I mean, not sure how to put it. Uh, I mean, like in case of s TTPs, we have, we, we encrypt the message, right? But in case of message queues, I'm not sure if, if we actually encrypt it under the network. I mean, we can serialize it and then encrypt it manually, but not sure if You can encrypt it manually. Yes, there's some parts of it that you don't want to be logged.

You can, you can do stuff around it also. Okay, if security is a concern, if you don't want certain things to be logged or shared or read by somebody else, maybe you want to encrypt the event, but it's a rare, very, very, very rare use case. Mm-hmm. Understood. And, and maybe Google scale or maybe for a bank, it would make sense that, so firstly, maybe you have a secure topic, a set of topics, extra secure, and if you want to subscribe to those topics, then maybe MessageQ has a way of, you know, when you say register, that, that is, who are you, which service are you? Do I have a configuration finding?

Think that you have permission to read from this topic. So we are talking about security here, which is, uh, yeah, a concern. Definitely if you had a request response, then two engineers will talk to each other and just send the request. I think you have hit a fundamental problem actually here. Uh, not security, any, any other issue you see with this. You have no idea as an engineer when you're publishing to this topic who are consuming the event, which means you have no idea what they really want.

You don't know what kind of data they want tomorrow. If you change the structure of event, some people are depending on you, but, but you don't know who, who is depending on you, right? You'll have to send an email to the entire organization asking. So when you isolate concerns, or when you bring in this black wall, that takes away some of tomorrow, if you need to know who is using your events or who is sending you the events from upstream, you don't know, you will have to check there. Is that another hop added because of a message queue? Okay.

That is, that is one thing. Basic processing. It depends on the message queue itself. What kind of guaranteed is given, uh, some message queue say that just gimme the event. I will make sure that every subscriber gets the event. So out of five, you have to get it.

Some say I will send it. Best effort, people don't take it. It's okay. Right? So it depends on how, what kind of video you're sending also. So should it be at least once, at most?

Once exactly. Once, yeah. This, this is a thing which probably, uh, when you're adding queue, maybe you can make that call or maybe when you are adding a topic, you getting that call, okay? But in, in general, this is not a, a, a problem that, you know, you are concerned that you won't get the message. You can configure it in a way that you'll definitely get it. Okay?

Security also is a good call, but now we'll not look into it. Single point of failure. I think someone mentioned, uh, site, you mentioned single point of failure. It is true a message to you if it based on many services will be impacted heavily, but a message queue can be distributed, brings in complexity. We have different partitions, but yeah, it can be distributed. So it is, it's a single point of failure only to the extent that, you know, if all the, um, all the QA fail, which is a rare occasion.

So we can, I think, ignore that for now. We'll assume that such things don't happen only, okay? Yeah. So these were some other drawbacks. You are not sure who is consuming your event and you're not sure who you're consuming from. Okay?

So now that we know why startups now use message views, let's actually try to implement a message queue, okay? Uh, active queue is the first one is it's a pretty easy, okay, we have, what do you want to return here? You want to return nothing if the message successfully added to the queue. Let's call these messages because we are calling a message to, we write a class message right here. If your interviewer is interested, uh, which could be possible, and generally it's a best, best practice for you to set it out, the classes that you have, okay? So there is a message queue, there's a list, a set of messages that you'll be sending in, in this queue.

Maybe you don't want to put everything in a single file, so you want to separate it out into different packages. Uh, the benefit of this is that the class can be shared amongst various packages. Also, it's cleaner. Reading the code is easier. So let's just do that. We have a queue.

This is a public class, okay? You can add to a queue message, okay? Now, let's also write the rest of the APIs or register accept as a subscriber. So a subscriber is saying that, say to this topic, now, the type of subscriptions can type, okay? All of these require classes. Something that YouTubers are crazy about, including me, more, the better.

Please, like Sharon, comment also by mistake. Add those classes here. If you don't stop. So again, these things are best put in separate classes, but in an interview or in a practical use case, what you'll end up doing is you'll flesh these out here, and before you do the commit message or before you, there is a PR request, maybe you'll separate out classes, but as practice, take these classes, right? And you'll put them in a separate place. Models.

What I'm doing with models is I'm just taking all the basic classes and doing them. Then, uh, but in general, things related to a message, maybe you want to put them together, things related to use of maybe you want to put in a separate place and so on. So in models, you can have multiple packages. Okay, let's just, there's a reason why people are moving out of Java, I think when it comes to interview, not, not in production, and that is because you have to write quite a bit of code while code, okay? We have taken these two, we have taken registration also. Okay?

When you add to the queue, you add a message, it has to go to someplace. It's a topic. Now, when you pull an event as a subscriber, you pull from a topic or something else, can a subscriber or to multiple pull multiple topics? Yep. I think, uh, he can. So I think we could probably say that I'm the subscriber.

It's not something interesting will come up here. Uh, let's see, that is a thing, and there is back pressure. So back pressure is a property message to itself. So we'll have that here. Uh, only when you retry later, you see these two APIs, they're a bit similar. That's not a problem that the topic is everywhere.

That's okay. A register says that. What type of subscription is it? And even if you register as a poll subscriber later on, you have to poll anyways saying that I want to poll this topic and I subscriber. So is there any point registering as a polling subscriber? Not really.

Yeah. Let's think of the data structure that we use. Let's take a basic data structure. Let's say there's a, um, a map or a, a set of indexes, right? For, for every subscriber who comes. So if this index does not exist for a subscriber, we assume that you haven't gotten any message to date.

So we'll give you X zero, and we'll take all the messages from there. On the other hand, uh, if you exist, then okay, then we'll give you the next message. If you say, I have gotten all messages till 30, if we have record, then we'll give you 31. So this subscription type, which is going to be pulled or push during registration doesn't make much sense because you only need to register if you are a push person. Is it, is that making sense? There's just the three of us, I think.

I think they're gonna, yeah, no, what to say is, if you're registering, right, say, say, I'm registering that I, I go this, uh, Amazon, and I tell them that when have an offer, uh, let me know. I will come and ask you. Like that's what we we're basically saying. Mm-hmm. I wanna register for your office and I'll come and ask you when I want to know about your office. So that is, yeah, it's, it's not, the registration itself doesn't make sense.

They'll say when you, you know, want to get the offers, you come and ask us, we'll give it to you so we can remove this unless we see that the data structure really needed it, then we'll maybe add it to register a p a. But otherwise, no. So this is always push a push, okay. And back pressure again, which is always push. So push has back pressure in it, it has some registration that you have to do. Pull is pretty easy.

We just say, I'm this person and I want to get the next message for this topic. Okay, one more interesting question, which is around, again, do you want a subscriber to know up to what point they pulled messages? Or do you want the message queue up? To what point? The poor messages. So I think I, I think it should be the responsibility of message queue only.

I mean, if subscriber, uh, loses the offset, then um, he would not know till what message he has consumed, right? Yeah. So I think MessageQ should mm-hmm. Makes lot of sense. Uh, so that, can you like there a, is there a place or an example that you can think that do, I don't know, like In case of like in case of Kafka also, uh, zookeeper, uh, who acts as a service registry, right? It keeps the offset for its consumer groups.

Like this is the current offset for that consumer group. And it, whenever a consumer, uh, asks for a poll, asks for some messages, right? It, uh, starts sending those messages from that offset only. Yep. Okay. Let's talk about some of the drawbacks.

You, you, you have hit the name on the head. Mm-hmm. One, uh, okay, let's take an an example also so that, let's see if it makes sense. Okay. I write a service and then I go to the message queue before I, I can call, I have to figure out which message I want to pull first. That's a problem.

So if my service restart, I have to store it somewhere in my database up to what point I pulled, which is insane for a message queue. So definitely agreed with you that the message should be in the message queue. I mean, the index should be in the message queue. Possible drawback of this would be that I want to replay a set of events, and I can't do that because you hold the keys. You, you tell me which message to get. I can't even tell you that get me older messages because you're not going to allow it.

So that's, that's the only possible drawback. There's no practical use case for a server to say that, gimme the old messages. I just want to hear them, right? If it's a debugging problem, debug it separately. So Correct, correct. But in that, uh, also in that case, uh, I mean, we can manually set that offset to replay those messages.

Exactly. Go to go to zookeeper or go to whatever your message queue is and tell them that for this subscriber, this is agreed a hundred percent. Okay. Uh, we're, I'm not, I'm, I'm not able to understand this register and pull. I mean, these are two different functions, and one function is pushing the messages or message. Is it really registering the subscribers?

I mean, It is only pushing the messages. So certain things are things that the message to itself will do. For example, setting back pressure or pushing a message is not going to be an a p I call that the message queue will do internally as we'll see, when you, when you add to queue, it'll automatically push. Okay? Maybe, maybe it'll get more clearer. Uh, when we get the implementation.

The moment you add to queue the responsibility of the queue is at least some way to start pushing the message to people who have said, I want to get push messages. Mm-hmm. Okay. Um, euros with us. Good evening. Welcome to the, uh, welcome to the five man, uh, army.

But interesting, we, we are just having a talk conversation on how we can look at the low design of a message queue. Okay? Until now, I think we have set the a p as well. We have, uh, thought of the tradeoffs, uh, or overall picture of the tradeoffs we have now. Okay, now let's go for, uh, the implementation of these APIs. Okay?

So I, I'm not sure if you all know about subscribers, okay? This is, this is a place where people will publish events and subscribe to them. So should we use the publisher subscriber pattern? That's a tricky question because should we use the publisher subscriber mat, uh, pattern? If you are implementing a message queue makes no sense. It's like saying that, uh, if I'm, if I'm creating a, I don't know, like the message queue is, uh, an embodiment of the publisher subscriber pattern, sort of, okay?

So that, that, uh, it's not that you have to implement the publisher subscriber. This is the publisher subscriber pattern, right? So maybe a dumb question. I only found it funny, but yeah, this is, this is something, uh, that you can keep in mind. Okay? Internally, what kind of data structure do you want to use?

Like, uh, if we're going with the popup pattern, so for a particular topic, we can add subscribers. That sort of data structure is required, like the key is the topic, and, uh, the value is the list of subscriber who are listening to that particular topic. Yes. Yes, absolutely. Okay, let's do that. Let's, let's actually, so you're talking about sort of a map, is it Paris?

Yes. Yes. Just for registering. Okay. So let's say for a topic, Topic to subscribers can Topic to subscriber. Yeah.

Okay. And so this, this is basically your indexes, and the subscriber can say that, you know, I'm a for, for a particular topic. Now, also need something else is what type of subscription do you have? So this is, let's see, this is the topic, and you want to have something called, uh, digital Or, or you store the, the type of subscription or a subscriber for a topic that you store that. In fact, if you wanna store indexes, let's go for a more basic requirement. You wanna store the indexes up to which point a subscriber is pulled from a topic.

So this ring is actually a topic and you wanna store for this topic for a subscriber. Up to what point have they pulled? So what, what would you use here? Link queue. Okay. Okay.

But let's just continue with the map, uh, because you do need some sort of mapping between topic to who are the subscribers for this topic and up to what next. So now I have, I think we would, I think we would've a pair of subscriber comma offset, I mean subscriber comma. Okay, so would you use a map here, subscriber offset, like an in teacher? Not really. Um, oh, yes, just a second. Let go think for a topic.

Yep. I think, I think map would do, I mean, for a particular topic and for a particular subscriber, if I have to find that opposite, then it can be done, no one. Yeah. So for a topic, if you say code this, subscribe for this topic, uh, is once the next message. So you get the offset in oh one, and you give this back. Okay, wonderful.

Uh, code review will definitely pass bottom is writing the code. So the code review will pass, but only an interview ready, not in a professional organization, because looking at this, people will get a heart attack, okay? Uh, not, not a heart attack, like it, it, it's bad, but maybe it'll work for a while. Meanwhile, let's take, take the fact that you know this, there's a list of subscribers, uh, there's a pair of subscriber to type, so maybe, maybe you want a map here also, which says subscription type, pull or push, and which there's a list of subscribers for that. Uh, I'm ugly code, but it is functional, and we'll see what we can do about this. This is absolutely looking, but we'll see what we can do.

Okay? Any other information you need? I think coming back to this, this is not, we also need To, we also need to store the messages for that topic, Store the messages for that topic. Yes. So there's a map, a topic, and there's a list of messages that we have to store. Now, uh, coming back the point that if you are push subscriber, that's the only time we need you to, uh, tell us, right?

You need to register. So for a topic, we don't need to know who are the subscribers. We only need to know the push subscribers. So Push subscribers for that topic. Okay? This is simpler.

Uh, you have a map of lists, you have a map of lists, you have a map of map, uh, you have a map of maps, okay? All of them have the key topic, okay? Now, I don't know what is the design pattern here called, but what if we had something like this map of topic in which you're all of this stuff. So for each of key topic, you would have all of this stuff. Would you prefer that over three key objects, which are having their own variables, and then you have to send them accordingly, a hundred percent, right? Instead of having three data structures, which flow around and are scary to manage, you would much rather have one data structure of topic in which you would have an object, which would encapsulate three things, this, this, and this.

So for every topic you have, uh, the offsets, you have the subscribers, and you have the messages together. Does that make sense? Typically, this is, this is one. I don't know the name of this design pattern or if there is such a design pattern, but the basic idea is that instead of having these split and hard to manage three variables, you put it in a single variable. And this entire complexity can be managed by creating a class. Uh, let's say, I'm not very sure.

So I'll just call it class X for now, and I'll name it this. Now, let's see what it contains. It has all the offsets, it has all the people who have subscribed to it, post subscribers, it has all the messages. So for a topic, uh, this is a string, right? Topic. Topic name, topic name or topic id, yeah, the other topic id.

And here, what you actually have is the topic itself. It did make sense. Let me not jump the gun. Does this make sense? You have a map of topic IDs, and in for every topic id, you have these properties, you have the, uh, the offsets of all subscribers. You have the push subscribers who are interested in this topic, and you have the messages of that topic, okay?

So the, the way to identify this problem is if you're seeing that there is a lot of maps that you have, right? These are nested objects. Ideally, you want to get rid of that. You don't want many maps hanging around. Uh, there's a lot of, there's a lot of map calls that you're going to make, dot get, dot, add to that dot get dot put to the map. Map doesn't look good.

It's not encapsulation, right? Think that that will be the principle here. You wanna encapsulate, uh, complexity. You wanna put them into a single object, okay? So this would be an example of encapsulation. You took the entire concept of topic made object out of it.

Instead of having complex map to map to map, instead of having a Ari, Ari, Ari, you, you have a list, or you can think of a hash also has a bunch of barriers, but you don't want to think that way. You want to instead think of it as a complex, uh, or as a opaque object map. Guys, is it making sense? A thumbs up or, you know, unmute yourself and yeah. Okay, cool. So this is what we have.

We have a bunch of offsets. Offset a single log, simple object here in here. Have a map here. Lists, right? Okay, this is, this is pretty good. Tomorrow, if I need to make it more complex, I can make it complex, but, uh, sorry, if I need to simplify this further, I can simplify.

But for now, this looks good. So what do we have here? We now have a set of topics, topic it. Now our topic I, in that get me the messages and then add, add this message. Good. Is this making sense?

Wonderful, right? Marks the interviewer says, stop the interview right now. You're already hired, don't move a muscle. Yeah, your staff engineer comes running into the room and says that your promotion has already been done. Thank you so much for such a amazing piece of not really, they're not gonna be too impressed with this. They're gonna look at this and go like, you're, you're using internal object of this object that you did, and then said, add to it.

We had around the corner, but I think we have to speed this up. Now. We, so what, what you ideally want to do is you want to hide the complexity of this, of this, uh, object, right? So what you can do in provide add message, you save message, your now in this, you can add a message. What's the benefit of this? This is pretty simple, standard stuff, but why would I do this?

Why would I have my own, um, Abstraction? Yeah, your abstraction. So what's the benefit of abstraction here? I mean, What if you wanna change? Yeah, tomorrow? If, if I want to add some validation over the message, uh, function, right?

I can do it right there and not just, uh, expose the private members to all the classes and Yes, yes, absolutely. If you wanna change the data structure, you want to add validation, you want to do anything around it, my responsibility as a topic is to do that. It's not your responsibility to use my internal private, uh, data members. So that's perfect. Okay? So just to ensure that that happens, make these private, yeah, typically, like in a code review, of course it matters a lot in an interview.

The argument itself will, will be sufficient. Then you can say, okay, fine. I, I get you. Go ahead and you don't need to, you know, do it actually just, you mentioned the benefit. So, uh, this is crazy. Okay?

Another thing I'm not going to do is I'm not going to look at a database backing this message queue. In reality, there will be a database which is backing this message queue. And whether that should be an asynchronous call or synchronous call is a question. If you're adding to queue, you should probably do it synchronously. The only time when the database also accepts that, yes, I caught your message, is when you return a successful response. Otherwise, you keep trying to add to the database.

If it fails to add a database, you evicted from this topic, and you also say that, you know, uh, some sort of either service unavailable or, or please we try something. Or because you have tried adding it to the database multiple times, then you can just say that I, I failed to add the message. So, uh, later on, the client can re try. Okay? Anyway, so database brings in some complexity, okay? Because if you add a database, automatically the people, uh, who are, who are thinking of how is this queue going to be implemented, will say, what if the message queue crashes when you restart?

You have to get all the registrations from the database and you have to get all the indexes. So you have to get this object topics from the database, okay? And before that, you can't process any requests, right? So this part is super easy. Just add what about register? Register is also doesn't look very complex.

Let's see, you have topics? Okay, yeah, sorry, could you repeat that? I think it was, sorry. Okay. So, um, initialize is probably a better word for, as you see, my English is amazing. Uh, initialize sounds correct, telling this, right?

So initialize basically means, you know, I'm a push subscriber or, or register push subscriber. That's okay. Um, you have subscriber here. What I'm going to do is in my list of push subscribers, I'm just going to add subscriber, okay? So, alright, now registrations are also done till now. What we have not done is, uh, polling and actually we have not even done pushing.

So let's do, uh, pushing right now. We said we have a topic where message was added immediately. What we want to do is we want to get that topic and we want the podcast. This message, you see that we are calling the same thing again and again. This is a bit interesting. Should it be the responsibility of the topic to send the message or the message queue to send the, to broadcast The message you pass.

Uh, let's just say it is not the responsibility of the topic to broadcast. It is a responsibility as a message queue to broadcast. So get subscribers, get push subscribers. That will give you a list of push subscribers, list subscribers, and your return push subscribers. Okay? Now, for each of these guys, for we push subscriber, all we have to do is send them a message.

So subscriber send, what message does, so, uh, again, the, the question This is another basic question. Should the subscriber have a method to send a message to themselves? Right? So should the subscriber object have a way to send a message or should somebody else have it? I think this, uh, this should be the responsibility, uh, of a topic. Yeah.

Yeah. Either topic or the message to itself. Because routing should all of this here. So send a message to a subscribers that there is a way of routing things to a subscriber. Great. So, um, maybe they have told what kind of service they are, uh, and you have your internal routing mechanism or maybe even A G T P to which you send a message to a subscriber.

So I think that answers your question. Keep, you know how you send push messages when you add the queue automatically, you get all of the messages for that topic, and then you send them messages. People who are not subscribed for push, who pull users will still be able to get this message when they pull from this topic over here. Okay? That's the last piece of the puzzle. Um, so, So basically in the system, we are assuming that anyone who is registering is a push user.

And anyone who is calling the poll function gets to pull the messages starting from the zero index. Yes. Without registering it. Yes. Yes. In fact.

Oh, uh, mm-hmm. Okay. Yeah, you're right, you're right. I, uh, I, I have made a, I made an error here. Uh, when get subscribers is okay as registered, I should also add an offset to them, Or maybe we can skip For subscribers. Can I do that the next, I can do that in the next part, which is get offset.

So public, uh, if I, if I send you a subscriber saying get offset, you're a subscriber and I, I have to basically turn it in digitally or I have to, I have to get you the next message, right? Basically. So Not the, uh, message. Exactly. I think the offset only, Yeah, just no, the offset alone. I mean, then after getting the offset, you, you'll ask me for a message, get me the offset.

Uh, I mean basically if I give the offset 30, then yeah, you, you'll say, okay, gimme then 31. So the thing is that can be encapsulated here. Yeah. Ideally we should, uh, return messages only. I mean, offset is, uh, is someone wait for a message queue? It is mo it is mostly concerned about the messages.

So we can just return. Yeah. It's mostly concern about, And the, the benefit of actually escalating this is that if you have to delete or add a message, then you can do it here itself. The other person does not have to get the offset. Then use that to get the message. Got it.

Got it in between. If changes happen, that won't happen. So let's keep that encapsulated here. Uh, instead of get offset, you say get event, get next call a subscriber and basically we'll just return you the next message. The, what this also means indirectly is that offsets are only for pool subscribers. Push folks don't have an, it doesn't matter to them.

You just, the moment you get a message, you push pool are the only people who care about offsets. So it is conceptually easier to understand if you just call it pull offsets. There are no push subscribers who care about what is their index. The moment there is a addition, they immediately get the message. People who poll are the only people who care about offsets. Is that making sense?

Yep. Yep. So get next for this subscriber. If, if whole offset, uh, contains this key subscriber, then that is great, otherwise add, pull, offset the subscriber, add an index of zero, and then, you know, give them the, return them the message at index zero important to notice I'm not polling the message. Pull the message, other people lose the message. So, yeah.

Okay. Uh, now otherwise we just return the message according to the offset. So okay. Subscriber, this will give the offset and this will get you the message. Okay. We also have to increment the offset here, there also and if condition.

Yeah, yeah, absolutely. Absolutely. So what I'll do then is I'll, Uh, we can just, we can just increment it before it fails and then return the, yeah. Opposite. That's correct. That's I can two is to do this.

One is to say, okay, this is a code simplification get or default, right? It may not exist in all languages, but get or default zero got the index whether or not the index was there or not, not going to put, and what I'm going to put the next value. So, okay, so this I think is also not necessary. Now, which one we can just return? We can just return messages dot get indexed. Yeah.

Yep. Correct. That's correct. So this code is clear, may be language dependent, but this works. So you get the offset. If it doesn't exist, you give zero, then you say go to plus one, uh, and then keep doing that.

Okay. So index one goes next time and next time you are trying to get the offset. You get one. Yeah. And so on. So, okay.

Okay. And then, you know, you get this first message, then you get the second message. Okay, this seems fine. So, uh, what about get next, get next needs to be called by some person when you're polling. Hmm. In the message, in the message queue.

In the message queue. Oh, yes. Right here. Uh, poll. Okay. So get next message for this subscriber and topic id, not this topic.

Identity. It's a part of topics. Get topic, ID get next and all we have to do is actually return. This one should have been returning a message. Yeah, this looks reasonably simple. Uh, as an a p i, there are a few things that are happening in this topic thing.

There are also some things which are a bit odd, like every time you're doing topics dot get topic ID, topics dot get topic id. So whether you want to make a method out of this tool to move that complexity, it's not really going to help. Is there a better data structure that we can use to get rid of this talk? I am not very sure Topics. And the best way, Is it possible? Yep.

Sorry. Had, so, uh, thanks for sticking around. Okay. Yeah. I don't think it can be done because if you need any mapping, unless you say that the client has, you know, that topic. But, uh, if you need some sort of mapping, then you need to know what is a topic idea and you need to get that topic.

So you can think of this as a database call, as good as a database call that get me that topic. Once you fetch it, then you add a message to it. And for every subscriber of that topic, push subscriber, you send messages. When you're registering, you just add a subscriber to the push subscribers. And when you're pulling, uh, that's when you get the next message for a particular subscriber. And internally what's happening is it's getting offsets, updating it and returning that message.

Is the code looking much simpler than it Should be? Yeah. Cool. I, I don't know whether that's a good or a bad thing, but yeah. This, that's it. Uh, this looks like it.

Any, any improvements you see, Shar? I think otherwise I will say for interview purposes, or maybe, you know, we have used the right data structures because of which we are able to look at it. Uh, at a high level, best case we can do is just take topic and move into a separate file of itself. Yep. I, I, I think it looks good. I mean, if we have to add the retry and other stuff, then it might get a bit complex, but from a high level perspective, I mean from, from the core functionality, I think, uh, it should be, Yeah.

Yeah. It's this thing. This class has a few public methods add to queue, register and poll, and internally it has a send message. Meanwhile, topic, uh, provides you a way to add messages to a topic, initialize for push subscribers, get push subscribers. Okay. That happens.

And get next. Okay, great. So that little thank you for, for this. I think it was an amazing discussion I had with you guys. Mm-hmm. I apologize there were just two of you, but I, I mean, it's, It was fine.

Yeah, it's, it's fine. Uh, I, I have a question. So yes, lemme Just stop recording, otherwise, your personal details will all be linked out the internet. Good. Cool. Uh, yes.

Yeah. Pause, share. There must be a stop record or something. I'll be Recording. Recording, Yep. I think it's still recording.

Stop recording. Let me stop sharing. I think this will become completely, You must be having an option, uh, below that. I mean, where we have these icons at the bottom mute start video. Another, Yeah. Stop recording.

Uh, I'm sure you want to stop record.

## Nov 2023: Coupon Rule Engine for Food Delivery

Type: Video · Length: 87 min 49 s

### Lesson notes

Designs a rule-based coupon system for a food ordering app. It covers the validity checks and the single apply API, coupons valid for a user, restaurant or platform, indexing to pick only candidate coupons, and mapping flexible rules set from an admin dashboard to objects.

### Transcript

Ash. Good morning. Hey, good morning, av. How's the day going? How's the Saturday morning? Just woke?

Yeah, I've been waiting for this low level design session like two months now, I think. Uh, okay. Imran has also just joined us. Uh, Imran. Good morning, Akha. Good morning.

This, let's see what, so in fact, we can, we can do two things. One is to, you know, if you have any questions, you can just directly, you know, unmute yourself and, uh, state the question, or you can type it on chat, or I'll just share my screen. Uh, there's a Slido link where questions have been there. Uh, so let's, let's look into that. Maybe some good ones will come and, you know, if you like it, you can upload. Give me a second.

Uh, seems I'm not logged in. Gimme, just gimme a minute, guys. Sorry for this. I'll just log in, otherwise I can't share my screen. That'll be pretty funny. Yes.

Okay. Okay. Yes, this is here. And let me share my screen now. Uh, can you see my screen? Can you see the questions here?

Anyone? Um, you can give a thumbs up if no, we can see, we can see your screen. Okay. Awesome. So, first one is, can we discuss the system design of an offers or promotions or possibly Cashbacks kind of thing? Okay, this is quite interesting.

The reason for this is, I don't know if you have used PTM or Zuma, or of course you have, uh, you have used websites or apps where there are not just one promotion or one coupon code. There are multiple coupon codes which apply for different, uh, situations. Uh, sometimes an event creates a coupon code for the user. Uh, and so you have a lot of scenarios that you have to, uh, you know, code into the system. So that, that is a challenging thing. It's, it, it's much harder than it looks because this coupon code is valid.

Only when, put alone, some coupon codes may be valid when you, uh, club them with others. Uh, and so the, the validity check is, is complex. Okay? That's one thing, uh, on how Hot Stand manages to achieve system design for a big event like the World Cup India versus Australia. Okay? So, uh, I think what you're looking at is the real world part of system design.

Uh, so I'll just share a link with you here. Just gimme one second. I'll, I have a white paper, which you might find relevant. ArtStar has many, uh, things that they do. One of the things that you're looking at a high level design, I think here, uh, one second. Anonymous.

Okay. But if you're looking for a high level understanding of how it works, one thing you can do is, uh, in the high level design, this is in the other course of system design. Uh, we have hot star live streaming, uh, high level design, right? Uh, how does virtual advertising happen? How does live streaming happen? Video ingestion, transferring and processing videos.

Let's try about the back. Uh, if you want to look at the security aspect, how do you avoid videos from being accessed by multiple people in ACDN, uh, that is here, but if you want, uh, and even more, let's say like, uh, you are, you are basically focusing on scale and a more practical answer of how this works, then you're probably looking at this YouTube content delivery network. Yeah. Uh, this is at very large scale. How do they predict, um, how, I mean, how, how to store videos. So you can think of the CDN as a cash and the cash as an eviction policy.

Uh, and so YouTube has a particular way of dealing with it. They have spoken about the eviction policy here, but there are also references to the, to the architecture. Yeah. So at a high level, you can tell how this works. In fact, at a low level also, you can tell how this probably works. The difference between YouTube and Hot Star is Hot Star is a live streaming application.

So the video that you are going to suggest is not necessarily going to be based on region or anything. It's, it's more like, uh, if it's live, then most people want to watch it. If it's not live, then maybe very few people want to watch it. Okay. Uh, so this paper I just shared with you here on the chat, uh, is the open coupon code similar to Rule Engine? If yes, let's discuss.

It's LLD. Yes, it is. It is going to be similar to a rule engine. One of the solutions we can find for coupon code will be Rule Engine. Okay. Meanwhile, also, you can have a look at this video in the system design high level course.

Okay? So this is currently on top. Let's just go through a few more questions before we, uh, decide is also here. Hey, good morning. Um, since we have the blockchain peer-to-peer IMP system and BitTorrent protocol in this era, why don't we use that in big, uh, in extreme big events like World Cup? So blockchain, um, bit torrent.

These protocols are, uh, are useful if you have a system. So for example, BitTorrent, right? Let's say you want to stream using BitTorrent, uh, and BitTorrent is, is like a, there's a fountain of packets that you give out, uh, and people can consume something from this fountain and go and give these packets to other people. So let me cross out instead of stalking. Interesting question, though. Uh, has anyone here heard of Gossip Protocol?

Like at a very high level, it might be something like Bit Torrent. Okay. Uh, the idea with Bit Torrent, again, I'm just talking at a high level so that we can, we can talk about why it is probably not being used. If you stream packets here. The protocol says that I'll try to share these packets with other people, okay? Um, this is one approach, okay?

And it's really helpful to reduce the overall bandwidth required for the system, but latency not very sure how to manage this. Uh, and, uh, yeah, latency is a bit of a problem. Also, is it in your hand, you have control as an engineer if things are not working properly. If people are not able to view their video and they connect with you, they call you and say, I'm not able to view my video. The problem is, it's possible that, uh, you are not connecting with the right peers. You don't have the right people with the, um, people with the video packets.

So it's very hard because it's totally decentralized, okay? Latency is also an issue because a person lower down the tree will probably get the packets very slowly, and so the match has, or three, four hours have already completed. They're hearing firecrackers. Someone has won the World Cup and they got to know three minutes later despite them having paid you. So it's not a good user experience. This is for right.

The other one, which is Blockchain. Blockchain, uh, I'm not very sure how blockchain will help you. Uh, in general, blockchain can tell you whether some sort of a transaction or some log has been correctly completed, okay? Uh, so it's more on security in untrusted networks. Here you have a highly trusted network, uh, and also the packets are not such that, you know, there's any kind of logging or transaction that you want to replicate. So, uh, I don't think school will be correct.

Here I am PS peer to peer. Peer to peer. Again, I'll, I'll just talk about, uh, the protocol that they're u using, and I think that'll solve a problem. Think of this as a hierarchy, right? This is the, this is actually the video camera, which is capturing the video from the cricketer. Who's playing with this fancy bag?

Uh, yeah, okay. I'm gonna draw this out and you'll have this up my drawing, but just imagine a person is playing cricket, and you pass this eight K footage, uh, to your, to your server, okay? Somehow you're able to upload at this speed. Now, what would be the ideal architecture? Let's say there are end users around the world. These people are all in the us.

There are Indians here, and there are people from the UK also who love cricket. So you have to now transfer to these people. Um, what you're looking for then is one central source, which connects to all of these people. This source is managed by you, so you have high control. It is also going to be kept in a, in a place that you trust. So high speed networks can be connected with it, okay?

So by the time that this source gets this screen of video, uh, the, the time elapsed is going to be, let's say, a few seconds or at, at as low as possible. So maybe, maybe two minutes. So if you have your mobile here on the app and you're refreshing the score, this is going to be faster than the person watching a match on Hot Star, okay? And you can try this out. This is, this is something that happens if you have your cell phone and you are just watching the score on click Buzz or on Google News, that's going to be faster than, uh, you watching the video for that match, but that's acceptable. That's okay.

You just don't want this to be 15 minutes or something, okay? You just want it to be something like two minutes. So if you want this, uh, this sort of a product requirement, then what you're, what you would be better off doing is if you had some sort of a tree hierarchy, okay? With this hierarchy, the benefit is, uh, you can spread out, you can scale out as much as you want. Uh, you can, you can introduce layers based on what kind of processing you want on each layer. And tomorrow, if you know one part of this system breaks, you can easily repeat it.

So let's say, uh, the book, this is USA, right? What do they call this area? America. There's APAC here, there's emea, there's Africa, uh, I'm sorry, I'm, I don't remember all the, um, regions, but in general, you can split them. You can split them much better in this way, which connect with individual countries. So that's, that's why you would probably want a protocol, uh, which is being used by Hot Star, which is, at this point, you're going to have high speed networks, or TCP, maybe at the last mile, you are okay with Web R TC or some UDP based protocol.

So that's the reason why you're not going for peer-to-peer IMPS with Torrent or Blockchain. You're going for this, okay? Okay, final question. Uh, if you tell me broadcasting rights is the main concern, then I'll tell you to look at Spotify, Netflix, and Hot Star itself. Uh, no, broadcasting rights is not the main concern. Okay?

Uh, okay, good stuff. So we have this question, which we are going to be, uh, looking into offers and promotions, cashbacks, any thoughts on, uh, any other questions, guys, before we start with lower design of a, of a promotions engine or a rule engine sort of thing, or any thoughts on it? Okay. Right. Let me just get rid of this open. Has anyone worked on a system like this?

You can, you know, give a thumbs up if you have worked on a system, which does some sort of, you know, based on rules, it performs certain actions or, or it gives you a certain result. So it could be a emailing engine, it could be no. Okay. Uh, but, uh, Samit has, sorry, hasn't yet. Um, any, anyone who's worked on a Cooper engine or email, uh, scheduling engine, maybe a rule engine somewhere? No.

Okay, cool. So this is going to be something new. We are, we are going to be looking at this data with a fresh perspective. So the question is, let's copy that system. Design of promotions are probably cashbacks, yeah, offers are promotions or cashbacks. Now, let's take a example so that we understand this better.

Uh, let's say you are creating this for zomato and you're an engineer working at zomato. ZOMATO says that different people who come on our website let's, uh, stick to Zomato food delivery only. So when they come to our website and they are on the checkout page, we are, we are not even talking about suggesting coupons or telling them that if you spend 30 rupees more than you will be able to apply, uh, avail this when another checkout page, we want them to see all possible coupons that they can apply and potential coupons that they can apply. Um, the potential meaning that if you spend 30 rupe more, then you can apply it. So on the checkout page only, right? So, uh, you are on checkout, you have this cart over here, and then you say, uh, apply open.

So then you get these bunch of coupons here. So there's some of them have apply, some of them don't have apply. It's it's mask. And so it comes like, uh, spend 30 more, okay? Um, and this coupon code, maybe you have some, uh, information here. IDFC bank, this is I-C-I-C-I bank, and this is SGFC.

Okay? This is one part. So for different coupons, the applic, uh, is a coupon valid for you or not, has to be found out and displayed to the user. Can you see any other requirements? I mean, if you apply one coupon, then you can't apply another coupon, or maybe you can club some coupons, Right? So number one, um, the coupon clubbing, whether or not that's allowed, uh, we'll have to see.

So when a person says apply, we check, uh, whether it can be clubbed or not. Mm-Hmm. Any other thoughts? Validity. So I mean to say expiry, so the current situation that the user is in, looking at the cart, is this open going to be valid for such a cart? That is, that is validity expiring means that when the coupon has expired, we don't even show it, uh, as a, as a possibility, but it might be there in our database somewhere.

Anything the opposite of expiring. So let's say, uh, I, I'm an I bank valid till, okay, so valid till this is I think, you know, comes along with expiry, Correct? The opposite of valid till, for example, you are an ISA employee. Uh, you, you are the marketing person, you go there or the sales person, you go there and you tell them, we wanted to start on Black Friday. So valid form, actually. Mm-hmm.

Start date. Yeah. Any other issues that we can see? Offers only valid if you use UPI offers only valid if you use the ID FFC payment method. So payment method may be a thing which kind of comes along with validity, but if you, but if you don't have, show it to the user. Ah, yeah.

Any other thoughts? If you want, you can open your Zuma right now and have a look at what these guys are doing. I'll, I'll just, let's open Zuma, let's watch the great food that we can purchase. Lemme try and log in popular locations. I'm in Mumbai. My breakfast will also be taken care of.

Okay, let's say I want to order some data, uh, and now let's go all the way to checkout in a interview In the real world, of course, you will be doing this. You'll probably check what you can use. But, uh, in an interview also, you can whip out your phone and, you know, uh, just tell them that, would you like me to go through these or do you want me to have a discussion with you directly? Okay, look at this. 50% off, up to rupees a hundred, use welcome so and so, so yeah, how much money do you, uh, how much money does the coupon actually take out? So maybe up to rupees a hundred.

So maybe you just get 30 rupees off because your order value is 60 rupees. So, uh, amount to be deducted, amount, deduction logic. You can say PLA 1 25 off, 10% off, up to 40 use. Uh, and then you have, yeah, different cards. So there is one other thing for validity. One is payment method.

Uh, another one would be, uh, you know, restaurant is order value. So you're ordering from this restaurant, therefore you'll get this coupon code. Um, if you order at this much price, it's also possible for the validity to be platform based. zomato wants you to purchase. Doesn't matter which restaurant you're purchasing from, uh, at least this much order value needs to be there. Okay, any other, uh, thoughts on this?

Right? I I think the, uh, this pretty much covers it unless there's something in mind. Uh, I think this covers it. So, offers, promotions, cashbacks. Yeah. Okay.

Sometimes you might get a cashback that is possible. So instead of amount to be deducted, you just get this, uh, amount back in your, in some account, maybe, maybe a online, uh, maybe a wallet, right? Uh, so this is going to be slightly different from amount to be deducted. Let's see if it's very different Goup, can we have, uh, coupon based, uh, for certain users, users only, like those functionality? Oh, yes. Yeah.

So maybe platform based instead of platform based, we can call it user based. And sometimes there's platform based, also the entire, so sometimes you want Imran to purchase more. Sometimes you want this restaurant to be promoted more. So this might be either Zoom matter itself or the restaurant scene that, you know, promote. I mean, uh, buy more from us. Sometimes you want this person to be hooked or you know, your, your, uh, you made a mistake.

So you give them this user, you give them that next order. You take 500 rupees off, it's on us. And sometimes you have a Diwali kind of thing where across the platform, the entire platform, you say, um, you know, this is delivery free. So 40 rupees off or a hundred rupees off. So there are three, uh, three factors that we have to look into to get the coupons for. A user coupon, clubbing, I think is, is kind of with validity.

If a person selects a coupon, then you say, can it be clubbed with any other coupon? If it can't be, then you choose that only, right? Um, expiry again, should be a part of the coupon only trigger. When is it valid from? That's also part of the coupon, uh, payment method. This coupon is only valid if you use this payment method amount to be deducted.

If you apply this coupon. What, what happens? So how much should I give you as a discount or cashback? So amount to be deducted and cashbacks seem very similar that I'll, I'll put this here. So firstly, let's look at what kind of APIs are we looking at. Then we can look at some of the objects.

Uh, and finally we can code this out. So the first idea is coupon clubbing, right? Uh, so let's say we have some sort of a, AP called apply, apply coupon, because that's what you're trying, that's the time when you look at whether a coupon can be clubbed or not. Okay? So that is one part. Uh, and in apply, you are going to be giving some sort of a coupon object.

We are not very sure what this coupon object is going to contain, but you, you'll have to pass that. And it's going be for, yeah, exactly. For a user for this restaurant. Am I getting the restaurant spelling correctly? See, I should just call it something else, you know? Uh, and, uh, the platform is always going to be the same.

So let's keep this. And we have, uh, this, so what you get as a response, I think what you should get as a response is whether or not this open coupon can be applied. So not only you also need the checkout page, or let's say cart right now, what does the user have? Okay? So yeah, let's, initially, let's take all the items that we possibly can, uh, and, and what do we give back as a response? Can we apply this open coupon code or not?

And what is the, uh, amount to be deducted or cash back that you're getting? So this is more like a result thing. So let's note that down. So, uh, open coupon response is going to be returned, okay? This open response needs to tell how much amount is to be deducted or how much cashback you are going to get thanks to this coupon. Uh, and what are the set of coupons that you are applying now?

So let's, instead of cart, okay, let's say coupon set, Set, can we just have cart here instead of user? I mean, sorry, user instead of cart. User has a cart. That's true. Uh, but maybe, uh, user has a card, but for this user, this coupon is valid. So maybe, you know, last time there was a very big order, and so this time you want to please the user.

So it doesn't depend on what cart, okay, you're saying that cart will have the user object in it. Um, yeah, that's possible. You have the user id. Yep. Yep. Let's initiate, I think let's just take the parameters, then we'll crunch them down.

I don't think we need a restaurant also because cart should ideally say which items it's picking up from. So, okay, uh, in open response, you then have basically a set of open coupons that are being applied, uh, and what is the, uh, cash back and what is the, uh, deducted amount? Okay? Always GST will be applied on the, on the deducted amount. We are not assuming that there's ever, and it's stupid to assume, I guess from my side, that tax can be deducted. That's not going to happen there.

Whatever amount you deduct, let's say a hundred, uh, that's going to be on the final amount. Okay? Okay. So this is one that kind of takes care of coupon clubbing, whether this coupon is valid or not, okay? Uh, expiry and valid till valid from is part of the validity check itself, the payment method. This is also part of the validity check.

I think all three are part of validity check. So this is all server side stuff. Uh, and I can see only one API. Is this making sense? I, I guess it does make sense, yeah, sorry. Yep, yep.

It does. Yeah, it does make sense because when you're on the app, you don't want, uh, multiple API calls. We can assume that the coupons are being created by the admin dashboard somewhere. Uh, let's just focus on this single AP, and like Satta was mentioning, let's try to crunch down the number of objects that we have, because ideally, the UI doesn't want to hold so many or send so many objects with duplication of data. So you have, you know, apply this coupon. You also have a cart, so this will tell you the price right now, the things that we were talking about that, you know, uh, minimum order value that can be told you, uh, told to you by the cart, which user, uh, is, is having this cart.

What are the items in this cart? So you can tell which restaurant, uh, is, uh, is, is having this cut at checkout. And so we don't need to pass in user and restaurant explicitly. That can be implicitly as a foreign key here, okay? And the final thing is the set of coupons, which have been applied. So set of coupons, applied coupons, okay, so just three parameters that we are passing in and what do we get as a response, but what is The coupon and set of coupons?

I mean, what is the difference between those two? So, uh, one coupon is the proposed. So When you went on Zomato and you click this button, so this is the coupon that you want to apply now, but you may have already applied two other coupons. You might have clubbed two other coupons, let's say these two. And so we tell the backend that, uh, coupon three and four have already been applied. This person wants to apply coupon one also club one also with it.

Is it possible so the backend can say, no, I'll not take, uh, one, I mean rather three and four will then be removed. I will only send back one. Okay? This is something that happens on zomato. If you apply a coupon, let's say three, and then you apply one, if they can be clubbed, they club it. If it can't be clubbed, then the coupon that you are asking to be applied, let's say one here, uh, gets applied and three is removed.

So it's not a great user experience because sometimes you are going to get 1 25 off and, uh, you say that a, I want 50% off on on more stuff. And then Zomato just removes 1 25 and gives you a hundred off. So you have to go back and change that coupon then. Not a great user experience, but it's what happens in, uh, in the current situation. So we'll go for that. You are proposing a coupon and there are a set of coupons that you've already applied.

This is 99% going to be nothing. This is going to be blank, but it's possible that you have a set of coupons applied, and then you have a, uh, a card, the proposed coupon, and this should then work. Understood. Okay? So, and there's a response. We tell you the set of coupons that can be applied.

So if you propose coupon is always there in the set of coupons that you can apply if the previous ones, there are some that can be applied, we'll give you that cashback that was applied thanks to these set of coupons, total cashback and total amount that is to be deducted from the final price. Okay? So this is the APII think we can see some objects here. Uh, deducted amount and cashback, I'm assuming is double, okay. Uh, cou coupon. Let's start with that.

Let's start with cou coupon object. What do we need here? So we mentioned a few things here. We have restaurant, user platform, uh, expiry valid from. So let's, let's take it that as a date, it, uh, valid from valid two. These two are dates, uh, code, open code, that's a screen.

Now, any other payment method, let's say, okay, so we have many problems here. One is payment method, one is user, uh, another one is the platform. Why, uh, wide, uh, coupons that we have, and the other one is restaurant. Okay? Can you see any problem with this tomorrow if I say that, you know, we will only give it to people who have, uh, stayed, uh, who signed up at least three years ago, day after tomorrow. I say that I'll only give it to you if you purchase biani, because today's, let's say, some special festival, these rules are totally arbitrary.

It's very hard to predict tomorrow based on what rules you're going to give a coupon. The restaurants might be there tomorrow, restaurant might say that, uh, only from 5:00 AM to 7:00 PM I will give this coupon. After that, I won't, during lunchtime, I'll give the coupon. So valid from, and valid two also can be complex. It can be that, uh, this is a recurring valid from and valid two. So from every day, from 6:00 PM to 6:00 AM I give the coupon because in nighttime, nobody purchases from me.

Mm-Hmm. So, so this is the thing. Uh, we have, we have complex rules. And so I think we are talking about, we were talking about this, uh, maybe it's best to map all of this complexity in as code. Okay? There are options that you can use.

One of the things is to manually tell the person, this is your problem. Every day from 6:00 PM to 6:00 AM business is low, you manage it, you manually create a coupon. Coupon on my system. It's not great. It's not a very good user experience for the restaurant here. Remember, the, the person who's your customer is not so much the person who's purchasing, but when you're creating coupon, customer is the restaurant.

So option number one, manual, uh, I think we'll skip this. Option number two, can we have a config file where an admin goes and adds this configuration that this coupon, I mean, these are the set of coupons, and these are the, uh, validity times and payment and user and restaurant. Okay? The problem with this config file is that every time you change it, it'll, it's a, it's a tedious process, okay? You want a more flexible process for admins to add coupons? Make sense?

So we'll, we'll skip this. What we are then looking for is some sort of an admin dashboard where they can add rules. Do we all agree on this admin dashboard where we can add rules, flexible rules? Yep. Yeah, yeah. Okay.

AK, Iran, Samir. So that all of you, We'll need validations also on those rules. Like What are, which validations, sorry, On admin dashboard, whatever, the rules are being added manually, so there should be some validation, right? Yeah. So, okay, that's interesting. Yeah, it's a, it's a, it's a problem if there is going to be validation there.

Okay, let's go for the extreme side where every restaurant which has a coupon to be created gives that requirement in some text, and a developer goes and adds the coupon saying that, okay, if else, if else, if coupon code name is so and so, then check if that time start time and time is less than 6:00 AM and if so, then it is valid. This would be the extreme state, right? Check if the coupon code is check if the user is this, I mean, name is distinct. So this is the perfect world, uh, where, you know, every group has its own set of rules. The problem with this is, of course, this will, uh, not work for zomato at its scale. Everyone will have new coupons every day, and they can't keep so many devs to just manage the writing coupons in their code.

So they have to give, um, some sort of a admin view for part of this logic to be moved in here, okay? And whenever we do that, whenever we move out of code, we lose some flexibility in code. You can write anything in a admin dashboard. Uh, there will be some commonalities that we look at and only those can be applied. So payment method, uh, recurring times, user, restaurant, uh, validity to and from date, and that's it. Okay?

We, uh, we will have to assume that if there is a special day, let's say Eid and people are, you want to encourage people to buy ani, then uh, that's not going to happen. Okay? Maybe you have a set of coupons that you can create from a piece of code on your system, but rest are all felt from admin. So admin coupons, and there are some system coupons. System coupons, let's assume are very small in number only specialist Black Friday coupon, uh, you will only get that if you purchase electronic items. And so and so, so you have two types of coupons which go in admin coupons, system coupons, and total.

This is what the user gets to see. Okay? Is this making sense, guys? This is written by devs. Yeah, this is written by the admin, and so we totally ignore this part. Yeah, sorry.

Why can't also, why can't also these set of coupons be made from admin? I mean, the system coupons, black Friday and other, I mean admin, there may be is Responsibility. Uh, the reason we are not doing that is they may be very customized, uh, like, uh, in terms of it, it'll run only for 15 minutes. Uh, it'll run only in India. Uh, it'll run only if you apply a biani, right? If that ever happens, if that kind of extreme level, like if you are going for, uh, mm-hmm, the valley, you, if you buy, uh, the, the Valley suites, then and only then we'll open apply.

Like I'm, I'm looking at a very stupid scenario. Uh, mm-Hmm, not, not very stupid actually. Maybe you want this, maybe you just want to encourage people. It's too complex to have an admin dashboard. It's too flexible. Admins normally never use it.

So bring in that capability as a dashboard may not make sense. It's cheaper to just tell the dev to add that, uh, in the system itself. Okay? Some are system generated, some are admin generated. These are common where maybe you give this admin dashboard to the restaurant and say that you want to add them, you add it from the admin dashboard. Okay?

Okay. So we should probably completely ignore this because this is just code, a piece of code which is going to be returning system coupons. Um, it's validity and all that will also be very similar to how we do validation here. So this part we can ignore coming back to admin now, okay? Okay. Uh, basically what we have is a set of rules.

Do we agree? We have a set of rules which are based on these five parameters, like the person who's applying this when given a user, when you input user here, restaurant here, and a cart here, if it passes through all rules, which are, and, and, and or, and so if it passes through these set of rules with success, then you say, great, this coupon is valid. If it can't, then you say, this coupon is not valid. Is this making sense? You have a set of rules that must be applied for every coupon, correct? Yeah.

So This set of rules, we'll keep those like, uh, uh, we have some coupons where, uh, we can apply multiple times, but we have a time limit, right? Like on swee we can apply one coupon and after two hours only, we can use that coupon again, right? So those rules will be part of this rules, Yeah. Yeah. So one, uh, if you have them as rules, let's see how we can bring them up as rules. So what we are talking about is, uh, you can only apply after one day or you can, uh, on can you club this coupon with some other coupon.

So, we'll, let's see whether we can do that, how we can do that. Um, let's start with the basics, right? I think in, we'll have to tag coupons if we want to club them, but let's start with the basics. We have one rule, which is, um, you have the, you have this, and you have the coupon that is being applied also. Now, just focus on this part, this coupon that is being applied is going to give you a set of rules. Let's assume that you get this from the database, okay?

Some sort of code which you get in hand, uh, a set of rules from the database for a particular coupon. Now, each rule is like a filter. So this co, um, needs to have a minimum order value. So cart dot, uh, order value has to be greater than 500. Now, this is one rule, we somehow need to pass the cart that we did in the function apply here, okay? The second part is let's say user dot, um, or, or rather some other system can probably tell you this.

That is, is this coupon valid for this user? It's possible that I share my coupon code with you saying that you use it, but there has to be a way for the system to check whether this coupon is valid only for this user or not. This becomes another rule. And similarly, more rules are going to be added. So open dot valid from greater than current date, similarly less than current date for valid two. Is this making sense?

Got using these rules, do we, do we generate all sort of coupons beforehand in the database, or I mean, on the runtime, we apply these rules and check. So on the runtime, we apply these rules and check, Okay? Yeah. The reason being that if you have hundreds of coupons, uh, which are possible, okay? Okay. Uh, let's, uh, let's not go there first, okay?

That is actually, that's a good point. The API needs a list of coupons also, not just app apply. It also needs a get list for this user, uh, this restaurant or cart. Uh, get me the list of coupons that I can apply. Yeah. So yeah, so in fact, I think it's just get for this cart, get me all the users, uh, the list of coupons I can apply.

So that is a separate API. Let's get to that also. That's pretty important. But assuming that you have this, uh, you had this list of coupons in front of you, you are now only asking whether or not I can apply this coupon. So what we are doing now is checking if this coupon is valid for you, if the order value is sufficient, if the, uh, the dates are correct and so on. They're all as rules.

So how do you take, like this is technically code, right? How will you store this per coupon? So Cooper coupon I 33 has these rules. Even if you manage to store it in a, I mean, how will you store it in a DB n? How will you bring it out to the DB n execute these rules? So that's the point of a rule engine, but how will you make it?

Any ideas around this Iran? Samir? I haven't really worked on it, but I've seen, uh, some system where, uh, they had some sort of rules in a config file, right? Okay, yeah. Wherein they had some, I mean, fixed understanding that, okay, add is this, and this word is this, and this word is this, which, uh, is being mapped in the code after, right? So like card dot order value is greater than 500.

So they might have something order value greater and then 500. So maybe some sort of rules, okay? So what we are then looking at is in the db, whatever we store, let's say a file system or a database has this, like you said, a config file can do this. Let us assume that we have a database instead, uh, so that you can, you know, uh, you, you have this key also that you can just access that this scoop coupon code. Give me the file or rules all the rules you'll get over here. So the way you're storing it in the DB is open coupon id, and then you have some text.

So the rule itself, what we need to do is we need to somehow store these rules. Firstly, let's assume that actually let's not assume anything. When an admin is storing these rules from the ui, uh, this text has to be passed into a language that we understand. Okay? So let's say this is exactly what we store Cooper coupon, uh, valid from greater than current date. We store that here.

When we fetch that rule back, we are going to get this text here in our memory. We somehow need to be able to pass this text and convert it into something like a if statement, correct? That's the idea. So we somehow, like when you pass and unpass JSON, what you're doing is you're converting a text into object that can be used in memory. Similarly, you need to be able to, uh, pass this rule into an object in memory that you can apply on a coupon or, or on a, on a, okay, so let me, instead of telling you all this, show you an example per rule engine, very good. I can't find it.

Just gimme one second. Yeah, that's, no, sorry. Gimme one minute. Yes. Okay, let's search for rules here. Rule engine, rule rule list.

Yeah. Okay. Okay. Now this is what the rule is. So what I have done is I've taken a class loss of rule. Uh, it has certain objects inside it, okay?

Which is basically a function. A function which takes a board and a game state. So it takes two objects and it returns a response. So what does it return? Oh, sorry. Function means it takes this and it gives this as a response completely.

Forget what I said, basic ideas. A rule is an object, which means you can convert it into JSON and you can un pass. It also at this point, does this doesn't make sense? If you have a rule object that you're able to convert and deconvert, that's perfect. Mm-Hmm. Okay, so now what is this rule object actually going to look like?

As long as you can have an object of a rule, you are sorted because all you have to do is rule dot, uh, apply, okay? And it'll check whether a thing works or not. So what is actually happening, if you have, uh, worked with Java or Golang, there are, you can basically define a function as an object, right? You can have a lambda, uh, in Java, uh, which is, which is an object. Uh, if you have a function which takes a board and returns a game state, that's a function. Another type of function can be function that takes a, uh, coupon and returns a bully, which is basically yes or no, the coupon, okay?

This would be the rule that we are looking at. Take a coupon, take a user also along with it. Take a restaurant also along with it. So this can be a complex object, uh, request. So coupon request, which has all of these four or five objects inside it and return as a response of bullion, or we wanted a coupon response, right? Which had how much cash back you want to give and all of that stuff.

So here we just take bullion first, okay? Uh, now what is this function? A function is an object that takes something and returns something. If you apply, then you pass in this parameter and you get a result, okay? This is perfect for a rule engine. This object is absolutely perfect for a rule engine because if you can pass your rules into functions, after all your rule is code.

So if you can pass your rule as a function, then you can get a response for every rule. You can get a bull response for every rule passing the object that you want to pass, get a bullion response and you can perform the and and or operations by yourself on these functions. And finally, you can tell whether this is valid, can show, Can you show one example of, uh, I mean where you have stored, uh, the rule and then used it in the code? Yes. Uh, so let's go to the rule engine. Look at this.

Get state, what I've done is take every rule r rule condition apply, and what I'm doing is if I'm getting a new game state every time, if the game state is over, then I'm returning. Otherwise, I'm saying it's not over. The game is not over. The winner is not yet decided. So what is this rule engine doing for me? I'm basically checking in the rule engine whether anybody has won or not.

This tic tacto board. So if a straight line, if there was X, x, X like this, then it's a win. If there was x, Sorry, If there was x, x, X in this way, then also it is a win a tac board. If you have a diagonal, if you have a reverse diagonal, all of this is a, uh, ending condition. So what I have done is I've made them into rules. Instead of me writing, uh, you know, fall loops four times, I have converted each fall loop into a rule.

And so now, uh, if you tell me that, uh, there's a new condition go in which the tic-TAC board game can be won, I just have to map it as a rule. Typically, if you have written any tic-tac board game, you have four follow loops which check different orientations of, you know, are all Xs, there are all os there. Do you have a straight line of os? Do you have a horizontal line of os? All that checking has been just converted into a rule engine, and so does, How does rule engine, I mean taking decision that, uh, horizontal or vertical or I mean, where, where is it written exactly? The rule engine is not.

Yeah. So, uh, the rule engine doesn't even know what the rules are. That's the best bit. The rules are being stored in a database or some place. In my case, let me show you where I'm storing them. Rule map has it, right?

Let's go to rule map. Who's populating rule map? Okay, uh, let's go here, get rules. What are these rules? Let's go here. Get rules is saying make a rule set in that, add this, I'm doing it manually.

I'm doing it in code. Mm-Hmm Mm-Hmm. You can also do this from the database, right? You can pull these out manually. I'm saying, uh, take a board and in that execute this function, what will I get as a response? Okay?

Uh, I'll get a game state as a response. So let's see what this does. Let's say Travis, right? This is also a rule. Let's go to Travis. What's it doing?

It's returning against state. That's what the rule wanted, okay? It got a board returns against state, okay? That's what it wanted. What's happening here? Um, I'm checking from J equal to zero to j equal to three.

Whether a condition being satisfied, if yes possible streak is false. Sorry, if if no possible streak is false, if no, it is false. Otherwise, if possible streak is true, then game state is over and return. So over here, uh, in our case, we can say if minimum order value was greater than 500, then return true otherwise return false. And what will happen here? Mm-Hmm, it'll go, uh, and add that as a rule, it's not going to execute the rule, it's just adding it as a rule, correct?

It's, it's saying if I get an object of coupon and there is a restaurant and, uh, cart then execute this rule. When, uh, when it is applied now, now, look, I had four rules here. This is for different situations, and I also have a fifth rule. Like if all the boxes tic-tacs, three plus three, if all of them have been filled, then also the game state is over and the winner is blank. It's a drop, the games is a drop. Mm-Hmm.

So I was able to add this, uh, with, with no change in the rule engine. So rule engine doesn't even know what rules are being applied, uh, that is being fed by this function. And you can imagine that this function is going and hitting a database to get the rules that it meets. Understood? Yeah. Okay, cool.

Awesome. So s uh, great, uh, Iran, is it making sense? Yes. Okay. Okay, great. Um, this is basically the crux of the, of the whole problem.

If we can create a rule engine like this, if we can pass and un pass it into a database, then we can, we can fetch those rules and run them in the rule engine. You, you need a basically a map of coupon code two rules, um, execute them all, and functions will be there everywhere, right? Normally you won't have, or functions if you have or then you have to say that this, basically what I've done is I've done ands, right? I've just said, get me all the rules and I'll do a, I'm checking if all the rules are being satisfied. Sometimes you might want a or, but that's more complex. Uh, for now, let's just keep it aside.

This is good. So we can apply rules in a cart. The final part, which I think, uh, Shar mentioned was get list. Get list is a bit more tricky, but it's, it's definitely possible. How do we get a list of possible coupons amongst, let's say thousands of coupons, maybe even lacks of coupons, right? That Zomato has.

You have to find the ones which are relevant to Imran. So he's come on Black Friday, he wants to purchase something from a restaurant, you know, it's Imran, you know what he's purchasing the order value everything. You also, uh, know that the day to day, so which coupons are valid and not valid. So how do you fetch the potentially useful coupons for Imran? This is the challenge. What would you choose here?

Firstly, let's say you have 300 coupons that are valid, like potential usage. So you can't show all 300. I think we'll uh, limit it to 10. So we'll either page it or we'll show them 10 only, like we the top 10. Maybe some priority might be useful here. Uh, any other thoughts?

Let's say there are only 10, then what will you do? How will you fetch these 10? If we go to the database and start searching amongst lacks of coupons, which coupon is valid for each user? It's going to be really, really slow. So what else can be do? I mean, for one user, if we have some list of coupons and we have indexing on user ID or something Yeah, makes sense.

And we chart the database on the user base, on the user id, then we can get the list. But what I'm not getting is how, how are we generating the coupons for a particular user? I mean, admin is doing it. So is admin going to add rules, add coupons, or is admin just going to add rules or I mean, No, the admin has to add rules and so they'll add a coupon and they'll mention the set of rules, which are valid for that coupon, but you have hit the nail very close to the head. Uh, look at this. We, we know which restaurant is being, uh, is being ordered from.

We know which user is here. Yeah, we don't know which coupon has to be shown because obviously it's get list, but uh, we also know the cart, like the maximum amount. Is it easy for us to search amongst rules, these jss ON objects which are going to be stored or, or some configuration will be there in which they're stored? Is it easy for us to us to search in these complex objects? The answer is no. There's no way.

It's not easy at all to search in complex objects. Even if you can write a XML query or uh, JSON query for this, it's still not very easy. So it's best to take this metadata out of the coupon. We know that coupons are either applied based on restaurant or user or platform, right? Mm-hmm. Platform wide coupons are most likely, um, few in number, let's say a hundred.

Firstly, we also know that there is a validity. So all coupons which are valid, we can cache put it in memory. Why hit the db? Uh, that is, that is one option. If you can't cash them all, if you don't have a coupon can hold them or you, you don't want to keep them all in memory, uh, that's okay. You can have an index on valid from a valid till definitely on, valid from you can have an index, only those coupons which are potentially valid, we will pick up everything else.

It doesn't make sense. So we take only those coupons, which are valid. Uh, now comes the interesting bit. We know that a particular restaurant, a coupon can be valid for a restaurant, can be valid for a user, can be valid for a platform. Okay? So when we are creating a coupon, why don't we take that information metadata and store it.

So user id, this can be blank. Also, restaurant id, again can be blank and whether it is, um, a platform coupon, so this can be a bullion, and if it's false, then it's not valid across the platform. If it's true, it's valid across the platform. Okay. How does this help? When you're doing a get list and you know that which user is actually, you know, um, trying to get a list of coupons.

If we have an index on this user ID on the coupons table, we can fetch only those coupons which have this user id. Yeah, that's one set of coupons. We also know the restaurant id, so we can fetch only those coupons which have this restaurant id. So that's another set of coupons and we know which coupons are platform wide, if this platform will is true. So that is another set of coupons. Are there any other coupons which are possible for this user?

The answer is no, it's not possible. You will be shown a coupon only if it is valid for you or valid for that restaurant or valid for the AI platform. If it's valid for Imran, go, should not be able to see the coupon. That's okay. So three sets. What Exactly do we mean by platform?

Platform is zma. So Zomato says for everybody in, in my platform, I will show the coupon. So it's like a Black Friday coupon or a, uh, Diwali coupon. Okay. Like it's not Iran. Both get to see the same coupon.

idc. Understood. Also, payment method would also come under platform, I believe. I mean that also will be shown to all users, right? If you have Yes. Excess bank card, if you have this.

Okay. Exactly. Exactly. Mm-Hmm. So payment method is on the platform, but then the validity checks will come in, will, will, uh, either remove it or keep it, but the, uh, the idea here will be that if it is valid for only these three types of coupons are valid. Hmm.

And because it is platform wide, even if Id comes and says, you know, I have 15 coupons, it's not that large. The, uh, the fan out or the, the scale is not that big, like 15 coupons okay? For per person will run 15 uh, queries. So this, this would be one way to get a get list. I'm assuming user based coupons are small. I'm assuming restaurant based coupons are also very small.

Okay. Because our restaurant only gives a few offers, it won't make hundreds of offers. The only thing which is large is platform based. Okay. So let's assume that you are making three queries. Uh, this user based, you can even prefetch when a person is adding things to cart, you can go and fetch it and keep it in the cache so that when they go to checkout, you already have it applied or something.

Similarly restaurant, okay? Uh, but platform is, it may be complex. You might have hundreds or thousands of valid coupons. Okay? So now how do you, and once We apply a platform coupon, once we apply a platform coupon, it should not be shown again, right? And it is not tagged to user ID yet.

Yeah, yeah, you can show it. Uh, as long as, oh, okay. You mean to say the, uh, how many you can Apply a platform coupon, correct? Oh, yeah, yeah. I mean, I apply once Friday. Uh, okay.

Once use at most. Once I guess you can put that as a, okay. Okay. That's actually a really good point. Um, the, the thing is, if this weapon has been used by this user, then don't let them use it again or use it three times only. Okay?

Can the rule engine manage that? Can this rule engine manage that I given, uh, that you're going to be passing in user to this coupon. Okay, that will, yeah, that rule has to be something like, uh, number of times that this user has applied, this coupon has to be at most one or three or five. Can that be done by a rule engine also? Mm, but then rule engine would've to fetch database? Yeah, it, it would, uh, no, but for this specific user, okay.

Yeah, it can, it can, it would have to go and fetch for this user how many times they applied the coupon. So that would be a, a call to some database client, which is going to fetch the number of times that this user has applied a coupon. It's definitely possible with the rule engine. Uh, but yes, the, the rule has to be something like, you know, okay. Yeah. How does it, how does a rule engine, how does a rule say that you have to apply it at most five times?

I mean, how does it get that object of, Hmm. So, okay, that is complex. Even even more simple that you can apply it only once. That itself is a challenge. If you want a rule engine that's going to be complex, if you want that, this coupon can be applied only once, only once we are looking at, then that can be stored in a db. And when you are fetching coupons or when you're trying to apply, uh, there can be a overall code, which just checks whether this user has already applied the coupon or not.

So yeah, apart from the rule engine, maybe when We, Yeah, so that's maybe When we use, maybe when we use a platform specific coupon at that point we can, uh, I mean tag it with a user. I mean, in the user, uh, related coupons that Okay, this specific, you have a, so platform coupons must be have a id, right? Must have a id. So yeah, if I order and if, if I apply a platform specific coupon after, uh, this order is done, I can then tag the platform id, uh, coupon with the user ID that, okay, this is done, I mean, expired, done. Ah, Uh, so if, if there is an order that said has done 1, 2, 3 coupon, if, if it's successful, then there's no point showing it to him again. So I can go to the orders table and then also check whether these coupons are to be shown.

But that'll be another, uh, query Maybe if, if, if we know that platform related coupons are less, right? If, if we know that, okay, these are 5,200 in numbers at max Yeah. Which will be shown to all users. So mm-hmm, No, but at the end of the day, you might have a delivery which is slow, and the person says, okay, I'm going to give you a coupon, uh, because the last delivery was slow, I'm going to give you a hundred off. When they have applied it, they should not be able to apply it again. So this is a, this is a great generic use case and uh, we need some sort of mechanism to do this.

So I think going to the order table or just in the coupon, uh, object itself, just marking it as used, can be used. How many times has it been used? So used once. Oh yeah, yeah. That, that can be managed by the rule engine. Then if you have a coupon object, which, uh, which stores metadata on how many times it is used.

Okay. Used by what? Used by which user uhhuh platform specific doesn't, that won't work. So we'll have to go to the orders table, I think. Cool. So that's an interesting use case.

That's a really interesting use case. If that is needed, I guess we need a, some mechanism for the rule engine to do it, or we can make it generic that if it has been used, you can't use it again. Same user can't use the coupon again. Uh, correct. Okay. Maybe we can, we, we can have a separate collection for the platform to user used, uh, mapping, right?

Yeah. If we, if, if we are using it, then we can just dump it, uh, in the platform to user mapping table. Yeah, you can cache it also, or from the orders table, you can check whether it's already been used. Okay. Now let's say we have this get, okay, so this then solves for platform also, I think, uh, you have a set of coupons on the platform. Those can be given in the last, ideally you want to show user restaurant coupons.

You can charge companies differently. You can tell that, you know, if you want to show your coupons on top, pay me, uh, whatever 50,001 lack, and I will, uh, promote your coupons on top. If not, then I'll randomly show different platform coupons. So based on variety or based on based on randomness, we can show different platform coupons. There are ways to make it even better. Uh, if a person is using a particular payment payment method, maybe we have that metadata in the coupon, right?

Payment method is already there, so we bring that out here. So, uh, for this user there, they have an ICSA card. Uh, and so when you're searching, you say, if there are payment methods with ICSA card, then show it. So in get list, you also show them possible payment methods along with card. This is just to speed up platform by coupons if we want to. Okay, guys, uh, I think this is at a high level what a coupon management system will look like.

The most important thing by far is to be able to map logic into rules and then store them somewhere. Because here the most complex part is, uh, you have flexible rules, which can be added by a third party, by a, uh, admin, by, uh, even a person who's an engineer, they should be able to use an admin dashboard to add rules to the system. These rules are based on, uh, objects which you have defined. So coupon restaurant, user cart, mapping the rule, um, you know, the logic of the rules into objects is, is hard. But as long as you can take the entire rule and make it a single object, like a rule object as we saw and store it in a db as json, you're fine. You are in Java, there is a object called function.

There's also object called by function. And in every language you will be seeing that there is a way to map a function into an object and then store it. If you don't have it easily, then you'll have to pass this. You, you are basically writing a compiler where you have some text and it has to be converted into code. So the basic idea is that you have some text that you want to store in the db. If you can store it as json, great, but if not, then you'll have to convert it into code.

Okay. So we saw a practical example where we are actually doing this. Uh, here we store a set of rules and we say, when we, you know, get us the rules that we need, it's like this, you can think of these as DB calls, which is storing functions. Okay. Uh, apart from this, yeah, the get method was also interesting. It's, it's more standard.

What we do every day at work, we try to split, uh, an object using its metadata. We try to index the right things. So the user based coupons, the restaurant based coupons and so on. Could any, any doubts, any thoughts? Did you, you know, did you find it, did you understand, uh, what we are talking about? Was it useful?

Yes. Ro Yes, RO given a situation where you are two at a high level, maybe at work or, uh, in an interview asked to design a system for promotions or cashbacks, I think we took obviously one and a half hours in a interview. It's going to be shorter, but in an interview, they're also going to be focusing more on certain aspects only. Um, right. I, I think now you'll feel more comfortable, uh, going, walking into an interview or a team discussion where some sort of a rule engine has to be created. So, cool.

Great. Thank you guys for coming on this Saturday morning and making it awesome. Uh, you have sacrificed it for system design and hopefully this will, this will show. Cool. Okay. Have a great morning.

Have a great weekend. See you. Thank you, Imran. Yeah, I have some queries. Yes. Let's stay back.

Akha, Imran, if you want to stay back, feel free. Otherwise you can feel free to drop off. Is it a personal query or are you comfortable? Yeah, it's fine. I mean, it's not really regarding system.

## Dec 2023: Database Schema Design and Git Storage

Type: Video · Length: 88 min 12 s

### Lesson notes

A schema and storage class. It covers designing a database from the API side and from the data side, access control lists and rules for edit, comment and view access, and an index. It ends with how Git stores files and versions using hashes, and the new LLD content on InterviewReady.

### Transcript

Hey folks, good morning. S uh, has autopilot here, but Daran, uh, Ash. Good morning. If you can hear me, guys, uh, just let me know, uh, through a hi or a reaction. It's fine. Hey, Daran.

Uh, good morning. Oh, one minute. I'll just turn on my video. Yes, I'm audible visible. Everything is good. Alright.

Awesome, Cy. Good morning. Um, great. So yes, Daran, you're also here. Amazing. Okay, so here's the thing that we can do.

Let's just, I'll share my screen. Oh, okay. Maybe I'm not logged in yet. Let me just log in, guys. Gimme one second. Sorry for that.

Otherwise, it'll be a nice long chat between you, you, and me, but, uh, the login won't happen. So just get that fixed sign. Google. Uh, okay. There's someone who's a cautious autopilot. Okay?

Yes. Now I'm logged in, uh, and the host. Okay, that's wonderful. Let me start sharing my screen so that we can begin. Guys, can you see my screen? I think so.

Yeah. Um, yes. Okay. So what I'll do, uh, is just go through some of the questions on Slido. Uh, okay. Apart from that, if you have any questions right now, you can post it on the, the chat, right?

I'm looking at the chat right now. Um, if not, then I'll pick up a question myself, uh, on low level design that we can do. And apart from that, there's a interesting announcement that I have, uh, for all of us, uh, who are enrolled with low level design. Okay? So firstly, can we discuss a system design, uh, on offers or promotions or probably cashback kind of thing. I think we did this last time, right?

Uh, offers or promotions. So that's good. I think we have that covered. Can we focus full session house Hot Star managers to achieve system design for a big event like World Cup, uh, versus India? So what I'll do is I'll just go through the questions, uh, and see which one we have not covered earlier in case you missed the previous session. Uh, guys, and you want to know how Hot Hot Style manages, um, a big event like a World Cup India versus Australia.

Um, there are many things that go on in the backend, but the most important that they have is bandwidth when it comes to network bandwidth optimizations. Uh, how can they stream as quickly as they possibly can video to end users? So one really good paper, uh, that's out there is YouTube, CVN Let me get the link. I have saved it somewhere here. Um, and let me share that on chat. Yeah, so H-A-L-P-I haven't yet finished reading the paper, so I don't even, you know, um, I can't say for sure that this is awesome, but in the start, it looks pretty good.

The intro part tells you what a paper is about, and this seems like, uh, useful algorithms that they use to make sure that relevant content is placed in the CDNs. So you can have a look at this. Okay, so that, that is for Hot star. Uh, last time we discussed the system design for promotions cash max. So that's something we will, uh, assume on already. Broadcasting rights is the main concern, or no broadcasting rights.

More importantly, that is CDN rights can be discussed, uh, on design of geo cinema, uh, how it recently handled 10 core simultaneous views. Okay? That's, again, something similar to what we are talking about here, okay? Uh, since we have the blockchain peer-to-peer, IM PSS five system and BitTorrent protocol, et why don't we use, uh, that to stream big events like World Cup? Um, even now, peer to peer communication is not the most reliable, and definitely it's not real time. So for example, uh, when now we are having this conference, we are having this meet, there's, there's more than 10 of us, right?

What do you think Zoom uses to send my video to you? There's 11 of us. Maybe somebody's joined through autopilot, maybe somebody joined through something else, but do you think we are having a peer to conversation or do you think something else is happening? So if I have to draw the, uh, the diagram of all of her daughter talking, so if I had to draw that graph, then would it look like a mesh or would it look like something else? Okay, peer to peer star. Okay, so Darin, can you explain what STAR is?

I have forgotten my electronics class. So that could, I think in electronics there was something called a mesh and star and stuff like that. But so for example, there's 11 of us, right? So let me just draw that out. 2, 3, 4, 5, 6, 7, 8, 9, 10, approximately 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Now, how does Zoom work?

Or how does Hangouts work? So when you're trying to make a connection with, for a particular conference room, what is actually happening behind the scenes? So you are probably going to the Zoom server. This is an authentication server. You go and say, please sign me in. I want to be the host.

I want to share my screen and all that stuff. Um, so please give me the authority to do those things in the meet. So you are then getting back some sort of a token assigned token from the server saying that God has rights for this meeting, he can do things, okay? Um, and after sometime maybe go loses those rights, like last time this literally happened, um, zoom the payment that was to be done, zoom didn't happen. So they cut the meeting in 40 minutes. So maybe they revok the token and that.

Now if Gods, uh, a God says something, then you know, we not listen to it. Or beforehand only they might say that this token is only valid for 10 minutes. So Goop can do what he likes, but only for 10 minutes. Okay? Uh, there saying a single load in the center like you, uh, as transmission data to all nodes connecting to you receivers, yes, I, I think that is something that we go for. Uh, let's, let's see what the small web RTC calls look like.

Okay, so the tech being used is web RTC. There are two steps to it. One is oath. Okay? You have identified that GOO is the person. And now when GOO tries to connect with another person, person number two, how do they do that?

They have two options. One is to go through Zoom and have them relay the video. This will be, this will have latency, okay? It'll put pressure on Zoom servers also that you take my video and just forward it. But if 10 people are talking, then 10 people's video will come to Zoom and then it has to forward it to 10 more people. Okay?

So you are seeing a lot of centralization, which is good when you need quality control authorization, but it's not very good when you have a lot of heavy data to transfer because your bandwidth is going to get choked up. It would be awesome if Goup could just, just take his video and send it to person number two. Let's say that a sign, okay, this would have avoided a lot of the hops that we had to go from here to here. So that is the ideal word. Uh, what, but how does God find sign? How does God even know that SSAI is interested in this video, in this call?

Okay? Tomorrow if another person joins, then GOO has to turn video to them also. So who's taking care of this? Who's taking care of control, right? So, um, I won't get into too much detail, uh, because this was just a slide of question, but the basic idea is control is managed using a protocol called SDP, session description protocol. If you know telephones, uh, voiceover IP also uses similar network protocols to transfer information, which says a person joined the call.

This person left the call, okay, this person is getting a ring, okay, this person is going to pick up. So sip, S-I-P-S-D-P, they usually go hand in hand, okay? Uh, this is session initiation protocol. This is session description protocol. Just you don't need to know their internals, but, um, there is a way in which you can tell that a person is, you know, behaving in a call. Okay?

Uh, and finally, yeah. Now if you have 10 people, uh, um, we come to the final question, which is if you have 10 people, then Gora has to transmit video to nine people. Okay? So that's a big responsibility for my computer, okay? And my internet connection. It may not be the best in the world.

Not only does Goro have to transmit video to nine people, uh, maybe s has to transmit video to nine people. Maybe two of us have having a conversation in this, uh, zoom meet and everyone wants to see us. So this will be a full mesh like architecture where you have every person has nine connections. And so how many people are there? 10 people. So n squared connections, right?

90 connections, that's a lot of connections. Um, instead you can go for what Dhan is saying, have a central server. It won't be the authentication server, it'll be a local media server, Local in the sense it is close to you. Usually India might have one. Mumbai might have one, okay? Um, so let's say India and everyone connects to this server.

The 10 people, the 10 of us in the meet, we connect here and this then takes everybody's videos and broadcasts it, okay? To everybody else. So God of sends one stream of video, he gets back nine streams of video, okay? Nine streams, not like, you know, nine connections, just one connection with those nine streams, data being sent. So now if you have end people, in our case that is 10, each person has one outgoing and one incoming stream. So that is two.

So you have 20 connections, and on top of that, this is ordering, okay? So it scales linearly. So this is the idea. Um, we have blockchain peer-to-peer, IMPS and all of this stuff. But why don't you go for a peer-to-peer when you're streaming big events like a World Cup because it still needs you to, um, some sort of centralization when it comes to media sharing is still helpful, otherwise, the number of connections that you end up making and enormous, you can always fall back to this. But the problem is this has high latency.

Uh, the network can't be trusted, okay? Um, and, and there is no quality assurance or very little quality assurance that you have whenever you decentralize something. In general. Remember that, uh, latency can go up, quality assurance is not really in your hands anymore. Um, and so those are the trade-offs, okay? Um, yeah.

Okay. Okay. That, that's what we have. Okay. I think we had a question here recently. I was asked Git hub DB design in ServiceNow book, my show DB design, LLD Salesforce, Twitter, LLD design for senior manager roles.

Okay? Uh, Nadu, do you want to unmute yourself and explain a little more about any one of these designs? Yeah. Uh, hi. Hello. Uh, I think joined after long time.

Yeah. Yeah, so like recently I was attending for these senior manager roles interviews. So in ServiceNow, they're asking like, I mean, if you are going to design, uh, GitHub, how do you design, uh, DB for GitHub backend? Like, I mean, how do you store repositories if someone doess pr? How do you store all the PR information? And if someone reviews your code and gives a comment, how do you store all those comments?

Right? It's a typical how the, uh, or, uh, any these, uh, sort of, uh, things happen. They ask me To design a DBS scheme for that. They ask you to design the DBS scheme for it, okay? Yes. So let's say Even in, even in, uh, Oracle, ask me like book system design followed way, uh, like how do you design Debi, my offer, uh, book, book my show to avoid the double booking and all that, and seating element ds, all those things.

Okay? Okay. So you have book my show, and over there also there was a DB schema. Yes. I mean, everything was like followed by, uh, system and followed by DB schema in depth. I would say focus on DB schema.

Interesting. So DB schema, there is a particular approach for DB schema. Maybe we can get to that. Uh, and let's try it with GitHub. I think the first thing is GitHub, right? Uh, yeah.

Nadu you any questions? Yeah, yeah, yeah, yeah. And in Salesforce, it's majorly like a typical, uh, Twitter, uh, newsfeed followers repost, right? Yeah. Those system is then again followed by DB schema machine. Okay?

Okay. So this is interesting. You are, uh, you are getting a lot of db schema schema questions, and there is a way to do this. Um, if you're in a team meeting, definitely, this is what I would suggest. I don't know whether enough in a interview, it still works out. Let's see.

So let's take the example of GitHub. Usually what happens is, uh, there are two ways to tackle this problem. One is to go from the DB side, okay? Which many database administrators usually start there. Uh, and the other way to go is from the product side in general, I would suggest to go from the product side, it's easier to work with, right? And it's easier to imagine yourself as somebody who's using the product.

So for example, uh, we were talking about GitHub. So GitHub has users, and, um, now we don't need to do a full API breakdown. But the basic idea is if you are, if you are a user, then that will be something like projects here that you are, um, authorized to use, then the public projects. Then there is the concept of a full request. Yeah. So something like, uh, you have a repository.

Repository has a files, then you have branches, Uhhuh, Uh, s again, matching to master, right? So some of these things, yeah, files, branches, pull request. Yeah. Reviewers. Reviewers, okay. Um, no, just reviewers.

Then review comments. Review comments, Then even, uh, file dip sizzle, right? For example, if I'm changing from, um, one version to other version, there may be some file differences, right? Yes. So Those sort of, for example, if I want to revert back to commit, I should have that history as well. Like basically all the history I should maintain.

Yeah, you need file differences. You need. So everything that GI gives you, uh, to some extent that you have file ifs, you have, uh, anything else, you have the author of that commit. So, um, we can call it, maybe you have, I added branches already. So then we have the concept of commits, uh, and, uh, so directories or structure, so the, the file structure are all the files, okay? Files and directories.

So everything that Git offers that you have to store, because Git has to store it somewhere, it stores it in local store, now you're remotely storing it. So you have your own version of that. You have people who, uh, may or may not have access to a project. You then have, uh, the reviewers review comments, okay? Uh, you have a, the concept of a pool request, what the state of that pool request will also be there, um, whether a project is public or private. If it is private, then some authorization has to be there.

I think for now, let's, let's start with this. Yeah. Um, is there something major that we're missing when it comes to GitHub? I just look at what we have. Yeah, okay. There's, there's lots of small things, I think.

Yeah, But I think these are the major, uh, things. Yeah, these are the major ones. Yeah. Right? So let's, uh, these are some of the features that GitHub provides. So one thing that we can do is we have this stuff now written over here.

What, what you can do is you can actually convert these into APIs, and tho those APIs can say what kind of objects they need. Um, and that's where you stop, right? As an engineer, you are going to treat the system like a black box. When you're thinking of high level design, that's where you stop. Um, those objects can then be mapped straight to a database. So that is one approach, okay?

Uh, let's try that. The other approach is to think from the other side, like a database administrator that what are the pieces of data that you need? Where should I store them? And when I say where should I store them, I start thinking about should I keep these things in one table because the data access will be that way. Uh, should I create an index on something? So that is another way of thinking, but we use the product-based approach.

Okay? So you have a project and you have something like authorization. So authorization has to be stored somewhere. It has to be in some sort of a table. So I, and then your projects, okay? What does a project have?

It has a, a root node. Okay, so a root directory, but the root directory can change from time to time, or can it think of gi, think of you having the dot gate folder here. Now, what will happen if you add stuff here? Can this folder ever change? I mean, can, can the location of the dot gate file change any idea? So you have, let's say, A, B, C, D.

Tomorrow, you say, no, no, I want to move my project from, I mean, we had all of this stuff in the project. I just want to take my project and move it to sub folder here. Would that work? Okay, when we are not sure, we assume that maybe. Okay, so we have the route directory. We also had the concept of authorization.

So let's note that down. Any ideas on this? What should be a DB schema for auth? Are there, is there a concept of a group in GitHub? Yes, there is. There is a concept of organization you can contribute to an organization.

So you have, you may be a part of an organization. Okay, any ideas guys on this? SSO keys, mail. Password. SSO keys. Okay, if you have to check teams also, yes.

Okay. Yes, there's an organization, there's a team also. So how would you map this? How would you map this concept or requirement? Organization Name admin members data. Okay, repo access restrictions.

H how would you map it in code? If you had to check when God is trying to raise a pull request or trying to force push to a repository, whether God has rights, access restrictions, what kind of a data structure would be ideal? Because at the end of the day, the database is like a data structure to us, which is persistent. Jeffy checky, he's present in the current org. SQL. Yes, we will use SQL, but out the table look like check if he's present in the current org.

Okay? So, so you might have a concept of an organization, okay? And the organization says interview ready, uh, is the set of members, but now how do we check whether this person has access on look? Okay, you might have heard of access control lists. So if you want to map this access control list to a data base, a table or table contains org name admin member, team member, and one more table has personal member one. Cy, can you explain this a bit more?

All table contains org name admin members, team members, and more table has personal members. Okay? Okay. I think I understood. You are going for, this is the user table. You have an ID here of every user.

You have the email IDs. So if you have to sign some email, maybe you have two factor authentication phone, okay? So we won't be going for user table much because it's there in nearly every DB design that we do. So user table will have an ID email tomorrow, you might want to add address two factor authentication, um, last time they logged in. All that stuff you might keep there or you might want to separate it out. You want to keep a separate table for that.

User statistics, how often do they log in? Uh, what device do they log in from? All that you can keep somewhere else, but let's ignore user for now. Organization, uh, should ideally not have all of their admins together or all of the team members together. Why is that? If I, if I make this claim, will you support me or say, no, that doesn't make sense.

So I'm saying that organization should not have the team members here in one column. The team members here and admins here query takes more time. Security issues might come, okay? In fact, the query will take lesser time because if I have to find all the admins for interview ready, maybe I will find it faster with one row. I'll find them here. Security issues might be that.

If you're absolutely right, it's possible that when I wanted to get one admin to check whether an admin exists, then I get to see all other elements possibly. Yeah, weno has hit the nail on that one. NF violation. So there is something called normalization, which is an important concept when you're doing schema DB schema design. So, um, normalization basically means don't duplicate data or, um, you have data being stored in your system. Break it down to, uh, the most fundamental level that you can.

Okay? Instead of talking, I'll just tell you basically what this means. You have the, you have this option, right? Of keeping all admins together and keeping our team members together. How about I take the same concept org and say, this is the name of the organization, and instead of having just one row for integrity, I, I put, let's say 50 row for integrity. So all the admins, let's say there are four admins here are here.

So then I put type, so this is user type. Here, there is admin, admin, and then you have the email ID of that admin user, so A, B, CPQR, and so on. Okay? Similarly, you also have normal members. So let's say 46 rows are like this. I have member tomorrow if you're had IR guests, so it'll be a new row.

It won't go and change the existing row, okay? So the existing row is not affected. We add new rows. Uh, and the benefit of this is if I'm searching for, Hey, does PQR exist in interview ready? I can create an index on this column and straight come to PQR or find that quickly. Okay?

If I had not done this, then I would get all the people in the organization and I would've to manually in my application code go through them, okay? Even if I didn't do it through application code, I did through a database query, even then I would have to go through all the people one by one. Instead, the benefit of an index can be available by doing this, right? Okay, so is there even better way to do this? Like tomorrow you say that, but God, I have hundreds of admins, uh, and I just want to search amongst admins. So one thing I can say is, how about I create an index here, but then you say, oh, when I'm doing an index query, I can just use one index for one query, right?

I can't use multiple indexes for the same query. That's because you can only sort by one order. You can't have multiple, sort the same query, okay? If that makes sense. This is, this is something which is important. You cannot have multiple indexes being used in the same query because you are basically searching according to one index according to one sort order.

Okay? So yeah, s uh, is absolutely right. Maintain two tables for admin and member. So now you have split this, and so all of this implicit information, or rather explicit information has become implicit. Now, admin table. So you have IR organization and you have A, B, C, P, QR.

And so you have four columns here, four, four rules rather. Okay? So these are multiple approaches. Uh, which one do you prefer for admin and Okay? Do you see any drawback of this approach that is splitted? The drawback is if tomorrow I ask you get me all the members of interview ready, you'll have to do a join or you have to query two tables.

Yeah, more, more tables to query, more tables to remember. So that is the drawback. Queries may be faster here, queries may be slower here, depending on your access pattern. So we come to the first fundamental point of any database schema. Your database is efficient based on the access patterns that you have. It's possible that every time I keep asking for all the members, in which case, this would've been a perfect schema.

Every time you ask for all the members, keep them all in one room or keep them together at least, right? In fact, maybe you don't hit the database only most of the times you might want to keep it all in cache. That's also possible depending on your access pattern. Okay, so coming back to, um, coming back to this thing that you have an organization. Now, how do you check whether Goro has the right to add a commit to the server of this organization? He doesn't have rights to add to client, just to the server access level.

Okay, but will access level really help? I'm an administrator, but I, I cannot add code to the front end. I can only add to server for interview ready. So it's a very specific relationship, which, or, or maybe I'm a member, right? I'm a member and you say key, you work on the backend, you have access for the backend. Why do you want front-end access?

So the person says, fine access at le le, uh, at uh, level, okay, that can be done. So tomorrow you see a member who you have it at level, okay, what about they want to make a comment somewhere or they want to see what alls are there in the organization? Where is that access going to be kept? Where are thinking about let's write rules so that people can view the repositories that they have access or, or they're allowed to see, but we're becoming a bit narrow here. Then just thinking of repos, organization is much bigger than just repos or level by default read access, but write only to privilege people. So yeah, okay, this is great.

So say that's, that's a good idea. How are you going to show this in code? How are you going to show this? Not necessarily in code, but how are you going to store it somewhere? Let's say a server crashes. You need to come back up.

You have to read this from some database, right? You can't keep it in a conflict file because, and admin is making changes to this regularly. Thousands of projects exist. Config file won't work. So where are you going to store it in a database? How are you now going to store it in a database?

We talked about access control list. Can you think of a, a schema, a way in which access control lists or rules can be defined in a database? Okay? Um, let's use, let's take some inspiration. You can't do this in a, in a real interview, but let me just, you know, use this for reference. We don't need this entire thing.

We need something much simpler. But having said that, the way that Google does it is it says, you can think of Google Drive here, Google Photos, um, do they have access to this object? Depends on, um, whether a rule has been defined for it. So go the user has access to, um, a file at interview ready. So this is the object, and his relation is editor, okay? His relation could also be viewer.

His relation could also be commenter. This user got can also be a group. So it could be that everybody in a particular group, so a set of users, okay? It could also be a general user. So when I'm saying user, it is a set of users, right? Individual user is possible or set of users.

So then, uh, made that clear here. User is either a user ID or a user set. User set can be all admins of interview ready? Okay? So all admins of interview ready have added access for the server. That is possible to do.

This is the, uh, this is a very generic way to write rules, okay? Uh, and I'll just share this with you. This is a very popular paper also Zanzibar, you can check it out forth, yeah. But do you agree that this is very flexible, that this will help if we do something similar? Who thinks that this is overkill for us? We are writing GitHub, we are not making the drive.

Why should we have this level of access? Does anyone feel that way? No. Who feels that? This is awesome? Wow.

Let's go for this. Let's create couples, objects, users and user sets. Okay? So, uh, guys, let me take a step back, right? How many of us are understanding what's going on? Like, uh, when we are talking about a d DB schema for GitHub, are you able to understand what we are talking about and at what point are we getting stuck?

Yeah, just gimme a thumbs up if it's making sense and gimme a thumbs down if it's not making sense. Like you are, you're lost somewhere. Uh, you want something to be repeated or some, some clarification somewhere. Okay? So Anil, yeah, uh, please go ahead. I had a doubt in the access control list, uh, for the authorization part, yeah, why it's required.

Okay, so why do we need an access control list for authorization? There is no real need as such, but it is very common to have your, um, authorization rules set up through access control lists. So for example, UB has access to x, y, and Z objects. We need to store it somewhere. A common pattern for storing these rules, uh, is an access control list. It looks something like this.

AV has access to object. A goro has access to object b, Goro has access to object C. Also, you can Alsos are, uh, projects, right? Yeah, it could be projects, it could be files, it could be, uh, organization. So that's the reason why there is some generic idea that a user to object mapping. And you can also inward that and say, this object has access.

I mean, this object can be accessed by X, Y, and Z. So depending on what, uh, suits the organization, you can have either user to object mapping or object to user mapping. So this zoom meet can be accessed by DU or you can invert it and say, neur can access this zoom meet and another zoom meet another zoom meet. So depending on what kind of access pattern you have, access pattern basically means what kind of query do you fire on the database? Usually based on that you want to index based on object or on user. Okay?

Uh, yeah. So this author is not for, uh, like, uh, signing purpose, uh, like a user ID and password. Like it also that, Yeah, I, I should actually, uh, name it correctly authorization, Okay? Okay. There is also something called authentication, which says that. So that is, that's here.

Maybe you have a token. Sometimes authorization, authentication happen together. So I am god of, and the moment you say I'm God of, then you go like, okay, fine, I can, I can get your authorization automatically. I know who you are. Uh, and maybe in the token itself, it's mentioned that God of for the next half an hour has admin rights. So that, uh, sometimes gets put together, but because GitHub is having a lot of authorization, uh, requirements, it's best to put it in a separate table.

Okay? Um, access control list, we have two options. ACL versus rules. Any idea, guys, just take guesses. Would you prefer access control list or would you prefer the rules that Google is talking about? In fact, what's the difference between access control list and this?

Is there any difference? Not much, but this is multi-level, okay? And there are multiple rules that you have to look into. Yeah, so will get to that. But, uh, coming to this access control versus rules, I would go for a simpler approach of just keep, uh, user to object mapping. Okay?

What kind of access do you have? Do you have edit access? Do you have comment access? Do you have, um, view access, whatever you have, keep that in one object. So gov can, uh, write to the integrity server with added access. Okay?

This is one object. Apart from that, what does goth have? Oh, gov can also write to let's say Uber server. Okay? That is not true, but yeah. And Goth is a also a contributor to some other repository.

Let's open source. So in this way, we can store for the user Id order all of the relevant objects for that user when it comes to access control. Yeah. Uh, sizing that. How do you do temporary credentials for one hour? So if, if you log in and I give you a token, let's say token one to three, you come back to me and say that one to three, you told me one to three, I don't know what one to three means, but you told me one to three.

So I go to my database and I see one to three means give this person access to Destroy Universe. Okay? Go ahead, please. Uh, you have access to destroy universe, okay? Basically what I've done is I have a mapping of what 1, 2, 3 means to my organization, but you don't, you just know that IS have a token given by God, which I can use anytime I want. So you can think of it this way.

Actually, what happens is I'll give you a token, which is signed by my private key, and that key will clear that message will clearly say s has access for one hour admin rights, so signed by me, so the whole token is signed. Then I'll use my public key to, uh, to read this token. Uh, and when I use my public key, if it makes sense, then I know that it was signed by me earlier, okay? This public private key pair, the private key is known only to me. I've signed it earlier with this, so I'm now sure that this was written by me earlier. This is a standard security thing.

If you haven't checked it out, uh, have a look at the security chapter I interview, ready? Um, and you'll be authorized. You'll not just be authenticated. You'll also be authorized to be an admin for one hour. Okay? So if that ma made sense, gimme a thumbs up.

Uh, and okay, let's, let's come back to the original problem. We've been looking at projects, authorization, public projects. Okay? Let's come to the most interesting part, I think, which is files, branches, file devs commits organization. How do we map this onto a database? How do you map it?

Your full file system here is asking what will be the primary key in the authorization table? Will it be project id? So that depends. It could be a random number, but how you index the table matters. Primary key. I would keep it as a random number.

S maybe we can store version for file in JSON form, okay? Okay, we can do that maybe. Would that be ideal, guys? Uh, you have all gone through database schema, right? In your, in your career, you must have done some sort of database schema or, or in school you might have done some projects. How would you tackle this?

Where you have to actually think of GitHub, uh, with its file structure and you have to store it in a database. Like if you're asked this in an interview, then how would you tackle it, right? You won't have as much time as we do here. So in a current situation, if you're able to do it, that'll be amazing, but we best practice it here. So little more participation will be very, very appreciated. Uh, s saying that version one file name, okay, uh, nidus that simple way is to store in object store and store the link table.

Okay? Now, let's start thinking about if you have a file, uh, a directory that you're going to store, and this directory is potentially having hundreds of files, how would you store that? And then the directory also has each of those files may be having diffs differences that you're storing. So you have histories of pins, you have people who are commenting on a particular commit. Yeah, there are different versions. Store the hash of the file in DB and store files in file storage.

Okay, interesting. Diff can be pulled with version. Um, we can store version for file in js ON form. Okay? Most interesting idea, I think is Anil. Um, you're storing the hash of the file in DB and storing the files in file storage.

Can you explain that a bit more? It looks similar to how Git actually stores things. So I, I, I'll start guessing. Uh, Anil's idea is to take a file, find its hash. Hash basically means that we run all the contents of the file through a hash function and we get a single number. This number is unique, it's unlikely to be colliding with anything else.

So 2 56 bits, uh, maybe you take SHA one, okay? This is all gits algorithm. They take a sha one of the hash, and, uh, when you, when you wanna find a file, all you have to do is search for the hash, okay? And the corresponding file location is stored here. Yeah. So let's take an example.

You wrote some code. So, uh, so you dashan, uh, you have a, B, C here, PQR, this is what you've written. And when I take a hash of all of this content, I get hash 31. Now somebody comes and adds more content. So, um, STU, okay, so the hash changes. Now the new hash may be 46, so the same file has different hashes.

This you would see in Git also when you are locally storing files, Git is not, um, not taking Diffs. Git stores the entire file. I'm not sure if we know this, but locally git stores a new copy of the file. So if you make one character change, let's say you add one or there's a big photo and you just add a.to it, then there'll be an entirely new file store in Git because the hash changes. Okay, this seems like a waste, but Git has things around this also. Um, ignore those algorithms.

Uh, you can, you can look at that later, but this is a good idea. The reason why this storing a hash is a good idea is because access is really fast, okay? And you have potentially hundreds of thousands of files, but you can go through them very quickly. So if you're searching for a file with location, it's easy to search, but um, you also have to store it somewhere, right? Okay. Okay.

How many of you have looked at how GI stores files locally? Okay, now I just asking about how do you store the directory and list of files it has in R-D-B-M-S. Um, let's take, uh, an idea. Let's say you have, And this was that, that, uh, thing, which they may as well focus me in the interview. Like, Okay, okay, that's Exactly, you have only RDMS, you don't have anything beyond RDMS. So how do you do all those things?

Yeah, So here's the interesting part. Then you have a file ID and you have, uh, the location of the file, okay? Location, I mean to say in the URL. So maybe you have this stored in a files, a file store, like S3. So the files, you're not going to store in the database, you're going to store this in S3. Are they saying that no, you have to store the files in the file store itself.

That is also possible. Is that something that they said? Yes, borrow? I have one question here. Yeah. Uh, so you are saying that, uh, gift stores each file, uh, new file, any for small changes?

Yeah. Would there be space issue then? And uh, because for I am having file of 2 56 KB and I made one line change, then again, I have to get to 56 KB file. So won't there be a space issue? And is it a good design to have? There will be a space issue.

It's a very bad design. Uh, but of course they have thought it through. So I'll just share this link with you here. This talks about the internals of Git, right? Okay. Um, yeah, this, this will help.

Okay? There's something called APAC file. Yeah. And there's something called garbage collection. If when you're sending over the network, right? That's when GIT does optimizations.

Local storage assumes I can use as much storage as needed. Even one dot will double the file. But when you're sending, when you're pushing to Git or you're pulling from Git, you'll always get the crunched optimized versions. And the strange thing is GIT has no idea what a file contains. It doesn't even know that. Um, image ABC dot jpeg, you added a.to it.

Again, it came ABC JPEG still get goes like, I don't know, it's a new file for me because the hash has changed. So it just does differences in between the files and does something called APAC file? You can look into that. I've shared the link. It'll be relevant. Okay.

Yeah. Thank you, Guo. Thank you. Yeah, Awesome. So if you're allowed to use a file store like S3 or something, it makes sense. If you are not allowed to do that for some reason, yeah, because we have to use A-D-B-M-S, we will see that.

Uh, but basically you have file id, the file ID will be the hash of the file. Okay? That's, that's part one. So if you're searching for a file, uh, in git, whatever version, every version has a unique hash, yeah, so you're writing code here, A, this is folder A has three files, B, C, and D. Now you changed the file B, so it became B dash, and now the new version when you commit will be basically B dash C and D. Yeah, and this will also change because you're no longer pointing to B, so you become a dash, okay?

Uh, if you've done complete programming, this is called a persistent data structure. Um, you, you took the existing data structure and reused most of it, you just created two new nodes, okay? But the point is to C and D are still there. This, this is what is happening when you are creating new files every time for small changes also. So this has its own unique hash. This has its own unique hash.

This has its own unique hash. Each of these hashes are put here, okay? So you see that even if I add a new version tomorrow, a double dash, and maybe there is a change in D, so D dash, so it points here points to C and points to B dash. Okay? So those files might come here. Uh, we have a place though where we can keep all our files, all the diffs throughout history, all of those file copies here.

Okay? Let's start here. This is the most basic building block. We have a mapping of every single file version with its location. That's part one. Part two is that you just need a root folder.

And for every folder you need information of what are my children files, right? Okay, so let me explain that. Uh, you are looking at a, a should tell us where we should go next. So A tells that I have three children, B, C, and D. That's what it needs to tell us. A dash says, I have three children, B dash C, and D, and a double dash says I have three children, B dash C and D dash.

Okay? Is this making sense? Simply put, the folder is telling you who my children are standard in Unix also, you know, what are the children folders? Uh, all children files, uh, in a, in a folder, right? The structure has to be there somewhere. So a tree, every node of the tree has to tell all of its children has to node down all of its children.

So this has to be there in some table, okay? So let's call it a tree or a directory table. And so the name of the directory, let's say a, uh, and all the children put together here, a dash, a double dash, you have B dash cd, b dash c, d dash, and your have B, c, d. Is this making sense? At a high level, all versions of a, all versions of the directory are storing all the children file letter points to, Ah, yes, it makes sense for, for locating the files. Each file, uh, Yeah, we, we are creating a new file.

What happens is every time you're making a change from that child file all the way to parent, all the files change. Because when a child changes, the parent has to now point to a new file. The moment they point to a new file, the moment the, uh, the content of that parent directly 'cause the content of a parent directory is basically, who am I pointing to? When that changes, then the, the parent directory also has to change from a, you have to become a dash So that, yeah, it feels wasteful. It feels like most of the content is the same. If you're just changing one pointer, why do you have to create an entirely new file?

The reason is because most of the times people are not making right then making reads. People are reading the file system, they're not constantly updating the file system. So it makes sense to, um, optimize for reads. Okay? There won't be too many rows here. That's the assumption.

The assumption is that, uh, you need to quickly go through theories and files that are, uh, part of this parent directory, okay? Okay. So this is the basic idea. Our first tool that we had was for every file, we know where it exists, the location, URL, second. Uh, second thing that we needed was we needed the structure of the project, okay? The structure of the project is mapped here.

Now, in this directory, it tells us a dash belongs to B, C, D, maybe D was a folder that is pointing to E and F and so on. So you can open up the whole, uh, tree this way, okay? And each of these, like if you want D, where is D? It's somewhere over here. Okay? So read the contents of that file if you want to, or you can have it here.

Is this making sense? Hmm. So, so two things are there. Just I wanted to clarify. Understanding, uh, make any changes to your file, get a copy of it. Copy, yeah.

Complete directory. Complete restructure. Yeah, Complete hierarchy. It'll make copy and respectively it'll make different, you can set tables for entry of the H files, like you said, a a dash and a dash kind of thing. Um, it won't make tables, it'll make a new role. Ah, okay, got it.

Yeah. Okay. Okay. Now, now that we understood conceptually, let's see actually also how this will be. Um, this will be implemented. I just told you that, you know, there'll be a directory, and the directory will tell you all the children.

That is not true in reality. The, that is all that content is in the file itself. So you can go and read from the file, right? Uh, one more doubt, uh, go, sorry if I'm interrupting. See, uh, when I see in my local delivery, if I make any changes, uh, suppose I am in a, uh, version, uh, uh, sorry, branch one call, uh, V one, okay? Okay.

Okay. And, uh, I made a change, or suppose I made another branch in which, uh, I met some more changes, Okay? So in, In local, when I, uh, when I switched to the different branch, I do not know how this, uh, means I get same content. I do not see multiple copies of another directory over my local directory. How it happens, if you can explain this thing, uh, that will also help to understand this. Okay?

Hope I'm clear with my question. I, I think I'm, uh, I understand the question. Uh, so let's, let's try to first, uh, go step by step, right? That we get to a in a minute. Um, there's something called refs in Git, okay? If, if you are looking for it separately, there is something called refs.

You basically have a main branch, uh, and the main branch points to a directory, okay? And the, you might have a feature branch also that also points to another directory. So the basically is the root node pointer. You can think of it that way. That's what basically we're getting to. You have this concept of a directory, right?

Take this and know that this doesn't happen in the real world. You will not have a directory structure laid out like this, because actually that is in the file itself. So instead, what you need is just the root node, okay? Right? What is the root node for a project interview? Ready?

That is what you want. But interview Ready also has a main branch, and it has a developer branch, and it has a feature branch. So all of these branches will have their own root noes. You can think of it that way, yeah. Um, maybe Microsoft is here. Microsoft has one project.

Uh, so that is the project name is here. The project ID is here. And then the, um, the reference is here. The reference for what branch, okay? You just need the root node. Once the root node is there, you can go to that file, pull up its content.

So let's say the root node was a right, we were saying go pull up its content. You will see all the children directory in A, those children will be B, C, and D. Go and search over here in the file directory. Again, BC and D will be found. You'll pick those three up. If their files good, if they're not, again, go through their children, is this making sense with a single table?

We can, uh, if you know the root node, then with a single table, we can go through the entire file structure. All the file contents can be found, okay? Internally, all of these files have things like, you know, who are my children? What kind of content do I have? So if it's a coding file, if it's a dot, java file, then you won't have any children file. Yeah.

Uh, so there is a way to tell that also in in gate we call it a blob, and the trees are called trees, okay? We are getting into depth for GitHub because I think the question basically is saying that design a database schema for a file system. How would you store files, um, in a, in a database efficiently? That is what they're talking about. So content addressing system, and, uh, I think Anke had an interesting question that you know, but what if you have multiple branches? So every branch will have its own route directory, okay?

And that route directory needs to be stored here in this, um, in this table, and you can go through the entire file system this way. Is this making sense? You're able to store an entire file system entire, so not a file system. You're able to store, uh, entire, uh, tree of files through two tables. Okay? So is the database schema complex?

Not really. Can you see any other problem with this? If I tell you, go and fetch me interview repository, and the repository has let's say 500 files. Now, what do we do? 500 inner joints on that table. Like if there are many levels.

First you go to the table, you get the root rectory very good. Then you do, uh, I mean, then you do a query on the table, you get the second level directories, do another query on the table, you get all the sub directories and so on. So if you have many levels, are we going to do as many queries on that table? If you have seven levels, if you have five levels, right? If you know about Java projects, they go from main source, everything. So how do you optimize for that?

So guys, there's a database schema we have. It works, but it's not efficient, okay? It's not enough to pass any interview or any team review. Yeah, because although it works, it's going to be extremely slow. You can't do seven inner joins, nor can you do seven queries back to back on the db. So what, what are we looking for to speed up this system?

Okay? If you're able to do this, then we can store branches. Like we said, we can store files and directories, like we said, uh, file differences are being stored. Our standard table contains it, commits on nothing but objects in git, which are also stored as, so a file diff and a commit, and a tree, a directory, all of them are stored as objects and kit, okay? So you can use the same thing. So ignore this one.

Now, uh, organization we have stored, it's in a separate table, but how do we make it efficient? Any ideas, guys? I, Anyone worked on a file system, anyone worked on how, uh, files are efficiently stored, or if you need to find a structure, uh, you need to get an entire project, or you need to find a file in that project, how do you, how do you go about doing that? Okay, here comes the interesting bit, uh, and this is where your system design skills will come to the test. Uh, we are asking the wrong question. Yeah, I said get me the whole repository.

Why do you want the whole repository? When do you need the whole repository? You need the whole repository Only when you're doing some sort of a gi clone or you're downloading the entire report. All the Correct. Yeah. Yeah.

Otherwise, what do you need in the couple of files? You need diffs. You need commits, right? So you don't need the entire repository. You don't need to fire seven or eight. Um, what do they say?

Uh, queries on the table. You need a small part. Yeah. Does that give you a hint about what you can do? What kind of access? Yeah.

Only having, uh, we download one thing, uh, once while cloning, we'll download it all, and, uh, whatever we'll require, we'll requiring only the tips part of it change. Yes. So when you have a diff you have one commit and another commit, and then you see the difference between those two commits? Yes. Yeah. So we need a way to store the history of the repository, but the history is also not simple.

It, it goes like this. This is the, this is maybe the first commit that was made. Then two engineers went ahead, one went to feature, one did a hot fix, and then they merged together, and then they went ahead. So the history is not linear. It sometimes branches also. Okay?

So if you wanna see the diff between these two, or if you wanna see the diff between these two, that's one possibility. We said that if you're trying to clone the file, if you're trying to download the entire, you know, project, uh, what about that? That's a simple problem. Let's go for that first. You are a new member in the team. You said, uh, we said that, you know, we use GitHub or Bitbucket.

Um, what do we do? So we say get clone. This is the origin, URL. Now what, how are we going to get the files for this user? So the latest version and all branches. Okay.

Okay. Interesting. That one is saying optimal merging pattern. We can use the same to get the diff. Okay? GitHub uses a lot of internal algorithms, uh, to get a diff I think optimal merging pattern is the right answer.

Darsan, uh, is it, I mean, have you read it somewhere or? I, I know that what happens in the PAC files? Yeah, they call something called a Maner algorithm. Okay. This is unnecessary. Uh, nobody will ever ask this, but okay, sure.

No, no, no. This is not Maner algorithm. What am I saying? Uh, we have it at interview where we have talked about Google Docs, right? Yeah. Google Docs.

Here it is compression and caching. So if you're looking for compression, the third point is lost of man compression. Um, yeah, algorithm. Sorry, we are kind of getting lost in useless things. Uh, but in, I mean, so if you're building it right, this is, this is something that you can do internally as a programmer. So I'll share that link here, but I think this helps you get diffs Yeah.

Efficiently. Okay. We don't need to think that way. You can think of it as longest common substream or something. Uh, that also works. So that's, that's good.

Um, and coming back to the original point, how do you store, how, how do you, you know, quickly access all the nodes in this graph? So I think already you are, you are probably at a, um, you know, you guys are probably finding it hard enough to get all the stuff that we talked about. Let's take this for the next class, right? How are you going to efficiently find the file structure of git? You want to research around it, check it out. How do you get files in Git or commits in Git, and how do you compare them?

You don't have to go for maybe what happens in the real world, but basically what are some of the ideas you can use? That is something we can go for, right? Uh, at this point, let's, let's put this on a pause. I don't know about you guys, but I'm feeling like when I'm looking at the chat, I'm feeling like, oh my God, maybe I am, I'm not able to, uh, even, even talk about the basics clearly, because is that true? Is that the case ish? Is there a, is it feeling like everything is going at a high level, Samir?

Uh, so, uh, uh, what we can do is whenever we, since I joined late, it might be for my case, Uhhuh, but uh, whenever we start the problem, so the basic thing like, uh, this, uh, director thing, um, we need to understand the problem very clearly first. Yeah. Then, then, then you step by step, whenever you explain, then that fits into our mind. So I think, uh, Yeah. First more more on the actual problem. Actual problem we should go for.

Yeah. Okay. Yeah, I, I totally agree. Uh, what we'll do moving forward is we will take a problem beforehand, right? I will not take a problem on the fly because, uh, I'll structure the problem correctly and I'll also have the requirements set correctly, because otherwise it's always hard to type out all the requirements in chat. And for, um, me to kind of guess in a short period of time what we are focusing on, uh, sorry for this.

Um, at a high level though, if you're trying to design a DB schema for Git or anything, you are mainly concerned about what you need to store. That is one. So you look at the things that people do, you know, they have projects, they have authorization, authentication. That is things that people do, what you need to store. Then how you need to store it comes from access patterns. Access patterns, meaning what kind of SQL queries will you fire on this database?

So if you're usually getting all the users for our organization together, then you want to keep it in one place. If not, if you always get admin separately and members separately, then maybe it makes sense to keep them in separate tables. So what you store is based on what are the product requirements, how you store is based on how that data is being accessed. That's the simple way. We talked about a little bit about normalization. Normalization basically means that, uh, you take data and break it down, uh, so that it's easy to query.

You don't keep it clumped up together. This is one nf you, you can have a higher level also of, uh, normalization two, NF three. NF is usually max. Most organizations don't go for three nf just limit yourself to two nf. Um, in most cases, with the advent of NoSQL, uh, normalization has become, again, rare. So people just store data the way they want to.

They don't try to normalize much. Okay. Finally, we talked about a file structure file system. This may have been hard to follow because, um, we are talking about basically some of the gate internals, right? We are talking about hashing. We are talking about how do we access files using their hashes.

So this was a bit complex. I think we can take it again next time or we can probably go for a question which is better, more structured, right? I will, I'll look at that. Um, and yeah, that's, that's pretty much it. Um, yesterday, I don't know about Amazon file system for FX for storing large data and get it in low latency. Normally telco companies use that to store petabytes of data.

Mm-Hmm. That's interesting. You also have Hadoop, which is a file system for storing usually large files, right? Small files. I think now people store small files also, but large files is better. You get to scan the file, um, sequentially.

Okay, guys, uh, one interesting piece of news, interesting news. Uh, try this link. I haven't publicly announced it just for you guys. Uh, we'll announce it tomorrow publicly, but yesterday we added the low level design content, uh, in this link. You all should be able to access it. This entire section is, uh, is four and a half hours long, to be frank with you, even more content is being added, right?

Um, we are talking about all solid principles here, single responsibility, open, closed list of, um, and I and D are very similar. So they came together only it's a big, big chapter, but it's fine. Um, so S-O-L-I-D is covered over here along the way. This is like as close to a real world project as we possibly could get. So along the way, some design patterns started popping up. Prototype design pattern came here while we were, you know, working on changing requirements.

Uh, then it created design pattern. Pattern came here. We were taking feature requests in this project. The project is a turn based GI AI engine like chess, okay? So you are trying to write a chess engine, let's say. Um, and a server, which is going to take moves from users.

So we then put a timer in the game. Um, singleton null pointer came a little later. Um, proxy flyweight factory design pattern. So these design patterns come up naturally. It's not that, you know, we say, oh, we are going to weather forecast. Now here's a design pattern.

Oh, we are going to do car manufacturing. Now here's a design pattern. That's not going to happen. We are talking about as close to the real world use case as possible. There's a seal project that is evolving. Uh, and so you can go through this and, you know, I think it'll be, it'll be useful.

It's pretty good. Uh, but then I'm only saying, so let's see. Uh, let me know what you think of it. Hmm. After going through it here, Anish, uh, you are, you're saying something? Uh, no, no, no, it's fine.

Okay, great. So guys, we have this already, this access open to you. Um, try it out when you get the time. Uh, thanks so much for coming on a Saturday morning and choosing to spend your time here. Um, I'll, I'll work on making it better structured, but I hope initially and also a little later, some of the points might have gone through. Uh, and yeah, thank you for the good questions and good comments.

Also I have is optimal merging pattern is pretty good. Daran, you're probably into algorithms, I think. Okay. Uh, and yeah, a lot of the other comments also, Nadu, uh, s thanks so much, Anish Course. Thanks. Thank you.

See you have a great day. And, uh, wish you an awesome weekend ahead. Uh, G**o, just, just, uh, uh, I'll stop recording. Otherwise, you know, your personal matter, uh, personal information will go out Anish. So just one second. Okay.

Okay. Just Stop recording. Yes.
