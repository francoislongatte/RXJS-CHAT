import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as io from "socket.io-client";
import { environment as env } from "src/environments/environment.prod";
import { Message } from "../models/message";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  private url = env.urlServer;
  private _socket;

  constructor() {
    this._socket = io(this.url);
  }

  get socket() {
    return this._socket;
  }

  public sendMessage(message: Message) {
    this.socket.emit("message", message);
  }

  public getNewMessage(): Observable<Message> {
    return Observable.create(observer => {
      this.socket.on("message", message => {
        observer.next(message);
      });
    });
  }

  public getAllMessage(): Observable<Message[]> {
    return Observable.create(observer => {
      this.socket.on("messages", messages => {
        observer.next(messages);
      });
    });
  }
}
