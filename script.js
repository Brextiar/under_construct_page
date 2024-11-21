const lang = window.navigator.language;

const h1 = document.getElementById('h1');
const p11 = document.getElementById('p1');
const p22 = document.getElementById('p2');
const p33 = document.getElementById('p3');
const p44 = document.getElementById('p4');
const p55 = document.getElementById('p5');
const tel = document.getElementById('tel');
const mail = document.getElementById('mail');

fetch('./data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch(e => {
    console.log(e.message);
  })
  .then(data => {
    tel.innerText = data[0].tel.replaceAll(" ", ".");
    tel.href = `tel:${data[0].tel}`;
    mail.innerText = data[0].mail;
    mail.href = `mailto:${data[0].mail}`;

    if (lang !== 'fr-FR' && lang !== 'fr' && lang !== 'FR') {
      h1.innerText = data[0].en.h1;
      p11.innerText = data[0].en.p1;
      p22.innerText = data[0].en.p2;
      p33.innerText = data[0].en.p3;
      p44.innerText = data[0].en.p4;
      p55.innerText = data[0].en.p5;
      console.log(data[0].en);
    }
  });
