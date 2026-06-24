// function loadContent(url, link) {
//     fetch(url)
//         .then(response => response.text())
//         .then(html => {
//             document.getElementById('main-content').innerHTML = html;

//             // 高亮当前选中导航
//             document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
//             if (link) link.classList.add('active');
//         })
//         .catch(err => {
//             document.getElementById('main-content').innerHTML = "<p>加载失败</p>";
//             console.error(err);
//         });
// }

// // 基于 hash 渲染
// const routes = {
//     '#home': { url: 'content-home.html', index: 0 },
//     '#dataset': { url: 'content-dataset.html', index: 1 },
//     '#about': { url: 'content-about.html', index: 2 },
//     '#contact': { url: 'content-connect_us.html', index: 3 }
// };

// function renderFromHash() {
//     const hash = window.location.hash || '#home';
//     const route = routes[hash] ? hash : '#home';
//     const link = document.querySelectorAll('.nav-link')[routes[route].index];
//     loadContent(routes[route].url, link);
// }

// document.addEventListener("DOMContentLoaded", function () {
//     renderFromHash();
//     window.addEventListener('hashchange', renderFromHash);
// });

// function loadContent(url, link) {
//     return fetch(url)
//         .then(response => response.text())
//         .then(html => {
//             document.getElementById('main-content').innerHTML = html;

//             // 高亮当前选中导航
//             document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
//             if (link) link.classList.add('active');
//         })
//         .catch(err => {
//             document.getElementById('main-content').innerHTML = "<p>加载失败</p>";
//             console.error(err);
//         });
// }

function loadContent(url, link) {
    const fetchUrl = url.includes('?') ? `${url}&v=${Date.now()}` : `${url}?v=${Date.now()}`;
    return fetch(fetchUrl, { cache: 'no-store' })
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-content').innerHTML = html;

            // 高亮当前选中导航
            document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
            if (link) link.classList.add('active');

            // 若直接加载了数据集页，确保渲染卡片
            if (typeof renderDatasetList === 'function' && url.indexOf('content-dataset.html') !== -1) {
                renderDatasetList();
            }

            // 若加载了关于页，渲染动态内容
            if (url.indexOf('content-about.html') !== -1) {
                renderAboutPage();
            }
        })
        .catch(err => {
            document.getElementById('main-content').innerHTML = "<p>加载失败</p>";
            console.error(err);
        });
}

// 基于 hash 渲染
const routes = {
    '#home': { url: 'content-home.html', index: 0 },
    '#dataset': { url: 'content-dataset.html', index: 1 },
    '#dataset-detail': { url: 'content-dataset-detail.html', index: 1 },
    '#about': { url: 'content-about.html', index: 2 },
    '#contact': { url: 'content-connect-us.html', index: 3 }
};

