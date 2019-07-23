import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StoreModule, Store } from '@ngrx/store';

import { ChatReducer, ChatState } from "./shared/ngrx/reducers/chat.reducers";
import { Component } from '@angular/core';
import { MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { UpdateConfig } from './shared/ngrx/actions/chat.action';
import { getConfig } from './shared/ngrx/selectors/chat.selector';
import { of } from 'rxjs';
import { cold } from 'jasmine-marbles';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore<ChatState>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent
      ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({ ChatReducer }),
        RouterTestingModule.withRoutes([{
          path: 'login',
          component: LoginComponent,
        }])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get<Store<ChatState>>(Store);
    router = TestBed.get<Router>(Router)
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('should toggle menu',()=> {
    it('begin with false after true',() => {
      expect(component.activeMenu).toBe(false);
      component.toggleMenu();
      expect(component.activeMenu).toBe(true);
    })
  })

  describe('should be disconnect',()=> {
    it('delete username on store value and redirect to login',() => {
      const valueChange = 'test';
      
      // init connection to webapp
      const valueInitExpected = cold("(a|)", { username: valueChange, themeDark: false, clock12hour: false, shortcutEnter: false }); 
      store.dispatch(new UpdateConfig({ username: valueChange, themeDark: false, clock12hour: false, shortcutEnter: false }))
      // check if the value is correctly change
      store.select(getConfig).subscribe(config => expect(config).toBeObservable(valueInitExpected));

      // TEST

      //const spySelect = spyOn(store, 'select').and.callThrough();
      const spyNavigate = spyOn(router, 'navigate').and.callThrough();
      const spyDispatch = spyOn(store, 'dispatch').and.callThrough();

      // Click on disconnect
      component.disconnect();

      // check if call correctly dispatch UpdateConfig
      expect(spyDispatch).toHaveBeenCalledWith(new UpdateConfig({ username: '', themeDark: false, clock12hour: false, shortcutEnter: false }))
      // check if correctly redirect to login
      expect(spyNavigate).toHaveBeenCalledWith(["/login"]);
      })
  })
});
