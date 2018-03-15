1: so scores array of dimensions. so let's see. first what [i would do is make a new array, right](./planning_schema.md)

2: yeah, how do you, what's the syntax for javascript again

1: just, like regular

2: square brackets. is that the correct syntax for...

1: sorry, what did you just do?

2: so you just do var and then

1: oh okay right yeah, my bad. just like a regular

2: um passing scores right

1: right, yeah

2: and then for loops are just like C++. var x, yeah. so i plus plus. if score greater than or equal to 70

1: i don't think there's a parentheses

2: oh right

1: is it append or dot add?

<a href=../hetero_explanation_schema.md>
2: oh shi- wait yeah yeah. [okay so we increase the variable. alright so you push something and then you add up...](./planning_schema.md) i guess you don't need a new one right?
1: um
2: [i guess you could just do passing scores total, right](./planning_schema.md)
1: oh yeah yeah
</a>

2: scores at i

1: [then return answer](./planning_schema.md)

~RUNS CODE FOR AVERAGE PASSING SCORE #1

2: oh did average it

1: yeah, [return the average, that's what I'm doing now](./planning_schema.md)

2: oh, okay. yeah, so scores dot length. i think [unintelligible]. maybe it's the plus plus. i can just do plus equals one. that's a syntax error

~RUNS CODE FOR AVERAGE PASSING SCORE #2

1: oh, for var

~RUNS CODE FOR AVERAGE PASSING SCORE #3

2: okay, so there's one edge case where there's nothing here right

1: yeah

2: oh if there are no passing scores. oh okay i see. oh wait. passing scores dot. so it's an edge case over here. 

~RUNS CODE FOR AVERAGE PASSING SCORE #4

1: oh it's not an array anymore

2: oh whoops.

~RUNS CODE FOR AVERAGE PASSING SCORE #5

2: so scores. or we could just do number of passes

~RUNS CODE FOR AVERAGE PASSING SCORE #6

1: we just passed all the tests 

2: [unintelligible] submit. [unintelligible]. alright so array two sum, do you want to do this one

SUBMITS CODE FOR AVERAGE PASSING SCORE
1: yeah, sure. 

2: this is like a leetcode question

1: yeah

2: do you remember this

1: yeah, i think the solution was to start at either end and then in the middle, so you have like... 

2: divide by two?

1: yeah, yeah. 

2: we can assume for two sum, or, am i allowed to ask questions?

j: i won't answer questions about the problem

2: okay, never mind. 

1: so that's like uh, target...

2: we could do like the really inefficient method

[unintelligible]

1: oh, [so two for loops?](./planning_schema.md)

2: yeah

1: oh, that's terrible. um for var i equals 0

2: oh it's a semicolon, not a comma

1: oh is it. yeah. let's see if it'll [unintelligible]. i plus plus. shameful. oh wait. oh. yeah it's the same thing. 

2: or actually int first. at i right

1: if, uh... 

