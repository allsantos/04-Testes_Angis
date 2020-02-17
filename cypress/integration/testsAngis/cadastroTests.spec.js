/// <reference types='cypress'/>
import pageCadastroUser from '../pages/pageCadastroUser'
import pageLogin from '../pages/pageLogin'
import pageEsqueceuSenha from '../pages/pageEsqueceuSenha'

describe('Primeiros Teste', () => {
    beforeEach(() => {
        cy.visit('/')
         pageLogin.setUsuario('')
         pageLogin.setSenha('')
         pageLogin.clickEntrar()
    })

    it('Cadastrar Usuario', () => {
        cy.title().should('to.be', '')

        pageLogin.clickCadastrarUser()

        cy.get('').should('not.exist')
        pageCadastroUser.setCnpjCad('')
        cy.get('').should('exist')
        cy.get('').then(($el) => {
            expect($el.text()).to.be.eq('Nome da Mensagem')
        })
        
        pageCadastroUser.setCpfCad('')
        pageCadastroUser.setNomeCad('')
        pageCadastroUser.setEmailCad('')
        pageCadastroUser.setConfirEmailCad('')
        pageCadastroUser.clickGravarCad() // Retornar mensagem de Email Invalido
        cy.get('').then(($el) => {
            expect($el.text()).to.be.eq('')
        })
        pageCadastroUser.clickGravarCad('') // Passa para proxima pagina
        cy.get('').then(($el) => {
            expect($el.text()).to.be.eq('')
        })
        cy.get('').then(($el) => {
            expect($el.text()).to.be.eq('')
        })
        pageCadastroUser.clickInicio('')

        cy.location('').should('eq', '/PAGINA X.asp')
    })
})

