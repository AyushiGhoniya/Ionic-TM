import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'splashscreen', 
    pathMatch: 'full' 
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'introduction',
    loadChildren: () => import('./pages/introduction-screen/introduction-screen.module').then( m => m.IntroductionScreenPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'postdetail/:categoryName/:post/:path',
    loadChildren: () => import('./pages/post-detail/post-detail.module').then( m => m.PostDetailPageModule)
  },
  {
    path: 'addpost',
    loadChildren: () => import('./pages/add-post/add-post.module').then( m => m.AddPostPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'rate-us-here',
    loadChildren: () => import('./pages/rate-us-here/rate-us-here.module').then( m => m.RateUsHerePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ]
})
export class AppRoutingModule { }
