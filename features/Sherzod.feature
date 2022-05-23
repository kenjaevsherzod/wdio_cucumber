# feature file
Feature: Gmail Functionality
    To check for some functionalities on gmail website

    @smoke
    Scenario: Login gmail account with valid username and password
        Given I am on the homepage
        Then I login with valid credentials

    @smoke
    Scenario: Check if app allows to change the language of the content
        When I am on all settings page
        Then I try to choose another language
        Then I save the changes

    @smoke
    Scenario: Check if the user clicks the email it opens content of the email
        Given I am on inbox page
        When I click the last message
        Then It should open email content

    @smoke
    Scenario: Check if compose button is clickable and it has 'Compose' keyword
        Given I am on inbox page
        When I click the Compose button
        Then It should open compose modal and should have Compose title

    @smoke
    Scenario: Check availibility of entering email addresses into 'To', 'Cc' and 'Bcc' fields
        Given I am on inbox page
        Then It should enter email address into "To", "Cc" and "Bcc" fields

    @smoke
    Scenario: Check availibility of typing text into Subject and email body areas and send an email
        Given I am on inbox page
        Then I click the Compose button and it should enter email address into "To", "Cc" and "Bcc" fields
        And It should allow to enter data into "Subject" and email body areas
        Then It should click the send button