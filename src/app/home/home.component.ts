import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {
	title: string = 'Tabloid';
	items = [
		{ title: 'Explore the Docs', link: 'https://angular.dev' },
		{ title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
		{ title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
		{ title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
		{ title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
	];
}
