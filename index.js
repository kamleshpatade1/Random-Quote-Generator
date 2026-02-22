const quotes =["A rose by any other name would smell as sweet",
    "All that glitters is not gold",
    "All the world's a stage, and all the men and women merely players",
    "For those to whom much is given, much is required",
    "Genius is one percent inspiration and ninety-nine percent perspiration",
    "Sometimes good things fall apart so better things can fall together",
    "Don't think of Cost, Think of Value!",
    "Sometimes you need to distance yourself to see things clearly",
    "Recognizing that you are not where you want to be is a starting point to begin changing your life",
    "Change is made of choices, and choices are made of character",
    "Tradition is nothing but ancestral peer pressure",
    "Everyone you will ever meet knows something you don't",
    "Success is not final, failure is not fatal: it is the courage to continue that counts",
    "It is hard to fail but it is worse never to have tried to succeed",
    "Never bend your head. Always hold it high. Look the world straight in the eye",
    "You can't blame gravity for falling in love",
    "A room without books is like a body without a soul",
    "If you tell the truth, you don't have to remember anything",
    "Always forgive your enemies; nothing annoys them so much",
    "Live as if you were to die tomorrow. Learn as if you were to live forever"
]

const button = document.getElementById("btn");
const quote = document.querySelector('h1')
button.addEventListener("click", ()=>{
    const index = Math.floor(Math.random()*20); 
    quote.textContent = quotes[index]
})