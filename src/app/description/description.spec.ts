import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DescriptionComponent } from '../description/description.component';

describe('DescriptionComponent', () => {
  let fixture: ComponentFixture<DescriptionComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DescriptionComponent);
  }));

  it('should create an instance of DescriptionComponent', () => {
    expect(new DescriptionComponent()).toBeTruthy();
  });

  it('should contain "Description" text', () => {
    const infoMessageEl: HTMLElement = fixture.nativeElement;
    const strong = infoMessageEl.querySelector('strong');
    expect(strong.textContent).toContain('Description:');
  });

  it('should create', () => {
    const comp = fixture.componentInstance;
    expect(comp).toBeDefined();
  });

});
