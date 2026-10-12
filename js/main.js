const routes = {
    '#home': { url: 'content-home', index: 0 },
    '#dataset': { url: 'content-dataset', index: 1 },
    '#dataset-detail': { url: 'content-dataset-detail', index: 1 },
    '#about': { url: 'content-about', index: 2 },
    '#contact': { url: 'content-connect-us', index: 3 }
};
const messages = {
    zh: { nav: ['首页', '数据集', '关于 FD-LAMT', '联系我们'], details: '查看详情', empty: '暂无数据集。', error: '内容加载失败，请刷新后重试。', more: '加载更多', unnamed: '未命名数据集', icon: '数据集图标' },
    en: { nav: ['Home', 'Datasets', 'About FD-LAMT', 'Contact us'], details: 'View details', empty: 'No datasets available.', error: 'Content could not be loaded. Please refresh and try again.', more: 'Load more', unnamed: 'Unnamed dataset', icon: 'Dataset icon' }
};
let language = 'zh';
let renderVersion = 0;
let markedPromise;
function getHashAndQuery() {
    const [hash, query = ''] = (window.location.hash || '#home').split('?');
    return { hash, params: new URLSearchParams(query) };
}
function getLanguage() {
    const requested = getHashAndQuery().params.get('lang');
    if (requested === 'en' || requested === 'zh') return requested;
    try { return localStorage.getItem('fdlamt-language') === 'en' ? 'en' : 'zh'; }
    catch (_) { return language; }
}
function updateLanguageControls() {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.querySelectorAll('.nav-link').forEach((a, i) => { a.textContent = messages[language].nav[i]; });
    document.querySelector('.sidebar-logo img').alt = language === 'en' ? 'Laboratory logo' : '实验室 Logo';
    const button = document.getElementById('language-toggle');
    button.textContent = language === 'en' ? '中文' : 'English';
    button.setAttribute('aria-label', language === 'en' ? '切换到中文' : 'Switch to English');
}
async function fetchText(path) {
    const response = await fetch(`${path}?v=20261012bilingual`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${path}`);
    return response.text();
}
function ensureMarkedLoaded() {
    if (window.marked) return Promise.resolve();
    if (!markedPromise) {
        markedPromise = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'vendor/marked.min.js';
            script.onload = resolve;
            script.onerror = () => { script.remove(); markedPromise = undefined; reject(new Error('Markdown renderer unavailable')); };
            document.head.appendChild(script);
        });
    }
    return markedPromise;
}
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
async function renderDatasetList(version, lang) {
    const data = JSON.parse(await fetchText('config/datasets.json'));
    if (version !== renderVersion) return;
    const grid = document.querySelector('.dataset-grid');
    const list = (data.datasets || []).filter(ds => !ds.hidden);
    grid.innerHTML = list.length ? list.map(ds => {
        const href = `#dataset-detail?md=${encodeURIComponent(ds.mdFile || ds.id)}&lang=${lang}`;
        const title = escapeHTML(ds.name || messages[lang].unnamed);
        const description = escapeHTML(lang === 'en' ? ds.descriptionEn : ds.description);
        const alt = escapeHTML((lang === 'en' ? ds.imageAltEn : ds.imageAlt) || messages[lang].icon);
        return `<div class="col"><div class="card dataset-card h-100">
            <a href="${href}" class="dataset-icon-link" aria-label="${alt}"><div class="dataset-icon-wrap" role="img" aria-label="${alt}"><i class="${escapeHTML(ds.icon || 'fa-solid fa-database')}" aria-hidden="true"></i></div></a>
            <div class="card-body"><h5 class="card-title"><a href="${href}" class="card-title-link">${title}</a></h5><p class="card-text">${description}</p></div>
            <div class="card-footer bg-transparent border-0"><a href="${href}" class="btn btn-primary">${messages[lang].details}</a></div>
        </div></div>`;
    }).join('') : `<p>${messages[lang].empty}</p>`;
}
async function renderDatasetDetail(version, lang, params) {
    const md = params.get('md') || 'GZVarMSA';
    if (!['GZVarMSA', 'XFID', 'ac-ccm', 'LiveMusicDenoising'].includes(md)) throw new Error('Unknown dataset');
    const [, text] = await Promise.all([ensureMarkedLoaded(), fetchText(`md/${md}${lang === 'en' ? '.en' : ''}.md`)]);
    if (version !== renderVersion) return;
    const firstLine = text.split('\n').find(line => line.startsWith('# '));
    document.getElementById('md-title').textContent = firstLine ? firstLine.slice(2).trim() : md;
    document.getElementById('md-root').innerHTML = window.marked.parse(text, { gfm: true, breaks: true });
}
async function renderAboutPage(version, lang) {
    const data = JSON.parse(await fetchText(`config/about${lang === 'en' ? '.en' : ''}.json`));
    if (version !== renderVersion) return;
    document.getElementById('lab-name').textContent = data.labInfo.name;
    document.getElementById('lab-fullname').textContent = data.labInfo.fullName;
    document.getElementById('lab-description').textContent = data.labInfo.description;
    const research = document.getElementById('research-interests-container');
    research.className = 'research-grid';
    research.innerHTML = data.researchInterests.map(group => `<div class="research-card"><h6>${escapeHTML(group.category)}</h6></div>`).join('');
    const articles = document.getElementById('research-articles-list');
    let displayed = 0;
    const appendArticles = count => {
        data.researchArticles.slice(displayed, displayed + count).forEach(article => {
            const li = document.createElement('li'); li.className = 'mb-2'; li.textContent = article; articles.appendChild(li);
        });
        displayed = Math.min(displayed + count, data.researchArticles.length);
    };
    appendArticles(5);
    if (displayed < data.researchArticles.length) {
        const container = document.createElement('div'); container.className = 'text-center mt-3';
        const button = document.createElement('button'); button.className = 'btn btn-outline-primary btn-sm'; button.textContent = messages[lang].more;
        button.onclick = () => { appendArticles(10); if (displayed === data.researchArticles.length) container.remove(); };
        container.appendChild(button); articles.parentNode.appendChild(container);
    }
    document.getElementById('cooperative-mentors-list').innerHTML = data.cooperativeMentors.map(m => `<li class="mb-2">${escapeHTML(m)}</li>`).join('');
    const members = document.getElementById('graduated-members-list'); members.classList.add('members-grid');
    members.innerHTML = data.graduatedMembers.map(m => `<li class="member-item">${escapeHTML(m)}</li>`).join('');
}
async function renderFromHash() {
    const version = ++renderVersion;
    language = getLanguage();
    const lang = language;
    try { localStorage.setItem('fdlamt-language', lang); } catch (_) {}
    updateLanguageControls();
    const { hash, params } = getHashAndQuery();
    const route = routes[hash] || routes['#home'];
    document.querySelectorAll('.nav-link').forEach((a, i) => a.classList.toggle('active', i === route.index));
    const main = document.getElementById('main-content');
    main.setAttribute('aria-busy', 'true');
    try {
        const html = await fetchText(`${route.url}${lang === 'en' ? '.en' : ''}.html`);
        if (version !== renderVersion) return;
        main.innerHTML = html;
        if (hash === '#dataset') await renderDatasetList(version, lang);
        if (hash === '#dataset-detail') await renderDatasetDetail(version, lang, params);
        if (hash === '#about') await renderAboutPage(version, lang);
    } catch (error) {
        if (version === renderVersion) main.innerHTML = `<p class="p-3" role="alert">${messages[lang].error}</p>`;
        console.error(error);
    } finally {
        if (version === renderVersion) main.removeAttribute('aria-busy');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('language-toggle').addEventListener('click', () => {
        const { hash, params } = getHashAndQuery();
        params.set('lang', language === 'en' ? 'zh' : 'en');
        window.location.hash = `${hash}?${params}`;
    });
    renderFromHash();
    window.addEventListener('hashchange', renderFromHash);
});
document.body.addEventListener('click', event => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    const hash = href.split('?')[0];
    if (!routes[hash]) return;
    event.preventDefault();
    const params = new URLSearchParams(href.split('?')[1] || ''); params.set('lang', language);
    const target = `${hash}?${params}`;
    if (window.location.hash === target) renderFromHash(); else window.location.hash = target;
});
