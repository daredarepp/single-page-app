export const DOM = {
  mountApp(rootEl, component) {
    rootEl.appendChild(component);
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

export const ROUTER = {
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
  },

  LinkComp: class extends HTMLElement {
    connectedCallback() {
      let path = this.getAttribute('to');
      let shadow = this.attachShadow({mode: 'open'});

      // Template.
      shadow.innerHTML = `
        <a href="${path}"><slot></slot></a>
      `

      // Event listeners.
      /* this.addEventListener('click', e => {
        e.preventDefault();
        history.pushState({}, '', path);
      }) */
    }
  }
}