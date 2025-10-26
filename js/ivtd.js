/* IVTD: mobile nav + bilingual + RTL + contact form + featured book covers */
(function () {
  const burger  = document.getElementById('ivtdBurger');
  const nav     = document.getElementById('ivtdNav');
  const langBtn = document.getElementById('ivtdLang');
  const yearEl  = document.getElementById('year');
  const form    = document.getElementById('contactForm');
  const status  = document.getElementById('formStatus');

  /* Mobile menu */
  if (burger && nav){
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Year */
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* i18n strings */
  const STR = {
    en: {
      nav_about: "About", nav_vision: "Vision", nav_mission: "Mission", nav_services: "Services", nav_books: "Books", nav_contact: "Contact",
      hero_kicker: "We think differently.",
      hero_title: "Inventions Village Technical Design",
      hero_sub: "Consulting, feasibility & training to turn ideas into real products.",
      hero_cta1: "Explore Services", hero_cta2: "Contact IVTD",

      about_title: "About IVTD",
      about_p1: "Inventions Village Technical Design was founded by Aref Al Awadhi, an activist in inventions and product development, on October 12, 2024, in the Kingdom of Bahrain.",
      about_p2: "Mr. Al Awadhi is an active member and one of the founders of the Bahrain Researchers and Inventors Society (BRAINS). He also helped establish the Electronics Department at the Children’s and Youth Science Center, and has participated in exhibitions, scientific forums, and judging committees.",

      books_title: "Books by Aref Al Awadhi",
      book_1: "The story of electricity and electronics, a journey through the history of the most important inventions.",
      book_2: "How to Become an Inventor.",
      book_3: "Invention: From Idea to Business (published in both Arabic and English).",

      vision_title: "Vision",
      vision_p: "Towards distinguished work in developing and investing in inventions based on creativity and innovation.",

      mission_title: "Mission",
      mission_p: "To strive to invest in inventions and innovations for the general benefit of society.",

      services_title: "Services",
      svc_1_t: "Study technical problems & design solutions",   svc_1_p: "Problem review, constraints mapping, and concept design to create viable technical solutions.",
      svc_2_t: "Feasibility studies (technical, practical, commercial)", svc_2_p: "Assess technical viability, practical implementation, and market/commercial potential.",
      svc_3_t: "Consultations & assistance for inventors",      svc_3_p: "Guidance on development steps, prototyping, and routes to market and partnerships.",
      svc_4_t: "Training courses",                              svc_4_p: "Workshops and programs to build skills for students, innovators, and teams.",

      books_strip_title: "Featured Books",
      /* CHANGED: exact sentence from client */
      book_1_short: "The story of electricity and electronics, a journey through the history of the most important inventions",
      book_2_short: "How to Become an Inventor",
      book_3_short: "Invention: From Idea to Business",
      book_4_short: "Thoughts in Management — Stories and Tales from Real Life",
      book_5_short: "Inventions, from an Idea to a Business",
      book_1_sub: "A curated tour through key breakthroughs\nthat shaped modern technology and everyday life.",
      book_2_sub: "Practical steps, mindsets, and methods\nto develop ideas into real prototypes and products.",
      book_3_sub: "Explains the journey from concept to company,\nwith a note on Bahrain’s role in supporting SMEs.",
      book_4_sub: "Real-world reflections and lessons\nfor leaders, teams, and decision-makers.",
      book_5_sub: "A concise guide to validating, funding,\nand launching invention-driven ventures.",

      contact_title: "Contact",
      contact_linkedin: "LinkedIn Profile",
      contact_phone_label: "Phone/WhatsApp:",
      contact_email_label: "Email:",
      contact_cta: "Email IVTD",
      form_name: "Your name",
      form_email: "Email",
      form_phone: "Phone",
      form_subject: "Subject",
      form_message: "Message",
      form_send: "Send",
      form_ok: "Thanks! Opening your email app…",
      form_err: "Please fill your name, a valid email, and a message.",
      footer_brand: "Inventions Village Technical Design",
      footer_rights: "All rights reserved.",
      next: "AR",
      title: "IVTD — Inventions Village Technical Design",
      font: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      dir: "ltr"
    },

    ar: {
      nav_about: "التعريف", nav_vision: "الرؤية", nav_mission: "الرسالة", nav_services: "الخدمات", nav_books: "الكتب", nav_contact: "تواصل",
      hero_kicker: "نحن نفكر بطريقة مختلفة",

      /* Split hero title across lines to mirror EN visual */
      hero_title: "قرية الاختراعات\nللتصميم الفني",
      hero_sub: "استشارات ودراسات جدوى وتدريب لتحويل الأفكار إلى منتجات حقيقية.",
      hero_cta1: "استكشف الخدمات", hero_cta2: "تواصل مع قرية الاختراعات",

      /* About IVTD heading and paragraph—forced line breaks */
      about_title: "نبذة عن قرية الاختراعات",
      about_p1: "تأسست قرية الاختراعات للتصميم الفني على يد عارف العوضي،\nالناشط في مجال الاختراعات وتطوير المنتجات،\nفي 12 أكتوبر 2024، في مملكة البحرين.",
      about_p2: "الأستاذ عارف العوضي أحد الأعضاء المؤسسين في الجمعية البحرينية\nللباحثين والمخترعين (برينز). كما ساهم في تأسيس قسم الإلكترونيات\nفي مركز العلوم للأطفال والشباب، وشارك في معارض وملتقيات علمية\nولجان تحكيم.",

      books_title: "مؤلفات الأستاذ عارف العوضي",
      book_1: "قصة الكهرباء والإلكترونيات، رحلة عبر التاريخ لأهم الاختراعات.",
      book_2: "كيف تصبح مخترعًا.",
      book_3: "الاختراع: من فكرة إلى تجارة (باللغتين العربية والإنجليزية).",

      vision_title: "الرؤية",
      vision_p: "نحو عمل متميز لتطوير الاختراعات والاستثمار فيها\nيعتمد على الإبداع والابتكار.",

      mission_title: "الرسالة",
      mission_p: "السعي إلى الاستثمار في الاختراعات والابتكارات\nلما يعود بالنفع العام على المجتمع.",

      services_title: "الخدمات",
      svc_1_t: "دراسة المشاكل التقنية وتصميم حلول لها",
      svc_1_p: "مراجعة المشكلة وتحديد القيود وتصميم مفهوم\nلحلول تقنية قابلة للتطبيق.",
      svc_2_t: "دراسات جدوى (فنية وتطبيقية وتجارية)",
      svc_2_p: "تقييم الجدوى الفنية وإمكانية التطبيق\nوالفرص التجارية في السوق.",
      /* CHANGED: forced line break per client */
      svc_3_t: "استشارات ومساعدة\n المخترعين",
      svc_3_p: "إرشاد خطوات التطوير والنمذجة الأولية،\nومسارات الوصول إلى السوق والشراكات.",
      svc_4_t: "دورات تدريبية",
      svc_4_p: "ورش وبرامج لبناء المهارات\nللطلاب والمبتكرين والفرق.",

      books_strip_title: "كتب مختارة",
      book_1_short: "قصة الكهرباء والإلكترونيات، رحلة عبر التاريخ لأهم الاختراعات.",
      book_2_short: "كيف تصبح مخترعًا",
      book_3_short: "الاختراع: من فكرة إلى تجارة",
      book_4_short: "خواطر في الإدارة: قصص وحكايات من واقع الحياة",
      book_5_short: "الاختراعات: من فكرة إلى عمل تجاري",

      book_1_sub: "جولة منتقاة عبر أهم الاكتشافات\nالتي شكّلت التقنية الحديثة وحياتنا اليومية.",
      book_2_sub: "خطوات عملية وعقليات وأساليب\nلتحويل الأفكار إلى نماذج ومنتجات حقيقية.",
      book_3_sub: "يشرح مسار التحول من الفكرة إلى الشركة،\nمع إشارة إلى دور مملكة البحرين في دعم المؤسسات الصغيرة والمتوسطة.",
      book_4_sub: "تأملات واقعية ودروس مستفادة\nلقادة الفرق وصنّاع القرار.",
      book_5_sub: "دليل موجز للتحقق والتمويل\nوإطلاق المشاريع القائمة على الاختراعات.",

      contact_title: "تواصل",
      contact_linkedin: "الملف على لينكدإن",
      contact_phone_label: "هاتف/واتساب:",
      contact_email_label: "البريد الإلكتروني:",
      contact_cta: "راسل قرية الاختراعات",
      form_name: "الاسم",
      form_email: "البريد الإلكتروني",
      form_phone: "الهاتف",
      form_subject: "الموضوع",
      form_message: "الرسالة",
      form_send: "إرسال",
      form_ok: "شكرًا! سيتم فتح تطبيق البريد…",
      form_err: "يرجى تعبئة الاسم وبريد صحيح والرسالة.",
      footer_brand: "قرية الاختراعات للتصميم الفني",
      footer_rights: "جميع الحقوق محفوظة.",
      next: "EN",
      title: "قرية الاختراعات للتصميم الفني",
      font: "Tajawal, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      dir: "rtl"
    }
  };

  const i18nEls = document.querySelectorAll('[data-i18n]');

  /* --- helpers --- */
  function esc(s){
    return s.replace(/[&<>"']/g, m =>
      ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])
    );
  }

  /* Inject one tiny CSS rule once (hard line-break blocks) */
  function ensureLineCSS(){
    if (document.getElementById('ivtd-i-line-css')) return;
    const s = document.createElement('style');
    s.id = 'ivtd-i-line-css';
    s.textContent = '.i-line{display:block}';
    document.head.appendChild(s);
  }

  /* Render text. If contains \n, create block lines for guaranteed breaks */
  function setNodeText(el, str, lang){
    if (typeof str !== 'string') { el.textContent = str; return; }
    if (str.indexOf('\n') !== -1){
      if (lang === 'ar'){         // stronger than <br>: guaranteed hard line split
        ensureLineCSS();
        const html = str.split('\n').map(part => `<span class="i-line">${esc(part)}</span>`).join('');
        el.innerHTML = html;
      } else {
        el.innerHTML = str.split('\n').map(esc).join('<br>');
      }
    }else{
      el.textContent = str;
    }
  }

  function setLang(lang){
    const d = STR[lang] || STR.en;

    document.title = d.title;
    document.body.style.fontFamily = d.font;

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', d.dir || 'ltr');
    document.body.classList.toggle('rtl', (d.dir === 'rtl'));

    /* Update all data-i18n nodes */
    i18nEls.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(d, key)) {
        setNodeText(el, d[key], lang);
      }
    });

    if (langBtn) langBtn.textContent = d.next;

    // --- Featured books: support BOTH legacy .bk-cover and new <img.bk-img> ---
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
      const relPath = book.getAttribute('data-img') || '';
      if (!relPath) return;

      // Legacy DIV cover (kept for backward compatibility)
      const coverDiv = book.querySelector('.bk-cover');
      if (coverDiv){
        const url = encodeURI(relPath);
        coverDiv.style.backgroundImage = `url("${url}")`;
        coverDiv.style.backgroundSize = 'cover';
        coverDiv.style.backgroundPosition = 'center';
        coverDiv.style.backgroundRepeat = 'no-repeat';
      }

      // New IMG cover (current implementation)
      const imgEl = book.querySelector('img.bk-img');
      if (imgEl){
        const url = encodeURI(relPath);
        if (imgEl.getAttribute('src') !== url) imgEl.setAttribute('src', url);
        imgEl.setAttribute('loading', 'lazy');
        if (!imgEl.getAttribute('alt')){
          const lbl = book.getAttribute('aria-label') || 'Book';
          imgEl.setAttribute('alt', lbl + ' cover');
        }
      }
    });
    // --- end featured books mapping ---

    try{ localStorage.setItem('ivtd_lang', lang); }catch(e){}
  }

  setLang(localStorage.getItem('ivtd_lang') || 'en');

  if (langBtn){
    langBtn.addEventListener('click', () => {
      const current = localStorage.getItem('ivtd_lang') || 'en';
      setLang(current === 'en' ? 'ar' : 'en');
    });
  }

  /* Contact form — mailto fallback */
  if (form && status){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name')||'').toString().trim();
      const email = (data.get('email')||'').toString().trim();
      const phone = (data.get('phone')||'').toString().trim();
      const subject = (data.get('subject')||'').toString().trim() || 'Website Inquiry';
      const message = (data.get('message')||'').toString().trim();

      const lang = localStorage.getItem('ivtd_lang') || 'en';
      const d = STR[lang];

      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!name || !emailOk || !message){
        status.textContent = d.form_err;
        status.style.color = '#b3261e';
        return;
      }

      const lines = [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : '',
        '',
        message
      ].filter(Boolean).join('\n');

      const mailto = `mailto:aref@inventionsvillage.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
      status.textContent = d.form_ok;
      status.style.color = '#2e7d32';

      window.location.href = mailto;
      form.reset();
    });
  }
})();


// cursor ring (kept)
window.addEventListener('pointermove', e => {
  document.documentElement.style.setProperty('--mx', e.clientX + 'px');
  document.documentElement.style.setProperty('--my', e.clientY + 'px');
});






/* ==============================
   Three.js Background — Apple-Light
   Soft Siri colors on WHITE, masked to hero only
============================== */
(function threeBG(){
  const DISABLE_3D = false;
  if (DISABLE_3D) return;

  const can = document.createElement('canvas');
  if (!(can.getContext('webgl') || can.getContext('experimental-webgl'))) return;

  // Fade out a little below the hero section
  function heroMask(){
    const hero = document.querySelector('.ivtd-hero');
    const h = hero ? hero.getBoundingClientRect().height : 520;
    const keep = Math.max(0, h - 60);
    const fade = Math.min(160, Math.max(100, h * 0.28));
    return `linear-gradient(180deg,#000 0,#000 ${keep}px,transparent ${keep+fade}px)`;
  }

  const moduleCode = (cdn) => `
    import * as THREE from "${cdn}/three@0.160.0/build/three.module.js";

    const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true, powerPreference:"high-performance" });
    renderer.setPixelRatio(Math.min(devicePixelRatio||1, 2));
    renderer.setSize(innerWidth, innerHeight, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    const el = renderer.domElement;
    el.id = "ivtdBG";
    Object.assign(el.style, {
      position:"fixed", inset:"0", width:"100%", height:"100%",
      zIndex:"0", pointerEvents:"none", display:"block",
      WebkitMaskImage: ${JSON.stringify(heroMask())},
      maskImage: ${JSON.stringify(heroMask())}
    });
    document.body.prepend(el);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, innerWidth/innerHeight, 0.1, 200);
    camera.position.set(0, 1.05, 8);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const key = new THREE.PointLight(0xffffff, 0.6, 60); 
    key.position.set(0, 3, -2); 
    scene.add(key);

    function radialTexture(size=256){
      const c = document.createElement('canvas'); c.width=c.height=size;
      const g = c.getContext('2d');
      const grd = g.createRadialGradient(size/2,size/2,0,size/2,size/2,size/2);
      grd.addColorStop(0,'rgba(255,255,255,1)');
      grd.addColorStop(1,'rgba(255,255,255,0)');
      g.fillStyle = grd; g.fillRect(0,0,size,size);
      return new THREE.CanvasTexture(c);
    }
    const spriteTex = radialTexture(256);

    function glow(hex, size, x,y,z, opacity=.28){
      const mat = new THREE.SpriteMaterial({
        map: spriteTex, color: hex, transparent:true, opacity,
        blending: THREE.AdditiveBlending, depthWrite:false
      });
      const s = new THREE.Sprite(mat); s.scale.set(size,size,1); s.position.set(x,y,z);
      return s;
    }

    // Siri pastel glows
    const glowL = glow(0x8e5cff, 7.2, -2.6, 0.55, -2.2, 0.30);
    const glowC = glow(0x3aa4ff, 5.6,  0.3,  0.95, -3.4, 0.22);
    const glowR = glow(0xff5cd2, 6.6,  2.7,  0.75, -3.0, 0.24);
    scene.add(glowL, glowC, glowR);

    // subtle beams
    function beam(hex, w,h, rot, x,y,z, alpha=.10){
      const mat = new THREE.MeshBasicMaterial({
        map: spriteTex, color: hex, transparent:true, opacity:alpha,
        blending: THREE.AdditiveBlending, depthWrite:false
      });
      const geo = new THREE.PlaneGeometry(w,h);
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x,y,z); m.rotation.z = rot;
      return m;
    }
    const beamL = beam(0x7fb2ff, 6.0, 10.0,  0.40, -3.5, -1.0, -4.6, 0.10);
    const beamR = beam(0xff8adf, 5.2,  9.2, -0.34,  3.2, -1.0, -4.2, 0.09);
    scene.add(beamL, beamR);

    // fine particles
    const particles = new THREE.Group(); scene.add(particles);
    const COUNT = (innerWidth < 768 ? 60 : 110);
    for (let i=0;i<COUNT;i++){
      const s = glow(0xffffff, THREE.MathUtils.randFloat(0.10,0.28),
                     THREE.MathUtils.randFloat(-5,5),
                     THREE.MathUtils.randFloat(-1.5,2.5),
                     THREE.MathUtils.randFloat(-5.5,-3.2),
                     0.08);
      particles.add(s);
      s.userData.vy = THREE.MathUtils.randFloat(0.02, 0.06);
      s.userData.vx = THREE.MathUtils.randFloatSpread(0.02);
    }

    function resize(){
      renderer.setSize(innerWidth, innerHeight, false);
      camera.aspect = innerWidth/innerHeight;
      camera.updateProjectionMatrix();
    }
    resize();
    addEventListener('resize', resize);

    const target = new THREE.Vector2(0,0);
    addEventListener('pointermove', e=>{
      target.set((e.clientX/innerWidth)*2-1, (e.clientY/innerHeight)*2-1);
    });

    let tPrev = performance.now();
    function tick(now=performance.now()){
      const dt = Math.min(0.05, (now - tPrev)/1000);
      tPrev = now;
      const t = now * 0.001;

      glowL.position.x  = -2.6 + Math.sin(t*0.40)*0.22 + target.x*0.10;
      glowC.position.y  =  0.95 + Math.sin(t*0.55)*0.18 + target.y*0.06;
      glowR.position.x  =  2.7  + Math.cos(t*0.36)*0.20 + target.x*0.08;

      beamL.rotation.z =  0.40 + Math.sin(t*0.10)*0.03;
      beamR.rotation.z = -0.34 + Math.cos(t*0.09)*0.03;

      for (const s of particles.children){
        s.position.y += s.userData.vy * dt;
        s.position.x += s.userData.vx * dt;
        if (s.position.y > 3.2) s.position.y = -1.8;
      }

      camera.position.x += (target.x*0.55 - camera.position.x)*0.035;
      camera.position.y += (-target.y*0.22 + 1.05 - camera.position.y)*0.035;
      camera.lookAt(0,0.2,0);

      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    // allow host to refresh mask on hero resize
    window.__ivtdSetBGMask = (css) => { el.style.WebkitMaskImage = css; el.style.maskImage = css; };
  `;

  function load(which){
    return new Promise((res, rej)=>{
      const s = document.createElement('script');
      s.type = 'module';
      s.textContent = moduleCode(which === 'unpkg' ? 'https://unpkg.com' : 'https://cdn.jsdelivr.net/npm');
      s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }

  load('jsdelivr').catch(()=>load('unpkg')).then(()=>{
    const applyMask = () => { if (window.__ivtdSetBGMask) window.__ivtdSetBGMask(heroMask()); };
    applyMask();
    addEventListener('resize', applyMask);
    const hero = document.querySelector('.ivtd-hero');
    if (hero && 'ResizeObserver' in window){
      const ro = new ResizeObserver(applyMask);
      ro.observe(hero);
    }
  }).catch(()=> console.warn('[IVTD] 3D background disabled; falling back to CSS.'));
})();

