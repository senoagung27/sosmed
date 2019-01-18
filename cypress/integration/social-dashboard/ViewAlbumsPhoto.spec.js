describe('Users can see list photos of an album', function () {
    it('has to open post detail', function () {
        cy.visit('/user/7/albums')
        cy.get('[ data-test="album-card-button" ]').eq(0).click()
        cy.url().should('include','/user/7/album/61')

        cy.visit('/user/7/albums')
        cy.get('[ data-test="album-card-button" ]').eq(1).click()
        cy.url().should('include','/user/7/album/62')
    })

    it('has to render 50 photos card', function(){
        cy.visit('/user/7/album/61')
        cy.get('[data-test="photo-detail-card"]').should('have.length',50)
        cy.visit('/user/7/album/62')
        cy.get('[data-test="photo-detail-card"]').should('have.length',50)
    })
})