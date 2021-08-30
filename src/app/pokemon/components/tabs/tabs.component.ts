import { Component } from '@angular/core';

type Tabs = 'tab-favorites' | 'tab-pokemons'

@Component({
  selector: 'pokemon-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  
  public currentTab: Tabs = 'tab-pokemons'
  
}
