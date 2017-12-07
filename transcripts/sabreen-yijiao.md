02:05 

s: **reading the problem aloud to herself** okay. so we can like, [iterate through the list and find which ones are passing scores.](./planning_schema.md)

y: are you familiar with the syntax?

s: kind of, it's like for

y: i?

s: var

y: oh, yeah okay

s: or if you want to use a for each loop you can be like for var... i think it's like for var and then like score in scores, if scores is like a list

y: ah, yeah, okay

<a href=./planning_schema.md>
s: and then, lets see, for each loop...
y: so it'd be if var score is greater than 
s: greater than or equal to seventy. should we like add it to a new list?
</a>

y: yeah, because we need [unintelligible]

<a href=./planning_schema.md>
s: do you want to make an empty list at the top and then we can add
y: yeah, outside the loop?
s: yeah. 
</a>

y: is it var?

s: yeah, so it's like var score of score list or something. and [then you can just do like empty array. i think that works](./planning_schema.md)

y: [and then we just score list.add ](./planning_schema.md)

s: i think it's push? dot push? we can check

y: can we check the syntax?

j: feel free to use the internet

a: feel free to use both machines if you'd like, to look things up

s: so javascript add to array, so it's push to add to the end of the array

<a href=./planning_schema.md>
y: so if scores greater... push, otherwise
s: just like do nothing i guess
y: yeah, do nothing
</a>

s: okay so then after the for loop completes we'll have all the scores in our list

<a href=./planning_schema.md>
y: and then we just need to get out of the for loop and then return...
s: like the average
</a>

y: oh, okay. do we need to go through the new?

s: yeah, [add them up and then divide by the number. you can make like a sum variable or something](./planning_schema.md)

<a href=./planning_schema.md>
y: yeah. and then i just keep adding...
s: sum plus-equals score. and then after that...
</a>

y: i need to 

s: sum divided by

y: divided by the size of the array

s: yeah, so i think it's like score dot length or something. size of list. yeah it's dot length

y: okay, sum divided by...

s: divided by scores list dot length

y: do i need...

s: oh, there's no parentheses

y: okay, and [then you just return sum average. okay](./planning_schema.md)

s: 0 out of 7 tests passed. oh got not a number. maybe, do you want to console log the sum average or the sum or something

y: just like this?

<a href=./planning_schema.md>
s: yeah, and you have to put something in there, so if you want to log the sum or like
y: yeah, we can see sum first
s: do you want to console log score inside here?
</a>

y: yeah, okay. console...

s: dot log. let's see. um, the console's only printing.. maybe the score list is empty. what's the first—oh, some of these should be in the...

y: yeah, yeah, yeah

s: if score is greater than... do you wanna log the score here and see if it's actually... maybe, i don't know if this matters but [add a semicolon at the end of like, or like inside the bracket](./planning_schema.md)

y: okay, like this?

s: yeah. oh. okay. that's this one, right?

y: yeah

s: oh, do you think cause it's a string?

y: ah okay. 0, 1, 2... so it's just

s: oh you know what, [i think it's actually the index of the array so try doing of instead of in. because i think it's like giving it the index of the array not the actual value](./planning_schema.md)

y: yeah yeah yeah okay

s: [and then the same thing too for the second one.](./planning_schema.md)

y: yeah yeah yeah

s: and then let's see if that returns the array. five pass

y: oh, so we didn't think about this corner case

s: oh, if the inputs empty

y: we can just..

s: if the input's empty then what should it do? because if the list is empty..

y: should it return 0?

<a href=./planning_schema.md>
s: do you wanna just add a base case
y: yeah, so it's like if 
</a>

s: scores

y: yeah

s: dot length

y: equals zero

s: yeah, then return 0\. okay, we got one. so all of those are less than the passing score

y: oh, [we also need to return 0](./planning_schema.md)

s: you can, maybe after here

y: yeah it's if this list is empty right. yeah. if score list... is it just dot empty?

s: dot length

