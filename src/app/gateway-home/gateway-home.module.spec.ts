import { GatewayHomeModule } from './gateway-home.module';

describe('GatewayHomeModule', () => {
  let gatewayHomeModule: GatewayHomeModule;

  beforeEach(() => {
    gatewayHomeModule = new GatewayHomeModule();
  });

  it('should create an instance', () => {
    expect(gatewayHomeModule).toBeTruthy();
  });
});
