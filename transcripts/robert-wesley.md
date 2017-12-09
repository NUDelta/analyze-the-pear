01:58 

1: okay, so average. so list of scores is probably going to be given to guys as an array, that sort of thing?

2: right, so it's probably not sorted like the examples are

1: yeah. so [we would just want a for loop for now](./planning_schema.md), none of us have that. um, let's see discard, we don't need hash table. array, [we can get rid of this, while loop, we could use a while loop as a for loop](./planning_schema.md)

2: yeah

1: let's see, [let's [unintelligible] the return number](./planning_schema.md). alright, circle back. alright

2: okay, do we want to, [do you want to instantiate an array to append all the scores that are passable, then return the average of that?](./planning_schema.md)

1: oh, we could. do you have a conditional?

2: yeah i do
<a href=./planning_schema.md>
1: you could just put a conditional inside the array and say
2: if less than? then we delete it?
</a>
1: yeah

2: okay

1: or [we should make an object appear first to be like our total. because we're just taking the average of the passing scores](./planning_schema.md)

2: right, what do you mean total? like the sum of them?

1: yeah. 

2: okay. 

1: oh you don't have the... i can put, i can i have that

2: what's the passable score?

1: it's greater than or equal to 70\. so if it's less 70 you can remove it too

2: how do you delete in javascript?

1: you can't delete in javascript

j: you can't fill out the body of the if statement

2: oh, okay

1: you can add like an end parentheses though, or like an end bracket

2: right. 

1: [alright, actually maybe we should make it, instead of less than 70 maybe we should make it greater than or equal to 70, because we only want to act on it if it is greater than or equal to 70](./planning_schema.md)

2: what do you mean, i thought we were deleting

1: oh, [we're not deleting anything. the numbers are all going to be there, we're just going to act upon an average variable, and output that at end](./planning_schema.md)

2: okay, so submit action right?

1: yeah

2: alright

1: alright, [I'm just going to write some code up here.](./planning_schema.md)

2: you have a for loop now

1: oh, yeah. equals plus... equals two. looks good, yeah

2: and that's it right? just return it, the average?

1: [well we need to divide first](./planning_schema.md)

2: yeah, i know. 

1: oh actually

2: oh we didn't keep track of the length of averages

1: that's okay, so it looks like the average only... yeah so we do need to get rid of non-passing scores. that's not that bad though, we can just put the i plus... hm

<a href=./planning)schema.md>
2: we need another variable
1: we do need another variable. what if we
</a>

2: so i was thinking [we just made like average list and like appended all the scores](./planning_schema.md)

1: we could, do you have a for loop now? i don't have one

2: no, i have a

1: we could make another variable, we probably have enough time left to click that

2: don't we only have four

1: yeah, no, we should have, [so if we declare a variable at the top, like total or total number or something like that, and then we just increment it whenever the if statement triggers](./planning_schema.md)

2: hold, on it won't let me submit. i did that

1: oh, right. is that because we're out of

2: no, you can only write one line of code. so should i write return?

1: no, you still have four actions, so you can just write like the total number

2: what do you mean

1: because you already wrote the outline right there

2: right

1: so that's an action effectively. so we can, okay. so then... alright, in theory that should work

2: is that going to give you a for loop, or no

1: um, 

2: an if and a for

1: oh, do we need a for here?

2: no, but we want it to be a for right?

1: well we just define it as var, so theoretically it should be fine

2: okay

1: we can test it though. five out of seven tests pass

2: oh, so if none of them we want to return a NaN? wait no, what

1: oh, it's because we tried to divide zero by zero

2: oh yeah, so just say if total number is zero, 

1: yeah, [if total number is zero, then return zero.](./planning_schema.md) do i have two actions? do i have a conditional?

2: yeah

1: i do have a conditional. okay, we're good. alright. oh right

2: what happened

1: the turn ended, we were out of cards in the deck. 

2: wait what?

1: we were out of cards in the deck, so if we tried to end out turn with no cards left in the deck it ends our turn

2: oh. 

1: so submitting code is an action?

j: if you submit an action, yeah that counts. that will decrement the number of actions you have

1: no, but submitting code is not an action?

j: oh, submitting code is not an action

1: but you can't submit an action after making your final action on your last turn

j: right

1: okay

j: you can submit

1: after you make three actions but not after you make your fourth. okay. um, alright, at least we know what to do. we can quickly take care of this. okay, let's do basically the same thing. actually, [we could do a for loop this time if we want to, but [unintelligible]](./planning_schema.md)

2: wait, you don't have a for loop

<a href=./planning_schema.md>
1: i have a while loop
2: oh
1: i can implement that i guess
</a>

2: um

1: probably more efficient to go by doing this, too, i think. that's alright. right. sorry, i forgot you need to submit actions

2: do we have enough actions

1: im not going to have enough to do the whole thing, no

2: yeah initialize three

1: no, [I'm just going to start initializing them. okay, consume while loop. alright](./planning_schema.md)

2: oh, wait we get four actions each turn?

1: yeah

2: oh, okay that makes a lot more sense. oh, i don't have a, oh i do have a conditional. oh wait, that's not what we're looking for. right?

1: oh yeah we used average last time. probably should have, average is not useful for a variable name but

2: um, right?

1: yeah, and [then we need to increment i](./planning_schema.md)

2: oh, right

1: [at the end of the while loop. then we just need a return statement. alright. alright, return, just return, right i could have said zero. okay so have some tests pass ill submit. i think that should be it](./planning_schema.md)

15:26 

1: alright, ill [unintelligible]. hm. 

2: so, have you done this problem before?

1: no, have you

2: [yeah, so i think what you wanna do is you wanna instantiate a hash table, and using the hash table, if you go through this right and you want the target to be nine, you want the key to nine minus seven which is two and then you set the value of that key to be seven, and then you just loop through the array and try to find if two is already in the hash table, if not then you add it to the hash table](./planning_schema.md)

1: wait, so if you have the syntax for hash table, so is the first one

2: you just follow this one. 

1: this, do foo bar?

2: oh, no, oh yeah. i think yeah [if you just do the brackets it'll instantiate it. so you don't have to put anything in it right now. i think, we can google this right?](./planning_schema.md)

1: yeah, we can use the internet, they said

2: yeah, just the brackets is fine. you don't have, you have conditional

1: just throw a conditional in there?

2: [um, let me think through the structure. yeah, just throw a conditional in there right now. ](./planning_schema.md)

1: um, so what condition do i want to put in

2: um so [we'd have to instantiate the for loop first and other variable names,](./planning_schema.md) but we can change like the

1: yeah ill just throw in like a 

2: yeah [just throw in like a skeleton in right now. ](./planning_schema.md)

1: yeah, so if, um, ill just put a cond in. so should we come back to it?

2: yeah

1: and then i think ill toss it to you

2: okay, um, oh now you have a for loop. so for... okay then. okay.  do i have to do this

1: no, we don't have to write it

2: do you sort of understand what I'm saying though, with the for loop

1: yeah, no i get what you're saying, i don't know, it's just been a while since I've dealt with hash tables so i don't really remember exactly how to use them. 

2: i can't write in here right

1: i think we should use num instead of nums so we don't have to waste an action changing it

2: oh, right. um, okay. and then in here, i only have one action. oh, wait. if i wanna copy and paste it is that an action?

1: it might be. we could try. if it's, oh it might be. oh [instead of copying and pasting we could just move the end parentheses of the for loop. the end bracket. might be an action](./planning_schema.md)

2: can i do in? is that a thing in javascript?

1: okay

2: yeah, okay. okay, so if it's already in the hash table we would return

1: [we want to return an array of two](./planning_schema.md)

2: wait what did you say

1: we want to return an array with the indices of, or an array of

2: we can just do array... right?

1: does that work?

2: does that... what do you think?

1: maybe that'd work, but 

2: just put that in an array? that's how you do it in python

1: [unintelligible] but maybe

2: okay, um

1: oh, you need to submit an action.

2: yeah, i know. does it matter what order it's returned in?

j: you can check in the test cases

2: okay. alright, so 

<a href=./planning_schema.md>
1: okay, we need to actually have like a pre, condition go off?
2: what's that?
1: oh, to make sure we actually add up to the target
2: yeah, so right after this one, oh, wait what do you mean? oh wait wait wait yeah
1: because we need to make sure that they reach the target
</a>

2: so, wait can't you just copy and paste another if statement in here?

1: i guess, but we still need to make sure for the first one. or shouldn't we just initialize the hash table to like 

2: [so what I'm saying is you add the remainder of whatever the target minus the number is, so the hash table has the key, so say we're going through this, like we're passing through this, it would go,](./planning_schema.md) oh wait i guess you could check like, that's not really... yeah okay you're right, you can check first. wait no, because you want to check if they sum up to it. i guess if like nine existed, is what I'm saying, if nine existed here then it would be like nine equals nine, but we want two numbers right

1: we want two numbers

2: [right, so what I'm saying is here we would go check if seven is already in the hash table, it's not, so then now what we want to do is we want to add to the hash table, nine minus seven, which is the remainder of what we want. because we want a two, because we know that seven plus two equals nine. so we add two to the hash table as the key, and we put seven as the value to that key. so it would say 2, 7 in the hash table. so now when we loop through again, now we have a two, we see is two in the hash table? two is in the hash table, so we know there's a solution now, and now we just return two and seven because those are the numbers](./planning_schema.md)

1: no, yeah i understand that all in theory. so how do we implement the hash table with those numbers in practice?

2: so now we so, [copy and paste this if statement then, right under this if statement. and the conditional you want is, i guess you don't, hold on give me one second to think. no you don't, i don't think you need the if statement. so you would wanna do](./planning_schema.md)

<a href=./planning_schema.md>
1: couldnt you just put up here, for var of i, just say hash is, you just put something like right here? let's say hash dot add, actually i don't know if
2: yeah, so right under this if statement, just do what you were about to do. do hash dot add, um, target minus nums i.
</a>

1: alright so it's target... target minus nums i

2: right. 

1: what's the key for that though

2: what do you mean? oh, right right right. um, it would be nums i

j: you can only do one thing per action

2: i think...

1: right, right. i already moved the if statement, 

2: oh i think actually, you want to think something like this actually. [you wouldn't do add. you would just do hash and then brackets targets minus nums i equals nums i. i think](./planning_schema.md)

1: no, i, that sounds right

2: equals, yeah. no, uh

1: equals sounds fine

2: yeah. and i don't think we need the second if statement.

1: shouldn't this happen before this if statement goes off though?

2: um, i don't think so, because

1: because then we can actually instantiate the hash table for... or do we need a separate um

2: i don't think it matters, right, because the hash table is already initialized

1: yeah, but it doesn't have the values we're looking for in already

2: right, but we're going to be looking at the numbers that happened before right, so it doesnt matter if we add, right now we add 2, 7 in here, and then check if nums i which is seven is in here, because it'll only look for the keys

1: i guess so, yeah. should we have nested for loops? like one for loop to initialize it and another for loop to check all the...

2: no, because this is the only check, right, that we need?

1: i guess, hm. [alright ill action and do a new if statement i guess](./planning_schema.md)

2: i think that's right. we can just test it and see if we're missing anything. i feel like we're definitely missing something

1: yeah, i think our return statement is going to be... 0 out of seven tests pass

2: um, 

1: oh wait it actually functions properly, it's finding the right things somehow

2: why does this expect one and five

1: oh, that's what i was saying, it expects us to return the indices, not the actual values themselves

2: ah, okay okay. i didn't realize that. [okay so then when we're doing this, we don't do nums i, we just do i. ](./planning_schema.md)

1: right, right

2: right? and then when i return, i guess ill change it, [so this would be i and hash nums i](./planning_schema.md). sorry, i didn't catch that. does that make sense?

1: i think so

2: oh so it does order, so it does matter. um, 

1: what's the last one, the last one is supposed to be the same.

<a href=./planning_schema.md>
2: so i think, if i just reverse it will that work?
1: it'll work for all these tests at least
</a>

2: should i submit?

1: yeah i guess so

30:19 

2: alright, do you want to start?

1: sure, merge arrays... sorted, right? or it's already sorted

2: okay, so is there like a built-in sort function in javascript?

1: not that I'm familiar with. there probably is, there has to be one, but

2: array sort method, yeah. [okay so this probably isn't the most efficient way, but i feel like one simple way would be to concatenate them and then sort the new one. ](./planning_schema.md)

1: yeah we could do that, it sounds fine to me. do we want to do that with what we've got, or else we need a new array

2: yeah. how do you concatenate in javascript. [can you just plus them? and then that'll concatenate them](./planning_schema.md)

1: i don't think you can do that with arrays

2: let me check. okay, [there's a concat method. yeah. so just do this. so just do array one dot concat array two. ](./planning_schema.md)

1: hopefully this has this. alright, what's the sort function

2: it is, just uh

1: just sort?

2: yeah

1: alright. with parentheses or not

<a href=./planning_schema.md>
2: with parentheses. i guess you can just do return arr final dot sort right
1: alright let's see if that works
</a>

2: okay. 

1: six out of seven

2: hm, why did it do that. okay maybe it doesn't, try doing um, okay let's see

1: it's weird how it sorted it. 

2: does... I'm trying to think, i mean it must work

1: otherwise it wouldn't pass size of the tests

2: right, so why doesn't this one pass

1: it might be like, it might be this particular sorting method that specific line?

33:21 

j: okay, so that's time. thanks. we're just going to go ahead and ask you a couple of questions. so first of all, what'd you think?

1: it was interesting, i felt like the actions were a little bit, they were hard to get used to but they weren't that bad, it seemed like there might been a minor bug too where if you copy and pasted code you could like continue making multiple actions and it would let you submit like that as just a single action

2: i thought sort of understanding the rules of how the whole test worked was interesting, because i didn't realize that, i thought there were four actions in total that we could both do, but it turns out it was four actions per turn. so i guess just like that aspect of it was a little challenging

a: what did you guys think of the actual like working together part?

2: i thought it went pretty smooth for the most part

1: i thought so too, i thought there was a lot of like good communication and the fact that you trade off your actions fairly quickly like it forces you to communicate efficiently. 

2: and it's sort of like the interdependence of seeing what cards they have and like trying to utilize their actions fully for each turn.

a: have you guys worked together before, or do you know each other?

1: no

2: no

a: so can you walk through the process of completing the first task?

1: that was the average one, right?

2: what did we do

1: for that one, we would have used a for loop had we had one, but we didn't so we used a while loop to loop through the scores element using a variable to hold how many times we passed through, then we create another variable and used an if statement inside to see, well we created two more variables, one to hold the total scores all added and another tell how many were actually passing scores. and then at the end we just returned total divided by passing scores and if none had passed and it was zero then we just returned zero

a: and did you get that right away?

1: we got the general concept right away. it would have been nice if we had a for loop because then we initially forget we needed to total number variable, because we were like oh wait this i needs to increment every time otherwise it won't work properly, and so then we needed to find this other variable to keep track of it. and then i think we also forgot about the whole returning zero because we tried to return zero over zero. so we needed to run it and see a test case and realize we need to watch out for that. 

a: did you have anything to add?

2: no, that was pretty much it

a: so then what about the process for completing the second task?

2: so we just like, this was a problem like i worked on before, so i was just trying to explain it to robert, so basically use the hash table using the remainder, which is the rage minus the elements of the list that you're currently iterating through, use that as the key and then the value is the index of whatever element you're currently iterating through in the list. but initially like i didn't read the instructions well enough i put the actual numbers in instead of the index so we were returning the numbers instead of the indexes, but yeah that's in general

1: you knew what was happening on that one

a: and did you get that right away

2: almost

1: i felt like the concept was fairly easy to follow but implementing that was a little more difficult

2: because also robert didn't have all the cards we needed at first, so we were trying to work with what cards he had and see like what steps we might need in the future and then do that like during his turn so we wouldn't have to use actions later on. so like that was interesting instead of going through it step by step

a: could you go through an example of thaT?

1: i had a conditional card, for an if statement, so we were like, we're going to need an if statement cards so we just like kind of had me pop that in on my first turn but we didn't know like what our variables were at that point so we just left the condition as like a condition just to remind us to come back and change it

a: as in like you had the condition or was it just empty

1: i just wrote like condition

2: yeah, it was like a skeleton of an if statement

a: cool, and how did you guys use the cards?

2: specifically for that task?

a: for any of the tasks

1: we checked if we had a for loop, and if we didn't we were sad. but yeah generally we looked at each others cards to see if we had the cards that we needed. and then from there we just tried to come up with the best solution we could

2: they were helpful too because they had the example and all the syntax you would need, because if you're not familiar with the syntax of how to intiailize a hash table or something like that, so you can just sort of follow that example

a: so how did you determine if you had the cards that you needed? you mentioned that you were looking at each other's

1: yeah, we generally would come up with an approach as to how we wanted to solve the problem, and then used the cards that we had from there. and if didn't have the cards we needed occasionally we would try to discard cards to find the ones we wanted. 

a: what was difficult about this task?

1: i think ultimately having a limited number of actions, because like you only have so many actions until the deck will run out eventually. it made it so that you didn't have quite so much freedom to mess around with the code as possible. i guess not having cards that you wanted to have was difficult, because then you needed to improvise a solution. 

2: and you sort of have to like think more about each of your actions to make sure like is this action worthwhile or like is this action going to help? because normally if I'm just like writing my first draft of code i don't really care about how many lines I'm using or like how many variables I'm initialize, i just wanna check if it works first, but this one, I'm limited by the number of actions and the cards that i have, so i have to really like think through, what do i want to do and is this a good use of one of my actions

a: how far ahead did you think through?

2: i guess it would depend on if we knew how to solve the problem or not. so for both of these tasks we sort of had the general framework of how we were going to approach the problem and how we were going to solve it, so looking at that you would pretty much look all the way to the end of the problem

1: they weren't very long either, they were generally like ten lines of code

j: so the first problem, you halfway through ran out of cards. how did that make you feel

1: i was a little frustrated, it was a little bit disappointing because that was like the final action, that was the one that like fixed the code so it like properly submitted when the zero was thrown, or when there were no numbers that were given, but then i had to retype the entire thing from scratch. it was a little bit sad but we knew exactly how we wanted to do it, we knew our variable names, we knew like the things we were looking for, it went pretty quick. 

2: i didn't really know why the code like deleted at first, i was a little confused. but then like he was explaining and then i realized we used up all our actions or whatever. so it like reset. like i thought he accidentally deleted all the code

j: did that change at all how you worked in the future?

1: i feel like we were a little more cautious in future challenges, just on the second problem, for that reason. and i think we ended turns a little earlier on the first one, if we wanted to just pass off directly if he had the next cards, but on the second one it seemed like we tried to make the most of our actions

a: for merge arrays, can you talk a little about your process for that?

2: i just sort of like, normally if was doing this i would try to find the most efficient code to run, but like in this scenario i was just thinking about how to get it done as simple as possible, so we just sort of went with the approach of concatenating them and then sorting the concatenated array

1: we didn't know there was a sort function that existed in javascript, he just like did a quick google search and found that

a: you mentioned that you just wanted to get it done, can you elaborate on that?

2: so i was like thinking like under the time constraint, probably the efficiency of the code didn't matter as much as like just completing it, so that kind of changed my mindset on like how to approach the problem