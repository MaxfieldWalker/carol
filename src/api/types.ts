export interface PayApiResponse {
  /**
   * 注文番号
   */
  order_number: number;
}

export interface CreditCardInfo {
  /**
   * クレカ番号
   */
  number: number;

  /**
   * 名義
   */
  name: string;

  /**
   * セキュリティコード
   */
  securityCode: number;

  /**
   * 有効期限 (日付を文字列でフォーマットする)
   */
  expiration: string;
}

export interface OmakaseSet {
  /**
   * セットの名前
   */
  name: string;

  /**
   * セットの説明
   */
  description: string;

  /**
   * 値段の合計 (円)
   */
  price: number;

  /**
   * 商品
   */
  items: Sake[];

  /**
   * 紹介画像
   */
  thumbnail: string;
}

export interface Sake {
  id: number;

  /**
   * 酒の名前
   */
  name: string;

  /**
   * 値段 (円)
   */
  price: number;

  /**
   * 画像
   */
  imageUrl: string;

  /**
   * 説明文
   */
  description: string;
}

/**
 * 好みのお酒を絞りこむキーワード
 */
export enum PreferenceKeyword {
  // さわやか
  "sawayaka",
  // 柑橘系
  "kankitsu"
}

export enum PreferenceStrength {
  // よわめ
  "low",
  // ふつう
  "mid",
  // つよめ
  "high",
  // わからない
  "unknown"
}
