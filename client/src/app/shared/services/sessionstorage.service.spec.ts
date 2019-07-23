import { inject } from "@angular/core/testing";
import { SessionstorageService } from "./sessionstorage.service";

describe("PickyWeatherStation", () => {
  let sessionstorage: SessionstorageService;

  beforeEach(inject(
    [SessionstorageService],
    _sessionstorage => (sessionstorage = _sessionstorage)
  ));

  it("should set config and get", () => {
    sessionstorage.setConfig({
      username: "test",
      themeDark: false,
      clock12hour: true,
      shortcutEnter: false
    });

    expect(sessionstorage.getConfig()).toEqual({
      username: "test",
      themeDark: false,
      clock12hour: true,
      shortcutEnter: false
    });
  });
});
