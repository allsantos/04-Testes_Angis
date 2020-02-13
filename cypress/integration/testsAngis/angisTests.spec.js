/// <reference types='cypress'/>
import pageCadastroUser from '../pages/pageCadastroUser'
import pageLogin from '../pages/pageLogin'
import pagePrimeirosPassos from '../pages/pagePrimeirosPassos'
import pageEsqueceuSenha from '../pages/pageEsqueceuSenha'

describe('Primeiros Teste', () => {
    beforeEach(() => {
        cy.visit('/')
        // pageLogin.setUsuario('')
        // pageLogin.setSenha('')
        // pageLogin.clickEntrar()
    })

    it('Tentativa de Login Sem Cadastro', () => {
        pageLogin.setUsuario('')
        pageLogin.setSenha('')
        pageLogin.clickEntrar()

        cy.location('').should('eq', '/PAGINA X.asp')
    })
    it('Cadastrar Usuario', () => {
        pageLogin.clickCadastrarUser()
        pageCadastroUser.setCnpjCad('')
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
    })
    it('Esqueci minha Senha', () => {
        pageLogin.clickEsqueciSenha()
        pageEsqueceuSenha.setInfoEmail('')
        pageEsqueceuSenha.clickCancelarEsqSenha()
        pageLogin.clickEsqueciSenha()
        pageEsqueceuSenha.setInfoEmail('')
        pageEsqueceuSenha.clickEnviarEmailenviaremail('')
        pageEsqueceuSenha.clickVoltaHomeEsqSen()
    })
    it('Tela Criar Senha', () => {

    })
    it('Fazer Login', () => {
        pageLogin.setUsuario('')
        pageLogin.setSenha('')
        pageLogin.clickEntrar()
    })
    it('Primeiro Passos Após Login', () => {
        pageLogin.setUsuario('')
        pageLogin.setSenha('')
        pageLogin.clickEntrar()

        pagePrimeirosPassos.clickProsseguir()
        pagePrimeirosPassos.clickN51And200()
        pagePrimeirosPassos.clickN201And500()
        pagePrimeirosPassos.clickN501And1000()
        pagePrimeirosPassos.clickN1001And5000()
        pagePrimeirosPassos.clickMais5000()
        pagePrimeirosPassos.clickProcesseguirCtes()

        pagePrimeirosPassos.clickNenhum()
        pagePrimeirosPassos.clickN1A3()
        pagePrimeirosPassos.clickN4A10()
        pagePrimeirosPassos.clickN11A20()
        pagePrimeirosPassos.clickN21A51()
        pagePrimeirosPassos.clickMais50()
        pagePrimeirosPassos.clickIniciarApp()
        
    })
})

