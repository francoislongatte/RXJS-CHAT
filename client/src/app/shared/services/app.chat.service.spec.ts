import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { ChatService } from "./app.chat.service";

describe("ChatService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ChatService = TestBed.get(ChatService);
    expect(service).toBeTruthy();
  });

  it("sendMessage - Emit Socket", () => {
    const service: ChatService = TestBed.get(ChatService);
    const spyIo = spyOn(service.socket, "emit").and.callFake(() => null);
    service.sendMessage({ name: "test", description: "test" });
    expect(spyIo).toHaveBeenCalled();
  });
  it("getNewMessage - on Socket", done => {
    const service: ChatService = TestBed.get(ChatService);
    const spyIo = spyOn(service, "getNewMessage").and.callFake(() =>
      of({ name: "message", description: "test" })
    );
    service.getNewMessage().subscribe(value => {
      expect(spyIo).toHaveBeenCalled();
      expect(value).toEqual({ name: "message", description: "test" });
      done();
    });
  });
  it("getAllMessage - on Socket", done => {
    const service: ChatService = TestBed.get(ChatService);
    const spyIo = spyOn(service, "getAllMessage").and.callFake(() =>
      of([{ name: "message", description: "test" }])
    );
    service.getAllMessage().subscribe(value => {
      expect(spyIo).toHaveBeenCalled();
      expect(value).toEqual([{ name: "message", description: "test" }]);
      done();
    });
  });
});
