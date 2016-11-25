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
