import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { ChatReducer, ChatState } from "../shared/ngrx/reducers/chat.reducers";

import { LoginComponent } from "./login.component";
import { StoreModule, Store } from "@ngrx/store";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { MockStore } from '@ngrx/store/testing';
import { UpdateConfig } from '../shared/ngrx/actions/chat.action';
import { of } from 'rxjs';

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore<ChatState>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({ ChatReducer }),
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get<Store<ChatState>>(Store);
    router = TestBed.get<Router>(Router)
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("When the component is destroy", () => {
    afterEach(() => {
      fixture.destroy();
    });

    it("ngOnDestroy is correctly call", () => {
      spyOn(component, "ngOnDestroy").and.callFake(() => {
        expect(component.ngOnDestroy).toHaveBeenCalled();
      });
    });
  });

  describe('when the user send a message', () =>{
    it("if the username is invalid", () => {
      const spyDispatch = spyOn(store, 'dispatch').and.callThrough();
      const spyNavigate = spyOn(router, 'navigate').and.callThrough();
      component.sendUsername();
      expect(spyDispatch).not.toHaveBeenCalled();
      expect(spyNavigate).not.toHaveBeenCalled();
    });
    it("if the username is valid", () => {
      const valueChange = 'test';
      component.username.setValue(valueChange);
      const spyDispatch = spyOn(store, 'dispatch').and.callThrough();
      const spyNavigate = spyOn(router, 'navigate').and.callThrough();
      component.sendUsername();
      expect(spyDispatch).toHaveBeenCalled();
      expect(spyDispatch).toHaveBeenCalledWith(new UpdateConfig({ username: valueChange, themeDark: false, clock12hour: false, shortcutEnter: false }));
      expect(spyNavigate).toHaveBeenCalled();
    });
  })

  describe('when the user', () =>{
    it(" is still send a username", () => {
      const spySelect = spyOn(store, 'select').and.returnValue(of({ username: 'test', themeDark: false, clock12hour: false, shortcutEnter: false }));
      const spyNavigate = spyOn(router, 'navigate').and.callThrough();
      component.ngOnInit();
      expect(spySelect).toHaveBeenCalled();
      expect(spyNavigate).toHaveBeenCalled();
    });
    it(" is not send a username", () => {
      const spySelect = spyOn(store, 'select').and.returnValue(of({ username: '', themeDark: false, clock12hour: false, shortcutEnter: false }));
      const spyNavigate = spyOn(router, 'navigate').and.callThrough();
      component.ngOnInit();
      expect(spySelect).toHaveBeenCalled();
      expect(spyNavigate).not.toHaveBeenCalled();
    });
  })

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
