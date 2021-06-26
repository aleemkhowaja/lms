import {SearchFilter} from "../../data/model/SearchFilter";

/**
 * returns true if at least a single attributes in @searchedItem includes something from @searchTerm
 * @param searchedItem: object to search
 * @param filters: attributes to search from
 * @param searchTerm: searched value
 */
export function isIncludedWithFilter(searchedItem: any, filters: SearchFilter[], searchTerm: string): boolean {
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

            flags.push(include(item, searchStrings));
        }
    }

    // returns true if flags has at least one value true
    return flags.some(x => { return x })
}

/**
 * returns true if @item includes at all of strings from @searchStrings
 * @param item: searched item
 * @param searchStrings: search term separated by spaces ' '
 */
function include(item: string, searchStrings: string[]): boolean {
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
