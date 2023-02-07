import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { IdPipe } from '../pipes/id.pipe'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipCardComponent } from './starship-card/starship-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations:[
        HomeComponent,
        IdPipe,
        StarshipsComponent,
        StarshipCardComponent
    ],
    exports:[
        HomeComponent
    ],
    imports:[
        CommonModule,
        InfiniteScrollModule,
        RouterModule
    ]
})

export class componentsModule {}