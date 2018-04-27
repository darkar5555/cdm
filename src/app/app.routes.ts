import { RouterModule, Routes } from '@angular/router';


//Importacion de componentes
import { HomeComponent } from './home/home.component';




const appRoutes: Routes = [

    // { path: '',                     
    //   component: WebComponent,
    //   children: [
    //     { path: 'home',             component: HomeComponent },
    //     { path: 'nosotros',         component: NosotrosComponent },
    //     { path: 'niveles',         component: NivelesComponent },
    //     { path: '',         redirectTo:'/home', pathMatch: 'full' },

    //   ]

    // },
    // { path: 'home', 
    //   component: WebComponent,
    //   children: [
    //       { path: 'nopagefound', component: NopagefoundComponent},
    //   ]
    // },
    { path: 'home',        component: HomeComponent},
    
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );