var cats = [
  {'name' : 'Kitty',
   'image' : 'https://c1.staticflickr.com/3/2079/2241767250_b29d0eef70_z.jpg?zz=1',
   'count' : 0},
  {'name' : 'Cutty',
   'image' : 'https://c1.staticflickr.com/3/2884/11098807816_38e2595591_n.jpg',
   'count' : 0},
  {'name' : 'Judy',
   'image' : '',
   'count' : 0},
  {'name' : 'Bella',
   'image' : '',
   'count' : 0},
  {'name' : 'Choco',
   'image' : '',
   'count' : 0}
];

cat_list = document.getElementsByClassName('cat-list')[0];

for (var i = 0; i < cats.length; i++) {
  elem = document.createElement('div');
  elem.setAttribute('id', 'cat' + i);
  elem.textContent = cats[i].name;

  cat_list.appendChild(elem);
}
