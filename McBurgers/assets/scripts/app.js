class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title
    this.imageUrl = imageUrl
    this.price = price
    this.description = description
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.attrName = attrName
    this.attrValue = attrValue
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootEl = document.createElement(tag)
    if (cssClasses) {
      rootEl.className = cssClasses
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootEl.setAttribute(attr.attrName, attr.attrValue)
      }
    }
    document.getElementById(this.hookId).append(rootEl)
    return rootEl
  }
}

class ShoppingCart extends Component {
  products = []

  set cartProducts(value) {
    this.products = value
    this.totalOutput.innerHTML = `<h2>Total: $${this.totalAmount.toFixed(
      2
    )}</h2>`
  }

  get totalAmount() {
    const sum = this.products.reduce(
      (prevValue, curProd) => prevValue + curProd.price,
      0
    )
    return sum
  }

  constructor(renderHookId) {
    super(renderHookId)
  }

  addProduct(product) {
    const updatedProducts = [...this.products]
    updatedProducts.push(product)
    this.cartProducts = updatedProducts
  }

  render() {
    const cartEl = this.createRootElement('section', 'cart')
    cartEl.innerHTML = `
      <h2>Total: $${0}</h2>
      <button>Order Now!</button>
    `

    this.totalOutput = cartEl.querySelector('h2')
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId)
    this.product = product
  }

  addToCart() {
    App.addProductToCart(this.product)
  }

  render() {
    const prodEl = this.createRootElement('li', 'product-item')
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
      `
    const addToCartBtn = prodEl.querySelector('.add-to-cart-btn')
    addToCartBtn.addEventListener('click', this.addToCart.bind(this))
  }
}

class ProductList extends Component {
  products = [
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
  ]

  constructor(renderHookId) {
    super(renderHookId)
  }

  render() {
    this.createRootElement('ul', 'product-list', [
      new ElementAttribute('id', 'prod-list'),
    ])
    for (const prod of this.products) {
      const productItem = new ProductItem(prod, 'prod-list')
      productItem.render()
    }
  }
}

class Shop {
  render() {
    this.cart = new ShoppingCart('app')
    this.cart.render()
    const productList = new ProductList('app')
    productList.render()
  }
}

class App {
  static init() {
    const shop = new Shop()
    shop.render()
    this.cart = shop.cart
  }

  static addProductToCart(product) {
    this.cart.addProduct(product)
  }
}

const app = new App()

App.init()
