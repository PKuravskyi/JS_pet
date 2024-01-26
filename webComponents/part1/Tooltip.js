class Tooltip extends HTMLElement {
	#tooltipIcon;
	#tooltipVisible = false;
	#tooltipText;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.#tooltipText = this.getAttribute('text') || 'Default tooltip text!';
		this.shadowRoot.innerHTML = `
      <style>
        div {
					font-weight: normal;
          background-color: #3498db;
          color: #ffffff;
          position: absolute;
					top: 1.5rem;
					left: 0.75rem;
          z-index: 10;
					padding: 0.15rem;
					border-radius: 3px;
					box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
        }

				:host {
					position: relative;
				}

				:host(.important) {
					background-color: var(--color-primary, #ccc);
				}

				:host-context(p) {
					font-weight: bold;
				}

				::slotted(.highlight) {
					border-bottom: 1px solid blue;
				}

				.icon {
					background-color: black;
					color: white;
					padding: 0.15rem 0.5rem;
					text-align: center;
					border-radius: 50%;
					cursor: help;
				}
      </style>
      <slot></slot>
      <span class ="icon">?</span>
    `;
	}

	connectedCallback() {
		this.#tooltipIcon = this.shadowRoot.querySelector('span');
		this.#tooltipIcon.addEventListener(
			'mouseenter',
			this.#showTooltip.bind(this)
		);
		this.#tooltipIcon.addEventListener(
			'mouseleave',
			this.#hideTooltip.bind(this)
		);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue === newValue) {
			return;
		}
		if (name === 'text') {
			this.#tooltipText = newValue;
			this.#render();
		}
	}

	disconnectedCallback() {
		this.#tooltipIcon.removeEventListener('mouseenter', this.#showTooltip);
		this.#tooltipIcon.removeEventListener('mouseleave', this.#hideTooltip);
	}

	static get observedAttributes() {
		return ['text'];
	}

	#render() {
		let tooltipContainer = this.shadowRoot.querySelector('div');
		if (this.#tooltipVisible) {
			tooltipContainer = document.createElement('div');
			tooltipContainer.textContent = this.#tooltipText;
			this.shadowRoot.appendChild(tooltipContainer);
		} else {
			if (tooltipContainer) {
				this.shadowRoot.removeChild(tooltipContainer);
			}
		}
	}

	#showTooltip() {
		this.#tooltipVisible = true;
		this.#render();
	}

	#hideTooltip() {
		this.#tooltipVisible = false;
		this.#render();
	}
}

customElements.define('pk-tooltip', Tooltip);
