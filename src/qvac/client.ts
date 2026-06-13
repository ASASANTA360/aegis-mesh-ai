export interface QVACResponse {
  output: string;
  tokens: number;
  tps: number;
  ttft: number;
}

export class QVACClient {

  private model = "psy-local-model";

  async loadModel() {
    console.log(
      `[QVAC] Loading ${this.model}`
    );

    // TODO:
    // Replace this with actual QVAC SDK model loader
    return true;
  }


  async infer(prompt: string): Promise<QVACResponse> {

    const start = performance.now();

    console.log(
      "[QVAC] Running local inference..."
    );

    // Temporary simulation
    await new Promise(resolve =>
      setTimeout(resolve, 600)
    );


    const time =
      performance.now() - start;


    return {
      output:
        `QVAC Psy Model processed: ${prompt}`,

      tokens:
        128,

      tps:
        42,

      ttft:
        Math.round(time),
    };

  }

}