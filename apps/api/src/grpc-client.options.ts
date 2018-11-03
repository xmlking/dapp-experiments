import { ClientOptions, Transport } from '@nestjs/microservices';
import { environment } from './environments/environment';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero',
    protoPath:  '/hero.proto',
    loader: {
      includeDirs: environment.protoDirs,
    },
  },
};
