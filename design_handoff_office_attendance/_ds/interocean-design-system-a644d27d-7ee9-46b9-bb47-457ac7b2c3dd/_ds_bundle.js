/* @ds-bundle: {"format":3,"namespace":"InteroceanDesignSystem_a644d2","components":[],"sourceHashes":{"ui_kits/website/App.jsx":"22a14191b9fc","ui_kits/website/ContactCta.jsx":"88e40fe7a9ef","ui_kits/website/ContactForm.jsx":"ed9deb660460","ui_kits/website/Footer.jsx":"4eb73188aa61","ui_kits/website/Header.jsx":"452e8d13a1c9","ui_kits/website/Hero.jsx":"55bbeb3dd1b2","ui_kits/website/LatestNews.jsx":"41dcfb802106","ui_kits/website/SectorGrid.jsx":"9054b3341154","ui_kits/website/SectorPage.jsx":"909c4b473d61","ui_kits/website/StatsBand.jsx":"a60f48e03ae5","ui_kits/website/data.js":"6cd9b6e8f771"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.InteroceanDesignSystem_a644d2 = window.InteroceanDesignSystem_a644d2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/App.jsx
try { (() => {
function App() {
  const [route, setRoute] = useState('home');
  const nav = r => {
    setRoute(r);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  const headerKey = ['renewables', 'maritime', 'oilgas', 'contact', 'about', 'news'].includes(route) ? route : 'home';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: headerKey,
    onNav: nav
  }), route === 'home' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onCta: nav
  }), /*#__PURE__*/React.createElement(SectorGrid, {
    onSectorClick: nav
  }), /*#__PURE__*/React.createElement(StatsBand, null), /*#__PURE__*/React.createElement(LatestNews, null), /*#__PURE__*/React.createElement(ContactCta, {
    onCta: nav
  })), ['renewables', 'maritime', 'oilgas'].includes(route) && /*#__PURE__*/React.createElement(SectorPage, {
    sectorId: route,
    onNav: nav
  }), route === 'contact' && /*#__PURE__*/React.createElement(ContactForm, {
    onNav: nav
  }), route === 'about' && /*#__PURE__*/React.createElement("section", {
    className: "io-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-section__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-section__eyebrow"
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    className: "io-section__title"
  }, "We are Interocean."), /*#__PURE__*/React.createElement("p", {
    className: "io-section__lead"
  }, "Aberdeen-based marine services group supporting the offshore oil and gas, marine, and renewable sectors. A single-source provider, delivering safe, efficient, and cost-effective solutions across the full asset life-cycle.")))), route === 'news' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "io-page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      nav('home');
    }
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("span", null, "News")), /*#__PURE__*/React.createElement("h1", null, "News & insights."), /*#__PURE__*/React.createElement("p", null, "Recent news, case studies, and people from across the Interocean team."))), /*#__PURE__*/React.createElement(LatestNews, null)), /*#__PURE__*/React.createElement(Footer, {
    onNav: nav
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactCta.jsx
try { (() => {
function ContactCta({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "io-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-cta-band"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Have a project in mind? Let's talk."), /*#__PURE__*/React.createElement("p", null, "Tell us about your asset, sector, and scope. Our team will respond within one working day.")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "io-btn io-btn--on-dark",
    onClick: e => {
      e.preventDefault();
      onCta('contact');
    }
  }, "Contact us"))));
}
window.ContactCta = ContactCta;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactCta.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactForm.jsx
try { (() => {
function ContactForm({
  onNav
}) {
  const [state, setState] = useState({
    name: '',
    email: '',
    company: '',
    sector: 'Renewables',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handle = k => e => setState(s => ({
    ...s,
    [k]: e.target.value
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "io-page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    }
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("span", null, "Contact")), /*#__PURE__*/React.createElement("h1", null, "Get in touch."), /*#__PURE__*/React.createElement("p", null, "Tell us about your asset, sector, and scope. Our team will respond within one working day."))), /*#__PURE__*/React.createElement("section", {
    className: "io-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 360px',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, submitted ? /*#__PURE__*/React.createElement("div", {
    className: "io-form__success"
  }, /*#__PURE__*/React.createElement("h3", null, "Thank you, ", state.name || 'and welcome', "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--io-fg-2)',
      fontSize: 15
    }
  }, "Your enquiry has been received. A member of our ", state.sector.toLowerCase(), " team will be in touch within one working day.")) : /*#__PURE__*/React.createElement("form", {
    className: "io-form",
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-form__field"
  }, /*#__PURE__*/React.createElement("label", null, "Full name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    value: state.name,
    onChange: handle('name'),
    placeholder: "Jane Mariner"
  })), /*#__PURE__*/React.createElement("div", {
    className: "io-form__field"
  }, /*#__PURE__*/React.createElement("label", null, "Email address"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    value: state.email,
    onChange: handle('email'),
    placeholder: "jane@company.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "io-form__field"
  }, /*#__PURE__*/React.createElement("label", null, "Company"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: state.company,
    onChange: handle('company'),
    placeholder: "Optional"
  })), /*#__PURE__*/React.createElement("div", {
    className: "io-form__field"
  }, /*#__PURE__*/React.createElement("label", null, "Sector"), /*#__PURE__*/React.createElement("select", {
    value: state.sector,
    onChange: handle('sector')
  }, /*#__PURE__*/React.createElement("option", null, "Renewables"), /*#__PURE__*/React.createElement("option", null, "Maritime"), /*#__PURE__*/React.createElement("option", null, "Oil & Gas"), /*#__PURE__*/React.createElement("option", null, "Other"))), /*#__PURE__*/React.createElement("div", {
    className: "io-form__field io-form__field--full"
  }, /*#__PURE__*/React.createElement("label", null, "How can we help?"), /*#__PURE__*/React.createElement("textarea", {
    rows: "5",
    value: state.message,
    onChange: handle('message'),
    placeholder: "A brief description of the project, location, and timeline."
  })), /*#__PURE__*/React.createElement("div", {
    className: "io-form__field io-form__field--full"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "io-btn io-btn--primary",
    style: {
      width: 'fit-content'
    }
  }, "Send enquiry")))), /*#__PURE__*/React.createElement("aside", {
    style: {
      borderLeft: '1px solid var(--io-border)',
      paddingLeft: 32
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 16px',
      fontWeight: 400,
      fontSize: 18,
      color: 'var(--io-navy)'
    }
  }, "Aberdeen office"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--io-fg-2)',
      lineHeight: 1.6,
      margin: '0 0 20px'
    }
  }, "Hareness Circle,", /*#__PURE__*/React.createElement("br", null), "Altens Industrial Estate,", /*#__PURE__*/React.createElement("br", null), "Aberdeen, AB12 3LY", /*#__PURE__*/React.createElement("br", null), "United Kingdom"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--io-fg-2)',
      margin: '0 0 6px'
    }
  }, "+44 (0)1224 243000"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "interocean.co.uk"))))));
}
window.ContactForm = ContactForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "io-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-footer__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full.png",
    alt: "Interocean"
  }), /*#__PURE__*/React.createElement("p", null, "Interocean provide a comprehensive range of marine services to the offshore oil and gas, marine, and renewable sectors.")), /*#__PURE__*/React.createElement("div", {
    className: "io-footer__col"
  }, /*#__PURE__*/React.createElement("h6", null, "Sectors"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('renewables');
    }
  }, "Renewables")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('maritime');
    }
  }, "Maritime")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('oilgas');
    }
  }, "Oil & Gas")))), /*#__PURE__*/React.createElement("div", {
    className: "io-footer__col"
  }, /*#__PURE__*/React.createElement("h6", null, "Company"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Careers")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "News")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('contact');
    }
  }, "Contact")))), /*#__PURE__*/React.createElement("div", {
    className: "io-footer__col"
  }, /*#__PURE__*/React.createElement("h6", null, "Get in touch"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Hareness Circle,", /*#__PURE__*/React.createElement("br", null), "Altens Industrial Estate,", /*#__PURE__*/React.createElement("br", null), "Aberdeen, AB12 3LY"), /*#__PURE__*/React.createElement("li", null, "+44 (0)1224 243000"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "interocean.co.uk"))))), /*#__PURE__*/React.createElement("div", {
    className: "io-footer__bottom"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 Interocean Marine Services Ltd. Registered in Scotland."), /*#__PURE__*/React.createElement("div", null, "ISO 9001 accredited \xB7 Privacy \xB7 Terms"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  useState
} = React;
function Header({
  current,
  onNav
}) {
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'renewables',
    label: 'Renewables'
  }, {
    id: 'maritime',
    label: 'Maritime'
  }, {
    id: 'oilgas',
    label: 'Oil & Gas'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'news',
    label: 'News'
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "io-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-container io-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "io-header__logo",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full.png",
    alt: "Interocean"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "io-header__nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: "#",
    className: current === l.id ? 'active' : '',
    onClick: e => {
      e.preventDefault();
      onNav(l.id);
    }
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "io-btn io-btn--primary",
    onClick: e => {
      e.preventDefault();
      onNav('contact');
    }
  }, "Contact us"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "io-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-hero__bg"
  }), /*#__PURE__*/React.createElement("svg", {
    className: "io-hero__wave",
    viewBox: "0 0 1440 320",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,160 C240,260 480,60 720,140 C960,220 1200,80 1440,180 L1440,320 L0,320 Z",
    fill: "#FFFFFF",
    opacity: "0.05"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,200 C300,300 600,120 900,180 C1140,228 1300,140 1440,200 L1440,320 L0,320 Z",
    fill: "#055EDD",
    opacity: "0.18"
  })), /*#__PURE__*/React.createElement("div", {
    className: "io-container io-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-hero__eyebrow"
  }, "Marine services \xB7 Aberdeen, UK"), /*#__PURE__*/React.createElement("h1", {
    className: "io-hero__title"
  }, "Multi-sector support for the ", /*#__PURE__*/React.createElement("em", null, "full asset life-cycle"), "."), /*#__PURE__*/React.createElement("p", {
    className: "io-hero__lead"
  }, "A single-source provider of safe, efficient, and cost-effective solutions across renewables, maritime, and offshore oil and gas."), /*#__PURE__*/React.createElement("div", {
    className: "io-hero__cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "io-btn io-btn--on-dark",
    onClick: e => {
      e.preventDefault();
      onCta('services');
    }
  }, "Our services"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "io-btn io-btn--ghost",
    style: {
      color: '#fff'
    },
    onClick: e => {
      e.preventDefault();
      onCta('contact');
    }
  }, "Contact us \u2192"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LatestNews.jsx
