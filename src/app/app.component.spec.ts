import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, DescriptionComponent],
    }).compileComponents();
  }));

  it('should create an instance of AppComponent', () => {
    expect(new AppComponent()).toBeTruthy();
  });
});
