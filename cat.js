var count1 = 0;
var count2 = 0;

var cat_name1 = "Kitty";
var cat_name2 = "Cutty";

var cat_name_elem1 = document.getElementById('cat-name1');
var cat_name_elem2 = document.getElementById('cat-name2');

cat_name_elem1.textContent = cat_name1;
cat_name_elem2.textContent = cat_name2;

var cat_image_elem1 = document.getElementById('cat1');
var cat_image_elem2 = document.getElementById('cat2');


cat_image_elem1.addEventListener('click', function() {
  var count_elem1 = document.getElementById('count1');
  count1 += 1;
  count_elem1.textContent = count1;
}, false);

cat_image_elem2.addEventListener('click', function() {
  var count_elem2 = document.getElementById('count2');
  count2 += 1;
  count_elem2.textContent = count2;
}, false);
