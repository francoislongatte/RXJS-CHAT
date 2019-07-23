import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { IsExistName } from './isExistName.guard';
import { ChatComponent } from './chat/chat.component';

export const appRouteList: Routes = [
    {
      path: 'login',
      component: LoginComponent,
      canActivate: [
        IsExistName
      ]
    },
    {
      path: 'chat',
      component: ChatComponent,
      canActivate: [
        IsExistName
      ]
    },
    {
      path: 'settings',
      component: SettingsComponent,
      canActivate: [
        IsExistName
      ]
    },
    {
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRouteList)
    ]
})
export class AppRoutingModule {
}