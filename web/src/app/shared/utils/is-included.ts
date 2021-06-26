/**
 * returns true if at least a single item in @items includes something from @searchTerm
 * @param items: list of items to search from
 * @param searchTerm: searched value
 */
export function isIncluded(items: string, searchTerm: string) {
    // for (let i = 0; i < items.length; i++) {
        searchTerm = searchTerm.replace("إ", "ا").replace("أ", "ا").replace("ة", "ه");
        // let item = items[i].replace("إ", "ا").replace("أ", "ا").replace("ة", "ه");
        let item = items.replace("إ", "ا").replace("أ", "ا").replace("ة", "ه");

        let searchStrings: string[] = searchTerm.split(" ");
        for (let i = 0; i < searchStrings.length; i++) {
            if (item.toLowerCase().includes(searchStrings[i].toLowerCase())) {
                return true;
            }
        }
    // }
    return false;
}
