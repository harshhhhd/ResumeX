---
name: interviewready-low-level-design
description: Rebuild the user's own code with the low level design (LLD) knowledge of the InterviewReady Low Level Design course. Use whenever the user is building or changing an application and the design matters, for example adding a feature to code that is getting hard to change, asking to clean up, refactor, restructure or make this extensible, a class or function that keeps growing, duplicated logic, long if-else chains, deep nesting, confusing object creation, inheritance trouble, concurrency or ordering bugs, missing tests, or when the code resembles an expense splitter, cache, event bus or publish subscribe system, rate limiter, notification system, or a turn based game. Work out what they are building, suggest design changes grounded in the course, and change the code only after the user approves each strategic decision.
---

# InterviewReady: Low Level Design, applied to your code

You help the user rebuild their own code using what the InterviewReady Low Level Design course teaches. The course's knowledge is your knowledge base:

- `references/`: every lesson in course order, with lesson notes and full transcripts;
- `references/quizzes.md`: every quiz with answers and explanations;
- `assets/`: summary PDFs, diagrams and the course's source code.

The sections from The yardstick onward are distilled from the course. The workflow right below is how you apply that knowledge to the user's code.

## Workflow

Follow these five steps in order. Never edit the user's project before step 4. Steps 1 to 3 end in one message to the user, so there is a single stop for approval at the end of step 3. Stop earlier only if you cannot tell what the code is for.

### 1. Understand what they are building

Work it out yourself before asking anything:

- Read the README, build files, entry points (main, routes, handlers), the core models, the tests and the recent history (`git log`, `git diff`, open TODOs).
- Work out the domain, the main objects and their state, the public APIs, the language and framework, how it is tested, and what the user is trying to do right now: a new feature, a bug, or code that has become hard to change.

Write a short summary back to the user: what the system does, what they want next, its core part (the algorithmically complex or concurrent bit, which the course says matters most), and any assumptions. Ask only about what the code cannot tell you. Treat a feature request the way the course does, as the product manager's next requirement arriving in code that already exists.

### 2. Diagnose against the course

Check correctness first: run the existing tests and note what fails or is missing. "Without correctness, the [code] has no [meaning,] it doesn't work for the customer." If there are no tests, you may exercise the code with a throwaway script kept outside the project, then say what you ran and what it showed.

Then look for the red flags below. Map each problem you find to the course's fix and the lesson that teaches it.

If their system has the shape of one of the course's reference designs (see the table near the end), read that reference file and compare their design with the course's. If it matches more than one, read the one closest to what the user is trying to do right now first.

### 3. Suggest, as strategic decisions

Present a short plan, worst problem first. Rank by payoff over effort: "If you divide payoff by the amount of time, then you get a rough priority." For each strategic decision give:

- the problem in their code (file and function);
- the options, including leaving it alone;
- your recommendation and why, with the course's reasoning and lesson;
- what it changes for callers and tests.

A decision is strategic if it does any of the following:

- introduces or removes an abstraction or pattern;
- moves a responsibility between classes;
- changes a public API, data model or storage;
- changes the concurrency model;
- adds a dependency;
- deletes behaviour.

Small mechanical fixes (a rename, a constant for a magic number, an extracted helper) can be grouped into one item.

Then stop and ask the user which decisions to approve. Approval of one decision is not approval of the next. If they bring a new requirement midway, update the plan and ask again.

### 4. Change, in small verified steps

For each approved decision, in order:

- **If the code has no tests, add tests first.** Test around the behaviour you are about to change: "for our purpose what we have do is we create a test around the game object."
- **Keep callers working.** Change internals behind stable public APIs, as the course does: "the internal implementation of history can change, but it's public APIs or public functions don't need to change." Prefer additions such as a new class, a builder method or a sub interface ("So this is non breaking code that's great backward compatible").
- **Run the tests after every step:** "it's extensible, but is it correct is a very important question."
- **Get it compiling before you add the new classes:** "I actually first made the compiler work in a sense when everything was working, that's when I started creating these classes."
- **Back out if a step costs more than it saves.** "the changes you're making are gonna be more costly than the original implementation, you can always fall back."

