$(function() {

  var cats = [];

  var model = {
    add_cat: function(name, image) {
      var cat = {
        id: cats.length,
        name: name,
        image: image,
        count: 0
      };

      cats.push(cat);
    },

    init: function() {
      this.add_cat(
        'Kitty',
        'https://c1.staticflickr.com/3/2079/2241767250_b29d0eef70_z.jpg?zz=1'
      );
      this.add_cat(
        'Cutty',
        'https://c1.staticflickr.com/3/2884/11098807816_38e2595591_n.jpg'
      );
      this.add_cat(
        'Judy',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEamUnQcCAS1UFqonKc6VKfZ0ykFbNFdlBw9iWoythOffJS29RZqhkMQ'
      );
      this.add_cat(
        'Bella',
        'https://imgflip.com/s/meme/Cute-Cat.jpg'
      );
      this.add_cat(
        'Choco',
        'https://s-media-cache-ak0.pinimg.com/736x/ba/54/54/ba54544039e1310da2bfc32881cbd00a.jpg'
      );
    }
  };

  var octopus = {
    getCats: function () {
      return cats;
    },

    init: function() {
      model.init();
      view.init();
    }
  };

  var view = {
    init: function() {
      this.$cat_list = $('.cat-list');
      this.cat_list_template = $('script[data-template="list-item"]').html();

      this.render_list();
    },

    render_list: function() {
      var list_template = this.cat_list_template;
      var $cat_list = this.$cat_list;
      $cat_list.html('');

      octopus.getCats().forEach(function(cat) {
        var this_template = list_template.replace(/{{id}}/g, cat.id);
        this_template = this_template.replace(/{{cat_name}}/g, cat.name);
        $cat_list.append(this_template);
      });
    }
  };

  octopus.init();
});
