export class Profile {
  img_src = null;
  name = null;
  info = null;
  dom = null;

  constructor(img_src, name, info) {
    this.img_src = img_src
    this.name = name
    this.info = info
  }

  build = () => {
    const profile = document.createElement('a');
    profile.classList.add('profile');

    profile.innerHTML = `
      <div class="profile-photo">
        <img src= "${this.img_src}">
      </div >
  
      <div class="profile-description">
        <h2>${this.name}</h2>
        <p>${this.info}</p>
      </div>`
    this.dom = profile;//把元素保存在类的dom属性中，下次直接调用dom属性就能用这个标签，不用重新build
    return profile;
  }
}
