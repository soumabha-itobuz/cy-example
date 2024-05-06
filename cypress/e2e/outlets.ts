import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "./page/admin-login-page";

When ('Loggedin in admin dashboard', () => {
  loginPage.login()
}) 
Then ('Add outlets', () => {
  cy.get('.bg-deep-green')
  cy.contains('Hello, World')

  cy.contains('Hello, World')
  cy.contains('Hello, World')
  cy.contains('h3', 'All Outlets')
  

})
Then ('Added outlets should be listed in list', () => {
  
})
Then ('Edit new added item from list', () => {}) 
Then ('Edit data needs to check from list page', () => {}) 
Then ('Delete new item from list', () => {}) 
Then ('verify deleted items removed from list', () => {})