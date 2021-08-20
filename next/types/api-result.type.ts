export interface ApiResultJSON<T> {
  success: boolean;
  response: T | null;
}

export class ApiResult<T> {
  private success: boolean;
  private response: T | null;

  private constructor(success: boolean, response: T | null) {
    this.success = success;
    this.response = response;
  }

  static success<T>(response?: T): ApiResult<T> {
    return new ApiResult<T>(true, response ?? null);
  }

  static failure<T>(response?: T): ApiResult<T> {
    return new ApiResult<T>(false, response ?? null);
  }

  get json(): ApiResultJSON<T> {
    return { success: this.success, response: this.response };
  }
}
