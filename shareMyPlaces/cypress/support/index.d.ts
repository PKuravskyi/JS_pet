export {};
declare global {
	namespace Cypress {
		interface Chainable {
			get<S = any>(
				alias: string,
				options?: Partial<Loggable & Timeoutable & Withinable & Shadow>
			): Chainable<S>;
			verifyAddressTitleNotEmpty(): Chainable<Element>;
			getByDataCyId(value: string): Chainable<Element>;
		}
	}
}
