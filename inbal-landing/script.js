// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

/* ========= Testimonials Carousel ========= */
const testimonials = [
  { name: "שירלי ל.", stars: 5, text: "ענבל מקצועית ברמות! העור נראה זוהר כבר מהטיפול הראשון." },
  { name: "הילה מ.", stars: 5, text: "הטיפול ב-Venus Versa שדרג לי את המרקם משמעותית. מומלץ!" },
  { name: "דנה ק.", stars: 4, text: "אבחון מעמיק, יחס אישי וחם. חוזרת שוב." },
  { name: "מורן ס.", stars: 5, text: "חווית שירות מדהימה ותוצאות מצוינות. תודה ענבל!" }
];

let tIndex = 0;
const tText = document.getElementById('tText');
const tName = document.getElementById('tName');
const tStars = document.getElementById('tStars');
const dotsWrap = document.getElementById('tDots');

function renderTestimonial(idx){
  const t = testimonials[idx];
  tText.textContent = `“${t.text}”`;
  tName.textContent = t.name;
  tStars.textContent = "★".repeat(t.stars) + "☆".repeat(5 - t.stars);
  [...dotsWrap.children].forEach((d,i)=>d.classList.toggle('active', i === idx));
}

function buildDots(){
  dotsWrap.innerHTML = '';
  testimonials.forEach((_, i)=>{
    const dot = document.createElement('button');
    dot.className = 't-dot';
    dot.setAttribute('aria-label', `חוות דעת ${i+1}`);
    dot.addEventListener('click', ()=>{ tIndex = i; renderTestimonial(tIndex); resetAuto(); });
    dotsWrap.appendChild(dot);
  });
}

buildDots();
renderTestimonial(tIndex);

document.querySelector('.t-btn.prev').addEventListener('click', ()=>{
  tIndex = (tIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonial(tIndex); resetAuto();
});
document.querySelector('.t-btn.next').addEventListener('click', ()=>{
  tIndex = (tIndex + 1) % testimonials.length;
  renderTestimonial(tIndex); resetAuto();
});

let auto = setInterval(()=> {
  tIndex = (tIndex + 1) % testimonials.length;
  renderTestimonial(tIndex);
}, 5000);

function resetAuto(){
  clearInterval(auto);
  auto = setInterval(()=> {
    tIndex = (tIndex + 1) % testimonials.length;
    renderTestimonial(tIndex);
  }, 5000);
}

/* ========= Notes =========
1) Images:
   - Put your files in /assets:
     * logo-inbal.png
     * inbal.jpg
2) WhatsApp:
   - Already set to +972545576117.
3) Map:
   - Embedded for: נווה זיו, דרך הפרק 13
=================================== */
