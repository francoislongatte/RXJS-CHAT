import { TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import {
  MockStore,
  MockStoreConfig,
  provideMockStore
} from "@ngrx/store/testing";
import { cold } from "jasmine-marbles";
import {
  ChatState,
  initialState
} from "../app/shared/ngrx/reducers/chat.reducers";
import { IsExistName } from "./isExistName.guard";
import { isLogin } from "./shared/ngrx/selectors/chat.selector";

describe("Auth Guard", () => {
  let guard: IsExistName;
  let store: MockStore<ChatState>;
  let route: ActivatedRoute;
  const initState: MockStoreConfig<ChatState> = {
    initialState: initialState
  };

  let routeMock: any = { snapshot: {} };
  let routeStateMock: any = { snapshot: {}, url: "/" };
  let routerMock = { navigate: jasmine.createSpy("navigate") };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: routeStateMock },
        IsExistName,
        provideMockStore(initState),
        { provide: Router, useValue: routerMock }
      ]
    });

    store = TestBed.get<Store<ChatState>>(Store);
    guard = TestBed.get<IsExistName>(IsExistName);
    route = TestBed.get(ActivatedRoute);
    routeStateMock.url = "/";
  });

  it("should return false if the user state is not logged in but the url is not login", () => {
    const expected = cold("(a)", { a: false });
    expect(guard.canActivate(routeMock, routeStateMock)).toBeObservable(
      expected
    );
  });

  it("should return true if the user state is not logged in but the url is login", () => {
    const expected = cold("(a)", { a: true });
    routeStateMock.url = "/login";
    expect(guard.canActivate(routeMock, routeStateMock)).toBeObservable(
      expected
    );
  });

  it("should return true if the user state is logged in but the url is not login", () => {
    store.overrideSelector(isLogin, true);
    const expected = cold("(a)", { a: true });

    expect(guard.canActivate(routeMock, routeStateMock)).toBeObservable(
      expected
    );
  });

  it("should return false if the user state is logged in but the url is login", () => {
    store.overrideSelector(isLogin, true);
    routeStateMock.url = "/login";
    const expected = cold("(a)", { a: false });

    expect(guard.canActivate(routeMock, routeStateMock)).toBeObservable(
      expected
    );
  });
});
