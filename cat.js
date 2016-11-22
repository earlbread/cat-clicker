var model = {
  currentCat: null,
  cats: [
    {
      name: 'Kitty',
      image: 'https://c1.staticflickr.com/3/2079/2241767250_b29d0eef70_z.jpg?zz=1',
      clickCount: 0
    },
    {
      name: 'Cutty',
      image: 'https://c1.staticflickr.com/3/2884/11098807816_38e2595591_n.jpg',
      clickCount: 0
    },
    {
      name: 'Judy',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEamUnQcCAS1UFqonKc6VKfZ0ykFbNFdlBw9iWoythOffJS29RZqhkMQ',
      clickCount: 0
    },
    {
      name: 'Bella',
      image: 'https://imgflip.com/s/meme/Cute-Cat.jpg',
      clickCount: 0
    },
    {
      name: 'Choco',
      image: 'https://s-media-cache-ak0.pinimg.com/736x/ba/54/54/ba54544039e1310da2bfc32881cbd00a.jpg',
      clickCount: 0
    }
  ]
};

var octopus = {
  getCats: function () {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  incrementCounter: function() {
    model.currentCat.clickCount += 1;
    catView.render();
  },

  init: function() {
    this.setCurrentCat(model.cats[0]);
    catListView.init();
    catView.init();
    adminView.init();
  }
};

var catListView = {
  init: function() {
    this.catListElem = document.getElementById('cat-list');
    this.render();
  },

  render: function() {
    var cats = octopus.getCats();

    this.catListElem.innerHTML = '';

    for (var i = 0; i < cats.length; i++) {
      var cat = cats[i];
      var elem = document.createElement('li');

      elem.textContent = cat.name;

      elem.addEventListener('click', function(cat) {
        return function() {
          octopus.setCurrentCat(cat);
          catView.render();
        }
      }(cat));

      this.catListElem.appendChild(elem);
    }
  }
};

var catView = {
  init: function() {
    this.catNameElem = document.getElementById('cat-name');
    this.catImageElem = document.getElementById('cat-img');
    this.catCountElem = document.getElementById('cat-count');

    this.catImageElem.addEventListener('click', function() {
      octopus.incrementCounter();
    });
    this.render();
  },

  render: function() {
    var cat = octopus.getCurrentCat();
    this.catNameElem.textContent = cat.name;
    this.catImageElem.src = cat.image;
    this.catCountElem.textContent = cat.clickCount;
  }
};

var adminView = {
  init: function() {
    this.adminElem = document.getElementById('admin');

    this.adminElem.style.display = 'none';
  },

  render: function() {
  }
}

octopus.init();
