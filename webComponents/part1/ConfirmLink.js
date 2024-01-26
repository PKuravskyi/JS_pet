class ConfirmLink extends HTMLAnchorElement {
	connectedCallback() {
		this.addEventListener('click', event => {
			if (!confirm('Are you ready to go down the rabbit hole?🕳️')) {
				event.preventDefault();
			}
		});
	}
}

customElements.define('pk-confirm-link', ConfirmLink, { extends: 'a' });
