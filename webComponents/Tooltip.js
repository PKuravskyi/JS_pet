class Tooltip extends HTMLElement {
	#tooltipContainer;
	#tooltipText;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.#tooltipText = this.getAttribute('text') || 'Default tooltip text!';
		this.shadowRoot.innerHTML = `
      <style>
        div {
          background-color: #3498db;
          color: #ffffff;
          position: absolute;
          z-index: 10;
        }
      </style>
      <slot></slot>
      <span> (?)</span>
    `;
	}

	connectedCallback() {
		const tooltipIcon = this.shadowRoot.querySelector('span');
		tooltipIcon.addEventListener('mouseenter', this.#showTooltip.bind(this));
		tooltipIcon.addEventListener('mouseleave', this.#hideTooltip.bind(this));
		this.shadowRoot.appendChild(tooltipIcon);
		this.style.position = 'relative';
	}

	#showTooltip() {
		this.#tooltipContainer = document.createElement('div');
		this.#tooltipContainer.textContent = this.#tooltipText;
		this.shadowRoot.appendChild(this.#tooltipContainer);
	}

	#hideTooltip() {
		this.shadowRoot.removeChild(this.#tooltipContainer);
	}
}

customElements.define('pk-tooltip', Tooltip);
