import {NgModule} from "@angular/core";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatChipsModule} from "@angular/material/chips";
import {MatInputModule} from "@angular/material/input";
@NgModule({
   exports:[
     MatSlideToggleModule,
     MatButtonModule,
     MatTableModule,
     MatIconModule,
     MatToolbarModule,
     MatCardModule,
     MatSliderModule,
     MatExpansionModule,
     MatSidenavModule,
     MatListModule,
     MatMenuModule,
     MatChipsModule,
     MatInputModule
   ]
})

export class  MaterialModule{}
