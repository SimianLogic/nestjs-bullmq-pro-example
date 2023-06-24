import { Processor, WorkerHost } from '@taskforcesh/nestjs-bullmq-pro';
import { Logger } from '@nestjs/common';
import { JobPro } from '@taskforcesh/bullmq-pro';

@Processor('audio', {
  concurrency: 100,
  group: {
    concurrency: 1,
  },
})
export class AudioProcessor extends WorkerHost {
  private readonly logger = new Logger(AudioProcessor.name);

  async process(job: JobPro) {
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    this.logger.debug('Start transcoding...');

    this.logger.debug(job.data);
    await sleep(5000);

    this.logger.debug('Transcoding completed');
  }
}