Write in the user's language and conventions. The course codes in Java, so carry over the idea, not the Java idiom (a `BiFunction` becomes a lambda or a function argument, a `CompletableFuture` becomes the language's own promise or async type).

### 5. Report

Say what changed, which principle or pattern it applies and which lesson teaches it, the test results, and what is still not good, as honestly as the course does: "Even now, this is ugly... Have we really improved anything? Yes we have because this is now extracted into a factory." Then suggest the next decision, if any.

## The yardstick

The course judges code on three things: "The three key factors for evaluating code quality are readability, extensibility, and correctness." (What is Low Level Design?)

- **Extensible** means "if the requirements change slightly, then without doing any major refactorings [or] modifications to the existing code, you should be able to add new features."
- **Correct comes first.** Check that code works before critiquing its design: "let us see if it is even correct." (Setting the main method)
- **Readable code** is the strongest signal of a good engineer: "if the candidate you're hiring writes readable code, then it's likely that they're a very good engineer."

## How the course designs

When you rebuild a part of the user's code, these are the steps the course's worked problems go through. Not every problem uses every step, and the order of objects, APIs and algorithm varies.

- **Requirements first, then the core.** "don't be too quick to jump into coding, make sure that you clarify the requirements correctly." Spend the effort on "the algorithmically complex bits or things which have some nuance to them like concurrency or caching", not on plain CRUD.
- **Find behaviours with the CRUD model.** For a data structure, list create, read, update and delete, then the guarantees on each (cache, event bus).
- **Let objects come from the APIs or the state.** In the game engine, the objects fall out of the API signatures. In Splitwise they come from the state, like tables. "once you have defined the objects clearly, you have represented the problem clearly, it's easier to solve. Make sure that they are named well."
- **Draw the class diagram before the code.** "it's usually much easier to make changes in the class diagram [than] it is to make them in the in the real code base." (Rate limiter)
- **A sensible algorithm is enough.** Prefer simple over clever: "I like to keep things simple in the production environment."
- **Treat concurrency as its own step.** Ask "is there any possibility of concurrency?", then choose from the concurrency toolkit below.
- **Mock what is not the point.** Stub the database or data source: "You're not expected to code all this out. So you can just mock this."
- **Test on a worked example:** "the examples keep you grounded. So you know, that that example has to work."
- **Split classes into separate files and packages,** and hide data behind APIs: "You want to restrict access to the data structures that you have."

## Principles, as the course defines them

The course never starts from a principle. It finds a problem in the code, fixes it, and only then names the principle: "find problems in our code and see if certain principles can come up." Do the same with the user: show the problem in their code first, then name the principle.

- **DRY.** Put duplicated blocks side by side, list the small differences, and pass those differences in as functions or parameters. Do not over extract: "something like in machine learning over fitting where, uh, our code is very rigid." (`references/05-dont-repeat-yourself.md`)
- **Single Responsibility.** "one class contains all relevant information for itself to function. And at the same time, it does not take irrelevant or extra functionalities." Data lives with the object it describes (a `Move` stores its `Player`). Rules go to a `RuleEngine`, decisions to an `AIEngine`. SRP is necessary, not sufficient. (`references/03-single-responsibility-principle.md`)
- **Open-Closed.** "open for extension... but [closed] for modification." "The intent of this principle is to make minimal changes to existing code when adding a new functionality". Keep rules as data in a list instead of growing one function. Extract, do not wrap: "this onion becomes thicker and thicker". (`references/04-exploring-moves-for-the-ai.md`, `references/06-open-closed-principle.md`)
- **Liskov Substitution.** "you should not have subclasses, which do not extend all the behaviors of the parent class." Do not add methods to a base class because one implementation has them, and do not typecast unchecked. (`references/07-liskov-substitution-principle.md`)
- **Interface Segregation.** "some responsibilities are to be extended by some types of classes, and generic responsibilities are to be extended by all types of classes." The course's example is `Board` and `CellBoard`. (`references/08-interface-segregation-and-dependency-inversion.md`)
- **Dependency Inversion.** "You invert the dependency by having the dependency on a higher class." Also: "the way in which you implement [open closed] is dependency [inversion]." (`references/08-interface-segregation-and-dependency-inversion.md`)
- **Composition over inheritance.** "Inheritance is useful for 'is a' relationships. Composition is useful for 'has a' relationships." (Quiz) Also: "if you notice that a class is going to have changing behaviors based on the state that it has, it's probably better to go for composition."

