import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { AwardDocsComponent } from './award-docs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AwardDocsComponent', () => {
  let component: AwardDocsComponent;
  let fixture: ComponentFixture<AwardDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule, RouterTestingModule, BrowserAnimationsModule],
      declarations: [AwardDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
