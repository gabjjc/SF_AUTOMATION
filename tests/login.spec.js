
describe('Salesforce Login', () => {
    it('debería iniciar sesión correctamente', async () => {
   

        const LoginPage = require('../.utam/pages/loginPage');
        
        if (!process.env.SF_URL) throw new Error('SF_URL no definida en .env');
        if (!process.env.SF_USERNAME) throw new Error('SF_USERNAME no definida en .env');
        if (!process.env.SF_PASSWORD) throw new Error('SF_PASSWORD no definida en .env');

        
        const username = process.env.SF_USERNAME;
        const password = process.env.SF_PASSWORD;   
        const url = process.env.SF_URL;
   
        await browser.url(url);

        console.log('utam:', utam);

        const loginPage = await utam.load(LoginPage);
        
        await loginPage.enterUsername(username);
        await loginPage.enterPassword(password);
        await loginPage.clickLogin();
    });
});


