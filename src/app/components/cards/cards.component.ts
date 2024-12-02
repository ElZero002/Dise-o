import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: false,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cards = Array(12).fill({
      header: 'Color invisible',
      subheader: 'Descubrimiento',
      image: 'https://pymstatic.com/144496/conversions/teoria-color-small-16_9.jpg',
      content:
          'Un grupo de científicos en Islandia asegura haber descubierto un nuevo color visible solo bajo la luz de la luna llena. El tono, llamado "lunarcril", ha generado controversia en la comunidad científica, ya que parece desaparecer al amanecer.',
  });
}