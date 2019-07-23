import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStoreConfig, MockStore } from '@ngrx/store/testing';
import { ChatState, initialState } from '../shared/ngrx/reducers/chat.reducers';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { getConfig } from '../shared/ngrx/selectors/chat.selector';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let store: MockStore<ChatState>;
  const initState: MockStoreConfig<ChatState> = {
    initialState: initialState
  };
  let spyConfig: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();

    store = TestBed.get<Store<any>>(Store); 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    spyConfig = spyOn(store, 'select').and.callFake(() => of({
      username: "test",
      themeDark: false,
      clock12hour: false,
      shortcutEnter: false
    }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("get Theme value from store", () => {
    it("METHOD isDark", done => {
      spyOnProperty(component, "isDark", "get").and.callThrough();

      component.isDark.subscribe((value: boolean) => {
        expect(spyConfig).toHaveBeenCalledWith(getConfig);
        expect(value).toEqual(false);
        done();
      });
    });
  });

  describe("Method is Active", () => {
    it("Return true if the formControl is activate", () => {
      component.settings.get('themeDark').setValue(true);

      expect(component.isActive(true, 'themeDark')).toBe(true);
    });
  });
});
