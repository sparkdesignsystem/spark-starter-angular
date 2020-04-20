import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SparkAngularModule } from '../../spark-angular/spark-angular.module';
import { CenteredColumnDocsComponent } from './centered-column-docs.component';

describe('CenteredColumnDocsComponent', () => {
  let component: CenteredColumnDocsComponent;
  let fixture: ComponentFixture<CenteredColumnDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule, FormsModule],
      declarations: [CenteredColumnDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenteredColumnDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
