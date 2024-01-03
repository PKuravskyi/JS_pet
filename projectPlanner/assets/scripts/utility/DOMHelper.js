export class DOMHelper {
	static clearEventListener(element) {
		const clonedEl = element.cloneNode(true);
		element.replaceWith(clonedEl);
		return clonedEl;
	}

	static moveElement(elementId, newDestinationSelector) {
		const element = document.getElementById(elementId);
		const destinationEl = document.querySelector(newDestinationSelector);
		destinationEl.append(element);
		element.scrollIntoView({ behavior: 'smooth' });
	}
}
