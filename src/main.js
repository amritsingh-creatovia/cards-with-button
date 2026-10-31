
import { createEle } from "../components/CreateElements";

const d = document;
const app = d.getElementById('app');

// create Element 


const header = createEle('DIV', 'header');
const messageBlock = createEle('DIV', 'message-block');


app.appendChild(messageBlock);

const contentText = ['Delta', 'Culta', 'Belta', 'Malta', 'demo', 'rego', 'culmo', 'regiew'];
const contentTextNum = contentText.length;


for (let i = 0; i <= contentTextNum - 1; i++) {
  const textBlock = createEle('DIV', 'text-block');
  const mBlockDIV = createEle('DIV', 'block' + i);
  const btn = createEle('BUTTON', 'click-btn');
  btn.innerHTML = 'Click';
  mBlockDIV.appendChild(textBlock);
  mBlockDIV.appendChild(btn);
  mBlockDIV.classList.add('single-block');
  textBlock.innerHTML = contentText[i];
  messageBlock.appendChild(mBlockDIV);

  btn.addEventListener('click', function () {
    if (this.parentElement.classList.contains('clicked')) {
      this.parentElement.classList.remove('clicked');
      this.innerHTML = 'Click';
    } else {
      this.parentElement.classList.add('clicked');
      this.innerHTML = 'Clicked';
    }
  });

};


app.appendChild(messageBlock); 
