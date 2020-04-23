import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { FlagDocsComponent } from './flag-docs.component';

describe('FlagDocsComponent', () => {
  let component: FlagDocsComponent;
  let fixture: ComponentFixture<FlagDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule, FormsModule],
      declarations: [FlagDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
