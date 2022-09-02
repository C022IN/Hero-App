/// <reference types = "cypress"/>
describe('Menu - Crisis Centers', () => {
    it('passes', () => {
      cy.visit('https://test-app.heroalertall.io/')
    })
    it('has the Sign In text', () => {
      cy.contains('Sign In')
    })
    
    it('requires a valid username and password', () => {
      cy.get('#mui-1').type('platformowner@heroapp.com')
      cy.get('#mui-2').type('HERO123!!!')
      cy.get('#mui-4')
        .click()
    })
  
    it('go to Menu', () => {
      cy.get('[data-testid="MenuIcon"]')
        .click()
    })
    it('go to Crisis Centers', () => {
      cy.get('.css-1ulc0kq > :nth-child(3) > .MuiButtonBase-root > .MuiBox-root')
           .click()
    })
    it('go to dashboard', () => {
      
    })
    it('go to dashboard', () => {
      
    })
    
  })