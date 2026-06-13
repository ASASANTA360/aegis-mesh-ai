export interface InferenceLog {
  timestamp: number;
  model: string;
  tokens: number;
  tps: number;
  ttft: number;
}

class QVACLogger {

  private logs: InferenceLog[] = [];

  add(log: InferenceLog) {
    this.logs.push(log);

    console.log(
      "[QVAC LOG]",
      log
    );
  }

  getLogs() {
    return this.logs;
  }

  getLatest() {
    return this.logs[
      this.logs.length - 1
    ];
  }

  getCount() {
    return this.logs.length;
  }

  exportJSON() {
    return JSON.stringify(
      this.logs,
      null,
      2
    );
  }

}

export const qvacLogger = new QVACLogger();