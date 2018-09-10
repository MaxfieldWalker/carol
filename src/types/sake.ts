export interface Sake {
  /**
   * お酒の名前
   */
  name: string;

  /**
   * お酒の種類
   */
  kind: SakeKind;

  /**
   * 発売日
   */
  releaseDate: Date;

  /**
   * 販売者
   */
  maker: string;

  /**
   * お酒の色
   */
  color: SakeColor;

  /**
   * お酒の透明度
   */
  transparency: SakeTransparency;

  /**
   * アルコール度数 (0~100)
   */
  alcoholPercentage: number;

  /**
   * 購入できる場所
   */
  availableAt: SakeStore[];

  /**
   * 価格 (円)
   */
  price: number;
}

export interface Beer extends Sake {
  kind: SakeKind.Beer;

  /**
   * プリン体(g)
   */
  purineBody: number;

  /**
   * 糖質(g)
   */
  suger: number;
}

export enum SakeKind {
  Beer,
  Wine,

  /**
   * 日本酒
   */
  RiceWine,

  Brandy,

  /**
   * 焼酎
   */
  Shochu,

  /**
   * ウォッカ
   */
  Vodka,

  Cocktail,

  /**
   * ノンアルコール
   */
  NonAlcoholic
}

/**
 * お酒の色☺️
 */
export enum SakeColor {
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple"
}

/**
 * お酒の透明度
 */
export enum SakeTransparency {
  /**
   * 全く透明でない
   */
  "no",
  /**
   * 半透明
   */
  "half",
  /**
   * ほとんど透明
   */
  "quarter",
  /**
   * 完全に透明
   */
  "full"
}

/**
 * お酒を売っているお店
 */
export enum SakeStore {
  SevenEleven,
  FamilyMart,
  Lawson,

  /**
   * 一般的な店 (スーパーなど)
   */
  GeneralStore,

  /**
   * 酒専門店
   */
  SpecialStore,

  Amazon,

  Rakuten
}

/**
 * 酒の味?
 */
export enum SakeTaste {}
/**
 * 辛口、甘口
 */

/**
 * 濃酵、淡麗
 */
