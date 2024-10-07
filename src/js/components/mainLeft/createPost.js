export class Post {
  text = null;
  dom = null;
  constructor(text) {
    this.text = text;
  }

  build = () => {
    const label = document.createElement('label');
    label.classList.add('btn', 'btn-primary');
    label.setAttribute('for', 'create-post');
    label.textContent = this.text;

    this.dom = label;
    return label;
  }
}