import axios, { AxiosInstance } from "axios";
import * as path from "path";

export class ApiClient {
  private static ENDPOINT = "http://localhost:8080/api";
  private _instance: AxiosInstance;

  constructor() {
    this._instance = axios.create({
      baseURL: ApiClient.ENDPOINT,
      timeout: 5000
    });
  }

  async getOmakaseSets(postCode: string): Promise<OmakaseSet> {
    return this.createGetRequest<OmakaseSet>("/omakase");
  }

  async getItems(
    postCode: string,
    keywords: PreferenceKeyword[],
    strength?: PreferenceStrength
  ): Promise<Sake[]> {
    const params = {
      postCode,
      keywords,
      strength
    };

    return this.createGetRequest<Sake[]>("/items", params);
  }

  /**
   * 支払い
   */
  async pay(
    price: number,
    creditCardInfo: CreditCardInfo
  ): Promise<PayApiResponse> {
    const data = {
      ...creditCardInfo,
      price
    };

    return await this.createPostRequest<PayApiResponse>("/pay/credit", data);
  }

  private async createGetRequest<T>(
    relativePath: string,
    params?: any
  ): Promise<T> {
    const r = await this._instance.get<T>(this.resolveUrl(relativePath), {
      params
    });
    return r.data;
  }

  private async createPostRequest<T>(
    relativePath: string,
    data?: any
  ): Promise<T> {
    const r = await this._instance.post<T>(this.resolveUrl(relativePath), data);
    return r.data;
  }

  private resolveUrl(relativePath: string): string {
    return path.resolve(ApiClient.ENDPOINT, relativePath);
  }
}

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
  image: string;
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
