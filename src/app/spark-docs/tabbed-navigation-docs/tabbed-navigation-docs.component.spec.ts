import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { TabbedNavigationDocsComponent } from './tabbed-navigation-docs.component';

describe('TabbedNavigationDocsComponent', () => {
  let component: TabbedNavigationDocsComponent;
  let fixture: ComponentFixture<TabbedNavigationDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule],
      declarations: [TabbedNavigationDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedNavigationDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
