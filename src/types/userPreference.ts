import { SakeKind } from "./sake";

/**
 * ユーザーのお酒の好み
 */
export interface UserPreference {
  /**
   * アルコール耐性
   */
  tolerance: AlcoholTolerance;

  favoriteKind: SakeKind[];

  habit: SakeHabit;
}

export enum AlcoholTolerance {
  /**
   * とても強い (日本酒一気飲み)
   */
  VeryHigh,

  /**
   * 強い (日本酒、焼酎、ワイン、何でも飲める)
   */
  High,

  /**
   * 普通 (ビール2,3杯)
   */
  Mid,

  /**
   * 弱い (ほろ酔い1,2缶)
   */
  Low,

  /**
   * 飲めない
   */
  VeryLow
}

/**
 * 飲酒習慣
 */
export enum SakeHabit {
  VeryHigh,
  High,
  Mid,
  Low,
  VeryLow
}