y: oh, yeah yeah. ye

s: then return 0\. okay, try that. yay. submit code

10:15 

y: do you want to type this one?

s: yeah, sure. 

s: return 0, 1, oh because that's the index

y: yeah, because the index. so we can go through the list and then

s: so like, for 

y: var number

s: yeah. oh actually maybe we need to use a [for loop with an i because we want to see if](./planning_schema.md)

y: oh, yeah, that's right

s: yeah, for int i is less than, what is it, nums

y: yeah nums

<a href=./planning_schema.md>
s: so then if our target is nine for example
y: we can subtract... minus then nums
s: nums of bracket i, yeah
</a>

y: yeah

s: and that'll be like the value

y: the value we're looking for for the rest of the

s: yeah, so [well we can declare this var outside](./planning_schema.md)

y: var value

s: so that's what we're looking for in the rest of the array

<a href=./planning_schema.md>
y: and then there'll be another
s: another for loop, yeah
</a>

y: j equals...

s: j equals i 

y: yeah, 

s: j also less than... j plus plus. [and then you want to go get that and compare it to value. so if nums of j equals value](./planning_schema.md)

y: j equals value

s: [i guess return i and j](./planning_schema.md). can you return like

y: the way you return is like you put it in an array or something? yeah

s: [so i guess you should make a solutions](./planning_schema.md)

y: declare a.. yeah

s: and then solution dot push i? i don't know if you can do a... let's just do it like this because i don't know if you can do two things at once. 

y: [so we need to return solution. outside the for loop.](./planning_schema.md)

s: do we have edge cases? like what if.. solutions will be empty if there's like nothing

y: each has exactly one solution

s: error unexpected identifier... which part is it

y: is it because we didn't close it?

s: no it's right there

y: oh, okay.

s: [we can like console log something](./planning_schema.md)

y: yeah yeah yeah

s: like 

<a href=./planning_schema.md>
y: put it before the push? do we want to console log
s: like num j or something?
y: yeah, num j
</a>

s: oh it looks like it's never even going in this for loop right? because it's not console logging anything. [we can do something like change it to num i or something. or even value. i guess we can just do num i](./planning_schema.md)

y: num i, yeah let's see if this will work

s: is the for loop right? maybe the for loop is not right

y: should be right, this is the way 

s: nums is a list right. it's an array

y: yeah, it's an array

