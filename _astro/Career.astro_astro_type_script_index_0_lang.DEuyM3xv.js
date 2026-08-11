import{r as e,t}from"./ScrollTrigger.D8WC5s4H.js";e.registerPlugin(t),e.utils.toArray(`.career-card`).forEach(n=>{let r=e.from(n,{scale:.85,opacity:0,y:80,paused:!0}),i=0;t.create({trigger:n,start:`top 95%`,end:`top 65%`,onUpdate:t=>{t.progress>i&&(i=t.progress,e.to(r,{progress:i,duration:.3,overwrite:`auto`}))},onLeaveBack:()=>{i=0,e.set(r,{progress:0})}}),n.querySelectorAll(`.career-number`).forEach(r=>{let i=parseInt(r.getAttribute(`data-target`)||`0`,10),a=String(i).split(``);r.dataset.built||(r.dataset.built=`1`,r.style.cssText=`
                    display: inline-block;
                    position: relative;
                    top: 0.12em;
                    overflow: hidden;
                    height: 1.05em;
                    width: auto;
                    mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
                    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
                `,a.forEach(e=>{let t=document.createElement(`span`);t.className=`drum-wrap`,t.style.cssText=`
                        display: inline-flex;
                        position: relative;
                        height: 1.05em;
                        width: 0.62em;
                        overflow: hidden;
                    `;let n=document.createElement(`span`);n.className=`drum-strip`,n.style.cssText=`
                        display: flex;
                        flex-direction: column;
                        will-change: transform;
                        transform-origin: center;
                    `;let i=10+parseInt(e,10)+1;for(let e=0;e<i;e++){let t=document.createElement(`span`);t.style.cssText=`display: block; height: 1.05em; line-height: 1.05em; text-align: center; flex-shrink: 0;`,t.textContent=String(e%10),n.appendChild(t)}t.appendChild(n),r.appendChild(t)}));let o=()=>{r.querySelectorAll(`.drum-strip`).forEach((t,n)=>{let r=-(10+parseInt(String(i).split(``)[n]||`0`,10)+1-1)*1.05;e.fromTo(t,{y:`0em`},{y:`${r}em`,duration:1.4+n*.15,ease:`power3.out`,delay:n*.06})})};t.create({trigger:n,start:`top 90%`,onEnter:o,onEnterBack:o})})});