/// <reference types='cypress'/>

import pageEsqueceuSenha from  '../pages/pageEsqueceuSenha'
import pageLogin from  '../pages/pageLogin'


describe('Recupera Senha', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.reload()
        })

    it('Esqueci minha Senha', () => {
        cy.url().should('contain', '')

        pageLogin.clickEsqueciSenha()
        cy.url().should('contain', 'forgot-password')
        cy.wait(2000)

        // cy.get('.MuiInputBase-input').should('have.value', 'allan.santos@signa.net.br')
        pageEsqueceuSenha.setInfoEmail('allan.santos@signa.net.br')
        cy.wait(2000)
        pageEsqueceuSenha.clickEnviarEmailenviaremail()
        cy.wait(2000)
        cy.url().should('contain', 'message')

        cy.wait(2000)
        pageEsqueceuSenha.clickVoltaPageLogin()
        //cy.location().should('eq', '')
    })
    it('Clica Botão Cancelar', () => {
        cy.wait(2000)
        pageLogin.clickEsqueciSenha()
        cy.wait(2000)
        cy.url().should('contain', 'forgot-password')
        
        pageEsqueceuSenha.clickCancelarEsqSenha()
        cy.wait(2000)
    })
    it('Digita e-mail invalido', () => {
        cy.wait(2000)
        pageLogin.clickEsqueciSenha()
        cy.wait(2000)

        pageEsqueceuSenha.setInfoEmail('dawdadaawd.santos@signa.net.br')
        cy.wait(3000)
        pageEsqueceuSenha.clickEnviarEmailenviaremail()
    })
})