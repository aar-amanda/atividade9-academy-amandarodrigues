describe("Atividade Appium Raro Academy", () => {
    afterEach(async() =>{
        driver.reset();
    });
describe("Atividade - 3 ", () => {
    it("Utilização e fluxo do aplicativo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=two_buttons").click();
        await $("id=alertTitle").isDisplayed();
        await $('android=new UiSelector().text("OK").className("android.widget.Button")').click();
    })
});
describe("Atividade - 4 ", () => {
    it("Utilização e fluxo do aplicativo App/Alert Dialogs/LIST DIALOG", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $("id=select_button").click();
        await $('android=new UiSelector().text("Header title").className("android.widget.TextView")').isDisplayed();
    })
});
describe("Atividade - 5 ", () => {
    it("Utilização e fluxo do aplicativo App/Fragment/Hide and Show", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Demonstration of hiding and showing fragments.").className("android.widget.TextView")').click();
        await $("id=frag1hide").click();
        const btnClick = await $("id=frag1hide").getText();
        expect(btnClick).toBe("Show");
    })
});
describe("Atividade - 6 ", () => {
    it("Utilização e fluxo do aplicativo App/Action Bar/Display options, verificando a opção DISPLAY_HOME_AS_UP", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_home").click();
        const titleText = await $("android.widget.TextView").getText();
        expect(titleText).toBe("App/Action Bar/Display Options");
    })
});
describe("Atividade - 7 ", () => {
    it("Utilização e fluxo do aplicativo App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_TITLE", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_title").click();
        const titleText = await $("android.view.ViewGroup").getText();
    })
});
describe("Atividade - 8 ", () => {
    it("Utilização e fluxo do aplicativo App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_CUSTOM", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_custom").click();
        const topbtn = await $("android.widget.Button").getText();
        expect(topbtn).toBe("Custom View!");
    })
});
describe("Atividade - 9 ", () => {
    it("Utilização e fluxo do aplicativo App/Action Bar/Display options, verificando a opção DISPLAY_SHOW_NAVIGATION", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_navigation").click();
    });
});