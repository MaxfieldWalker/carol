export interface RouterProps {
  history: {
    push: (path: string) => void;
  };
}

export interface NavigateToOrderConfirmationContext {
  /**
   * 自動で残りのアイテムが補充されたか
   */
  autoFilled: boolean;
  item_id: number[];
}

export interface NavigateToRecommendedItemsContext {
  selectedKeywords: string[];
  selectedAlcoholStrength: string[];
}
