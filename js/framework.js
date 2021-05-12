window.framework = {
  mountApp(rootEl, App, router) {
    rootEl.appendChild(new App);
    /* if (router) {
      router.navigateTo(window.location.pathname);
    } */
  },
  createComponent(tagName, props) {
    let component = document.createElement(tagName);
    component.props = props;
    return comp;
  }
}

window.router = {
  createRouter(routes) {
    function navigateTo(path) {
      let routerEl = document.querySelector('#router');
      let route = routes.find(route => route.path === path);
      if (!route) {
        // redirect to home route instead
        route = routes.find(route => route.path === '/');
      };
      routerEl.append(new route.component);
      document.title = route.title;
    }

    return {
      navigateTo
    }
  }
}