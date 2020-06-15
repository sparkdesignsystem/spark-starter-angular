import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { TooltipDocsComponent } from './tooltip-docs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('TooltipDocsComponent', () => {
  let component: TooltipDocsComponent;
  let fixture: ComponentFixture<TooltipDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule, BrowserAnimationsModule],
      declarations: [TooltipDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
