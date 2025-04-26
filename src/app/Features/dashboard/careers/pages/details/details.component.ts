import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CareersService } from '../../../../../Core/services/careers.service';
import { Observable } from 'rxjs';
import { Career } from '../../interfaces/careers';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  career: Career | undefined;
  isLoading: boolean = true;
  error: string | undefined;

  constructor(
    private CareersService: CareersService,
    private activatedroute: ActivatedRoute ) {

    const title = this.activatedroute.snapshot.paramMap.get('title');
    
    
    this.CareersService.getByTitle(title!).subscribe({
      next: (career) => {
        this.isLoading = false;
        this.career = career;
        
      },
      error: (error) => {
        this.isLoading = false;
        this.error = error;
        
      }
    })
  }
}