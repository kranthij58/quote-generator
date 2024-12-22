function quoteGenrate(){
  const quoter = new XMLHttpRequest();
let quote;
quoter.addEventListener('load' , ()=>{
  quote = JSON.parse(quoter.response);
  document.querySelector('.js-quote-box').innerHTML = quote.slip.advice; 
});
quoter.open('GET', 'https://api.adviceslip.com/advice');
quoter.send();
}
document.querySelector('.generate-button').addEventListener('click',()=>{

quoteGenrate();
});
quoteGenrate();