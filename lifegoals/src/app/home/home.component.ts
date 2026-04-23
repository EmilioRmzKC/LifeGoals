import { Component } from '@angular/core';
import { MetaServiceService } from '../services/meta-service.service';
import { Meta } from '../models/meta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newMeta = '';
  metas: Meta[] = [];

  constructor(private metaService: MetaServiceService) {
    this.metaService.getMetas().subscribe(metas => this.metas = metas);
  }

  addMeta() {
    if (this.newMeta.trim()) {
      this.metaService.addMeta(this.newMeta.trim());
      this.newMeta = '';
    }
  }

  deleteMeta(id: string) {
    this.metaService.deleteMeta(id);
  }
}