import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { AccordionDocsComponent } from './accordion-docs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AccordionDocsComponent', () => {
  let component: AccordionDocsComponent;
  let fixture: ComponentFixture<AccordionDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule, BrowserAnimationsModule],
      declarations: [AccordionDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
