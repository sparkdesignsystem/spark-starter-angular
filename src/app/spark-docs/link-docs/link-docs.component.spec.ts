import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { LinkDocsComponent } from './link-docs.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LinkDocsComponent', () => {
  let component: LinkDocsComponent;
  let fixture: ComponentFixture<LinkDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule, RouterTestingModule],
      declarations: [LinkDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
