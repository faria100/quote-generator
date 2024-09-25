// variable
let btn=document.querySelector('#new-quote');
let quote= document.querySelector('.quote');
let person=document.querySelector('.person');
const quotes=[{
    quote: `"A person who never made a mistake never tried anything new. "`,
    person:`Albert Einstein`
},{
    quote: `"Great things in business are never done by one person. They're done by a team of people. "`,
    person:`Steve Jobs`
},{
    quote: `"Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth. "`,
    person:`Oscar Wilde`
},{
    quote: `"I have great respect for the past. If you don't know where you've come from, you don't know where you're going. I have respect for the past, but I'm a person of the moment. I'm here, and I do my best to be completely centered at the place I'm at, then I go forward to the next place."`,
    person:`Maya Angelou`
},{
    quote: `"A person often meets his destiny on the road he took to avoid it."`,
    person:`Jean de La Fontaine`
},{
    quote: `"You cannot escape the responsibility of tomorrow by evading it today."`,
    person:`Abraham Lincoln`
},{
    quote: `"It is not in the stars to hold our destiny but in ourselves."`,
    person:`William Shakespeare`
},{
    quote: `"Wanting to be someone else is a waste of the person you are."`,
    person:`Kurt Cobain`
},{
    quote: `"You must be the change you wish to see in the world. "`,
    person:`Mahatma Gandhi`
},{
    quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier. "`,
    person:`Mother Teresa`
},];
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length)
    
    quote.innerText= quotes[random].quote;
    person.innerText= quotes[random].person;
})