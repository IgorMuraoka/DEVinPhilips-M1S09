import { Component } from '@angular/core';

@Component({
  selector: 'ex-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  personagem: any = {
    nome: 'Sheldon Cooper',
    imagem: './assets/tbbt.jpg',
    nomeAtor: 'James Joseph “Jim” Parsons',
    descricao:
      'Ator estadunidense mais conhecido por seu trabalho na série de televisão The Big Bang Theory como Sheldon Cooper. Jim já recebeu seis indicações ao Emmy Award na categoria de melhor ator em uma série de comédia, vencendo quatro.',
  };
}
