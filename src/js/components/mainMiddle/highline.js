export class Highline {
  info = [];
  dom = null;

  constructor(info = []) {
    this.info = info
  }

  build = () => {
    this.dom = document.createElement('div');
    this.dom.classList.add('highline');

    this.info.forEach(item => {
      this.dom.appendChild(new HighlineItem(item).build());
    });
    return this.dom;
  }
}

class HighlineItem {
  item = {}
  dom = null;
  constructor(item = { title: '', img_src: '', background: '' }) {
    this.item = item;
  }

  build = () => {
    this.dom = document.createElement('div');
    this.dom.classList.add('description');
    this.dom.style.backgroundImage = `url(${this.item.background})`;
    this.dom.innerHTML = `
      <div class="profile-photo">
        <img src="${this.item.img_src}"></img>
      </div>
      <p>${this.item.title}</p>
    `
    return this.dom;
  }
}