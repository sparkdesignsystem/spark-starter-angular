import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { ModalDocsComponent } from './modal-docs.component';

describe('ModalDocsComponent', () => {
  let component: ModalDocsComponent;
  let fixture: ComponentFixture<ModalDocsComponent>;
  let choiceButton: HTMLElement;
  let waitButton: HTMLElement;
  let infoButton: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule],
      declarations: [ModalDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    choiceButton = fixture.nativeElement.querySelector('.choice-button');
    waitButton = fixture.nativeElement.querySelector('.wait-button');
    infoButton = fixture.nativeElement.querySelector('.info-button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
