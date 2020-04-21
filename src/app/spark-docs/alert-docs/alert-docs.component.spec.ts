import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { AlertDocsComponent } from './alert-docs.component';

describe('AlertDocsComponent', () => {
  let component: AlertDocsComponent;
  let fixture: ComponentFixture<AlertDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule],
      declarations: [AlertDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
