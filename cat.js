var cats = [
  {'name' : 'Kitty',
   'image' : 'https://c1.staticflickr.com/3/2079/2241767250_b29d0eef70_z.jpg?zz=1',
   'count' : 0},
  {'name' : 'Cutty',
   'image' : 'https://c1.staticflickr.com/3/2884/11098807816_38e2595591_n.jpg',
   'count' : 0},
  {'name' : 'Judy',
   'image' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEamUnQcCAS1UFqonKc6VKfZ0ykFbNFdlBw9iWoythOffJS29RZqhkMQ',
   'count' : 0},
  {'name' : 'Bella',
   'image' : 'https://imgflip.com/s/meme/Cute-Cat.jpg',
   'count' : 0},
  {'name' : 'Choco',
   'image' : 'https://s-media-cache-ak0.pinimg.com/736x/ba/54/54/ba54544039e1310da2bfc32881cbd00a.jpg',
   'count' : 0}
];

cat_list = document.getElementsByClassName('cat-list')[0];
cat_clicker = document.getElementsByClassName('cat-clicker')[0];

for (var i = 0; i < cats.length; i++) {
  elem = document.createElement('div');
  elem.setAttribute('id', 'cat' + i);
  elem.textContent = cats[i].name;

  elem.addEventListener('click', function(cat_num) {
    return function() {
      cat_name = document.createElement('h1');
      cat_image = document.createElement('img');
      cat_count = document.createElement('h3');

      cat_name.textContent = cats[cat_num].name;
      cat_image.src = cats[cat_num].image;

      cat_image.addEventListener('click', function(cat_num) {
        return function() {
          cats[cat_num].count += 1;
          cat_count.textContent = cats[cat_num].count;
        }
      }(cat_num));

      cat_count.textContent = cats[cat_num].count;
      cat_clicker.innerHTML = '';
      cat_clicker.appendChild(cat_name);
      cat_clicker.appendChild(cat_image);
      cat_clicker.appendChild(cat_count);
    }
  }(i));

  cat_list.appendChild(elem);
}
