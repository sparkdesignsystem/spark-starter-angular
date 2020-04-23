import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { BoxDocsComponent } from './box-docs.component';

describe('BoxDocsComponent', () => {
  let component: BoxDocsComponent;
  let fixture: ComponentFixture<BoxDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule, FormsModule],
      declarations: [BoxDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
