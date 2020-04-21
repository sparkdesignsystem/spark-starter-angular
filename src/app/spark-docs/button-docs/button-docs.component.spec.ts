import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { ButtonDocsComponent } from './button-docs.component';

describe('ButtonDocsComponent', () => {
  let component: ButtonDocsComponent;
  let fixture: ComponentFixture<ButtonDocsComponent>;
  let spinnerButtonElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule],
      declarations: [ButtonDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDocsComponent);
    component = fixture.componentInstance;
    spinnerButtonElement = fixture.nativeElement.querySelectorAll('button')[5];
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
