//взять холст
const canvas = document.getElementById('canvas1');

//метод рисования
const ctx = canvas.getContext('2d');

//размеры холста
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

//вставка изображения
const playerImage = new Image();
playerImage.src = 'src/img/shadow_dog.png';
//ширина 1 спрайта
const spriteWidth = 575;
// высоат 1 спрайта
const spriteHeight = 523;
//смена спрайтов
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 4;

function animate() {
	//очистить холст
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	//изображение которое хочу нарисовать и их координаты x y
	ctx.drawImage(
		playerImage,
		frameX * spriteWidth,
		frameY * spriteHeight,
		spriteWidth,
		spriteHeight,
		0,
		0,
		spriteWidth,
		spriteHeight
	);
	if (gameFrame % staggerFrames == 0) {
		if (frameX < 6) frameX++;
		else frameX = 0;
	}
	//меняем frame и тем самым создаём анимацию

	gameFrame++;

	//запуск рекурсии с отрисовкой фигуры
	requestAnimationFrame(animate);
}
animate();
