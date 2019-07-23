import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { NgxLinkifyjsModule } from "ngx-linkifyjs";
import { ToastrModule } from "ngx-toastr";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChatComponent } from "./chat/chat.component";
import { LoginComponent } from "./login/login.component";
import { SettingsComponent } from "./settings/settings.component";
import { ChatEffects } from "./shared/ngrx/effects/chat.effect";
import { ChatReducer } from "./shared/ngrx/reducers/chat.reducers";
import { EmbedVideo } from 'ngx-embed-video';
import { PickerModule } from '@ctrl/ngx-emoji-mart'

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    LoginComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-center"
    }),
    StoreModule.forRoot({ ChatReducer }),
    RouterModule.forRoot([]),
    EffectsModule.forRoot([ChatEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    NgxLinkifyjsModule.forRoot(),
    EmbedVideo.forRoot(),
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
