function createElement(type, props, ...children) {
  let node;
  // Regular element.
  if (typeof type === 'string') {
    node = document.createElement(type);
    props && Object.assign(node, props)
    // Component.
  } else if (typeof type === 'function') {
    node = type(props);
  }
  // Nested children.
  children && children.forEach(child => {
    Array.isArray(child) 
      ? node.append(...child) 
      : node.append(child)
  })
  return node;
}

export default {
  createElement
}