export class Router {
  constructor(routes, defaultTitle) {
    this.routes = routes;
    this.defaultTitle = defaultTitle;
    this.navigateTo = this.navigateTo.bind(this);
    this._addListeners();
  }

  navigateTo(path, replace) {
    if (path === window.location.pathname && !replace) return;
    let navMethod = replace ? 'replaceState' : 'pushState';
    let route = this.routes[path] || this.routes['404'];
    let title = route.title || this.defaultTitle;
    history[navMethod]({path, title}, title, path);
    document.title = title;
    document.querySelector('.js-router').innerHTML = route.component(route.props);
  }

  // All event listeners related to routing are added here.
  _addListeners() {
    document.addEventListener('click', e => {
      if (e.target.matches('a') && e.target.dataset.internal) {
        e.preventDefault();
        let path = e.target.getAttribute('href');
        this.navigateTo(path);
      }
    })

    window.addEventListener('popstate', e => this.navigateTo(e.state.path, true));
  }
}