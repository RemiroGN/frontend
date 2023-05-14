import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { EditAboutMeComponent } from './components/aboutme/edit-about-me.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'nuevaexp', component: NewExperienciaComponent},
    {path: 'editexp/:id', component: EditExperienciaComponent},
    {path: 'nuevaedu', component: NeweducacionComponent},
    {path: 'editedu/:id', component: EditeducacionComponent},
    {path: 'newskill', component: NewSkillComponent},
    {path: 'editskill/:id', component: EditSkillComponent},
    {path: 'editabout/:id', component: EditAboutMeComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}