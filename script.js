const filters = document.querySelectorAll('.filter-button');
const projects = document.querySelectorAll('.project-card');
const modalProjects = document.querySelectorAll('button.project-card');
const projectCount = document.querySelector('#project-count');
const projectDialog = document.querySelector('.project-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogKind = document.querySelector('#dialog-kind');
const dialogDescription = document.querySelector('#dialog-description');
const themeToggle = document.querySelector('.theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');

function setTheme(theme, persist = false) {
    const isDark = theme === 'dark';
    document.documentElement.dataset.theme = theme;
    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'day' : 'night'} mode`);
        themeToggle.title = `Switch to ${isDark ? 'day' : 'night'} mode`;
        themeToggle.firstElementChild.textContent = isDark ? '☀' : '☾';
    }
    if (themeColor) themeColor.content = isDark ? '#111b2b' : '#f4f7fb';
    if (persist) localStorage.setItem('portfolio-theme', theme);
}

setTheme(localStorage.getItem('portfolio-theme') || 'light');

themeToggle?.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme, true);
});

filters.forEach((filter) => {
    filter.addEventListener('click', () => {
        const selectedCategory = filter.dataset.filter;
        let visibleCount = 0;

        filters.forEach((button) => {
            const isSelected = button === filter;
            button.classList.toggle('is-active', isSelected);
            button.setAttribute('aria-pressed', String(isSelected));
        });

        projects.forEach((project) => {
            const isVisible = selectedCategory === 'all' || project.dataset.category === selectedCategory;
            project.hidden = !isVisible;
            if (isVisible) visibleCount += 1;
        });

        if (projectCount) {
            projectCount.textContent = `${String(visibleCount).padStart(2, '0')} PROJECT${visibleCount === 1 ? '' : 'S'}`;
        }
    });
});

modalProjects.forEach((project) => {
    project.addEventListener('click', () => {
        dialogTitle.textContent = project.dataset.title;
        dialogKind.textContent = project.dataset.kind;
        dialogDescription.textContent = project.dataset.description;
        projectDialog.showModal();
    });
});

projectDialog?.addEventListener('click', (event) => {
    if (event.target === projectDialog) projectDialog.close();
});