function ensureMarkedLoaded() {
    return new Promise((resolve, reject) => {
        if (window.marked) {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
        script.onload = () => resolve();
        script.onerror = (e) => reject(e);
        document.head.appendChild(script);
    });
}

function getHashAndQuery() {
    const hashFull = window.location.hash || '#home';
    const [hash, query = ''] = hashFull.split('?');
    const params = new URLSearchParams(query);
    return { hash, params };
}

// function renderDatasetDetail() {
//     const { params } = getHashAndQuery();
//     const mdName = params.get('md') || 'GZVarMSA';
//     const mdPath = `md/${mdName}.md`;
//     const root = document.getElementById('md-root');
//     const titleEl = document.getElementById('md-title');
//     if (!root) return;

//     const rootRef = root; // 防止过程中节点被替换

//     Promise.all([
//         ensureMarkedLoaded(),
//         fetch(mdPath).then(res => {
//             if (!res.ok) throw new Error('Markdown 加载失败');
//             return res.text();
//         })
//     ])
//         .then(([_, text]) => {
//             const firstLine = text.split('\n').find(l => l.trim().startsWith('# '));
//             const html = (window.marked && typeof window.marked.parse === 'function')
//                 ? window.marked.parse(text, { gfm: true, breaks: true })
//                 : text.replace(/[&<>]/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[s]));

//             if (!document.body.contains(rootRef)) return; // 页面已切换则不写入
//             if (titleEl && firstLine) titleEl.textContent = firstLine.replace(/^#\s*/, '').trim();
//             rootRef.innerHTML = html;
//         })
//         .catch(err => {
//             if (document.body.contains(rootRef)) {
//                 rootRef.innerHTML = '<p class="text-muted">内容加载失败或文档不存在。</p>';
//                 if (titleEl) titleEl.textContent = '';
//             }
//             console.error(err);
//         });
// }

function renderDatasetDetail() {
    const { params } = getHashAndQuery();
    const mdName = params.get('md') || 'GZVarMSA';
    const mdPath = `md/${mdName}.md`;
    const root = document.getElementById('md-root');
    const titleEl = document.getElementById('md-title');
    const mainContent = document.querySelector('.main-content');

    if (!root || !mainContent) return;

    // 整体隐藏
    mainContent.classList.add('loading');

    Promise.all([
        ensureMarkedLoaded(),
        fetch(`${mdPath}?v=${Date.now()}`, { cache: 'no-store' }).then(res => {
            if (!res.ok) throw new Error('Markdown 加载失败');
            return res.text();
        })
    ])
        .then(([_, text]) => {
            const firstLine = text.split('\n').find(l => l.trim().startsWith('# '));
            const html = (window.marked && typeof window.marked.parse === 'function')
                ? window.marked.parse(text, { gfm: true, breaks: true })
                : text.replace(/[&<>]/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[s]));

            if (!document.body.contains(root)) return;

            if (titleEl && firstLine) {
                titleEl.textContent = firstLine.replace(/^#\s*/, '').trim();
            }
            root.innerHTML = html;

            // 显示整个 main-content
            mainContent.classList.remove('loading');
        })
        .catch(err => {
            if (document.body.contains(root)) {
                root.innerHTML = '<p class="text-muted">内容加载失败或文档不存在。</p>';
                if (titleEl) titleEl.textContent = '';
            }
            console.error(err);

            // 即使失败也要显示
            mainContent.classList.remove('loading');
        });
}




// function renderFromHash() {
//     const { hash } = getHashAndQuery();
//     const routeKey = routes[hash] ? hash : (routes[hash.split('?')[0]] ? hash.split('?')[0] : '#home');
//     const link = document.querySelectorAll('.nav-link')[routes[routeKey].index];
//     loadContent(routes[routeKey].url, link).then(() => {
//         if (routeKey === '#dataset-detail') {
//             renderDatasetDetail();
//         }
//     });
// }

function renderFromHash() {
    const { hash } = getHashAndQuery();
    const routeKey = routes[hash] ? hash : (routes[hash.split('?')[0]] ? hash.split('?')[0] : '#home');
    const link = document.querySelectorAll('.nav-link')[routes[routeKey].index];
    loadContent(routes[routeKey].url, link).then(() => {
        if (routeKey === '#dataset-detail') {
            renderDatasetDetail();
        }
        if (routeKey === '#dataset') {
            renderDatasetList();
        }
    });
}

// 页面加载时按 hash 渲染当前页，且支持前进/后退
document.addEventListener("DOMContentLoaded", function () {
    renderFromHash();
    window.addEventListener('hashchange', renderFromHash);
});

function renderDatasetList() {
    const grid = document.querySelector('.dataset-grid');
    if (!grid) return;

    // grid.innerHTML = '<div class="text-muted px-2">正在加载数据集...</div>';

    fetch('config/datasets.json?v=20260615a', { cache: 'no-store' })
        .then(res => {
            if (!res.ok) throw new Error('数据集配置加载失败');
            return res.json();
        })
        .then(data => {
            const list = Array.isArray(data.datasets) ? data.datasets.filter(ds => !ds.hidden) : [];
            if (!list.length) {
                grid.innerHTML = '<div class="text-muted px-2">暂无数据集。</div>';
                return;
            }

            grid.innerHTML = list.map(ds => {
                const href = `#dataset-detail?md=${encodeURIComponent(ds.mdFile || ds.id || '')}`;
                const icon = ds.icon || 'fa-solid fa-database';
                const alt = ds.imageAlt || ds.name || '数据集图标';
                const title = ds.name || ds.id || '未命名数据集';
                const desc = ds.description || '';

                return `
            <div class="col">
                <div class="card dataset-card h-100">
                    <a href="${href}" class="dataset-icon-link" aria-label="${alt}">
                        <div class="dataset-icon-wrap" role="img" aria-label="${alt}">
                            <i class="${icon}" aria-hidden="true"></i>
                        </div>
                    </a>
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">
                            <a href="${href}" class="card-title-link">${title}</a>
                        </h5>
                        <p class="card-text">${desc}</p>
                    </div>
                    <div class="card-footer bg-transparent border-0">
                        <a href="${href}" class="btn btn-primary">查看详情</a>
                    </div>
                </div>
            </div>`;
            }).join('');
        })
        .catch(err => {
            console.error(err);
            grid.innerHTML = '<div class="text-muted px-2">数据集加载失败。</div>';
        });
}

// 统一接管 # 路由点击，确保 hash 正确更新
document.body.addEventListener('click', function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const href = a.getAttribute('href') || '';
    // 仅处理定义在 routes 中的路由以及详情页路由
    if (routes[href] || href.startsWith('#dataset-detail')) {
        e.preventDefault();
        if (window.location.hash !== href) {
            window.location.hash = href; // 触发 hashchange → renderFromHash
        } else {
            // 若与当前 hash 相同，主动重渲染一次
            renderFromHash();
        }
    }
});


