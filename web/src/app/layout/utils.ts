import {NgbDate} from "@ng-bootstrap/ng-bootstrap";
import {SearchFilter} from "../data/model/SearchFilter";

export class Utils {

  static isMobile(): boolean {
    return window && (window.matchMedia("(max-width: 767px)").matches || window.matchMedia("(orientation: portrait)").matches);
  }

  //--------------------------------------------------------------------------------------------------------------------

  static ngbDateToDate(ngbDate: NgbDate): Date {
    if (!ngbDate) {
      return null;
    }
    return new Date(`${ngbDate.month}/${ngbDate.day}/${ngbDate.year}`);
  }

  static dateToNgbDate(date: Date): NgbDate {
    if (!date) {
      return null;
    }
    date = new Date(date);
    // return {month: date.getMonth() + 1, day: date.getDate(), year: date.getFullYear()};
    return new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
  }

  //--------------------------------------------------------------------------------------------------------------------

  static scrollToTop(selector: string): void {
    if (document) {
      const element = <HTMLElement>document.querySelector(selector);
      element.scrollTop = 0;
    }
  }

  //--------------------------------------------------------------------------------------------------------------------

  static genId(): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  //--------------------------------------------------------------------------------------------------------------------

  /**
   * returns true if at least a single item in @items includes something from @searchTerm
   * @param items: list of items to search from
   * @param searchTerm: searched value
   */
  static isIncluded(items: string, searchTerm: string): boolean {
    searchTerm = searchTerm.replace("إ", "ا").replace("أ", "ا").replace("ة", "ه");
    let item = items.replace("إ", "ا").replace("أ", "ا").replace("ة", "ه");

    let searchStrings: string[] = searchTerm.split(" ");
    for (let i = 0; i < searchStrings.length; i++) {
      if (item.toLowerCase().includes(searchStrings[i].toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  //--------------------------------------------------------------------------------------------------------------------

  /**
   * returns true if at least a single attributes in @searchedItem includes something from @searchTerm
   * @param searchedItem: object to search
   * @param filters: attributes to search from
   * @param searchTerm: searched value
   */
  static isIncludedWithFilter(searchedItem: any, filters: SearchFilter[], searchTerm: string): boolean {
    // didn't chose a search filter (label)
    if (filters.length == 0) {
      return true;
    }

    // haven't searched anything yet
    if (!searchTerm) {
      return true;
    }

    // store the result of checking every filter
    let flags: boolean[] = [];

    searchTerm = searchTerm
      .replace("إ", "ا")
      .replace("أ", "ا")
      .replace("ة", "ه");

    // split searchTerm to check words separately
    let searchStrings: string[] = searchTerm
      .split(" ");

    if (searchedItem) {
      for (let i = 0; i < filters.length; i++) {
        // check if attribute is null
        if (!searchedItem[filters[i].attributeName]) {
          // skip iteration
          continue;
        }
        let item = String(searchedItem[filters[i].attributeName])
          .replace("إ", "ا")
          .replace("أ", "ا")
          .replace("ة", "ه");

        flags.push(this.include(item, searchStrings));
      }
    }

    // returns true if flags has at least one value true
    return flags.some(x => x);
  }

  /**
   * returns true if @item includes at all of strings from @searchStrings
   * @param item: searched item
   * @param searchStrings: search term separated by spaces ' '
   */
  static include(item: string, searchStrings: string[]): boolean {
    // haven't typed search text yet (initial list: [""], after typing: ["word", ""])
    if (searchStrings[0] == "" && searchStrings.length == 1) {
      return true;
    }

    for (let i = 0; i < searchStrings.length; i++) {
      if (!item.toLowerCase().includes(searchStrings[i].toLowerCase())) {
        return false;
      }
    }
    return true;
  }

  //--------------------------------------------------------------------------------------------------------------------

}
