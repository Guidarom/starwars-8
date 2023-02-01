import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';


@NgModule({
    declarations:[
        HomeComponent,
        StarshipsComponent
    ],
    exports:[
        HomeComponent
    ],
    imports:[
        CommonModule
    ]
})

export class componentsModule {}