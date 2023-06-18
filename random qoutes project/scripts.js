let button = document.querySelector('.btn')
let container = document.querySelector('.container')
let quoteS = document.querySelector('.quote')
let authors = document.querySelector('.author')

let quotes=[
    {
        quote :'Its never too late to be what you might have been.',
        author : 'George Eliot'
    },
    {
        quote :'We are all broken, thats how the light gets in',
        author : 'Ernest Hemingway'
    },
    {
        quote :'Pain is inevitable. Suffering is optional',
        author : 'Haruki Murakami'
    },
    {
        quote :'Be kind, everyone you meet is fighting a hard battle',
        author : 'Plato'
    },
    {
        quote :'Unable are the loved to die for love is immortality',
        author : 'Emily Dickinson'
    },
    {
        quote :'Life is tough my darling, but so are you',
        author : 'Stephanie Bennet Henry'
    },
    {
        quote :'Amateurs sit and wait for inspiration, the rest of us just wake up and go to work',
        author : 'Stephen King'
    },
    {
        quote :'Self awareness and self-love matter. Who we are is how we lead',
        author : 'Brene Brown'
    },
    {
        quote :"Don't let your happiness depend on something you may loose",
        author : 'C.S Lewis'
    },
    {
        quote :'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment',
        author : 'Ralph Waldo Emerson'
    }

]

button.addEventListener('click', ()=>{
    let randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    quoteS.textContent= randomQuote.quote
    authors.textContent = randomQuote.author
    console.log(quoteS)
})