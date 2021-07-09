describe('My First Test', () => {
    it('Visits the homepage', () => {
        cy.visit('https://www.readeo.com/')

        cy.get('h1').should('have.text', 'Storytime is a video chat away')
        cy.get('.mobile-nav nav > a:nth-child(6) div').should('have.text', 'log in')
    })

    it('Login', () => {
        cy.visit('https://localhost:3000/login')

        cy.get('h3').should('have.text', 'Welcome to Readeo')
        cy.get('input[name="email"]').type('EMAIL')
        cy.get('input[name="password"]').type('PASSWORD')
        cy.get('button[type="submit"]').click()


        cy.get('button[aria-label="Close"]').click()
        cy.wait(500)
        cy.get('div[data-testid="NAV_MENU_DESKTOP"] > a:first-child > div').should('have.text', 'library')
    })
})
