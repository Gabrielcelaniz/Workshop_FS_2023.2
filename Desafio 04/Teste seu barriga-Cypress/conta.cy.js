describe('Validação de cadastro e gestão de contas', () =>{

it('Validação de cadastrado de conta corretamente', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('#email').click().type('leaoteste@hotmail.com')
    cy.get('#senha').click().type('123456')
    cy.get('.btn').click()
    cy.get('.dropdown-toggle').should('be.visible')
    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(1) > a').click()
    cy.get('#nome').click().type('joao')
    cy.get('.btn').click()
    cy.get('thead > tr > :nth-child(2)').should('be.visible')
})

it('Validação de cadastrado de conta com caracteres especiais', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('#email').click().type('leaoteste@hotmail.com')
    cy.get('#senha').click().type('123456')
    cy.get('.btn').click()
    cy.get('.dropdown-toggle').should('be.visible')
    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(1) > a').click()
    cy.get('#nome').click().type('joao$')
    cy.get('.btn').click()
    cy.get('#nome').should('be.visible')
})

it('Validação de cadastrado de conta com caracteres numéricos', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('#email').click().type('leaoteste@hotmail.com')
    cy.get('#senha').click().type('123456')
    cy.get('.btn').click()
    cy.get('.dropdown-toggle').should('be.visible')
    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(1) > a').click()
    cy.get('#nome').click().type('joao1234')
    cy.get('.btn').click()
    cy.get('#nome').should('be.visible')
})

})
