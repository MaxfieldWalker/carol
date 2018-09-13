import axios, { AxiosInstance } from "axios";
import * as path from "path";
import {
  OmakaseSet,
  PreferenceKeyword,
  PreferenceStrength,
  Sake,
  CreditCardInfo,
  PayApiResponse,
  OmakaseSetsResponse,
  OrderSetResponse,
  GetItemsResponse,
  PurchaseResponse
} from "./types";

export class ApiClient {
  private static ENDPOINT = "http://172.20.10.3:8000/api";
  // private static ENDPOINT =
  //   "http://ec2-18-222-108-7.us-east-2.compute.amazonaws.com:8080/sakeapp/public/api";
  private _instance: AxiosInstance;

  constructor() {
    this._instance = axios.create({
      baseURL: ApiClient.ENDPOINT,
      timeout: 5000
    });
  }

  /**
   * /api/items
   * @param postcode ハイフンなし郵便番号 (例: 5630002)
   * @param keyword キーワード
   * @param strength 酒の強さ
   */
  async getItems(
    postcode: string,
    keyword: PreferenceKeyword[],
    strength: PreferenceStrength[]
  ): Promise<GetItemsResponse> {
    const params = {
      postcode,
      keyword: keyword.join(","),
      strength: strength ? strength.join(",") : ""
    };

    return this.createGetRequest<GetItemsResponse>("/items", params);
  }

  /**
   * おまかせセットのデータを取得する
   * /api/omakase
   * @param postCode ハイフン無し郵便番号 (例: 5630002)
   */
  async getOmakaseSets(postCode: string): Promise<OmakaseSetsResponse> {
    return this.createGetRequest<OmakaseSetsResponse>(`/omakase/${postCode}`);
  }

  /**
   * セットを注文する
   * /api/set_order
   */
  async orderSet(set_name: string): Promise<OrderSetResponse> {
    const params = { set_name };
    return this.createGetRequest<OrderSetResponse>("/set_order", params);
  }

  /**
   * 注文を確定する前に、お届け目安時間などを取得するためのAPI
   * GET '/api/purchase'
   */
  async purchase(item_id: number[]): Promise<PurchaseResponse> {
    const params = { item_id: item_id.join(",") };
    return this.createGetRequest<PurchaseResponse>("/purchase", params);
  }

  /**
   * 購入確定時に、注文者の情報を送る
   * POST /api/purchase
   * @param address お届け先住所
   * @param name お届け先の人の名前
   * @param email 注文者のメールアドレス
   */
  async agreePurchase(address: string, name: string, email: string) {
    const data = {
      purchase_id: 9999, // FIXME: 適当でいい?
      address,
      name,
      email
    };

    return this.createPostRequest("/purchase", data);
  }

  /**
   * クレジットカードで支払う
   * POST /api/pay/credit
   */
  async payByCreditCard(
    creditCardInfo: CreditCardInfo
  ): Promise<PayApiResponse> {
    const { number, security_code, name, expiration } = creditCardInfo;

    const params = {
      purchase_id: 9999, // FIXME: てきとうでいい？
      number,
      security_code,
      name,
      expiration
    };

    return await this.createPostRequest<PayApiResponse>("/pay/credit", params);
  }

  private async createGetRequest<T>(
    relativePath: string,
    params?: { [key: string]: string }
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