2: [oh yeah i guess you don't need the item variable. equals equals target yeah. you're returning the indices. so just return i and j as an array. yeah. [unintelligible]. right? yeah because we had extra parentheses here i think. we had one here.](../hetero_explanation_schema.md, ./planning_schema.md) [unintelligible]. oh, there's no finishing parentheses. it's spelled right. [so this is when the last one right. one. oh so j has to start at one after i think. because you don't want to go to the ones before him](./planning_schema.md, ../hetero_explanation_schema.md)

1: yeah

2: it's some garbage code but... merge arrays. one set of array then

1: oh so we're just merging

2: [the obvious thing to do would be to have two index counters for each one array. when you find the smaller one you just increment the index.](./planning_schema.md) is there a better way to do this?

1: not off the top of my head

<a href=../hetero_explanation_schema.md>
2: [unless you just want to put the two in one array and then sort it.](./planning_schema.md) is that faster? because if you, well it depends on what sort method you use, but if you just do index counters i think at worst it's, what's the worst time complexity. it's like they're all alternating because they're going to be sorted no matter what
</a>

1: yeah

2: but it's just like the length of one plus the length of the other

1: im not sure. 

2: let's see. so index one equals zero. var index two equals zero. and then let's see. so var ... 

1: the array to return

2: so let's see, the order doesn't matter right. i mean yeah it doesn't really matter

1: the order for what

<a href=./planning_schema.md>
2: so like there's a two in array one and a two in array two, it doesn't really matter. so let's see. so while next one is less than array one dot length, right. and next two is less than array two dot length. 
1: this is assuming they're like the same length right
2: [i don't think so because once this while loop ends, then assuming our output is correct, then we know that the remaining numbers in the other array will all be greater than anything else so we can just add it to everything else right](../hetero_explanation_schema.md)
</a>

1: oh okay. wait so like in the while loop are we like, okay so [we're just going to add the rest afterwards](./planning_schema.md)

2: yeah, so let's see. so if array one at index one is greater than or equal to, no it's less than or equal to right

1: i think you can do either way

2: at index two, fuck. then you would add it to array one. or answer, not array one. dot push. is that it

1: yeah

2: [array one int next one. then you would increment index one. the other way is, the other way you just do the opposite right, so](./planning_schema.md)

1: yeah

2: let's see, and then. how do you wanna handle the case where their lengths are different. so one is going to be different. how do we wanna tell when the length is finished. 

1: [we could... we could delete... we could just pop numbers off each array](./planning_schema.md)

2: oh yeah. that works, yeah

1: and then, yeah, whoevers length is longer— 

2: so pop takes away the first one right

1: i think so. remove the last element

2: no you can still remove it. like what's the thing for removing at index

1: um... slice... wait can i see something? index... [unintelligible]

2: i think what you can do is instead of just— 

1: oh [we need to use shift](./planning_schema.md)

2: shift?

1: yeah, [removes the first element](../hetero_explanation_schema.md)

2: okay. shift at index 1 right

1: yeah. or i don't think we need to give it an argument at all

2: oh, okay. i see. [so then the other one is just the second one and then. so if. can make this a while loop? so this one goes to this, no this one goes to this, this one goes to this and yeah. so now uh let's see. since, so we want to check which one's done. like which loop finished](./planning_schema.md)

1: i guess first you check length?

2: yeah you could just see if index one 

1: [or check the lengths for zero first and then return and then else.](./planning_schema.md) or you could do

2: no, [because one's always going to finish before the other so there's always going to be one inside. so if r1 dot length equals zero then we know that we need to add the rest of r2, right](../hetero_explanation_schema.md)

1: yeah

2: so what's the thing for

1: push

2: no but how do you push like an entire sub...

1: oh okay

2: there's a way to do it, like you just start at one index

1: there's probably... 

2: answer dot push

1: you can do concat

2: alright, then merge to or more arrays

1: [so you do answer dot concat](./planning_schema.md)

2: it's like in order right

1: yeah yeah yeah

2: so it's like one and then two? okay so concat r2\. concat, my bad. and then yeah we can just return that right

1: yeah

2: the other one is, just did it for r2\. what's the error, okay. unexpected token. do you see anything. okay this one goes with this one, this one goes with this one. this one finished a while loop. let's see. do you see my syntax error

1: i don't see it

2: this one r1 dot length. [we could try commenting it out and the going through line by line.](./planning_schema.md) fuck

1: um so 

2: next one, so this first parentheses goes with the end of the while loop, conditional, this is the while loop it goes with this. this is the first if in the while loop, this goes with this, this is the else, this. unexpected token, what?

1: try running it again.

2: yeah, yeah it's definitely a syntax error

1: yeah

2: index one

1: are you missing a semicolon anywhere

2: i dont think so. [maybe i just do, because i know some languages have like this problem. i don't think that's it, but. do i have space here? no?](../hetero_explanation_schema.md)

1: does it matter if that's lined up

2: i mean it looks pretty bad right now but the code does work. so let's go through it exactly. this is definitely correct, this is definitely correct, this is definitely correct. this, so index one, this should be correct right? there's nothing about it that's different than any other while loop

1: yeah that's right

2: less than r2 dot length. and they are arrays. if r1 at index one. hm. no, okay. i don't see a problem. i don't know what to to do. [should we console dot log just to see how long we go until. ](./planning_schema.md)

1: yeah

2: so first inner loop. does it show

1: oh it's not going to print

2: [what happens when you put it here. put it here, ](./planning_schema.md) okay so it just doesn't print. one, two, three, two, three, two, three, three

1: oh the bottom

2: oh my god

1: just remove that

2: yeah. okay. still an error. so negative one, negative one, zero

1: oh, it's not repeating

2: what do you mean

1: so there's twos in both and it's just taking one of the twos. 

2: no, no, you're supposed to repeat

1: yeah, i know, but what it got is what

2: what's the issue here, alright so let's see. [we can just do console dot log answer](./planning_schema.md), right

1: yeah

2: do you see where the error might be

1: so i think when the

2: alright so the first two steps are the same, and then, so one, two, somewhere that we passed, oh it doesn't show the ones we do pass right

1: i think instead of doing less than or equal to, [we should have one where it's both equal to and then we just push both from both arrays, since i think what this is doing, like, it's only pushing one and then it increments the index](./planning_schema.md, ../hetero_explanation_schema.md)

<a href=../hetero_explanation_schema.md>
2: yeah but i dont think that would affect the other array then, right. so one, two, three, no but it should be going one, two two. so it goes here, right, it shifts, oh no no oh i see. so three is bigger than two, not [but then you should push the first one at array 2.](./planning_schema.md)
1: oh yeah
2: because this doesn't pass. 
</a>

2: so what's the issue here. next one, plus equals one. what is it right here. it should be, the next two should be zero at this point, like the first time we run two, at index two. so the second time, it's adding the two from array 2, right

1: mhm

2: but it should still be adding the first one, i mean the second one, from array 1\. so it shift— oh. oh my god. [we're not supposed to increment this. because when you shift it you remove it. so you're skipping one. there we go. linear?](./planning_schema.md, ../hetero_explanation_schema.md)

1: yeah

2: okay. the best solution

1: oh, yeah. 

2: single linear pass. hm. so like the outer loop would be for each number within the inner loop, um, so the obvious solution is [for each number in the inner loop you check to see if it's in the outer loop. ](./planning_schema.md) is there a function that just returns whether a function is inside a loop? or like loop dot contain, or not a loop, like an array? like array dot contains, something?

1: uh, includes

2: it's array dot prototype though, what is that

1: i don't know actually

2: are those libraries? oh

1: yeah

2: [i guess what you can do instead is, since you know it's in order, like it goes to three right, and then for outer you know that three is at index one, and then you keep that index, so like next time when it goes to five it only checks the numbers in outer that are after index one](./planning_schema.md, ../hetero_explanation_schema.md)

1: okay

2: so do like, outer indexing. 

1: zero

2: is there a for each loop in javascript. for each loop. is this legacy? alright that's fine. let's see

1: oh look at that

2: because i don't think it's n squared anymore. so [var j can start off at outer index right.](./planning_schema.md) j is less than...

1: is that not how you set it

2: i think it is, it's like to in, oh no, it's been too long

1: alright so you start at outer index, first time you run it through it'll be at zero. j is less than outer dot length, j plus plus, and then, oh wait, [actually we don't need another number because we can just check at i](./planning_schema.md, ../hetero_explanation_schema.md)

31:05 

j: okay, that's time. could you go ahead and submit that really quickly and so we just have a couple questions to ask you. do you two know each other? have you worked together before?

1: no

2: no

a: so what'd you guys think?

1: it was fun

2: yeah, very leetcode-y

a: so what was your approach for the first task

1: that was like the average one right. so i think since we didn't have a lot of experience working with a partner for coding, like my approach was just to go through on my own and i just trusted christian to like stop me if he saw any errors

a: so when you say go through on your own, do you mean in your head or aloud, or anything

1: kind of, kind of both

a: what about you?

2: well i saw that he was taking the lead already so i was just like ill just check his code, make sure if i can optimize it in any way then ill do that

a: so in terms of the strategy that you took for this approach, if you were to think back, which strategy, if any, do you think you took?

1: like overall on this challenge?

a: for the first question

1: oh like if we could go back and change it?

a: no, like what do you think that you did do as you were working together to complete the task

2: i guess i kind of went through it, and i thought he and i might have a different thought process, like we probably name variables differently, so i just went through my thought process out loud because it helps me concentrate first of all and it also helps him understand it better

1: yeah so like he just made it easier to follow along, and i was doing a lot of looking for syntax, javascript syntax to help him out and like functions and that kind of stuff

2: and later on, i think we captured a syntax error at first, so we kind of just went through it, looked for like any additional parentheses or additional brackets. after that, i think there were a few edge cases that we missed, so we just decided to go through it [unintelligible]

a: so after you guys ran code and it passed, what did you guys do next

2: we just went to the next question

a: and then, what was your approach for the second task

1: i think we just brute forced that. we were trying to remember the algorithm, because I've done that problem, it's a very common problem so just trying to remember the algorithm but we couldn't remember it so we just kind of brute forced it with two for loops and we both thought it was really bad but it was the easiest way that we thought of

a: so if you were to dive into the process of actually implementing it, could you elaborate on that

1: like the actual solution?

a: just the steps that you guys took

1: i think both of us were looking, or at least i was looking to approach it like coming from both ends of the arrays, so i was trying to, i guess optimize it the best

2: yeah and i was alright it's just do it

1: so i guess that was where we clashed, and i was just like okay fine, we'll do it the brute force way instead, so like i think that problem was just a matter of like finishing it instead of trying to optimize

2: yeah so i saw him trying to implement the both ends thing and i don't think I've ever seen that before because the solution i saw on leetcode was like hash table or something so i never recognized it so i thought this might be a bit risky because if it doesn't turn out to work then we basically wasted some time. so i just decided it would be best for us to go with the solution that the both of us knew pretty familiarly, which was the double loop one. 

a: how did you approach using the pair programming method

2: we took turns mostly, like for each problem one person took the lead and the other person was mostly the helper. so whenever i was coding, he was always on his computer looking up syntax or function names because i don't think either of us are that familiar with javascript syntax. when he was coding, i think i was mostly looking over his code because we were on my computer. 

a: so when he was coding and using your computer, what was your role in this scenario?

1: i think he was processing most of the logic, for the most part

2: yeah i was just seeing, if i were doing this on my own, would i agree with him, and in general we had the same thought process

a: and how often did you guys switch

1: every problem

j: was there anything difficult about working in this way

1: not really, i think it's just the time constraint that kind of just rushed us

2: yeah i agree, i feel like we didn't need to brute force two sum, i just thought it would be better if we went with a method that both of us knew instead of one that one of us knew kind of

a: why did you feel that you had to work quickly

1: i don't know, i just felt like we were supposed to complete all the questions as fast as possible

2: yeah, i got that impression as well, and i have class at two so

38:09