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
      .should('contain', 'Email is required')
  })
  it('requires password', () => {
    cy.get('#mui-1').type('platformowner@heroapp.com').click()
    .wait(10000)
    cy.contains('Password is required')
  })
  
  })
  */
  it('has forgot password', () => {
    cy.contains('Forgot Password?').click()
    cy.url().should('include', '/account/forgotPassword')
    cy.go('back')
    cy.reload()
  })
  it('has Terms of Service', () => {
    cy.contains('Terms of Service').click()
    cy.url().should('include', '/')
    cy.go('back')
    cy.reload()
  })
  it('has Terms of Service', () => {
    cy.contains('Privacy Policy').click()
    cy.url().should('include', '/')
    cy.go('back')
    cy.reload()
  })
  
  it('requires a valid username and password', () => {
    cy.get('#mui-1').type('platformowner@heroapp.com')
    cy.get('#mui-2').type('HERO123!!!')
    cy.get('#mui-4').click()
  })
  
  it('logs in successfully', () => {
    cy.contains('Dashboard').should('exist')
  })
  
})