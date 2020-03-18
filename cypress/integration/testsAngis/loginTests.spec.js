/// <reference types='cypress'/>
import pageLogin from '../pages/pageLogin'

describe('TesteLogin', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.reload()
    })

    it.skip('Teste Usando o Random', () => {
        cy.get('.MuiButton-label').click()

        var text = "" ;
            var possible = "1234567890";
            for (var i = 0; i < 7; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length)) ;
        const cnpj = text + '000010'
        cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-grid-xs-true > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(cnpj)
        cy.get('.MuiButton-label').click()
        cy.wait(2000)
        cy.get('.MuiAlert-action > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
        
        var text = "" ;
            var possible = "1234567890";
            for (var i = 0; i < 11; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length)) ;
        const cpf = text
        cy.get(':nth-child(4) > .MuiGrid-container > .MuiGrid-grid-xs-true > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(cpf)
        cy.get('.MuiButton-label').click()
        cy.wait(2000)
        cy.get('.MuiAlert-action > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()

        var text = "" ;
            var possible = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 9; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length)) ;
        const nome = text
        cy.get(':nth-child(5) > .MuiGrid-container > .MuiGrid-grid-xs-true > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type(nome)
        cy.get('.MuiButton-label').click()
        cy.wait(2000)

        for(let n = 0; n < 1; n ++){
        var text = "" ;
            var possible = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 9; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length)) ;
        const email = text + "@gmail.com"
        cy.get("div:nth-of-type(6) > .MuiGrid-align-items-xs-flex-end.MuiGrid-container.MuiGrid-root > .MuiGrid-grid-xs-true.MuiGrid-item.MuiGrid-root > .MuiFormControl-fullWidth.MuiFormControl-root.MuiTextField-root > .MuiInput-formControl.MuiInput-fullWidth.MuiInput-root.MuiInput-underline.MuiInputBase-formControl.MuiInputBase-fullWidth.MuiInputBase-root > .MuiInput-input.MuiInputBase-input").clear().type(email)
        cy.get("div:nth-of-type(7) > .MuiGrid-align-items-xs-flex-end.MuiGrid-container.MuiGrid-root > .MuiGrid-grid-xs-true.MuiGrid-item.MuiGrid-root > .MuiFormControl-fullWidth.MuiFormControl-root.MuiTextField-root > .MuiInput-formControl.MuiInput-fullWidth.MuiInput-root.MuiInput-underline.MuiInputBase-formControl.MuiInputBase-fullWidth.MuiInputBase-root > .MuiInput-input.MuiInputBase-input").clear().type(email)
        cy.get('.MuiButton-label').click()
        cy.wait(2000)
            
        var text = "" ;
            var possible = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()";
            for (var i = 0; i < 9; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length)) ;
        const senha = text
        
        cy.get("input#password").clear().type(senha);
        cy.get("input#confirmPassword").clear().type(senha);
        cy.get('.MuiButton-label').click()
        cy.wait(2000)

        // cy.get('#root > div > div > div > div > div:nth-child(8) > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-true > div > div > div > button > span.MuiIconButton-label > svg').click()
        // cy.get('#root > div > div > div > div > div.makeStyles-lastInput-277 > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-true > div > div > div > button > span.MuiIconButton-label > svg').click()

        cy.get("[class] .MuiFormControl-fullWidth:nth-child(2) > [tabindex]").click()

        }
    })

    it('Login COM Cadastro', () => {
        pageLogin.setUsuario('allan.santos@signa.net.br')
        pageLogin.setSenha('123456789')
        pageLogin.clickEntrar()
        cy.url().should('contain', 'dashboard')
        cy.wait(2000)
    })
    it('Digitar Sómente E-MAIL e Clicar em Entrar', () => {
        pageLogin.setUsuario('allan.santos@signa.net.br')
        pageLogin.clickEntrar()
        cy.get('.MuiAlert-message').then(($el) => {
            expect($el.text()).be.eq('Informe a Senha.') 
            cy.wait(2000)
        })
        
    })
    it('Digitar Sómente a Senha e Clicar em Entrar', () => {
        pageLogin.setSenha1('123456789')
        pageLogin.clickEntrar()
        cy.get('.MuiAlert-message').then(($el) => {
            expect($el.text()).be.eq('Informe o E-mail ou o Nome.')
            cy.wait(2000)
        })
        
    })
    it('Login SEM Cadastro', () => {
        cy.title().should('be.eq', 'Angis Web')

        pageLogin.setUsuario('allantestes@signa.net.br') // Digita usuario
        pageLogin.setSenha('123456789')
        pageLogin.clickEntrar()
        cy.get('.MuiAlert-message').then(($el) => {
            expect($el.text()).be.eq('Usuário não cadastrado, deseja realizar um cadastro?')
            cy.wait(2000)
        })
    })
    it('Teste Bruto', () => {
        pageLogin.setUsuario('liuytfgyuikjmnbvftyuiuytrfcvbnmkloiuygfdr678ui9o876trfdghjklkmnbvcfrt6789ijuh')
        pageLogin.setSenha('liuytfgyuikjmnbvftyuiuytrfcvbnmkloiuygfdr678ui9o876trfdghjklkmnbvcfrt6789ijuh')
        pageLogin.clickEntrarDash2()
    })
})