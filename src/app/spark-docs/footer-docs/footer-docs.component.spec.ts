import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { FooterDocsComponent } from './footer-docs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FooterDocsComponent', () => {
  let component: FooterDocsComponent;
  let fixture: ComponentFixture<FooterDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule, RouterTestingModule, BrowserAnimationsModule],
      declarations: [FooterDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
