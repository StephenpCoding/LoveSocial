export class RequestsList {
  constructor(info = []) {
    this.info = info
    console.log(info)
  }

  build = () => {
    this.dom = document.createElement('div');
    this.dom.classList.add('request-list');
    this.dom.innerHTML = `
      <h2>Request</h2>
    `
    this.info.forEach(item => {
      this.dom.appendChild(new RequestListItem(item).build());
    })

    return this.dom;
  }
}

class RequestListItem {
  constructor(info) {
    this.src = info.src
    this.name = info.name
    this.mutualFriendNum = info.mutualFriendNum
  }

  build = () => {
    this.dom = document.createElement('div')
    this.dom.classList.add('request')
    this.dom.innerHTML = `
      <div class = "profile">
        <div class="profile-photo">
          <img src="${this.src}">
        </div>

        <div class="profile-description">
          <h2>${this.name}</h2>
          <p>${this.mutualFriendNum}  mutual friends</p>
        </div>
      </div>

      <div class="request-btn-group">
        <button class="btn btn-primary">Accept</button>
        <button class="btn btn-cancel">Decline</button>
      </div>
    `
    return this.dom
  }
}







