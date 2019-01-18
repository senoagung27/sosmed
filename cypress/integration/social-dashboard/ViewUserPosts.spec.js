describe('View posts of users', function () {
    it('has to open user profile screen', function () {
        cy.visit('/user/7')

        cy.get('[ data-test="user-about-card" ]').should('have.length',1)
        cy.url().should('include','/user/7/posts')

        cy.visit('/user/9')

        cy.get('[ data-test="user-about-card" ]').should('have.length',1)
        cy.url().should('include','/user/9/posts')
    })

    it('has to render 10 user post card', function() {
        cy.visit('/user/7/posts')

        cy.get('[data-test="user-post-card"]').should('have.length',10)
        cy.get('[data-test="user-post-card-action"]').should('have.length',10)

        cy.visit('/user/9/posts')

        cy.get('[data-test="user-post-card"]').should('have.length',10)
        cy.get('[data-test="user-post-card-action"]').should('have.length',10)
    })
})