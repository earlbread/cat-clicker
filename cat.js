$(function() {

  var model = {
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

    getCat: function(cat_id) {
      return model.cats[cat_id];
    },

    incrementCounter: function(cat_id) {
      model.cats[cat_id].clickCount += 1;
      catView.render(cat_id);
    },

    init: function() {
      catListView.init();
      catView.init();
    }
  };

  var catListView = {
    init: function() {
      this.$cat_list = $('.cat-list');
      this.cat_list_template = $('script[data-template="cat"]').html();

      this.render();
    },

    render: function() {
      var list_template = this.cat_list_template;
      var cats = octopus.getCats();
      this.$cat_list.html('');

      for (var i = 0; i < cats.length; i++) {
        var this_template = list_template.replace(/{{id}}/g, i);
        this_template = this_template.replace(/{{cat_name}}/g, cats[i].name);
        this.$cat_list.append(this_template);
      }

      this.$cat_list.on('click', '.show-cat', function(e) {
        var cat_id = $(this).parents('.cat').data();
        catView.render(cat_id.id);
        return false;
      });
    }
  };

  var catView = {
    init: function() {
      this.clicker_template = $('script[data-template="clicker-template').html();
      this.$cat_clicker = $('.cat-clicker');
    },

    render: function(cat_id) {
      var clicker_template = this.clicker_template;
      var $cat_clicker = this.$cat_clicker;
      var cat = octopus.getCat(cat_id);
      var this_template = clicker_template.replace(/{{cat_name}}/g, cat.name);
      this_template = this_template.replace(/{{cat_image}}/g, cat.image);
      this_template = this_template.replace(/{{count}}/, cat.clickCount);

      $cat_clicker.html('');

      $cat_clicker.append(this_template);

      var $clicker = $('.clicker');

      $clicker.on('click', function(e) {
        octopus.incrementCounter(cat_id);
        return false;
      });
    }
  };

  octopus.init();
});
