describe('Users can see the detail of post and its comment', function () {
    it('has to open post detail', function () {
        cy.visit('/user/7')
        cy.get('[ data-test="post-card-detail-button" ]').eq(0).click()
        cy.url().should('include','/user/7/post/70')

        cy.visit('/user/9')
        cy.get('[ data-test="post-card-detail-button" ]').eq(1).click()
        cy.url().should('include','/user/9/post/89')
    })
    it('has to renders 5 comments', function () {

        cy.visit('/user/7/post/70')
        cy.get('[data-test="comment-card"]').should('have.length',5)
        cy.visit('/user/9/post/89')
        cy.get('[data-test="comment-card"]').should('have.length',5)
    })
})