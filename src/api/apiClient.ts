import axios, { AxiosInstance } from "axios";
import * as path from "path";
import {
  OmakaseSet,
  PreferenceKeyword,
  PreferenceStrength,
  Sake,
  CreditCardInfo,
  PayApiResponse
} from "./types";

export class ApiClient {
  private static ENDPOINT = "http://172.20.10.3:8000/api";
  private _instance: AxiosInstance;

  constructor() {
    this._instance = axios.create({
      baseURL: ApiClient.ENDPOINT,
      timeout: 5000
    });
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

  async getOmakaseSets(postCode: string): Promise<{ sets: OmakaseSet[] }> {
    return this.createGetRequest<any>(`/omakase/${postCode}`);
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
