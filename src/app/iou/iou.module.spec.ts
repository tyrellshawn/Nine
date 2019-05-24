import { IouModule } from './iou.module';

describe('IouModule', () => {
  let iouModule: IouModule;

  beforeEach(() => {
    iouModule = new IouModule();
  });

  it('should create an instance', () => {
    expect(iouModule).toBeTruthy();
  });
});
