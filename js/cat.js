var initialCats = [
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

var Cat = function(data) {
  this.name = ko.observable(data.name);
  this.image = ko.observable(data.image);
  this.clickCount = ko.observable(data.clickCount);
}

var ViewModel = function() {
  var self = this;
  this.catList = ko.observableArray([]);
  this.name = ko.observable();
  this.image = ko.observable();
  this.clickCount = ko.observable();

  initialCats.forEach(function(cat) {
    self.catList.push(new Cat(cat));
  });

  this.shouldShowAdmin = ko.observable(false);

  this.showAdmin = function() {
    self.shouldShowAdmin(true);
    self.name(self.currentCat().name());
    self.image(self.currentCat().image());
    self.clickCount(self.currentCat().clickCount());
  };

  this.hideAdmin = function() {
    self.shouldShowAdmin(false);
  };

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  }

  this.setCurrentCat = function() {
    self.currentCat(this);
    self.hideAdmin();
  }

  this.updateCurrentCat = function() {
    self.currentCat().name(self.name());
    self.currentCat().image(self.image());
    self.currentCat().clickCount(parseInt(self.clickCount()));
    self.hideAdmin();
  }
}

ko.applyBindings(new ViewModel);

/*
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

  updateCurrentCat: function(name, image, count) {
    model.currentCat.name = name;
    model.currentCat.image = image;
    model.currentCat.clickCount = parseInt(count);

    catListView.render();
    catView.render();
    adminView.render();
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
          adminView.render();
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
    this.adminDisplay = this.adminElem.style.display;
    var showAdminElem = document.getElementById('show-admin');
    var hideAdminElem = document.getElementById('hide-admin');
    var saveAdminElem = document.getElementById('save-admin');

    showAdminElem.addEventListener('click', this.showAdmin.bind(this));
    hideAdminElem.addEventListener('click', this.hideAdmin.bind(this));
    saveAdminElem.addEventListener('click', this.saveAdmin.bind(this));

    this.render();
  },

  showAdmin: function() {
    this.render();

    this.adminElem.style.display = this.adminDisplay;
  },

  hideAdmin: function() {
    if (this.adminElem.style.display !== 'none') {
      this.adminDisplay = this.adminElem.style.display;
      this.adminElem.style.display = 'none';
    }
  },

  saveAdmin: function() {
    var name = document.getElementById('edit-name').value;
    var image = document.getElementById('edit-img').value;
    var count = document.getElementById('edit-count').value;

    octopus.updateCurrentCat(name, image, count);
  },

  render: function() {
    var cat = octopus.getCurrentCat();
    document.getElementById('edit-name').value = cat.name;
    document.getElementById('edit-img').value = cat.image;
    document.getElementById('edit-count').value = cat.clickCount;

    this.hideAdmin();
  }
}

octopus.init();
*/