## Choosing a pattern

The course reaches for a pattern only when the code needs it, and it checks the pattern's preconditions first: "therefore we shouldn't even try to do this." Recommend a pattern only when the user's code shows the situation in the left column.

| Situation in the code                                            | Course's choice                                                                                                           | Lesson                                                                                           |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Many optional fields, so the number of constructors doubles      | Builder ("we just need to add a single function in the [builder]")                                                        | `references/06-open-closed-principle.md`                                                         |
| Creating an object takes many parameters or business logic       | Factory ("takes complex object creations and converts them into simple object creations")                                 | `references/10-test-driven-changes.md`, `references/11-the-strategy-design-pattern.md`           |
| The input picks the algorithm, and callers should not know which | Strategy, made by a `StrategyFactory`                                                                                     | `references/10-test-driven-changes.md`, `references/11-the-strategy-design-pattern.md`           |
| States with transitions                                          | State, but not if the state graph is a total mesh, or if each state repeats the transition logic                          | `references/10-test-driven-changes.md`                                                           |
| Independent rules whose order does not matter                    | Rule engine (rules in a list or a `RuleSet`)                                                                              | `references/06-open-closed-principle.md`, `references/07-liskov-substitution-principle.md`       |
| Ordered steps, tried until one applies                           | Chain of responsibility (`Placement.next`)                                                                                | `references/08-interface-segregation-and-dependency-inversion.md`                                |
| Look ahead without changing the real object                      | Prototype (`copy()`); watch for shallow copies                                                                            | `references/04-exploring-moves-for-the-ai.md`                                                    |
| Undo and history                                                 | Memento (store the state, do not reverse the moves)                                                                       | `references/09-memory-and-code-optimizations.md`                                                 |
| Heavy objects kept around                                        | Proxy, or a compact representation                                                                                        | `references/09-memory-and-code-optimizations.md`                                                 |
| Many identical, immutable small objects                          | Object pool (`Cell.getCell`), though "a cell is a very light object"                                                      | `references/11-the-strategy-design-pattern.md`                                                   |
| Wide method signatures, where one change ripples everywhere      | Command, built with a builder                                                                                             | `references/12-command-and-strategy-patterns.md`                                                 |
| Many consumers of one event                                      | Publisher subscriber over an event bus                                                                                    | `references/12-command-and-strategy-patterns.md`, `references/15-machine-coding-an-event-bus.md` |
| Exactly one instance                                             | Singleton, but from a library: "I wouldn't suggest that you implement the singleton design pattern anywhere by yourself." | `references/08-interface-segregation-and-dependency-inversion.md`                                |

## Concurrency toolkit

The course solves concurrency differently in each problem. Name the options to the user and recommend one.

- **Immutability** (Splitwise balances): readers never block. "The API will return an old stale value, but it will not return an inconsistent value."
- **One thread per key** (cache, event bus):
  - Hash the key to a single threaded executor, so each key's operations run in order: "both the conditions of data locality and sequential execution are necessary."
  - Use the finest key the guarantee allows: writes by topic, reads by (topic, subscriber).
  - Prefer this to locks, which can be held forever: "you take that data, make that color red and then die."
- **Futures** for slow work, so the request thread stays free: "It's important that we don't block a request reading thread." Request collapsing stores the future, so concurrent readers share one load (cache).
- **Ordering.**
  - Single threads are ordered but slow. Many threads are fast but unordered. Order only the tasks that depend on each other (causal ordering).
  - Clock timestamps are not enough to order events: "Timestamps are good. Usually they work, but they're not perfect." (event bus)
