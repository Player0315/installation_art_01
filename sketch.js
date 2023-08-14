let users = [];
let mk;
let img;

function preload() {
  img = loadImage("1.png");
  //2.png_colorful map //1.png_dark map
}

function setup() {
  createCanvas(windowWidth, (windowWidth * 67) / 560 + 100);

  mk = createGraphics(windowWidth, (windowWidth * 67) / 560 + 100);

  for (let i = 0; i < 500; i++) {
    users.push(createUser());
  }
  img.resize(windowWidth, 0);
}

function draw() {
  image(img, 0, 0);
  mk.background(0), maskLine();
  image(mk, 0, 0);
}

function maskLine() {
  mk.erase();
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    user.y -= user.speed;

    mk.stroke(user.color);
    mk.strokeWeight(user.width);
    mk.strokeCap(ROUND);
    mk.line(user.x, user.y, user.x, user.y + user.length);

    if (user.y < -windowHeight * 2) {
      users[i] = createUser();
    }
  }
  mk.noErase();
}

function createUser() {
  let user = {};
  user.x = random(windowWidth);
  user.y = windowHeight + random(5);
  user.length = random(windowHeight, windowHeight * 2);
  user.width = random(5, 10);
  user.color = color(random(100, 0));
  user.speed = random(0.5, 1);
  return user;
}
