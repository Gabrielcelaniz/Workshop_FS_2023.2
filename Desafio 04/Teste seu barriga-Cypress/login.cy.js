describe('Validação de Login', () =>{
    it('Validação de Login corretamente', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('#email').click().type('gabrielteste@hotmail.com')
        cy.get('#senha').click().type('123456')
        cy.get('.btn').click()
        cy.get('.alert').should('be.visible')
    })

    it('Validação de Login com senha errada', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('#email').click().type('gabrielteste@hotmail.com')
        cy.get('#senha').click().type('fadffa')
        cy.get('.btn').click()
        cy.get('.active > a').should('be.visible')
    })

    it('Validação de Login com email errado', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('#email').click().type('naoexiste@hotmail.com')
        cy.get('#senha').click().type('123456')
        cy.get('.btn').click()
        cy.get('.active > a').should('be.visible')
    })

    it('Validação de Login sem preencher nada', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('.btn').click()
        cy.get('.active > a').should('be.visible')
    })

    it('Validação de Login sem digitar a senha', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('#email').click().type('gabrielteste@hotmail.com')
        cy.get('.btn').click()
        cy.get('.active > a').should('be.visible')
    })

    it('Validação de Login sem digitar o email', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('#senha').click().type('123456')
        cy.get('.btn').click()
        cy.get('.active > a').should('be.visible')
    })

    it('Validação de Login com espaço no campo de senha', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('#email').click().type('gabrielcelani@hotmail.com')
        cy.get('#senha').click().type('123 456')
        cy.get('.btn').click()
        cy.get('.active > a').should('be.visible')
    })

})