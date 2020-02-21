/// <reference types='cypress'/>
import pageCadastroUser from '../pages/pageCadastroUser'
import pageLogin from '../pages/pageLogin'

describe('Primeiros Teste', () => {
    beforeEach(() => {
        cy.visit("http://stage.signainfo.com.br/")
    })

    it('Cadastrar Usuario', () => {
        cy.title('').should('to.be', '')

        cy.get('').should('not.exist') // Mensagem que ainda não apareceu
        pageLogin.clickCadastrarUser()
        cy.get('#novoCampo').should('exist')
        cy.location().url()

        pageCadastroUser.setCnpjCad('')
        pageCadastroUser.clickGravarCad()

        pageCadastroUser.setCpfCad('')
        pageCadastroUser.clickGravarCad()
        
        pageCadastroUser.setNomeCad('')
        pageCadastroUser.clickGravarCad()

        pageCadastroUser.setEmailCad('')
        pageCadastroUser.clickGravarCad()

        pageCadastroUser.setConfirEmailCad('')
        pageCadastroUser.clickGravarCad()
        
        pageCadastroUser.clickGravarCad() // Retornar mensagem de Email Invalido

        pageCadastroUser.clickInicio()

        cy.location('').should('eq', '/PAGINA X.asp')

//----------------------------------------------------------------------------
cy.get('').should('exist')
cy.get('').then(($el) => {
    expect($el.text()).to.be.eq('Nome da Mensagem')
    cy.get('').should('not.exist')
})

    })
})

