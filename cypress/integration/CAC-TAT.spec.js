/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('src/index.html')
})

describe('Central de Atendimento ao Cliente TAT', function () {
    it('verifica o título da aplicação', function () {

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
})

describe('preenche os campos obrigatórios e envia o formulário', function () {
    it('verifica o título da aplicação', function () {

        cy.get('#firstName').type
    })
})
