import{r as e,t}from"./ScrollTrigger.D8WC5s4H.js";e.registerPlugin(t);var n=e.timeline({scrollTrigger:{trigger:`#DevelopmentTime`,start:`top 80%`,toggleActions:`restart none none reset`}});n.to(`.dev-time-tag`,{opacity:1,y:0,duration:.6,ease:`power3.out`}),n.to(`.dev-time-title-1`,{opacity:1,y:0,duration:.9,ease:`power3.out`},`-=0.35`);var r=e=>{let t=parseInt(e.getAttribute(`data-target`)||`0`,10),n=String(t).split(``);e.dataset.built||(e.dataset.built=`1`,e.style.cssText=`
                display: inline-block;
                position: relative;
                top: 0.12em;
                overflow: hidden;
                height: 1.05em;
                width: auto;
                mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
                -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
            `,n.forEach(t=>{let n=document.createElement(`span`);n.className=`drum-wrap`,n.style.cssText=`
                    display: inline-flex;
                    position: relative;
                    height: 1.05em;
                    width: 0.62em;
                    overflow: hidden;
                `;let r=document.createElement(`span`);r.className=`drum-strip`,r.style.cssText=`
                    display: flex;
                    flex-direction: column;
                    will-change: transform;
                `;let i=10+parseInt(t,10)+1;for(let e=0;e<i;e++){let t=document.createElement(`span`);t.style.cssText=`display: block; height: 1.05em; line-height: 1.05em; text-align: center; flex-shrink: 0;`,t.textContent=String(e%10),r.appendChild(t)}n.appendChild(r),e.appendChild(n)}))},i=t=>{let n=parseInt(t.getAttribute(`data-target`)||`0`,10);t.querySelectorAll(`.drum-strip`).forEach((t,r)=>{let i=-(10+parseInt(String(n).split(``)[r]||`0`,10)+1-1)*1.05;e.fromTo(t,{y:`0em`},{y:`${i}em`,duration:1.4+r*.15,ease:`power3.out`,delay:.3+r*.08})})};document.querySelectorAll(`.devtime-number`).forEach(r),t.create({trigger:`#DevelopmentTime`,start:`top 85%`,onEnter:()=>document.querySelectorAll(`.devtime-number`).forEach(i),onEnterBack:()=>document.querySelectorAll(`.devtime-number`).forEach(i)}),n.to(`.dev-time-title-2`,{opacity:1,y:0,duration:.9,ease:`power3.out`},`-=0.65`),n.to(`.dev-time-line`,{opacity:1,scaleX:1,duration:.8,ease:`power2.out`},`-=0.55`);