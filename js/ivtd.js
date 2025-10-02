/* IVTD: mobile nav + full-page bilingual toggle + contact form (mailto fallback) */
(function () {
  const burger = document.getElementById('ivtdBurger');
  const nav    = document.getElementById('ivtdNav');
  const langBtn = document.getElementById('ivtdLang');
  const yearEl = document.getElementById('year');
  const form   = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

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

  /* Language strings */
  const STR = {
    en: {
      // Nav
      nav_about: "About", nav_vision: "Vision", nav_mission: "Mission", nav_services: "Services", nav_books: "Books", nav_contact: "Contact",
      // Hero
      hero_kicker: "Inventing better solutions",
      hero_title: "Inventions Village Technical Design",
      hero_sub: "Consulting, feasibility & training to turn ideas into real products.",
      hero_cta1: "Explore Services", hero_cta2: "Contact IVTD",
      // About
      about_title: "About IVTD",
      about_p1: "Inventions Village Technical Design was founded by Aref Al Awadhi, an activist in inventions and product development, on October 12, 2024, in the Kingdom of Bahrain.",
      about_p2: "Mr. Al Awadhi is an active member and one of the founders of the Bahrain Researchers and Inventors Society (BRAINS). He also helped establish the Electronics Department at the Children’s and Youth Science Center, and has participated in exhibitions, scientific forums, and judging committees.",
      // Books
      books_title: "Books by Aref Al Awadhi",
      book_1: "The Story of Electricity and Electronics: A Journey Through the History of Key Inventions.",
      book_2: "How to Become an Inventor.",
      book_3: "Invention: From Idea to Business (published in both Arabic and English).",
      // Vision / Mission
      vision_title: "Vision", vision_p: "Towards distinguished work in developing and investing in inventions based on creativity and innovation.",
      mission_title: "Mission", mission_p: "To strive to invest in inventions and innovations for the general benefit of society.",
      // Services
      services_title: "Services",
      svc_1_t: "Study technical problems & design solutions",   svc_1_p: "Problem review, constraints mapping, and concept design to create viable technical solutions.",
      svc_2_t: "Feasibility studies (technical, practical, commercial)", svc_2_p: "Assess technical viability, practical implementation, and market/commercial potential.",
      svc_3_t: "Consultations & assistance for inventors",      svc_3_p: "Guidance on development steps, prototyping, and routes to market and partnerships.",
      svc_4_t: "Training courses",                              svc_4_p: "Workshops and programs to build skills for students, innovators, and teams.",
      // Books strip
      books_strip_title: "Featured Books",
      book_1_short: "Electricity & Electronics — A Journey of Inventions",
      book_2_short: "How to Become an Inventor",
      book_3_short: "Invention: From Idea to Business",
      // Contact labels
      contact_title: "Contact",
      contact_linkedin: "LinkedIn Profile",
      contact_phone_label: "Phone/WhatsApp:",
      contact_email_label: "Email:",
      contact_cta: "Email IVTD",
      // Form
      form_name: "Your name",
      form_email: "Email",
      form_phone: "Phone",
      form_subject: "Subject",
      form_message: "Message",
      form_send: "Send",
      form_ok: "Thanks! Opening your email app…",
      form_err: "Please fill your name, a valid email, and a message.",
      // Footer
      footer_brand: "Inventions Village Technical Design",
      footer_rights: "All rights reserved.",
      // UI
      next: "AR",
      title: "IVTD — Inventions Village Technical Design",
      font: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    },

    ar: {
      // Nav
      nav_about: "التعريف", nav_vision: "الرؤية", nav_mission: "الرسالة", nav_services: "الخدمات", nav_books: "الكتب", nav_contact: "تواصل",
      // Hero
      hero_kicker: "حلول مبتكرة وأفضل",
      hero_title: "قرية الاختراعات للتصميم الفني",
      hero_sub: "استشارات ودراسات جدوى وتدريب لتحويل الأفكار إلى منتجات حقيقية.",
      hero_cta1: "استكشف الخدمات", hero_cta2: "تواصل مع قرية الاختراعات",
      // About
      about_title: "نبذة عن قرية الاختراعات",
      about_p1: "تأسست قرية الاختراعات للتصميم الفني على يد عارف العوضي الناشط في مجال الاختراعات وتطوير المنتجات في 12 أكتوبر 2024 في مملكة البحرين.",
      about_p2: "الأستاذ عارف العوضي أحد الأعضاء المؤسسين في الجمعية البحرينية للباحثين والمخترعين (برينز)، وساهم في تأسيس قسم الإلكترونيات في مركز العلوم للأطفال والشباب، وشارك في معارض وملتقيات علمية ولجان تحكيم.",
      // Books
      books_title: "مؤلفات الأستاذ عارف العوضي",
      book_1: "قصة الكهرباء والإلكترونيات: رحلة عبر تاريخ أهم الاختراعات.",
      book_2: "كيف تصبح مخترعًا.",
      book_3: "الاختراع: من فكرة إلى تجارة (باللغتين العربية والإنجليزية).",
      // Vision / Mission
      vision_title: "الرؤية", vision_p: "نحو عمل متميز لتطوير الاختراعات والاستثمار فيها يعتمد على الإبداع والابتكار.",
      mission_title: "الرسالة", mission_p: "السعي إلى الاستثمار في الاختراعات والابتكارات لما يعود بالنفع العام على المجتمع.",
      // Services
      services_title: "الخدمات",
      svc_1_t: "دراسة المشاكل التقنية وتصميم حلول لها",   svc_1_p: "مراجعة المشكلة وتحديد القيود وتصميم مفهوم لحلول تقنية قابلة للتطبيق.",
      svc_2_t: "دراسات جدوى (فنية وتطبيقية وتجارية)",     svc_2_p: "تقييم الجدوى الفنية وإمكانية التطبيق والفرص التجارية في السوق.",
      svc_3_t: "استشارات ومساعدة للمخترعين",              svc_3_p: "إرشاد خطوات التطوير والنمذجة الأولية ومسارات الوصول إلى السوق والشراكات.",
      svc_4_t: "دورات تدريبية",                            svc_4_p: "ورش وبرامج لبناء المهارات للطلاب والمبتكرين والفرق.",
      // Books strip
      books_strip_title: "كتب مختارة",
      book_1_short: "الكهرباء والإلكترونيات — رحلة اختراعات",
      book_2_short: "كيف تصبح مخترعًا",
      book_3_short: "الاختراع: من فكرة إلى تجارة",
      // Contact labels
      contact_title: "تواصل",
      contact_linkedin: "الملف على لينكدإن",
      contact_phone_label: "هاتف/واتساب:",
      contact_email_label: "البريد الإلكتروني:",
      contact_cta: "راسل قرية الاختراعات",
      // Form
      form_name: "الاسم",
      form_email: "البريد الإلكتروني",
      form_phone: "الهاتف",
      form_subject: "الموضوع",
      form_message: "الرسالة",
      form_send: "إرسال",
      form_ok: "شكرًا! سيتم فتح تطبيق البريد…",
      form_err: "يرجى تعبئة الاسم وبريد صحيح والرسالة.",
      // Footer
      footer_brand: "قرية الاختراعات للتصميم الفني",
      footer_rights: "جميع الحقوق محفوظة.",
      // UI
      next: "EN",
      title: "قرية الاختراعات للتصميم الفني",
      font: "Tajawal, Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
    }
  };

  const i18nEls = document.querySelectorAll('[data-i18n]');

  function setLang(lang){
    const d = STR[lang] || STR.en;

    // Title & font; layout stays same (no RTL flip)
    document.title = d.title;
    document.body.style.fontFamily = d.font;

    // Swap all labeled text
    i18nEls.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (d[key]) el.textContent = d[key];
    });

    if (langBtn) langBtn.textContent = d.next;

    try{ localStorage.setItem('ivtd_lang', lang); }catch(e){}
  }

  // Init (persist last choice; default EN)
  setLang(localStorage.getItem('ivtd_lang') || 'en');

  // Toggle
  if (langBtn){
    langBtn.addEventListener('click', () => {
      const current = localStorage.getItem('ivtd_lang') || 'en';
      setLang(current === 'en' ? 'ar' : 'en');
    });
  }

  /* Contact form — frontend-only (mailto fallback).
     When submitted, we validate and open the user's mail client
     addressed to Aref with the form content. */
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

      // basic validation
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!name || !emailOk || !message){
        status.textContent = d.form_err;
        status.style.color = '#b3261e';
        return;
      }

      // Build mailto
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

      // open user's email client
      window.location.href = mailto;
      form.reset();
    });
  }
})();
