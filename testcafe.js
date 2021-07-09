const { Selector } = require('testcafe');

fixture`HomePage`.page`https://www.readeo.com/`;

test('Home page', async t => {
    // Test code

    await t.expect(Selector('h1').innerText).eql('Storytime is a video chat away');

    await t.expect(Selector('nav > a:nth-child(6) div').innerText).eql('log in')
});

fixture`Main App`.page`https://localhost:3000/login`;


test('Login page', async t => {
    // Test code

    await t.expect(Selector('h3').innerText).eql('Welcome to Readeo');

    await t
        .typeText('input[name="email"]', 'EMAIL')
        .typeText('input[name="password"]', 'PASSWORD')
        .click('button[type="submit"]')
        .click('button[aria-label="Close"]')
        .wait(500)
        .expect(Selector('div[data-testid="NAV_MENU_DESKTOP"] > a:first-child > div').innerText).eql('library');

});