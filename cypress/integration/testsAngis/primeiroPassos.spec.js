/// <reference types='cypress'/>

import pagePrimeirosPassos from '../pages/pagePrimeirosPassos'
import pageLogin from '../pages/pageLogin'

describe('Primeiros Passos Tela', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.reload()
    })
    it('Primeiro Passos Após Login', () => {
        cy.url().should('contain', '')

        pageLogin.setUsuario('allan.santos@signa.net.br')
        pageLogin.setSenha('123456789')
        
        cy.wait(3000)
        pageLogin.clickEntrar()
        cy.wait(3000)

        cy.url().should('contain', 'first-access')

        pagePrimeirosPassos.clickProsseguir()

        pagePrimeirosPassos.clickProsCtes()
        cy.go('back')

        cy.get('.MuiFormControlLabel-root').click({force: true, multiple: true })

        pagePrimeirosPassos.clickN51And200()
        cy.wait(1000)
        pagePrimeirosPassos.clickProsCtes()
        cy.wait(1000)
        cy.go('back')

        pagePrimeirosPassos.clickN201And500()
        cy.wait(1000)
        pagePrimeirosPassos.clickProsCtes()
        cy.wait(1000)
        cy.go('back')

        pagePrimeirosPassos.clickN501And1000() // ERRO NO TESTE DO CYPRESS
        cy.wait(1000)
        pagePrimeirosPassos.clickProsCtes()
        cy.wait(1000)
        cy.go('back')

        pagePrimeirosPassos.clickN1001And5000()
        cy.wait(1000)
        pagePrimeirosPassos.clickProsCtes()
        cy.wait(1000)
        cy.go('back')

        pagePrimeirosPassos.clickMais5000()
        cy.wait(1000)
        pagePrimeirosPassos.clickProsCtes()
        cy.wait(1000)
        cy.go('back')

        // // REMARCANDO OS COMBOS
        cy.wait(1000)
        pagePrimeirosPassos.clickMais5000()
        pagePrimeirosPassos.clickProsCtes()
        cy.wait(1000)
        cy.go('back')
        
        cy.wait(1000)
        pagePrimeirosPassos.clickN1001And5000()
        pagePrimeirosPassos.clickProsCtes()
        cy.wait(1000)
        cy.go('back')

        // pagePrimeirosPassos.clickN501And1000()
        // pagePrimeirosPassos.clickProsCtes()
        // cy.go('back')

        cy.wait(1000)
        pagePrimeirosPassos.clickN201And500()
        pagePrimeirosPassos.clickProsCtes()
        cy.wait(1000)
        cy.go('back')
        
        cy.wait(1000)
        pagePrimeirosPassos.clickN51And200()
        pagePrimeirosPassos.clickProsCtes()
        cy.wait(1000)
        cy.go('back')

        cy.get('.MuiFormControlLabel-root').click({force: true, multiple: true })

        cy.wait(1000)
        pagePrimeirosPassos.clickProsCtes()
        cy.wait(1000)

        pagePrimeirosPassos.clickN1A3()
        cy.wait(1000)
        pagePrimeirosPassos.clickProsPag02()
        cy.go('back')
        
        pagePrimeirosPassos.clickN4A10()
        cy.wait(1000)
        pagePrimeirosPassos.clickProsPag02()
        cy.go('back')
        
        pagePrimeirosPassos.clickN11A20()
        cy.wait(1000)
        pagePrimeirosPassos.clickProsPag02()
        cy.go('back')
                
        pagePrimeirosPassos.clickN21A51()
        cy.wait(1000)
        pagePrimeirosPassos.clickProsPag02()
        cy.go('back')
        
        pagePrimeirosPassos.clickMais50()
        cy.wait(1000)
        pagePrimeirosPassos.clickProsPag02()
        cy.go('back')
                // REMARCANDO OS COMBOS
        pagePrimeirosPassos.clickMais50()
        cy.wait(1000)
        pagePrimeirosPassos.clickProsPag02()
        cy.go('back')
        
        pagePrimeirosPassos.clickN21A51()
        cy.wait(1000)
        pagePrimeirosPassos.clickProsPag02()
        cy.go('back')
        
        pagePrimeirosPassos.clickN11A20()
        cy.wait(1000)
        pagePrimeirosPassos.clickProsPag02()
        cy.go('back')
        
        pagePrimeirosPassos.clickN4A10()
        cy.wait(1000)
        pagePrimeirosPassos.clickProsPag02()
        cy.go('back')
        
        pagePrimeirosPassos.clickN1A3()
        cy.wait(1000)
        pagePrimeirosPassos.clickProsPag02()

        cy.get('.MuiFormControlLabel-root').click({force: true, multiple: true })
    })
})     