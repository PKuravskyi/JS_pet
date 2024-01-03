class Product {
	constructor(title, imageUrl, price, description) {
		this.title = title;
		this.imageUrl = imageUrl;
		this.price = price;
		this.description = description;
	}
}

class ShoppingCart extends Component {
	products = [];

	set cartProducts(value) {
		this.products = value;
		this.totalOutput.innerHTML = `<h2>Total: $${this.totalAmount.toFixed(
			2
		)}</h2>`;
	}

	get totalAmount() {
		const sum = this.products.reduce(
			(prevValue, curProd) => prevValue + curProd.price,
			0
		);
		return sum;
	}

	constructor(renderHookId) {
		super(renderHookId);
	}

	addProduct(product) {
		const updatedProducts = [...this.products];
		updatedProducts.push(product);
		this.cartProducts = updatedProducts;
	}

	orderProducts() {
		console.log(this.products);
	}

	render() {
		const cartEl = this.createRootElement('section', 'cart');
		cartEl.innerHTML = `
      <h2 id="total-amount">Total: $0</h2>
      <button id="order-btn">Order Now!</button>
    `;
		const orderBtn = cartEl.querySelector('#order-btn');
		orderBtn.addEventListener('click', () => this.orderProducts());
		this.totalOutput = cartEl.querySelector('#total-amount');
	}
}

class ProductItem extends Component {
	constructor(product, renderHookId) {
		super(renderHookId, false);
		this.product = product;
		this.render();
	}

	addToCart() {
		App.addProductToCart(this.product);
	}

	render() {
		const prodEl = this.createRootElement('li', 'product-item');
		prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}"/>
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>$${this.product.price}</h3
            <p>${this.product.description}</p>
            <button class="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
      `;
		const addToCartBtn = prodEl.querySelector('.add-to-cart-btn');
		addToCartBtn.addEventListener('click', this.addToCart.bind(this));
	}
}

class ProductList extends Component {
	products = [];

	constructor(renderHookId) {
		super(renderHookId);
		this.#fetchProducts();
	}

	#fetchProducts() {
		this.products = [
			new Product(
				'Cheeseburger',
				'https://cdn-media.choiceqr.com/prod-eat-vrebro/menu/GqBdFCE-MdRDjVt-kptEuuj.jpeg',
				7.99,
				'A mouthwatering blend of seasoned beef, melted cheese, fresh veggies, and our special sauce, all nestled in a soft, toasted bun.'
			),
			new Product(
				'CoCo Burger',
				'https://cdn-media.choiceqr.com/prod-eat-vrebro/menu/KNbJYeF-zpsDPsD-flhHcaH.jpeg',
				6.49,
				'A delightful fusion of tender, seasoned chicken, melted cheese, crisp lettuce, juicy tomatoes, and our signature sauce, all embraced by a soft, toasted bun.'
			),
			new Product(
				'Shrimp Burger',
				'https://cdn-media.choiceqr.com/prod-eat-vrebro/menu/CCwMjlG-duUymyW-EUFyeDG.jpeg',
				11.99,
				'A tantalizing blend of succulent shrimp, flavorful seasonings, crisp lettuce, ripe tomatoes, and our special sauce, all nestled within a soft, toasted bun.'
			),
		];
		this.renderProducts();
	}

	renderProducts() {
		for (const prod of this.products) {
			new ProductItem(prod, 'prod-list');
		}
	}

	render() {
		this.createRootElement('ul', 'product-list', [
			new ElementAttribute('id', 'prod-list'),
		]);
		if (this.products && this.products.length > 0) {
			this.renderProducts();
		}
	}
}

class Shop {
	constructor() {
		this.render();
	}

	render() {
		this.cart = new ShoppingCart('app');
		new ProductList('app');
	}
}

class App {
	static init() {
		const shop = new Shop();
		this.cart = shop.cart;
	}

	static addProductToCart(product) {
		this.cart.addProduct(product);
	}
}

App.init();
