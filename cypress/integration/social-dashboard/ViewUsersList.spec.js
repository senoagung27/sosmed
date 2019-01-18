describe('View list of users', function () {
    it('has to open user detail', function () {
        cy.visit('/')

        cy.get('[data-test="profile-detail-button"]').eq(3).click()
        cy.url().should('include','/user/4/posts')

        cy.visit('/')

        cy.get('[data-test="profile-detail-button"]').eq(1).click()
        cy.url().should('include','/user/2/posts')
    })

    it('has to render 10 user card', function() {
        cy.visit('/')

        cy.get('[data-test="user-profile-card"]').should('have.length',10)
        cy.get('[data-test="profile-detail-button"]').should('have.length',10)
    })
})