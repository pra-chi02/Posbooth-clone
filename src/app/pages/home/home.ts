import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
