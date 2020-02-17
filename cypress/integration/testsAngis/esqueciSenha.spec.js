/// <reference types='cypress'/>

describe('Recupera Senha', () => {
    beforeEach(() => {
        cy.visit('/')
        pageLogin.setUsuario('')
        pageLogin.setSenha('')
        pageLogin.clickEntrar()
    })

    it('Esqueci minha Senha', () => {
        cy.title().should('to.be', '')

        pageLogin.clickEsqueciSenha()
        pageEsqueceuSenha.setInfoEmail('')
        cy.get().should('have.value', '')

        pageEsqueceuSenha.clickCancelarEsqSenha()
        pageLogin.clickEsqueciSenha()

        pageEsqueceuSenha.setInfoEmail('')
        pageEsqueceuSenha.clickEnviarEmailenviaremail('')
        
        pageEsqueceuSenha.clickVoltaHomeEsqSen()

        cy.location().should('eq', '/NOMEGA DA PAGINA')
    })
})