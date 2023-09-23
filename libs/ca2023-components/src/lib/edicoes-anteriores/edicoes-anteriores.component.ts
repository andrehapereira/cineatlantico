import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent, PageHeadingComponent } from '@cineatlantico/shared';
import { staggerChildrenTag } from '@cineatlantico/animations';

@Component({
  selector: 'cineatlantico-edicoes-anteriores',
  standalone: true,
  imports: [CommonModule, PageContainerComponent, PageHeadingComponent],
  templateUrl: './edicoes-anteriores.component.html',
  animations: [
    staggerChildrenTag('.editions-container', 'translateY(50%)')
  ],
})
export class EdicoesAnterioresComponent {
  editions = ['2016', '2017', '2018', '2019', '2020', '2021', '2022'];

  private editionsConfig = new Map()
                            .set('2016', {
                              website: undefined,
                            })
                            .set('2017', {
                              website: 'https://cineatlantico.eu/2017/#home',
                            })
                            .set('2018', {
                              website: 'https://cineatlantico.eu/2018/',
                            })
                            .set('2019', {
                              website: undefined,
                            })
                            .set('2020', {
                              website: 'https://cineatlantico.eu/2020/',
                            })
                            .set('2021', {
                              website: 'https://cineatlantico.eu/2021',
                            })
                            .set('2022', {
                              website: 'https://cineatlantico.eu/2022',
                            })

  hasWebsite(edition: string) {
    return !!this.editionsConfig.get(edition).website;
  }

  open(edition: string) {
    if (this.hasWebsite(edition)) {
      window.open(this.editionsConfig.get(edition).website, '_blank');
    }
  }
  
}
