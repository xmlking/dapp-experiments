import { async, TestBed } from '@angular/core/testing';
import { ClapModule } from './clap.module';

describe('ClapModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClapModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ClapModule).toBeDefined();
  });
});