try { (() => {
function LatestNews() {
  return /*#__PURE__*/React.createElement("section", {
    className: "io-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-section__head",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      maxWidth: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "io-section__eyebrow"
  }, "Latest news"), /*#__PURE__*/React.createElement("h2", {
    className: "io-section__title"
  }, "News, case studies and people.")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "io-btn io-btn--ghost"
  }, "View all \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "io-grid--3"
  }, window.IO_DATA.news.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    className: "io-news__item",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-news__thumb"
  }), /*#__PURE__*/React.createElement("div", {
    className: "io-news__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, n.tag), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, n.date)), /*#__PURE__*/React.createElement("h3", {
    className: "io-news__title"
  }, n.title), /*#__PURE__*/React.createElement("p", {
    className: "io-news__excerpt"
  }, n.excerpt))))));
}
window.LatestNews = LatestNews;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LatestNews.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SectorGrid.jsx
try { (() => {
function ServiceCard({
  tag,
  title,
  blurb,
  imageClass,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "io-card",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: `io-card__image ${imageClass}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "io-card__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-card__tag"
  }, tag), /*#__PURE__*/React.createElement("h3", {
    className: "io-card__title"
  }, title), /*#__PURE__*/React.createElement("p", null, blurb), /*#__PURE__*/React.createElement("span", {
    className: "io-card__more"
  }, "Explore sector \u2192")));
}
function SectorGrid({
  onSectorClick
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "io-section io-section--alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-section__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-section__eyebrow"
  }, "Sectors we serve"), /*#__PURE__*/React.createElement("h2", {
    className: "io-section__title"
  }, "A total project solution across three core sectors."), /*#__PURE__*/React.createElement("p", {
    className: "io-section__lead"
  }, "From planning, design and installation through to operational maintenance and decommissioning.")), /*#__PURE__*/React.createElement("div", {
    className: "io-grid--3"
  }, window.IO_DATA.sectors.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.id,
    tag: s.name,
    title: `${s.name} services`,
    blurb: s.blurb,
    imageClass: `io-card__image--${s.id}`,
    onClick: () => onSectorClick(s.id)
  })))));
}
window.ServiceCard = ServiceCard;
window.SectorGrid = SectorGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SectorGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SectorPage.jsx
try { (() => {
function SectorPage({
  sectorId,
  onNav
}) {
  const sector = window.IO_DATA.sectors.find(s => s.id === sectorId);
  if (!sector) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "io-page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-crumbs"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    }
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Sectors"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("span", null, sector.name)), /*#__PURE__*/React.createElement("h1", null, sector.name), /*#__PURE__*/React.createElement("p", null, sector.blurb))), /*#__PURE__*/React.createElement("section", {
    className: "io-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-section__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-section__eyebrow"
  }, "Services"), /*#__PURE__*/React.createElement("h2", {
    className: "io-section__title"
  }, "What we deliver in ", sector.name.toLowerCase(), "."), /*#__PURE__*/React.createElement("p", {
    className: "io-section__lead"
  }, "A non-exhaustive list of the services our team supports across the ", sector.name.toLowerCase(), " sector.")), /*#__PURE__*/React.createElement("div", {
    className: "io-services-list"
  }, sector.services.map((svc, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "io-service-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "io-service-row__title"
  }, svc), /*#__PURE__*/React.createElement("span", {
    className: "io-service-row__arrow"
  }, "\u2192")))))));
}
window.SectorPage = SectorPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SectorPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StatsBand.jsx
try { (() => {
function StatsBand() {
  return /*#__PURE__*/React.createElement("section", {
    className: "io-section io-section--dark io-section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-stats"
  }, window.IO_DATA.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "io-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "io-stat__value"
  }, s.value), /*#__PURE__*/React.createElement("div", {
    className: "io-stat__label"
  }, s.label))))));
}
window.StatsBand = StatsBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StatsBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Content lifted/condensed from interocean.com — matches voice and structure.

window.IO_DATA = {
  sectors: [{
    id: 'renewables',
    name: 'Renewables',
    blurb: 'Supporting the energy transition with full life-cycle services for floating and fixed wind developments.',
    services: ['Floating wind', 'Wind farm development', 'Marine operations coordination', 'Inspection services', 'UAV services']
  }, {
    id: 'maritime',
    name: 'Maritime',
    blurb: 'Independent marine consultancy and assurance across complex offshore operations.',
    services: ['Marine consultancy', 'Marine warranty', 'Moorings', 'Survey & subsea', 'Engineering', 'Compliance & risk']
  }, {
    id: 'oilgas',
    name: 'Oil & Gas',
    blurb: 'Asset integrity and maintenance support across the full asset life-cycle.',
    services: ['Construction support', 'Inspection services', 'Statutory inspection', 'UAV services']
  }],
  stats: [{
    value: '25+',
    label: 'Years of marine experience'
  }, {
    value: '3',
    label: 'Core sectors served'
  }, {
    value: 'ISO 9001',
    label: 'Accredited'
  }, {
    value: 'Global',
    label: 'Project reach'
  }],
  news: [{
    tag: 'News',
    date: '12 May 2026',
    title: 'Interocean awarded multi-year framework for North Sea inspection campaign',
    excerpt: 'Our marine inspection team will lead a multi-year campaign across a network of North Sea assets, supporting integrity management for a major operator.'
  }, {
    tag: 'Case study',
    date: '2 April 2026',
    title: 'Floating wind mooring assurance — a single-source delivery model',
    excerpt: 'A walk-through of how our marine warranty and engineering teams collaborated on a recent floating wind development off the coast of Scotland.'
  }, {
    tag: 'People',
    date: '18 March 2026',
    title: "Alastair's story: building a marine career at Interocean",
    excerpt: 'From offshore project engineer to lead marine consultant — Alastair shares what it has been like working across our maritime team for the last eight years.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

})();