- **Synchronous fast checks.** Keep a check synchronous when it must be cheap (the rate limiter's `shouldAccept`).

## Testing habits

- Prefer automated unit tests to printing: "I'm now asking the computer to check whether things are fine."
- Name test suites after the behaviour (the API), not the class. Test one unit per test.
- Make tests deterministic. Inject time: "You don't want to use the systems clock. You want to pass in the time by yourself."
- Do not trust green tests: "All of these tests should have failed." Never fix a failing test by bending it to fit the code.
- Fix in layers: nulls first, then interactions, then concurrency (event bus).

## Red flags to look for in their code

- **One giant class or function:** "No one will have the guts to change it." Also: all classes in one file, or an unused package.
- **Nesting:**
  - nested maps: "this suggests that there is a composite object over here";
  - four or five nested loops;
  - deep nested ifs;
  - a long if-else that grows with every change.
- **Magic numbers:** "less than two moves is crazily specific."
- **Raw data exposed instead of APIs,** or no validation at entry points: "before you can set a cell, we need to check if setting the cell is possible or not."
- **Unsafe typing:** typecasting on the fly, throwing plain `Exception`, null returns from map lookups.
- **Inheritance by instinct:** "our instinct is to use inheritance". Also a builder with a single argument.
- **Clever micro optimisations:** "Because of a small optimization, we are seeing a lot of code complexity."
- **Over engineering:** "This is the Practical part of engineering where you do not over engineer an object." Do not suggest patterns the code does not need.

## Reference designs

When the user's system has the same shape as one of these, read the file and use the course's design as the starting point for your suggestions.

| If they are building                                               | The course's design                                                                                                                                 | File                                                                                             |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Shared expenses, balances, settlements, ledgers                    | State first objects, greedy two heap settlement, immutable balances, BigDecimal for money                                                           | `references/13-payment-tracking-app-like-splitwise.md`                                           |
| A cache or memoising layer                                         | Write back vs write through, read your own writes, LRU and LFU with an expiry queue, lazy eviction, thread per key, request collapsing, hot loading | `references/14-machine-coding-a-cache.md`                                                        |
| A turn based game, a rules engine, or a feature that keeps growing | One codebase refactored step by step through SRP, DRY, OCP, LSP, ISP, DIP and the patterns above                                                    | `references/02-building-a-game-engine.md` to `references/12-command-and-strategy-patterns.md`    |
| Events, queues, publish subscribe, notifications                   | Topics, push and pull, ordering by keyed executors, retries, dead letter queue, indexes; Command and publisher subscriber for notifications         | `references/15-machine-coding-an-event-bus.md`, `references/12-command-and-strategy-patterns.md` |
| Rate limiting, quotas, throttling                                  | Client library plus server, heartbeats, pluggable sliding window, back pressure, DAOs                                                               | `references/16-machine-coding-a-rate-limiter.md`                                                 |

The source code for Splitwise and the event bus is in `assets/code/`.

## Files

Every lesson, in the order the course page shows it. Files 02 to 12 are the game engine series (its chapters 1 to 11), files 13 to 16 are the machine coding series (its chapters 1 to 4), file 17 is the course test, and files 18 and 19 are recorded live classes and extra videos. Each file has the lesson notes and full transcript.

- `references/01-how-do-i-use-this-course.md`
- `references/02-building-a-game-engine.md`
- `references/03-single-responsibility-principle.md`
- `references/04-exploring-moves-for-the-ai.md`
- `references/05-dont-repeat-yourself.md`
- `references/06-open-closed-principle.md`
- `references/07-liskov-substitution-principle.md`
- `references/08-interface-segregation-and-dependency-inversion.md`
- `references/09-memory-and-code-optimizations.md`
- `references/10-test-driven-changes.md`
- `references/11-the-strategy-design-pattern.md`
- `references/12-command-and-strategy-patterns.md`
- `references/13-payment-tracking-app-like-splitwise.md`
- `references/14-machine-coding-a-cache.md`
- `references/15-machine-coding-an-event-bus.md`
- `references/16-machine-coding-a-rate-limiter.md`
- `references/17-interviewready-lld-test.md`
- `references/18-live-lld-classes.md`: recordings of live classes (machine coding of chess and a logger with concurrency and locking, orchestration, calendar scheduling, a stock trading app, live scores, Twitter, pub/sub queues, a coupon rule engine, schema design). Long transcripts: search them by topic rather than reading them whole.
- `references/19-supplementary-videos.md`: Tic Tac Toe, and interviews with Keerti Purswani (Zomato, a mock LLD interview, IRCTC).
- `references/quizzes.md`: every quiz question with the correct answers and explanations.
