describe('Validação de cadastro', () =>{
    it('Validação de cadastro corretamente', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get(':nth-child(2) > a').click()
        cy.get('#nome').click().type('leao')
        cy.get('#email').click().type('leaoteste@hotmail.com')
        cy.get('#senha').click().type('123456')
        cy.get('.btn').click()
        cy.get('.alert').should('be.visible')
    })

    it('Validação de login cadastrado corretamente', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('#email').click().type('leaoteste@hotmail.com')
        cy.get('#senha').click().type('123456')
        cy.get('.btn').click()
        cy.get('.dropdown-toggle').should('be.visible')
    })

    it('Nome no cadastro com caracteres numéricos', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get(':nth-child(2) > a').click()
        cy.get('#nome').click().type('leao12234')
        cy.get('#email').click().type('emaildiferente3@hotmail.com')
        cy.get('#senha').click().type('123456')
        cy.get('.btn').click()
        cy.get('#nome').should('be.visible')
    })

    it('Nome no cadastro com caracteres especiais', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get(':nth-child(2) > a').click()
        cy.get('#nome').click().type('leao@#$')
        cy.get('#email').click().type('emaildiferente2@hotmail.com')
        cy.get('#senha').click().type('123456')
        cy.get('.btn').click()
        cy.get('#nome').should('be.visible')
    })

    it('Nome no cadastro com caracteres especiais', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get(':nth-child(2) > a').click()
        cy.get('#nome').click().type('leao@#$')
        cy.get('#email').click().type('emaildiferente1@hotmail.com')
        cy.get('#senha').click().type('123456')
        cy.get('.btn').click()
        cy.get('#nome').should('be.visible')
    })

    it('Senha no cadastro com espaço', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get(':nth-child(2) > a').click()
        cy.get('#nome').click().type('leao')
        cy.get('#email').click().type('emaildiferente@hotmail.com')
        cy.get('#senha').click().type('123 456')
        cy.get('.btn').click()
        cy.get('#nome').should('be.visible')
    })




    
})