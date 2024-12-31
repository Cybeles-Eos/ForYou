const mainsite = document.getElementsByTagName('main')[0];
const backgroud = document.querySelector('.back');
const bear = document.querySelector('.bear');
const fw1 = document.querySelector('.fw1');
const fw2 = document.querySelector('.fw2');

const hpnyPage = document.querySelector('.hpny');
const hor = document.querySelector('.hor');
const hpnytexts = document.querySelector('.hpnytexts');
const scream = document.getElementById('scream');

let val = 1;
mainsite.style.opacity = val;


mainsite.addEventListener('click', ()=>{
   val -= .1;
   mainsite.style.opacity = val;

   if(val <= 0){
      console.log('Value = 0')
      mainsite.style.display = 'none';
      hpnyPage.style.display = 'block';
      setTimeout(()=>{
         hor.style.display = 'block'
         // scream.play();
         // scream.volume = .7;
      }, 500);
      setTimeout(()=>{
         hor.style.display = 'none'
         // scream.pause();
         // scream.volume = 0;
         hpnytexts.style.display = 'flex'
      }, 1300);

   }
});





