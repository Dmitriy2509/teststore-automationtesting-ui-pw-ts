export class SearchData {
  //search requests
  static readonly listSearchProductRequest = ["mug", "T-Shirt"];
  static readonly noMatchesSearchProductRequest = "12";
  static readonly searchRequest = this.listSearchProductRequest[0];

  //search messages
  static readonly noMatchesMessage = "No matches were found for your search";
  static readonly tryOtherKeywordsMessage =
    "Please try other keywords to describe what you are looking for.";

  // products 
  static readonly wishListProductName = "Customizable mug"; 
  
  // wish list name
  static readonly wishListName = "My wishlist";
}
