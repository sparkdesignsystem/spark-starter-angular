import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAngularModule } from '@sparkdesignsystem/spark-angular';
import { AutocompleteDocsComponent } from './autocomplete-docs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AccordionDocsComponent', () => {
  let component: AutocompleteDocsComponent;
  let fixture: ComponentFixture<AutocompleteDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule, BrowserAnimationsModule],
      declarations: [AutocompleteDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