s: it didn't log that. you can like log nums, i don't know if that'll help. it's not logging anything. [let's put something right at the beginning of the function](./planning_schema.md). okay this is not even working. i mean the end parentheses we shouldn't have to worry about i think. you have a bracket too many?

y: too many?

s: for... wait this goes with the end, this goes with this for

y: for, yeah

s: i mean, maybe, wait this if, this for, this... i could try like rewriting some of this. i feel like that is like a bracket thing i've seen before, but these are fine i think

y: each one close the brackets

s: should i just like start rewriting it? okay, [let's just write our loops again.](./planning_schema.md) just in case, i don't know, unless you have a better suggestion. 

y: maybe it's because this bracket 

s: which one?

y: this one?

s: can you retype it?

y: [yeah can you just delete this one and retype it](./planning_schema.md)

s: yeah, oh

y: just like this, because the thing changed to this and it's a different language

s: oh, yeah. and this bracket will be closed like this, and inside we have an if statement  and then we're going to close the if statement, and then we can just do these things, right. and then at the end we return solution, 

y: outside the

s: like right here. and then we can delete this

y: can we try just push one thing? [like let's just push j](./planning_schema.md)

s: yeah, sure. let's just try getting rid of one for loop. which is the thing that's causing it?

y: do we need int here?

s: where? oh wait look, something about the for loop was messing it up.

y: so in the example here, you didn't need to say for int i, instead you should

s: oh, maybe it's var. i think that's the issue

y: yeah because javascript doesn't need

s: yeah that's annoying. this can all go back here. oh, three out of seven pass. okay, wait. 

y: can we move the console log? maybe put it somewhere else

s: oh, it got more than... it's pushing too much into our solutions array. [i think we have to break out of the loop once we get our solution. because otherwise it just loops on](./planning_schema.md)

y: oh yeah, you only need one solution 

s: you know, [we can just return solution right over here, right? once we get this](./planning_schema.md)

y: yeah

s: okay, so now the indexes are wrong. okay, so this is 26

y: should be this one?

s: should be one and three. so if 26 minus

y: oh, [can we do like i plus one instead of i](./planning_schema.md)

s: oh yeah

y: because we don't want to repeat the same

s: yeah, because this is 

y: yeah. okay

s: yay. submit 

23:07 

s: merge arrays

y: yup. [reading prompt aloud]

s: [we'll have to iterate over the array first](./planning_schema.md)

y: yeah, [so iterate over this one, and then compare](./planning_schema.md)

s: compare it to the index you're on. would it be like nested for loops?

y: yeah, i think so. maybe there are better ways to do it

s: yeah, but we can do this for now

y: yeah if it's smaller than... then i plus plus 

s: [okay, so then then you'll do another for loop. and then, close bracket](./planning_schema.md)

y: oh yeah, i need a bracket

s: and [then like compare array one i](./planning_schema.md)

y: this should be if array one is less than array two j 

s: [then we'll like add it, well we can make a new array. then push array i, or solutions dot push](./planning_schema.md)

y: solutions dot push, yeah... one, i? 

s: mhm. one else or i guess if j is less than i we would push j

y: yeah

s: well, what if they're equal. i guess if they're equal it doesn't matter which one, so just else, like just push array 2 j. but then i guess like, like but then so if we push array 1 i and it's going to skip over 1 j because we never pushed array....

y: but after you push you also need to advance the index right? so [we do i plus plus](./planning_schema.md)

s: oh, yeah. yeah. and then over here you'd have to... well, this is already going to include this. because like at every iteration it's going to only push one thing. this is like 214

y: yeah, i remember this. we can search

s: oh yeah

y: merge sort... this is so complicated

s: i mean it's okay it just takes a while

y: yeah, but merge sort is like you have one array, you try to sort that array. [the easiest thing is we could just combine everything and just sort it](./planning_schema.md)

s: oh, okay. i like that. 

y: yeah, might not be the best but it might work

s: is there a way to append two arrays together?

y: yeah

s: concat. [so first array dot concat second array](./planning_schema.md)

y: so the solution will be actually array 1 dot concat array 2 

s: I'm pretty sure there's like array dot sort

y: okay, cool

s: uh, solution

y: yeah, solution

s: this is so much simpler

y: yeah yeah, uh sort

s: oh no, wait you don't return anything

y: i don't return? oh yeah, [okay return solution](./planning_schema.md)

s: six out of seven? javascript failed us. got... that's just like, it didn't sort it

y: it sort of sorted, but it break here, i like break it into two parts in a weird way. something wrong with the library function

s: expected... wait, that's really weird. 

y: like if we need to fix this, we can use the same way

s: [do you want to log some values in case, like log solution after](./planning_schema.md)

y: oh yeah, okay

s: oh, we did it wrong. so the first one's right

y: oh but the way it's sorted is just wrong

s: that doesn't make sense

y: we can't use this sort thing. maybe we need to write our own sorting algorithm

s: what else can help us?

y: this is complicated. the easiest way to sort it would be, it would have a bad runtime, [but do a double loop and for each one search through where it should be and then insert it](./planning_schema.md)

s: oh, so like insertion sort

y: yeah

s: kind of

y: yeah, i don't know

s: yeah, [so like make a new empty array, add like one element to it, and then go through the first array and add it](./planning_schema.md)

y: but can you add something, like can you insert something to an array

s: i mean i think you can, you mean like push

y: but push will always add it to the end, can we just like index specific index push to array? it needs to be a list instead of an array

s: oh, yeah. i mean there's like a list but it's like you have to import something, right? wait, can you add to a specific index

y: nope, there's no

32:57 

j: okay, that's time. we just have a couple questions for you. do either of you know each other? have either of you worked together before?

s: no

y: no

j: what did you think?

s: of everything? or the interface or 

j: just this whole activity

s: interesting

y: yeah, review for a lot of concepts. and also the text editor, because it didn't have a lot of funciton, like insert parentheses, it d

d: it didn't have each bracket matching to each bracket,

y: matching each other, things like that, so it's like hard to debug. but something you make mistakes

s: like we thought we made a bracket mistake but it was a different mistake. and then i guess in terms of like the pair programming part it made sense for us to switch off at every problem as opposed to like a certain amount of time. and then it was helpful to have one person like searching helpful functions and then like another person programming, typing things

a: so can you elaborate on how you divided the tasks

y: so like one person is primarily typing and the other person can help search like

s: like how to do this thing in javascript

y: like specific syntax things

s: and then like she was like also searching things, i think, on the side a little. like if we really didn't know something we would both be on a new tab searching things. but i guess i would be primarily looking up syntax and stuff

j: can you talk about your process for solving the first problem?

y: this is the one where like if you're greater than

s: so we went through the list and then found all the scores that were above the passing score, and then put them into

y: we just summed them up and then

s: divided by the length of the thing

j: so how did you come to that solution

y: we didn't really think about how it works, we just get started and then figure out, okay we need this sum variable—

s: —and like we'll probably need a for loop so we started making the for loop, and then we're like we'll need to declare a variable at the top because for the solution or whatever

y: yeah and so we kind of just add stuff we need as we go instead of declaring everything and think about the function works, and then implement it

j: and how did you figure out what you needed?

s: i guess as we went we realized what we were missing, like when we're going through the array we're like we need some way of storing the numbers we're adding so we went back to the top and added a solution like empty variable so we can append to that one

a: so what about for the second, what was your process for completing the second task?

s: i think we both had a same idea in our head about how to got about solving it. first we started going through the array and the

y: find what the first number might be and then search if there is a matching number

s: like subtract from the target value and then you know you're searching for the leftover value in the rest of the array

y: and also like the instruction says there's only one possible solution so you don't really need to worry abut another

s: yeah we needed to go back to the original problem to see if it mentioned anything about base cases

y: and then we got a really weird error

s: oh yeah, because we did an int when we didn't remember that javascript doesn't have int, like you just say var for everything

a: so what did you guys do when you ran into that

s: so she googled the error and it said it was probably a bracket error, so we were stuck on the bracket issue for a really long time

y: but it wasn't really the bracket. and then i searched the javascript way of doing the for loop and found that it's different

s: yeah and before that we commented out different parts to see which part was giving us the error, and it turned out it was the for loop so we searched how to do a for loop in javascript

a: what about the process for the third problem?

s: first we were like rip

y: first we were trying to do the double for loop to like compare the value for the first two elements and then try to put them in order into an array, and then we realized

s: that we were supposed to do this, so she suggested concatenating both arrays and then sorting the whole thing after, instead of trying to sort it as the same time as you're combining it. but then we got a weird error

y: then you figured out there's actually a sorting library function in javascript and then there's a test case that didn't pass and we were trying to figure why it didn't pass

a: so what would you say was difficult about this activity? if anything

y: i didn't really know javascript that well so i had to search the syntax for doing a for loop or just to declare things because it's different

s: i like kind of knew javascript so i just needed to double check on them. i feel like in terms of us working together it was easy because we had similar approaches to things.

y: it was helpful because if you get stuck somwhere you have other people can look at the code, might be able to 

s: yeah like you caught the var thing instead of int when i didn't see that. i think that we also kind of got better at working together as we went along. like before we were both saying what we should type but by the end i was like i know she knows to put the variable at the top so i don't need to tell her. so i think we also got more familiar with each others programming styles, which made it easier as we went along. yeah. merging the arrays was the hardest thing.

42:27