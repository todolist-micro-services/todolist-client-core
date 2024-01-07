class CheckStatus {
  static isStatusPending(status: string) {
    return status === "pending";
  }

  static isStatusFailure(status: string) {
    return status === "failure";
  }

  static isStatusSuccess(status: string) {
    return status === "success";
  }
}

export { CheckStatus };
