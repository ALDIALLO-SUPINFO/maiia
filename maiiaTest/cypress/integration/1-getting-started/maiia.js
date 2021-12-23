describe('Maiia QA test technique', () => {

	let Data;
	beforeEach(() => {
		cy.fixture('example').then((data) => {
			Data = data;
			return Data;
		});
	});
	it('visit miaa', () => {
		cy.visit('https://www.staging.maiia.com/')

		cy.get('#downshift_input_0').type(Data.doctorName)
		cy.contains(Data.doctorName).click()
		cy.get('#consultationReasonName').click()
		cy.get('[data-cy="Ablation de fils"]').click()
		cy.get('.search-card__rdv').should('be.visible')


	})

})