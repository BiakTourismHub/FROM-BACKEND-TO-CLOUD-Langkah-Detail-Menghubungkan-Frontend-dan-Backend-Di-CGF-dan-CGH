// Membuat Web Component
class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>Hello, World!</p>`;
  }
}

// Mendaftarkan Web Component
customElements.define('hello-world', HelloWorld);

