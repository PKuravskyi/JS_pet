class Modal extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
      <style>
        #backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0,0,0,0.75);
          z-index: 10;
          opacity: 0;
          pointer-events: none;
        }

        :host([opened]) #backdrop,
        :host([opened]) #modal {
          opacity: 1;
          pointer-events: all;
        }

        :host([opened]) #modal {
          top: 15vh;
        }

        #modal {
          z-index: 100;
          position: fixed;
          top: 10vh;
          left: 25%;
          width: 50%;
          background: white;
          border-radius: 3px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.25);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease-out;
        }

        header {
          padding: 1rem;
          border-bottom: 1px solid #ccc;
        }

        ::slotted(h1) {
          font-size: 1.25rem;
          margin: 0;
        }

        #main {
          padding: 1rem;
        }

        #actions {
          border-top: 1px solid #ccc;
          padding: 1rem;
          display: flex;
          justify-content: flex-end;
        }

        #actions button {
          margin: 0 0.25rem;  
        }
      </style>
      <div id="backdrop"></div>
      <div id="modal">
        <header>
          <slot name="title">Please Confirm Payment</slot>
        </header>
        <section id="main">
          <slot></slot>
        </section>
        <section id="actions">
          <button id="cancel-btn">Cancel</button>  
          <button id="confirm-btn">Confirm</button>  
        </section>
      </div>
    `;
		const backdrop = this.shadowRoot.getElementById('backdrop');
		const cancelBtn = this.shadowRoot.getElementById('cancel-btn');
		const confirmBtn = this.shadowRoot.getElementById('confirm-btn');
		backdrop.addEventListener('click', this.#cancel.bind(this));
		cancelBtn.addEventListener('click', this.#cancel.bind(this));
		confirmBtn.addEventListener('click', this.#confirm.bind(this));
	}

	open() {
		this.setAttribute('opened', '');
	}

	hide() {
		if (this.hasAttribute('opened')) {
			this.removeAttribute('opened');
		}
	}

	#cancel(event) {
		this.hide();
		event.target.dispatchEvent(
			new Event('cancel', { bubbles: true, composed: true })
		);
	}

	#confirm() {
		this.hide();
		this.dispatchEvent(new Event('confirm'));
	}
}

customElements.define('pk-modal', Modal);
