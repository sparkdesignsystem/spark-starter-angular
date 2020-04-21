import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { ToggleDocsComponent } from './toggle-docs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('ToggleDocsComponent', () => {
  let component: ToggleDocsComponent;
  let fixture: ComponentFixture<ToggleDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule, BrowserAnimationsModule],
      declarations: [ToggleDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
