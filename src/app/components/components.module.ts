import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { IdPipe } from '../pipes/id.pipe'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipCardComponent } from './starship-card/starship-card.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations:[
        HomeComponent,
        IdPipe,
        StarshipsComponent,
        StarshipCardComponent,
        LoginComponent,
        RegisterComponent
    ],
    exports:[
        HomeComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InfiniteScrollModule,
        RouterModule,
        NgbModule
    ]
})

export class componentsModule {}