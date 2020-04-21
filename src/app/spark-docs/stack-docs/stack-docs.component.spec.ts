import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { StackDocsComponent } from './stack-docs.component';
import { FormsModule } from '@angular/forms';

describe('StackDocsComponent', () => {
  let component: StackDocsComponent;
  let fixture: ComponentFixture<StackDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule, RouterTestingModule, FormsModule],
      declarations: [StackDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
