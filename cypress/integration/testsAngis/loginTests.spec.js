/// <reference types='cypress'/>
import pageLogin from '../pages/pageLogin'

describe('TesteLogin', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    

    it('Login SEM Cadastro', () => {
        cy.title().should('be.eq', 'React App') 
        
        // cy.get('@iframe').then(($el) => {
        //     expect($el.text()).to.be.eq('O campo Cnpj / Cpf é obrigatório.')
        // }) 

        pageLogin.getUsuario('hy54t3wesdfc')
        //expect('.MuiFormControl-marginNormal .MuiInputBase-inputAdornedStart').to.not.null // ou .to.be.null
        //expect('.MuiFormControl-marginNormal .MuiInputBase-inputAdornedStart')
        cy.pause()
        //expect('.MuiFormControl-marginNormal .MuiInputBase-inputAdornedStart'," Tamanha Input User").to.have.length(60) // Verifica o tamanho do input
        // expect(null).to.be.null ou expect(null).to.not.null
        //expect('setUsuario').should('have.value', 'hy54t3wesdfc')

        cy.get(' CAMPO DA MENSAGEM').should('not.exist') // Verifica se a mensagem não Existe
        pageLogin.clickEntrar()
        cy.get(' CAMPO DA MENSAGEM').should('exist') // Verifica se a mensagem Existe
        cy.get('').then(($el) => {
            expect($el.text()).to.be.eq('NOME DA MENSAGEM')
        })
        cy.pause()
        pageLogin.setSenha('daw1231#$%¨&o○Ü○+')
        //expect('div.MuiFormControl-root.MuiTextField-root.jss104.jss105 > div > input', "Tamanha Input Pass").to.have.length(69) // Verifica o tamanho do input
        pageLogin.clickEntrar()

        cy.pause()
        //cy.get('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.btn-gradient.btn-login').should('exist')
        pageLogin.clickEntrar()
        
        // expect('.MuiFormControl-marginNormal .MuiInputBase-inputAdornedStart', 'AQUI').to.have.ownProperty('length')
        // expect('.MuiFormControl-marginNormal .MuiInputBase-inputAdornedStart').to.have.length.of.at.most()
        
        cy.location('pathname').should('eq', '/dashboard')
        cy.url().should('contain', 'dashboard')
    })

    it.skip('Login COM Cadastro', () => {
        pageLogin.setUsuario('')
        expect('.MuiFormControl-marginNormal .MuiInputBase-inputAdornedStart').to.be.eq('hy54t3wesdfc')
        pageLogin.setSenha('')
        pageLogin.clickEntrar()

        cy.location('').should('eq', '/PAGINA X.asp')
    })
})