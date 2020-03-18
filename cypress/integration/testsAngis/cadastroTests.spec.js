/// <reference types='cypress'/>
import pageCadastroUser from '../pages/pageCadastroUser'
import pageLogin from '../pages/pageLogin'

describe('Primeiros Teste', () => {
    beforeEach(() => {
        cy.visit("/")
        pageLogin.clickCadastrarUser()
        cy.url().should('contain', 'signup')
        cy.reload()
    })

    it('Cadastrar Usuario Novo Usuario', () => {

        pageCadastroUser.clickGravarCad() // Msg "Informe o CNPJ"
        cy.wait(3000)
        cy.get('.MuiAlert-message').then(($el) => {
            expect($el.text()).be.eq('Informe o CNPJ.')
        })

        pageCadastroUser.setCnpjCad('61082004000150') 
        cy.wait(3000)
        pageCadastroUser.clickGravarCad() // "Informe o CPF"
        cy.wait(2000)
        pageCadastroUser.setValidaALert('Informe o CPF.')
        
        pageCadastroUser.setCpfCad('48501477044')
        cy.wait(3000)
        pageCadastroUser.clickGravarCad() // "Informe seu nome"
        cy.wait(2000)
        pageCadastroUser.setValidaALert('Informe seu Nome.')

        pageCadastroUser.setNomeCad('Allan Feitosa dos Santos')
        cy.wait(3000)
        pageCadastroUser.clickGravarCad() // "Informe o E-mail"
        cy.wait(2000)
        pageCadastroUser.setValidaALert('Informe seu E-mail')

        pageCadastroUser.setEmailCad('duiytrseaddzfghjklhmgnbf') 
        cy.wait(3000)
        pageCadastroUser.clickGravarCad()
        cy.wait(2000)
        pageCadastroUser.setValidaALert('Informe um Endereço de E-mail Válido')

        pageCadastroUser.setEmailCad('dev@signa.net.br') // "Os e-mails informados são diferente"
        cy.wait(3000)
        pageCadastroUser.clickGravarCad()
        cy.wait(2000)
        pageCadastroUser.setValidaALert('Os E-mails Informados são Diferentes.')

        pageCadastroUser.setConfirEmailCad('dev@signa.net.br') 
        cy.wait(3000)
        pageCadastroUser.clickGravarCad() // Informa sua Senha
        cy.wait(2000)
        pageCadastroUser.setValidaALert('Informa sua Senha')

        pageCadastroUser.setDigitaSenha('123')  
        cy.wait(3000)
        pageCadastroUser.clickGravarCad()
        cy.wait(2000)
        pageCadastroUser.setValidaALert('A Senha deve conter no Mínimo 8 Caracteres.')
        
        pageCadastroUser.setConfirmSenha('123')
        cy.wait(3000)
        pageCadastroUser.clickGravarCad() //  "Este e-mail já está cadastrado no nosso sistema.Faça login ou, se precisar de ajuda, entre em contato com o nosso suporte."
        cy.wait(2000)
        pageCadastroUser.setValidaALert('A Senha deve conter no Mínimo 8 Caracteres.')

        pageCadastroUser.setCpfCad('44790293890') // Corrige porem é um CPF ja cadsatrado
        cy.wait(3000)
        pageCadastroUser.clickGravarCad()
        cy.wait(2000)
        pageCadastroUser.setValidaALert('A Senha deve conter no Mínimo 8 Caracteres.')

        pageCadastroUser.setDigitaSenha('123456789')  
        cy.wait(3000)
        pageCadastroUser.clickGravarCad()
        cy.wait(2000)
        pageCadastroUser.setValidaALert('As Senhas Informadas são Diferentes.')
        
        pageCadastroUser.setConfirmSenha('123456789')
        cy.wait(3000)
        pageCadastroUser.clickGravarCad() 
        cy.wait(4000)
        //pageCadastroUser.setValidaALert('O CPF Informado já Existe na Base de Dados.')

        pageCadastroUser.setEmailCad('dawdad.santos@signa.net.br') // "Os e-mails informados são diferente"
        cy.wait(3000)
        pageCadastroUser.clickGravarCad() 
        cy.wait(2000)
        pageCadastroUser.setValidaALert('Os E-mails Informados são Diferentes.')

        pageCadastroUser.setEmailCad('allan.santos@signa.net.br')
        cy.wait(3000)
        pageCadastroUser.clickGravarCad()
        cy.wait(2000)
        pageCadastroUser.setValidaALert('Os E-mails Informados são Diferentes.')

        pageCadastroUser.setConfirEmailCad('dawdad.santos@signa.net.br')
        cy.wait(3000)
        pageCadastroUser.clickGravarCad() // Informa sua Senha
        cy.wait(2000)
        pageCadastroUser.setValidaALert('Os E-mails Informados são Diferentes.')

        pageCadastroUser.setConfirEmailCad('allan.santos@signa.net.br')
        cy.wait(3000)
        pageCadastroUser.clickGravarCad()
        //pageCadastroUser.setValidaALert('')
    })

    it('Cad CNPJ ja cadastrado Pendente', () => {
        cy.url().should('contain', 'signup')
        cy.wait(2000)
        pageCadastroUser.setCnpjCad('61194353000164') 

        cy.url().should('contain', 'pending')

        cy.wait(3000)

        pageCadastroUser.clickVoltarCad() // Voltar Para tela de Login
        cy.url().should('contain', '')
        
    })
    it('Cad CNPJ ja cadastrado Ativo', () => {
        cy.url().should('contain', 'signup')
        cy.wait(2000)
        pageCadastroUser.setCnpjCad("57119000000122") 

        cy.url().should('contain', 'signup/pending')

        cy.wait(3000)

        pageCadastroUser.clickVoltarCad() // Voltar Para tela de Login
        //cy.url().should('contain', '')
    })
})
