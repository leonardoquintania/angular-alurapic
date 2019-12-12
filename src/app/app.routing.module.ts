import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Authguard } from './core/auth/auth.guard';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { GlobalErrorComponent } from './errors/global-error/globa-error.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    { 
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },              
    { 
        path: 'user/:userName', 
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        },
        data: { 
            title: 'Timeline'
        }
    },
    { 
        path: 'p/add', 
        component: PhotoFormComponent,
        canActivate: [Authguard],
        data: { 
            title: 'Photo upload'
        }
    },
    {
        path: 'p/:photoId',
        component: PhotoDetailsComponent
    },
    {
        path: 'error',
        component: GlobalErrorComponent,
        data: { 
            title: 'Error'
        }
    },    
    { 
        path: 'not-found',
        component: NotFoundComponent,
        data: { 
            title: 'not found'
        }
    },
    {
        path: '**',
        redirectTo: 'not-found',
        data: { 
            title: 'not found'
        }
    }
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, { useHash: true } ) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

