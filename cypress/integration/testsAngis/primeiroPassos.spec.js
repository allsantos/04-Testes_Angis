/// <reference types='cypress'/>

describe('Primeiros Passos Tela', () => {
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