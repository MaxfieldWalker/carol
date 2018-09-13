export interface PayApiResponse {
  /**
   * 注文番号
   */
  purchase_id: number;
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
  security_code: number;

  /**
   * 有効期限 (日付を文字列でフォーマットする)
   */
  expiration: string;
}

export interface OmakaseSet {
  id: number;
  
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
  image_url: string;

  /**
   * 説明文
   */
  description: string;

  /**
   * 酒の色
   */
  color?: string;
}

/**
 * 好みのお酒を絞りこむキーワード
 */
export enum PreferenceKeyword {
  // さわやか
  "sawayaka",
  // 柑橘系
  "kankitsu",
  "オレンジ"
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

export interface OmakaseSetsResponse {
  sets: OmakaseSet[];
}

export interface OrderResponse {

  /**
   * 購入番号
   */
  purchase_id: number;
  
  /**
   * お届け店舗
   */
  source: string;
  
  /**
   * お届け店舗情報
   */
  source_info: string;
  
  /**
   * お届け店舗の住所
   */
  source_address: string;
  
  /**
   * 予想到着時刻
   */
  arrival_time: number;
}

export interface PurchaseResponse extends OrderResponse {
  items: Sake[];
}

export interface OrderSetResponse extends OrderResponse {
  omakase: OmakaseSet;
}

export interface GetItemsResponse {
  items: Sake[];
}