function renderAboutPage() {
    fetch('config/about.json')
        .then(response => response.json())
        .then(data => {
            // Lab Info
            if (data.labInfo) {
                const labName = document.getElementById('lab-name');
                if (labName) labName.textContent = data.labInfo.name;

                const labFullname = document.getElementById('lab-fullname');
                if (labFullname) labFullname.textContent = data.labInfo.fullName;

                const labDesc = document.getElementById('lab-description');
                if (labDesc) labDesc.textContent = data.labInfo.description;
            }

            // Research Interests
            const researchContainer = document.getElementById('research-interests-container');
            if (researchContainer && data.researchInterests) {
                researchContainer.innerHTML = '';
                researchContainer.className = 'research-grid'; // Add grid class

                data.researchInterests.forEach(group => {
                    const card = document.createElement('div');
                    card.className = 'research-card';

                    const h6 = document.createElement('h6');
                    h6.textContent = group.category;

                    card.appendChild(h6);
                    researchContainer.appendChild(card);
                });
            }

            // Research Articles
            const articlesList = document.getElementById('research-articles-list');
            if (articlesList && data.researchArticles) {
                const allArticles = data.researchArticles;
                const INITIAL_COUNT = 5;
                const LOAD_STEP = 10;
                let displayedCount = 0;

                const appendArticles = (start, end) => {
                    const fragment = document.createDocumentFragment();
                    const slice = allArticles.slice(start, end);
                    slice.forEach(article => {
                        const li = document.createElement('li');
                        li.className = 'mb-2';
                        li.textContent = article;
                        fragment.appendChild(li);
                    });
                    articlesList.appendChild(fragment);
                    displayedCount += slice.length;
                };

                // Initial load
                articlesList.innerHTML = ''; // Clear initial content
                appendArticles(0, INITIAL_COUNT);

                // Load More Button
                if (allArticles.length > displayedCount) {
                    const btnContainer = document.createElement('div');
                    btnContainer.className = 'text-center mt-3';

                    const btn = document.createElement('button');
                    btn.className = 'btn btn-outline-primary btn-sm';
                    btn.textContent = '加载更多';

                    btn.onclick = function () {
                        const nextCount = displayedCount + LOAD_STEP;
                        appendArticles(displayedCount, nextCount);

                        if (displayedCount >= allArticles.length) {
                            btnContainer.remove();
                        }
                    };

                    btnContainer.appendChild(btn);
                    articlesList.parentNode.appendChild(btnContainer);
                }
            }

            // Cooperative Mentors
            const mentorsList = document.getElementById('cooperative-mentors-list');
            if (mentorsList && data.cooperativeMentors) {
                mentorsList.innerHTML = data.cooperativeMentors.map(m => `<li class="mb-2">${m}</li>`).join('');
            }

            // Graduated Members
            const membersList = document.getElementById('graduated-members-list');
            if (membersList && data.graduatedMembers) {
                // Clear existing content
                membersList.innerHTML = '';
                // Add class for grid layout
                membersList.classList.add('members-grid');

                data.graduatedMembers.forEach(m => {
                    const li = document.createElement('li');
                    li.className = 'member-item';
                    li.textContent = m;
                    membersList.appendChild(li);
                });
            }
        })
        .catch(err => console.error('Failed to load about data:', err));
}

