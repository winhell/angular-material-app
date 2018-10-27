import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

import { NavigationModule } from './navigation/navigation.module';
import { HeaderModule } from './header/header.module';
import { AdminComponent } from './admin.component';
import { BrandComponent } from './brand/brand.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    RouterModule,
    TranslateModule.forRoot(),
    SharedModule,
    NavigationModule,
    HeaderModule
  ],
  declarations: [
    AdminComponent,
    BrandComponent,
    CustomizerComponent,
    FooterComponent
  ]
})
export class AdminModule {}
