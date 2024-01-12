const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
	const text = generateText('Pavlo', 25);
	expect(text).toBe('Pavlo (25 years old)');
});

test('should output data-less text', () => {
	const text = generateText('', undefined);
	expect(text).toBe(' (undefined years old)');
});

test('should generate a valid text output', () => {
	const text = checkAndGenerate('Pavlo', 25);
	expect(text).toBe('Pavlo (25 years old)');
});

test('should create an element with text and correct class', async () => {
	const browser = await puppeteer.launch({
		headless: false,
		args: ['--window-size=1600,800'],
	});
	const page = await browser.newPage();
	await page.goto(
		'file:///C:/Users/pkura/JavaScript/PetJavaScript/jsTesting/index.html'
	);
	await page.click('input#name');
	await page.type('input#name', 'Pete');
	await page.click('input#age');
	await page.type('input#age', '30');
	await page.click('#btnAddUser');
	const finalText = await page.$eval('.user-item', el => el.textContent);
	expect(finalText).toBe('Pete (30 years old)');
}, 20000);
