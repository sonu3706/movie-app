import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MyMovieComponent } from "./components/my-movie/my-movie.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "my-movie", component: MyMovieComponent },
      { path: "trending", component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
