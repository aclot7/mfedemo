import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
   
  ],
  imports: [
    
  ],
  providers: []
})
export class AuthServiceModule { 
  public static forRoot(): ModuleWithProviders<AuthServiceModule> {
    return {
        ngModule: AuthServiceModule,
        providers: [
            AuthService,
        ],
    };
}
}
