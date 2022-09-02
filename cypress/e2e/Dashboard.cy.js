/// <reference types = "cypress"/>
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://test-app.heroalertall.io/')
  })
  it('has the Sign In text', () => {
    cy.contains('Sign In')
  })
  /*it('requires email', () => {
    cy.get('#mui-1').click().wait(10000)
    cy.contains('Email is required')
  })
  it('requires password', () => {
    cy.get('#mui-1').type('platformowner@heroapp.com').click()
    .wait(10000)
    cy.contains('Password is required')
  })
  
  })
  */
  it('has forgot password', () => {
    cy.contains('Forgot Password?')
    
  })
  
  it('requires a valid username and password', () => {
    cy.get('#mui-1').type('platformowner@heroapp.com')
    cy.get('#mui-2').type('HERO123!!!')
    cy.get('#mui-4').click()
  })
  
  it('logs in successfully', () => {
    cy.contains('Dashboard')
  })
  it('go to Menu', () => {
    cy.get('[data-testid="MenuIcon"]').click()
  })
  it('go to dashboard', () => {
    cy.get('.css-1ulc0kq > :nth-child(1) > .MuiButtonBase-root').click()
  })
  it('go to dashboard', () => {
    
  })
  it('go to dashboard', () => {
    
  })
  
})