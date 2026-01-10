import { BasePage } from "./BasePage";

export class FilterByPage extends BasePage {

    async getCategoryLocator(category: string) {
        return this.page.locator(`//*[@data-type="category"]//a[contains(normalize-space(.), "${category}")]`);
    }

    async clickCategoryFilter(category: string) {
        await (await this.getCategoryLocator(category)).click();
    }
}